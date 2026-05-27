'use client';

import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

interface CuratedCoursePanelProps {
  city: 'busan' | 'namhae' | 'geoje' | 'tongyeong' | 'gyeongju';
  slug: string;
}

interface Step {
  time: string;
  title: string;
  activity: string;
  slug?: string;
  hiddenSpot?: string;
  dining?: string;
  highlight?: string;
  tip?: string;
}

interface Itinerary {
  courseTitle: string;
  courseDesc: string;
  day1Theme: string;
  day2Theme?: string;
  day1Steps: Step[];
  day2Steps?: Step[];
}

const ITINERARIES: Record<string, Itinerary> = {
  busan: {
    courseTitle: '2-Day Busan Coastal Roadmap (With Local Markets & Hidden Spots)',
    courseDesc: 'Experience the absolute ultimate way to experience Busan. Explore iconic sea cliffs, retro beach railways, ancient oceanside temples, and vibrant nightlife in total comfort.',
    day1Theme: 'Iconic Coastal Cliffs & Vibrant Beach Nightlife',
    day2Theme: 'Nostalgic Beach Trains & Majestic Oceanside Temples',
    day1Steps: [
      {
        time: '01:00 PM - 02:00 PM',
        title: '❶ Oryukdo Skywalk',
        slug: 'oryukdo',
        activity: 'Kick off your Busan journey by soaking in the bracing sea breeze while walking across a thrilling transparent glass bridge suspended over a 35-meter coastal cliff.',
        hiddenSpot: 'Don\'t miss Oryukdo Sunrise Park (오륙도 해맞이공원) located directly behind the skywalk. It features a scenic uphill walking trail that blooms with vibrant seasonal flowers and offers a panoramic view of the sea.'
      },
      {
        time: '02:30 PM - 04:30 PM',
        title: '🛍️ [Way-point Spot] Namcheon-dong "Bakery Street" (On the way to Gwangalli)',
        activity: 'A highly unique themed neighborhood tucked right on the path connecting Oryukdo and Gwangalli. Affectionately nicknamed "Pangcheon-dong" (Bread Village) by locals, this area is densely packed with independent artisanal bakeries. It is a fantastic spot for international travelers to sample trendy Korean pastries and capture cozy neighborhood street photography.'
      },
      {
        time: '05:00 PM - 🔥 Late Night',
        title: '❷ Gwangalli Beach (Accommodation Check-in & Night View)',
        slug: 'gwangalli',
        activity: 'Check into your ocean-view accommodation and take a relaxing evening stroll along the vibrant crescent shoreline of Gwangalli.',
        dining: 'The alleyways sitting immediately behind the beachfront are filled with retro Korean pubs (Pocha) and trendy modern fusion-Korean bistros. It is the single best area in Busan to experience authentic, energetic Korean nightlife.',
        highlight: 'If your visit lands on a Saturday evening, head to the sandy beach to witness the spectacular Gwangalli M Drone Light Show illuminate the night sky directly over the glittering Gwangan Bridge.'
      }
    ],
    day2Steps: [
      {
        time: '10:00 AM - 12:00 PM',
        title: '❸ Haeundae Blueline Park (Departing from Mipo Station)',
        slug: 'blueline',
        activity: 'Wake up and head to Haeundae to board the charmingly colorful Sky Capsules or the retro Beach Train running gracefully along the old historical railway track.',
        tip: 'We highly recommend departing from Mipo Station (미포정거장) and getting off at Cheongsapo Station (청사포정거장). The railroad crossing right outside Cheongsapo Station is a famous viral photo zone globally celebrated by travelers.',
        dining: 'The Cheongsapo harbor area is legendary for its open-air seaside restaurants serving local charcoal-grilled clams (Jogae-gui) and marine-view cafes famous for artisanal hand-drip coffees.'
      },
      {
        time: '12:30 PM - 01:30 PM',
        title: '🐟 [Local Culture Market] Gijang Market (On the way to Yonggungsa)',
        activity: 'A massive, bustling traditional seafood market perfectly bridging the route between Cheongsapo and Haedong Yonggungsa. Watching giant king crabs and rare marine life splashing in massive water tanks provides an incredibly raw and memorable cultural experience for international tourists.'
      },
      {
        time: '02:00 PM - 03:30 PM',
        title: '❹ Haedong Yonggungsa Temple',
        slug: 'yonggungsa',
        activity: 'The grand finale of your 2-day roadmap. Breaking away from the standard mountain-locked temples of Korea, this majestic sanctuary is built directly onto rough oceanside cliffs, facing the crashing waves of the East Sea. Walk down the 108 stone steps to absorb the mystical harmony of ancient spiritual heritage and powerful coastal nature.'
      },
      {
        time: '04:00 PM - Departure',
        title: 'Coastal Cafe Stroll & Journey Wrap-up',
        activity: 'After scaling the temple steps, head down to the adjacent Gijang coastal road, which is globally renowned for hosting massive, architecturally stunning premium ocean-view cafes. Order sweet artisanal cakes, sip signature iced lattes, and review your Busan travel memories before departure.'
      }
    ]
  },
  namhae: {
    courseTitle: '1-Day Namhae Signature Heritage Tour (Cliffs, Rice Paddies & Fairytales)',
    courseDesc: 'We have designed the ultimate signature route along Namhae\'s spectacular jagged peaks and fairytale coastline. Experience a perfect blend of high clifftop sanctuaries, hand-carved stone rice paddies, and enclaves of European culture.',
    day1Theme: 'Clifftop Shrines, Layered Paddies & German Enclaves',
    day1Steps: [
      {
        time: '09:00 AM - 11:30 AM',
        title: '❶ Geumsan Boriam Hermitage',
        slug: 'boriam',
        activity: 'Ascend the high mountain slopes to Boriam Temple, one of the three most sacred Buddhist prayer sites in Korea, suspended high above the clouds.',
        hiddenSpot: 'Dine at Geumsan Sanjang, a rustic stone cabin perched on a sheer cliff face, eating hot instant ramyun and seafood pancakes with a breathtaking ocean archipelago view.'
      },
      {
        time: '12:00 PM - 02:00 PM',
        title: '❷ Gacheon Darangee Village',
        slug: 'darangee',
        activity: 'Trek down through 108 tiers of hand-carved stone terraced rice fields descending steeply to the open sea waves.',
        dining: 'Taste local wild-herb seafood pancakes and sweet local Yuja (Yuzu) makgeolli (rice wine) at a cozy village tavern.'
      },
      {
        time: '02:30 PM - 05:00 PM',
        title: '❸ Namhae German Village',
        slug: 'german',
        activity: 'Explore the fairytale hillside community of orange-roofed European houses built for returning Korean-German miners and nurses in their retirement.',
        dining: 'Relax at a local German brewery pub (e.g. Perfect Life Brewery), eating authentic grilled bratwurst and sipping craft German wheat beers.'
      }
    ]
  },
  namhae_healing: {
    courseTitle: '1-Day Namhae Nature & Peaceful Ocean Healing Escape',
    courseDesc: 'A slow-paced, nature-immersive healing experience along Namhae\'s spectacular peaks and whispering pine tree forests.',
    day1Theme: 'Sacred Mountain Cliffs, Terraced Slopes & Silver Sand Walks',
    day1Steps: [
      {
        time: '09:30 AM - 12:00 PM',
        title: '❶ Geumsan Boriam Hermitage',
        slug: 'boriam',
        activity: 'Soak in the tranquil spiritual atmosphere of Wonhyo\'s mountain retreat. Stand before the grand stone Goddess of Mercy statue looking over the quiet misty islands.'
      },
      {
        time: '12:30 PM - 02:30 PM',
        title: '❷ Gacheon Darangee Village',
        slug: 'darangee',
        activity: 'Stroll the cliffside walking paths of Gacheon, crossing the wooden suspension bridge over the rugged coastline where waves crash below.'
      },
      {
        time: '03:00 PM - 05:30 PM',
        title: '❸ Sangju Silver Sand Beach',
        slug: 'bijo',
        activity: 'Take a peaceful bare-foot walk on the powdery silver sand beach, bordered by a massive, centennial pine tree forest.',
        tip: 'The beach is incredibly calm and peaceful. Sit at a beachside cafe for a signature yuzu dessert or take a relaxing forest walk.'
      }
    ]
  },
  geoje: {
    courseTitle: '1-Day Geoje Signature Heritage Tour (Cliffs, Pebbles & Island Botanics)',
    courseDesc: 'Explore Geoje\'s absolute scenic wonders in absolute luxury. Gliding across the open sea to Mediterranean gardens, strolling black pearl pebble beaches, and scaling dramatic coastal cliffs.',
    day1Theme: 'Windmills, Black Pebbles & Mediterranean Islands',
    day1Steps: [
      {
        time: '09:30 AM - 11:30 AM',
        title: '❶ Hakdong Pebble Beach',
        slug: 'mongdol',
        activity: 'Stroll on the unique jet-black pebble beach and listen to the therapeutic "clink-and-clatter" sound of pebbles rolling with the waves.',
        dining: 'Taste fresh seafood Kalguksu (wheat noodle soup) packed generously with fresh mussels, clams, and vegetables in a giant brass pot at local beachside joints.'
      },
      {
        time: '12:00 PM - 03:00 PM',
        title: '❷ Oedo Botania',
        slug: 'oedo',
        activity: 'Board the passenger ferry at Gujora Port to land on the stunning Mediterranean-style floating island garden filled with rare subtropical plants and white Venus statues.',
        tip: 'Ferries can be cancelled due to high sea waves even on sunny days. Your chauffeur will coordinate the exact ferry timings and dock details beforehand.'
      },
      {
        time: '03:30 PM - 05:00 PM',
        title: '❸ Windy Hill & Sinseondae Cliff',
        slug: 'windyhill', // matches either windyhill or sinseondae
        activity: 'Walk up the grassy ridge to the iconic wooden windmill, then cross the street to marvel at the massive yellow-layered rock cliffs of Sinseondae.',
        tip: 'True to its name, sea gales are incredibly strong here. Make sure to pack a windbreaker and wear high-traction walking shoes.'
      }
    ]
  },
  tongyeong: {
    courseTitle: '1-Day Tongyeong Signature Culture & Adventure Tour',
    courseDesc: 'Experience Tongyeong\'s rich artistic history and high-adrenaline adventure sports in comfort. From pastel mural villages to forest luge tracks and magical hologram midnight forests.',
    day1Theme: 'Hill Alleys, Skyline Luge & Digital Forests',
    day1Steps: [
      {
        time: '10:00 AM - 12:00 PM',
        title: '❶ Dongpirang Mural Village',
        slug: 'dongpirang',
        activity: 'Climb the colorful winding mural alleys saved by community art. Stand before the iconic Angel Wings and the peak Dongporu Pavilion.',
        dining: 'Taste Tongyeong\'s signature Chungmu Gimbap (seaweed rice rolls with baby octopus) or sweet tea at a cooperative cafe run by local grandmothers.'
      },
      {
        time: '01:00 PM - 04:00 PM',
        title: '❷ Mireuksan Cable Car & Skyline Luge',
        slug: 'cablecar', // matches either cablecar or luge
        activity: 'Race down Mireuksan Mountain on gravity luge carts with hairpin turns, then board the adjacent Hallyeosudo Cable Car to Mount Mireuksan summit.',
        tip: 'Steering the cart requires using both hands. Leave all heavy baggage safely inside your chauffeur vehicle while you race!'
      },
      {
        time: '07:00 PM - 08:30 PM',
        title: '❸ Dipirang Digital Theme Park',
        slug: 'dipirang',
        activity: 'Explore Korea\'s largest outdoor media theme park. Walk the forested path filled with digital laser mappings and glowing hologram stories.',
        dining: 'Wrap up your evening at a legendary local dacci restaurant (e.g. Ulsan Dacci), where ordering beer rewards you with an endless feast of fresh seafood side dishes.'
      }
    ]
  },
  gyeongju: {
    courseTitle: '1-Day Gyeongju Silla Heritage Tour (Royal Tombs, Hanoks & Golden Ponds)',
    courseDesc: 'Travel back in time to the 1,000-year-old ancient capital of Silla. Walk between giant green royal tomb hills, explore stylish traditional Hanok alleys, and marvel at shimmering golden ponds.',
    day1Theme: 'Royal Earthen Hills, Hanok Alleys & Golden Ponds',
    day1Steps: [
      {
        time: '09:30 AM - 11:30 AM',
        title: '❶ Bulguksa Temple',
        slug: 'bulguksa',
        activity: 'Visit Gyeongju\'s representative UNESCO-listed stone temple on Mt. Toham. Stand before Dabotap and Seokgatap pagodas and locate the lucky golden pig.',
        tip: 'Detour ramps are available, making it wheelchair and stroller-friendly. Refrain from shouting inside this sacred Buddhist temple.'
      },
      {
        time: '12:00 PM - 02:30 PM',
        title: '❷ Daereungwon Ancient Tombs & Hwangridan-gil',
        slug: 'daereungwon', // matches either daereungwon or hwangridan
        activity: 'Stroll between the 23 grass royal tomb hills. Step inside Cheonmachong Tomb to view pure gold crowns, then explore the Hanok cafe streets of Hwangridan-gil.',
        dining: 'Eat stone-cooked rice (Sotbap) inside a renovated Hanok restaurant (e.g. So Hoban) or try a Sibwon (10-Won) coin bread stuffed with mozzarella cheese.',
        hiddenSpot: 'Wait in line at the Daereungwon Magnolia Tree Spot tucked between the massive royal hills for Gyeongju\'s signature photo.'
      },
      {
        time: '06:30 PM - 08:00 PM',
        title: '❸ Donggung Palace & Wolji Pond',
        slug: 'donggung',
        activity: 'Walk around the royal palace pond as twilight fades, watching the wooden pavilions light up in liquid gold, reflecting perfectly over Wolji Pond.',
        tip: 'The ticket booths are heavily crowded after sunset. Use the automated ticketing kiosks near the entrance to bypass the line.'
      }
    ]
  }
};

