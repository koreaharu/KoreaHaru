'use client';

import { useState } from 'react';
import Image from 'next/image';

interface MapSpot {
  slug: string;
  title: string;
  subtitle: string;
  x: number; // percentage from left
  y: number; // percentage from top
  driveTime: string; // from central hub
  description: string;
  image: string;
  chauffeurTip: string;
  courses: string[]; // which courses this spot belongs to
  address: string;
  koreanAddress: string;
  mapQuery?: string;
}

const BUSAN_MAP_SPOTS: MapSpot[] = [
  {
    slug: 'gamcheon',
    title: 'Gamcheon Culture Village',
    subtitle: 'The Colorful Cliffside Village',
    x: 36,
    y: 64,
    driveTime: '15 mins from Busan Station',
    description: 'Busan’s iconic mountainside village filled with pastel-colored houses, winding art murals, and alleys.',
    image: '/images/destinations/busan-gamcheon-detail.png',
    chauffeurTip: 'Built on a steep, vertical mountainside with narrow lanes. The public buses get dangerously packed. A private vehicle gets you directly to the highest entrance gate in comfort.',
    courses: ['west', 'historic'],
    address: '203 Gamnae 2-ro, Saha-gu, Busan, South Korea',
    koreanAddress: '부산광역시 사하구 감내2로 203 (감천동)',
    mapQuery: '감천문화마을'
  },
  {
    slug: 'songdo',
    title: 'Songdo Marine Cable Car',
    subtitle: 'Gliding High Above the Ocean Waves',
    x: 36,
    y: 80,
    driveTime: '20 mins from Busan Station',
    description: 'A thrilling cable car ride with crystal-glass bottoms that glides 86 meters above the open ocean waves.',
    image: '/images/destinations/busan_songdo.png',
    chauffeurTip: 'After the cable car, walk the Yonggung Suspension Bridge and eat fresh grilled clams at the Amnam Park street tents. Your chauffeur will be waiting right at the park exit.',
    courses: ['west', 'scenic'],
    address: '171 Songdoheabyan-ro, Seo-gu, Busan, South Korea',
    koreanAddress: '부산광역시 서구 송도해변로 171',
    mapQuery: '송도해상케이블카'
  },
  {
    slug: 'huinnyeoul',
    title: 'Huinnyeoul Culture Village',
    subtitle: 'The Blue-and-White Cliffside Alleyways',
    x: 51,
    y: 78,
    driveTime: '20 mins from Busan Station',
    description: 'A quiet, historic residential neighborhood perched high on the cliffs of Yeongdo Island overlooking the sea.',
    image: '/images/destinations/busan_huinnyeoul.png',
    chauffeurTip: 'The village stretches along a narrow cliff. There is no vehicle parking near the village paths. Your chauffeur will drop you at the north gate and meet you at the south tunnel exit.',
    courses: ['west', 'scenic'],
    address: '1043 Yeongseondong 4-ga, Yeongdo-gu, Busan, South Korea',
    koreanAddress: '부산광역시 영도구 영선동4가 1043',
    mapQuery: '흰여울문화마을'
  },
  {
    slug: 'oryukdo',
    title: 'Oryukdo Skywalk & Islets',
    subtitle: 'Glass Bridge Over Crashing Sea Cliffs',
    x: 65,
    y: 84,
    driveTime: '30 mins from Busan Station',
    description: 'A dramatic U-shaped glass-bottom walkway projecting over a 35-meter clifftop, overlooking the islets.',
    image: '/images/destinations/busan_oryukdo.png',
    chauffeurTip: 'Located on the remote outer edge of Busan. Waiting for local buses here takes up to 45 minutes. A private car connects this to Gwangalli or Haeundae in under 15 minutes.',
    courses: ['east', 'scenic'],
    address: '137 Oryukdo-ro, Nam-gu, Busan, South Korea',
    koreanAddress: '부산광역시 남구 오륙도로 137',
    mapQuery: '오륙도스카이워크'
  },
  {
    slug: 'gwangalli',
    title: 'Gwangalli Beach',
    subtitle: 'Crescent Beach & Illuminated Bridge',
    x: 74,
    y: 44,
    driveTime: '25 mins from Busan Station',
    description: 'A vibrant sandy crescent famous for its lively café streets and the glowing suspension Gwangan Bridge.',
    image: '/images/destinations/busan_gwangalli.png',
    chauffeurTip: 'Finding parking at Gwangalli is an absolute nightmare, especially during the Saturday Drone Show. Let your chauffeur handle the drop-off and pickup right on the beach boulevard.',
    courses: ['east', 'night'],
    address: '219 Gwanganhaebyeon-ro, Suyeong-gu, Busan, South Korea',
    koreanAddress: '부산광역시 수영구 광안해변로 219',
    mapQuery: '광안리해수욕장'
  },
  {
    slug: 'hwangnyeongsan',
    title: 'Hwangnyeongsan Peak',
    subtitle: '360° Panoramic Night Skyline',
    x: 61,
    y: 40,
    driveTime: '20 mins from Seomyeon',
    description: 'The highest peak in central Busan offering a breathtaking neon-lit night vista of the city and bridge.',
    image: '/images/home/hero.png',
    chauffeurTip: 'Absolutely no public transport reaches the summit, and standard taxis refuse to drive up empty. Having a private chauffeur wait for you at the summit parking lot is the only stress-free way to visit.',
    courses: ['scenic', 'night'],
    address: '391-39 Hwangnyeongsan-ro, Nam-gu, Busan, South Korea',
    koreanAddress: '부산광역시 남구 황령산로 391-39',
    mapQuery: '황령산 봉수대'
  },
  {
    slug: 'blueline',
    title: 'Haeundae Blueline Park',
    subtitle: 'Retro Coastal Sky Capsules',
    x: 82,
    y: 35,
    driveTime: '35 mins from Busan Station',
    description: 'An adorable eco-friendly railway running along Haeundae’s eastern clifftops, offering retro Sky Capsules.',
    image: '/images/destinations/busan_blueline.png',
    chauffeurTip: 'Tickets sell out instantly. Your chauffeur can coordinate the exact drop-off at Mipo Station and be waiting at the other end (Cheongsapo) so you don\'t have to walk back.',
    courses: ['east', 'scenic'],
    address: '13 Dalmaji-gil 62beon-gil, Haeundae-gu, Busan, South Korea',
    koreanAddress: '부산광역시 해운대구 달맞이길62번길 13',
    mapQuery: '해운대블루라인파크 미포정거장'
  },
  {
    slug: 'yonggungsa',
    title: 'Haedong Yonggungsa Temple',
    subtitle: 'Sacred Temple on Rocky Coast',
    x: 90,
    y: 19,
    driveTime: '45 mins from Busan Station',
    description: 'A legendary Buddhist temple perched dramatically on jagged rocks facing the crashing waves of the East Sea.',
    image: '/images/destinations/busan_yonggungsa.png',
    chauffeurTip: 'Public transport here takes 1.5 hours and involves a steep 15-minute walk. With a private car, your chauffeur drops you right at the entrance gate and bypasses the steep hiking trail.',
    courses: ['east', 'scenic'],
    address: '86 Yonggung-gil, Gijang-eup, Gijang-gun, Busan, South Korea',
    koreanAddress: '부산광역시 기장군 기장읍 용궁길 86',
    mapQuery: '해동용궁사'
  }
];

