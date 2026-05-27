import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

interface PriceRow {
  label: string;
  value: string;
}

interface ServicePricingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  rows: PriceRow[];
  note?: string;
}

export function ServicePricing({ eyebrow, title, subtitle, rows, note }: ServicePricingProps) {
  return (
    <Section tone="cream">
      <Container>
        <header className="mb-12 max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl font-light text-ink-900 md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-6 text-base leading-relaxed text-ink-600">{subtitle}</p>
          )}
        </header>

        <div className="border border-cream-300 bg-cream-50">
          {rows.map((row, idx) => (
            <div
              key={row.label}
              className={`grid grid-cols-1 items-baseline gap-2 px-8 py-6 sm:grid-cols-12 ${
                idx > 0 ? 'border-t border-cream-300' : ''
              }`}
            >
              <p className="text-sm uppercase tracking-[0.15em] text-ink-700 sm:col-span-7">
                {row.label}
              </p>
              <p className="font-serif text-2xl font-light text-ink-900 sm:col-span-5 sm:text-right">
                {row.value}
              </p>
            </div>
          ))}
        </div>

        {note && (
          <p className="mt-8 max-w-3xl text-sm italic leading-relaxed text-ink-500">{note}</p>
        )}
      </Container>
    </Section>
  );
}
