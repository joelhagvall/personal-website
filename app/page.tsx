"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon, Terminal, Briefcase, Newspaper, Code, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            John Doe
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Full Stack Developer & UI/UX Designer
          </motion.p>
        </section>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-2"
          >
            <Card className="p-6 h-full bg-primary/5 hover:bg-primary/10 transition-colors">
              <h2 className="text-2xl font-semibold mb-4">About Me</h2>
              <p className="text-muted-foreground">
                I'm a passionate developer with 5+ years of experience building beautiful and functional web applications. 
                I specialize in React, Next.js, and modern web technologies.
              </p>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6 h-full bg-primary/5 hover:bg-primary/10 transition-colors">
              <h2 className="text-2xl font-semibold mb-4">Connect</h2>
              <div className="flex flex-col space-y-4">
                <Link href="https://github.com" className="flex items-center space-x-2 text-muted-foreground hover:text-primary">
                  <GithubIcon size={20} />
                  <span>GitHub</span>
                </Link>
                <Link href="https://linkedin.com" className="flex items-center space-x-2 text-muted-foreground hover:text-primary">
                  <LinkedinIcon size={20} />
                  <span>LinkedIn</span>
                </Link>
                <Link href="mailto:contact@example.com" className="flex items-center space-x-2 text-muted-foreground hover:text-primary">
                  <MailIcon size={20} />
                  <span>Email</span>
                </Link>
              </div>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 h-full bg-primary/5 hover:bg-primary/10 transition-colors">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Terminal size={24} />
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-2"
          >
            <Card className="p-6 h-full bg-primary/5 hover:bg-primary/10 transition-colors">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Code size={24} />
                Featured Project
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Project Name</h3>
                <p className="text-muted-foreground">
                  A full-stack application built with Next.js, TypeScript, and Tailwind CSS.
                  Features real-time updates, authentication, and a beautiful UI.
                </p>
                <div className="flex items-center gap-4">
                  <Link href="#" className="flex items-center gap-2 text-primary hover:underline">
                    <ExternalLink size={16} />
                    Live Demo
                  </Link>
                  <Link href="#" className="flex items-center gap-2 text-primary hover:underline">
                    <GithubIcon size={16} />
                    Source Code
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6 h-full bg-primary/5 hover:bg-primary/10 transition-colors">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase size={24} />
                Experience
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Senior Developer</h3>
                  <p className="text-sm text-muted-foreground">Company Name • 2020-Present</p>
                </div>
                <div>
                  <h3 className="font-medium">Full Stack Developer</h3>
                  <p className="text-sm text-muted-foreground">Previous Company • 2018-2020</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Blog/Articles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-span-3"
          >
            <Card className="p-6 h-full bg-primary/5 hover:bg-primary/10 transition-colors">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Newspaper size={24} />
                Latest Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-2">
                    <h3 className="font-medium">Building Modern Web Applications</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn how to build scalable web applications using modern technologies...
                    </p>
                    <Link href="#" className="text-primary hover:underline text-sm">
                      Read More →
                    </Link>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}