import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

interface ProcessStep {
  title: string;
  body: string;
}

interface ServiceProcessProps {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
}

export function ServiceProcess({ eyebrow, title, steps }: ServiceProcessProps) {
  return (
    <Section tone="default">
      <Container>
        <header className="mb-16 max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl font-light text-ink-900 md:text-4xl">
            {title}
          </h2>
        </header>

        <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <li key={step.title} className="flex flex-col gap-4">
              <span className="font-serif text-3xl font-light text-gold-600">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="font-sans text-base font-semibold uppercase tracking-[0.12em] text-ink-900">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