const NAMHAE_MAP_SPOTS: MapSpot[] = [
  {
    slug: 'darangee',
    title: 'Darangee Village',
    subtitle: 'Terraced Stone Rice Fields by the Sea',
    x: 24,
    y: 41,
    driveTime: '35 mins from Namhae Terminal',
    description: 'A historic cliffside village famous for its 108 layers of terraced rice paddies descending to the waves.',
    image: '/images/destinations/namhae_bijo.png',
    chauffeurTip: 'Located on the absolute remote south-western tip of the island. Public transit here is highly sparse (only 3-4 buses a day). Having a private chauffeur is essential to explore this site.',
    courses: ['classic', 'scenic'],
    address: '21 Nammyeon-ro 679beon-gil, Nam-myeon, Namhae-gun, Gyeongnam, South Korea',
    koreanAddress: '경상남도 남해군 남면 남면로679번길 21',
    mapQuery: '가천다랭이마을'
  },
  {
    slug: 'boriam',
    title: 'Geumsan Boriam Hermitage',
    subtitle: 'Sacred Temple Suspended in the Clouds',
    x: 48,
    y: 36,
    driveTime: '25 mins from Namhae Terminal',
    description: 'A breathtaking Buddhist temple clinging to the sheer cliffs of Geumsan Mountain, looking over the islands.',
    image: '/images/destinations/namhae.png',
    chauffeurTip: 'Renting a car here is highly recommended. The mountain road is extremely steep with a massive backup at the ticket booth. Your chauffeur handles the stressful driving while you enjoy the views.',
    courses: ['classic', 'scenic'],
    address: '693 Boriam-ro, Sangju-myeon, Namhae-gun, Gyeongnam, South Korea',
    koreanAddress: '경상남도 남해군 상주면 보리암로 693',
    mapQuery: '금산 보리암'
  },
  {
    slug: 'bijo',
    title: 'Sangju Silver Sand Beach',
    subtitle: 'Powdery Silver Sand & Pine Forests',
    x: 52,
    y: 44,
    driveTime: '20 mins from Namhae Terminal',
    description: 'A wide, crescent beach of incredibly soft silver sand, bordered by a massive pine tree forest.',
    image: '/images/destinations/namhae_bijo.png',
    chauffeurTip: 'Sangju Silver Beach is beautiful for walks, but it is far from other tourist spots. A private vehicle lets you easily bundle this beach with Boriam Hermitage in a single afternoon.',
    courses: ['scenic', 'cultural'],
    address: '17-4 Sangju-ro, Sangju-myeon, Namhae-gun, Gyeongnam, South Korea',
    koreanAddress: '경상남도 남해군 상주면 상주로 17-4',
    mapQuery: '상주은모래비치'
  },
  {
    slug: 'german',
    title: 'Namhae German Village',
    subtitle: 'European Orange-Roof Hillside Haven',
    x: 68,
    y: 28,
    driveTime: '25 mins from Namhae Terminal',
    description: 'A picturesque hillside community of orange-roofed European houses, German pub houses, and breweries.',
    image: '/images/destinations/namhae_german.png',
    chauffeurTip: 'Perfect place to enjoy traditional German draft beers and sausages! With your private chauffeur as the designated driver, you can drink stress-free without worrying about driving back.',
    courses: ['classic', 'cultural'],
    address: '64-7 Dogil-ro, Samdong-myeon, Namhae-gun, Gyeongnam, South Korea',
    koreanAddress: '경상남도 남해군 삼동면 독일로 64-7',
    mapQuery: '남해 독일마을'
  }
];

interface ItineraryStep {
  time: string;
  title: string;
  activity: string;
  hiddenSpot?: string;
  dining?: string;
  highlight?: string;
  tip?: string;
}

interface ItineraryDay {
  day: string;
  theme: string;
  steps: ItineraryStep[];
}

interface CourseItinerary {
  title: string;
  days: ItineraryDay[];
}

