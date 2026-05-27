import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

interface PlaceholderPageProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PlaceholderPage({ eyebrow, title, description }: PlaceholderPageProps) {
  return (
    <Section tone="default" className="min-h-[70vh]">
      <Container>
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 font-serif text-5xl font-light text-ink-900 md:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-600">{description}</p>
          <div className="mt-12 flex gap-3">
            <Button href="/" variant="secondary" size="md">
              Back to home
            </Button>
            <Button href="/contact" variant="primary" size="md">
              Talk to a concierge
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
