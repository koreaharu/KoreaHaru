import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Divider } from '@/components/ui/Divider';
import { Button } from '@/components/ui/Button';
import { TaxiCard } from '@/components/destinations/TaxiCard';
import { SpotLocationMap } from '@/components/destinations/SpotLocationMap';
import { CuratedCoursePanel } from '@/components/destinations/CuratedCoursePanel';

interface SpotDetail {
  title: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  sections: {
    title: string;
    content: string;
    image?: string;
  }[];
  hours: string;
  tips: string;
  address: string;
  koreanAddress: string;
  mapQuery?: string;
  taxi?: {
    destination: string;
    destinationEn: string;
    message: string;
    waitTip: string;
    waitTipEn: string;
  };
}

const SPOT_DETAILS: Record<string, SpotDetail> = {
  boriam: {
    title: 'Geumsan Boriam Hermitage',
    subtitle: 'The Sanctuary Suspended in the Clouds',
    heroImage: '/images/destinations/namhae_boriam.png',
    intro: 'Clinging tightly to the sheer vertical cliffs of Geumsan Mountain is Boriam Hermitage, one of the three most sacred Buddhist prayer sites in Korea. Established in 683 AD by the legendary monk Wonhyo, this breathtaking sanctuary is suspended high above the clouds. As you stand by the giant stone Buddha looking down at the misty, cobalt-blue Southern Sea, the ocean wind whispers prayers through the pine forests, offering a deeply spiritual experience.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Geumsan Boriam Hermitage / 금산 보리암\n\n• Hours: Open 24/7 all year round. (The ticket booth operates from 04:00 AM to 08:00 PM. Many travelers visit in the very early morning to catch the spectacular sunrise).\n\n• Duration: Approx. 15–20 minutes to walk up from the 2nd parking lot to the temple. Budget around 1.5 to 2 hours in total to thoroughly explore the temple shrines and the adjacent cliffside rest stop.'
      },
      {
        title: '2. How to Get There',
        content: '• Travel Tip: Perched high up on a craggy mountain cliff. The golden rule is to use a rental car or taxi to drive up to the \'Boriam 2nd Parking Lot\' situated halfway up the mountain.\n\n• Text for Map Apps (Copy & Paste):\n  - Destination Name: 금산보리암 제2주차장 (Boriam 2nd Parking Lot)\n\n• Shuttle Bus Info: On weekends and peak seasons, the upper 2nd parking lot fills up instantly. You must park at the \'1st Parking Lot\' at the base and transfer to a local village shuttle bus (2,500 KRW round-trip). For backpackers, take a rural bus from Namhae Bus Terminal, get off at the \'Bokgok (Boriam)\' stop, and catch this shuttle bus.'
      },
      {
        title: '3. Tickets & Fares',
        content: '• Admission Fee: Free (Historical admission fees have been completely waived).\n\n• Other Costs: Standard parking fees apply (4,000 KRW during off-peak / 5,000 KRW during peak season), plus village shuttle bus fares if parking at the base.'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: Due to its remote mountain location, there are no luggage lockers at the temple. Because the path requires navigating steep inclines, leaving heavy bags inside your vehicle or at the main bus terminal is highly advised.\n\n• Restrooms: Public restrooms are available at the 2nd parking lot and inside the temple complex.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• Haesu Gwaneum Statue & Archipelago View: The grand stone Goddess of Mercy overlooking the ocean serves as the crown jewel of this mountain. The view looking down captures jagged rock towers, the deep blue southern sea, and scores of distant islands. As one of Korea\'s top three sacred Buddhist prayer sites, the air is often rich with incense.\n\n• Geumsan Sanjang (Cliffside Cabin): A 5 to 10-minute walk along the mountain trail past the main temple leads to a tiny, rustic snack shack resting on a sheer cliff. Sitting at the outdoor plastic tables while eating instant hot pot ramyun and seafood pancakes with an ancient mountain backdrop is a wildly viral Instagram favorite.',
        image: '/images/destinations/namhae_boriam_sanjang.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: During pleasant weekend afternoons or New Year’s Day, traffic jams heading up to the 2nd parking lot can back up for over an hour at the mountain base. Arriving early in the morning (before 08:00 AM to 09:00 AM) is heavily recommended.\n\n• Warnings: While the main trail is well-paved, it consists of a continuous, moderately steep incline. Heels, sandals, or flimsy flip-flops will cause slipping or sore feet; comfortable sneakers are essential.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• 🍱 Jaedu Sikdang: 15-min drive from the mountain / A legendary local spot specializing in Namhae’s primary culinary staple: Myeolchi-ssambap (Spicy braised fresh anchovies wrapped in leafy greens), paired with delicious homemade acorn jelly. Ideal for experiencing authentic, savory local flavors.\n\n• ☕ Aenggang Market: 17-min drive from the mountain / A beautifully curated modern gift shop packaged inside a tranquil, minimalist traditional Hanok house. They sell premium local staples (anchovies, seaweed) and double as a tea house serving hot hojicha and matcha.'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "A breathtaking cliffside Buddhist sanctuary framed by dramatic rock towers, offering travelers the ultimate bird\'s-eye panorama of the southern archipelago."\n\n• Rating: ⭐⭐⭐⭐⭐ (5/5, The number one priority landmark in Namhae!)'
      }
    ],
    hours: 'Open daily 24/7 | Ticket booth: 04:00 AM - 08:00 PM',
    tips: 'Show the Hangeul address to your taxi driver: 경남 남해군 상주면 보리암로 666',
    address: '666, Boriam-ro, Sangju-myeon, Namhae-gun, Gyeongsangnam-do',
    koreanAddress: '경상남도 남해군 상주면 보리암로 666',
    mapQuery: '금산 보리암',
    taxi: {
      destination: '남해 복곡 1주차장 (보리암 셔틀버스 매표소)',
      destinationEn: 'Namhae Bokgok Parking 1 (Boriam Shuttle Ticket Office)',
      message: '기사님, 남해 보리암 매표소인 복곡 주차장으로 가주세요.',
      waitTip: '기사님, 남해 다랭이마을로 가주세요.',
      waitTipEn: 'Sir, could you please take me to Namhae Darangee Village?',
    }
  },
  darangee: {
    title: 'Darangee Village',
    subtitle: 'A Symphony of Terraced Rice Paddies',
    heroImage: '/images/destinations/namhae_darangee.png',
    intro: 'Imagine an ancient green staircase made of over a hundred curved, stone-walled steps, descending down a steep mountain cliff directly into the crashing waves of the ocean. Darangee Village is a historic agricultural village in Namhae where, because of the steep terrain, ancestors carved 108 layers of terraced rice paddies by hand, carrying stone by stone. It stands today as a majestic symbol of human strength and rustic beauty.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Namhae Darangee Village / 가천다랭이마을\n\n• Hours: Open 24/7 all year round. However, because it is an active farming community where residents live, visiting during daylight hours before sunset is highly recommended.\n\n• Duration: Approx. 1 hour to 1.5 hours to descend from the roadside parking down through the village alleys to the coastal suspension bridge and walk back up.'
      },
      {
        title: '2. How to Get There',
        content: '• Travel Tip: Nestled along the steep southwestern coastal cliffs of Namhae Island. Because local bus schedules are highly irregular, utilizing a rental car or taxi is paramount to save time and energy.\n\n• Text for Map Apps (Copy & Paste):\n  - Destination Name: 남해다랭이마을 (Namhae Darangee Village) or 다랭이마을 제1주차장 (Darangee Village 1st Parking Lot)\n\n• Public Transit: From Namhae Intercity Bus Terminal, board a bus bound for Gacheon (Namyeon Loop line). Get off at the \'Darangee Village (Gacheon)\' stop, situated right at the roadside entrance (takes about 45 minutes).'
      },
      {
        title: '3. Tickets & Booking',
        content: '• Admission: Free\n\n• Booking: No advance reservation required; open to the public freely. (Roadside public parking lots are also free of charge).'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: There are no luggage lockers inside the village. Because the entire village is built on a severe, steep drop heading down to the sea, dragging a wheelie suitcase is impossible and walking back up with it will cause extreme exhaustion. Leave all heavy baggage inside your vehicle.\n\n• Restrooms: Public restrooms are well-maintained near the upper roadside entrance and scattered across the middle sections of the village.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• Terraced Rice Paddies: Over 100 tiers of narrow, meticulously hand-carved terraced rice fields cascading dramatically down a steep mountain slope directly into the ocean. The view looking down from the roadside observation decks serves as the ultimate postcard photo zone.\n\n• Gacheon Amsu-bawi (Yin-Yang Rocks): A historical local monument located in the center of the village consisting of two massive natural stones resembling male and female forms. It serves as an ancient folk symbol for agricultural fertility and village protection.\n\n• Coastal Suspension Bridge: A small pedestrian bridge connecting rugged coastal cliffs over crashing waves at the absolute bottom of the village.',
        image: '/images/destinations/namhae_darangee_bridge.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: There is absolutely no flat terrain here—the village consists entirely of severe, steep slopes. Walking down is easy, but trekking back up to the parking lot requires a fair amount of physical stamina. It is not recommended for those with knee issues.\n\n• Warnings: Shade is virtually non-existent during peak summer afternoons, making it intensely hot. Bring hats, umbrellas, and water bottles. Wearing high-traction walking shoes or sneakers is absolutely mandatory for safety.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• 🍱 Darangee Matjib: Located inside the village / A traditional Korean restaurant featuring outdoor wooden decks looking out over the paddies and sea. Ordering crisp green-onion seafood pancakes (Pajeon) and savory seasoned anchovies paired with the local specialty, Yuja (Citron) Rice Wine, is pure paradise.\n\n• ☕ Go Cafe Dala: Located inside the village / A charming Hanok-style dessert cafe with a small courtyard. Excellent for sipping a refreshing iced citron ale or eating creamy citron ice cream to catch your breath before tackling the steep uphill trek back to the parking lot.'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "A dramatic coastal agricultural village showcasing over 100 tiers of ancient terraced rice fields slicing down rugged cliffs into the crashing blue waves of Namhae."\n\n• Rating: ⭐⭐⭐⭐☆ (4.5/5)'
      }
    ],
    hours: 'Open daily 24/7 (Best visited during daylight)',
    tips: 'Show the Hangeul address to your taxi driver: 경남 남해군 남면 남면로 679번길 21',
    address: '21, Nammyeon-ro 679beon-gil, Nam-myeon, Namhae-gun, Gyeongsangnam-do',
    koreanAddress: '경상남도 남해군 남면 남면로679번길 21',
    mapQuery: '가천다랭이마을',
    taxi: {
      destination: '남해 다랭이마을 관광안내소',
      destinationEn: 'Namhae Darangee Village Tourist Center',
      message: '기사님, 남해 다랭이마을로 가주세요.',
      waitTip: '기사님, 남해 독일마을로 가주세요.',
      waitTipEn: 'Sir, could you please take me to the Namhae German Village?',
    }
  },
  german: {
    title: 'Namhae German Village',
    subtitle: 'A European Hillside of Orange Roofs',
    heroImage: '/images/destinations/namhae_german.png',
    intro: 'Step into a pocket of Europe tucked away in the southern hills of Korea. Namhae German Village was established in the early 2000s as a settlement for Korean nurses and coal miners who went to West Germany in the 1960s to send remittances home, helping rebuild the nation’s economy. Built as a tribute to their sacrifice, the village features beautifully clean white-walled houses with orange roofs, authentic German bakeries, beer halls, and sausage houses, all offering a majestic view of the blue ocean below.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Namhae German Village / 남해 독일마을\n\n• Hours: Alleys are open 24/7 for strolls. However, the historical museum and independent boutique shops mostly operate between 09:00 AM and 06:00 PM (Restaurants and pubs stay open later until 09:00 PM–10:00 PM). The museum is closed every Monday.\n\n• Duration: Approx. 1.5 to 2 hours to walk through the picturesque residential streets, visit the observatory, tour the exhibition hall, and enjoy classic German beers.'
      },
      {
        title: '2. How to Get There',
        content: '• Travel Tip: Perched on a coastal hillside in Mulgeon-ri on the eastern side of Namhae Island. The roads leading here are exceptionally well-paved compared to other remote spots, making it easy to find.\n\n• Text for Map Apps (Copy & Paste):\n  - Destination Name: 남해독일마을 or 독일마을 도이처플라츠주차장 (German Village Deutscher Platz Parking)\n\n• Public Transit: From Namhae Intercity Bus Terminal, board a bus heading toward Samdong-myeon (via Jijok/Mulgeon). Get off at the \'German Village\' stop and walk uphill for about 5 to 10 minutes.'
      },
      {
        title: '3. Tickets & Booking',
        content: '• Admission & Parking: Free\n\n• Deutscher Platz Exhibition Hall: Adults 1,000 KRW (An indoor museum explaining the profound history and moving background of why this village was built).'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: There are no oversized locker systems available at the main visitor center. If you are traveling without a vehicle, it is best to store heavy bags at major transport terminals.\n\n• Restrooms: Large, exceptionally clean public restrooms are well-maintained near the main summit square (Deutscher Platz) and the lower parking lots.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• Deutscher Platz (German Square) Observatory: Located at the absolute highest peak of the village. Standing here unlocks the ultimate view of uniform orange-tiled roofs and stark white walls contrasting brilliantly against the blue Namhae sea and local forests.\n\n• Namhae German Exhibition Hall: Built to honor the thousands of young Korean nurses and miners who traveled to West Germany in the 1960s and 70s to earn foreign currency for their impoverished homeland. This moving space tells the story of how they returned to settle here in retirement.',
        image: '/images/destinations/namhae_german_observatory.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: As a highly popular, unique landmark in Korea, it can feel heavily commercialized and crowded with tour buses during pleasant weekends or during the annual Autumn Beer Festival.\n\n• Warnings: This remains a private, quiet residential neighborhood for elderly returnees. Trespassing into private front yards, stepping onto manicured residential lawns, or snapping photos directly through house windows is strictly forbidden.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• 🍱 Perfect Life Brewery (완벽한인생 브루어리): Located on the main village road / A massive award-winning gastropub featured extensively on Korean TV. They serve exceptional German-style pork trotters (Schweinshaxn) and artisanal sausages infused with local Namhae garlic, paired with fresh beers brewed directly on-site.\n\n• ☕ Kunst Lounge: Located on the main village road / A hyper-stylish, massive oceanfront lounge and cafe featuring rows of comfy red beanbag sofas scattered across a lush green lawn. It is the ultimate venue to lie back, sip cold wheat beer, and stare out at the sea view.'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "A fairytale-like enclave of white-walled, orange-roofed German architecture framing the blue sea, preserving a deeply moving chapter of Korean-German labor history."\n\n• Rating: ⭐⭐⭐⭐☆ (4/5)'
      }
    ],
    hours: 'Exhibition Hall: 09:00 AM - 06:00 PM (Closed Mondays) | Alleys: 24/7',
    tips: 'Show the Hangeul address to your taxi driver: 경남 남해군 삼동면 독일로 89-7',
    address: '89-7, Dogil-ro, Samdong-myeon, Namhae-gun, Gyeongsangnam-do',
    koreanAddress: '경상남도 남해군 삼동면 독일로 89-7',
    mapQuery: '남해 독일마을',
    taxi: {
      destination: '남해 독일마을 문화예술촌 주차장',
      destinationEn: 'Namhae German Village Art Village Parking',
      message: '기사님, 남해 독일마을 주차장으로 가주세요.',
      waitTip: '기사님, 남해 원예예술촌으로 가주세요.',
      waitTipEn: 'Sir, could you please take me to the Namhae Horticultural Art Village?',
    }
  },
  bijo: {
    title: 'Sangju Silver Sand Beach',
    subtitle: 'Powdery Silver Sand and Whispering Pine Forests',
    heroImage: '/images/destinations/namhae_bijo.png',
    intro: 'Prepare for a coastal paradise of soft sand and deep green pines. Sangju Silver Sand Beach is widely known as Namhae’s most beautiful beach, featuring a wide, half-moon-shaped crescent of exceptionally fine, powdery white sand that glows like silver in the sun. The beach is bordered by a lush, two-kilometer-long forest of ancient pine trees that provides cool, whispering shade and a deep pine aroma, contrasting beautifully with the crystal-clear emerald ocean.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Sangju Silver Sand Beach / 상주은모래비치\n\n• Hours: Open 24/7 all year round. (During the official summer swimming season, permitted swimming hours are from 09:00 AM to 06:00 PM).\n\n• Duration: Approx. 30 minutes to 1 hour for a relaxing stroll along the powdery white sand and through the pine groves. (Can become a half-day stop if you are swimming or camping).'
      },
      {
        title: '2. How to Get There',
        content: '• Travel Tip: Nestled snugly in a crescent shape along the absolute southern coast of Namhae Island. Because it sits immediately below the slopes of Mount Geumsan (Boriam), the ultimate strategy is to tour Boriam Hermitage in the early morning, then head straight down here for lunch and a beach walk.\n\n• Text for Map Apps (Copy & Paste):\n  - Destination Name: 상주은모래비치 or 상주은모래비치 주차장\n\n• Directions: From Namhae Intercity Bus Terminal, catch a bus bound for Sangju/Mijo. Get off at the \'Sangju Silver Sand Beach\' stop; the water is a 3-minute walk from there (takes about 35 minutes).'
      },
      {
        title: '3. Tickets & Booking',
        content: '• Admission & Parking: Free (The massive public parking lots are entirely free of charge).\n\n• Booking: No advance reservation required; open to the public freely.'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: There are no designated luggage locker units along the beach line. Storing oversized suitcases inside your rental vehicle is advised.\n\n• Restrooms & Showers: Clean public restrooms and open-air foot-washing stations are scattered beneath the shade of the pine forest. During summer peak season, paid shower facilities and parasol/inner-tube rental booths operate seamlessly.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• Powdery "Silver" Sand: True to its name, the sand here is exceptionally fine, soft, and silver-white—resembling flour. Walking barefoot along the water\'s edge with the clear turquoise tide offers perfect vacation photos.\n\n• Ancient Pine Grove (Songlim): A dense, beautiful half-moon forest of hundreds of ancient pine trees lines the entire length of the beach. It serves as a therapeutic shaded sanctuary where you can sit on benches, inhale pine scents, and gaze at the sea away from the scorching sun.\n\n• A Natural Wave-free Pool: Flanked securely by mountain ridges on both sides and shielded by a small uninhabited island (Mokseom) out front, the beach behaves like a giant natural swimming pool with zero harsh waves and an incredibly gradual slope. It is highly celebrated as one of the safest and most peaceful swimming beaches in Korea.',
        image: '/images/destinations/namhae_bijo_pine.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: During the peak summer vacation crunch (July–August), the beach swells with thousands of domestic holidaymakers, making it loud and bustling. If you prefer a tranquil, meditative beach escape, visit during late spring, early autumn, or early morning.\n\n• Warnings: While the ultra-shallow water is incredibly safe, dropping off past the designated safety buoys can result in sudden depth changes. Always follow the instructions of on-site lifeguards during summer.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• 🍱 Namhae Geujib: 3-min drive from the beach / A polished, clean seafood restaurant serving legendary sets of mixed grilled fish alongside spicy anchovy wraps. Their charcoal-grilled fish is perfectly crispy on the outside and juicy on the inside—an ideal, hearty meal for international travelers.\n\n• ☕ Hwasoban (화소반 남해점): 5-min walk from the beach / A hidden, vintage-chic cafe operating inside a beautifully converted rustic countryside home behind the beach area. Adorned with antique props, it is a fantastic aesthetic spot to enjoy iced coffees, homemade citron teas, and chewy traditional Korean rice cakes (Tteok).'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "A blissful, tranquil crescent beach blanketed in flour-soft silver sand and ancient pine groves, mimicking a wave-free natural pool ideal for peaceful healing."\n\n• Rating: ⭐⭐⭐⭐⭐ (5/5)'
      }
    ],
    hours: 'Open daily 24/7 (Swimming: 09:00 AM - 06:00 PM in summer)',
    tips: 'Show the Hangeul address to your taxi driver: 경남 남해군 상주면 상주로 17-4',
    address: '17-4, Sangju-ro, Sangju-myeon, Namhae-gun, Gyeongsangnam-do',
    koreanAddress: '경상남도 남해군 상주면 상주로 17-4',
    mapQuery: '상주은모래비치',
    taxi: {
      destination: '남해 상주은모래비치 주차장',
      destinationEn: 'Namhae Sangju Silver Sand Beach Parking',
      message: '기사님, 남해 상주은모래비치로 가주세요.',
      waitTip: '기사님, 남해 금산 보리암 매표소로 가주세요.',
      waitTipEn: 'Sir, could you please take me to the Geumsan Boriam Hermitage ticket booth?',
    }
  }
};

