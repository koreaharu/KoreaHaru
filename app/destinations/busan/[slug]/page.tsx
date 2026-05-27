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
    mapQuery?: string;
    mapZoom?: number;
  }[];
  hours: string;
  tips: string;
  address: string;
  koreanAddress: string;
  googleMapsUrl?: string;
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
  gamcheon: {
    title: 'Gamcheon Culture Village',
    subtitle: 'The "Machu Picchu" of Busan',
    heroImage: '/images/destinations/busan-gamcheon-detail.png',
    intro: 'Gamcheon Culture Village is a vibrant, open-air art village built in a terraced fashion along the mountainside, offering a unique blend of colorful houses and coastal views. Originally a refugee settlement during the Korean War, it was transformed in 2009 by residents and artists into a world-famous cultural hub.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Gamcheon Culture Village / 감천문화마을\n\n• Hours: 24/7 all year round. However, visiting between 09:00 AM and 06:00 PM (until 05:00 PM in winter) is highly recommended to respect local residents.\n\n• Duration: Approx. 1.5 to 2 hours on foot.'
      },
      {
        title: '2. How to Get There',
        content: '• Public Transit: Take Busan Subway Line 1 to Toseong Station (Exit 6). Right in front of the exit, you will find the bus stop. Board one of the local mini-buses: Seogu 2, Seogu 2-2, or Saha 1-1. Ride up the hill and get off at the \'Gamcheon Culture Village\' stop.\n\n• Text for Map Apps (Copy & Paste):\n  - Where to Board (Departure): 토성역6번출구.부산대학교병원 (Toseong Station Exit 6. Pusan National University Hospital)\n  - Where to Get Off (Arrival): 감천문화마을 (Gamcheon Culture Village)\n\n• Warning: The roads leading up to the village are extremely steep. Walking from the subway station is highly discouraged; taking the mini-bus is a must.'
      },
      {
        title: '3. Tickets & Booking',
        content: '• Admission: Free\n\n• Stamp Tour Map: Available at the Information Center for 2,000 KRW. Collecting stamps along the way adds fun, and proceeds support the local community.'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: Limited lockers near the entrance/parking lot. Storing heavy luggage at major subway stations beforehand is advised.\n\n• Restrooms: Public restrooms are scattered around, but using the one near the main entrance before entering the deep alleys is recommended.'
      },
      {
        title: '5. Highlights: The Little Prince & Desert Fox',
        content: '• The Little Prince and the Desert Fox: The most iconic photo spot overlooking the village and the sea (Expect waiting lines on weekends).',
        image: '/images/destinations/gamcheon_prince.png'
      },
      {
        title: '6. Highlights: Haneulmaru Observatory (Sky Ridge)',
        content: '• Haneulmaru (Sky Ridge): The highest observatory offering a 360-degree panoramic view of the entire village and the distant port.',
        image: '/images/destinations/gamcheon_observatory.png'
      },
      {
        title: '7. Cons & Warnings',
        content: '• Cons: This is a real residential area. Loud noises and taking photos of private properties or through windows are strictly prohibited.\n\n• Warnings: Features steep hills, narrow alleys, and many stairs. Wearing comfortable walking shoes or sneakers is absolutely essential.'
      },
      {
        title: '8. Nearby Eats & Cafes 🆕',
        content: '• ☕ Coffee It Jip: 3-min walk from the entrance / A famous cafe featuring a bright pink building and large glass windows that offer a stunning view of the colorful village.\n\n• ☕ Avant Garde Cafe: 5-min walk from the entrance / A spacious cafe with a large outdoor terrace, perfect for enjoying the village view away from the crowds.\n\n• 🍱 Gamcheon Matjib: 2-min walk inside the village / A budget-friendly local restaurant serving simple and clean Korean dishes like Bibimbap, Pajeon (scallion pancake), and noodles.'
      },
      {
        title: '9. Summary & Verdict',
        content: '• Verdict: "A vibrant, open-air art village built in a terraced fashion along the mountainside, offering a unique blend of colorful houses and coastal views."\n\n• Rating: ⭐⭐⭐⭐☆ (4/5)'
      }
    ],
    hours: 'Open 24/7 (Recommended: 09:00 - 18:00)',
    tips: 'Residential area. Please keep noise down and wear comfortable walking shoes!',
    address: '203, Gamnae 2-ro, Saha-gu, Busan',
    koreanAddress: '부산광역시 사하구 감내2로 203 (감천동)',
    mapQuery: '감천문화마을',
    googleMapsUrl: 'https://www.google.com/maps/place/%EA%B0%90%EC%B2%9C%EB%AC%B8%ED%99%94%EB%A7%88%EC%9D%84/data=!4m15!1m8!3m7!1s0x3568e9b7a31c67cd:0x1680d7057e44b2ba!2z67aA7IKw6rSR7Jet7IucIOyCrO2VmOq1rCDqsJDrgrQy66GcIDIwMw!3b1!8m2!3d35.097486!4d129.0105996!16s%2Fg%2F11jz7ntdj5!3m5!1s0x3568e9b7a3113a51:0x977e01d7224cf6a3!8m2!3d35.0973904!4d129.0105924!16s%2Fg%2F11bw5svjmk?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D'
  },
  hwangnyeongsan: {
    title: 'Hwangnyeongsan Peak',
    subtitle: 'The Best Night View in Korea',
    heroImage: '/images/destinations/hwangnyeongsan_night.png',
    intro: 'Imagine standing at the highest point in the city, with a 360-degree panoramic view of Busan’s shimmering lights. From the iconic Gwangan Bridge curving over the ocean to the neon-lit skyscrapers of Seomyeon, everything is at your feet. It’s quiet, the air is crisp, and the sight of the city meeting the sea under the moonlight is a memory you will never forget.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Hwangnyeongsan Observatory / 황령산 전망대\n\n• Hours: Open 24/7 all year round. (The indoor observatory cafe operates from 10:00 AM to 11:00 PM, Closed on Mondays).\n\n• Duration: Approx. 40 minutes to 1 hour to look around the observatory and the beacon fire station (after arriving at the summit parking lot by taxi/car).'
      },
      {
        title: '2. How to Get There',
        content: '• Travel Tip: Since it is located at the top of a mountain, there are no direct buses or subway lines. Hiking up on foot at night is dark and dangerous. Taking a taxi from the nearest subway station is the most accurate and convenient method.\n\n• Text for Map Apps (Copy & Paste):\n  - Nearest Subway Station: 금련산역 (Geumryeonsan Station, Line 2) or 남천역 (Namcheon Station, Line 2)\n  - Taxi Destination: 황령산전망대 (Hwangnyeongsan Observatory)\n\n• Warning: It is extremely difficult to catch an empty taxi back down the mountain late at night or on weekends. You must use a taxi-hailing app like Kakao T to call a ride.'
      },
      {
        title: '3. Tickets & Booking',
        content: '• Admission: Free\n\n• Booking: No reservation required. Open to the public freely.'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Restrooms & Cafe: The "Hwangnyeongsan Forest Cabin Cafe" is located right below the observation deck, providing public restrooms and a warm indoor space.\n\n• Luggage Storage: There are no luggage lockers at the summit. It is highly recommended to leave heavy bags at your accommodation or subway station lockers.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• 360-Degree Panoramic Night View: This is the only spot where you can see the entire cityscape of Busan, including the Gwangan Bridge, Haeundae, Seomyeon, and the Busan Harbor Bridge all at once.\n\n• Bongsudae (Beacon Fire Station): A historical site from the Joseon Dynasty located just above the deck. The traditional stone walls lit up at night make an excellent photo backdrop.\n\n• Illuminated Transmission Towers: The massive broadcasting towers at the top illuminate with vibrant colors at night, creating a unique and futuristic atmosphere.',
        image: '/images/destinations/hwangnyeongsan_night.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: Inaccessible via public transport, meaning solo or budget travelers will have to budget for round-trip taxi fares.\n\n• Warnings: Since it is at the summit, it is significantly windier and colder than the downtown flat areas. Bringing a light jacket is advised even in summer; for spring, autumn, and winter, a heavy coat is absolutely essential.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• ☕ Hwangnyeongsan Forest Cabin Cafe: Located right under the deck / The only cafe at the summit where you can enjoy hot drinks while staring through large glass windows at the city lights.\n\n• Tip: There are no restaurants at the mountain top. It is highly recommended to plan your dinner before or after the visit by heading down to nearby popular food districts like Seomyeon (Downtown) or Gwangalli (Beach).'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "The ultimate night view spot in Busan, offering a breathtaking 360-degree panoramic view of the glittering city and the iconic Gwangan Bridge."\n\n• Rating: ⭐⭐⭐⭐⭐ (5/5, Best visited on a clear night!)'
      }
    ],
    hours: 'Open 24 hours (Cafe: 10:00 - 23:00)',
    tips: 'Show the Hangeul address to your taxi driver: 부산 수영구 황령산로 391-1',
    address: '391-1, Hwangnyeongsan-ro, Suyeong-gu, Busan',
    koreanAddress: '부산광역시 남구 황령산로 391-39',
    mapQuery: '황령산 봉수대',
    googleMapsUrl: 'https://www.google.com/maps/place/%ED%99%A9%EB%A0%B9%EC%82%B0+%EB%B4%89%EC%88%98%EB%8C%80/data=!4m10!1m2!2m1!1z7Zmp66C57IKwIOyghOunneuMgA!3m6!1s0x3568ecbd344ba8d7:0x8951260ce95a4109!8m2!3d35.1571056!4d129.0820778!15sChPtmanroLnsgrAg7KCE66ed64yAWhUiE-2ZqeugueyCsCDsoITrp53rjICSARNoaXN0b3JpY2FsX2xhbmRtYXJrmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJvTjFwTGFIcEJSUkFC4AEA-gEFCKsCECk!16s%2Fg%2F1vcl1n99?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D'
  },
  blueline: {
    title: 'Haeundae Blueline Park',
    subtitle: 'The Scenic Retro Beach Railway',
    heroImage: '/images/destinations/busan_blueline.png',
    intro: 'Step onto a whimsical journey along Busan’s gorgeous eastern coastline. Haeundae Blueline Park is a modern eco-friendly redevelopment of an old abandoned railway line, now running colorful retro Beach Trains and charming, elevated Sky Capsules. Clinging to the sheer cliffs high above the crashing waves of the East Sea, it is a highly viral, picture-perfect coastal ride.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Haeundae Blueline Park / 해운대 블루라인파크\n\n• Hours: 09:30 AM ~ 06:30 PM daily (Operating hours may be extended slightly depending on the season. Open all year round).\n\n• Duration: The Beach Train takes about 30 minutes one-way from Mipo to Songjeong. Including stopovers and sightseeing around the stations, expect a total of 2 to 3 hours for a round trip.'
      },
      {
        title: '2. How to Get There',
        content: '• Travel Tip: There are two main boarding stations: \'Mipo Station\' and \'Songjeong Station\'. Most travelers prefer starting from Mipo Station as it is highly accessible from Haeundae Beach.\n\n• Text for Map Apps (Copy & Paste):\n  - Mipo Station (Haeundae side): 해운대블루라인파크 미포정거장\n  - Songjeong Station (Songjeong side): 해운대블루라인파크 송정정거장\n\n• Public Transit: To reach Mipo Station, take Subway Line 2 to Jungdong Station (Exit 7) or Haeundae Station (Exit 1) and walk for about 15–20 minutes toward the Mipo intersection (Mipo O-geori).'
      },
      {
        title: '3. Tickets & Booking',
        content: '• Fares:\n  - Beach Train: Single-use ticket 7,000 KRW / All-station pass 16,000 KRW\n  - Sky Capsule: 2-seater (one-way) 35,000 KRW / 3-seater (one-way) 45,000 KRW\n\n• Booking: Online advance booking is strongly recommended. The cute, private \'Sky Capsule\' on the elevated rail is extremely popular; tickets for weekends and sunset times usually sell out online weeks in advance. It is best to book through their official website 1–2 weeks before your visit.'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: Coin lockers are available inside the major stations (Mipo, Cheongsapo, Songjeong) to safely store heavy bags or suitcases.\n\n• Restrooms: Clean and modern public restrooms are available inside each station building.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• Ocean View from Sky Capsule: The private capsule moving from Mipo to Cheongsapo offers a stunning, unobstructed view of the sea, making it the most viral Instagram spot in Busan.\n\n• Cheongsapo "Slam Dunk" Crosswalk: Right outside Cheongsapo Station, there is a railroad crossing where the train passes by with the blue ocean in the background. It mimics a famous scene from the anime \'Slam Dunk\' and is a wildly popular photo zone for international tourists.',
        image: '/images/destinations/blueline_skycapsule.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: Even if you book a specific time slot in advance, you may still have to wait in line for 20 to 30 minutes to board during weekends or peak holidays.\n\n• Warnings: The Beach Train operates on a first-come, first-served seating system (including standing room). If you board late, you might have to stand for the duration of the ride. Timing your line-up is key to securing a seat facing the ocean.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• ☕ Mipo Sseawea: 5-min walk from Mipo Station / A trendy rooftop terrace cafe where you can view Haeundae Beach and watch the colorful Sky Capsules pass by while enjoying drinks or brunch.\n\n• ☕ Deart Coffee: 3-min walk from Cheongsapo Station / Famous for its rich hand-drip coffee and homemade Kaymak dessert. Perfect for a cozy break after getting off the train at Cheongsapo.\n\n• 🍱 Suminine: 4-min walk from Cheongsapo Station / A legendary local restaurant famous for Korean-style charcoal-grilled clams (Jogae-gui) and grilled eel, offering a true seaside dining vibe.'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "A scenic coastal ride operating along a converted historical railway, offering travelers the most relaxing and photogenic views of Busan\'s eastern coastline."\n\n• Rating: ⭐⭐⭐⭐⭐ (5/5)'
      }
    ],
    hours: 'Open daily 09:30 - 18:30',
    tips: 'Show the Hangeul address to your taxi driver: 부산 해운대구 달맞이길62번길 13',
    address: '13, Dalmaji-gil 62beon-gil, Haeundae-gu, Busan',
    koreanAddress: '부산광역시 해운대구 달맞이길62번길 13',
    mapQuery: '해운대블루라인파크 미포정거장',
    googleMapsUrl: 'https://www.google.com/maps/place/%ED%95%B4%EC%9A%B4%EB%8C%80%EB%B8%94%EB%A3%A8%EB%9D%BC%EC%9D%B8%ED%8C%8C%ED%81%AC+%EB%8B%AC%EB%A7%9E%EC%9D%B4%ED%84%B0%EB%84%90%EC%A0%95%EA%B1%B0%EC%9E%A5/@35.1576719,129.1720302,16.75z/data=!4m15!1m8!3m7!1s0x35688d6a16580a77:0x6b51ac23eef4699b!2z64yA7ZWc66-86rWtIOu2gOyCsOq0keyXreyLnCDtlbTsmrTrjIDqtawg64us66ee7J206ri4NjLrsojquLggMTM!3b1!8m2!3d35.1579454!4d129.1731221!16s%2Fg%2F11bz3jckpy!3m5!1s0x35688d8959cb744d:0x7dcb18b3b65dd7db!8m2!3d35.1554699!4d129.1774157!16s%2Fg%2F11jngzcxpx?hl=ko-KR&entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D',
    taxi: {
      destination: '해운대 블루라인파크 미포정거장',
      destinationEn: 'Haeundae Blueline Park Mipo Station',
      message: '기사님, 해운대 블루라인파크 미포정거장으로 가주세요.',
      waitTip: '기사님, 해운대 해수욕장으로 가주세요.',
      waitTipEn: 'Sir, could you please take me to Haeundae Beach?',
    }
  },
  yonggungsa: {
    title: 'Haedong Yonggungsa Temple',
    subtitle: 'The Temple Built on the Rocky Sea Edge',
    heroImage: '/images/destinations/busan_yonggungsa.png',
    intro: 'While the vast majority of Buddhist temples in Korea are built deep within tranquil mountain valleys, Haedong Yonggungsa stands boldly on a rugged cliff face facing the raw fury of the East Sea. Founded in 1376, it is a sacred landmark where you can hear the deep chanting of monks blending with the roaring waves breaking against the rocks directly below.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Haedong Yonggungsa Temple / 해동용궁사\n\n• Hours: 04:30 AM ~ 08:00 PM daily (Open all year round. Closing times may vary slightly depending on the sunset).\n\n• Duration: Approx. 1 hour to 1.5 hours, including the walk from the bus stop/parking lot and exploring the temple grounds.'
      },
      {
        title: '2. How to Get There',
        content: '• Public Transit Tip: Taking the Donghae Line metro is the most accurate way to avoid heavy coastal traffic.\n\n• Text for Map Apps (Copy & Paste):\n  - Nearest Metro Station: 오시리아역 (Osiria Station, Donghae Line)\n  - Bus Route: From Exit 1 of Osiria Station, take Bus No. 139 or 1001, and get off at the 해동용궁사.국립수산과학원 (Haedong Yonggungsa Temple / National Institute of Fisheries Science) stop. Walk about 10–15 minutes to the entrance.\n\n• By Taxi: Taking a taxi from Osiria Station or Haeundae Station directly to 해동용궁사 takes about 10-15 minutes and is highly convenient.'
      },
      {
        title: '3. Tickets & Booking',
        content: '• Admission: Free\n\n• Booking: No reservation required. Open to the public freely. (Note: Separate parking fees apply if you visit by car or taxi).'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: There are no luggage lockers or storage spaces inside the temple premises. Since the path involves many stairs and steep slopes, it is highly recommended to leave heavy bags at Osiria Station or your hotel.\n\n• Restrooms: Public restrooms are available near the entrance path and inside the temple grounds near the Bulimun Gate.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• 108 Stairs and Yongmunkyo Bridge: After walking down the 108 stone steps representing earthly desires, you will reach a stone bridge. Standing on this bridge offers the most famous postcard-perfect view of the entire temple hugging the rocky coast.\n\n• Jijang Bosal & Haesu Gwaneum Daebul: The statue of Jijang Bosal sitting right on the seaside rocks and the massive stone Goddess of Mercy (Haesu Gwaneum Daebul) standing at the highest point showcase majestic Buddhist art.\n\n• Zodiac Statues: A row of life-sized stone statues representing the 12 Eastern zodiac animals stands near the entrance. International tourists love finding their own zodiac animal and taking pictures.',
        image: '/images/destinations/yonggungsa_bridge.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: It can become extremely crowded on weekends, public holidays, and during Buddha\'s Birthday celebrations, making the narrow stone steps difficult to navigate comfortably.\n\n• Warnings: Built directly onto rough coastal cliffs, the temple terrain includes steep steps and uneven paths. It may not be stroller or wheelchair-friendly. Wearing comfortable walking shoes or sneakers is absolutely essential for your safety.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• ☕ Deokmi (Osiria Branch): 15-min walk from the temple / A stylish, modern seaside cafe famous for its delicious homemade cakes and premium Einspänner coffee. Ideal for a relaxing break after your tour.\n\n• 🍱 Yonggung Hae-mul Jajang: 5-min walk from the temple entrance / A legendary local Chinese-Korean restaurant highly accessible from the entrance path. It is famous for its spicy seafood black bean noodles (Jajangmyeon) and sweet and sour pork (Tangsuyuk).'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "One of the few oceanside temples in Korea, beautifully perched on coastal rocks to offer a rare and spectacular harmony of spiritual heritage and deep blue sea."\n\n• Rating: ⭐⭐⭐⭐⭐ (5/5)'
      }
    ],
    hours: 'Open daily 04:30 - 20:00',
    tips: 'Show the Hangeul address to your taxi driver: 부산 기장군 기장읍 용궁사길 86',
    address: '86, Yonggungsa-gil, Gijang-eup, Gijang-gun, Busan',
    koreanAddress: '부산광역시 기장군 기장읍 용궁길 86',
    mapQuery: '해동용궁사',
    taxi: {
      destination: '해동용궁사 주차장',
      destinationEn: 'Haedong Yonggungsa Temple Parking',
      message: '기사님, 기장 해동용궁사로 가주세요.',
      waitTip: '기사님, 오시리아 롯데아울렛으로 가주세요.',
      waitTipEn: 'Sir, could you please take me to the Osiria Lotte Outlet.',
    }
  },
  gwangalli: {
    title: 'Gwangalli Beach',
    subtitle: 'The Radiant Heart of Busan’s Nightlife',
    heroImage: '/images/destinations/busan_gwangalli.png',
    intro: 'Gwangalli Beach is where the youth and energy of Busan come alive. Spanning a crescent of fine sand, it offers the absolute best view of the Gwangan Bridge (Gwangandaegyo)—a massive two-tiered suspension bridge that curves over the dark ocean. Lined with trendy cafes, craft breweries, and seafood restaurants, it is a dynamic nightlife hub that glows with a million lights.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Gwangalli Beach / 광안리 해수욕장\n\n• Hours: Open 24/7 all year round. (During the official summer opening season, swimming is permitted from 09:00 AM to 06:00 PM).\n\n• Duration: Approx. 1 to 2 hours for a light stroll and enjoying the night view. It can easily become a half-day course if you visit the surrounding cafes and restaurants.'
      },
      {
        title: '2. How to Get There',
        content: '• Public Transit: Highly accessible by subway, making it very easy for travelers to visit on foot from the station.\n\n• Text for Map Apps (Copy & Paste):\n  - Nearest Subway Station: 광안역 (Gwangan Station, Line 2) or 금련산역 (Geumryeonsan Station, Line 2)\n  - Directions: Go out through Exit 3 or 5 of Gwangan Station or Exit 1 or 3 of Geumryeonsan Station. Walk straight toward the ocean direction (indicated by street signs) for about 10–15 minutes, and the sandy beach will appear.'
      },
      {
        title: '3. Tickets & Booking',
        content: '• Admission: Free\n\n• Booking: No reservation required. Open to the public freely. (During summer, nominal fees apply for renting parasols, sunbeds, or inner tubes on-site).'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: Coin lockers are widely available inside both 광안역 (Gwangan Station) and 금련산역 (Geumryeonsan Station). It is highly recommended to leave heavy suitcases at the station, as rolling them on the sand is difficult.\n\n• Restrooms & Showers: Public restrooms are scattered along the beachfront. During the summer opening season, public shower booths and foot-washing stations operate near the Meeting Square (Mannam-ui Gwangjang).'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• Gwangan Bridge (Gwangandaegyo) Night View: The iconic double-deck ocean bridge directly facing the beach features spectacular, changing LED light displays at night. It serves as the ultimate photogenic backdrop from anywhere on the beach.\n\n• Gwangalli M Drone Light Show: Every Saturday night (Winter: 07:00 PM & 09:00 PM / Summer: 08:00 PM & 10:00 PM), a magnificent light show featuring hundreds to thousands of drones takes place over the sea. It is a must-see spectacular that international tourists love.\n\n• Photo Zones: Various trendy art installations, including the large "GWANGALLI" English letter sculpture, are placed across the beach for perfect souvenir photos.',
        image: '/images/destinations/gwangalli_drones.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: The beach gets extremely crowded on weekend evenings—especially on Saturdays during the drone show. Finding a window seat at popular beachside cafes or restaurants can be very challenging.\n\n• Warnings: The beachfront is highly energetic, vibrant, and sometimes noisy until late at night with street performances (busking) and crowds. If you prefer a peaceful, quiet beach experience, visiting in the early morning is recommended.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• ☕ Chasunbaek (Gwangalli Branch): 1-min walk from the beach / An oceanfront dessert cafe located in a beachside building. It is famous for its delicious, high-quality gluten-free cakes and an unobstructed view of the Gwangan Bridge.\n\n• 🍱 Kkuteajib (Gwangalli Branch): 2-min walk from the beach / Tucked away in an alley near the beach, this cozy spot offers a retro Korean pub (Pocha) atmosphere. It is a great place to try clean, popular Korean dishes like rolled beef wraps or Mille-feuille nabe.'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "Busan\'s trendiest beach offering relaxing ocean strolls and water sports by day, and transforming into a vibrant nightlife hub featuring a spectacular weekly drone show and glittering bridge lights by night."\n\n• Rating: ⭐⭐⭐⭐⭐ (5/5, Highly recommended to align your visit with the Saturday Drone Show!)'
      }
    ],
    hours: 'Open daily 24 hours (Drone Show: Every Saturday evening)',
    tips: 'Show the Hangeul address to your taxi driver: 부산 수영구 광안해변로 219',
    address: '219, Gwanganhaebyeon-ro, Suyeong-gu, Busan',
    koreanAddress: '부산광역시 수영구 광안해변로 219',
    mapQuery: '광안리해수욕장',
    taxi: {
      destination: '광안리 해수욕장 (호메르스호텔 앞)',
      destinationEn: 'Gwangalli Beach (In front of Homers Hotel)',
      message: '기사님, 광안리 해수욕장 호메르스호텔 앞으로 가주세요.',
      waitTip: '기사님, 수영구 광안리로 가주세요.',
      waitTipEn: 'Sir, please take me to Gwangalli.',
    }
  },
  huinnyeoul: {
    title: 'Huinnyeoul Culture Village',
    subtitle: 'The Cliffside Santorini of Busan',
    heroImage: '/images/destinations/busan_huinnyeoul.png',
    intro: 'Clinging tightly to the steep mountainside of Yeongdo Island is Huinnyeoul Culture Village. Originally established by refugees during the Korean War, this historic neighborhood has been beautifully reborn as an artistic sanctuary. Painted in crisp white and shades of coastal blue, its narrow alleys snake along the high cliffs, offering stunning, uninterrupted views of the shipping channels and deep blue sea below.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Huinnyeoul Culture Village / 흰여울문화마을\n\n• Hours: Open 24/7 all year round. However, as it is a residential neighborhood, visiting between 09:00 AM and 06:00 PM (when most cafes and shops are open) is highly recommended to respect the locals.\n\n• Duration: Approx. 1.5 to 2 hours to walk through the cliffside alleys and reach the coastal tunnel down below.'
      },
      {
        title: '2. How to Get There',
        content: '• Public Transit: Since the village is located on Yeongdo Island, subways do not directly reach it. The most accurate and popular method is taking a bus from Nampo Subway Station.\n\n• Text for Map Apps (Copy & Paste):\n  - Where to Board (Departure): 남포역6번출구 (Nampo Station Exit 6)\n  - Where to Get Off (Arrival): 흰여울문화마을 (Huinnyeoul Culture Village)\n  - Directions: Go out through Exit 6 of Nampo Station (Line 1) and locate the bus stop right outside. Board bus No. 6, 9, 82, 85, or 508. After crossing the Yeongdo Bridge (approx. 10–15 minutes), get off at the \'Huinnyeoul Culture Village\' bus stop.'
      },
      {
        title: '3. Tickets & Booking',
        content: '• Admission: Free\n\n• Booking: No reservation required. Open to the public freely.'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: There are no luggage storage spaces or lockers inside the village. Because the paths are narrow and feature steep stairs, dragging a suitcase is impossible. Please store heavy bags in the coin lockers at Nampo Subway Station before heading to the village.\n\n• Restrooms: Public restrooms are available around the middle section of the village and near the information center.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• Huinnyeoul Coastal Tunnel: Located at the end of the lower seaside walking path. Taking a silhouette photo from inside the dark tunnel looking out toward the blue ocean is the most viral and popular Instagram spot here.\n\n• Isongdo Observatory & Alley View: The view of the deep blue sea framed by narrow, white-walled alleys is exceptionally beautiful. You can also spot numerous large cargo ships anchored out in the open sea, creating a unique maritime scenery.',
        image: '/images/destinations/huinnyeoul_tunnel.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: This is a quiet, real residential neighborhood where locals live. Visitors must keep their voices down and refrain from looking into or photographing the insides of residents\' homes.\n\n• Warnings: Built directly on a coastal cliff, the village features very steep and numerous stone steps (such as the Piano Stairs) connecting the upper alleys to the lower coastal path. It is not recommended for those with knee issues, and wearing comfortable sneakers is absolutely essential.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• ☕ Singiyeoul: Located inside the village / A trendy rooftop cafe offering an unobstructed, endless view of the Yeongdo sea. Its sleek, modern interior provides excellent photo backdrops.\n\n• 🍱 Huinnyeoul Jeombbang: Located inside the village / A tiny, retro-style local snack shop where you can eat classic Korean instant noodles (Ramyeon) and toast on small outdoor tables directly overlooking the ocean. (Expect lines during peak hours).'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "Often called the Santorini of Busan, this picturesque village offers a charming stroll along coastal cliffs filled with white-washed alleys, cozy cafes, and panoramic ocean vistas."\n\n• Rating: ⭐⭐⭐⭐⭐ (5/5, Highly recommended to align your visit with the Saturday Drone Show!)'
      }
    ],
    hours: 'Open daily 24 hours (Best visited 09:00 - 18:00)',
    tips: 'Show the Hangeul address to your taxi driver: 부산 영도구 절영로 262',
    address: '262, Jeoryeong-ro, Yeongdo-gu, Busan',
    koreanAddress: '부산광역시 영도구 영선동4가 1043',
    mapQuery: '흰여울문화마을',
    taxi: {
      destination: '영도 흰여울문화마을 안내센터',
      destinationEn: 'Yeongdo Huinnyeoul Culture Village Center',
      message: '기사님, 영도 흰여울문화마을 안내센터로 가주세요.',
      waitTip: '기사님, 영도 태종대로 가주세요.',
      waitTipEn: 'Sir, could you please take me to Yeongdo Taejongdae?',
    }
  },
  songdo: {
    title: 'Songdo Marine Cable Car',
    subtitle: 'Gliding Across the Open Sea',
    heroImage: '/images/destinations/busan_songdo.png',
    intro: 'Prepare for a thrilling flight high above the ocean waves. The Songdo Marine Cable Car (Busan Air Cruise) glides 86 meters above the open sea, connecting Songdo Beach to the dense forest of Amnam Park. It offers a spectacular, high-angle bird’s eye view of Songdo’s high-rises, the harbor, and the dramatic suspension bridges stretching over the sea.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Songdo Marine Cable Car (Busan Air Cruise) / 송도해상케이블카\n\n• Hours: 09:00 AM ~ 09:00 PM daily (Closing hours may vary slightly between 08:00 PM and 10:00 PM depending on the season. Ticket counter closes 30 minutes before closing).\n\n• Duration: The flight takes about 10 minutes one-way (20 minutes round-trip). However, it takes approx. 1.5 to 2 hours in total if you include exploring the Sky Park station, Amnam Park trails, and the Yonggung Suspension Bridge on the other side.'
      },
      {
        title: '2. How to Get There',
        content: '• Travel Tip: The primary boarding point is \'Songdo Bay Station\' located on the eastern side of Songdo Beach. Taking a short bus ride from Nampodong or Jagalchi Subway Station is the easiest and most accurate route.\n\n• Text for Map Apps (Copy & Paste):\n  - Departure Station: 송도해상케이블카 송도베이스테이션\n  - Where to Board (Departure Bus Stop): 자갈치역2번출구 (Jagalchi Station Exit 2)\n  - Where to Get Off (Arrival Bus Stop): 암남동주민센터 (Amnam-dong Community Service Center)\n  - Directions: Go out through Exit 2 of Jagalchi Station (Line 1). Find the bus stop right outside and board bus No. 6, 26, 30, 71, or 96. After a 10-minute ride, get off at the \'Amnam-dong Community Service Center\' stop and walk about 10 minutes toward the coast.'
      },
      {
        title: '3. Tickets & Fares',
        content: '• Standard Fares (Adult Round-trip):\n  - Air Cruise (Standard Cabin): 19,000 KRW (A regular opaque-floor cabin)\n  - Crystal Cruise (Glass-bottom Cabin): 24,000 KRW (Features a transparent glass floor looking directly down at the ocean)\n\n• Booking Tip: Tickets can be purchased directly at the on-site ticket booths. Lines can be long during weekends or sunset hours. Although the Crystal Cruise is more expensive, it is highly preferred by international tourists for the thrilling experience and stunning downward ocean photos.'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: Coin lockers are available inside the main departure building (Songdo Bay Station), allowing you to safely store heavy suitcases before boarding.\n\n• Strollers & Pets: Strollers are permitted inside the cabins. Pets are allowed to board for free as long as they are kept inside a closed pet carrier/bag during the ride.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• Songdo Yonggung Suspension Bridge: Accessible directly after stepping off at the opposite terminal (Songdo Sky Park). This bridge connects the mainland to a small uninhabited island over the sea, offering dramatic views of crashing waves and ocean cliffs. (※ Separate admission fee of 1,000 KRW applies).\n\n• Sky Harbor Observatory Photo Zones: Located on the 3rd floor of the destination station, this rooftop features charming Little Prince statues and artistic installations, perfect for taking souvenir photos.',
        image: '/images/destinations/songdo_bridge.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: Some may find the ticket price slightly expensive considering the brief 10-minute flight time. To maximize your value, make sure to thoroughly tour the suspension bridge and the park trails on the opposite side.\n\n• Warnings: Operations may cease without prior notice during extreme weather conditions such as strong winds or heavy rain for safety reasons. It is wise to check their official website before visiting on a stormy day.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• ☕ EL16.52: 10-min walk from the destination station / A massive, modern ocean-view cafe. From its rooftop terrace, you can enjoy specialty pastries while watching the cable cars gracefully glide across the ocean.\n\n• 🍱 Amnam Park Grilled Clam Tent Village: Located right next to the Sky Park destination parking lot / A unique coastal alley filled with local tent bars (Pocha). Here, you can enjoy massive platters of fresh charcoal-grilled clams (Jogae-gui) and mixed seafood, offering an authentic, rugged Busan nightlife atmosphere.'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "An exhilarating flight soaring up to 86 meters high over the sea, beautifully paired with a scenic forest walk and a thrilling island suspension bridge at the opposite end."\n\n• Rating: ⭐⭐⭐⭐☆ (4.5/5)'
      }
    ],
    hours: 'Open daily 09:00 - 21:00',
    tips: 'Show the Hangeul address to your taxi driver: 부산 서구 송도해변로 171',
    address: '171, Songdoheabin-ro, Seo-gu, Busan',
    koreanAddress: '부산광역시 서구 송도해변로 171',
    mapQuery: '송도해상케이블카',
    taxi: {
      destination: '송도해상케이블카 하부탑승장',
      destinationEn: 'Songdo Marine Cable Car Lower Station',
      message: '기사님, 송도해상케이블카 하부탑승장으로 가주세요.',
      waitTip: '기사님, 자갈치시장으로 가주세요.',
      waitTipEn: 'Sir, could you please take me to Jagalchi Market?',
    }
  },
  oryukdo: {
    title: 'Oryukdo Skywalk & Cliffs',
    subtitle: 'Walking Above the Border of Two Seas',
    heroImage: '/images/destinations/busan_oryukdo.png',
    intro: 'Stand at the dramatic boundary where the East Sea and the West Sea meet. Oryukdo Skywalk is a U-shaped glass-bottom viewing platform built over a towering 35-meter-high coastal cliff. The platform projects out over the churning ocean, offering a spectacular, high-drama look at the iconic Oryukdo islets—a collection of rocky islands that seem to appear as five or six depending on the tide.',
    sections: [
      {
        title: '1. Visiting Info',
        content: '• Name: Oryukdo Skywalk / 오륙도 스카이워크\n\n• Hours: 09:00 AM ~ 06:00 PM daily (Extended until 07:00 PM during summer from June to September. Open all year round).\n\n• Duration: The walk on the glass bridge takes only 10–15 minutes, but expect to spend approx. 40 minutes to 1 hour including exploring the adjacent Sunrise Park trails and photo spots.'
      },
      {
        title: '2. How to Get There',
        content: '• Public Transit: The most practical and accurate way is to take a direct public bus from the downtown area or Kyungsung University station to the final terminal.\n\n• Text for Map Apps (Copy & Paste):\n  - Nearest Bus Stop (Arrival): 오륙도스카이워크 (Oryukdo Skywalk) or 오륙도오륙도SK뷰후문 (Oryukdo SK View Rear Gate)\n\n• Directions: Go out through Exit 3 or 5 of Kyungsung Univ.·Pukyong National Univ. Station (Line 2). Find the bus stop nearby and board bus No. 24, 27, or 131. Ride for about 20–25 minutes to the final stop (\'Oryukdo Skywalk\'), which drops you right at the park entrance.'
      },
      {
        title: '3. Tickets & Booking',
        content: '• Admission: Free\n\n• Booking: No reservation required. Open to the public freely. However, to protect the glass floor from scratches, you must wear the provided fabric overshoes (foot covers) over your sneakers before stepping onto the bridge.'
      },
      {
        title: '4. Traveler Amenities',
        content: '• Luggage Storage: Coin lockers are available inside the \'Haeparang-gil Tourist Information Center\' located just beneath the skywalk path.\n\n• Restrooms: Clean public restrooms are located inside the tourist information center building and near the parking lot.\n\n• Strollers & Wheelchairs: For safety reasons, strollers, wheelchairs, and trekking poles are strictly prohibited on the glass-floored section of the Skywalk.'
      },
      {
        title: '5. Highlights & Photo Spots',
        content: '• Transparent Glass over 35m Cliff: A U-shaped glass bridge that extends 9 meters over the sea. Suspended 35 meters above a coastal cliff, looking directly down at the crashing waves through the clear floor provides an exhilarating photo opportunity.\n\n• Oryukdo Islets: This is the closest vantage point to view the symbolic rock formations of Busan, known for appearing as either 5 or 6 islands depending on the tide and day.\n\n• Daffodils at Sunrise Park: If visiting in springtime (specifically mid-to-late March), the hills directly behind the skywalk bloom with vibrant yellow daffodils, creating a spectacular contrast against the deep blue sea.',
        image: '/images/destinations/oryukdo_daffodils.png'
      },
      {
        title: '6. Cons & Warnings',
        content: '• Cons: The glass bridge itself is relatively short. Traveling all the way here solely for the bridge might feel brief, so it is highly recommended to pair it with a walk around Oryukdo Sunrise Park or hiking the Igidae Coastal Trail.\n\n• Warnings: Perched at the edge of a coastal cliff, this spot experiences severe sea winds. The skywalk will temporarily close without prior notice during inclement weather (such as gale-force winds, heavy rain, or snow). Checking the weather forecast before heading out is essential.'
      },
      {
        title: '7. Nearby Eats & Cafes',
        content: '• ☕ Gaon Cafe: 1-min walk from the skywalk / Located right on the upper floor of the Haeparang-gil Tourist Information Center. It offers large glass windows, allowing you to enjoy panoramic views of the Oryukdo Islets comfortably from indoors.\n\n• 🍱 Jinju Hwoejib: 10-min drive from the skywalk (Yongho-dong area) / Since restaurant options are scarce around the immediate park, this nearby local gem is a short bus or taxi ride away. It is highly famous for its Busan-style spicy-and-sour cold raw fish soup (Mulhoe), making it an excellent lunch or dinner stop.'
      },
      {
        title: '8. Summary & Verdict',
        content: '• Verdict: "A dramatic cliffside lookout where the East and South seas meet, offering a thrilling walk over transparent panels with an unparalleled front-row view of Busan\'s iconic sister islands."\n\n• Rating: ⭐⭐⭐⭐☆ (4/5, Best experienced on a clear, calm day)'
      }
    ],
    hours: '09:00 AM - 06:00 PM (Summer until 07:00 PM)',
    tips: 'Show the Hangeul address to your taxi driver: 부산 남구 오륙도로 137',
    address: '137, Oryukdo-ro, Nam-gu, Busan',
    koreanAddress: '부산광역시 남구 오륙도로 137',
    mapQuery: '오륙도스카이워크',
    taxi: {
      destination: '오륙도 스카이워크 공영주차장',
      destinationEn: 'Oryukdo Skywalk Public Parking',
      message: '기사님, 오륙도 스카이워크 공영주차장으로 가주세요.',
      waitTip: '기사님, 부산역으로 가주세요.',
      waitTipEn: 'Sir, could you please take me to Busan Station?',
    }
  }
};

