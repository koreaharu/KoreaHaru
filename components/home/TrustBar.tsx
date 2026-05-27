import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';

const PARTNERS = [
  { name: 'TripAdvisor', color: '#003580' },
  { name: 'Google', color: '#4285F4' },
  { name: 'KKday', color: '#FF6B6B' },
  { name: 'Klook', color: '#00B4D8' },
  { name: 'Visit Korea', color: '#C60C30' },
];

export function TrustBar() {
  const t = useTranslations('home.trust');

  return (
    <section className="border-y border-cream-300 bg-cream-100 py-16">
      <Container>
        <p className="eyebrow text-center text-ink-500">{t('eyebrow')}</p>
        <div className="mt-12 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center gap-3 transition-opacity hover:opacity-80"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: p.color + '20', borderColor: p.color, borderWidth: '1px' }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: p.color }}
                >
                  {p.name[0]}
                </span>
              </div>
              <p className="text-center text-xs font-medium text-ink-700">{p.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
