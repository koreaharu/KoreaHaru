import { useTranslations } from 'next-intl';
import { buildMetadata } from '@/lib/seo';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceIntro } from '@/components/services/ServiceIntro';
import { ServiceInclusions } from '@/components/services/ServiceInclusions';
import { ServicePricing } from '@/components/services/ServicePricing';
import { ServiceCta } from '@/components/services/ServiceCta';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SpotLocationMap } from '@/components/destinations/SpotLocationMap';
import { MapPin, DollarSign, Sparkles, Star, Award } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Traditional K-Food Cooking Classes · KoreaHaru',
  description:
    'Vetted K-food cooking schools, Silla Dynasty medicinal gastronomy workshops, and master chef culinary classes in Busan and Gyeongju. Pure active luxury.',
  path: '/services/experiences/cooking',
});

export default function CookingExperiencePage() {
  const t = useTranslations('services.experiences.cooking');
  const tc = useTranslations('services.common');

  const inclusions = [
    t('inclusion_1'),
    t('inclusion_2'),
    t('inclusion_3'),
    t('inclusion_4'),
    t('inclusion_5'),
    t('inclusion_6'),
  ];

  const priceRows = [
    { label: t('price_base_label'), value: t('price_base_value') },
    { label: t('price_royal_label'), value: t('price_royal_value') },
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

      {/* Vetted Cooking Stops Section with Google Maps Integration */}
      <Section tone="default">
        <Container>
          <header className="mb-20 max-w-3xl">
            <p className="eyebrow">{t('eyebrow')}</p>
            <h2 className="mt-4 font-serif text-3xl font-light text-ink-900 md:text-4xl">
              {t('section_title')}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-600">
              {t('section_subtitle')}
            </p>
          </header>

          <div className="space-y-16">
            {/* Spot 1 */}
            <article className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-stretch border border-cream-300 bg-cream-50 p-8 lg:p-12 transition-colors hover:bg-cream-100/30">
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <header className="mb-6">
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-gold-700">
                      01 · Busan Historic Downtown
                    </span>
                    <h3 className="mt-2 font-serif text-3xl font-light leading-snug text-ink-900 md:text-4xl">
                      {t('school_1_name')}
                    </h3>
                    <p className="mt-3 font-serif text-base font-light italic leading-relaxed text-gold-800">
                      &ldquo;{t('school_1_tagline')}&rdquo;
                    </p>
                  </header>
                  <div className="space-y-6 border-t border-cream-300/60 pt-6 text-sm">
                    <div>
                      <h4 className="mb-1.5 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-ink-800">
                        <MapPin className="h-3.5 w-3.5 text-gold-600" />
                        {t('common_labels.location')}
                      </h4>
                      <p className="pl-5 text-ink-700 leading-relaxed">{t('school_1_loc')}</p>
                    </div>
                    <div>
                      <h4 className="mb-1.5 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-ink-800">
                        <DollarSign className="h-3.5 w-3.5 text-gold-600" />
                        {t('common_labels.price')}
                      </h4>
                      <p className="pl-5 text-ink-700 font-medium leading-relaxed">
                        {t('school_1_price')}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1.5 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-ink-800">
                        <Sparkles className="h-3.5 w-3.5 text-gold-600" />
                        {t('common_labels.included')}
                      </h4>
                      <p className="pl-5 text-ink-700 leading-relaxed">{t('school_1_inclusions')}</p>
                    </div>
                    <div>
                      <h4 className="mb-1.5 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-ink-800">
                        <Star className="h-3.5 w-3.5 text-gold-600" />
                        {t('common_labels.reviews')}
                      </h4>
                      <p className="pl-5 text-ink-700 leading-relaxed italic">
                        &ldquo;{t('school_1_reviews')}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-cream-300/60 pt-6">
                  <h4 className="mb-1.5 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-ink-800">
                    <Award className="h-3.5 w-3.5 text-gold-600" />
                    {t('common_labels.ideal')}
                  </h4>
                  <p className="pl-5 font-serif text-sm font-light leading-relaxed text-gold-800">
                    {t('school_1_ideal')}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <SpotLocationMap
                  title={t('school_1_name')}
                  subtitle="Busan Kitchen Studio"
                  koreanAddress="부산광역시 중구 중앙대로 29번길 8, 지하 1층"
                  address={t('school_1_loc')}
                  imageUrl="/images/services/food.png"
                  mapQuery="배로모디"
                  isNested={true}
                  hideTitle={true}
                />
              </div>
            </article>

            {/* Spot 2 */}
            <article className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-stretch border border-cream-300 bg-cream-50 p-8 lg:p-12 transition-colors hover:bg-cream-100/30">
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <header className="mb-6">
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-gold-700">
                      02 · Gyeongju Bomun Outskirts
                    </span>
                    <h3 className="mt-2 font-serif text-3xl font-light leading-snug text-ink-900 md:text-4xl">
                      {t('school_2_name')}
                    </h3>
                    <p className="mt-3 font-serif text-base font-light italic leading-relaxed text-gold-800">
                      &ldquo;{t('school_2_tagline')}&rdquo;
                    </p>
                  </header>
                  <div className="space-y-6 border-t border-cream-300/60 pt-6 text-sm">
                    <div>
                      <h4 className="mb-1.5 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-ink-800">
                        <MapPin className="h-3.5 w-3.5 text-gold-600" />
                        {t('common_labels.location')}
                      </h4>
                      <p className="pl-5 text-ink-700 leading-relaxed">{t('school_2_loc')}</p>
                    </div>
                    <div>
                      <h4 className="mb-1.5 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-ink-800">
                        <DollarSign className="h-3.5 w-3.5 text-gold-600" />
                        {t('common_labels.price')}
                      </h4>
                      <p className="pl-5 text-ink-700 font-medium leading-relaxed">
                        {t('school_2_price')}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1.5 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-ink-800">
                        <Sparkles className="h-3.5 w-3.5 text-gold-600" />
                        {t('common_labels.included')}
                      </h4>
                      <p className="pl-5 text-ink-700 leading-relaxed">{t('school_2_inclusions')}</p>
                    </div>
                    <div>
                      <h4 className="mb-1.5 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-ink-800">
                        <Star className="h-3.5 w-3.5 text-gold-600" />
                        {t('common_labels.reviews')}
                      </h4>
                      <p className="pl-5 text-ink-700 leading-relaxed italic">
                        &ldquo;{t('school_2_reviews')}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-cream-300/60 pt-6">
                  <h4 className="mb-1.5 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-ink-800">
                    <Award className="h-3.5 w-3.5 text-gold-600" />
                    {t('common_labels.ideal')}
                  </h4>
                  <p className="pl-5 font-serif text-sm font-light leading-relaxed text-gold-800">
                    {t('school_2_ideal')}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <SpotLocationMap
                  title={t('school_2_name')}
                  subtitle="Medicinal Gastronomy Institute"
                  koreanAddress="경상북도 경주시 현곡면 용담로 443-51"
                  address={t('school_2_loc')}
                  imageUrl="/images/services/food.png"
                  mapQuery="경주 라선재"
                  isNested={true}
                  hideTitle={true}
                />
              </div>
            </article>
          </div>
        </Container>
      </Section>

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
        ctaPrimary={tc('cta_book')}
        ctaSecondary={tc('cta_concierge')}
      />
    </>
  );
}
