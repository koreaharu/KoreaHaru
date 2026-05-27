import { useTranslations } from 'next-intl';
import { buildMetadata } from '@/lib/seo';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceIntro } from '@/components/services/ServiceIntro';
import { ServiceFeatureGrid } from '@/components/services/ServiceFeatureGrid';
import { ServiceInclusions } from '@/components/services/ServiceInclusions';
import { ServiceProcess } from '@/components/services/ServiceProcess';
import { ServiceCta } from '@/components/services/ServiceCta';

export const metadata = buildMetadata({
  title: 'Korea SIM, eSIM & Pocket WiFi for Travelers',
  description:
    'Pre-arranged SIM cards, eSIM activation, and pocket WiFi for travelers in Korea — picked up at Incheon, Gimhae, or delivered to your hotel.',
  path: '/services/sim',
});

export default function SimPage() {
  const t = useTranslations('services.sim');
  const tc = useTranslations('services.common');

  const options = [
    {
      title: t('opt_sim_title'),
      meta: t('opt_sim_meta'),
      description: t('opt_sim_desc'),
    },
    {
      title: t('opt_esim_title'),
      meta: t('opt_esim_meta'),
      description: t('opt_esim_desc'),
    },
    {
      title: t('opt_wifi_title'),
      meta: t('opt_wifi_meta'),
      description: t('opt_wifi_desc'),
    },
  ];

  const inclusions = [
    t('inclusion_1'),
    t('inclusion_2'),
    t('inclusion_3'),
    t('inclusion_4'),
    t('inclusion_5'),
  ];

  const steps = [
    { title: t('process_1_title'), body: t('process_1_body') },
    { title: t('process_2_title'), body: t('process_2_body') },
    { title: t('process_3_title'), body: t('process_3_body') },
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
      <ServiceFeatureGrid
        eyebrow={tc('eyebrow_options')}
        title={t('options_title')}
        items={options}
      />
      <ServiceInclusions
        eyebrow={tc('eyebrow_inclusions')}
        title={t('inclusions_title')}
        items={inclusions}
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
