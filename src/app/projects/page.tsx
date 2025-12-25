import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/project-card";
import { AnimatedSection } from "@/components/animated-section";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects",
  description: "A collection of projects I've built.",
};

export default function ProjectsPage() {
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

            <h1 className="text-4xl font-bold text-ink md:text-5xl">Projects</h1>
            <p className="mt-4 max-w-2xl text-lg text-graphite">
              A collection of projects I&apos;ve built. Each one taught me
              something new about building for the web.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Projects Grid */}
      <Section className="pt-0">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}