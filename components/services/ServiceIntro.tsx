import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

interface ServiceIntroProps {
  eyebrow: string;
  title: string;
  body: string;
}

export function ServiceIntro({ eyebrow, title, body }: ServiceIntroProps) {
  return (
    <Section tone="default">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-4 font-serif text-3xl font-light text-ink-900 md:text-4xl">
              {title}
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg leading-relaxed text-ink-700">{body}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
