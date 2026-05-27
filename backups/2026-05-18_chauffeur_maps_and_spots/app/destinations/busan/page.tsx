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
