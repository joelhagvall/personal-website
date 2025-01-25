"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Resume() {
  return (
    <main className="min-h-screen bg-background p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8"
        >
          Resume
        </motion.h1>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 bg-primary/5">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase size={24} />
                Work Experience
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Senior Developer</h3>
                  <p className="text-sm text-muted-foreground">Company Name • 2020-Present</p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>Achievement 1</li>
                    <li>Achievement 2</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6 bg-primary/5">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap size={24} />
                Education
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Computer Science Degree</h3>
                  <p className="text-sm text-muted-foreground">University Name • 2014-2018</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 