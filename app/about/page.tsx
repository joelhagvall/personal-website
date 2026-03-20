import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { MediaCarousel } from "@/components/MediaCarousel";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  TEXT_STYLES,
  GLOW_STYLES,
  CARD_STYLES,
  LINK_STYLES,
} from "@/lib/styles";
import { profile, techInterests, otherInterests } from "@/data/about";
import { movies, music, books } from "@/data/media";
import { ABOUT_CONTENT } from "@/data/content";

function BulletPoint({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="flex-shrink-0 h-2 w-2 mt-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        aria-hidden="true"
      />
      {children}
    </li>
  );
}

export default function About() {
  return (
    <main className="min-h-screen text-white p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 text-center ${TEXT_STYLES.gradientHeading}`}>
          {ABOUT_CONTENT.pageTitle}
        </h1>

        <div className="grid grid-cols-1 gap-8">
          {/* Personal Info Section */}
          <div className="relative">
            <div className={GLOW_STYLES.card}></div>
            <Card className={CARD_STYLES.base}>
              <div className="space-y-6">
                <div>
                  <h2 className={TEXT_STYLES.sectionTitle}>
                    {ABOUT_CONTENT.sections.whoIAm}
                  </h2>
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative w-40 h-40 mb-6">
                      <div className={GLOW_STYLES.avatar} aria-hidden="true"></div>
                      <div className="relative rounded-full w-full h-full overflow-hidden border border-white/10">
                        <img
                          src={profile.avatar}
                          alt={`${profile.name}'s profile photo`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <p className={TEXT_STYLES.bodyText}>
                      My name is {profile.name}, {profile.age} years old (born{" "}
                      {profile.birthYear}). {profile.bio}
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className={TEXT_STYLES.sectionTitle}>
                    {ABOUT_CONTENT.sections.whereILive}
                  </h2>
                  <div className="relative p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{profile.location.flag}</div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-1">
                          {profile.location.city}, {profile.location.country}
                        </h3>
                        <p className={TEXT_STYLES.mutedText}>
                          {profile.location.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                          <span>{profile.location.coordinates.lat}</span>
                          <span>•</span>
                          <span>{profile.location.coordinates.lng}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className={TEXT_STYLES.sectionTitle}>
                    {ABOUT_CONTENT.sections.myInterests}
                  </h2>
                  <ul className={`${TEXT_STYLES.bodyText} space-y-4`}>
                    <BulletPoint>
                      <div>
                        <p>{ABOUT_CONTENT.interests.techIntro}</p>
                        <ul className="ml-6 mt-2 space-y-2">
                          {techInterests.map((interest, index) => (
                            <BulletPoint key={index}>
                              <span>{interest}</span>
                            </BulletPoint>
                          ))}
                          <BulletPoint>
                            <span>
                              {ABOUT_CONTENT.interests.buildingIntro}{" "}
                              <a
                                href={profile.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${ABOUT_CONTENT.interests.githubLink} (opens in new tab)`}
                                className={`inline-flex items-center gap-1 ${LINK_STYLES.underline} relative z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm`}
                              >
                                {ABOUT_CONTENT.interests.githubLink}
                                <GitHubLogoIcon className="w-4 h-4" aria-hidden="true" />
                              </a>{" "}
                              {ABOUT_CONTENT.interests.githubSuffix}
                            </span>
                          </BulletPoint>
                        </ul>
                      </div>
                    </BulletPoint>
                    <BulletPoint>
                      <div>
                        <span>{ABOUT_CONTENT.interests.otherIntro}</span>
                        <ul className="ml-6 mt-2 space-y-2">
                          {otherInterests.map((interest, index) => (
                            <BulletPoint key={index}>
                              <span>{interest}</span>
                            </BulletPoint>
                          ))}
                        </ul>
                      </div>
                    </BulletPoint>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Media Section */}
          <div className="relative">
            <div className={GLOW_STYLES.card}></div>
            <Card className={CARD_STYLES.base}>
              <h2 className="text-2xl font-semibold mb-2 text-white text-center">
                My Favorites
              </h2>
              <p className={`${TEXT_STYLES.mutedText} text-center mb-6`}>
                {ABOUT_CONTENT.media.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <MediaCarousel
                  title={ABOUT_CONTENT.media.movies}
                  items={movies}
                />
                <MediaCarousel
                  title={ABOUT_CONTENT.media.music}
                  items={music}
                  aspectRatio="square"
                />
                <MediaCarousel
                  title={ABOUT_CONTENT.media.books}
                  items={books}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