export default function BusanSpotDetailPage({ params }: { params: { slug: string } }) {
  const spot = SPOT_DETAILS[params.slug as keyof typeof SPOT_DETAILS];

  if (!spot) {
    notFound();
  }

  const isBusanCoastalSpot = ['oryukdo', 'gwangalli', 'blueline', 'yonggungsa'].includes(params.slug);

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
                    {section.mapQuery ? (
                      <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-cream-200 shadow-sm bg-cream-100">
                        <iframe
                          src={`https://maps.google.com/maps?q=${encodeURIComponent(section.mapQuery)}&t=&z=${section.mapZoom || 16}&ie=UTF8&iwloc=&output=embed`}
                          className="absolute inset-0 h-full w-full border-0"
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                    ) : section.image ? (
                      <div className="relative aspect-video w-full overflow-hidden rounded-sm shadow-sm">
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 66vw, 100vw"
                        />
                      </div>
                    ) : null}
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
            <div className="lg:sticky lg:top-24 h-fit self-start w-full lg:w-[360px] xl:w-[380px] shrink-0">
              <div className="rounded-sm border border-cream-200 bg-white p-6 lg:p-8 shadow-sm">
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
                  hideTitle={true}
                  googleMapsUrl={spot.googleMapsUrl}
                  mapQuery={spot.mapQuery}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 🗺️ Featured Travel Course Section */}
      <CuratedCoursePanel city="busan" slug={params.slug} />

      {/* Back Link */}
      <Section tone="cream" className="border-t border-cream-200">
        <Container className="text-center">
          <Button href="/destinations/busan" variant="secondary">Explore More of Busan</Button>
        </Container>
      </Section>
    </div>
  );
}