export function CuratedCoursePanel({ city, slug }: CuratedCoursePanelProps) {
  // Determine which itinerary key to load
  let key = city as string;
  if (city === 'namhae' && slug === 'bijo') {
    key = 'namhae_healing';
  }
  
  const itinerary = ITINERARIES[key];
  if (!itinerary) return null;

  // A helper function to check if this step matches the active slug
  const isCurrentStep = (stepSlug?: string) => {
    if (!stepSlug) return false;
    if (slug === stepSlug) return true;
    // Handle grouped slots
    if (slug === 'sinseondae' && stepSlug === 'windyhill') return true;
    if (slug === 'luge' && stepSlug === 'cablecar') return true;
    if (slug === 'hwangridan' && stepSlug === 'daereungwon') return true;
    return false;
  };

  const renderStepCard = (step: Step, idx: number) => {
    const isCurrent = isCurrentStep(step.slug);
    return (
      <div 
        key={idx} 
        className={`relative group p-4 rounded-sm border transition-all ${
          isCurrent 
            ? 'bg-gold-50/40 border-gold-500 shadow-sm' 
            : 'bg-white border-cream-200'
        }`}
      >
        {isCurrent && (
          <span className="absolute top-3 right-3 bg-gold-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
            You Are Here
          </span>
        )}
        <div className="absolute -left-[31px] top-5 h-3.5 w-3.5 rounded-full bg-white border-2 border-gold-600 flex items-center justify-center">
          <div className={`h-1.5 w-1.5 rounded-full ${isCurrent ? 'bg-gold-600 animate-pulse' : 'bg-gold-600'}`} />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-ink-900 text-cream-50 text-[9px] font-semibold px-2 py-0.5 rounded-sm whitespace-nowrap">
              {step.time}
            </span>
            <h5 className="font-serif text-sm font-semibold text-ink-900">
              {step.title}
            </h5>
          </div>
          
          <p className="text-xs text-ink-700 leading-relaxed">
            {step.activity}
          </p>
          
          {step.hiddenSpot && (
            <div className="bg-cream-100/40 border-l-2 border-gold-500 p-2.5 rounded-r-sm text-[11px] leading-relaxed text-ink-600">
              <strong className="text-gold-700 block mb-0.5">🔍 Hidden Spot Added</strong>
              {step.hiddenSpot}
            </div>
          )}
          
          {step.dining && (
            <div className="bg-cream-100/40 border-l-2 border-ink-900 p-2.5 rounded-r-sm text-[11px] leading-relaxed text-ink-600">
              <strong className="text-ink-900 block mb-0.5">🍱 Dining Concept</strong>
              {step.dining}
            </div>
          )}

          {step.highlight && (
            <div className="bg-gold-50/60 border-l-2 border-gold-700 p-2.5 rounded-r-sm text-[11px] leading-relaxed text-ink-600">
              <strong className="text-gold-800 block mb-0.5">✨ The Highlight</strong>
              {step.highlight}
            </div>
          )}
          
          {step.tip && (
            <div className="bg-cream-100/40 border-l-2 border-gold-500 p-2.5 rounded-r-sm text-[11px] leading-relaxed text-ink-600">
              <strong className="text-gold-700 block mb-0.5">📍 Route Tip</strong>
              {step.tip}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <Section tone="default" className="border-t border-cream-200 bg-cream-50/50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <header className="mb-10 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-700">Curated Travel Route</span>
            <h2 className="mt-4 font-serif text-3xl font-light text-ink-900 md:text-4xl">Featured in: {itinerary.courseTitle}</h2>
            <p className="mt-3 text-sm text-ink-600 leading-relaxed">
              {itinerary.courseDesc} Travel with our private chauffeur service to comfortably connect all these beautiful spots without transit stress.
            </p>
          </header>

          {/* Course timeline visualization */}
          <div className="space-y-12">
            {/* Day 1 or Single Day */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 bg-white p-3 rounded-sm border-l-4 border-gold-600 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-800 bg-gold-50 border border-gold-200 px-2 py-0.5 rounded-sm">
                  {itinerary.day2Steps ? 'Day 1' : '1-Day Route'}
                </span>
                <h4 className="font-serif text-base font-medium text-ink-900">
                  {itinerary.day1Theme}
                </h4>
              </div>
              
              <div className="relative pl-6 border-l border-cream-200 ml-4 space-y-6 py-1">
                {itinerary.day1Steps.map((step, idx) => renderStepCard(step, idx))}
              </div>
            </div>

            {/* Day 2 (if present) */}
            {itinerary.day2Steps && itinerary.day2Theme && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 bg-white p-3 rounded-sm border-l-4 border-gold-600 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-800 bg-gold-50 border border-gold-200 px-2 py-0.5 rounded-sm">
                    Day 2
                  </span>
                  <h4 className="font-serif text-base font-medium text-ink-900">
                    {itinerary.day2Theme}
                  </h4>
                </div>
                
                <div className="relative pl-6 border-l border-cream-200 ml-4 space-y-6 py-1">
                  {itinerary.day2Steps.map((step, idx) => renderStepCard(step, idx))}
                </div>
              </div>
            )}
          </div>

          {/* Chauffeur Service CTA Hook */}
          <div className="mt-10 bg-ink-950 text-cream-50 p-6 md:p-8 rounded-sm shadow-md border border-gold-600 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <span className="text-[9px] font-bold uppercase tracking-widest text-gold-400">Exclusive Travel Option</span>
              <h4 className="font-serif text-xl font-light tracking-wide text-cream-100">Explore This Route With a Private Chauffeur</h4>
              <p className="text-xs text-cream-200/80 leading-relaxed">
                Bypass complex public transits and tight bus schedules. Enjoy a customizable private vehicle with an English-speaking local driver to experience this entire course seamlessly.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <Button href="/services/chauffeur" className="w-full md:w-auto bg-gold-600 hover:bg-gold-700 text-white border-transparent">
                View Chauffeur Details
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
