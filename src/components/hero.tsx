"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center pt-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-sage/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-sage/5 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="max-w-3xl">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 font-mono text-sage">
              <span className="text-xl">{"{"}</span>
              Hello, I&apos;m {siteConfig.name}
              <span className="text-xl">{"}"}</span>
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl font-bold tracking-tight text-ink md:text-6xl lg:text-7xl"
          >
            {siteConfig.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-xl leading-relaxed text-graphite md:text-2xl"
          >
            {siteConfig.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button size="lg" >
              <Link href="/projects">
                View Projects
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" >
              <Link href="/writing">Read Articles</Link>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}