"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <main className="min-h-screen bg-background p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8"
        >
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 bg-primary/5">
              <h2 className="text-2xl font-semibold mb-4">Background</h2>
              <p className="text-muted-foreground">
                [Your detailed background information]
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6 bg-primary/5">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6 bg-primary/5">
              <h2 className="text-2xl font-semibold mb-4">Favorite Movies</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <img
                    src="/interstellar.jpg"
                    alt="Interstellar"
                    className="rounded-lg w-full h-40 object-cover mb-2"
                  />
                  <p className="text-sm text-muted-foreground">Interstellar (2014)</p>
                </div>
                <div>
                  <img
                    src="/harry-potter.jpg"
                    alt="Harry Potter"
                    className="rounded-lg w-full h-40 object-cover mb-2"
                  />
                  <p className="text-sm text-muted-foreground">Harry Potter Series</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="p-6 bg-primary/5">
              <h2 className="text-2xl font-semibold mb-4">Favorite Music</h2>
              <div className="space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <h3 className="font-medium">Hans Zimmer</h3>
                  <p className="text-sm text-muted-foreground">Time - Inception</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <h3 className="font-medium">John Williams</h3>
                  <p className="text-sm text-muted-foreground">Hedwig's Theme - Harry Potter</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 