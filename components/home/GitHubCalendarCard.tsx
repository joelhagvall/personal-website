import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { AnimatedCard } from "@/components/AnimatedCard";
import { HOME_CONTENT } from "@/data/content";
import { SOCIAL } from "@/data/site";
import { getGitHubContributionCalendar } from "@/lib/github";
import { LINK_STYLES } from "@/lib/styles";

const MONTH_FORMATTER = new Intl.DateTimeFormat("en-US", { month: "short" });
const DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
const WEEKDAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];
const CONTRIBUTION_LEVELS = [
  "rgba(148, 163, 184, 0.08)",
  "rgba(125, 211, 252, 0.24)",
  "rgba(56, 189, 248, 0.44)",
  "rgba(34, 211, 238, 0.7)",
  "rgba(59, 130, 246, 0.95)",
] as const;

function getContributionLevel(count: number) {
  if (count <= 0) {
    return 0;
  }

  if (count <= 2) {
    return 1;
  }

  if (count <= 5) {
    return 2;
  }

  if (count <= 9) {
    return 3;
  }

  return 4;
}

function getContributionColor(count: number) {
  return CONTRIBUTION_LEVELS[getContributionLevel(count)];
}

function getContributionBorderColor(count: number) {
  const level = getContributionLevel(count);

  if (level === 0) {
    return "rgba(255, 255, 255, 0.08)";
  }

  if (level === 4) {
    return "rgba(147, 197, 253, 0.9)";
  }

  if (level === 3) {
    return "rgba(103, 232, 249, 0.75)";
  }

  if (level === 2) {
    return "rgba(125, 211, 252, 0.55)";
  }

  return "rgba(125, 211, 252, 0.35)";
}

function getContributionShadow(count: number) {
  const level = getContributionLevel(count);

  if (level === 0) {
    return "none";
  }

  if (level === 4) {
    return "0 0 16px rgba(59, 130, 246, 0.35)";
  }

  if (level === 3) {
    return "0 0 14px rgba(34, 211, 238, 0.26)";
  }

  return "0 0 10px rgba(56, 189, 248, 0.18)";
}

function getMonthLabels(firstDays: string[]) {
  let previousMonth = -1;

  return firstDays.map((firstDay) => {
    const month = new Date(firstDay).getMonth();

    if (month === previousMonth) {
      return "";
    }

    previousMonth = month;
    return MONTH_FORMATTER.format(new Date(firstDay));
  });
}

function normalizeContributionDays(
  days: { contributionCount: number; date: string; weekday: number }[]
) {
  return Array.from({ length: 7 }, (_, weekday) => {
    return days.find((day) => day.weekday === weekday) ?? null;
  });
}

function getTooltipPositionClass(weekIndex: number, totalWeeks: number) {
  if (weekIndex <= 1) {
    return "left-0 translate-x-0";
  }

  if (weekIndex >= totalWeeks - 2) {
    return "right-0 left-auto translate-x-0";
  }

  return "left-1/2 -translate-x-1/2";
}

function getTooltipVerticalClass(weekday: number) {
  if (weekday <= 1) {
    return "top-full mt-2";
  }

  return "bottom-full mb-2";
}

