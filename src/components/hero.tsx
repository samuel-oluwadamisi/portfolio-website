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
      <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center">
          {/* Left: Text Content */}
          <div>
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
              className="mt-6 text-base leading-relaxed text-graphite md:text-xl md:max-w-[700px]"
            >
              I build web applications and write about them. With 3+ years shipping Next.js with TypeScript, I create technical content that turns curious developers into active users. My tutorials don't just explain, they <span className="font-semibold text-sage">convert</span>.
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

          {/* Right: Animated Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center lg:justify-end"
          >
            {/* 3D Flip Container */}
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: [0.34, 1.56, 0.64, 1],  // Spring bounce
              }}
              whileHover={{
                rotateY: 0,        // Reset to front-facing
                scale: 1.05,       // Slight zoom
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
               <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-sage/20 blur-3xl" />
              <Image
                src="/spin-logo.png"
                alt={siteConfig.name}
                width={250}
                height={250}
                className="h-40 w-40 object-contain drop-shadow-2xl sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64"
                priority
              />
    </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}