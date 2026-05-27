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
  title: 'Premium Surfing Experiences in Busan · KoreaHaru',
  description:
    'Vetted luxury surfing schools and ocean academies across Songjeong Beach and Imrang Beach in Busan. Experience academic, safe coaching with private amenities.',
  path: '/services/experiences/surfing',
});

export default function SurfingExperiencePage() {
  const t = useTranslations('services.experiences.surfing');
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
    { label: t('price_group_label'), value: t('price_group_value') },
    { label: t('price_private_label'), value: t('price_private_value') },
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

      {/* Premium Surfing Schools Section with Google Maps Integration */}
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
            {/* School 1 */}
            <article className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-stretch border border-cream-300 bg-cream-50 p-8 lg:p-12 transition-colors hover:bg-cream-100/30">
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <header className="mb-6">
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-gold-700">
                      01 · Songjeong Beach
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
                  subtitle="Songjeong Surfing Pioneer"
                  koreanAddress="부산광역시 해운대구 송정해변로 28"
                  address={t('school_1_loc')}
                  imageUrl="/images/services/experiences.png"
                  mapQuery="송정서핑학교"
                  isNested={true}
                  hideTitle={true}
                />
              </div>
            </article>

            {/* School 2 */}
            <article className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-stretch border border-cream-300 bg-cream-50 p-8 lg:p-12 transition-colors hover:bg-cream-100/30">
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <header className="mb-6">
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-gold-700">
                      02 · Songjeong Beach (Center)
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
                  subtitle="Songjeong Surf Resort"
                  koreanAddress="부산광역시 해운대구 송정해변로 50"
                  address={t('school_2_loc')}
                  imageUrl="/images/services/experiences.png"
                  mapQuery="서프홀릭 부산송정본점"
                  isNested={true}
                  hideTitle={true}
                />
              </div>
            </article>

            {/* School 3 */}
            <article className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-stretch border border-cream-300 bg-cream-50 p-8 lg:p-12 transition-colors hover:bg-cream-100/30">
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <header className="mb-6">
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-gold-700">
                      03 · Imrang Beach
                    </span>
                    <h3 className="mt-2 font-serif text-3xl font-light leading-snug text-ink-900 md:text-4xl">
                      {t('school_3_name')}
                    </h3>
                    <p className="mt-3 font-serif text-base font-light italic leading-relaxed text-gold-800">
                      &ldquo;{t('school_3_tagline')}&rdquo;
                    </p>
                  </header>
                  <div className="space-y-6 border-t border-cream-300/60 pt-6 text-sm">
                    <div>
                      <h4 className="mb-1.5 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-ink-800">
                        <MapPin className="h-3.5 w-3.5 text-gold-600" />
                        {t('common_labels.location')}
                      </h4>
                      <p className="pl-5 text-ink-700 leading-relaxed">{t('school_3_loc')}</p>
                    </div>
                    <div>
                      <h4 className="mb-1.5 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-ink-800">
                        <DollarSign className="h-3.5 w-3.5 text-gold-600" />
                        {t('common_labels.price')}
                      </h4>
                      <p className="pl-5 text-ink-700 font-medium leading-relaxed">
                        {t('school_3_price')}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1.5 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-ink-800">
                        <Sparkles className="h-3.5 w-3.5 text-gold-600" />
                        {t('common_labels.included')}
                      </h4>
                      <p className="pl-5 text-ink-700 leading-relaxed">{t('school_3_inclusions')}</p>
                    </div>
                    <div>
                      <h4 className="mb-1.5 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-ink-800">
                        <Star className="h-3.5 w-3.5 text-gold-600" />
                        {t('common_labels.reviews')}
                      </h4>
                      <p className="pl-5 text-ink-700 leading-relaxed italic">
                        &ldquo;{t('school_3_reviews')}&rdquo;
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
                    {t('school_3_ideal')}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <SpotLocationMap
                  title={t('school_3_name')}
                  subtitle="Imrang Secluded Surf Oasis"
                  koreanAddress="부산광역시 기장군 장안읍 임랑해변길 43"
                  address={t('school_3_loc')}
                  imageUrl="/images/services/experiences.png"
                  mapQuery="임랑서핑학교"
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
