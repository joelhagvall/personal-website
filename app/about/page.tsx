"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { MediaCarousel } from "@/components/MediaCarousel";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { fadeInUp, withDelay, cardHover } from "@/lib/animations";
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
      <span className="flex-shrink-0 h-2 w-2 mt-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
      {children}
    </li>
  );
}

export default function About() {
  return (
    <main className="min-h-screen text-white p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          {...fadeInUp}
          transition={withDelay(0)}
          className={`text-4xl font-bold mb-8 text-center ${TEXT_STYLES.gradientHeading}`}
        >
          {ABOUT_CONTENT.pageTitle}
        </motion.h1>

        <div className="grid grid-cols-1 gap-8">
          {/* Personal Info Section */}
          <motion.div
            {...fadeInUp}
            transition={withDelay(0.2)}
            className="relative"
          >
            <div className={GLOW_STYLES.card}></div>
            <Card className={CARD_STYLES.base}>
              <div className="space-y-6">
                <div>
                  <h3 className={TEXT_STYLES.sectionTitle}>
                    {ABOUT_CONTENT.sections.whoIAm}
                  </h3>
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative w-40 h-40 mb-6">
                      <div className={GLOW_STYLES.avatar}></div>
                      <div className="relative rounded-full w-full h-full overflow-hidden border border-white/10">
                        <img
                          src={profile.avatar}
                          alt="Profile Avatar"
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
                  <h3 className={TEXT_STYLES.sectionTitle}>
                    {ABOUT_CONTENT.sections.whereILive}
                  </h3>
                  <motion.div
                    className="relative p-4 rounded-lg bg-white/5 border border-white/10"
                    whileHover={cardHover}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{profile.location.flag}</div>
                      <div>
                        <h4 className="text-xl font-medium text-white mb-1">
                          {profile.location.city}, {profile.location.country}
                        </h4>
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
                  </motion.div>
                </div>

                <div>
                  <h3 className={TEXT_STYLES.sectionTitle}>
                    {ABOUT_CONTENT.sections.myInterests}
                  </h3>
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
                                className={`inline-flex items-center gap-1 ${LINK_STYLES.underline} relative z-10`}
                              >
                                {ABOUT_CONTENT.interests.githubLink}
                                <GitHubLogoIcon className="w-4 h-4" />
                              </a>{" "}
                              {ABOUT_CONTENT.interests.githubSuffix}
                            </span>
                          </BulletPoint>
                        </ul>
                      </div>
                    </BulletPoint>
                    <BulletPoint>
                      <span>{ABOUT_CONTENT.interests.otherIntro}</span>
                    </BulletPoint>
                    <ul className="ml-6 space-y-2">
                      {otherInterests.map((interest, index) => (
                        <BulletPoint key={index}>
                          <span>{interest}</span>
                        </BulletPoint>
                      ))}
                    </ul>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Media Section */}
          <motion.div
            {...fadeInUp}
            transition={withDelay(0.3)}
            className="relative"
          >
            <div className={GLOW_STYLES.card}></div>
            <Card className={CARD_STYLES.base}>
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
                />
                <MediaCarousel
                  title={ABOUT_CONTENT.media.books}
                  items={books}
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
