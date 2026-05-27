import { useTranslations } from 'next-intl';
import { buildMetadata } from '@/lib/seo';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceIntro } from '@/components/services/ServiceIntro';
import { ServiceFeatureGrid } from '@/components/services/ServiceFeatureGrid';
import { ServiceInclusions } from '@/components/services/ServiceInclusions';
import { ServicePricing } from '@/components/services/ServicePricing';
import { ServiceCta } from '@/components/services/ServiceCta';

export const metadata = buildMetadata({
  title: 'Hand-Picked Hotels, Hanok & Templestays',
  description:
    'A curated list of luxury hotels, design boutiques, hanok stays, templestays, and pool villas across Busan, Gyeongju, Tongyeong, Geoje, and Namhae.',
  path: '/services/accommodation',
});

export default function AccommodationPage() {
  const t = useTranslations('services.accommodation');
  const tc = useTranslations('services.common');

  const categories = [
    { title: t('cat_luxury_title'), description: t('cat_luxury_desc') },
    { title: t('cat_boutique_title'), description: t('cat_boutique_desc') },
    { title: t('cat_hanok_title'), description: t('cat_hanok_desc') },
    { title: t('cat_temple_title'), description: t('cat_temple_desc') },
    { title: t('cat_villa_title'), description: t('cat_villa_desc') },
    { title: t('cat_serviced_title'), description: t('cat_serviced_desc') },
  ];

  const inclusions = [
    t('inclusion_1'),
    t('inclusion_2'),
    t('inclusion_3'),
    t('inclusion_4'),
    t('inclusion_5'),
    t('inclusion_6'),
  ];

  const priceRows = [
    { label: t('price_boutique_label'), value: t('price_boutique_value') },
    { label: t('price_luxury_label'), value: t('price_luxury_value') },
    { label: t('price_villa_label'), value: t('price_villa_value') },
  ];

  return (
    <>
      <ServiceHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        ctaPrimary={tc('cta_inquire')}
        ctaSecondary={tc('cta_concierge')}
      />
      <ServiceIntro eyebrow={t('eyebrow')} title={t('intro_title')} body={t('intro_body')} />
      <ServiceFeatureGrid
        eyebrow={tc('eyebrow_options')}
        title={t('categories_title')}
        items={categories}
      />
      <ServiceInclusions
        eyebrow={tc('eyebrow_inclusions')}
        title={t('inclusions_title')}
        items={inclusions}
      />
      <ServicePricing
        eyebrow={tc('eyebrow_pricing')}
        title={t('pricing_title')}
        subtitle={t('pricing_subtitle')}
        rows={priceRows}
        note={tc('trust_note')}
      />
      <ServiceCta
        title={t('title')}
        body={t('subtitle')}
        ctaPrimary={tc('cta_inquire')}
        ctaSecondary={tc('cta_concierge')}
      />
    </>
  );
}
