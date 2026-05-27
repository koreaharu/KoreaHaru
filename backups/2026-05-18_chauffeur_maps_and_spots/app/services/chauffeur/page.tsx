import { useTranslations } from 'next-intl';
import { buildMetadata } from '@/lib/seo';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceIntro } from '@/components/services/ServiceIntro';
import { ServiceFeatureGrid } from '@/components/services/ServiceFeatureGrid';
import { ServiceInclusions } from '@/components/services/ServiceInclusions';
import { ServicePricing } from '@/components/services/ServicePricing';
import { ServiceProcess } from '@/components/services/ServiceProcess';
import { ServiceCta } from '@/components/services/ServiceCta';
import { ChauffeurMap } from '@/components/services/ChauffeurMap';

export const metadata = buildMetadata({
  title: 'Private Chauffeur in Busan & Korea',
  description:
    'Mercedes V-Class, Hyundai Staria Lounge, and Kia Carnival with English-speaking chauffeurs across Busan, Gyeongju, Tongyeong, and beyond.',
  path: '/services/chauffeur',
});

export default function ChauffeurPage() {
  const t = useTranslations('services.chauffeur');
  const tc = useTranslations('services.common');

  const fleet = [
    {
      title: t('fleet_v_name'),
      meta: t('fleet_v_seats'),
      description: t('fleet_v_desc'),
    },
    {
      title: t('fleet_staria_name'),
      meta: t('fleet_staria_seats'),
      description: t('fleet_staria_desc'),
    },
    {
      title: t('fleet_carnival_name'),
      meta: t('fleet_carnival_seats'),
      description: t('fleet_carnival_desc'),
    },
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
    { label: t('price_half_label'), value: t('price_half_value') },
    { label: t('price_full_label'), value: t('price_full_value') },
    { label: t('price_multi_label'), value: t('price_multi_value') },
  ];

  const steps = [
    { title: t('process_1_title'), body: t('process_1_body') },
    { title: t('process_2_title'), body: t('process_2_body') },
    { title: t('process_3_title'), body: t('process_3_body') },
    { title: t('process_4_title'), body: t('process_4_body') },
  ];

  return (
    <>
      <ServiceHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        ctaPrimary={tc('cta_book')}
        ctaSecondary={tc('cta_inquire')}
      />
      <ServiceIntro eyebrow={t('eyebrow')} title={t('intro_title')} body={t('intro_body')} />
      <ChauffeurMap />
      <ServiceFeatureGrid
        eyebrow={tc('eyebrow_options')}
        title={t('fleet_title')}
        subtitle={t('fleet_subtitle')}
        items={fleet}
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
      <ServiceProcess eyebrow={tc('eyebrow_process')} title={t('process_title')} steps={steps} />
      <ServiceCta
        title={t('title')}
        body={t('subtitle')}
        ctaPrimary={tc('cta_book')}
        ctaSecondary={tc('cta_concierge')}
      />
    </>
  );
}