const COURSE_ITINERARIES: Record<string, CourseItinerary> = {
  'busan-all': {
    title: 'Busan Master All-Location Coastal & Cultural Route (8 Highlights)',
    days: [
      {
        day: 'Day 1',
        theme: 'West Coast Art Villages, Marine Cable Cars & Sunset Peaks',
        steps: [
          {
            time: '10:00 AM - 12:00 PM',
            title: '❶ Gamcheon Culture Village',
            activity: 'Explore the beautifully colored mountainside village, winding art murals, and narrow alleys.',
            hiddenSpot: 'Search for the Haneulmaru Observatory (Sky Ridge), the highest vantage point in the village, offering a 360-degree panorama of the entire neighborhood.'
          },
          {
            time: '12:30 PM - 02:00 PM',
            title: '❷ Songdo Marine Cable Car',
            activity: 'Ride the crystal-cabin cable car high over the ocean, walk the suspension bridge, and enjoy the breathtaking marine vistas.',
            dining: 'The Amnam Park grilled clam tent village (Jogae-gui) sitting immediately next to the cable car station is legendary for fresh local seafood.'
          },
          {
            time: '02:30 PM - 04:30 PM',
            title: '❸ Huinnyeoul Culture Village',
            activity: 'Stroll the quiet, picturesque blue-and-white cliffside alleyways of Yeongdo Island overlooking the wide sea horizon.',
            hiddenSpot: 'Walk down the Piano Stairs to reach the Huinnyeoul Coastal Tunnel for a signature silhouette photo looking out toward the blue ocean.'
          },
          {
            time: '05:00 PM - 06:30 PM',
            title: '❹ Hwangnyeongsan Peak',
            activity: 'Ascend to the highest peak in central Busan to witness the spectacular sunset and the city’s glowing lights.',
            tip: 'No public transit reaches the summit. Your chauffeur will drive you directly to the top so you can relax with hot tea at the observatory cabin cafe.'
          }
        ]
      },
      {
        day: 'Day 2',
        theme: 'East Coast Glass Skywalks, retro Beach Railways, Ocean Temples & Bridge Lights',
        steps: [
          {
            time: '10:00 AM - 11:30 AM',
            title: '❺ Oryukdo Skywalk & Cliffs',
            activity: 'Walk above the crashing waves on a transparent glass bridge suspended over a 35-meter cliff, watching the iconic Oryukdo islets.',
            hiddenSpot: 'Don\'t miss Oryukdo Sunrise Park (오륙도 해맞이공원) located directly behind the skywalk for stunning sea flower views.'
          },
          {
            time: '12:00 PM - 02:00 PM',
            title: '❻ Haeundae Blueline Park',
            activity: 'Ride the adorable retro Sky Capsules along the eastern clifftops of Haeundae, enjoying sweeping sea views.',
            tip: 'We highly recommend boarding at Mipo Station and getting off at Cheongsapo Station. Capture the viral train crosswalk photo with the blue ocean.'
          },
          {
            time: '02:30 PM - 04:30 PM',
            title: '❼ Haedong Yonggungsa Temple',
            activity: 'Visit the majestic Buddhist temple built directly onto the jagged coastal cliffs of Gijang, listening to the waves crash against the stone walls.',
            dining: 'Stop by Gijang’s famous premium architect-designed ocean-view cafes along the coastal road for lattes and fresh pastries.'
          },
          {
            time: '05:00 PM - 🔥 Late Night',
            title: '❽ Gwangalli Beach (Illuminated Bridge & Drone Show)',
            activity: 'Wrap up your journey walking along Gwangalli’s crescent beach. If visiting on a Saturday, watch the majestic drone light show over Gwangan Bridge.',
            dining: 'Explore the lively pochas and modern fusion bistros tucked in the alleyways behind the beachfront to taste raw fish and local craft beer.'
          }
        ]
      }
    ]
  },
  'namhae-all': {
    title: 'Namhae Master All-Location Heritage & Nature Route (4 Highlights)',
    days: [
      {
        day: '1-Day Route',
        theme: 'Clifftop Temples, Terraced Paddies, Silver Pine Forests & Fairytale German Villages',
        steps: [
          {
            time: '09:00 AM - 11:30 AM',
            title: '❶ Geumsan Boriam Hermitage',
            activity: 'Ascend the high mountain slopes to Boriam Temple, one of the three most sacred Buddhist prayer sites in Korea, suspended high above the clouds.',
            hiddenSpot: 'Dine at Geumsan Sanjang, a rustic stone cabin perched on a sheer cliff face, eating hot instant ramyun and seafood pancakes with a breathtaking ocean archipelago view.'
          },
          {
            time: '12:00 PM - 01:30 PM',
            title: '❷ Gacheon Darangee Village',
            activity: 'Trek down through 108 tiers of hand-carved stone terraced rice fields descending steeply to the open sea waves.',
            dining: 'Taste local wild-herb seafood pancakes and sweet local Yuja (Yuzu) makgeolli (rice wine) at a cozy village tavern.'
          },
          {
            time: '02:00 PM - 03:30 PM',
            title: '❸ Sangju Silver Sand Beach',
            activity: 'Take a peaceful bare-foot walk on the powdery silver sand beach, bordered by a massive pine tree forest.',
            tip: 'The beach is incredibly calm and peaceful. Sit at a beachside cafe for a signature yuzu dessert or take a relaxing forest walk.'
          },
          {
            time: '04:00 PM - 06:00 PM',
            title: '❹ Namhae German Village',
            activity: 'Explore the fairytale hillside community of orange-roofed European houses built for returning Korean-German miners and nurses.',
            dining: 'Relax at a local German brewery pub (e.g. Perfect Life Brewery), eating authentic grilled bratwurst and sipping craft German wheat beers.'
          }
        ]
      }
    ]
  },
  'geoje-all': {
    title: 'Geoje Master All-Location Coastal & Island Route (4 Highlights)',
    days: [
      {
        day: '1-Day Route',
        theme: 'Black Pebble Beaches, Floating Botanical Islands, Ancient Cliffs & Iconic Windmills',
        steps: [
          {
            time: '09:30 AM - 11:30 AM',
            title: '❶ Hakdong Pebble Beach',
            activity: 'Stroll on the unique jet-black pebble beach and listen to the therapeutic "clink-and-clatter" sound of pebbles rolling with the waves.',
            dining: 'Taste fresh seafood Kalguksu (wheat noodle soup) packed generously with fresh mussels, clams, and vegetables in a giant brass pot.'
          },
          {
            time: '12:00 PM - 03:00 PM',
            title: '❷ Oedo Botania',
            activity: 'Board the passenger ferry at Gujora Port to land on the stunning Mediterranean-style floating island garden filled with rare subtropical plants and white Venus statues.',
            tip: 'Your chauffeur will coordinate the exact ferry timings and dock details beforehand so you bypass all boarding confusion.'
          },
          {
            time: '03:30 PM - 04:30 PM',
            title: '❸ Sinseondae Cliff',
            activity: 'Descend to the ancient multi-layered yellow rock platform where hermits allegedly lounged, juxtaposed against a pristine emerald sea.',
            tip: 'Features steep steps and uneven rock surfaces. Sneakers are mandatory for safety.'
          },
          {
            time: '04:30 PM - 06:00 PM',
            title: '❹ Windy Hill',
            activity: 'Walk up the grassy ridge directly across the street to the iconic wooden windmill, enjoying a scenic view of Dojangpo Harbor.',
            tip: 'Sea gales are incredibly strong here. Make sure to pack a windbreaker and hold your phone tightly!'
          }
        ]
      }
    ]
  },
  'tongyeong-all': {
    title: 'Tongyeong Master All-Location Culture & Adventure Route (4 Highlights)',
    days: [
      {
        day: '1-Day Route',
        theme: 'Mural Alleys, Panoramic Mountain Ropeways, Forest Luge Racing & Digital Midnight Woods',
        steps: [
          {
            time: '10:00 AM - 12:00 PM',
            title: '❶ Dongpirang Mural Village',
            activity: 'Climb the colorful winding mural alleys saved by community art. Stand before the iconic Angel Wings and the peak Dongporu Pavilion.',
            dining: 'Taste Tongyeong\'s signature Chungmu Gimbap (seaweed rice rolls with baby octopus) at a local harbor shop.'
          },
          {
            time: '01:00 PM - 02:30 PM',
            title: '❷ Hallyeosudo View Cable Car',
            activity: 'Glide up Mount Mireuksan in the ropeway to offer a 360-degree panorama of Hallyeohaesang National Park.',
            tip: 'On a clear day, Japan\'s Tsushima Island is visible in the far horizon from the summit decks.'
          },
          {
            time: '02:30 PM - 04:30 PM',
            title: '❸ Skyline Luge Tongyeong',
            activity: 'Race down Mireuksan Mountain on gravity luge carts with hairpin turns, speed straightaways, and forest tunnels.',
            tip: 'Steering the cart requires using both hands. Leave all heavy baggage safely inside your chauffeur vehicle while you race!'
          },
          {
            time: '07:00 PM - 08:30 PM',
            title: '❹ Dipirang Digital Theme Park',
            activity: 'Explore Korea\'s largest outdoor media theme park. Walk the forested path filled with digital laser mappings and glowing hologram stories.',
            dining: 'Wrap up your evening at a legendary local dacci restaurant (e.g. Ulsan Dacci) for an endless feast of fresh seafood side dishes.'
          }
        ]
      }
    ]
  },
  'gyeongju-all': {
    title: 'Gyeongju Master All-Location Ancient Silla Route (4 Highlights)',
    days: [
      {
        day: '1-Day Route',
        theme: 'UNESCO Stone Temples, Royal Grass Tombs, Hanok Cafe Alleys & Golden Night Ponds',
        steps: [
          {
            time: '09:30 AM - 11:30 AM',
            title: '❶ Bulguksa Temple',
            activity: 'Visit Gyeongju\'s representative UNESCO-listed stone temple on Mt. Toham. Stand before Dabotap and Seokgatap pagodas.',
            tip: 'Detour ramps are available, making it wheelchair and stroller-friendly. Refrain from shouting inside this sacred temple.'
          },
          {
            time: '12:00 PM - 02:00 PM',
            title: '❷ Daereungwon Ancient Tombs',
            activity: 'Stroll between the 23 grass royal tomb hills. Step inside Cheonmachong Tomb to view pure gold crowns and ancient royal jewelry.',
            hiddenSpot: 'Wait in line at the Daereungwon Magnolia Tree Spot tucked between the massive royal hills for Gyeongju\'s signature photo.'
          },
          {
            time: '02:00 PM - 04:00 PM',
            title: '❸ Hwangridan-gil Alleys',
            activity: 'Explore Gyeongju\'s trendiest district. Shop in independent bookstores, buy handmade craft souvenirs, and dress in traditional Hanbok.',
            dining: 'Dine at a renovated Hanok restaurant (e.g. So Hoban) or grab a Sibwon (10-Won) coin bread stuffed with mozzarella cheese.'
          },
          {
            time: '06:30 PM - 08:00 PM',
            title: '❹ Donggung Palace & Wolji Pond',
            activity: 'Walk around the royal palace pond as twilight fades, watching the wooden pavilions light up in liquid gold, reflecting perfectly over Wolji Pond.',
            tip: 'The ticket booths are heavily crowded after sunset. Use the automated ticketing kiosks near the entrance to bypass the line.'
          }
        ]
      }
    ]
  }
};

