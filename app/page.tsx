"use client";

import { motion } from "framer-motion";
import { LinkedinIcon, MailIcon, MoveRight, FileText } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Footer } from "@/components/Footer";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary to-accent opacity-5 animate-gradient-x" />
        
        <StarsBackground />
        <ShootingStars />

        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-relaxed py-2"
          >
            Joel Hägvall
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            {/* Text here */}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="https://github.com/joelhagvall"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <GitHubLogoIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/joel-h%C3%A4gvall-810601147/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            
            <Popover>
              <PopoverTrigger asChild>
                <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50">
                  <MailIcon className="w-6 h-6" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-black/50 backdrop-blur-xl border border-white/10">
                <div className="space-y-3 p-1">
                  <h4 className="font-medium text-white">Open Mail App?</h4>
                  <p className="text-sm text-gray-300">
                    This will open your default email application to send a message to: joel.hagvall1@gmail.com
                  </p>
                  <a
                    href="mailto:joel.hagvall1@gmail.com"
                    className="block w-full text-center py-2 px-4 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-white font-medium"
                  >
                    Continue
                  </a>
                </div>
              </PopoverContent>
            </Popover>
            
            <Link
              href="/about"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm font-medium px-4"
            >
              About Me
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Introduction Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-full"
            >
              <Card className="p-6 h-full bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10">
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
                      Hi, I'm Joel Hägvall. I'm a software developer and tech enthusiast. Welcome to my website!
                      Check out the <Link href="/about" className="font-medium text-primary hover:text-primary/80 underline underline-offset-4">About Me</Link> page to get to know me better.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Tech Stack Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-full md:col-span-2"
            >
              <Card className="p-6 h-full bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10">
                <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
                <div className="flex justify-center">
                  <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                    <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 p-3 flex items-center justify-center hover:opacity-80 transition-opacity">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                        alt="Java"
                        className="w-full h-full"
                      />
                    </a>
                    <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 p-3 flex items-center justify-center hover:opacity-80 transition-opacity">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                        alt="Python"
                        className="w-full h-full"
                      />
                    </a>
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 p-3 flex items-center justify-center hover:opacity-80 transition-opacity">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        alt="React"
                        className="w-full h-full"
                      />
                    </a>
                    <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 p-3 flex items-center justify-center hover:opacity-80 transition-opacity">
                      <img
                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg"
                        alt="Next.js"
                        className="w-full h-full"
                      />
                    </a>
                    <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 p-3 flex items-center justify-center hover:opacity-80 transition-opacity">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                        alt="PHP"
                        className="w-full h-full"
                      />
                    </a>
                    <a href="https://developer.apple.com/swift/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 p-3 flex items-center justify-center hover:opacity-80 transition-opacity">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
                        alt="Swift"
                        className="w-full h-full"
                      />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Featured Project Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-full md:col-span-4"
            >
              <Card className="p-6 h-full bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10">
                <h2 className="text-2xl font-semibold mb-4">Featured Project</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Tor Onion Site Scraper</h3>
                  <p className="text-muted-foreground text-lg">
                    Python-based web crawler and analysis tool for Tor websites (educational purposes), used in the publication below.
                  </p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <a
                      href="https://github.com/joelhagvall/tor-onion-site-scraper"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                    >
                      <GitHubLogoIcon />
                      Source Code
                    </a>
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

            {/* Publications Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-full"
            >
              <Card className="p-6 h-full bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10">
                <h2 className="text-2xl font-semibold mb-4">Publications</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Analyzing Cybercrime Services and Trust Dynamics on the Dark Web: A Case Study of DarkDock Marketplace</h3>
                  <p className="text-muted-foreground text-lg">
                    Bachelor thesis written by me and co author covering different aspects of cybercrimes present on the Tor network, published in 2024.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    URN: <a href="https://urn.kb.se/resolve?urn=urn%3Anbn%3Ase%3Asu%3Adiva-233982" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">https://urn.kb.se/resolve?urn=urn%3Anbn%3Ase%3Asu%3Adiva-233982</a>
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href="/media/bachelor-thesis.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-medium"
                    >
                      <FileText className="h-4 w-4" />
                      View PDF
                    </a>
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