export async function GitHubCalendarCard() {
  const hasGitHubToken = Boolean(
    process.env["GITHUB_TOKEN"] ?? process.env["GITHUB_ACCESS_TOKEN"]
  );
  const calendar = await getGitHubContributionCalendar(SOCIAL.github.username);

  return (
    <AnimatedCard
      delay={0.6}
      className="col-span-full"
      cardClassName="flex flex-col gap-4 sm:gap-5"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold sm:text-2xl">
            {HOME_CONTENT.githubActivity.heading}
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {HOME_CONTENT.githubActivity.description}
          </p>
        </div>
        <a
          href={SOCIAL.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 self-start text-sm ${LINK_STYLES.primary}`}
        >
          <GitHubLogoIcon aria-hidden="true" />
          {HOME_CONTENT.githubActivity.viewProfile}
        </a>
      </div>

      {calendar ? (
        <GitHubCalendar calendar={calendar} />
      ) : (
        <div className="space-y-3 rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <p className="text-sm text-muted-foreground">
            {HOME_CONTENT.githubActivity.unavailable}
          </p>
          {!hasGitHubToken && (
            <p className="text-sm text-muted-foreground">
              {HOME_CONTENT.githubActivity.missingToken}
            </p>
          )}
        </div>
      )}
    </AnimatedCard>
  );
}

function GitHubCalendar({
  calendar,
}: {
  calendar: Awaited<ReturnType<typeof getGitHubContributionCalendar>>;
}) {
  if (!calendar) {
    return null;
  }

  const monthLabels = getMonthLabels(calendar.weeks.map((week) => week.firstDay));

  return (
    <>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {calendar.totalContributions}
          </p>
          <p className="text-sm leading-tight text-muted-foreground sm:text-base">
            {HOME_CONTENT.githubActivity.totalSuffix}
          </p>
        </div>
        <div className="hidden items-center gap-2 text-xs text-gray-400 md:flex">
          <span>{HOME_CONTENT.githubActivity.legendLess}</span>
          {CONTRIBUTION_LEVELS.map((color) => (
            <span
              key={color}
              className="h-3 w-3 rounded-[4px] border"
              style={{
                backgroundColor: color,
                borderColor:
                  color === CONTRIBUTION_LEVELS[0]
                    ? "rgba(255, 255, 255, 0.08)"
                    : "rgba(255, 255, 255, 0.14)",
              }}
              aria-hidden="true"
            />
          ))}
          <span>{HOME_CONTENT.githubActivity.legendMore}</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between md:hidden">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gray-500">
            {HOME_CONTENT.githubActivity.swipeHint}
          </p>
          <div className="flex items-center gap-1.5 text-gray-500" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-current/55" />
            <span className="h-1.5 w-5 rounded-full bg-current/35" />
          </div>
        </div>

        <div className="relative">
          <div className="-mx-2 overflow-x-auto px-2 pb-2 sm:mx-0 sm:px-0">
        <div className="inline-flex min-w-max gap-2.5 sm:gap-3">
          <div className="grid grid-rows-7 gap-0.5 pt-5 text-[10px] uppercase tracking-[0.2em] text-gray-500 sm:gap-1 sm:pt-6">
            {WEEKDAY_LABELS.map((label, index) => (
              <span
                key={`${label}-${index}`}
                className="flex h-2.5 items-center sm:h-3.5"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="space-y-1.5">
            <div className="flex gap-0.5 px-[1px] text-[10px] uppercase tracking-[0.2em] text-gray-500 sm:gap-1">
              {monthLabels.map((label, index) => (
                <span
                  key={`${calendar.weeks[index]?.firstDay}-${label || index}`}
                  className="w-2.5 text-left sm:w-3.5"
                >
                  {label}
                </span>
              ))}
            </div>

            <div
              className="flex gap-0.5 sm:gap-1"
              role="img"
              aria-label={`${calendar.totalContributions} GitHub contributions in the last year`}
            >
              {calendar.weeks.map((week, weekIndex) => (
                <div
                  key={week.firstDay}
                  className="grid grid-rows-7 gap-0.5 sm:gap-1"
                  aria-hidden="true"
                >
                  {normalizeContributionDays(week.contributionDays).map((day, index) =>
                    day ? (
                      <div key={day.date} className="group relative">
                        <div
                          className="h-2.5 w-2.5 rounded-[4px] border sm:h-3.5 sm:w-3.5"
                          style={{
                            backgroundColor: getContributionColor(day.contributionCount),
                            borderColor: getContributionBorderColor(day.contributionCount),
                            boxShadow: getContributionShadow(day.contributionCount),
                          }}
                          aria-label={`${day.contributionCount} contribution${
                            day.contributionCount === 1 ? "" : "s"
                          } on ${DATE_FORMATTER.format(new Date(day.date))}`}
                        />
                        <div
                          className={`pointer-events-none absolute z-20 hidden whitespace-nowrap rounded-md border border-white/10 bg-black/90 px-2.5 py-1.5 text-[11px] font-medium text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm group-hover:block ${getTooltipPositionClass(weekIndex, calendar.weeks.length)} ${getTooltipVerticalClass(day.weekday)}`}
                        >
                          {day.contributionCount} contribution
                          {day.contributionCount === 1 ? "" : "s"} on{" "}
                          {DATE_FORMATTER.format(new Date(day.date))}
                        </div>
                      </div>
                    ) : (
                      <div
                        key={`${week.firstDay}-empty-${index}`}
                        className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5"
                      />
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-400 md:hidden">
        <span>{HOME_CONTENT.githubActivity.legendLess}</span>
        {CONTRIBUTION_LEVELS.map((color) => (
          <span
            key={`${color}-mobile`}
            className="h-3 w-3 rounded-[4px] border"
            style={{
              backgroundColor: color,
              borderColor:
                color === CONTRIBUTION_LEVELS[0]
                  ? "rgba(255, 255, 255, 0.08)"
                  : "rgba(255, 255, 255, 0.14)",
            }}
            aria-hidden="true"
          />
        ))}
        <span>{HOME_CONTENT.githubActivity.legendMore}</span>
      </div>
    </>
  );
}
