import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/article-card";
import { AnimatedSection } from "@/components/animated-section";
import { articles, siteConfig } from "@/lib/data";

export const metadata = {
  title: "Articles",
  description: "Technical articles on frontend development and more.",
};

export default function WritingPage() {
  return (
    <>
      {/* Header */}
      <section className="pb-8 pt-32">
        <Container>
          <AnimatedSection>
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-sm text-graphite transition-colors hover:text-sage"
            >
              <ArrowLeft size={16} />
              Back Home
            </Link>

            <h1 className="text-4xl font-bold text-ink md:text-5xl">Articles</h1>
            <p className="mt-4 max-w-2xl text-lg text-graphite">
              I write about frontend development, TypeScript, Next.js, and lessons
              learned building real projects. Most articles are published on Dev.to
              and freeCodeCamp.
            </p>

            {/* Blog Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="secondary" size="sm">
                <a
                  href={siteConfig.blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dev.to Profile
                  <ExternalLink size={14} />
                </a>
              </Button>
              <Button variant="secondary" size="sm">
                <a
                  href={siteConfig.freecodecampUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  freeCodeCamp
                  <ExternalLink size={14} />
                </a>
              </Button>
              <Button variant="secondary" size="sm">
                <a
                  href={siteConfig.substackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Substack
                  <ExternalLink size={14} />
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Articles List */}
      <Section className="pt-0">
        <Container className="max-w-3xl">
          <div className="divide-y divide-mist">
            {articles.map((article, index) => (
              <ArticleCard key={article.title} article={article} index={index} />
            ))}
          </div>
        </Container>
      </Section>



      <p className="text-center text-sage mb-3">To see more articles visit my blogs</p>
    </>
  );
}