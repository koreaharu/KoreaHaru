import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
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
      <Hero />
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
