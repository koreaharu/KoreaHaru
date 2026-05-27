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
  dipirang: {
    title: 'Dipirang Digital Theme Park',
    subtitle: 'A Symphony of Light in the Midnight Forest',
    heroImage: '/images/destinations/tongyeong.png',
    intro: 'When the sun sets over Tongyeong and the stars appear, a quiet mountainside park comes alive with digital magic. Dipirang is Korea’s longest and largest outdoor digital theme park, occupying a 1.5-kilometer forested trail in Nammangsan Sculpture Park. Using state-of-the-art projection mapping, laser installations, and fairytale soundscapes, it transforms the dark trees and stone walls into a glowing, interactive fantasy world.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Dipirang / 디피랑\n\n• Hours:\n  - Summer Season (Mar–Sep): 07:30 PM ~ 12:00 AM (Last admission at 10:30 PM)\n  - Winter Season (Oct–Feb): 07:00 PM ~ 12:00 AM (Last admission at 10:30 PM)\n  ※ Closed every Monday (If Monday is a public holiday, it closes the following day) and on New Year\'s Day, Seollal (Lunar New Year), and Chuseok (Korean Thanksgiving).\n\n• Duration: Approx. 1 hour to 1.5 hours to walk along the outdoor trail through Nammangsan Sculpture Park and enjoy the digital light installations.'
      },
      {
        title: '2. How to Get There',
        content: '• Travel Tip: Located right next to Gangguan Harbor in downtown Tongyeong, inside Nammangsan Sculpture Park. It boasts excellent accessibility, making it the perfect nighttime itinerary after exploring Dongpirang Village or the Central Market.\n\n• Text for Map Apps (Copy & Paste):\n  - Destination Name: 디피랑 (Dipirang) or 남망산조각공원주차장 (Nammangsan Sculpture Park Parking Lot)\n\n• Directions: From Tongyeong Comprehensive Bus Terminal, board a bus heading toward Gangguan, such as Bus No. 101, 301, 401, or 501. Get off at the \'Jungang Market\' or \'Nammangsan Park Entrance\' stop and walk for about 10 minutes.'
      },
      {
        title: '3. Tickets & Fares',
        content: '• Admission Fares: Adults 15,000 KRW / Youth (Ages 13–18) 12,000 KRW / Children 10,000 KRW\n\n• Discount Tip: Small programmatic discounts apply if you present a same-day ticket receipt from the Tongyeong Cable Car or Skyline Luge. Keep your receipts handy!'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: Coin lockers are available near the ticket box. Since the tour involves walking up a hilly park path in the dark, it is highly recommended to store heavy bags before entering.\n\n• Restrooms: Clean public restrooms are located near the entrance/ticket box area and midway along the walking trail.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• Garden of Light & Media Facade: The park operates under a unique whimsical story: the old murals that fade away from Dongpirang Mural Village gather here on Nammangsan Mountain at night to throw a secret festival. The massive trees and cliffs serve as living projection screens blasted with brilliant holographic lasers.\n\n• Grand Sala (The Secret Workshop): A grand indoor media hall surrounded by immersive projection screens on all four walls. The combination of colossal visuals and cinematic soundtracks makes it a surreal and hypnotic space to sit and capture souvenirs.',
        image: '/images/destinations/tongyeong_dipirang_interior.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: Because it is an entirely outdoor trail up a mountain ridge, operations will cease completely during heavy rainfall or severe gales. If the weather looks stormy, call ahead to verify operations.\n\n• Warnings: Walking up dark, unpaved forest paths at night means wearing comfortable sneakers or closed-toe walking shoes is an absolute must. Additionally, mosquitoes can be prevalent during summer nights; applying insect repellent beforehand is highly advised.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• 🍱 Dongjin Gimbap: 10-min walk from Dipirang (Gangguan Coastal Road) / Specializes in Tongyeong\'s signature Chungmu Gimbap—plain rice rolls wrapped in seaweed served alongside spicy seasoned baby octopus and radish kimchi. A lightweight, quick meal ideal before or after your night walk.\n\n• 🍱 Ulsan Dacci: 5-min drive from Dipirang / A legendary spot practicing Tongyeong\'s unique Dacci culinary culture, where ordering alcohol rewards you with a continuous, lavish feast of fresh seasonal seafood side dishes. An excellent local venue to wrap up the day after your night tour.'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "Korea\'s largest outdoor digital theme park that transforms a quiet mountain forest into a glowing, dreamlike wonderland using cutting-edge projection mapping and whimsical local storytelling."\n\n• Rating: ⭐⭐⭐⭐⭐ (5/5)'
      }
    ],
    hours: '07:30 PM - 12:00 AM (Summer) | 07:00 PM - 12:00 AM (Winter) | Closed Mondays',
    tips: 'Show the Hangeul address to your taxi driver: 경남 통영시 남망공원길 29',
    address: '29, Nammanggoeweon-gil, Tongyeong-si, Gyeongsangnam-do',
    koreanAddress: '경상남도 통영시 남망공원길 29',
    mapQuery: '디피랑',
    taxi: {
      destination: '남망공원길 디피랑 매표소',
      destinationEn: 'Dipirang Ticket Office at Nammangsan Park',
      message: '기사님, 남망공원길 디피랑 매표소로 가주세요.',
      waitTip: '기사님, 통영 강구안 문화마당으로 가주세요.',
      waitTipEn: 'Sir, could you please take me to Tongyeong Gangguan Plaza?',
    }
  },
  dongpirang: {
    title: 'Dongpirang Mural Village',
    subtitle: 'The Seaside Hill Covered in Color',
    heroImage: '/images/destinations/tongyeong_dongpirang.png',
    intro: 'Dongpirang, which translates to "East Cliff," was once a historic, run-down village scheduled for complete demolition in 2007. In a desperate bid to save their homes, the local residents joined hands with artists from across Korea, transforming every concrete wall, stair, and chimney into a canvas of beautiful, colored murals. Today, it stands as a triumphant landmark of community-led art, overlooking the beautiful harbor of Tongyeong Port.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Dongpirang Mural Village / 동피랑 벽화마을\n\n• Hours: Open 24/7 all year round. However, as it is a real residential neighborhood where locals live, visitors are strongly urged to visit between 09:00 AM and 06:00 PM to minimize noise.\n\n• Duration: Approx. 40 minutes to 1 hour to slowly weave through the narrow, artistic hillside alleys and reach the summit pavilion.'
      },
      {
        title: '2. How to Get There',
        content: '• Travel Tip: Situated immediately behind Tongyeong Central Market. Because it overlaps seamlessly with the market scene and local street-food stalls, navigating here on foot is incredibly effortless.\n\n• Text for Map Apps (Copy & Paste):\n  - Destination Name: 동피랑벽화마을 (Dongpirang Mural Village) or 통영중앙시장 (Tongyeong Central Market)\n\n• Directions: From Tongyeong Bus Terminal, catch a bus heading to Gangguan and get off at the \'Jungang Market\' stop. Follow the clear directional signage pointing toward \'Dongpirang\' through the market alleys.'
      },
      {
        title: '3. Tickets & Booking',
        content: '• Admission: Free\n\n• Booking: No reservation required; open to the public freely.'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: The village features incredibly steep inclines and stone step pathways, making it impossible to drag wheelie suitcases. You must store heavy baggage at the coin lockers near the Tongyeong Central Market public parking lot or the main bus terminal before heading up.\n\n• Restrooms: Public restrooms are situated midway up the hill and near the Dongporu Pavilion at the summit.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• Angel Wings Mural: The absolute viral masterpiece that put Dongpirang on the global tourism map. Standing between the massive white wings with the harbor down below serves as a legendary photo zone that often draws brief lines.\n\n• Dongporu Observatory: A historical Joseon-dynasty military outpost structure resting at the absolute peak of the village. Standing here rewards you with a panoramic bird\'s-eye view of the colorful village rooftops and the sprawling harbor of Gangguan.',
        image: '/images/destinations/tongyeong_dongpirang_wings.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: Murals are regularly repainted and updated via street art festivals. This means certain iconic paintings you saw on the internet beforehand might have been refreshed or completely changed by the time you visit.\n\n• Warnings: This is a real, living neighborhood. Peeking inside open windows, shouting loudly, or leaving trash on the steps is strictly forbidden. Please respect the privacy of local residents.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• ☕ Dongpirang Kkum Cafe: Located inside the village (Mid-hill) / A cozy community cooperative cafe run directly by the local grandmothers of the village. Perfect for grabbing an iced Americano or traditional Korean sweet tea while lounging on their outdoor terrace looking at the sea view.\n\n• 🍱 Jeonghwa Sundae: 5-min walk from Dongpirang (Near Central Market) / A long-running local gem highly beloved by residents for its rich blood sausage soup (Gukbap), steamed pig trotters (Jokbal), and chewy stir-fried sundae. Ideal if you want a budget-friendly, non-seafood market dining experience.'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "A vibrant hillside village saved from demolition and transformed into an open-air public art canvas, offering travelers emotional alleyway strolls paired with panoramic coastal views."\n\n• Rating: ⭐⭐⭐⭐☆ (4.5/5)'
      }
    ],
    hours: 'Open daily 24 hours (Best visited 09:00 - 18:00)',
    tips: 'Show the Hangeul address to your taxi driver: 경남 통영시 동피랑길 100',
    address: '100, Dongpirang-gil, Tongyeong-si, Gyeongsangnam-do',
    koreanAddress: '경상남도 통영시 동피랑길 100',
    mapQuery: '동피랑벽화마을',
    taxi: {
      destination: '통영 동피랑 벽화마을',
      destinationEn: 'Tongyeong Dongpirang Mural Village',
      message: '기사님, 동피랑 벽화마을로 가주세요.',
      waitTip: '기사님, 통영 디피랑 매표소로 가주세요.',
      waitTipEn: 'Sir, could you please take me to the Tongyeong Dipirang ticket office?',
    }
  },
  cablecar: {
    title: 'Tongyeong Hallyeosudo Cable Car',
    subtitle: 'Breathtaking Vista of a Thousand Islands',
    heroImage: '/images/destinations/tongyeong_cablecar.png',
    intro: 'Prepare for one of the most visually stunning journeys in East Asia. The Tongyeong Hallyeosudo Cable Car glides you up the steep slopes of Mireuksan Mountain, covering a distance of 1,975 meters. As you ascend, the dense green valleys fall away to reveal a breathtaking 360-degree panorama of the emerald Hallyeohaesang National Park, dotted with dozens of tiny green islets scattered across the calm, glistening waters like pearls.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Tongyeong Hallyeosudo Cable Car / 통영 한려수도 조망케이블카\n\n• Hours: 09:30 AM ~ 05:30 PM daily (Closing hours frequently shift slightly earlier or later depending on seasonal light and wind conditions. Check their website on the morning of your visit. Features flexible monthly maintenance closure days).\n\n• Duration: The flight itself takes about 9 minutes one-way (20 minutes round-trip). However, it takes approx. 1.5 hours in total if you include stepping out at the upper station and climbing the wooden deck stairs to the true summit of Mount Mireuksan.'
      },
      {
        title: '2. How to Get There',
        content: '• Travel Tip: Nestled along the slopes of Mount Mireuksan, immediately adjacent to the Skyline Luge boarding terminal. It is standard practice to bundle these two landmarks together into a single day\'s itinerary: \'Luge Riding ➡️ Cable Car Riding\' or vice versa.\n\n• Text for Map Apps (Copy & Paste):\n  - Destination Name: 통영케이블카 하부정류장 (Tongyeong Cable Car Lower Station)\n\n• Directions: From Tongyeong Comprehensive Bus Terminal, board Bus No. 141, 184, or 101 and get off at the \'Cable Car Lower Station\' or \'Luge\' stop. Both terminals are within short walking distance.'
      },
      {
        title: '3. Tickets & Fares',
        content: '• Round-Trip Fares: Adults 14,000 KRW / Children 10,000 KRW\n\n• Combo Discount Tip: You can receive a 1,000 to 2,000 KRW discount if you present a physical ticket stub from the adjacent Skyline Luge or other select paid attractions in Tongyeong at the ticket counter.'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: Convenient coin lockers are located inside the lower station ticket building. Since reaching the true summit involves scaling a fair amount of wooden steps, leaving heavy backpacks behind is highly recommended.\n\n• Restrooms: Clean public restrooms are located inside both the lower departure terminal and the upper arrival station.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• Mount Mireuksan Summit Panorama: A well-maintained 15-minute wooden boardwalk stair climb leads from the upper cable car station to the true summit of Mount Mireuksan. It rewards you with a staggering 360-degree panoramic view of Hallyeosudo Marine National Park, dotted with thousands of emerald islands. (On an exceptionally crisp day, Japan’s Tsushima Island is visible).\n\n• Skywalk Glass Deck: The rooftop of the upper station features an exhilarating lookout platform equipped with a completely transparent glass floor jutting out over the mountain side—perfect for a thrilling souvenir photo.',
        image: '/images/destinations/tongyeong_cablecar_summit.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: As one of Korea\'s classic long-distance ropeways, the cabins feel slightly retro and lack the completely transparent glass floors found in ultra-modern marine cable cars like those in Busan or Yeosu. The scenery at the top, however, completely makes up for it.\n\n• Warnings: Operations will halt abruptly without prior notice during sudden heavy winds or thunderstorms for safety. On exceptionally breezy days, always verify operation status before heading out.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• 🍱 Yongnam Hwoesikdang: 5-min drive from the lower terminal / A budget-friendly local spot serving authentic Tongyeong-style raw fish bibimbap and crispy, savory grilled fish sets. Tossing fresh raw fish and vibrant vegetables in their sweet-and-sour gochujang sauce is incredible.\n\n• ☕ Misudong 354: 7-min drive from the lower terminal / A sleek, multi-story oceanfront cafe located along the Misudong coastal road, offering a brilliant view of the Tongyeong Grand Bridge. Its rooftop is a beautiful spot to sip premium coffee while watching the coastal night lights turn on.'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "A classic aerial ropeway gliding up Mount Mireuksan to unlock a breathtaking 360-degree maritime panorama of emerald islands scattered across Korea’s premier marine national park."\n\n• Rating: ⭐⭐⭐⭐⭐ (5/5, An absolute must on a crystal-clear day!)'
      }
    ],
    hours: '09:30 AM - 05:30 PM (Varies seasonally)',
    tips: 'Show the Hangeul address to your taxi driver: 경남 통영시 발개휘길 205',
    address: '205, Balgaehwi-gil, Tongyeong-si, Gyeongsangnam-do',
    koreanAddress: '경상남도 통영시 발개휘길 205',
    mapQuery: '통영케이블카',
    taxi: {
      destination: '통영 미륵산 케이블카 하부탑승장',
      destinationEn: 'Tongyeong Cable Car Lower Station',
      message: '기사님, 통영 케이블카 하부탑승장으로 가주세요.',
      waitTip: '기사님, 바로 옆에 있는 스카이라인 루지 매표소로 가주세요.',
      waitTipEn: 'Sir, could you please take me to the Skyline Luge ticket booth right next door?',
    }
  },
  luge: {
    title: 'Skyline Luge Tongyeong',
    subtitle: 'A Thrilling Ride Down the Lush Mountain',
    heroImage: '/images/destinations/tongyeong_luge.png',
    intro: 'Get ready for an absolute rush of pure, gravity-fueled fun. Skyline Luge Tongyeong is a world-class adventure attraction located right at the foot of Mireuksan Mountain. Sitting in a small, three-wheeled luge cart that you steer yourself, you glide down 4 distinct, winding concrete tracks covering over 3.8 kilometers of hair-pin turns, tunnels, and dramatic drops through the dense forest. It is a thrilling coastal escape.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Skyline Luge Tongyeong / 스카이라인루지 통영\n\n• Hours:\n  - Weekdays (Mon–Fri): 10:00 AM ~ 06:00 PM\n  - Weekends & Holidays: 10:00 AM ~ 07:00 PM (Closing hours may extend depending on season and weather. Open 365 days a year).\n\n• Duration: Varies based on the number of rides purchased (3 to 4 rides are heavily preferred). Expect to spend approx. 1.5 to 2 hours to complete the full cycle of riding the chairlift up, undergoing safety instruction, and racing down the tracks multiple times.'
      },
      {
        title: '2. How to Get There',
        content: '• Travel Tip: The ticket counters and lift terminals are positioned right next to the \'Tongyeong Cable Car Lower Station\' (2-minute walk). Because they share neighboring footprints and parking areas, aligning them back-to-back in your itinerary is highly efficient.\n\n• Text for Map Apps (Copy & Paste):\n  - Destination Name: 스카이라인루지 통영\n\n• Directions: Same as the Cable Car. Take Bus No. 141, 184, or 101 from Tongyeong Terminal and get off at the \'Luge\' or \'Cable Car Lower Station\' stop.'
      },
      {
        title: '3. Tickets & Fares',
        content: '• Fares (Per Person / Booking online in advance is cheaper than on-site):\n  - 2-Ride Pass: 27,000 KRW\n  - 3-Ride Pass (Highly Recommended): 30,000 KRW\n  - 4-Ride Pass: 33,000 KRW\n\n• Riding Tip: Doing only a single or double ride feels way too brief as you spend the first round just learning the steering mechanics. With 4 entirely different dynamic tracks engineered here (Dandi, Hera, Sinna, Ulla), purchasing at least a 3-Ride Pass offers vastly superior value and fun.'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: Ample paid coin lockers are situated right near the main entrance. Because operating the luge requires using both hands to steer and brake, backpacks, bulky items, or loose cameras are strictly barred from the ride and must be stored.\n\n• Restrooms: Large, clean public restrooms are well-maintained near the ticket ticket booths and the final souvenir gift shop.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• Skyride Chairlift: An open-air chairlift that whisks you and the luge carts up to the top station. It serves as an excellent vantage point to view riders racing down the winding tracks beneath your feet with the Tongyeong coastline framing the background.\n\n• 3.8km of Gravity-Fueled Racing: Designed by the original New Zealand adventure brand, this complex features 3.8 kilometers of hairpin turns, speedy straightaways, and fun tunnels. Controlling your own speed via the handlebars as you whip around curves delivers a fantastic adrenaline rush.\n\n• Finish Line Action Snapshots: Automated high-speed cameras are mounted over the final stretch of the tracks. Upon parking your cart, simply scan the barcode attached to your helmet at the photo center to review and print dynamic action shots of your race.',
        image: '/images/destinations/tongyeong_luge_action.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: During peak weekend afternoons or Korean holiday seasons, lines for the Skyride lift can become exceptionally long. To circumvent heavy congestion, aim to arrive right at opening hour (10:00 AM to 11:00 AM).\n\n• Warnings: Children under 110cm in height are strictly prohibited from riding solo and must ride in tandem with an adult. For critical safety reasons, it is strictly illegal to take one hand off the handlebars to pull out your smartphone for photos or videos while the cart is in motion.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• 🍱 Omisa Ggulbbang: 3-min drive from the luge terminal / The original founding brand of Tongyeong\'s most legendary traditional treat—Ggulbbang (Honey Bread). These are crunchy, deep-fried pastry balls coated in sweet syrup and sesame seeds, stuffed heavily with sweet red bean paste. The ultimate sugary carb-boost after a racing session.\n\n• 🍱 Daepungwan: 8-min drive from the luge terminal (Near Tongyeong Harbor) / A famous culinary institution specializing in multi-course menus showcasing Tongyeong\'s primary seafood staple: fresh Oysters. They serve everything from seasoned raw oysters, oyster pancakes (Jeon), and sweet-and-sour oyster pork to nutritious hot pot oyster rice sets.'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "A world-class adventure activity where you ride a scenic chairlift up a mountain and unleash gravity to steer three-wheeled carts down winding, high-speed coastal tracks."\n\n• Rating: ⭐⭐⭐⭐⭐ (5/5)'
      }
    ],
    hours: '10:00 AM - 06:00 PM (Weekdays) | 10:00 AM - 07:00 PM (Weekends)',
    tips: 'Show the Hangeul address to your taxi driver: 경남 통영시 발개휘길 178',
    address: '178, Balgaehwi-gil, Tongyeong-si, Gyeongsangnam-do',
    koreanAddress: '경상남도 통영시 발개휘길 178',
    mapQuery: '스카이라인루지 통영',
    taxi: {
      destination: '통영 스카이라인 루지 매표소',
      destinationEn: 'Tongyeong Skyline Luge Ticket Booth',
      message: '기사님, 통영 스카이라인 루지로 가주세요.',
      waitTip: '기사님, 통영 동피랑 벽화마을로 가주세요.',
      waitTipEn: 'Sir, could you please take me to Tongyeong Dongpirang Village?',
    }
  }
};

export default function TongyeongSpotDetailPage({ params }: { params: { slug: string } }) {
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
      <CuratedCoursePanel city="tongyeong" slug={params.slug} />

      {/* Back Link */}
      <Section tone="cream" className="border-t border-cream-200">
        <Container className="text-center">
          <Button href="/destinations/tongyeong" variant="secondary">Explore More of Tongyeong</Button>
        </Container>
      </Section>
    </div>
  );
}
