import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { AnimatedCard } from "@/components/AnimatedCard";
import { GitHubCalendarLive } from "@/components/home/GitHubCalendarLive";
import { HOME_CONTENT } from "@/data/content";
import { SOCIAL } from "@/data/site";
import { compactCalendar, getGitHubContributionCalendar } from "@/lib/github";
import { LINK_STYLES } from "@/lib/styles";

export async function GitHubCalendarCard() {
  // Build-time snapshot used as initial render; GitHubCalendarLive refreshes
  // it client-side so the graph stays current between deploys
  const calendar = await getGitHubContributionCalendar(SOCIAL.github.username);

  return (
    <AnimatedCard
      as="section"
      aria-labelledby="github-activity-heading"
      className="col-span-full"
      cardClassName="flex flex-col gap-4 sm:gap-5"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <h2 id="github-activity-heading" className="text-xl font-semibold sm:text-2xl">
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

      <GitHubCalendarLive
        initial={calendar ? compactCalendar(calendar) : null}
        username={SOCIAL.github.username}
      />
    </AnimatedCard>
  );
}
