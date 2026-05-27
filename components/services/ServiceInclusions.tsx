import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

interface ServiceInclusionsProps {
  eyebrow: string;
  title: string;
  items: string[];
}

export function ServiceInclusions({ eyebrow, title, items }: ServiceInclusionsProps) {
  return (
    <Section tone="default">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-4 font-serif text-3xl font-light text-ink-900 md:text-4xl">
              {title}
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:col-span-7">
            {items.map((item) => (
              <li key={item} className="flex gap-3 border-t border-cream-300 pt-4">
                <span aria-hidden className="mt-1 text-gold-600">
                  ✓
                </span>
                <span className="text-base leading-relaxed text-ink-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
