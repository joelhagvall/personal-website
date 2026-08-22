/**
 * The contribution calendar is SSR'd into the homepage. Keep its markup lean:
 * colours and tooltips come from data attributes + CSS, not per-cell inline
 * styles and tooltip nodes (which made the homepage HTML ~440 KB).
 */
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { compactCalendar, contributionsToCalendar } from "@/lib/github";
import { GitHubCalendarLive } from "./GitHubCalendarLive";

const days = Array.from({ length: 365 }, (_, i) => {
  const date = new Date(Date.UTC(2025, 7, 23 + i));
  return { date: date.toISOString().slice(0, 10), count: (i * 7) % 13 };
});
const calendar = contributionsToCalendar(days, 2746);

describe("GitHubCalendarLive", () => {
  const html = renderToStaticMarkup(
    createElement(GitHubCalendarLive, {
      initial: compactCalendar(calendar),
      username: "joelhagvall",
    })
  );

  it("renders one cell per day with level and tooltip as data attributes", () => {
    const cells = html.match(/<div[^>]*class="gh-day[^"]*"[^>]*>/g) ?? [];
    expect(cells).toHaveLength(days.length);
    for (const cell of cells.slice(0, 20)) {
      expect(cell).toMatch(/data-level="[0-4]"/);
      expect(cell).toMatch(/data-tip="\d+ contributions? on /);
      expect(cell).toMatch(/data-tip-x="[lcr]"/);
      expect(cell).toMatch(/data-tip-y="[tb]"/);
      expect(cell).not.toMatch(/style=/);
    }
  });

  it("stays under ~160 bytes of markup per day, wrappers included", () => {
    expect(html.length / days.length).toBeLessThan(160);
  });

  it("shows the total and the fallback when there is no data", () => {
    expect(html).toContain("2746");
    const empty = renderToStaticMarkup(
      createElement(GitHubCalendarLive, { initial: null, username: "x" })
    );
    expect(empty).toContain("unavailable");
  });
});
