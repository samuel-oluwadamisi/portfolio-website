"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Article } from "@/lib/data";
import { formatDate } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  index?: number;
}

export function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group border-b border-mist py-6 last:border-b-0"
    >
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Category */}
        <span className="mb-2 inline-block font-mono text-sm text-sage">
          {article.category}
        </span>

        {/* Title */}
        <h3 className="mb-2 flex items-start gap-2 text-xl font-semibold text-ink transition-colors group-hover:text-sage">
          {article.title}
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 opacity-0 transition-all group-hover:opacity-100"
          />
        </h3>

        {/* Excerpt */}
        <p className="mb-3 line-clamp-2 text-graphite">{article.excerpt}</p>

        {/* Meta */}
        <div className="flex items-center gap-2 text-sm text-graphite">
          <time>{formatDate(article.date)}</time>
          <span>•</span>
          <span>{article.readingTime} min read</span>
          <span>•</span>
          <span className="capitalize">{article.platform}</span>
        </div>
      </a>
    </motion.article>
  );
}