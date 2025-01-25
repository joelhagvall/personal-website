"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon, Terminal, Briefcase, Newspaper, Code, ExternalLink, Code2, MoveRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary to-accent opacity-5 animate-gradient-x"></div>
        
        <StarsBackground />
        <ShootingStars />

        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
          >
            Joel Hägvall
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Software Developer and tech enthusiast.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <a href="https://github.com/joelhagvall" 
               target="_blank" 
               rel="noopener noreferrer"
               aria-label="Visit my GitHub profile"
               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/joel-h%C3%A4gvall-810601147/" 
               target="_blank" 
               rel="noopener noreferrer"
               aria-label="Visit my LinkedIn profile"
               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50">
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <Link href="/about"
               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm font-medium">
              About Me
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* About Me - Spans 6 columns */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-full"
            >
              <Card className="p-6 bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10">
                <div className="flex items-start gap-6">
                  <div className="relative shrink-0">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/media/selfie.jpeg" alt="Joel Hägvall" />
                      <AvatarFallback>JH</AvatarFallback>
                    </Avatar>
                    <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
                    <p className="text-muted-foreground text-lg">
                      Hi, my name is Joel Hägvall. I'm a software developer and tech enthusiast, welcome to my portfolio!
                      If you want to know more about me and my interests, you can look at the <Link href="/about" className="font-medium text-primary hover:text-primary/80 underline underline-offset-4">About Me</Link> section.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-full md:col-span-2"
            >
              <Card className="p-6 h-full bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <h2 className="text-primary" />
                  Tech Stack
                </h2>
                <div className="flex justify-center">
                  <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                    <div className="w-16 h-16 p-3 flex items-center justify-center">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                        alt="Java"
                        className="w-full h-full"
                      />
                    </div>
                    
                    <div className="w-16 h-16 p-3 flex items-center justify-center">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                        alt="Python"
                        className="w-full h-full"
                      />
                    </div>
                    
                    <div className="w-16 h-16 p-3 flex items-center justify-center">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        alt="React"
                        className="w-full h-full"
                      />
                    </div>
                    
                    <div className="w-16 h-16 p-3 flex items-center justify-center">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                        alt="Next.js"
                        className="w-full h-full dark:invert"
                      />
                    </div>
                    
                    <div className="w-16 h-16 p-3 flex items-center justify-center">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                        alt="PHP"
                        className="w-full h-full"
                      />
                    </div>
                    
                    <div className="w-16 h-16 p-3 flex items-center justify-center">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
                        alt="Swift"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Featured Project - Spans 4 columns */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-full md:col-span-4"
            >
              <Card className="p-6 h-full bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <h2 className="text-primary"/>
                  Featured Project
                </h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Tor Onion Site Scraper</h3>
                  <p className="text-muted-foreground text-lg">
                    A Python program developed for crawling websites on the Tor network, for educational purposes. 
                  </p>
                  <div className="flex items-center gap-4">
                    <Link 
                      href="https://github.com/joelhagvall/tor-onion-site-scraper" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                    >
                      <GithubIcon size={16} />
                      Source Code
                    </Link>
                    <Link 
                      href="/projects" 
                      className="ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-medium"
                    >
                      More Projects
                      <MoveRight size={16} />
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>


            {/* Experience - Modified to span full width on mobile, 6 columns on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-full md:col-span-6"
            >
              <Card className="p-6 h-full bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <h2 className="text-primary" />
                Experience
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">Senior Developer</h3>
                    <p className="text-muted-foreground">Company Name • 2020-Present</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Full Stack Developer</h3>
                    <p className="text-muted-foreground">Previous Company • 2018-2020</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}