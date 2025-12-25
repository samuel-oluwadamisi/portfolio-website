"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/lib/data";
import { Tag } from "@/components/ui/tag";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-xl border border-mist bg-cloud transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="aspect-video overflow-hidden bg-mist">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <h3 className="mb-2 text-xl font-semibold text-ink">{project.title}</h3>

        <p className="mb-4 text-graphite">{project.description}</p>

        {project.impact && (
          <p className="mb-4 text-sm font-medium text-sage">✦ {project.impact}</p>
        )}

        <div className="flex items-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-sage transition-all hover:gap-2"
            >
              Live Site
              <ArrowUpRight size={16} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-graphite transition-colors hover:text-sage"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}