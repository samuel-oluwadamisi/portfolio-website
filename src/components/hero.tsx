"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import Image from "next/image";

export function Hero() {
  return (
<section className="relative flex min-h-[85vh] items-center pt-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-sage/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-sage/5 blur-3xl" />
      </div>

      <Container className="relative">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left: Text Content */}
          <div className="lg:flex-1">
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
              className="mt-6 text-3xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl"
            >
              {siteConfig.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-base leading-relaxed text-graphite md:text-lg md:max-w-[700px]"
            >
              I build web applications and write about them. With 3+ years shipping Next.js with TypeScript, I create technical content that turns curious developers into active users. My tutorials don&apos;t just explain, they <span className="font-semibold text-sage">convert</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link href="/projects">
              <Button size="lg">
                View Projects
                <ArrowRight size={18} />
              </Button>
              </Link>

             <Link href="/writing">
             <Button variant="secondary" size="lg" >
                Read Articles
              </Button>
             </Link>
            
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex w-full items-center justify-center lg:w-[40%] lg:justify-end"
          >
            <div className="relative aspect-square w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none">
              <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-sage/20 blur-3xl" />
              <Image
                src="/projects/portrait.jpg"
                alt={siteConfig.name}
                fill
                sizes="(min-width: 1024px) 48vw, (min-width: 640px) 28rem, 90vw"
                className="rounded-3xl object-cover drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}