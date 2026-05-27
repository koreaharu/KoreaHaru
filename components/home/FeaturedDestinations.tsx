import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const DESTINATIONS = [
  {
    slug: 'busan',
    key: 'busan',
    image: '/images/destinations/busan.png',
    span: 'lg:col-span-2 lg:row-span-2',
    aspect: 'aspect-[4/5] lg:aspect-auto',
  },
  {
    slug: 'gyeongju',
    key: 'gyeongju',
    image: '/images/destinations/gyeongju.png',
    span: '',
    aspect: 'aspect-[4/3]',
  },
  {
    slug: 'tongyeong',
    key: 'tongyeong',
    image: '/images/destinations/tongyeong.png',
    span: '',
    aspect: 'aspect-[4/3]',
  },
  {
    slug: 'geoje',
    key: 'geoje',
    image: '/images/destinations/geoje.png',
    span: '',
    aspect: 'aspect-[4/3]',
  },
  {
    slug: 'namhae',
    key: 'namhae',
    image: '/images/destinations/namhae.png',
    span: '',
    aspect: 'aspect-[4/3]',
  },
] as const;

export function FeaturedDestinations() {
  const t = useTranslations('home.destinations');
  const tc = useTranslations('cities');

  return (
    <Section tone="cream">
      <Container>
        <header className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">{t('eyebrow')}</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">{t('title')}</h2>
            <p className="mt-6 text-base leading-relaxed text-ink-600">{t('subtitle')}</p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {DESTINATIONS.map((d) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className={`group relative block overflow-hidden ${d.span} ${d.aspect}`}
            >
              <Image
                src={d.image}
                alt={tc(d.key)}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-cream-100/70">
                  {tc(`${d.key}_tag`)}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-light text-cream-50 md:text-3xl">
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
