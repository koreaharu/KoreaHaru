import type { Metadata } from 'next';
import { EditorialHero } from '@/components/home/EditorialHero';
import { ExchangeRateWidget } from '@/components/home/ExchangeRateWidget';
import { DirectBookingWidget } from '@/components/home/DirectBookingWidget';
import { QuickBookingBar } from '@/components/home/QuickBookingBar';
import { ServiceCategories } from '@/components/home/ServiceCategories';
import { FeaturedDestinations } from '@/components/home/FeaturedDestinations';
import { WhyKoreaHaru } from '@/components/home/WhyKoreaHaru';
import { Testimonials } from '@/components/home/Testimonials';
import { LatestFromJournal } from '@/components/home/LatestFromJournal';
import { CtaStrip } from '@/components/home/CtaStrip';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'KoreaHaru — A Curated Journey Through Korea',
  description:
    'Private chauffeurs, hand-picked stays, and a 24/7 concierge across Busan, Gyeongnam, Ulsan, Daegu, and Pohang.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      {/* Editorial Split-Screen Hero acting as the ultimate high-fashion magazine cover */}
      <EditorialHero />
      
      {/* Live Travel Dashboard: Real-time Exchange Rates & Booking Channels */}
      <section className="bg-cream-100/60 py-10 md:py-12 border-b border-cream-300 relative z-20">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:justify-between">
            {/* Exchange Rate Card */}
            <div className="w-full lg:w-[32%] flex justify-center lg:justify-start">
              <ExchangeRateWidget />
            </div>
            
            {/* Direct Booking Comparison Ticker & Links */}
            <div className="w-full lg:w-[68%] flex items-center">
              <DirectBookingWidget />
            </div>
          </div>
        </div>
      </section>

      <FeaturedDestinations />
      <QuickBookingBar />
      <ServiceCategories />
      <WhyKoreaHaru />
      <Testimonials />
      <LatestFromJournal />
      <CtaStrip />
    </>
  );
}
