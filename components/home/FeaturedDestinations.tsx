import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const DESTINATIONS = [
  { slug: 'busan', key: 'busan', image: '/images/destinations/busan.png' },
  { slug: 'gyeongju', key: 'gyeongju', image: '/images/destinations/gyeongju.png' },
  { slug: 'tongyeong', key: 'tongyeong', image: '/images/destinations/tongyeong.png' },
  { slug: 'geoje', key: 'geoje', image: '/images/destinations/geoje.png' },
  { slug: 'namhae', key: 'namhae', image: '/images/destinations/namhae.png' },
] as const;

export function FeaturedDestinations() {
  const t = useTranslations('home.destinations');
  const tc = useTranslations('cities');

  return (
    <Section tone="cream">
      <Container>
        <header className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">{t('eyebrow')}</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">{t('title')}</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600 font-light">{t('subtitle')}</p>
          </div>
        </header>

        {/* Uniform 5-Column Grid with Equal Aspect Ratio Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {DESTINATIONS.map((d) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="group relative block overflow-hidden aspect-[4/3] rounded-sm border border-cream-200/20 shadow-sm hover:shadow-lg transition-all"
            >
              <Image
                src={d.image}
                alt={tc(d.key)}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                <p className="text-[9px] uppercase tracking-[0.2em] text-cream-100/70 font-semibold">
                  {tc(`${d.key}_tag`)}
                </p>
                <h3 className="mt-1 font-serif text-xl font-light text-cream-50 md:text-2xl">
                  {tc(d.key)}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/destinations" variant="secondary" size="md">
            {t('view_all')}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
