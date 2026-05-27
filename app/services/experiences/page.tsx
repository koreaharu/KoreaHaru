import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { buildMetadata } from '@/lib/seo';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceIntro } from '@/components/services/ServiceIntro';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const metadata = buildMetadata({
  title: 'Curated Experiences in Korea · KoreaHaru',
  description:
    'Vetted ocean sports, private yacht charters, Hanok photography, and traditional cooking classes led by local masters in Busan and Gyeongju.',
  path: '/services/experiences',
});

export default function ExperiencesHubPage() {
  const t = useTranslations('services.experiences.index');
  const tc = useTranslations('services.common');

  const categories = [
    {
      slug: 'hanok-photo',
      key: 'cat_hanok',
      image: '/images/services/accommodation.png',
      active: true,
      badge: 'Active',
    },
    {
      slug: 'cooking',
      key: 'cat_cooking',
      image: '/images/services/food.png',
      active: true,
      badge: 'Active',
    },
    {
      slug: 'surfing',
      key: 'cat_surfing',
      image: '/images/services/experiences.png',
      active: true,
      badge: 'Active',
    },
    {
      slug: 'yacht',
      key: 'cat_yacht',
      image: '/images/services/tickets.png',
      active: false,
      badge: 'Coming Soon',
    },
  ] as const;

  return (
    <>
      <ServiceHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        ctaPrimary={tc('cta_book')}
        ctaSecondary={tc('cta_concierge')}
      />

      <ServiceIntro eyebrow={t('eyebrow')} title={t('intro_title')} body={t('intro_body')} />

      {/* Category Selection Grid */}
      <Section tone="default">
        <Container>
          <header className="mb-16 max-w-3xl">
            <p className="eyebrow">{t('eyebrow')}</p>
            <h2 className="mt-4 font-serif text-3xl font-light text-ink-900 md:text-4xl">
              {t('categories_title')}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-600">
              {t('categories_subtitle')}
            </p>
          </header>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {categories.map((cat) => {
              const cardContent = (
                <>
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={t(`${cat.key}_title`)}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/20 to-transparent" />
                    <div className="absolute right-4 top-4">
                      <Badge tone={cat.active ? 'sage' : 'neutral'}>{cat.badge}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-8 bg-cream-50 border-t border-cream-300">
                    <div>
                      <h3 className="font-serif text-2xl font-light text-ink-900">
                        {t(`${cat.key}_title`)}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-600">
                        {t(`${cat.key}_desc`)}
                      </p>
                    </div>
                    {cat.active ? (
                      <p className="mt-6 text-xs uppercase tracking-[0.18em] text-gold-700 font-semibold transition-colors group-hover:text-gold-800">
                        Explore Experiences →
                      </p>
                    ) : (
                      <p className="mt-6 text-xs uppercase tracking-[0.18em] text-ink-400 font-medium">
                        Request via Concierge →
                      </p>
                    )}
                  </div>
                </>
              );

              return cat.active ? (
                <Link
                  key={cat.slug}
                  href={`/services/experiences/${cat.slug}`}
                  className="group flex flex-col overflow-hidden border border-cream-300 transition-all hover:border-gold-400/50"
                >
                  {cardContent}
                </Link>
              ) : (
                <div
                  key={cat.slug}
                  className="group flex flex-col overflow-hidden border border-cream-200 opacity-80"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>

          <div className="mt-20 border-t border-cream-300 pt-16 text-center max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-light text-ink-900">
              Looking for a custom experience?
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-600">
              Our concierge team specializes in sourcing bespoke regional programs — from private temple tea ceremonies to traditional pottery workshops in Gijang.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Button href="/contact" variant="secondary">
                Inquire Bespoke Program
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
