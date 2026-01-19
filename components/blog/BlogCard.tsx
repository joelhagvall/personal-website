"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { PostMeta } from "@/types/blog";

// Cache date formatting to avoid repeated computation
// See: https://vercel.com/blog/introducing-react-best-practices (rule 7.4)
const dateFormatCache = new Map<string, string>();

function formatDate(dateString: string): string {
  if (dateFormatCache.has(dateString)) {
    return dateFormatCache.get(dateString)!;
  }
  const formatted = new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  dateFormatCache.set(dateString, formatted);
  return formatted;
}

interface BlogCardProps extends PostMeta {
  delay: number;
}

export function BlogCard({
  slug,
  title,
  date,
  description,
  tags,
  delay,
}: BlogCardProps) {
  const formattedDate = formatDate(date);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="blog-card-item"
    >
      <Link href={`/blog/${slug}`} scroll={true}>
        <Card className="p-6 bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10 cursor-pointer">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">{title}</h2>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <time dateTime={date}>{formattedDate}</time>
            </div>

            <p className="text-muted-foreground text-lg">{description}</p>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
