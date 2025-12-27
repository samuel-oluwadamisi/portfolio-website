import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Container } from "./container";
import { siteConfig, socialLinks } from "@/lib/data";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-mist bg-cloud py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center font-mono text-xl font-bold text-ink"
          >
            <Image src='/logo.png' alt="my-logo" width={120} height={32} className="w-auto h-8 object-contain" />
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite transition-colors hover:text-sage"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite transition-colors hover:text-sage"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite transition-colors hover:text-sage"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-graphite">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}