const GEOJE_MAP_SPOTS: MapSpot[] = [
  {
    slug: 'mongdol',
    title: 'Hakdong Pebble Beach',
    subtitle: 'Symphony of Glistening Black Pebbles',
    x: 0,
    y: 0,
    driveTime: '40 mins from Gohyeon Terminal',
    description: 'A rare pebble beach filled with smooth black pebbles that play a soothing melody with every crash of the waves.',
    image: '/images/destinations/geoje_mongdol_pebbles.png',
    chauffeurTip: 'Never take pebble stones home as a souvenir (it is strictly illegal!). Stroll bare-foot and enjoy a hot bowl of local seafood Kalguksu noodles at the beachside restaurants.',
    courses: ['scenic', 'cultural'],
    address: 'Hakdong-ri, Dongbu-myeon, Geoje-si, Gyeongnam, South Korea',
    koreanAddress: '경상남도 거제시 동부면 학동리',
    mapQuery: '학동흑진주몽돌해수욕장'
  },
  {
    slug: 'oedo',
    title: 'Oedo Botania',
    subtitle: 'A Mediterranean Island Garden',
    x: 0,
    y: 0,
    driveTime: '30 mins to Gujora Terminal + 25 mins ferry',
    description: 'A spectacular Mediterranean-style marine botanical garden built over 30 years on a floating rocky island.',
    image: '/images/destinations/geoje_oedo_garden.png',
    chauffeurTip: 'You must take a ferry from Gujora Port. Your chauffeur coordinates the exact ferry timings, drops you right at the ticket gate, and will be waiting right at the dock upon your return.',
    courses: ['classic', 'cultural'],
    address: '17 Oedo-gil, Irun-myeon, Geoje-si, Gyeongnam, South Korea',
    koreanAddress: '경상남도 거제시 일운면 외도길 17',
    mapQuery: '구조라유람선'
  },
  {
    slug: 'windyhill',
    title: 'Windy Hill',
    subtitle: 'A Dutch Windmill over the Sea',
    x: 0,
    y: 0,
    driveTime: '50 mins from Gohyeon Terminal',
    description: 'A picturesque, grassy coastal ridge crowned with a majestic Dutch windmill, offering dramatic views of the southern sea.',
    image: '/images/destinations/geoje_windy_windmill.png',
    chauffeurTip: 'Located on the remote southern tip of Geoje. Waiting for rural buses here takes over an hour. Your chauffeur will park right near the boardwalk for a seamless drop-off.',
    courses: ['classic', 'scenic'],
    address: 'Galgot-ri, Nambu-myeon, Geoje-si, Gyeongnam, South Korea',
    koreanAddress: '경상남도 거제시 남부면 갈곶리 산14-47',
    mapQuery: '바람의언덕'
  },
  {
    slug: 'sinseondae',
    title: 'Sinseondae Cliff',
    subtitle: 'Layered Cliffs and Emerald Sea',
    x: 0,
    y: 0,
    driveTime: '50 mins from Gohyeon Terminal',
    description: 'A spectacular coastal observatory featuring massive, multi-layered yellow rock cliffs looking down at a pristine emerald sea.',
    image: '/images/destinations/geoje_sinseondae_cliff.png',
    chauffeurTip: 'Directly across the street from Windy Hill! Park once with your chauffeur, and explore both natural wonders on foot.',
    courses: ['classic', 'scenic'],
    address: 'Galgot-ri, Nambu-myeon, Geoje-si, Gyeongnam, South Korea',
    koreanAddress: '경상남도 거제시 남부면 갈곶리 산21-19',
    mapQuery: '거제 신선대'
  }
];

