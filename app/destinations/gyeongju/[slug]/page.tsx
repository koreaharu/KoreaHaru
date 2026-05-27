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
  donggung: {
    title: 'Donggung Palace & Wolji Pond',
    subtitle: 'The Gold-Glow Miracle of Silla Night',
    heroImage: '/images/destinations/gyeongju_donggung_hero.png',
    intro: 'Step into a world that feels like an ancient dream of gold and water. Originally built in 674 AD to celebrate the unification of the three kingdoms of Korea, Donggung Palace and Wolji Pond was the secondary palace complex where the Silla royal family hosted banquets and welcomed honored foreign guests. When night falls and the massive warm lights turn on, the traditional wooden structures glow like liquid gold, reflecting perfectly over the glass-like surface of the lotus pond.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Donggung Palace and Wolji Pond (Formerly known as Anapji) / 경주 동궁과 월지\n\n• Hours: 09:00 AM ~ 10:00 PM daily (Last admission at 09:30 PM / Open all year round).\n\n• Duration: It takes approx. 45 minutes to 1 hour to leisurely walk along the flat path surrounding the historic pond and take photos.'
      },
      {
        title: '2. How to Get There',
        content: '• Travel Tip: Located very close to Gyeongju downtown (Hwangridan-gil, Daereungwon, and Cheomseongdae). It is highly accessible via public buses, and during the daytime, you can easily walk here while exploring adjacent historical ruins.\n\n• Text for Map Apps (Copy & Paste):\n  - Destination Name: 동궁과월지\n\n• Directions: From Gyeongju KTX/SRT Station, take Bus No. 700. From Gyeongju Intercity Bus Terminal, board Bus No. 10, 11, 600, or 700. Get off at the \'Donggung Palace and Wolji Pond\' stop, located right in front of the entrance (takes about 15 minutes from the terminal).'
      },
      {
        title: '3. Tickets & Booking',
        content: '• Admission Fares: Adults 3,000 KRW / Youth (Ages 13–18) 2,000 KRW / Children 1,000 KRW\n\n• Booking: No advance reservation is required; tickets can be purchased on-site via ticket booths or automated kiosks.\n\n• Night View Tip: The ticket booths become extremely crowded right after sunset when the lights turn on. To save time, use the automated ticketing kiosks near the entrance rather than waiting in the cash/staff line.'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: Free luggage lockers are available next to the main ticket booth, convenient for backpacks or light baggage. (Large suitcase-sized lockers are limited, so using lockers at major transportation terminals is advised).\n\n• Restrooms: Clean public restrooms are located near the entrance area.\n\n• Barrier-Free Access: The entire walking trail is flat, paved, and completely free of steep steps, making it exceptionally stroller and wheelchair-friendly.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• Pavilion Reflection Photo Spot: Midway through the path across the pond, you will face the three illuminated reconstructed pavilions. On a calm night, the water acts as a perfect mirror, reflecting the glowing traditional architecture for a postcard-perfect photo.\n\n• Silla Royal Garden Design: The pond was engineered with winding shorelines by the ancient Silla dynasty to ensure that no matter where you stand, you cannot see the entire pond at once, making it feel like an endless ocean.',
        image: '/images/destinations/gyeongju_donggung_reflection.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: As Korea\'s representative night view attraction, it gets incredibly crowded on weekend evenings and during peak seasons (Spring cherry blossoms and Autumn foliage). Finding a quiet spot for photography can be a bit frantic.\n\n• Warnings: Since the primary charm is the nighttime illumination, visiting in broad daylight might feel less dramatic. The ideal strategy is to enter about 20–30 minutes before sunset to witness the transition from dusk (Magic Hour) to the glowing night lights.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• ☕ Misil Cafe: 3-min drive (Located inside Hwangridan-gil) / A trendy, beautiful cafe operating within a beautifully renovated traditional Hanbok house. Features outdoor wooden lounging decks and a rooftop, making it an excellent spot to enjoy Gyeongju\'s hip atmosphere before or after your night tour.\n\n• 🍱 Gyeongju Wonjo Kongguk: 10-min walk from the site / A long-running legendary local restaurant situated between Cheomseongdae and Wolji Pond. It is famous for its warm, savory Korean-style soy milk soup served with chewy rice donuts, green bean pancakes (Pajeon), and fresh tofu—perfect for introducing international travelers to unique, comforting Korean flavors.'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "A serene stroll along a Silla royal palace pond where elegant traditional architecture and glowing lights seamlessly merge, offering the single most breathtaking nighttime view in Gyeongju."\n\n• Rating: ⭐⭐⭐⭐⭐ (5/5, An absolute must-visit highlight of Gyeongju after dark!)'
      }
    ],
    hours: '09:00 AM - 10:00 PM (Last entry at 09:30 PM)',
    tips: 'Show the Hangeul address to your taxi driver: 경북 경주시 원화로 102',
    address: '102, Wonhwa-ro, Gyeongju-si, Gyeongsangbuk-do',
    koreanAddress: '경상북도 경주시 원화로 102',
    mapQuery: '동궁과 월지',
    taxi: {
      destination: '경주 동궁과 월지 (안압지)',
      destinationEn: 'Gyeongju Donggung Palace & Wolji Pond',
      message: '기사님, 경주 동궁과 월지로 가주세요.',
      waitTip: '기사님, 경주 황리단길로 가주세요.',
      waitTipEn: 'Sir, could you please take me to Hwangridan-gil?',
    }
  },
  hwangridan: {
    title: 'Hwangridan-gil',
    subtitle: 'A Modern Walk Through Ancient Roofs',
    heroImage: '/images/destinations/gyeongju_hwangridan_hero.png',
    intro: 'Imagine walking along a bustling street where modern, trend-setting café culture blends perfectly with thousand-year-old history. Hwangridan-gil is a vibrant neighborhood in Gyeongju where dozens of traditional Hanok houses have been beautifully preserved and turned into stylish coffee shops, rooftop lounges, independent bookstore shops, and playful street-food stalls. It is the perfect place to experience the young energy of ancient Korea.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Hwangridan-gil / 황리단길\n\n• Hours: The streets are open 24/7. However, the operational hours for most shops and restaurants are usually between 11:00 AM and 09:00 PM. (Cafes and pubs tend to stay open later).\n\n• Duration: It is best to budget at least 2 hours to a half-day to enjoy strolling through the alleys, trying on Hanbok (traditional clothing), souvenir shopping, and enjoying meals or cafes.'
      },
      {
        title: '2. How to Get There',
        content: '• Travel Tip: Superb location immediately adjacent to major tourist hubs such as Gyeongju Intercity Bus Terminal, Daereungwon Tombs, and Cheomseongdae. Very pedestrian and transit-friendly.\n\n• Text for Map Apps (Copy & Paste):\n  - Destination Name: 황리단길\n\n• Directions: From Gyeongju KTX/SRT Station, board Bus No. 50, 51, or 700 and get off at the \'Express Bus Terminal\' or \'Seorabeol Intersection\' stop. Hwangridan-gil is a 5 to 10-minute walk from there. A taxi ride from the KTX station takes about 20–25 minutes.'
      },
      {
        title: '3. Tickets & Booking',
        content: '• Admission: Free\n\n• Booking: No reservation required to walk around. However, popular dining spots can have long waiting lines during peak weekend lunch and dinner hours.'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: Large lockers are scarce inside the narrow alleys of Hwangridan-gil. It is strongly advised to store heavy bags at the Daereungwon Main Gate Locker Station, Gyeongju Bus Terminal, or leave them at your accommodation.\n\n• Restrooms: Public restrooms are available at the Hwangnam-dong Community Service Center or inside the nearby Daereungwon complex. Most cafes and restaurants also provide private restrooms for patrons.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• Hanok-backed Instagram Photos: The street is filled with beautifully renovated traditional Korean houses (Hanok) operating as modern clothing boutiques, bookstores, and cafes. Capturing a snapshot from a rooftop cafe with the giant ancient royal tombs of Daereungwon in the background is a must.\n\n• Unique Souvenir Shops & Street Eats: Creative independent gift shops are tucked away in every alleyway. Many international tourists love taking photos holding unique local street snacks like the 10-Won Bread or Hwangnam Sand cookies.',
        image: '/images/destinations/gyeongju_hwangridan_cafe.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: On weekends and public holidays, the main road becomes heavily congested with large crowds and vehicular traffic mixed together. If you prefer a quiet, tranquil stroll, visiting on a weekday morning is highly recommended.\n\n• Warnings: Some alleys have very narrow sidewalks where cars occasionally pass through. Always remain alert and watch out for vehicles while walking.'
      },
      {
        title: '7. Nearby Eats & Cafes 🆕',
        content: '• 🍱 So Hoban: Center of Hwangridan-gil / Serves neat and clean Korean hot-pot stone rice sets (Sotbap). The stone-cooked rice topped with premium ingredients like abalone or short ribs, accompanied by seasonal side dishes, offers the perfect, approachable introduction to authentic Korean cuisine in a lovely Hanok setting.\n\n• 🍱 Ryoko: Inside the alley / A wildly popular Asian-fusion restaurant famous for its incredibly tender pork tenderloin cutlet (Ryoko Katsu) and unique Korean-style stir-fried noodles. Expect a waiting line due to its cozy, photogenic Hanok interior.\n\n• 🍱 Hwangnam Geumgo: 3-min walk from main street / An Italian-Korean fusion bistro serving exceptional pastas infused with local spicy sauces and their signature Calzone pizza. The restaurant is uniquely housed in a renovated structure that used to be an actual bank vault (Geumgo).\n\n• ☕ Olive: Center of Hwangridan-gil / A representative aesthetic cafe featuring a large signature tree in the courtyard juxtaposed against white Hanok walls. It offers a massive selection of fresh scones and pastries, perfect for relaxing in their cozy indoor or outdoor seating.\n\n• 🥯 Original 10-Won Bread (Sibwon-bbang): Street food stall / Gyeongju\'s most iconic street food—a fluffy waffle pastry shaped like an old Korean 10-Won coin, stuffed generously with gooey mozzarella cheese. It is fun to stretch the cheese and take a quick souvenir photo while it\'s hot.'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "A vibrant, youthful district where the historic essence of ancient Silla meets trendy Hanok culture, offering an unparalleled hub for unique shopping, photogenic cafes, and dynamic fusion dining."\n\n• Rating: ⭐⭐⭐⭐⭐ (5/5, The ultimate place to create lively and delicious memories in Gyeongju!)'
      }
    ],
    hours: '11:00 AM - 09:00 PM (Shops vary, streets 24/7)',
    tips: 'Show the Hangeul address to your taxi driver: 경북 경주시 포석로 1080 (황남동)',
    address: '1080, Poseok-ro, Gyeongju-si, Gyeongsangbuk-do',
    koreanAddress: '경상북도 경주시 포석로 1080',
    mapQuery: '황리단길',
    taxi: {
      destination: '경주 황리단길 (포석로)',
      destinationEn: 'Gyeongju Hwangridan-gil (Poseok-ro)',
      message: '기사님, 경주 황리단길로 가주세요.',
      waitTip: '기사님, 동궁과 월지로 가주세요.',
      waitTipEn: 'Sir, could you please take me to Donggung Palace?',
    }
  },
  bulguksa: {
    title: 'Bulguksa Temple',
    subtitle: 'The UNESCO World Heritage Stone Masterpiece',
    heroImage: '/images/destinations/gyeongju_bulguksa.png',
    intro: 'In the year 751, a royal architect set out to construct a visual representation of the Buddhist paradise on earth. The result was Bulguksa Temple, a breathtaking monument of stone and wood that stands today as Korea’s most legendary temple. High up on the wooded slopes of Tohamsan Mountain, the ancient stone bridges, grand pavilions, and two unique pagodas (Dabotap and Seokgatap) are a testimony to Silla’s high-renaissance art.',
    sections: [
      {
        title: '1. Visiting Info & Historical Background 🆕',
        content: '• Name: Bulguksa Temple / 불국사\n\n• Historical Significance: Commissioned by Prime Minister Kim Dae-seong during the reign of King Gyeongdeok of the Silla Dynasty, construction began in 751 AD and was completed in 774 AD. The name Bulguksa literally translates to "The Temple of the Buddha Land," reflecting the profound desire of the Silla people to realize a Buddhist utopia on Earth. It features ingenious, sophisticated stone architecture that seamlessly links the secular world to the spiritual realm. Recognizing its unparalleled architectural and historical value, it was designated a UNESCO World Heritage Site in 1995.\n\n• Hours: 09:00 AM ~ 06:00 PM daily (Last admission at 06:00 PM / Open all year round).\n\n• Duration: The temple grounds are expansive and majestic. It takes approx. 1.5 to 2 hours to carefully tour the main halls, the iconic stone pagodas, and absorb the historical descriptions.',
        image: '/images/destinations/gyeongju_bulguksa_scenery.png'
      },
      {
        title: '2. How to Get There',
        content: '• Travel Tip: Since it is located toward Mount Toham, somewhat away from Gyeongju downtown (Hwangridan-gil, Bomun Tourist Complex), taking a public city bus is the most economical and accurate route.\n\n• Text for Map Apps (Copy & Paste):\n  - Destination Name: 불국사\n\n• Directions: From Gyeongju KTX/SRT Station, take Bus No. 700. From Gyeongju Intercity Bus Terminal or near Hwangridan-gil, board the loop Bus No. 10 or 11. Get off at the \'Bulguksa\' stop and walk about 5 minutes to the entrance (takes roughly 30–40 minutes from downtown).'
      },
      {
        title: '3. Tickets & Booking',
        content: '• Admission: Free (Due to a recent revision in Korean Cultural Heritage Protection laws, the historical admission fee has been completely waived).\n\n• Booking: No reservation required. Open to the general public freely. (Note: Standard parking fees still apply if you visit by car).'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: Free luggage lockers are available next to the ticket offices at both the Front Gate (Iljumun) and Back Gate. Because the terrain involves light gravel and stairs, storing heavy bags is highly recommended.\n\n• Foreign Languages: The tourist information center at the entrance provides brochures in English, Chinese, and Japanese. You can also request an English-speaking tour guide if arranged at the office.\n\n• Accessibility: In addition to the main grand stone steps leading to the main hall, well-paved barrier-free detour ramps are available for strollers and wheelchairs.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• Cheongungyo and Baegungyo Bridges (National Treasure): A magnificent double-flight stone staircase leading into the main courtyard. Symbolizing a bridge that leads humans from the earthly world into the paradise of Buddha, it is the most iconic postcard-perfect photo spot at Bulguksa. (※ Walking directly up the stairs is strictly prohibited to preserve the ancient stones).\n\n• Dabotap & Seokgatap Pagodas (National Treasure): Two legendary stone pagodas standing face-to-face in the main courtyard. \'Seokgatap\' is celebrated for its structural minimalism and mathematical perfection, while \'Dabotap\' showcases highly ornate, creative stone-carving artistry. They are considered the pinnacle of Korean stone architecture.\n\n• The Hidden Lucky Pig at Geukrakjeon: Try to spot the tiny wooden golden pig sculpture hidden completely behind the nameplate of Geukrakjeon Hall. Rubbing the mock pig statue in the courtyard is said to bring wealth and good fortune, making it a favorite interactive spot for international tourists.',
        image: '/images/destinations/gyeongju_bulguksa_pagoda.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: As Gyeongju\'s absolute must-visit landmark, it can get heavily crowded with large student field trips (during spring/autumn) or tourist groups on weekends, which may briefly disrupt a quiet, meditative temple stroll.\n\n• Warnings: Because it remains an active, sacred religious site, visitors are expected to dress respectfully (avoiding overly revealing attire) and refrain from loud shouting. Smoking is strictly prohibited on the entire mountain.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• 🍱 Tohamsan Milmyeon: 3-min drive from the temple (Located in the Bulguksa commercial area) / A legendary local spot serving cold wheat noodles (Milmyeon) in a refreshing, tangy iced broth—a unique specialty of the Gyeongsang region. Exceptionally budget-friendly, and pairing the cold noodles with their thin-skinned savory dumplings is the ultimate way to cool down after your walk.\n\n• ☕ Basilla: 7-min drive from the temple / A massive, aesthetic traditional Hanok cafe looking out directly over a peaceful local reservoir. It is globally famous for its endless field of vibrant yellow sunflowers blooming right in front of the terrace during the summer peak (July–August), serving as a viral Instagram favorite.',
        image: '/images/destinations/gyeongju_basilla_cafe.png'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "A glorious UNESCO World Heritage site preserving the sublime architectural aesthetics of the 1,000-year ancient Silla Kingdom, standing as the ultimate masterpiece of Korean Buddhist culture."\n\n• Rating: ⭐⭐⭐⭐⭐ (5/5, If you can only choose a single historical site to visit in Gyeongju, make it Bulguksa!)'
      }
    ],
    hours: '09:00 AM - 06:00 PM (Last entry at 06:00 PM)',
    tips: 'Show the Hangeul address to your taxi driver: 경북 경주시 불국로 385',
    address: '385, Bulguk-ro, Gyeongju-si, Gyeongsangbuk-do',
    koreanAddress: '경상북도 경주시 불국로 385',
    mapQuery: '불국사',
    taxi: {
      destination: '경주 불국사 매표소',
      destinationEn: 'Gyeongju Bulguksa Ticket Booth',
      message: '기사님, 경주 불국사 매표소로 가주세요.',
      waitTip: '기사님, 석굴암 주차장으로 가주세요.',
      waitTipEn: 'Sir, could you please take me to the Seokguram Grotto parking lot?',
    }
  },
  daereungwon: {
    title: 'Daereungwon Ancient Tombs',
    subtitle: 'Majestic Royal Hills of the Ancient Silla Kings',
    heroImage: '/images/destinations/gyeongju_daereungwon.png',
    intro: 'In the heart of Gyeongju lies a flat, peaceful landscape that looks like a field of emerald giants. Daereungwon is a massive tomb complex containing 23 monumental, grass-covered earthen mounds that hold the ancient remains of Silla kings, queens, and royal nobles. Walking through these giant green waves of earth feels like entering a mythical landscape where time stands completely still.',
    sections: [
      {
        title: '1. Visiting Info & Historical Background',
        content: '• Name: Daereungwon Ancient Tombs / 경주 대릉원\n\n• Historical Significance: Dating back to the ancient Silla Kingdom (4th to 6th centuries AD), Daereungwon is the largest complex of royal burial mounds in Gyeongju, housing 23 grand tombs of kings, queens, and aristocrats. These monumental earth-covered hills were engineered using Silla’s unique "wooden chamber tomb covered with stone" method. Because this layout made grave-robbing virtually impossible, thousands of pure gold crowns and rare artifacts remained perfectly intact inside for centuries, serving as a powerful testament to the wealthy "Kingdom of Gold."\n\n• Hours:\n  - Main/Rear Gate Walkways: 09:00 AM ~ 10:00 PM daily (Last admission at 09:30 PM)\n  - Cheonmachong Tomb Exhibition Hall: 09:00 AM ~ 09:30 PM daily (Last admission at 09:10 PM)\n\n• Duration: It takes approx. 1 hour to comfortably stroll along the paved paths between the soft green ridges and tour inside the Cheonmachong exhibition.',
        image: '/images/destinations/gyeongju_daereungwon_interior.png'
      },
      {
        title: '2. How to Get There',
        content: '• Travel Tip: Positioned right in the heart of Gyeongju downtown, directly across the street from the eastern edge of Hwangridan-gil. Its extreme proximity means you can effortlessly walk into the tombs right after shopping or dining in the alley.\n\n• Text for Map Apps (Copy & Paste):\n  - Main Gate Location: 대릉원 정문\n\n• Directions: From Gyeongju KTX/SRT Station, take Bus No. 50, 51, or 700 and get off at the \'Naenam Intersection\' or \'Express Bus Terminal\' stop. It is a 5-minute walk from there. From the Intercity Bus Terminal, it is roughly a 10 to 15-minute walk.'
      },
      {
        title: '3. Tickets & Booking',
        content: '• Admission Fares:\n  - Daereungwon Park Grounds: Free\n  - Cheonmachong Tomb Interior Exhibition: Adults 3,000 KRW / Youth (Ages 13–18) 2,000 KRW / Children 1,000 KRW\n\n• Booking: No advance reservation required; open to the public freely with on-site ticket booths for the inner exhibition.'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: Free luggage lockers are exceptionally well-maintained right next to the main gate entrance. Since there are plenty of large compartments capable of holding oversized suitcases, travelers can store all heavy baggage here for free and enjoy hands-free walking around both Daereungwon and Hwangridan-gil.\n\n• Accessibility: The entire park features perfectly flat, well-paved trails with absolutely no stairs or steep incline, making it remarkably convenient for families with strollers and wheelchair users.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• The Daereungwon Magnolia Tree Spot: A lone magnolia tree stands gracefully tucked directly between two massive ancient mounds (Hwangnamdaechong). This is the absolute signature photo zone of Gyeongju, drawing crowds year-round to capture the quintessential minimalist curves of Eastern royal heritage.\n\n• Inside Cheonmachong Tomb: This is the only royal tomb in Korea that has been excavated and structurally cut open for the public to step inside. Named "Heavenly Horse Tomb" after a rare Silla painting of a flying horse found on a saddle flap here, the inner vault showcases a dramatic display of pure gold crowns, belts, and jewelry placed alongside the actual structural layers of the ancient tomb.\n\n• Hwangnamdaechong Tombs: The largest twin-mound tomb within the park, housing a Silla king and queen buried side-by-side. Its sheer mountain-like scale is overwhelmingly impressive.',
        image: '/images/destinations/gyeongju_daereungwon_magnolia.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: The famous magnolia photo spot is highly sought after; expect to wait in line anywhere from 30 minutes to over an hour during pleasant weekend afternoons.\n\n• Warnings: Remember that these beautiful grassy hills are the sacred final resting places of ancient kings. Stepping onto, climbing up, or touching the grassy mounds is strictly prohibited by cultural heritage laws and incurs massive fines. Visitors must remain on the paved trails.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• 🍱 Daereungwon Tata: 3-min walk from Main Gate / A bright and clean traditional restaurant specializing in refreshing Korean cold wheat noodles (Naengmyeon) served alongside savory charcoal-grilled pork sets—an approachable, non-spicy meal for international travelers.\n\n• ☕ Gabong Banwa: 5-min walk from Rear Gate (Hwangridan-gil side) / A premium traditional dessert cafe operating within an elegant Hanok house. They specialize in serving meticulously handcrafted seasonal wagashi (Korean traditional confections) alongside premium local teas—ideal for treating international guests to the fine aesthetics of Korean dessert culture.',
        image: '/images/destinations/gyeongju_gabong_banwa.png'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "A serene, mystical oasis in the middle of the city where travelers can walk amidst grand green waves of ancient royal tombs and explore the golden core of the historic Silla kingdom."\n\n• Rating: ⭐⭐⭐⭐⭐ (5/5, An absolute priority stop immediately paired with your Hwangridan-gil itinerary!)'
      }
    ],
    hours: 'Main/Rear Gates: 09:00 AM - 10:00 PM | Cheonmachong: 09:00 AM - 09:30 PM',
    tips: 'Show the Hangeul address to your taxi driver: 경북 경주시 계림로 9',
    address: '9, Gyerim-ro, Gyeongju-si, Gyeongsangbuk-do',
    koreanAddress: '경상북도 경주시 계림로 9',
    mapQuery: '경주 대릉원',
    taxi: {
      destination: '경주 대릉원 정문',
      destinationEn: 'Gyeongju Daereungwon Main Gate',
      message: '기사님, 경주 대릉원 정문으로 가주세요.',
      waitTip: '기사님, 경주 황리단길 입구로 가주세요.',
      waitTipEn: 'Sir, could you please take me to the entrance of Hwangridan-gil?',
    }
  },
};

export default function GyeongjuSpotDetailPage({ params }: { params: { slug: string } }) {
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
      <CuratedCoursePanel city="gyeongju" slug={params.slug} />

      {/* Back Link */}
      <Section tone="cream" className="border-t border-cream-200">
        <Container className="text-center">
          <Button href="/destinations/gyeongju" variant="secondary">Explore More of Gyeongju</Button>
        </Container>
      </Section>
    </div>
  );
}
