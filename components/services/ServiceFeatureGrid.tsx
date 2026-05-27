import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

interface FeatureItem {
  title: string;
  description: string;
  meta?: string;
}

interface ServiceFeatureGridProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  items: FeatureItem[];
  tone?: 'default' | 'cream';
  columns?: 2 | 3;
}

export function ServiceFeatureGrid({
  eyebrow,
  title,
  subtitle,
  items,
  tone = 'cream',
  columns = 3,
}: ServiceFeatureGridProps) {
  const gridClass = columns === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3';

  return (
    <Section tone={tone}>
      <Container>
        <header className="mb-16 max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl font-light text-ink-900 md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-6 text-base leading-relaxed text-ink-600">{subtitle}</p>
          )}
        </header>

        <div className={`grid grid-cols-1 gap-px bg-cream-300 sm:grid-cols-2 ${gridClass}`}>
          {items.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-3 bg-cream-50 p-8 transition-colors hover:bg-cream-100"
            >
              <h3 className="font-serif text-xl font-medium text-ink-900">{item.title}</h3>
              {item.meta && (
                <p className="text-xs uppercase tracking-[0.18em] text-gold-700">{item.meta}</p>
              )}
              <p className="mt-1 text-sm leading-relaxed text-ink-600">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
