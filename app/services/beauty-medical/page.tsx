import { useTranslations } from 'next-intl';
import { buildMetadata } from '@/lib/seo';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceIntro } from '@/components/services/ServiceIntro';
import { ServiceFeatureGrid } from '@/components/services/ServiceFeatureGrid';
import { ServiceInclusions } from '@/components/services/ServiceInclusions';
import { ServicePricing } from '@/components/services/ServicePricing';
import { ServiceCta } from '@/components/services/ServiceCta';

export const metadata = buildMetadata({
  title: 'Beauty & Medical Concierge in Busan',
  description:
    'Discreet concierge for dermatology, dentistry, and elective procedures in Busan and Seoul — vetted clinics, recovery stays, and quiet transport.',
  path: '/services/beauty-medical',
});

export default function BeautyMedicalPage() {
  const t = useTranslations('services.beauty_medical');
  const tc = useTranslations('services.common');

  const categories = [
    { title: t('cat_derm_title'), description: t('cat_derm_desc') },
    { title: t('cat_dental_title'), description: t('cat_dental_desc') },
    { title: t('cat_plastic_title'), description: t('cat_plastic_desc') },
    { title: t('cat_health_title'), description: t('cat_health_desc') },
    { title: t('cat_recovery_title'), description: t('cat_recovery_desc') },
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
    { label: t('price_consult_label'), value: t('price_consult_value') },
    { label: t('price_coord_label'), value: t('price_coord_value') },
    { label: t('price_recovery_label'), value: t('price_recovery_value') },
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
        note={t('trust_note')}
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
