import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Services',
  description:
    'Private chauffeur, hand-picked stays, SIM and eSIM, rail booking, and a discreet beauty-medical concierge — across Busan and Korea.',
  path: '/services',
});

const SERVICES = [
  { slug: 'chauffeur', key: 'chauffeur', icon: '/icons/chauffeur.svg', hot: false },
  { slug: 'accommodation', key: 'accommodation', icon: '/icons/accommodation.svg', hot: false },
  { slug: 'sim', key: 'sim', icon: '/icons/sim.svg', hot: false },
  { slug: 'rail', key: 'rail', icon: '/icons/rail.svg', hot: false },
  { slug: 'beauty-medical', key: 'beauty_medical', icon: '/icons/beauty-medical.svg', hot: true },
] as const;

export default function ServicesIndexPage() {
  const t = useTranslations('services.index');
  const tc = useTranslations('categories');
  const tcm = useTranslations('services.common');

  return (
    <>
      <section className="bg-cream-100 pb-20 pt-28 md:pb-28 md:pt-36">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow">{t('eyebrow')}</p>
            <h1 className="mt-6 font-serif text-5xl font-light leading-[1.05] text-ink-900 md:text-6xl">
              {t('title')}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-600">{t('subtitle')}</p>
          </div>
        </Container>
      </section>

      <Section tone="default">
        <Container>
          <div className="grid grid-cols-1 gap-px bg-cream-300 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col justify-between gap-12 bg-cream-50 p-10 transition-colors hover:bg-cream-100"
              >
                <div className="flex items-start justify-between">
                  <div className="h-16 w-16">
                    <Image
                      src={s.icon}
                      alt={tc(s.key)}
                      width={64}
                      height={64}
                      className="h-full w-full"
                    />
                  </div>
                  {s.hot && <Badge tone="rust">Hot</Badge>}
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-medium text-ink-900">{tc(s.key)}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {tc(`${s.key}_desc`)}
                  </p>
                  <p className="mt-6 text-xs uppercase tracking-[0.18em] text-gold-700 transition-colors group-hover:text-gold-800">
                    Learn more →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-16 max-w-2xl text-sm italic leading-relaxed text-ink-500">
            {tcm('trust_note')}
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button href="/booking" variant="primary" size="lg">
              {tcm('cta_book')}
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              {tcm('cta_concierge')}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