const TONGYEONG_MAP_SPOTS: MapSpot[] = [
  {
    slug: 'dongpirang',
    title: 'Dongpirang Mural Village',
    subtitle: 'Colorful Hill Village over the Harbor',
    x: 0,
    y: 0,
    driveTime: '10 mins from Tongyeong Terminal',
    description: 'A vibrant hillside mural village saved from demolition and transformed into a public art canvas.',
    image: '/images/destinations/tongyeong_dongpirang.png',
    chauffeurTip: 'Extremely steep paths with zero parking near the murals. Your chauffeur drops you at the upper entrance and waits near the Central Market at the base.',
    courses: ['classic', 'cultural'],
    address: '100 Dongpirang-gil, Tongyeong-si, Gyeongnam, South Korea',
    koreanAddress: '경상남도 통영시 동피랑길 100',
    mapQuery: '동피랑벽화마을'
  },
  {
    slug: 'cablecar',
    title: 'Hallyeosudo View Cable Car',
    subtitle: 'Gliding to Mireuksan Peak',
    x: 0,
    y: 0,
    driveTime: '15 mins from Tongyeong Terminal',
    description: 'An aerial ropeway ascending Mireuksan Mountain to offer a 360-degree panorama of Hallyeohaesang National Park.',
    image: '/images/destinations/tongyeong_cablecar.png',
    chauffeurTip: 'On clear days, you can spot Japan\'s Tsushima Island from the summit. Let your chauffeur bundle this with Skyline Luge right next door.',
    courses: ['classic', 'scenic'],
    address: '205 Balgaehwi-gil, Tongyeong-si, Gyeongnam, South Korea',
    koreanAddress: '경상남도 통영시 발개휘길 205',
    mapQuery: '통영케이블카'
  },
  {
    slug: 'luge',
    title: 'Skyline Luge Tongyeong',
    subtitle: 'Thrilling Gravity Forest Race',
    x: 0,
    y: 0,
    driveTime: '15 mins from Tongyeong Terminal',
    description: 'A gravity-fueled kart ride racing down Mireuksan Mountain with hairpin turns and speed tunnels.',
    image: '/images/destinations/tongyeong_luge_action.png',
    chauffeurTip: 'Steering the cart requires using both hands, so backpacks are strictly barred. Leave your heavy bags safely inside your chauffeur vehicle while you race!',
    courses: ['scenic', 'cultural'],
    address: '178 Balgaehwi-gil, Tongyeong-si, Gyeongnam, South Korea',
    koreanAddress: '경상남도 통영시 발개휘길 178',
    mapQuery: '스카이라인루지 통영'
  },
  {
    slug: 'dipirang',
    title: 'Dipirang Digital Theme Park',
    subtitle: 'Forest Symphony of Hologram Lights',
    x: 0,
    y: 0,
    driveTime: '12 mins from Tongyeong Terminal',
    description: 'Korea\'s largest outdoor media theme park, transforming Nammangsan forest into a glowing interactive world at night.',
    image: '/images/destinations/tongyeong.png',
    chauffeurTip: 'The park is entirely outdoors and opens only at night. With a private chauffeur, you don\'t have to worry about hailing empty taxis on this dark mountain road late at night.',
    courses: ['classic', 'night'],
    address: '29 Nammanggoeweon-gil, Tongyeong-si, Gyeongnam, South Korea',
    koreanAddress: '경상남도 통영시 남망공원길 29',
    mapQuery: '남망산조각공원'
  }
];

const GYEONGJU_MAP_SPOTS: MapSpot[] = [
  {
    slug: 'daereungwon',
    title: 'Daereungwon Ancient Tombs',
    subtitle: 'Green Hills of the Silla Kings',
    x: 0,
    y: 0,
    driveTime: '20 mins from Gyeongju Station',
    description: 'A peaceful park housing 23 grass-covered royal tombs of Silla nobility in the heart of Gyeongju.',
    image: '/images/destinations/gyeongju_daereungwon.png',
    chauffeurTip: 'Located directly across from Hwangridan-gil. Store your luggage for free in our chauffeur vehicle and stroll hands-free through Gyeongju\'s historical core.',
    courses: ['classic', 'scenic'],
    address: '9 Gyerim-ro, Gyeongju-si, Gyeongbuk, South Korea',
    koreanAddress: '경상북도 경주시 계림로 9',
    mapQuery: '경주 대릉원'
  },
  {
    slug: 'hwangridan',
    title: 'Hwangridan-gil Alleys',
    subtitle: 'Trendy Hanok Alleys & Dessert Cafes',
    x: 0,
    y: 0,
    driveTime: '20 mins from Gyeongju Station',
    description: 'A vibrant street filled with beautifully preserved traditional Hanok houses turned into cafes and books shops.',
    image: '/images/destinations/gyeongju_hwangridan_hero.png',
    chauffeurTip: 'Alleys are extremely narrow with zero parking spaces. Your chauffeur handles the drop-off and pickup right at the main crossroads.',
    courses: ['classic', 'cultural'],
    address: '1080 Poseok-ro, Gyeongju-si, Gyeongbuk, South Korea',
    koreanAddress: '경상북도 경주시 포석로 1080',
    mapQuery: '황리단길'
  },
  {
    slug: 'donggung',
    title: 'Donggung Palace & Wolji Pond',
    subtitle: 'Golden Reflections of Silla Royalty',
    x: 0,
    y: 0,
    driveTime: '22 mins from Gyeongju Station',
    description: 'A stunning palace pond where traditional wooden structures glow like gold at night, reflecting over lotus ponds.',
    image: '/images/destinations/gyeongju_donggung_hero.png',
    chauffeurTip: 'The ultimate night view spot in Gyeongju! The ticket box is heavily packed after sunset, so let your chauffeur coordinate your tickets beforehand.',
    courses: ['classic', 'night'],
    address: '102 Wonhwa-ro, Gyeongju-si, Gyeongbuk, South Korea',
    koreanAddress: '경상북도 경주시 원화로 102',
    mapQuery: '동궁과 월지'
  },
  {
    slug: 'bulguksa',
    title: 'Bulguksa Temple',
    subtitle: 'UNESCO World Heritage Stone Masterpiece',
    x: 0,
    y: 0,
    driveTime: '30 mins from Gyeongju Station',
    description: 'A breathtaking UNESCO-listed Buddhist temple on Mt. Toham representing the Silla paradise.',
    image: '/images/destinations/gyeongju_bulguksa.png',
    chauffeurTip: 'Perched high on the slopes of Mt. Toham. Public loop buses take over 45 minutes from downtown Gyeongju. Your chauffeur connects Gyeongju Station to Bulguksa in under 20 minutes.',
    courses: ['classic', 'scenic'],
    address: '385 Bulguk-ro, Gyeongju-si, Gyeongbuk, South Korea',
    koreanAddress: '경상북도 경주시 불국로 385',
    mapQuery: '불국사'
  }
];

