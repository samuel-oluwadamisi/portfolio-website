import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { ArticleCard } from "@/components/article-card";
import { AnimatedSection } from "@/components/animated-section";
import { projects, articles, siteConfig } from "@/lib/data";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const featuredArticles = articles.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Articles Section */}
      <Section className="bg-cloud">
        <Container>
          <AnimatedSection>
            <SectionHeader
              title="Recent Articles"
              description="Thoughts on frontend, TypeScript, and the modern web."
              action={
                <div className="flex flex-wrap gap-3">
                  <Button variant="ghost" >
                    <Link href="/writing">
                      See More
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                  <Button variant="secondary" size="sm" >
                    <a
                      href={siteConfig.blogUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit My Blog
                      <ExternalLink size={14} />
                    </a>
                  </Button>
                </div>
              }
            />
          </AnimatedSection>

          <div className="divide-y divide-mist">
            {featuredArticles.map((article, index) => (
              <ArticleCard key={article.title} article={article} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Projects Section */}
      <Section>
        <Container>
          <AnimatedSection>
            <SectionHeader
              title="Featured Projects"
              description="A selection of things I've built."
              action={
                <Button variant="ghost" >
                  <Link href="/projects">
                    View All
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              }
            />
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-cloud">
        <Container>
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-bold text-ink md:text-4xl">
              Let&apos;s Work Together
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-graphite">
              Have a project in mind? Looking for technical content? Or just 
              want to chat about React and Next.js?
            </p>
            <div className="mt-8">
              <Button size="lg" >
                <a href={`mailto:${siteConfig.email}`}>Get in Touch</a>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}