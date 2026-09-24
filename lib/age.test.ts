import { getAge, msUntilStockholmMidnight } from "./age";

describe("getAge", () => {
  // June is summer time in Stockholm (UTC+2), so midnight on 2 June is 22:00 UTC on 1 June
  it("is still 26 one second before midnight on 2 June 2027 in Stockholm", () => {
    expect(getAge(new Date("2027-06-01T21:59:59Z"))).toBe(26);
  });

  it("turns 27 at 00:00 on 2 June 2027 in Stockholm", () => {
    expect(getAge(new Date("2027-06-01T22:00:00Z"))).toBe(27);
  });

  it("uses Stockholm's date regardless of the visitor's own time zone", () => {
    // 23:30 UTC on 1 June is already 01:30 on 2 June in Stockholm
    expect(getAge(new Date("2027-06-01T23:30:00Z"))).toBe(27);
  });

  it("is 26 for the rest of 2026 after the birthday", () => {
    expect(getAge(new Date("2026-09-24T12:00:00Z"))).toBe(26);
    expect(getAge(new Date("2026-12-31T12:00:00Z"))).toBe(26);
  });
});

describe("msUntilStockholmMidnight", () => {
  it("counts down to the next Stockholm midnight", () => {
    // 21:00 UTC in June is 23:00 in Stockholm
    expect(msUntilStockholmMidnight(new Date("2027-06-01T21:00:00Z"))).toBe(60 * 60 * 1000);
  });
});
