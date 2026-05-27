import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const TONGYEONG_SPOTS = [
  {
    slug: 'dipirang',
    title: 'Dipirang Digital Theme Park',
    subtitle: 'A Symphony of Light in the Midnight Forest',
    description: 'An immersive outdoor digital theme park that transforms an ancient park trail into a magical, glowing world of laser lights, projection mapping, and fairytale soundscapes.',
    image: '/images/destinations/tongyeong.png',
    type: 'Must-visit Spot',
  },
  {
    slug: 'dongpirang',
    title: 'Dongpirang Mural Village',
    subtitle: 'The Seaside Hill Covered in Color',
    description: 'A historic hillside village overlooking Tongyeong Port, famous for its winding alleys covered in beautiful murals, rooftop cafes, and scenic ocean panoramas.',
    image: 'https://images.unsplash.com/photo-1548115184-bc65ee477ad3?w=800&q=80&auto=format&fit=crop',
    type: 'Scenic Village',
  },
  {
    slug: 'cablecar',
    title: 'Tongyeong Hallyeosudo Cable Car',
    subtitle: 'Breathtaking Vista of a Thousand Islands',
    description: 'A grand cable car ride ascending to Mireuksan Peak, offering a spectacular 360-degree panorama of the emerald Southern Sea dotted with dozens of tiny green islands.',
    image: '/images/destinations/tongyeong_cablecar.png',
    type: 'Scenic Look-out',
  },
  {
    slug: 'luge',
    title: 'Skyline Luge Tongyeong',
    subtitle: 'A Thrilling Ride Down the Lush Mountain',
    description: 'A thrilling outdoor adventure ride where you steer your own three-wheeled luge cart down curved concrete tracks winding through the forest of Mireuksan.',
    image: '/images/destinations/tongyeong_luge.png',
    type: 'Outdoor Thrills',
  },
];

export default function TongyeongDestinationsPage() {
  const mosaicImages = [
    '/images/destinations/tongyeong_cablecar.png',
    '/images/destinations/tongyeong_luge.png',
    '/images/destinations/tongyeong.png',
    '/images/destinations/busan_blueline.png',
    '/images/destinations/busan_yonggungsa.png',
    '/images/destinations/busan_gwangalli.png',
    '/images/destinations/busan_huinnyeoul.png',
    '/images/destinations/busan_songdo.png',
    '/images/destinations/busan_oryukdo.png',
    '/images/destinations/geoje.png',
    '/images/destinations/namhae.png',
    '/images/home/hero.png'
  ];

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Hero with Dense Photo Mosaic Background */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-ink-950">
        {/* Photo Grid Wall (Mosaic) */}
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
                  alt={`Tongyeong Mosaic ${index}`}
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
            Tongyeong
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-cream-50 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] md:text-xl">
            The "Naples of Korea," Tongyeong is a coastal city of majestic island harbors, glowing light parks, thrilling luge tracks, and deep artistic roots.
          </p>
        </Container>
      </section>

      {/* Spots Grid */}
      <Section tone="default">
        <Container>
          <header className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-light md:text-4xl text-ink-900">Must-visit Spots & Local Favorites</h2>
            <p className="mt-4 text-ink-600">
              Hand-picked locations that showcase the maritime charm and thrilling outdoor attractions of Tongyeong, perfect for coastal explorers and families.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {TONGYEONG_SPOTS.map((spot) => (
              <Link
                key={spot.slug}
                href={`/destinations/tongyeong/${spot.slug}`}
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
          <h2 className="font-serif text-3xl font-light text-ink-900">Have questions about Tongyeong?</h2>
          <p className="mt-4 text-ink-600">Our local buddies are happy to share their personal stories and tips with you.</p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="secondary">Ask a Local Friend</Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
