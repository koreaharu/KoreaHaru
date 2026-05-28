import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

const CATEGORIES = [
  {
    slug: 'experiences',
    key: 'experiences',
    hot: false,
    image: '/images/services/experiences.png',
  },
  {
    slug: 'food-tours',
    key: 'food',
    hot: false,
    image: '/images/services/food.png',
  },
  {
    slug: 'accommodation',
    key: 'accommodation',
    hot: false,
    image: '/images/services/accommodation.png',
  },
  {
    slug: 'chauffeur',
    key: 'chauffeur',
    hot: false,
    image: '/images/services/chauffeur.png',
  },
  {
    slug: 'concierge',
    key: 'concierge',
    hot: false,
    image: '/images/services/concierge.png',
  },
  {
    slug: 'beauty-medical',
    key: 'beauty_medical',
    hot: true,
    image: '/images/services/beauty-medical.png',
  },
  {
    slug: 'rail',
    key: 'rail',
    hot: false,
    image: '/images/services/rail.png',
  },
  {
    slug: 'sim',
    key: 'sim',
    hot: false,
    image: '/images/services/sim.png',
  },
  {
    slug: 'tickets',
    key: 'tickets',
    hot: false,
    image: '/images/services/tickets.png',
  },
] as const;

export function ServiceCategories() {
  const t = useTranslations('home.services');
  const tc = useTranslations('categories');

  return (
    <Section tone="default">
      <Container>
        <header className="mb-16 max-w-3xl">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 className="mt-4 text-4xl font-light md:text-5xl">{t('title')}</h2>
          <p className="mt-6 text-base leading-relaxed text-ink-600">{t('subtitle')}</p>
        </header>

        {/* Responsive layout: Swiping slider on mobile, Grid on desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 scrollbar-none md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:pb-0 md:overflow-visible">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/services/${cat.slug}`}
              className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden shrink-0 w-[250px] sm:w-[280px] snap-center md:w-auto md:shrink rounded-sm border border-cream-200/20 shadow-sm text-left"
            >
              <Image
                src={cat.image}
                alt={tc(cat.key)}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/30 to-transparent" />
              {cat.hot && (
                <div className="absolute right-4 top-4">
                  <Badge tone="rust">Hot</Badge>
                </div>
              )}
              <div className="relative p-6">
                <h3 className="font-serif text-xl font-light text-cream-50">{tc(cat.key)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cream-100/75 font-light">{tc(`${cat.key}_desc`)}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button href="/services" variant="secondary" size="md">
            {t('view_all')}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
