import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const GYEONGJU_SPOTS = [
  {
    slug: 'donggung',
    title: 'Donggung Palace & Wolji Pond',
    subtitle: 'The Gold-Glow Miracle of Silla Night',
    description: 'An ancient palace complex of the Silla Kingdom, famous for its breathtaking night reflection of illuminated wooden pavilions over a quiet lotus pond.',
    image: '/images/destinations/gyeongju_donggung_hero.png',
    type: 'Must-visit Spot',
  },
  {
    slug: 'hwangridan',
    title: 'Hwangridan-gil',
    subtitle: 'A Modern Walk Through Ancient Roofs',
    description: 'A vibrant street filled with traditional Hanok buildings turned into trendy cafes, local shops, and street-food stalls, with a gorgeous view of traditional roofs.',
    image: '/images/destinations/gyeongju_hwangridan_hero.png',
    type: 'Trendy Hotspot',
  },
  {
    slug: 'bulguksa',
    title: 'Bulguksa Temple',
    subtitle: 'The UNESCO World Heritage Stone Masterpiece',
    description: 'A deeply sacred, 8th-century Buddhist temple housing majestic stone pagodas and traditional wooden halls, surrounded by pine forests.',
    image: '/images/destinations/gyeongju_bulguksa.png',
    type: 'UNESCO Heritage',
  },
  {
    slug: 'daereungwon',
    title: 'Daereungwon Tomb Complex',
    subtitle: 'Majestic Royal Hills of the Ancient Silla Kings',
    description: 'A massive park of perfectly manicured, giant grass-covered tomb hills holding the royal relics of Silla kings and queens, creating a peaceful green wonderland.',
    image: '/images/destinations/gyeongju_daereungwon.png',
    type: 'Natural Landmark',
  },
];

export default function GyeongjuDestinationsPage() {
  const mosaicImages = [
    '/images/destinations/gyeongju_bulguksa.png',
    '/images/destinations/gyeongju_daereungwon.png',
    '/images/destinations/gyeongju.png',
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
                  alt={`Gyeongju Mosaic ${index}`}
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
            Gyeongju
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-cream-50 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] md:text-xl">
            The ancient capital of the Silla Kingdom, Gyeongju is an open-air museum where gold crowns, royal hills, and stone temples tell the story of a thousand-year dynasty.
          </p>
        </Container>
      </section>

      {/* Spots Grid */}
      <Section tone="default">
        <Container>
          <header className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-light md:text-4xl text-ink-900">Must-visit Spots & Local Favorites</h2>
            <p className="mt-4 text-ink-600">
              Hand-picked locations that capture the spiritual majesty and trendy street culture of ancient Gyeongju, perfect for history enthusiasts and café lovers alike.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {GYEONGJU_SPOTS.map((spot) => (
              <Link
                key={spot.slug}
                href={`/destinations/gyeongju/${spot.slug}`}
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
            <h2 className="mt-4 font-serif text-3xl font-light text-ink-900 md:text-5xl">Featured: Gyeongju Silla Heritage Tour</h2>
            <p className="mt-4 text-ink-600 max-w-2xl mx-auto text-sm leading-relaxed">
              We have designed the ultimate 1-day signature route along Gyeongju's 1,000-year Silla capital history. Experience a perfect harmony of royal green tomb mounds, traditional Hanok cafe streets, stone UNESCO masterpieces, and shimmering golden twilight ponds.
            </p>
          </div>

          <div className="bg-white border border-cream-200 p-6 md:p-8 rounded-sm shadow-sm max-w-4xl mx-auto">
            {/* Timeline Row Summary */}
            <div className="flex flex-col md:flex-row gap-8 items-stretch">
              {/* Tour Steps Card */}
              <div className="flex-1 bg-cream-50/50 p-6 border border-cream-200 rounded-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-bold bg-gold-600 text-white px-2 py-0.5 rounded-sm uppercase tracking-wider">1-Day Route</span>
                    <h4 className="font-serif text-base font-semibold text-ink-900">Tombs, Hanoks & Golden Ponds</h4>
                  </div>
                  <ul className="space-y-4 text-xs text-ink-700">
                    <li className="flex gap-2">
                      <span className="text-gold-600 font-bold">09:30 AM</span>
                      <span>❶ <strong>Bulguksa Temple</strong> (UNESCO stone masterpieces, Dabotap & Seokgatap pagodas & hidden Geukrakjeon golden pig)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-gold-600 font-bold">12:00 PM</span>
                      <span>❷ <strong>Daereungwon & Hwangridan-gil</strong> (23 royal tomb hills, Cheonmachong gold exhibition, Hanok cafe alleys & Sibwon bread)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-gold-600 font-bold">06:30 PM</span>
                      <span>❸ <strong>Donggung Palace & Wolji Pond</strong> (Twilight gold pavilion reflections over the royal lotus pond & kiosk ticket shortcuts)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Chauffeur Benefit Card */}
              <div className="flex-1 bg-cream-50/50 p-6 border border-cream-200 rounded-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-bold bg-gold-600 text-white px-2 py-0.5 rounded-sm uppercase tracking-wider">Exclusive Travel Option</span>
                    <h4 className="font-serif text-base font-semibold text-ink-900">Why Choose Private Chauffeur?</h4>
                  </div>
                  <p className="text-xs text-ink-600 leading-relaxed mb-4">
                    While central Gyeongju (Daereungwon, Hwangridan-gil) is dense and walkable, remote sites like Bulguksa Temple are situated far out on Mt. Toham.
                  </p>
                  <ul className="space-y-2 text-xs text-ink-700">
                    <li className="flex gap-1.5 items-center">
                      <span className="text-gold-600">⛰️</span>
                      <span>Bypass tedious 40-minute rural bus lines up the mountainside</span>
                    </li>
                    <li className="flex gap-1.5 items-center">
                      <span className="text-gold-600">🎒</span>
                      <span>Leave all shopping bags and heavy Hanbok rentals in your vehicle</span>
                    </li>
                    <li className="flex gap-1.5 items-center">
                      <span className="text-gold-600">🚉</span>
                      <span>Comfortable, direct pick-up/drop-off at the KTX station</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Premium Chauffeur Promo Hook */}
            <div className="mt-8 pt-6 border-t border-cream-200 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-ink-600 max-w-xl text-center md:text-left">
                💡 <strong>Chauffeur Benefit:</strong> Wolji Pond is extremely crowded after dark, making catching public buses or taxis exhausting. Your chauffeur will coordinate the perfect pickup for a smooth exit!
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
          <h2 className="font-serif text-3xl font-light text-ink-900">Have questions about Gyeongju?</h2>
          <p className="mt-4 text-ink-600">Our local buddies are happy to share their personal stories and tips with you.</p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="secondary">Ask a Local Friend</Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
