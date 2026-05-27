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
  windyhill: {
    title: 'Windy Hill',
    subtitle: 'Where a Classic Windmill Meets the Sea',
    heroImage: '/images/destinations/geoje_windy_windmill.png',
    intro: 'A picturesque, grassy coastal ridge crowned with a majestic Dutch windmill, offering travelers dramatic views of the southern sea and refreshing ocean gales.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Windy Hill / 바람의 언덕\n\n• Hours: Open 24/7 all year round. (Since there is no street lighting at night, visiting between sunrise and sunset is highly recommended for safety).\n\n• Duration: Approx. 30 to 45 minutes to walk from the parking lot up to the iconic windmill and back.'
      },
      {
        title: '2. How to Get There',
        content: '• Travel Tip: Located on the southern coastal tip of Geoje Island. Since local bus intervals are quite long, renting a car or taking a taxi is highly recommended for convenience.\n\n• Text for Map Apps (Copy & Paste):\n  - Destination Name: 바람의언덕 (Windy Hill) or 도장포유람선터미널주차장 (Dojangpo Ferry Terminal Parking)\n\n• Public Transit: From Geoje Gohyeon Bus Terminal, take Bus No. 55 or 55-1. Ride for about 1 hour and 20 minutes, get off at the \'Dojangpo\' stop, and walk for 10 minutes.'
      },
      {
        title: '3. Tickets & Booking',
        content: '• Admission: Free\n\n• Booking: No advance reservation required; open to the public freely. (Nominal parking fees may apply at the village public lot).'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: There are no storage lockers available on the hill. It is best to leave heavy suitcases in your rental car or use the lockers at the main Gohyeon Bus Terminal.\n\n• Restrooms: Public restrooms are available near the Dojangpo Ferry Terminal at the entrance of the trail.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• The Dutch Windmill: The massive windmill standing at the top of the ridge is the ultimate symbol of this park. The contrast of the deep blue sea, green grass, and the wooden windmill serves as the best photo backdrop.\n\n• Wooden Boardwalk Trail: A well-paved wooden deck extends completely out toward the ocean, allowing you to walk right above the cliffs and soak in the panoramic coastal vistas.',
        image: '/images/destinations/geoje_windy_windmill.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: True to its name, the sea winds here are exceptionally powerful. It can be very difficult to set up a tripod, and managing your hair for a clean portrait photo requires patience.\n\n• Warnings: Due to the gales, the perceived temperature can drop significantly during spring, autumn, and winter. Bringing a windbreaker or a warm jacket is essential. Wearing long, loose dresses or skirts is highly discouraged.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• 🥯 Windy Hotdog: 5-min drive from the hill / Geoje\'s most famous signature street snack. A thick, juicy sausage wrapped in crispy dough and smothered in unique local sauces—perfect for a quick, savory bite.\n\n• ☕ A Twosome Place (Geoje Dojangpo Branch): 3-min walk from the hill / A beachside cafe located directly facing the harbor. It offers large glass windows to comfortably view the hill and the ocean from indoors.',
        image: '/images/destinations/geoje_windy_hotdog.png'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "A picturesque, grassy coastal ridge crowned with a majestic Dutch windmill, offering travelers dramatic views of the southern sea and refreshing ocean gales."\n\n• Rating: ⭐⭐⭐⭐⭐ (5/5)'
      }
    ],
    hours: 'Open daily 24 hours (Daylight visits highly recommended)',
    tips: 'Windy Hill & Sinseondae Cliff are located right across from each other. Park once, and explore both!',
    address: 'Galgot-ri, Nambu-myeon, Geoje-si, Gyeongsangnam-do',
    koreanAddress: '경상남도 거제시 남부면 갈곶리 산14-47',
    mapQuery: '바람의언덕',
    taxi: {
      destination: '거제 도장포 마을 (바람의 언덕 입구)',
      destinationEn: 'Geoje Dojangpo Village (Windy Hill Entrance)',
      message: '기사님, 거제 바람의 언덕 입구인 도장포 마을로 가주세요.',
      waitTip: '기사님, 바로 건너편에 있는 신선대 전망대로 가주세요.',
      waitTipEn: 'Sir, could you please take me to the Sinseondae Lookout right across the street?',
    }
  },
  sinseondae: {
    title: 'Sinseondae Cliff',
    subtitle: 'The Observatory of the Gods',
    heroImage: '/images/destinations/geoje_sinseondae_cliff.png',
    intro: 'A majestic coastal observatory featuring massive, multi-layered yellow rock cliffs where ancient hermits allegedly lounged, juxtaposed brilliantly against a pristine emerald sea.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Sinseondae Cliff / 신선대\n\n• Hours: Open 24/7 all year round. (There are no streetlights at night, posing a high risk of falling; please visit strictly during daylight hours).\n\n• Duration: Approx. 30 to 40 minutes to walk down from the roadside observatory to the rocky shore and back up.'
      },
      {
        title: '2. How to Get There',
        content: '• Travel Tip: Located directly across the main street from \'Windy Hill.\' Since these two landmarks are practically attached, the golden rule is to park your car once and visit both destinations on foot.\n\n• Text for Map Apps (Copy & Paste):\n  - Destination Name: 신선대 (Sinseondae Cliff) or 신선대전망대 (Sinseondae Observatory)\n\n• Public Transit: Same as Windy Hill. Take Bus No. 55 or 55-1 from Gohyeon Bus Terminal and get off at the \'Dojangpo\' stop.'
      },
      {
        title: '3. Tickets & Booking',
        content: '• Admission: Free\n\n• Booking: No reservation required; open to the public freely.'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: No luggage lockers are available. Because the route involves narrow rock steps and uneven stone pathways, carrying any heavy bags down is strictly discouraged.\n\n• Restrooms: Public restrooms are available near the entrance parking lot and adjacent shops.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• Sinseondae Observatory Deck: Standing on the roadside deck provides a spectacular aerial viewpoint of the layered rocky cliffs meeting the emerald ocean dotted with multi-sized islands.\n\n• The Hermit’s Rock Formations: Legend has it that "Sinseon" (ancient Taoist hermits) used to descend here to lounge and marvel at the views. Standing on the vast, flat, yellow-tinted multi-layered rock platform creates an incredibly grand, cinematic photo backdrop.',
        image: '/images/destinations/geoje_sinseondae_cliff.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: Because you walk directly onto natural cliffs, many sections lack safety fences. You must remain highly cautious and avoid getting too close to the slippery cliff edges while taking photos.\n\n• Warnings: The path consists of steep dirt steps and rugged, uneven rock surfaces. Wearing heels or flip-flops is highly dangerous; you must wear comfortable walking shoes or sneakers.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• 🍱 Sinseondae Hwoejib: 3-min walk from the cliff entrance / A local restaurant serving fresh Korean-style raw fish, refreshing tangy cold raw fish soup (Mulhoe), and comforting hot spicy fish stew (Maeuntang) right at the junction of the two major sites.\n\n• Cafe Tip: It is best to use the cafe strip right across the street at Dojangpo Harbor (Windy Hill side) or visit the massive oceanfront cafes located a 5-minute drive away.'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "A majestic coastal observatory featuring massive, multi-layered yellow rock cliffs where ancient hermits allegedly lounged, juxtaposed brilliantly against a pristine emerald sea."\n\n• Rating: ⭐⭐⭐⭐⭐ (5/5)'
      }
    ],
    hours: 'Open daily 24 hours (Best visited during daylight)',
    tips: 'Sinseondae has no safety rails in some cliff areas. Watch your step and wear sneakers!',
    address: 'Galgot-ri, Nambu-myeon, Geoje-si, Gyeongsangnam-do',
    koreanAddress: '경상남도 거제시 남부면 갈곶리 산21-19',
    mapQuery: '거제 신선대',
    taxi: {
      destination: '거제 신선대 전망대 주차장',
      destinationEn: 'Geoje Sinseondae Lookout Parking',
      message: '기사님, 거제 신선대 전망대로 가주세요.',
      waitTip: '기사님, 거제 학동 몽돌해변으로 가주세요.',
      waitTipEn: 'Sir, could you please take me to Geoje Hakdong Mongdol Beach?',
    }
  },
  oedo: {
    title: 'Oedo Botania',
    subtitle: 'A Mediterranean Marine Botanical Garden',
    heroImage: '/images/destinations/geoje_oedo_garden.png',
    intro: 'A spectacular, Mediterranean-style marine botanical garden built from scratch over 30 years on a barren rocky island, floating beautifully amidst the deep blue southern sea.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Oedo Botania / 외도 보타니아\n\n• Hours: 09:00 AM ~ 06:00 PM daily (The last boarding varies depending on ferry schedules but is usually around 05:00 PM. Open year-round, but access is subject to ferry operations dictated by sea weather).\n\n• Duration: Once you land on the island, your sightseeing time is strictly limited to exactly 2 hours. Walking along the single-route loop path takes about 1.5 to 2 hours, making the timeline quite tight.'
      },
      {
        title: '2. How to Get There',
        content: '• Travel Tip: Oedo is an independent island separate from the Geoje mainland. You must board a round-trip passenger ferry from one of Geoje\'s ports. While there are multiple terminals (Jangseungpo, Wahyeon, Dojangpo, etc.), \'Gujora Ferry Terminal\' is the most popular and geographically closest to Oedo.\n\n• Text for Map Apps (Ferry Terminal Base - Copy & Paste):\n  - Recommended Ferry Terminal: 구조라유람선터미널\n\n• Route: Most ferries departing from Gujora will cruise around the magnificent sea crags of \'Haegeumgang\' first before docking at Oedo Island. (Ferry ride takes about 20–30 minutes one-way).'
      },
      {
        title: '3. Tickets & Fares',
        content: '• Total Cost: To visit Oedo, you must pay for both [Round-trip Ferry Ticket] + [Oedo Island Admission Fee].\n\n• Oedo Island Admission: Adults 11,000 KRW / Youth 8,000 KRW / Children 5,000 KRW\n\n• Ferry Ticket: Varies by port and weekday/weekend rates, usually around 19,000 to 22,000 KRW for an adult round-trip.\n\n• Booking Tip: Advance online booking for the ferry ticket is absolutely essential on weekends and peak holidays as they sell out fast. Online booking also offers small discounts on the ferry fare.'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: There are no luggage storage spaces or lockers on Oedo Island. You must leave heavy suitcases in your rental car or use the coin lockers inside the mainland Ferry Terminal waiting rooms before boarding the ship.\n\n• Amenities: Clean public restrooms and scenic cafes serving cold drinks are situated midway and at the summit of the walking trail.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• Venus Garden: Modeled after the backyard of Buckingham Palace, this is the crown jewel of Oedo Botania. The symmetry of Mediterranean structures, perfectly manicured camellia trees, and white statues create a surreal European atmosphere.\n\n• Stairway to Heaven: A terraced walkway lined with beautifully blooming subtropical plants and rare flowers. Looking down from the top offers a breathtaking panoramic view of the entire structured garden.',
        image: '/images/destinations/geoje_oedo_garden.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: The island consists entirely of uphill walking trails, which can be exhausting and intensely hot with limited shade during mid-summer (July–August). The strict 2-hour departure limit can also feel slightly rushed.\n\n• Warnings: Highly dependent on sea weather. Even if the mainland weather is perfectly sunny, ferries will be completely canceled if ocean waves are too high or if thick sea fog rolls in. Always double-check your text messages from the ferry company on the morning of your visit.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• 🍱 Oedo Sikdang: 2-min walk from Gujora Terminal / A clean, local Korean restaurant ideal for dining before or after your boat trip. They serve fresh Sea Urchin Bibimbap (Seongge-bibimbap), Spicy Sea Tunic Bibimbap (Meongge-bibimbap), and grilled fish sets.\n\n• ☕ STAGE Geoje: 3-min drive from Gujora Terminal / A massive oceanfront bakery cafe located right on Gujora Beach. An ideal modern space to wait before boarding or to cool down with iced tea after returning from the island.'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "A spectacular, Mediterranean-style marine botanical garden built from scratch over 30 years on a barren rocky island, floating beautifully amidst the deep blue southern sea."\n\n• Rating: ⭐⭐⭐⭐⭐ (5/5)'
      }
    ],
    hours: '09:00 AM ~ 06:00 PM daily (Subject to Ferry schedule)',
    tips: 'Always book your ferry online in advance, and make sure to arrive at the port 30 minutes early!',
    address: '17, Oedo-gil, Irun-myeon, Geoje-si, Gyeongsangnam-do',
    koreanAddress: '경상남도 거제시 일운면 외도길 17',
    mapQuery: '외도 보타니아',
    taxi: {
      destination: '거제 구조라항 유람선터미널 (외도 선착장)',
      destinationEn: 'Gujora Port Ferry Terminal (to Oedo)',
      message: '기사님, 거제 구조라항 유람선터미널로 가주세요.',
      waitTip: '기사님, 거제 학동 몽돌해수욕장으로 가주세요.',
      waitTipEn: 'Sir, could you please take me to Hakdong Mongdol Beach?',
    }
  },
  mongdol: {
    title: 'Hakdong Black Pearl Mongdol Beach',
    subtitle: 'The Musical Beach of Smooth Black Pebbles',
    heroImage: '/images/destinations/geoje_mongdol_pebbles.png',
    intro: 'A rare, therapeutic coastline filled with glistening jet-black pebbles that play a beautiful natural symphony with every crash of the deep blue waves.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Hakdong Black Pearl Mongdol Beach / 학동 흑진주 몽돌해변\n\n• Hours: Open 24/7 all year round. (During the summer swimming season, permitted hours are from 09:00 AM to 06:00 PM).\n\n• Duration: Approx. 30 minutes to 1 hour is perfect to stroll along the pebble shoreline and listen to the relaxing sounds of the waves.'
      },
      {
        title: '2. How to Get There',
        content: '• Travel Tip: Stretched along the southwestern coast of Geoje. It is perfectly situated right on the main path heading down toward Windy Hill and Sinseondae, making it an ideal first stop for your southern Geoje road trip.\n\n• Text for Map Apps (Copy & Paste):\n  - Destination Name: 학동흑진주몽돌해수욕장\n\n• Public Transit: From Gohyeon Bus Terminal, board Bus No. 56. It takes about 50 minutes and drops you right at the \'Hakdong Samgeori (Intersection)\' stop immediately in front of the beach.'
      },
      {
        title: '3. Tickets & Booking',
        content: '• Admission: Free\n\n• Booking: No reservation required; open to the public freely.'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Amenities: Highly convenient strip equipped with large parking lots, 24-hour convenience stores, local Korean restaurants, and aesthetic cafes situated right across the beach line.\n\n• Restrooms & Showers: A unique, ship-shaped public restroom building is centrally located. Public shower booths operate during the summer peak season.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• Black Pearl Pebble Shore: Unlike standard sand beaches, this shore is completely blanketed in smooth, round, jet-black pebbles locally called \'Mongdol\'. Taking a top-down footwear snapshot against the wet black stones and incoming tide is a viral favorite among travelers.\n\n• The Sound of Rolling Pebbles: Designated as one of the "100 Most Beautiful Sounds of Korea." Every single time a wave rolls in and recedes, millions of small pebbles friction together, creating a distinct, crisp "clink-and-clatter" soothing melody. Sitting silently on the rocks and listening to this is the ultimate healing experience.',
        image: '/images/destinations/geoje_mongdol_pebbles.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: Walking barefoot on the hard pebbles can be mildly painful, and wearing flimsy flip-flops or open-toed sandals increases the risk of stubbing your toes between the shifting stones.\n\n• Warnings (Crucial): Turning any pebbles from the beach into a souvenir is strictly prohibited by law. To protect the environment, severe fines are levied on-site for removing stones. Please leave them exactly where they belong.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• 🍱 Baegane Geojedo Kalguksu: 2-min walk from the beach / A local favorite restaurant specializing in Korean-style wheat noodle soup (Kalguksu) packed generously with fresh mussels, clams, and vegetables in a giant brass pot—a comforting, universally loved non-spicy seafood meal.\n\n• ☕ Mug Geoje: 5-min walk from the beach / An award-winning architectural cafe celebrated for its sleek, minimalistic all-white geometric structure. Offers a lush courtyard garden and a serene indoor space to enjoy specialty coffee and artisanal cakes.',
        image: '/images/destinations/geoje_mongdol_kalguksu.png'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "A rare, therapeutic coastline filled with glistening jet-black pebbles that play a beautiful natural symphony with every crash of the deep blue waves."\n\n• Rating: ⭐⭐⭐⭐⭐ (5/5)'
      }
    ],
    hours: 'Open daily 24 hours (Swimming: 09:00 AM - 06:00 PM in Summer)',
    tips: 'Never take pebbles as souvenirs—it is illegal! Always wear sturdy sandals or sneakers.',
    address: 'Hakdong-ri, Dongbu-myeon, Geoje-si, Gyeongsangnam-do',
    koreanAddress: '경상남도 거제시 동부면 학동리',
    mapQuery: '학동흑진주몽돌해수욕장',
    taxi: {
      destination: '거제 학동 몽돌해수욕장 입구',
      destinationEn: 'Geoje Hakdong Mongdol Beach Entrance',
      message: '기사님, 거제 학동 몽돌해수욕장으로 가주세요.',
      waitTip: '기사님, 거제 바람의 언덕으로 가주세요.',
      waitTipEn: 'Sir, could you please take me to Geoje Windy Hill?',
    }
  }
};

export default function GeojeSpotDetailPage({ params }: { params: { slug: string } }) {
  const spot = SPOT_DETAILS[params.slug as keyof typeof SPOT_DETAILS];

  if (!spot) {
    notFound();
  }

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
      <CuratedCoursePanel city="geoje" slug={params.slug} />

      {/* Back Link */}
      <Section tone="cream" className="border-t border-cream-200">
        <Container className="text-center">
          <Button href="/destinations/geoje" variant="secondary">Explore More of Geoje</Button>
        </Container>
      </Section>
    </div>
  );
}
