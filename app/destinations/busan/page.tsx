import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const BUSAN_SPOTS = [
  {
    slug: 'gamcheon',
    title: 'Gamcheon Culture Village',
    subtitle: 'The "Machu Picchu" of Busan',
    description: 'A vibrant mountainside village known for its colorful houses, winding alleys, and artistic murals.',
    image: '/images/destinations/busan-gamcheon-detail.png',
    type: 'Must-visit Spot',
  },
  {
    slug: 'hwangnyeongsan',
    title: 'Hwangnyeongsan Peak',
    subtitle: 'The Best Night View in Korea',
    description: 'A mountain peak offering a breathtaking 360-degree panorama of Busan, especially stunning at night.',
    image: '/images/home/hero.png',
    type: 'Scenic Viewpoint',
  },
  {
    slug: 'blueline',
    title: 'Haeundae Blueline Park',
    subtitle: 'The Scenic Retro Beach Railway',
    description: 'An adorable eco-friendly coastal railway running along Haeundae’s eastern cliffs, offering colorful retro Sky Capsules and sweeping sea views.',
    image: '/images/destinations/busan_blueline.png',
    type: 'Scenic Railway',
  },
  {
    slug: 'yonggungsa',
    title: 'Haedong Yonggungsa Temple',
    subtitle: 'The Temple Built on the Rocky Sea Edge',
    description: 'Unlike most Korean temples hidden deep in the mountains, this breathtaking Buddhist sanctuary sits directly on the rocky coastal edge, facing the crashing waves.',
    image: '/images/destinations/busan_yonggungsa.png',
    type: 'Sacred Landmark',
  },
  {
    slug: 'gwangalli',
    title: 'Gwangalli Beach',
    subtitle: 'The Radiant Heart of Busan’s Nightlife',
    description: 'A stunning crescent beach famous for its lively café street, weekly spectacular drone light shows, and the iconic, glowing Gwangan Bridge.',
    image: '/images/destinations/busan_gwangalli.png',
    type: 'Trendy Beachfront',
  },
  {
    slug: 'huinnyeoul',
    title: 'Huinnyeoul Culture Village',
    subtitle: 'The Cliffside Santorini of Busan',
    description: 'A quiet, historic residential neighborhood perched high on the cliffs of Yeongdo Island, famous for its narrow coastal lanes, blue sea, and cozy cafes.',
    image: '/images/destinations/busan_huinnyeoul.png',
    type: 'Artistic Cliff Village',
  },
  {
    slug: 'songdo',
    title: 'Songdo Marine Cable Car',
    subtitle: 'Gliding Across the Open Sea',
    description: 'A thrilling cable car ride that glides 86 meters above the open ocean, connecting Songdo Beach to Amnam Park with crystal-bottom cabins.',
    image: '/images/destinations/busan_songdo.png',
    type: 'Coastal Attraction',
  },
  {
    slug: 'oryukdo',
    title: 'Oryukdo Skywalk & Cliffs',
    subtitle: 'Walking Above the Border of Two Seas',
    description: 'A dramatic U-shaped glass-bottom walkway projecting over a 35-meter high coastal cliff, overlooking the dividing line between East and South seas.',
    image: '/images/destinations/busan_oryukdo.png',
    type: 'Clifftop Lookout',
  },
];

