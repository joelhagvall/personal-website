"use client";

import { motion } from "framer-motion";
import { GithubIcon, Terminal, Briefcase, Code, ExternalLink, Code2, Headphones, Smartphone } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Footer } from "@/components/Footer";

export default function Projects() {
  return (
    <main className="min-h-screen bg-background text-white p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
          <div className="absolute inset-0 pointer-events-none">
            <StarsBackground />
            <ShootingStars />
          </div>
          
          <div className="relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            >
              Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-400 text-center mb-8"
            >
              Some of my personal and academic projects - more found on my{" "}
              <Link
                href="https://github.com/joelhagvall"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gray-300 hover:text-white transition-colors underline decoration-white/30 hover:decoration-white/70"
              >
                GitHub
                <GitHubLogoIcon className="w-4 h-4" />
              </Link>
            </motion.p>
    
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6 bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                      <Code className="text-primary" size={24} />
                      Tor Onion Site Scraper
                    </h2>
                    
                    <p className="text-muted-foreground text-lg">
                      This project is a Python program that crawls websites on the Tor network, retrieves HTML pages,
                      extracts classes and saves them to CSV files for easy analysis using packages such as matplotlib and pandas.
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Tor", "matplotlib", "pandas", "beautifulsoup"].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
    
                    <div className="flex items-center gap-4">
                      <Link 
                        href="https://github.com/joelhagvall/tor-onion-site-scraper" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                      >
                        <GitHubLogoIcon />
                        Source Code
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
    
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="p-6 bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                      <Smartphone className="text-primary" size={24} />
                      Carspotter
                    </h2>
                    
                    <p className="text-muted-foreground text-lg">
                      Carspotter is a social media platform for car enthusiasts built by me
                      and a group of students for the course "Project in Software Engineering" at Stockholm University, Spring term 2023. <br></br>Users can
                      upload images of cars they've seen, keep track of them on a map, earn badges/achievements and look at profiles
                      and the cars they've seen on a grid.
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {["Flutter", "Google Maps API", "Plate Recognizer API", "Firebase"].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
    
                    <div className="flex items-center gap-4">
                    <Link 
                        href="https://github.com/joelhagvall/PVT15-Project" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                      >
                        <GitHubLogoIcon/>
                        Source Code
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
    
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="p-6 bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                      <Headphones className="text-primary" size={24} />
                      Spotify Playlist Generator
                    </h2>
                    
                    <p className="text-muted-foreground text-lg">
                      Python program that makes a random Spotify playlist, with a simple GUI.
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {["Python", "PySimpleGUI", "Spotify API"].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
    
                    <div className="flex items-center gap-4">
                      <Link 
                        href="https://github.com/joelhagvall/spotify-random-playlist-generator"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                      >
                        <GitHubLogoIcon />
                        Source Code
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
      </div>
      <Footer/>
    </main>
  );
}