export default function NamhaeSpotDetailPage({ params }: { params: { slug: string } }) {
  const spot = SPOT_DETAILS[params.slug as keyof typeof SPOT_DETAILS];

  if (!spot) {
    notFound();
  }

  const isNamhaeClassicSpot = ['boriam', 'darangee', 'german'].includes(params.slug);
  const isNamhaeHealingSpot = ['bijo'].includes(params.slug);

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Detail Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-ink-900">
        <Image
          src={spot.heroImage}
          alt={spot.title}
          fill
          priority
          className="object-cover animate-fade-in"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent" />
      </section>

      {/* Blog Content */}
      <Section tone="default">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {/* Main Blog Body */}
            <div className="lg:col-span-2">
              {/* Blog Article Header */}
              <div className="mb-12">
                <span className="eyebrow text-gold-600 uppercase tracking-[0.2em]">{spot.subtitle}</span>
                <h1 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl text-ink-900 font-light leading-tight">{spot.title}</h1>
                <div className="mt-6 w-16 h-[1px] bg-gold-400" />
              </div>

              <p className="text-xl italic leading-relaxed text-ink-600 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left">
                {spot.intro}
              </p>
              
              <div className="mt-16 space-y-20">
                {spot.sections.map((section, idx) => (
                  <article key={idx} className="space-y-8">
                    <h2 className="font-serif text-3xl font-light text-ink-900">{section.title}</h2>
                    {section.image && (
                      <div className="relative aspect-video w-full overflow-hidden rounded-sm shadow-sm">
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 66vw, 100vw"
                        />
                      </div>
                    )}
                    <div className="prose prose-ink max-w-none">
                      {section.content.split('\n\n').map((para, pIdx) => (
                        <p key={pIdx} className="text-lg leading-relaxed text-ink-700 whitespace-pre-line">
                          {para}
                        </p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sticky Sidebar Info */}
            <div className="lg:sticky lg:top-24 h-fit space-y-8 self-start">
              <div className="rounded-sm border border-cream-200 bg-white p-8 lg:p-10 shadow-sm space-y-8">
                {/* 📍 Reusable Location Map Card */}
                <SpotLocationMap
                  title={spot.title}
                  subtitle={spot.subtitle}
                  koreanAddress={spot.koreanAddress}
                  address={spot.address}
                  imageUrl={spot.heroImage}
                  driveTime={spot.hours}
                  description={spot.intro}
                  isNested={true}
                  mapQuery={spot.mapQuery}
                />
                <Divider />
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-700">Access Info</h4>
                  <p className="mt-3 text-base text-ink-900">{spot.hours}</p>
                </div>
                <Divider />
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-700">Local Friend's Tip</h4>
                  <p className="mt-3 text-base text-ink-900 italic">"{spot.tips}"</p>
                </div>
                {spot.taxi && (
                  <>
                    <Divider />
                    <div className="pt-2">
                      <p className="text-sm font-medium text-ink-900 mb-4">First time visiting? Use our Taxi Card</p>
                      <TaxiCard 
                        destination={spot.taxi.destination}
                        destinationEn={spot.taxi.destinationEn}
                        message={spot.taxi.message}
                        waitTip={spot.taxi.waitTip}
                        waitTipEn={spot.taxi.waitTipEn}
                      />
                    </div>
                  </>
                )}
                <Divider />
                <div className="pt-2">
                  <p className="text-sm text-ink-500 mb-4">Need help getting here?</p>
                  <Button href="/services/chauffeur" variant="secondary" className="w-full justify-center text-xs">View Chauffeur Service</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 🗺️ Featured Travel Course Section */}
      <CuratedCoursePanel city="namhae" slug={params.slug} />

      {/* Back Link */}
      <Section tone="cream" className="border-t border-cream-200">
        <Container className="text-center">
          <Button href="/destinations/namhae" variant="secondary">Explore More of Namhae</Button>
        </Container>
      </Section>
    </div>
  );
}
