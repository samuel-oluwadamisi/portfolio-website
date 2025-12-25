import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-32">
      <Container className="text-center">
        <span className="font-mono text-6xl text-sage">404</span>
        <h1 className="mt-4 text-3xl font-bold text-ink">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-graphite">
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="mt-8">
          <Button>
            <Link href="/">
              <ArrowLeft size={16} />
              Back Home
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}