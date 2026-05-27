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
    courses: ['west', 'historic']
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
    courses: ['west', 'scenic']
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
    courses: ['west', 'scenic']
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
    courses: ['east', 'scenic']
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
    courses: ['east', 'night']
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
    courses: ['scenic', 'night']
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
    courses: ['east', 'scenic']
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
    courses: ['east', 'scenic']
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
    courses: ['classic', 'scenic']
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
    courses: ['classic', 'scenic']
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
    courses: ['scenic', 'cultural']
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
    courses: ['classic', 'cultural']
  }
];

export function ChauffeurMap() {
  const [activeCity, setActiveCity] = useState<'busan' | 'namhae'>('busan');
  const [activeSpotSlug, setActiveSpotSlug] = useState<string>('yonggungsa');
  const [activeCourse, setActiveCourse] = useState<string>('all');

  const spots = activeCity === 'busan' ? BUSAN_MAP_SPOTS : NAMHAE_MAP_SPOTS;
  const currentSpot = spots.find(s => s.slug === activeSpotSlug) || spots[0];

  const handleCityChange = (city: 'busan' | 'namhae') => {
    setActiveCity(city);
    setActiveSpotSlug(city === 'busan' ? 'gamcheon' : 'darangee');
    setActiveCourse('all');
  };

  const courses = activeCity === 'busan' 
    ? [
        { id: 'all', label: 'All Locations' },
        { id: 'east', label: 'East Coast Romantic Course' },
        { id: 'west', label: 'West Coast Art Course' },
        { id: 'scenic', label: 'Scenic View Course' },
        { id: 'night', label: 'Dynamic Night Course' }
      ]
    : [
        { id: 'all', label: 'All Locations' },
        { id: 'classic', label: 'Namhae Classic Day Course' },
        { id: 'scenic', label: 'Nature & Healing Course' },
        { id: 'cultural', label: 'German & Coastal Course' }
      ];

  // Get active spots for the solid routing line
  const activeSpots = spots.filter(spot => activeCourse === 'all' || spot.courses.includes(activeCourse));
  // Sort them in sequential numerical order (1 -> 2 -> 3 -> 4...)
  const sortedActiveSpots = [...activeSpots].sort((a, b) => spots.indexOf(a) - spots.indexOf(b));

  // Build solid polyline coordinates (scaling 800x500 relative viewbox)
  const linePoints = sortedActiveSpots.map(spot => `${spot.x * 8},${spot.y * 5}`).join(' ');

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
            <div className="inline-flex rounded-full bg-cream-200/60 p-1 border border-cream-200">
              <button
                onClick={() => handleCityChange('busan')}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  activeCity === 'busan'
                    ? 'bg-ink-900 text-cream-50 shadow-sm'
                    : 'text-ink-700 hover:text-ink-950'
                }`}
              >
                Busan Route
              </button>
              <button
                onClick={() => handleCityChange('namhae')}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  activeCity === 'namhae'
                    ? 'bg-ink-900 text-cream-50 shadow-sm'
                    : 'text-ink-700 hover:text-ink-950'
                }`}
              >
                Namhae Route
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
          
          {/* Left/Middle: Styled Map Area */}
          <div className="lg:col-span-2 relative aspect-[16/10] w-full rounded-sm overflow-hidden bg-[#e0f2fe]/40 border border-cream-100 flex items-center justify-center">
            
            {/* Conditional Geographic Vectors depending on City */}
            <svg 
              className="absolute inset-0 w-full h-full text-stone-300 select-none pointer-events-none" 
              viewBox="0 0 800 500" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {activeCity === 'busan' ? (
                // 🌊 BUSAN HIGH-FIDELITY LOCAL MAP
                <>
                  {/* Busan Coastline outline */}
                  <path 
                    d="M-50,-50 
                       L850,-50 
                       L850,80
                       C800,100 780,50 750,110
                       C720,160 670,180 660,220
                       C640,250 560,220 540,280
                       C520,320 480,280 440,320
                       C420,340 370,300 350,340
                       C330,370 290,380 270,410
                       C250,440 200,420 180,480
                       L-50,550 Z" 
                    fill="#fafaf9" 
                    stroke="#d6d3d1" 
                    strokeWidth="2.5"
                  />
                  {/* Yeongdo Island (Center-South) */}
                  <path 
                    d="M380,340 C430,330 460,370 450,420 C420,440 370,420 380,340 Z"
                    fill="#fafaf9"
                    stroke="#d6d3d1"
                    strokeWidth="2"
                  />
                  {/* Oryukdo Islets (Bottom Center-East) */}
                  <circle cx="530" cy="450" r="4" fill="#78716c" />
                  <circle cx="538" cy="453" r="3" fill="#a8a29e" />
                  
                  {/* Bridge Lines (Gwangan Bridge, Busan Harbor Bridge) */}
                  {/* Gwangan Bridge (Gwangalli to Haeundae) */}
                  <line x1="580" y1="280" x2="720" y2="220" stroke="#b45309" strokeWidth="2.5" strokeDasharray="3,3" className="opacity-45" />
                  {/* Busan Harbor Bridge (Yeongdo to Gwangalli area) */}
                  <line x1="430" y1="360" x2="580" y2="280" stroke="#78716c" strokeWidth="2" strokeDasharray="3,3" className="opacity-35" />

                  {/* Ocean details */}
                  <path d="M120 420 Q130 415 140 420 T160 420" stroke="#bae6fd" strokeWidth="2" strokeLinecap="round" />
                  <text x="660" y="440" fill="#0284c7" fontSize="10" fontWeight="bold" letterSpacing="0.25em" className="opacity-35">부산항 앞바다 (BUSAN PORT)</text>

                  {/* Local City labels */}
                  <g className="opacity-40 fill-stone-500 font-sans text-[10px] font-bold">
                    <text x="80" y="240">낙동강 에코지구 (NAKDONG RIVER)</text>
                    <text x="320" y="180">부산역 (BUSAN STATION)</text>
                    <text x="440" y="110">서면 도심 (SEOMYEON)</text>
                    <text x="630" y="260">광안대교 (GWANGAN BRIDGE)</text>
                    <text x="730" y="195">해운대비치 (HAEUNDAE)</text>
                  </g>
                </>
              ) : (
                // 🦋 NAMHAE HIGH-FIDELITY LOCAL MAP
                <>
                  {/* Butterfly-shaped Namhae Island Coastline */}
                  <path 
                    d="M180,60 C230,50 280,100 320,80 
                       C370,60 480,120 520,100 
                       C570,120 610,80 650,110
                       C680,140 700,210 680,240 
                       C660,260 720,330 650,360 
                       C600,380 540,320 520,380 
                       C500,420 460,380 420,420 
                       C400,440 370,400 350,440 
                       C330,460 290,420 270,450 
                       C250,470 200,440 180,480 
                       C150,440 120,450 100,420 
                       C80,380 120,320 100,280 
                       C80,250 140,210 120,160 
                       C100,120 140,80 180,60 Z" 
                    fill="#fafaf9" 
                    stroke="#d6d3d1" 
                    strokeWidth="2.5"
                  />
                  {/* Inland connection bridges */}
                  {/* Namhae Bridge (Top Left) */}
                  <line x1="160" y1="20" x2="190" y2="70" stroke="#78716c" strokeWidth="3" className="opacity-45" />
                  {/* Samcheonpo Bridge (Top Right) */}
                  <line x1="620" y1="20" x2="640" y2="90" stroke="#b45309" strokeWidth="3" className="opacity-45" />

                  {/* Ocean details */}
                  <path d="M70 140 Q80 135 90 140 T110 140" stroke="#bae6fd" strokeWidth="2" strokeLinecap="round" />
                  <text x="320" y="460" fill="#0284c7" fontSize="10" fontWeight="bold" letterSpacing="0.25em" className="opacity-35">앵강만 바다 (AENGGANG BAY)</text>

                  {/* Local Island labels */}
                  <g className="opacity-40 fill-stone-500 font-sans text-[10px] font-bold">
                    <text x="110" y="45">남해대교 (NAMHAE BRIDGE)</text>
                    <text x="590" y="45">삼천포대교 (BRIDGE)</text>
                    <text x="360" y="210">남해읍 중심 (NAMHAE TOWN)</text>
                    <text x="490" y="320">금산 (GEUMSAN MOUNTAIN)</text>
                  </g>
                </>
              )}

              {/* Compass Rose */}
              <g transform="translate(60, 60) scale(0.55)" className="opacity-55">
                <circle cx="50" cy="50" r="45" stroke="#78716c" strokeWidth="1.5" />
                <line x1="50" y1="5" x2="50" y2="95" stroke="#78716c" strokeWidth="1.5" />
                <line x1="5" y1="50" x2="95" y2="50" stroke="#78716c" strokeWidth="1.5" />
                <polygon points="50,15 55,50 50,45" fill="#b45309" />
                <polygon points="50,85 55,50 50,55" fill="#a8a29e" />
                <polygon points="15,50 50,55 45,50" fill="#a8a29e" />
                <polygon points="85,50 50,55 55,50" fill="#b45309" />
                <text x="46" y="11" fill="#78716c" fontSize="10" fontWeight="bold">N</text>
              </g>

              {/* Ocean & Coast Titles */}
              <text x="180" y="40" fill="#a8a29e" fontSize="11" fontWeight="bold" letterSpacing="0.2em" className="opacity-60 font-serif">
                {activeCity === 'busan' ? '부산광역시 지역 차량 루트 (BUSAN MAP)' : '남해 보물섬 지역 차량 루트 (NAMHAE MAP)'}
              </text>
              <text x="700" y="450" fill="#0284c7" fontSize="10" fontWeight="bold" letterSpacing="0.25em" className="opacity-35">남해 바다 (SOUTH SEA)</text>

              {/* Dynanically Connected Solid Driving Route Line (실선 연결) */}
              {linePoints && (
                <polyline
                  points={linePoints}
                  fill="none"
                  stroke="#d97706"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-90 drop-shadow-[0_2px_4px_rgba(217,119,6,0.3)]"
                />
              )}
            </svg>

            {/* Glowing Active Course Paths Overlay */}
            <div className="absolute inset-0 select-none pointer-events-none">
              {/* Styled Chauffeur Car Icon moving along active coordinates */}
              <div 
                className="absolute transition-all duration-1000 ease-out z-20"
                style={{ 
                  left: `${currentSpot.x}%`, 
                  top: `${currentSpot.y}%`,
                  transform: 'translate(-50%, -130%)'
                }}
              >
                <div className="bg-ink-950 text-cream-50 text-[10px] px-2 py-0.5 rounded-full shadow-md flex items-center gap-1 border border-gold-600 whitespace-nowrap animate-bounce">
                  <svg className="h-3 w-3 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                  <span>Chauffeur</span>
                </div>
              </div>
            </div>

            {/* Clickable Spot Markers */}
            {spots.map((spot) => {
              const isFiltered = activeCourse !== 'all' && !spot.courses.includes(activeCourse);
              const isActive = activeSpotSlug === spot.slug;

              return (
                <button
                  key={spot.slug}
                  onClick={() => setActiveSpotSlug(spot.slug)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/pin transition-all duration-300 z-10 ${
                    isFiltered ? 'opacity-20 scale-75 pointer-events-none' : 'opacity-100'
                  }`}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                >
                  {/* Pin Circle */}
                  <div className={`relative h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isActive 
                      ? 'bg-gold-600 border-white text-white scale-125 shadow-md ring-4 ring-gold-600/30' 
                      : 'bg-white border-ink-900 text-ink-900 group-hover/pin:bg-ink-900 group-hover/pin:text-white'
                  }`}>
                    {/* Pulsing outer rings for active spot */}
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-gold-600 animate-ping opacity-45" />
                    )}
                    <span className="text-[10px] font-bold">
                      {spots.indexOf(spot) + 1}
                    </span>
                  </div>

                  {/* Tooltip Label */}
                  <span className={`mt-2 rounded-sm bg-ink-950/80 px-2 py-0.5 text-[9px] font-medium tracking-wide text-cream-50 shadow-sm transition-all group-hover/pin:opacity-100 whitespace-nowrap ${
                    isActive ? 'opacity-100 scale-105' : 'opacity-0 group-hover/pin:opacity-100'
                  }`}>
                    {spot.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Premium Detail Card Panel */}
          <div className="flex flex-col h-full justify-between border border-cream-200 bg-cream-50 p-6 rounded-sm">
            <div className="space-y-6">
              {/* Card Title & Subtitle */}
              <div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gold-700">Selected Route Spot</span>
                <h3 className="mt-2 font-serif text-2xl font-light text-ink-900">{currentSpot.title}</h3>
                <p className="text-xs font-semibold text-gold-600 uppercase tracking-wide mt-1">{currentSpot.subtitle}</p>
              </div>

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
      </div>
    </section>
  );
}
