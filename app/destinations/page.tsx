import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const CITIES = [
  {
    slug: 'busan',
    title: 'Busan',
    tagline: 'Maritime Metropolis',
    description: 'A dynamic coastal city where mountains meet the sea, traditional markets buzz next to modern skyscrapers, and the neon lights of Gwangan Bridge paint the night ocean.',
    image: '/images/destinations/busan.png',
  },
  {
    slug: 'gyeongju',
    title: 'Gyeongju',
    tagline: 'Ancient Capital',
    description: 'An open-air museum breathing with 1,000 years of Silla history. Walk among towering royal grass tombs, ancient temples, and palaces that glow gold at twilight.',
    image: '/images/destinations/gyeongju.png',
  },
  {
    slug: 'tongyeong',
    title: 'Tongyeong',
    tagline: 'Artistic Harbor',
    description: 'The "Naples of Korea." A picturesque harbor city of cobalt waters, legendary composers, vibrant mural alleys, and immersive nighttime digital art woods.',
    image: '/images/destinations/tongyeong.png',
  },
  {
    slug: 'geoje',
    title: 'Geoje',
    tagline: 'Dramatic Coastline',
    description: 'A rugged island of breathtaking coastal cliffs, peaceful black pebble beaches, romantic windmills, and scenic winding drive routes overlooking the archipelago.',
    image: '/images/destinations/geoje.png',
  },
  {
    slug: 'namhae',
    title: 'Namhae',
    tagline: 'Island Sanctuary',
    description: 'A peaceful, hidden island retreat of pure emerald waters, traditional terraced rice fields overlooking the sea, and sacred cliffside temples hidden in the clouds.',
    image: '/images/destinations/namhae.png',
  },
];

export default function DestinationsIndexPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[55vh] w-full overflow-hidden bg-ink-900">
        <Image
          src="/images/home/hero.png"
          alt="Korea Scenic Landscape"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
        <Container className="relative flex h-full flex-col justify-end pb-16 text-cream-50">
          <p className="eyebrow text-gold-400">Curated Guides</p>
          <h1 className="mt-4 font-serif text-5xl font-light md:text-7xl">Korea, beyond the obvious</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-100/90">
            Ditch the typical tourist traps. Explore our curated selection of southern Korea’s most stunning, soulful destinations—vetted and recommended by local friends.
          </p>
        </Container>
      </section>

      {/* Cities Grid */}
      <Section tone="default">
        <Container>
          <div className="space-y-24">
            {CITIES.map((city, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={city.slug} 
                  className={`flex flex-col gap-12 lg:items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* City Image */}
                  <Link 
                    href={`/destinations/${city.slug}`}
                    className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-ink-100 shadow-md group lg:w-1/2"
                  >
                    <Image
                      src={city.image}
                      alt={city.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-ink-900/10 transition-colors duration-500 group-hover:bg-ink-900/0" />
                  </Link>

                  {/* City Description */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-700">
                        {city.tagline}
                      </p>
                      <h2 className="mt-2 font-serif text-4xl font-light text-ink-900">
                        {city.title}
                      </h2>
                    </div>
                    <p className="text-lg leading-relaxed text-ink-600">
                      {city.description}
                    </p>
                    <div className="pt-4">
                      <Link
                        href={`/destinations/${city.slug}`}
                        className="inline-flex items-center text-sm font-semibold tracking-wider text-ink-900 uppercase border-b border-ink-900 pb-1 hover:text-gold-700 hover:border-gold-700 transition-colors"
                      >
                        Explore {city.title}
                        <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </div>
  );
}