export default function BusanDestinationsPage() {
  const mosaicImages = [
    '/images/destinations/busan_blueline.png',
    '/images/destinations/busan_yonggungsa.png',
    '/images/destinations/busan_gwangalli.png',
    '/images/destinations/busan_huinnyeoul.png',
    '/images/destinations/busan_songdo.png',
    '/images/destinations/busan_oryukdo.png',
    '/images/destinations/busan.png',
    '/images/destinations/busan-gamcheon-detail.png',
    '/images/destinations/gyeongju.png',
    '/images/destinations/tongyeong.png',
    '/images/destinations/geoje.png',
    '/images/destinations/namhae.png',
    '/images/home/hero.png'
  ];

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Hero with Dense Photo Mosaic Background */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-ink-950">
        {/* Photo Grid Wall (Mosaic of ~240 tiles depending on screen size) */}
        <div 
          className="absolute inset-0 grid gap-0.5 opacity-20"
          style={{ 
            gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
            gridAutoRows: '80px'
          }}
        >
          {Array.from({ length: 240 }).map((_, index) => {
            const imageSrc = mosaicImages[index % mosaicImages.length];
            return (
              <div 
                key={index} 
                className="relative h-full w-full overflow-hidden bg-ink-900 transition-transform duration-500 hover:scale-105 hover:z-10 hover:opacity-100"
              >
                <img
                  src={imageSrc}
                  alt={`Busan Mosaic ${index}`}
                  className="h-full w-full object-cover opacity-80"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>

        {/* Premium Dark Glassmorphism Overlay (Muted for extreme text readability) */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/85 to-ink-950/60 backdrop-blur-[2.5px]" />
        <div className="absolute inset-0 bg-ink-950/30" />

        {/* Hero Content */}
        <Container className="relative flex h-full flex-col justify-end pb-16 text-cream-50 z-10">
          <p className="eyebrow text-gold-400 font-bold uppercase tracking-[0.25em] text-xs md:text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Destination
          </p>
          <h1 className="mt-4 font-serif text-6xl font-bold tracking-wide text-cream-50 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] md:text-8xl">
            Busan
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-cream-50 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] md:text-xl">
            A dynamic coastal city where mountains meet the sea, tradition meets modernity, and every corner tells a story.
          </p>
        </Container>
      </section>

      {/* Spots Grid */}
      <Section tone="default">
        <Container>
          <header className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-light md:text-4xl text-ink-900">Must-visit Spots & Local Favorites</h2>
            <p className="mt-4 text-ink-600">
              Hand-picked locations that capture the true heart of Busan, from historic mountainside villages to breathtaking clifftops and coastal railways.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {BUSAN_SPOTS.map((spot) => (
              <Link
                key={spot.slug}
                href={`/destinations/busan/${spot.slug}`}
                className="group flex flex-col overflow-hidden bg-white shadow-sm transition-all hover:shadow-md rounded-sm"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
                  <Image
                    src={spot.image}
                    alt={spot.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="bg-ink-900/80 px-3 py-1 text-[10px] uppercase tracking-widest text-cream-50 backdrop-blur-sm rounded-sm">
                      {spot.type}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-serif text-2xl font-light text-ink-900">{spot.title}</h3>
                  <p className="mt-2 text-sm font-medium text-gold-700">{spot.subtitle}</p>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-ink-600">{spot.description}</p>
                  <div className="mt-8 flex items-center text-sm font-medium text-ink-900">
                    <span>Explore details</span>
                    <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 🗺️ Featured Travel Course Recommendation */}
      <Section tone="cream" className="border-t border-cream-200 bg-cream-100/40">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-700">Curated Signature Tour</span>
            <h2 className="mt-4 font-serif text-3xl font-light text-ink-900 md:text-5xl">Featured: 2-Day Busan Coastal Roadmap</h2>
            <p className="mt-4 text-ink-600 max-w-2xl mx-auto text-sm leading-relaxed">
              We have designed the ultimate 2-day roadmap along Busan's glittering coastline. Experience a perfect blend of dramatic ocean cliffs, retro trains, bustling local fish markets, and authentic nightlife in total comfort.
            </p>
          </div>

          <div className="bg-white border border-cream-200 p-6 md:p-8 rounded-sm shadow-sm max-w-4xl mx-auto">
            {/* Timeline Row Summary */}
            <div className="flex flex-col md:flex-row gap-8 items-stretch">
              {/* Day 1 Card */}
              <div className="flex-1 bg-cream-50/50 p-6 border border-cream-200 rounded-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-bold bg-gold-600 text-white px-2 py-0.5 rounded-sm uppercase tracking-wider">Day 1</span>
                    <h4 className="font-serif text-base font-semibold text-ink-900">Cliffs & Beach Nightlife</h4>
                  </div>
                  <ul className="space-y-3.5 text-xs text-ink-700">
                    <li className="flex gap-2">
                      <span className="text-gold-600 font-bold">01:00 PM</span>
                      <span>❶ <strong>Oryukdo Skywalk</strong> (Transparent bridge & Sunrise Park flowers)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-gold-600 font-bold">02:30 PM</span>
                      <span>🛍️ <strong>Namcheon-dong "Bakery Street"</strong> (Trendy local pastries & photos)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-gold-600 font-bold">05:00 PM</span>
                      <span>❷ <strong>Gwangalli Beach</strong> (Ocean view, Pocha nightlife & Saturday Drone Show)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Day 2 Card */}
              <div className="flex-1 bg-cream-50/50 p-6 border border-cream-200 rounded-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-bold bg-gold-600 text-white px-2 py-0.5 rounded-sm uppercase tracking-wider">Day 2</span>
                    <h4 className="font-serif text-base font-semibold text-ink-900">Trains & Oceanside Temples</h4>
                  </div>
                  <ul className="space-y-3.5 text-xs text-ink-700">
                    <li className="flex gap-2">
                      <span className="text-gold-600 font-bold">10:00 AM</span>
                      <span>❸ <strong>Haeundae Blueline Park</strong> (Retro Sky Capsules & Cheongsapo crossing)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-gold-600 font-bold">12:30 PM</span>
                      <span>🐟 <strong>Gijang Market</strong> (Giant king crabs & raw traditional culture energy)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-gold-600 font-bold">02:00 PM</span>
                      <span>❹ <strong>Haedong Yonggungsa Temple</strong> (Sacred oceanside cliffside temple)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-gold-600 font-bold">04:00 PM</span>
                      <span>☕ <strong>Coastal Cafe Stroll</strong> (Premium Gijang architect ocean-view cafes)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Premium Chauffeur Promo Hook */}
            <div className="mt-8 pt-6 border-t border-cream-200 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-ink-600 max-w-xl text-center md:text-left">
                💡 <strong>Chauffeur Benefit:</strong> This course covers over 45 kilometers of scenic coastline. Waiting for crowded public buses or booking multiple remote taxis takes hours. Enjoy this full roadmap stress-free with our private chauffeur service!
              </p>
              <Button href="/services/chauffeur" className="w-full md:w-auto shrink-0 bg-ink-900 text-cream-50 hover:bg-gold-700 border-transparent">
                View Interactive Route Map
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="cream" className="border-t border-cream-200">
        <Container className="text-center">
          <h2 className="font-serif text-3xl font-light text-ink-900">Have questions about Busan?</h2>
          <p className="mt-4 text-ink-600">Our local buddies are happy to share their personal stories and tips with you.</p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="secondary">Ask a Local Friend</Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
