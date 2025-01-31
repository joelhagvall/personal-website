"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Footer } from "@/components/Footer";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function About() {
  return (
    <main className="min-h-screen bg-background text-white p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
      <StarsBackground />
      <ShootingStars />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
        >
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 gap-8">
          {/* Personal Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-000/20 to-cyan-500/20 rounded-lg blur opacity-75"></div>
            <Card className="p-6 bg-primary/5 transition-all duration-300 border border-primary/10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Who I Am</h3>
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative w-40 h-40 mb-6">
                      <div className="absolute -inset-0.5 bg-white/20 rounded-full blur opacity-75"></div>
                      <div className="relative rounded-full w-full h-full overflow-hidden border border-white/10">
                        <img
                          src="/media/selfie.jpeg"
                          alt="Profile Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-lg text-gray-300">
                      My name is Joel Hägvall, 24 years old (born 2000). I'm a software developer with a big interest in technology and
                      how it can be used to make a difference.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Where I Live</h3>
                  <motion.div 
                    className="relative p-4 rounded-lg bg-white/5 border border-white/10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">🇸🇪</div>
                      <div>
                        <h4 className="text-xl font-medium text-white mb-1">Stockholm, Sweden</h4>
                        <p className="text-gray-400">Born and raised.</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                          <span>59.3293° N</span>
                          <span>•</span>
                          <span>18.0686° E</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>


                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">My Interests</h3>
                  <ul className="text-lg text-gray-300 space-y-4">
                    <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 h-2 w-2 mt-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />                      <div>
                        <p>For as long as I can remember, I've always been interested in technology. Today i'm also drawn to tech that makes a difference:</p>
                        <ul className="ml-6 mt-2 space-y-2">
                          <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 h-2 w-2 mt-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />                            <span>Blockchain technology fascinates me, the use of a distributed ledger together with cryptography that enables transparency, immutability and security - which I believe will solve some of the major issues today in the digital world when it comes to managing and securing data of all forms.</span>
                          </li>
                          <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 h-2 w-2 mt-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />                            <span>The use of artificial intelligence, especially for health and optimizing mundane human tasks. AI agents are very fascinating.</span>
                          </li>
                          <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 h-2 w-2 mt-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />                            <span>Blockchain together with smart contracts, to perform more error proof, immutable and public transactions.</span>
                          </li>
                          <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 h-2 w-2 mt-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />                            <span>Blind computing with multiple PETs (Privacy Enhancing Technologies) on private and sensitive data, especially while using AI.</span>
                          </li>
                          <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 h-2 w-2 mt-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />                          <span>
                            Thinking of new software ideas, iterating on them and actually building them. Open sourced on my{" "}
                            <a
                              href="https://github.com/joelhagvall"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 font-medium text-gray-300 hover:text-white transition-colors underline decoration-white/50 hover:decoration-cyan-500 relative z-10"
                            >
                              GitHub
                              <GitHubLogoIcon className="w-4 h-4" />
                            </a> profile.
                          </span>
                        </li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 h-2 w-2 mt-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />                      <span>I'm also interested in other things, like:</span>
                    </li>
                    <ul className="ml-6 space-y-2">
                      <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 h-2 w-2 mt-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />                        <span>Physical fitness and working out.</span>
                      </li>
                      <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 h-2 w-2 mt-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />                        <span>Reading and learning new things through books and podcasts.</span>
                      </li>
                      <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 h-2 w-2 mt-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />                        <span>Investing in different markets and learning about the human psychology connected to it.</span>
                      </li>
                      <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 h-2 w-2 mt-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />                        <span>Optimizing my time - this by being clear in my communication, having short meetings with focus on quality and respect.</span>
                      </li>
                      <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 h-2 w-2 mt-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />                        <span>Music and movies with a deeper meaning or story.</span>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-000/20 to-cyan-500/20 rounded-lg blur opacity-75"></div>
            <Card className="p-6 bg-primary/5 transition-all duration-300 border border-primary/10">
              <p className="text-gray-400 text-center mb-6">
                Some of my favourite media, swipe through the images!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Movies Section */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Favorite Movies</h3>
                  <div className="relative h-[500px] flex justify-center">
                    <motion.div
                      className="absolute w-[250px] cursor-pointer overflow-hidden rounded-lg touch-none"
                      drag="x"
                      dragConstraints={{ left: -100, right: 100 }}
                      dragElastic={0.2}
                      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                      initial={{ 
                        x: 0, 
                        y: 0,
                        zIndex: 5,
                        rotateZ: -5
                      }}
                      whileHover={{ 
                        x: 0,
                        y: -20,
                        zIndex: 10,
                        rotateZ: 0,
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ 
                        cursor: "grabbing",
                        zIndex: 20,
                        scale: 1.05,
                        rotateZ: 0
                      }}
                    >
                      <div className="relative group">
                        <img 
                          src="/media/interstellar-poster.jpg"
                          alt="Interstellar (2014)"
                          className="w-full shadow-xl"
                          draggable="false"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.2)_0%,_transparent_60%)] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-sm font-medium">Interstellar (2014)</p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="absolute w-[250px] cursor-pointer overflow-hidden rounded-lg touch-none"
                      drag="x"
                      dragConstraints={{ left: -100, right: 100 }}
                      dragElastic={0.2}
                      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                      initial={{ 
                        x: -40, 
                        y: 20,
                        zIndex: 4,
                        rotateZ: -3
                      }}
                      whileHover={{ 
                        x: 0,
                        y: -20,
                        zIndex: 10,
                        rotateZ: 0,
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ 
                        cursor: "grabbing",
                        zIndex: 20,
                        scale: 1.05,
                        rotateZ: 0
                      }}
                    >
                      <div className="relative group">
                        <img 
                          src="/media/hp3-poster.jpg"
                          alt="Harry Potter and the Prisoner of Azkaban (2004)"
                          className="w-full shadow-xl"
                          draggable="false"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.2)_0%,_transparent_60%)] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-sm font-medium">Harry Potter and the Prisoner of Azkaban (2004)</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Music Section */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Favorite Music</h3>
                  <div className="relative h-[500px] flex justify-center">
                    <motion.div
                      className="absolute w-[250px] cursor-pointer overflow-hidden rounded-lg touch-none"
                      drag="x"
                      dragConstraints={{ left: -100, right: 100 }}
                      dragElastic={0.2}
                      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                      initial={{ 
                        x: 0, 
                        y: 0,
                        zIndex: 5,
                        rotateZ: -5
                      }}
                      whileHover={{ 
                        x: 0,
                        y: -20,
                        zIndex: 10,
                        rotateZ: 0,
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ 
                        cursor: "grabbing",
                        zIndex: 20,
                        scale: 1.05,
                        rotateZ: 0
                      }}
                    >
                      <div className="relative group">
                        <img 
                          src="/media/parachutes.png"
                          alt="Parachutes - Coldplay (2000)"
                          className="w-full shadow-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.2)_0%,_transparent_60%)] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-sm font-medium">Parachutes - Coldplay (2000)</p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="absolute w-[250px] cursor-pointer overflow-hidden rounded-lg touch-none"
                      drag="x"
                      dragConstraints={{ left: -100, right: 100 }}
                      dragElastic={0.2}
                      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                      initial={{ 
                        x: -40, 
                        y: 20,
                        zIndex: 4,
                        rotateZ: -3
                      }}
                      whileHover={{ 
                        x: 0,
                        y: -20,
                        zIndex: 10,
                        rotateZ: 0,
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ 
                        cursor: "grabbing",
                        zIndex: 20,
                        scale: 1.05,
                        rotateZ: 0
                      }}
                    >
                      <div className="relative group">
                        <img 
                          src="/media/onerepublic.jpg"
                          alt="Waking Up - OneRepublic (2013)"
                          className="w-full shadow-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.2)_0%,_transparent_60%)] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-sm font-medium">Waking Up - OneRepublic (2013)</p>
                        </div>
                      </div>
                    </motion.div>
                
                    <motion.div
                      className="absolute w-[250px] cursor-pointer overflow-hidden rounded-lg touch-none"
                      drag="x"
                      dragConstraints={{ left: -100, right: 100 }}
                      dragElastic={0.2}
                      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                      initial={{ 
                        x: -80, 
                        y: 40,
                        zIndex: 3,
                        rotateZ: -1
                      }}
                      whileHover={{ 
                        x: 0,
                        y: -20,
                        zIndex: 10,
                        rotateZ: 0,
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ 
                        cursor: "grabbing",
                        zIndex: 20,
                        scale: 1.05,
                        rotateZ: 0
                      }}
                    >
                      <div className="relative group">
                        <img 
                          src="/media/lana.png"
                          alt="Paradise - Lana Del Rey (2012)"
                          className="w-full shadow-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.2)_0%,_transparent_60%)] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-sm font-medium">Paradise - Lana Del Rey (2012)</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Books Section */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Favorite Books</h3>
                  <div className="relative h-[500px] flex justify-center">

                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}