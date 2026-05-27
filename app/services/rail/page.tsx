import { useTranslations } from 'next-intl';
import { buildMetadata } from '@/lib/seo';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceIntro } from '@/components/services/ServiceIntro';
import { ServiceFeatureGrid } from '@/components/services/ServiceFeatureGrid';
import { ServiceInclusions } from '@/components/services/ServiceInclusions';
import { ServiceCta } from '@/components/services/ServiceCta';

export const metadata = buildMetadata({
  title: 'KTX, SRT & Korea Rail Pass Booking',
  description:
    'Reserve KTX, SRT, regional rail tickets, and Korea Rail Pass for foreign travelers — booked in your name, with seat selection and same-day rebooking.',
  path: '/services/rail',
});

export default function RailPage() {
  const t = useTranslations('services.rail');
  const tc = useTranslations('services.common');

  const options = [
    {
      title: t('opt_ktx_title'),
      meta: t('opt_ktx_meta'),
      description: t('opt_ktx_desc'),
    },
    {
      title: t('opt_srt_title'),
      meta: t('opt_srt_meta'),
      description: t('opt_srt_desc'),
    },
    {
      title: t('opt_pass_title'),
      meta: t('opt_pass_meta'),
      description: t('opt_pass_desc'),
    },
    {
      title: t('opt_regional_title'),
      meta: t('opt_regional_meta'),
      description: t('opt_regional_desc'),
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
        columns={2}
      />
      <ServiceInclusions
        eyebrow={tc('eyebrow_inclusions')}
        title={t('inclusions_title')}
        items={inclusions}
      />
      <ServiceCta
        title={t('title')}
        body={t('subtitle')}
        ctaPrimary={tc('cta_book')}
        ctaSecondary={tc('cta_concierge')}
      />
    </>
  );
}