export function ChauffeurMap() {
  const [activeCity, setActiveCity] = useState<'busan' | 'namhae' | 'geoje' | 'tongyeong' | 'gyeongju'>('busan');
  const [activeSpotSlug, setActiveSpotSlug] = useState<string>('yonggungsa');
  const [activeCourse, setActiveCourse] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'info' | 'location'>('info');

  const spots = 
    activeCity === 'busan' ? BUSAN_MAP_SPOTS : 
    activeCity === 'namhae' ? NAMHAE_MAP_SPOTS : 
    activeCity === 'geoje' ? GEOJE_MAP_SPOTS : 
    activeCity === 'tongyeong' ? TONGYEONG_MAP_SPOTS : 
    GYEONGJU_MAP_SPOTS;
    
  const currentSpot = spots.find(s => s.slug === activeSpotSlug) || spots[0];

  const handleCityChange = (city: 'busan' | 'namhae' | 'geoje' | 'tongyeong' | 'gyeongju') => {
    setActiveCity(city);
    let defaultSlug = 'gamcheon';
    if (city === 'namhae') defaultSlug = 'boriam';
    else if (city === 'geoje') defaultSlug = 'windyhill';
    else if (city === 'tongyeong') defaultSlug = 'dongpirang';
    else if (city === 'gyeongju') defaultSlug = 'daereungwon';
    setActiveSpotSlug(defaultSlug);
    setActiveCourse('all');
  };

  const courses = [
    { id: 'all', label: 'All Locations' }
  ];

  // Get active spots for the solid routing line
  const activeSpots = spots.filter(spot => activeCourse === 'all' || spot.courses.includes(activeCourse));
  // Sort them in sequential numerical order (1 -> 2 -> 3 -> 4...)
  const sortedActiveSpots = [...activeSpots].sort((a, b) => spots.indexOf(a) - spots.indexOf(b));

  // Generate dynamically styled Google Maps Embed Route URL
  const getGoogleRouteUrls = () => {
    if (sortedActiveSpots.length === 0) {
      return { embed: '', external: '' };
    }
    
    if (sortedActiveSpots.length === 1) {
      const q = encodeURIComponent(sortedActiveSpots[0].mapQuery || sortedActiveSpots[0].koreanAddress || sortedActiveSpots[0].title);
      return {
        embed: `https://maps.google.com/maps?q=${q}&t=&z=14&ie=UTF8&iwloc=&output=embed`,
        external: `https://www.google.com/maps/search/?api=1&query=${q}`
      };
    }
    
    // First spot as starting point
    const saddr = sortedActiveSpots[0].mapQuery || sortedActiveSpots[0].koreanAddress || sortedActiveSpots[0].title;
    
    // Destinations chained in daddr
    const daddr = sortedActiveSpots.slice(1).map(s => s.mapQuery || s.koreanAddress || s.title).join(' to: ');
    
    // City center coordinates and zoom levels for robust embedding (prevents zooming out on directions calculations in Korea)
    const cityCenters: Record<typeof activeCity, { lat: number; lng: number; zoom: number }> = {
      busan: { lat: 35.150, lng: 129.090, zoom: 11 },
      namhae: { lat: 34.810, lng: 127.930, zoom: 11 },
      geoje: { lat: 34.840, lng: 128.650, zoom: 11 },
      tongyeong: { lat: 34.830, lng: 128.425, zoom: 13 },
      gyeongju: { lat: 35.820, lng: 129.220, zoom: 12 }
    };
    
    const center = cityCenters[activeCity];
    const embedUrl = `https://maps.google.com/maps?saddr=${encodeURIComponent(saddr)}&daddr=${encodeURIComponent(daddr)}&t=&ll=${center.lat},${center.lng}&z=${center.zoom}&ie=UTF8&iwloc=&output=embed`;
    
    // External link for full view in Google Maps app
    const lastSpot = sortedActiveSpots[sortedActiveSpots.length - 1];
    const waypoints = sortedActiveSpots.slice(1, -1).map(s => s.mapQuery || s.koreanAddress || s.title).join('|');
    const externalUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(saddr)}&destination=${encodeURIComponent(lastSpot.mapQuery || lastSpot.koreanAddress || lastSpot.title)}&waypoints=${encodeURIComponent(waypoints)}&travelmode=driving`;
    
    return { embed: embedUrl, external: externalUrl };
  };

  const { embed: mapUrl, external: externalMapUrl } = getGoogleRouteUrls();

  const itineraryKey = `${activeCity}-${activeCourse}`;
  const itinerary = COURSE_ITINERARIES[itineraryKey];

  return (
    <section className="bg-cream-50 py-20 border-t border-cream-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center max-w-3xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-700">Interactive Map Guide</span>
          <h2 className="mt-4 font-serif text-3xl font-light text-ink-900 md:text-5xl">Chauffeur Route Map</h2>
          <p className="mt-4 text-ink-600">
            Unlike packed subway cars and complex public buses, our private chauffeur services get you directly to every local hotspot in absolute premium comfort. Click the spots to plan your ideal route!
          </p>

          {/* City Toggle */}
          <div className="mt-8 flex justify-center">
            <div className="flex flex-wrap justify-center gap-1.5 rounded-full bg-cream-200/60 p-1 border border-cream-200">
              <button
                onClick={() => handleCityChange('busan')}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                  activeCity === 'busan'
                    ? 'bg-ink-900 text-cream-50 shadow-sm'
                    : 'text-ink-700 hover:text-ink-950'
                }`}
              >
                Busan Route
              </button>
              <button
                onClick={() => handleCityChange('namhae')}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                  activeCity === 'namhae'
                    ? 'bg-ink-900 text-cream-50 shadow-sm'
                    : 'text-ink-700 hover:text-ink-950'
                }`}
              >
                Namhae Route
              </button>
              <button
                onClick={() => handleCityChange('geoje')}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                  activeCity === 'geoje'
                    ? 'bg-ink-900 text-cream-50 shadow-sm'
                    : 'text-ink-700 hover:text-ink-950'
                }`}
              >
                Geoje Route
              </button>
              <button
                onClick={() => handleCityChange('tongyeong')}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                  activeCity === 'tongyeong'
                    ? 'bg-ink-900 text-cream-50 shadow-sm'
                    : 'text-ink-700 hover:text-ink-950'
                }`}
              >
                Tongyeong Route
              </button>
              <button
                onClick={() => handleCityChange('gyeongju')}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                  activeCity === 'gyeongju'
                    ? 'bg-ink-900 text-cream-50 shadow-sm'
                    : 'text-ink-700 hover:text-ink-950'
                }`}
              >
                Gyeongju Route
              </button>
            </div>
          </div>
        </header>

        {/* Course Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {courses.map(course => (
            <button
              key={course.id}
              onClick={() => {
                setActiveCourse(course.id);
                // Auto-select first spot in that course
                const matchingSpot = spots.find(s => course.id === 'all' || s.courses.includes(course.id));
                if (matchingSpot) setActiveSpotSlug(matchingSpot.slug);
              }}
              className={`rounded-sm border px-4 py-1.5 text-xs font-medium transition-all ${
                activeCourse === course.id
                  ? 'border-gold-600 bg-gold-50 text-gold-900'
                  : 'border-cream-300 bg-white text-ink-600 hover:border-ink-400'
              }`}
            >
              {course.label}
            </button>
          ))}
        </div>

        {/* Grid Map + Card Container */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 bg-white p-6 md:p-8 rounded-sm border border-cream-200 shadow-sm">
          
          {/* Left/Middle: Google Maps Interactive Route Iframe */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-cream-200 bg-cream-100 shadow-inner group/route-map">
              {mapUrl ? (
                <iframe
                  title={`${activeCity.charAt(0).toUpperCase() + activeCity.slice(1)} Route Map`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={mapUrl}
                ></iframe>
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-cream-100 text-ink-500 text-xs">
                  경로를 로딩할 수 없습니다.
                </div>
              )}
              
              {/* External Link Overlay */}
              {externalMapUrl && (
                <a
                  href={externalMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 left-4 bg-white/95 px-4 py-2 text-xs font-semibold text-ink-900 rounded-sm border border-cream-200 shadow-md flex items-center gap-1.5 transition-all hover:bg-gold-50 hover:border-gold-300 z-10"
                >
                  <span>구글 맵에서 전체 경로 보기</span>
                  <svg className="h-4 w-4 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
            
            {/* Clickable Course Spots Timeline/Pills */}
            <div className="bg-cream-50 p-4 border border-cream-200 rounded-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gold-700 mb-3">
                Course Timeline & Waypoints (Click to view details)
              </p>
              <div className="flex flex-wrap items-center gap-y-3 gap-x-2">
                {sortedActiveSpots.map((spot, idx) => {
                  const isActive = activeSpotSlug === spot.slug;
                  return (
                    <div key={spot.slug} className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveSpotSlug(spot.slug)}
                        className={`px-3 py-1.5 text-xs rounded-sm border flex items-center gap-2 transition-all ${
                          isActive
                            ? 'bg-gold-600 border-gold-600 text-white shadow-sm font-semibold'
                            : 'bg-white border-cream-300 text-ink-700 hover:border-ink-900'
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] ${isActive ? 'bg-white text-gold-600' : 'bg-ink-900 text-cream-50'}`}>
                          {idx + 1}
                        </span>
                        <span>{spot.title}</span>
                      </button>
                      {idx < sortedActiveSpots.length - 1 && (
                        <svg className="h-3 w-3 text-cream-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Premium Detail Card Panel */}
          <div className="flex flex-col h-full justify-between border border-cream-200 bg-cream-50 p-6 rounded-sm min-h-[580px]">
            <div className="space-y-6">
              {/* Card Title & Subtitle */}
              <div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gold-700">Selected Route Spot</span>
                <h3 className="mt-2 font-serif text-2xl font-light text-ink-900">{currentSpot.title}</h3>
                <p className="text-xs font-semibold text-gold-600 uppercase tracking-wide mt-1">{currentSpot.subtitle}</p>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-cream-200">
                <button
                  onClick={() => setActiveTab('info')}
                  className={`flex-1 pb-2 text-[11px] font-bold uppercase tracking-wider border-b-2 text-center transition-all ${
                    activeTab === 'info'
                      ? 'border-gold-600 text-gold-900'
                      : 'border-transparent text-ink-400 hover:text-ink-600'
                  }`}
                >
                  Spot Info
                </button>
                <button
                  onClick={() => setActiveTab('location')}
                  className={`flex-1 pb-2 text-[11px] font-bold uppercase tracking-wider border-b-2 text-center transition-all ${
                    activeTab === 'location'
                      ? 'border-gold-600 text-gold-900'
                      : 'border-transparent text-ink-400 hover:text-ink-600'
                  }`}
                >
                  📍 Location Map
                </button>
              </div>

              {activeTab === 'info' ? (
                <div className="space-y-6 animate-fade-in">
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-100 rounded-sm shadow-inner">
                    <Image
                      src={currentSpot.image}
                      alt={currentSpot.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 30vw, 100vw"
                    />
                  </div>

                  {/* Description & Drive Time */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-ink-900 bg-white p-2 border border-cream-200 rounded-sm">
                      <svg className="h-4 w-4 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Chauffeur Drive: {currentSpot.driveTime}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-ink-700">{currentSpot.description}</p>
                  </div>

                  {/* Chauffeur Secret */}
                  <div className="bg-white p-4 border-l-4 border-gold-600 rounded-r-sm">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-ink-900 flex items-center gap-1.5">
                      <svg className="h-3.5 w-3.5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Why Private Chauffeur?</span>
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-ink-600 italic">
                      "{currentSpot.chauffeurTip}"
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-5 animate-fade-in">
                  {/* Map Iframe Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-cream-300 bg-cream-100 shadow-inner group/map">
                    <iframe
                      title={`${currentSpot.title} Google Map`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(currentSpot.mapQuery || currentSpot.koreanAddress || currentSpot.title)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    ></iframe>

                    {/* "지도에서 열기 ↗" Button Overlay */}
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentSpot.mapQuery || currentSpot.koreanAddress || currentSpot.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 left-3 bg-white/95 px-3 py-1.5 text-[10px] font-semibold text-ink-900 rounded-sm border border-cream-200 shadow-sm flex items-center gap-1.5 transition-all hover:bg-gold-50 hover:border-gold-300 z-10"
                    >
                      <span>지도에서 열기</span>
                      <svg className="h-3 w-3 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>

                  {/* Address card below map */}
                  <div className="space-y-1.5 p-3.5 bg-white border border-cream-200 rounded-sm shadow-sm">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-ink-900">
                      <span className="text-gold-600">📍</span>
                      <span>{currentSpot.koreanAddress}</span>
                    </div>
                    <p className="text-[11px] text-ink-500 font-medium leading-relaxed pl-4">{currentSpot.address}</p>
                  </div>

                  {/* View on Google Maps Button */}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentSpot.mapQuery || currentSpot.koreanAddress || currentSpot.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center bg-gold-600 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-gold-700 rounded-sm shadow-sm gap-2"
                  >
                    <span>View on Google Maps</span>
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              )}
            </div>

            {/* Quick Action Button */}
            <div className="mt-8 pt-4 border-t border-cream-200">
              <a
                href="/booking"
                className="flex w-full items-center justify-center bg-ink-900 py-3 text-xs font-semibold uppercase tracking-widest text-cream-50 transition-all hover:bg-gold-700 rounded-sm"
              >
                <span>Book This Route Option</span>
              </a>
            </div>
          </div>

        </div>

        {/* Dynamic Detailed Course Itinerary Roadmap Panel */}
        {itinerary && (
          <div className="mt-12 bg-white border border-cream-200 rounded-sm shadow-sm p-6 md:p-8 animate-fade-in">
            <div className="border-b border-cream-200 pb-6 mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-700">Detailed Itinerary</span>
              <h3 className="mt-2 font-serif text-2xl md:text-3xl font-light text-ink-900">
                {itinerary.title}
              </h3>
            </div>
            
            <div className="space-y-12">
              {itinerary.days.map((dayData, dayIdx) => (
                <div key={dayIdx} className="space-y-6">
                  {/* Day Header */}
                  <div className="flex items-center gap-3 bg-cream-50 p-3 rounded-sm border-l-4 border-gold-600">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold-800 bg-gold-50 border border-gold-200 px-2 py-0.5 rounded-sm">
                      {dayData.day}
                    </span>
                    <h4 className="font-serif text-base md:text-lg font-medium text-ink-900">
                      {dayData.theme}
                    </h4>
                  </div>
                  
                  {/* Step Timeline */}
                  <div className="relative pl-6 md:pl-8 border-l border-cream-200 ml-4 space-y-8 py-2">
                    {dayData.steps.map((step, stepIdx) => (
                      <div key={stepIdx} className="relative group/step">
                        {/* Timeline Node Icon */}
                        <div className="absolute -left-[31px] md:-left-[39px] top-1.5 h-3 w-3 rounded-full bg-white border-2 border-gold-600 flex items-center justify-center transition-all group-hover/step:bg-gold-600">
                          <div className="h-1 w-1 rounded-full bg-gold-600 group-hover/step:bg-white" />
                        </div>
                        
                        {/* Step Content */}
                        <div className="space-y-3">
                          {/* Time & Title Row */}
                          <div className="flex flex-wrap items-center gap-2 md:gap-3">
                            <span className="bg-ink-900 text-cream-50 text-[10px] font-semibold px-2 py-0.5 rounded-sm whitespace-nowrap">
                              {step.time}
                            </span>
                            <h5 className="font-serif text-sm md:text-base font-light text-ink-900">
                              {step.title}
                            </h5>
                          </div>
                          
                          {/* Activity Description */}
                          <p className="text-xs md:text-sm leading-relaxed text-ink-700 max-w-4xl">
                            {step.activity}
                          </p>
                          
                          {/* Conditional Details (Hidden Spot, Highlight, Dining, Tip) */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl pt-1">
                            {step.hiddenSpot && (
                              <div className="bg-stone-50 border-l-2 border-gold-600 p-3 rounded-r-sm text-[11px] leading-relaxed text-ink-600">
                                <strong className="text-gold-700 block mb-1">🔍 Hidden Spot Added</strong>
                                {step.hiddenSpot}
                              </div>
                            )}
                            
                            {step.dining && (
                              <div className="bg-stone-50 border-l-2 border-ink-900 p-3 rounded-r-sm text-[11px] leading-relaxed text-ink-600">
                                <strong className="text-ink-900 block mb-1">🍱 Dining Concept</strong>
                                {step.dining}
                              </div>
                            )}
                            
                            {step.highlight && (
                              <div className="bg-gold-50/50 border-l-2 border-gold-700 p-3 rounded-r-sm text-[11px] leading-relaxed text-ink-600">
                                <strong className="text-gold-800 block mb-1">🔥 The Highlight</strong>
                                {step.highlight}
                              </div>
                            )}
                            
                            {step.tip && (
                              <div className="bg-stone-50 border-l-2 border-gold-600 p-3 rounded-r-sm text-[11px] leading-relaxed text-ink-600">
                                <strong className="text-gold-700 block mb-1">📍 Route Tip</strong>
                                {step.tip}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
