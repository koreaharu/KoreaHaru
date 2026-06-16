export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string; // YYYY-MM-DD
  coverImage: string;
  author: string;
  readingTime: string;
  content: string; // HTML format for render
  seoTitle?: string;
  seoDesc?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'busan-local-secrets',
    title: "[Busan Journal] Hidden in the Pastel Alleys of Yeongdo (Our Favorite Escape)",
    excerpt: "Haeundae is famous, but Yeongdo has our hearts. Here is our concierge team's curated guide to exploring rugged volcanic cliffs, quiet pastel alleys, and the absolute best slow-drip coffee with harbor views.",
    category: "Curator Journal",
    publishedAt: "2026-05-27",
    coverImage: "/images/blog/busan_yeongdo_sunset_clean.png",
    author: "KoreaHaru Editorial",
    readingTime: "8 min",
    seoTitle: "Busan Journal: Hidden in the Pastel Alleys of Yeongdo | KoreaHaru",
    seoDesc: "Our concierge team's curated guide to Yeongdo Island in Busan. Discover steep cliffside walks, Huinnyeoul pastel alleys, hidden forest cafes, and crucial travel realities.",
    content: `
      <p class="lead font-serif text-lg text-ink-700 leading-relaxed mb-6 font-light">
        At KoreaHaru, we believe travel should be raw, soulful, and deeply connected to the local life. While Haeundae and Gwangalli beaches are beautiful, our favorite escape in Busan is the rugged volcanic island of Yeongdo. Here is our concierge team's curated guide to exploring its steep pastel streets, quiet coastal walks, and world-class coffee roasters.
      </p>

      <div class="verdict-card">
        <div class="verdict-header">
          <h3 class="verdict-title">The Yeongdo Verdict</h3>
          <span class="verdict-rating">★ 4.8 / 5.0</span>
        </div>
        <p class="verdict-content">
          <strong>Absolutely a must-visit</strong> if you want to experience Busan's authentic, rugged maritime character away from the polished commercial skyscraper zones. It offers breathtaking ocean-edge walks and a world-class cafe scene. However, the terrain is extremely steep and narrow, making private transport highly recommended to avoid exhausting climbs.
        </p>
      </div>

      <div class="pros-cons-grid">
        <div class="pros-card">
          <h4 class="card-title">Why We Love It</h4>
          <ul class="card-list">
            <li><strong>Jeoryeong Coastal Walk:</strong> Volcanic cliffside pathways where waves crash literally inches from your feet.</li>
            <li><strong>Pastel Culture Alleys:</strong> The whimsical, pastel-colored houses of Huinnyeoul Culture Village clinging to the cliffs.</li>
            <li><strong>High-End Forest Cafes:</strong> Architectural coffee roasters hidden in pine forests with sweeping views of massive container ships.</li>
          </ul>
        </div>
        <div class="cons-card">
          <h4 class="card-title">Things to Keep in Mind</h4>
          <ul class="card-list">
            <li><strong>Insanely Steep Slopes:</strong> Severe, narrow residential stairways that will push your legs to the absolute limit.</li>
            <li><strong>Difficult Transit & Parking:</strong> Narrow one-way roads and lack of parking make taxi/bus navigation tricky.</li>
            <li><strong>Extreme Ocean Winds:</strong> Being an exposed island, it can get very windy and chilly, even on sunny spring/autumn days.</li>
          </ul>
        </div>
      </div>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">The Jeoryeong Coastal Trail: Volcanic Ocean-Edge Walk</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        We always recommend starting your morning early at the **Jeoryeong Coastal Trail**. It is a path carved directly into the rugged volcanic rocks at the island's edge. The waves crash *right* next to your feet, and the salty sea breeze hits your face so intensely that all travel stress just melts away.
      </p>

      <div class="my-8 overflow-hidden rounded-sm border border-cream-200/60 shadow-sm bg-white">
        <img src="/images/blog/yeongdo_coastal_walk.png" alt="Huinnyeoul Culture Village Cliffside Walk" class="w-full object-cover aspect-[16/10] md:aspect-[21/10]" />
        <p class="text-[11px] text-ink-500 italic p-3 text-center bg-cream-50/30 m-0 border-t border-cream-100/60 font-light">
          The stunning pastel alleys of Huinnyeoul Culture Village, curated by our local team for the ultimate scenic view.
        </p>
      </div>
      
      <blockquote class="border-l-2 border-gold-500 pl-6 my-8 italic text-ink-600 font-serif font-light text-lg">
        "Unlike the manicured, sterile boardwalks of high-end resorts, Jeoryeong feels beautifully wild, real, and intimately connected to the sea."
      </blockquote>

      <p class="text-ink-800 leading-relaxed mb-6">
        Be warned, though—those concrete stairs to go up are no joke! They are steep, but the moment you step into **Huinnyeoul Culture Village**, it is completely worth it. It’s a beautiful maze of tiny pastel blue, yellow, and pink houses clinging to the cliffs. It's a lovely place to watch the huge cargo ships anchored in the harbor while enjoying a quiet moment away from the city.
      </p>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">A Quiet Escape: Hidden Wooden Cabin Cafes</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        When your legs need a break, we suggest avoiding the crowded commercial cafes and heading deep into the mountain woods to find **Sinki Cabin**. It looks like a cozy, secret wooden treehouse. Sip a slow-drip single origin brew by the floor-to-ceiling glass window, and watch the harbor lights start to flicker below. Absolute heaven.
      </p>

      <div class="my-8 overflow-hidden rounded-sm border border-cream-200/60 shadow-sm bg-white">
        <img src="/images/blog/yeongdo_cabin_cafe.png" alt="Sinki Cabin Cafe Interior" class="w-full object-cover aspect-[16/10] md:aspect-[21/10]" />
        <p class="text-[11px] text-ink-500 italic p-3 text-center bg-cream-50/30 m-0 border-t border-cream-100/60 font-light">
          Cozy single-origin hand drip coffee with floor-to-ceiling glass panoramic harbor views inside Sinki Cabin.
        </p>
      </div>

      <div class="travel-tip-card">
        <p>
          💡 <strong>Curator's Pro-Tip:</strong> If you want to do this walk, arrive by 9:00 AM on a weekday to avoid the photo-queue crowds. The residential streets are extremely steep and parking is a total nightmare. Our private chauffeur service drops you off directly at the coastal trail entrance and waits for you at the top of the village, saving you from a grueling hike back down the hill!
        </p>
      </div>

      <p class="text-ink-800 leading-relaxed mb-6">
        After the walk, our private drivers often guide guests over to the **Taejongdae Park** lighthouse. Here, you can enjoy the freshest sea squirt and raw abalone lunch, prepared right on the seaside rocks by local grandmas (Ajummas). Dipping fresh seafood in spicy gochujang while the ocean spray splashes your face is an unforgettable local experience. If you want a real, soulful taste of Busan, Yeongdo is the place to be!
      </p>
    `
  },
  {
    slug: 'busan-local-millmyeon',
    title: "[Busan Eat-Log] Chilled Wheat Noodles (Millmyeon): Our Vetted Guide to Generational Dynasties",
    excerpt: "Skip the Instagram tourist traps. Here is KoreaHaru's curated review of Busan's legendary cold wheat noodles, featuring two generational dynasties and local etiquette for eating like an authentic Busanite.",
    category: "Food Review",
    publishedAt: "2026-06-03",
    coverImage: "/images/blog/busan_local_noodle.png",
    author: "KoreaHaru Editorial",
    readingTime: "5 min",
    seoTitle: "Busan Eat-Log: Vetted Millmyeon Cold Noodles Guide | KoreaHaru",
    seoDesc: "A local food curator's review of cold wheat Millmyeon noodles in Busan. Generational dynasties, pros and cons, and tips on eating like a local.",
    content: `
      <p class="lead font-serif text-lg text-ink-700 leading-relaxed mb-6 font-light">
        When the summer heat hits Busan, our concierge desk is always flooded with requests for the best cold noodles. We don't recommend overpriced tourist traps. Instead, we guide our guests to the true local dynasties that spend their early mornings hand-pulling wheat noodles and slow-cooking secret medicinal broths.
      </p>

      <div class="verdict-card">
        <div class="verdict-header">
          <h3 class="verdict-title">The Millmyeon Verdict</h3>
          <span class="verdict-rating">★ 4.7 / 5.0</span>
        </div>
        <p class="verdict-content">
          <strong>100% worth trying!</strong> The distinct herbal cinnamon broth and the chewy wheat texture of Millmyeon are completely different from ordinary buckwheat Naengmyeon. It's a sweet, spicy, and icy relief from the heavy Korean humidity. Just make sure to visit generational houses to avoid cheap, overly sweet modern copies.
        </p>
      </div>

      <div class="pros-cons-grid">
        <div class="pros-card">
          <h4 class="card-title">Why You'll Love It</h4>
          <ul class="card-list">
            <li><strong>Complex Medicinal Broth:</strong> Generational houses slow-cook their secret broths for days using organic herbs, giving it a rich, spiced depth.</li>
            <li><strong>Generational Chewiness:</strong> Hand-pulled wheat noodles that are perfectly bouncy and satisfying to bite.</li>
            <li><strong>Giant Juicy Dumplings:</strong> Most legendary noodle spots serve freshly steamed pork mandu that are warm, juicy, and absolute perfection.</li>
          </ul>
        </div>
        <div class="cons-card">
          <h4 class="card-title">Things to Consider</h4>
          <ul class="card-list">
            <li><strong>Intense Spicy Kick:</strong> The red pepper paste (Yangnyeom) has a strong, slow-burning kick that might catch mild palates off guard.</li>
            <li><strong>Massive Lunch Crowds:</strong> The most famous shops easily draw queues of 40+ people under the blazing summer sun during lunch rush.</li>
            <li><strong>Fast-Paced Dining:</strong> These are high-turnover local institutions, not spots for slow, leisurely lounging.</li>
          </ul>
        </div>
      </div>

      <div class="my-8 overflow-hidden rounded-sm border border-cream-200/60 shadow-sm bg-white">
        <img src="/images/blog/busan_local_noodle.png" alt="Busan Local Millmyeon Noodles" class="w-full object-cover aspect-[16/10] md:aspect-[21/10]" />
        <p class="text-[11px] text-ink-500 italic p-3 text-center bg-cream-50/30 m-0 border-t border-cream-100/60 font-light">
          A traditional brass bowl of Busan Millmyeon, featuring wheat-flour cold noodles in an icy slow-cooked beef broth.
        </p>
      </div>

      <p class="text-ink-800 leading-relaxed mb-6">
        Before we dive into the food, here's a super cool piece of history: Millmyeon (밀면) was actually born during the Korean War! Refugees fleeing south to Busan couldn't find buckwheat for their traditional cold noodles, so they used the wheat flour provided by humanitarian relief organizations instead. It's literally history in a chilled brass bowl, which makes it taste ten times better.
      </p>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">Vetted: Our Two Generational Noodle Dynasties</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        While hundreds of shops in Busan claim to serve authentic Millmyeon, we focus exclusively on the generational houses that slow-cook their secret broths for days using traditional medicinal herbs and beef bones.
      </p>

      <div class="my-8 border-l-4 border-gold-500 pl-6 space-y-4">
        <h3 class="font-serif text-lg font-semibold text-ink-900">1. Choryang Milmyeon (초량밀면)</h3>
        <p class="text-xs text-ink-500 uppercase tracking-widest">Near Busan Station — Super Accessible</p>
        <p class="text-sm text-ink-700 leading-relaxed">The queue here can get crazy, but it is highly accessible near the station. The broth is out of this world—rich, cold, with a distinct hint of cinnamon and licorice. And the steamed pork dumplings (Mandu) are juicy, warm, and massive. A perfect pairing with the cold noodles!</p>
      </div>

      <div class="my-8 overflow-hidden rounded-sm border border-cream-200/60 shadow-sm bg-white">
        <img src="/images/blog/busan_mandu_steamed.png" alt="Freshly Steamed Local Dumplings" class="w-full object-cover aspect-[16/10] md:aspect-[21/10]" />
        <p class="text-[11px] text-ink-500 italic p-3 text-center bg-cream-50/30 m-0 border-t border-cream-100/60 font-light">
          Warm, massive, and incredibly juicy freshly steamed pork dumplings (Mandu) served alongside Millmyeon.
        </p>
      </div>

      <div class="my-8 border-l-4 border-gold-500 pl-6 space-y-4">
        <h3 class="font-serif text-lg font-semibold text-ink-900">2. Gaegeum Milmyeon (개금밀면)</h3>
        <p class="text-xs text-ink-500 uppercase tracking-widest">Hidden inside Gaegeum Alley Market</p>
        <p class="text-sm text-ink-700 leading-relaxed">Serving hungry locals since 1966! If you love spicy food, this is your holy grail. The red pepper sauce (Yangnyeom) has an intense, fiery kick that makes your tongue tingle, but it is so addictive you literally cannot stop eating. The chewiness of the noodles is just unreal.</p>
      </div>

      <div class="travel-tip-card">
        <p>
          💡 <strong>How to Eat Like a Genuine Local:</strong> One of our favorite local grandmothers at Gaegeum Market gave us a massive tip: do NOT cut the noodles too many times with the scissors! Just once or twice is more than enough to preserve the bouncy texture. Taste the pure, cold broth first before adding anything, then mix the red sauce thoroughly, add a splash of vinegar for acidity, and enjoy the cooling bite!
        </p>
      </div>

      <p class="text-ink-800 leading-relaxed mb-6">
        Our KoreaHaru concierge team coordinates private visits and secures tables at these institutions before the heavy queues start, so you can enjoy authentic local hospitality in peace and comfort. You can't leave Busan without trying this!
      </p>
    `
  },
  {
    slug: 'three-days-in-busan',
    title: "[Busan Guide] Three Days in Busan: The Way Locals Would Do It",
    excerpt: "A considered, atmospheric pace that lets you taste the sea, climb quiet hillsides, and experience Beomeosa temple at dawn — without ticking boxes.",
    category: "Guides",
    publishedAt: "2026-05-24",
    coverImage: "/images/blog/busan_three_days_clean.png",
    author: "KoreaHaru Editorial",
    readingTime: "8 min",
    seoTitle: "Three Days in Busan Local Itinerary Guide | KoreaHaru",
    seoDesc: "An honest 3-day travel itinerary for Busan, South Korea. Explore Gwangalli beach, local fish markets, mountain temples, and quiet cliffside walks.",
    content: `
      <p class="lead font-serif text-lg text-ink-700 leading-relaxed mb-6 font-light">
        Busan is a massive, pulsing maritime metropolis stretching across bays and steep mountains. Trying to rush through it in a weekend leads to exhaustion. Here is our curated three-day itinerary, designed to give you a deep, textured experience of Busan at a deliberate and peaceful pace.
      </p>

      <div class="verdict-card">
        <div class="verdict-header">
          <h3 class="verdict-title">The 3-Day Busan Verdict</h3>
          <span class="verdict-rating">★ 4.9 / 5.0</span>
        </div>
        <p class="verdict-content">
          <strong>Highly recommended for slow-travelers.</strong> Splitting your stay between the historic, raw West (Yeongdo, Jagalchi) and the modern, scenic East (Haeundae, Gijang) provides a beautiful visual contrast. Keep in mind that Busan's traffic is notoriously congested; taking the subway or hiring a private chauffeur is crucial to saving time.
        </p>
      </div>

      <div class="pros-cons-grid">
        <div class="pros-card">
          <h4 class="card-title">Itinerary Highlights</h4>
          <ul class="card-list">
            <li><strong>Day 1 (Maritime Rawness):</strong> Explore Jagalchi Fish Market, cross the harbor to Yeongdo, and climb Huinnyeoul Village.</li>
            <li><strong>Day 2 (Mountain Peace):</strong> Travel north to the quiet forests of Beomeosa Temple, followed by Gwangalli Bridge sunset.</li>
            <li><strong>Day 3 (Coastal Elegance):</strong> Walk the green trails of Haeundae Blueline Park and enjoy Gijang coastal dining.</li>
          </ul>
        </div>
        <div class="cons-card">
          <h4 class="card-title">Realities to Plan For</h4>
          <ul class="card-list">
            <li><strong>Linear Geography:</strong> Busan is extremely wide and divided by mountains. Travelling from east to west takes over 1.5 hours in traffic.</li>
            <li><strong>Varying Pacing:</strong> Some spots (like Jagalchi) are raw, crowded, and loud, which contrasts sharply with quiet temples.</li>
            <li><strong>Stretching Routes:</strong> Ensure you wear comfortable shoes as walking on concrete pathways is required daily.</li>
          </ul>
        </div>
      </div>

      <div class="my-8 overflow-hidden rounded-sm border border-cream-200/60 shadow-sm bg-white">
        <img src="/images/blog/busan_three_days_clean.png" alt="Cinematic view of Gwangan Bridge at Sunset" class="w-full object-cover aspect-[16/10] md:aspect-[21/10]" />
        <p class="text-[11px] text-ink-500 italic p-3 text-center bg-cream-50/30 m-0 border-t border-cream-100/60 font-light">
          The stunning golden curve of Gwangan Bridge as viewed from a private seaside lounge, curated by KoreaHaru.
        </p>
      </div>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">Day 1: The Raw Soul of the Old Port</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        Start your morning early at **Jagalchi Market**, where the air smells of brine and the vendor grandmothers display fresh sea catches. Grab a fresh grilled fish breakfast in the market alleys. In the afternoon, cross the Yeongdo bridge to wander Huinnyeoul Village's pastel blue alleys. End the night with a cup of hot tea at a quiet cliffside cafe, watching the container ships blink in the dark harbor.
      </p>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">Day 2: Silent Mountain Temples & Coastal Bridges</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        We recommend taking Day 2 to head inland and upward to **Beomeosa Temple**, nestled in the quiet pine valleys of Mt. Geumjeong. Walk the bamboo paths and listen to the wooden bell chimes. After a calm morning, head down to Gwangalli Beach in the evening. Watch the sunset paint the sky behind the colossal Gwangan Bridge while sipping local craft beer on the beach sand.
      </p>

      <div class="travel-tip-card">
        <p>
          💡 <strong>Curator's Booking Tip:</strong> To avoid wasting half your day in Busan's heavy traffic, we strongly advise staying at a hotel near Gwangalli or Haeundae for Days 2-3, and hiring a private car to handle the transit to Beomeosa and Yeongdo. Our concierge team can arrange smooth luggage transfers so you don't have to carry bags between locations.
        </p>
      </div>
    `
  },
  {
    slug: 'best-raw-fish-tongyeong',
    title: "[Food Journal] Where to Find the Best Raw Fish in Tongyeong",
    excerpt: "The busy harbor market is the obvious answer. The better one is a quiet wooden counter tucked behind the old ferry terminal. Here is how to find it.",
    category: "Food Review",
    publishedAt: "2026-05-18",
    coverImage: "/images/blog/tongyeong_raw_fish_clean.png",
    author: "KoreaHaru Editorial",
    readingTime: "5 min",
    seoTitle: "Authentic Raw Fish Hoe Dining Guide in Tongyeong | KoreaHaru",
    seoDesc: "Discover the real raw fish (Hoe) culture of Tongyeong, Korea's seafood capital. A food curator's review of back-alley counters and market etiquette.",
    content: `
      <p class="lead font-serif text-lg text-ink-700 leading-relaxed mb-6 font-light">
        Tongyeong is widely regarded as the seafood capital of the southern coast. While tourists crowd the central market, locals seek out quiet back-alley counters where generational chefs slice fresh catches directly from local wooden boats. Here is our vetted guide to dining authentically in Tongyeong.
      </p>

      <div class="verdict-card">
        <div class="verdict-header">
          <h3 class="verdict-title">The Tongyeong Hoe Verdict</h3>
          <span class="verdict-rating">★ 4.8 / 5.0</span>
        </div>
        <p class="verdict-content">
          <strong>A culinary must-do!</strong> The seafood in Tongyeong is incredibly fresh, sweet, and affordable. However, the best spots are tiny, local institutions with no English signage or menus. Visiting with a local coordinator or having a translated menu prepared by our concierge is highly recommended.
        </p>
      </div>

      <div class="pros-cons-grid">
        <div class="pros-card">
          <h4 class="card-title">Why We Recommend It</h4>
          <ul class="card-list">
            <li><strong>Unmatched Freshness:</strong> Fish are brought directly from local boats to the counters every single morning.</li>
            <li><strong>Dadoji Style Dining:</strong> Tucking into local back-alleys where order of raw fish comes with an endless stream of seasonal side dishes.</li>
            <li><strong>Generative Value:</strong> Excellent prices compared to the heavy markups in Seoul or Busan.</li>
          </ul>
        </div>
        <div class="cons-card">
          <h4 class="card-title">Realities to Expect</h4>
          <ul class="card-list">
            <li><strong>No English Menus:</strong> Menus are hand-written in Korean on chalkboard walls.</li>
            <li><strong>Traditional Seating:</strong> Many authentic spots require sitting on low cushions on floor mats (Ondol).</li>
            <li><strong>Early Closing Hours:</strong> Once the fresh catches of the day are sold out, the chefs shut down the doors immediately.</li>
          </ul>
        </div>
      </div>

      <div class="my-8 overflow-hidden rounded-sm border border-cream-200/60 shadow-sm bg-white">
        <img src="/images/blog/tongyeong_raw_fish_clean.png" alt="Traditional raw fish table setting in Tongyeong" class="w-full object-cover aspect-[16/10] md:aspect-[21/10]" />
        <p class="text-[11px] text-ink-500 italic p-3 text-center bg-cream-50/30 m-0 border-t border-cream-100/60 font-light">
          A traditional brass platter of sea bream and flounder sashimi, accompanied by regional side dishes in Tongyeong.
        </p>
      </div>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">Behind the Old Ferry Terminal: The Local Sanctuary</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        Avoid the neon signs of the main tourist docks. Walk two blocks behind the old passenger ferry terminal into a quiet stone alleyway to find **Dado Sikdang (다도식당)**. This tiny, five-table wooden shop is run by an elderly couple who have been slicing fish for over forty years. Order their seasonal raw fish platter (Hoe) which comes accompanied by steamed ocean octopus, grilled rockfish, and warm seaweed soup.
      </p>

      <div class="travel-tip-card">
        <p>
          💡 <strong>Curator's Dining Tip:</strong> Traditional Tongyeong raw fish is eaten wrapped in sesame leaves with a dab of fermented soybean paste (Ssamjang) mixed with chopped garlic and green chilies, rather than plain soy sauce. Squeeze a tiny bit of lemon juice only on the fish pieces you are eating immediately to preserve the natural firm texture of the rest.
        </p>
      </div>
    `
  },
  {
    slug: 'dermatology-clinics-busan',
    title: "[Skincare Guide] A Traveler's Guide to Dermatology Clinics in Busan",
    excerpt: "Which clinics speak English, what skincare procedures are worth flying for, and how to budget for a single afternoon in Haeundae.",
    category: "Beauty",
    publishedAt: "2026-05-15",
    coverImage: "/images/blog/busan_skincare_clinic_clean.png",
    author: "KoreaHaru Editorial",
    readingTime: "11 min",
    seoTitle: "Busan Dermatology Skincare Clinic Guide | KoreaHaru",
    seoDesc: "An honest concierge review of dermatology and skincare clinics in Busan. Vetted locations in Centum City, price expectations, and tips.",
    content: `
      <p class="lead font-serif text-lg text-ink-700 leading-relaxed mb-6 font-light">
        South Korea is globally celebrated for its advanced skincare and medical aesthetics. Busan's luxury districts of Centum City and Haeundae house some of the country's most state-of-the-art clinics. Here is our concierge team's honest guide to navigating dermatology clinics in Busan.
      </p>

      <div class="verdict-card">
        <div class="verdict-header">
          <h3 class="verdict-title">The Skincare Clinic Verdict</h3>
          <span class="verdict-rating">★ 4.7 / 5.0</span>
        </div>
        <p class="verdict-content">
          <strong>Highly recommended</strong> if you want access to premium lasers, clinical facials, and anti-aging treatments (like Ultherapy or Rejuran) at a fraction of the cost in Western countries. However, many massive 'factory' style clinics have high patient turnover and short doctor consultations. Booking through a dedicated concierge ensures you visit boutique clinics with personalized doctor care.
        </p>
      </div>

      <div class="pros-cons-grid">
        <div class="pros-card">
          <h4 class="card-title">Why We Vouch For It</h4>
          <ul class="card-list">
            <li><strong>Elite Technology:</strong> Access to the absolute latest laser equipment (PicoSure, LDM) and premium skin boosters.</li>
            <li><strong>Cleanliness & Service:</strong> Pristine, high-end environments that operate with exceptional hygiene standards.</li>
            <li><strong>Tax Refund Available:</strong> Most certified clinics offer instant duty-free tax refunds on the spot for foreign travelers.</li>
          </ul>
        </div>
        <div class="cons-card">
          <h4 class="card-title">Realities to Prepare For</h4>
          <ul class="card-list">
            <li><strong>English Communication Gaps:</strong> While translators are present, they are often sales consultants rather than medical staff.</li>
            <li><strong>Upselling Pressure:</strong> Some clinics try to add package deals and extra lasers to your initial plan during consultation.</li>
            <li><strong>Post-Laser Downtime:</strong> Aggressive lasers leave redness and skin peeling. Plan your travel photos accordingly!</li>
          </ul>
        </div>
      </div>

      <div class="my-8 overflow-hidden rounded-sm border border-cream-200/60 shadow-sm bg-white">
        <img src="/images/blog/busan_skincare_clinic_clean.png" alt="Luxury dermatology clinic interior in Busan" class="w-full object-cover aspect-[16/10] md:aspect-[21/10]" />
        <p class="text-[11px] text-ink-500 italic p-3 text-center bg-cream-50/30 m-0 border-t border-cream-100/60 font-light">
          A minimalist luxury skincare consulting room in Centum City, vetted for high-end patient care.
        </p>
      </div>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">Vetted: Factory Clinics vs. Boutique Skin Centers</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        When browsing clinics, you will notice a huge gap between massive franchise 'factory' clinics (which offer low prices but treat you like an assembly line) and boutique skincare centers. For basic procedures like a gentle aqua peel or mild skin scaling, factory clinics are fine. However, for specialized injections (like Rejuran Healer) or deep lifting lasers (Ultherapy), we strongly advise booking a boutique clinic in Haeundae where a Board-Certified Dermatologist conducts the entire consultation and handles the laser device themselves.
      </p>

      <div class="travel-tip-card">
        <p>
          💡 <strong>Curator's Beauty Tip:</strong> Do not book your clinic visit on the very last day of your trip. If you undergo intensive treatments, you may require a follow-up appointment or experience skin scaling that requires special recovery creams. Our chauffeur packages include quiet transport from the clinic directly back to your hotel room to ensure absolute privacy during recovery.
        </p>
      </div>
    `
  },
  {
    slug: 'gyeongju-day-trip',
    title: "[Gyeongju Diary] Cycling Through Silla's Ancient Kingdom: An Honest Hanok & Tombs Review",
    excerpt: "Skip the rushed tourist buses. Here is our guest Elena's honest diary of a private day trip to Gyeongju—exploring colossal royal tombs, renting retro bicycles, and finding a quiet Hanok tea house.",
    category: "Travel Guide",
    publishedAt: "2026-06-24", // Scheduled
    coverImage: "/images/blog/gyeongju_hanok_clean.png",
    author: "KoreaHaru Editorial",
    readingTime: "7 min",
    seoTitle: "Gyeongju Day Trip Diary: Hanok & Royal Tombs Review | KoreaHaru",
    seoDesc: "A first-person review of Gyeongju day trip. Cycling around Daerungwon Royal Tombs, Gyochon Hanok village tea ceremony, and private travel tips.",
    content: `
      <p class="lead font-serif text-lg text-ink-700 leading-relaxed mb-6 font-light">
        Gyeongju is known as 'the museum without walls' because the ancient Silla Dynasty ruins are literally scattered across the city. Many tourists book massive group bus tours from Busan, but huffing and puffing after a guide through crowded paths ruins the magic. Renting a bicycle and exploring at your own pace is the only way to feel its quiet, ancient beauty.
      </p>

      <div class="verdict-card">
        <div class="verdict-header">
          <h3 class="verdict-title">The Gyeongju Verdict</h3>
          <span class="verdict-rating">★ 4.8 / 5.0</span>
        </div>
        <p class="verdict-content">
          <strong>A absolute highlight!</strong> Walking among the massive, grass-covered royal tombs of Daerungwon and sipping tea in a traditional Gyochon Hanok is an incredible experience. The city is flat and highly cyclable. However, Hwangridan-gil (the main Hanok street) gets extremely crowded on weekends. Try to visit on a weekday morning.
        </p>
      </div>

      <div class="pros-cons-grid">
        <div class="pros-card">
          <h4 class="card-title">What We Loved</h4>
          <ul class="card-list">
            <li><strong>Colossal Royal Tombs:</strong> Daerungwon Park's giant grass mounds look like rolling green hills in the middle of the city.</li>
            <li><strong>Gyochon Tea Ceremony:</strong> Sitting on the open wooden floor of a quiet Hanok, learning traditional tea manners.</li>
            <li><strong>Beautiful Cycling Paths:</strong> Safe, flat trails linking major historic sites in under 15 minutes of pedaling.</li>
          </ul>
        </div>
        <div class="cons-card">
          <h4 class="card-title">Things to Keep in Mind</h4>
          <ul class="card-list">
            <li><strong>Crowded Weekends:</strong> Hwangridan-gil becomes so packed with local tourists that cycling is impossible.</li>
            <li><strong>Summer Heat:</strong> Gyeongju is located in a basin and gets incredibly hot during July and August with minimal shade.</li>
            <li><strong>Distance from Busan:</strong> It takes roughly 1.5 hours in a private car, making an early morning start crucial.</li>
          </ul>
        </div>
      </div>

      <div class="my-8 overflow-hidden rounded-sm border border-cream-200/60 shadow-sm bg-white">
        <img src="/images/blog/gyeongju_hanok_clean.png" alt="Traditional Hanok in Gyeongju" class="w-full object-cover aspect-[16/10] md:aspect-[21/10]" />
        <p class="text-[11px] text-ink-500 italic p-3 text-center bg-cream-50/30 m-0 border-t border-cream-100/60 font-light">
          A serene traditional Hanok courtyard in Gyeongju, glowing in the soft light of a quiet evening.
        </p>
      </div>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">Pedaling Among Giants: Daerungwon Royal Tombs</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        We rented retro green bicycles near the park entrance and rode directly into **Daerungwon**. Cycling past these massive, grass-covered mounds where ancient Silla kings were buried feels surreal. The pathways are lined with giant cherry trees, and in the morning light, it is incredibly peaceful. We suggested stopping at Cheomseongdae, the oldest astronomical observatory in Asia, which sits in an open wildflower field.
      </p>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">The Stillness of Gyochon Hanok Village</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        When the afternoon sun got too intense, we headed into the quiet alleyways of **Gyochon Hanok Village**. We sat on the polished wooden porch of a traditional house and underwent a silent tea ceremony. Learning how to brew local Hwang-cha (fermented tea) and tasting handmade sweet rice cakes from a local tea master was a beautiful, relaxing pause.
      </p>

      <div class="travel-tip-card">
        <p>
          💡 <strong>Curator's Pro-Tip:</strong> Gyeongju's main Hanok street, Hwangridan-gil, is filled with trendy shops and cafes. Skip the modern dessert cafes and look for the hidden traditional courtyard tea rooms. Our private chauffeur drops you off at Gyochon Village, coordinates your bike rental, and is waiting to drive you back to Busan as soon as you finish dining, saving you from standard public transit queues!
        </p>
      </div>
    `
  },
  {
    slug: 'haeundae-sky-capsule',
    title: "[Busan Journal] Haeundae Sky Capsule: Is it Actually Worth the Waiting Queue?",
    excerpt: "The colorful sky capsules running along the Haeundae coast are all over social media. But is the actual ride worth the ticket cost and long queues? Elena shares her raw, first-person review.",
    category: "Curator Journal",
    publishedAt: "2026-07-01", // Scheduled
    coverImage: "/images/blog/haeundae_skycapsule_clean.png",
    author: "KoreaHaru Editorial",
    readingTime: "6 min",
    seoTitle: "Busan Haeundae Sky Capsule Review & Booking Guide | KoreaHaru",
    seoDesc: "An honest first-person review of Haeundae Blueline Park Sky Capsule in Busan. Cost, queue times, booking hacks, and private guide advice.",
    content: `
      <p class="lead font-serif text-lg text-ink-700 leading-relaxed mb-6 font-light">
        If you have searched for Busan on Instagram, you have definitely seen the colorful, retro toy-like capsules sliding along a green rail over the sea. This is the **Haeundae Sky Capsule**. But behind the pretty 15-second reels lies a harsh reality: massive tourist queues, overpriced tickets, and booking systems that sell out weeks in advance. Here is our honest review.
      </p>

      <div class="verdict-card">
        <div class="verdict-header">
          <h3 class="verdict-title">The Sky Capsule Verdict</h3>
          <span class="verdict-rating">★ 4.6 / 5.0</span>
        </div>
        <p class="verdict-content">
          <strong>Yes, but with caveats.</strong> The panoramic view of the sea from your own private capsule is incredibly romantic and beautiful. However, the capsules move very slowly (15 km/h), and standing in the hot waiting line for 45 minutes even with a reserved ticket can be frustrating. You must book online at least two weeks in advance.
        </p>
      </div>

      <div class="pros-cons-grid">
        <div class="pros-card">
          <h4 class="card-title">Why we love it</h4>
          <ul class="card-list">
            <li><strong>Incredible Coastal Views:</strong> Glass windows on all sides offer sweeping views of Haeundae beach and rugged cliffs.</li>
            <li><strong>Complete Privacy:</strong> Unlike the beach train, each capsule is private (up to 4 people), letting you enjoy the ocean view in peace.</li>
            <li><strong>Adorable Retro Design:</strong> The vintage red, yellow, green, and blue pods look fantastic in photographs.</li>
          </ul>
        </div>
        <div class="cons-card">
          <h4 class="card-title">The Realities</h4>
          <ul class="card-list">
            <li><strong>Massive Queue Times:</strong> Even with a specific time-slot ticket, you will likely wait in line for 30–50 minutes.</li>
            <li><strong>Short Duration:</strong> The ride from Mipo to Cheongsapo is only 2 km and takes roughly 30 minutes.</li>
            <li><strong>Heavy Ticket Competition:</strong> Weekend slots sell out almost instantly when reservations open.</li>
          </ul>
        </div>
      </div>

      <div class="my-8 overflow-hidden rounded-sm border border-cream-200/60 shadow-sm bg-white">
        <img src="/images/blog/haeundae_skycapsule_clean.png" alt="Colorful Haeundae Sky Capsules over the ocean" class="w-full object-cover aspect-[16/10] md:aspect-[21/10]" />
        <p class="text-[11px] text-ink-500 italic p-3 text-center bg-cream-50/30 m-0 border-t border-cream-100/60 font-light">
          The colorful Sky Capsules running along the coastal railway at Haeundae Blueline Park, Busan.
        </p>
      </div>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">The Route: Mipo to Cheongsapo</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        We recommend starting at **Mipo Station** (near the end of Haeundae beach) and riding to **Cheongsapo**. The Mipo departure wraps around the cliffside first, giving you a dramatic reveal of the ocean and the distant Gwangan Bridge. Inside the capsule, there is a small wooden holder for your phone that acts as a natural speaker booster—play some acoustic music, relax, and watch the waves crash on the rocks below.
      </p>

      <div class="travel-tip-card">
        <p>
          💡 <strong>Curator's Booking Hack:</strong> Avoid booking round-trip tickets! It's much better to ride the Sky Capsule one-way from Mipo to Cheongsapo, and then walk back along the gorgeous wooden **Green Railway** path at sea-level. Our private concierge handles all ticket reservations weeks in advance, and our chauffeur waits for you at Cheongsapo with cold water, saving you from standard transport headaches!
        </p>
      </div>
    `
  },
  {
    slug: 'gamcheon-culture-village',
    title: "[Busan Journal] Gamcheon Culture Village: Beyond the Instagram Little Prince Selfie",
    excerpt: "Busan's colorful hillside village is a visual marvel, but it can feel like a crowded tourist theme park. Read our curator's honest review of the best hidden viewpoints and local street-art spots.",
    category: "Travel Guide",
    publishedAt: "2026-07-08", // Scheduled
    coverImage: "/images/blog/gamcheon_village_clean.png",
    author: "KoreaHaru Editorial",
    readingTime: "6 min",
    seoTitle: "Gamcheon Culture Village Review & Hidden Viewpoints | KoreaHaru",
    seoDesc: "An honest travel guide to Gamcheon Culture Village in Busan. Discover how to avoid photo crowds, find local art galleries, and explore steep alleys.",
    content: `
      <p class="lead font-serif text-lg text-ink-700 leading-relaxed mb-6 font-light">
        Gamcheon Culture Village is often called the 'Machu Picchu of Busan' due to its steep, terraced rows of colorful houses clinging to the mountain slopes. While it is a spectacular visual landscape, the main path has become heavily commercialized with souvenir shops and long lines for photos. Here is how to experience its real, quiet local history.
      </p>

      <div class="verdict-card">
        <div class="verdict-header">
          <h3 class="verdict-title">The Gamcheon Verdict</h3>
          <span class="verdict-rating">★ 4.5 / 5.0</span>
        </div>
        <p class="verdict-content">
          <strong>Definitely worth seeing, but skip the main track.</strong> The panoramic view of pastel houses stacked on top of one another leading to the ocean is stunning. However, the main road is extremely crowded and touristy. The real magic of Gamcheon is found by diving into the steep, labyrinth-like residential alleys that split off the main road.
        </p>
      </div>

      <div class="pros-cons-grid">
        <div class="pros-card">
          <h4 class="card-title">What We Enjoyed</h4>
          <ul class="card-list">
            <li><strong>Stunning Pastel Panorama:</strong> The colorful houses stacked like stairs offer an incredible visual landscape.</li>
            <li><strong>Labyrinth-like Alleys:</strong> Exploring the narrow residential stairways reveals local daily life and quiet spots.</li>
            <li><strong>Local Art Galleries:</strong> Vetted mini-galleries hidden in converted houses showcasing works of local artists.</li>
          </ul>
        </div>
        <div class="cons-card">
          <h4 class="card-title">Things to keep in mind</h4>
          <ul class="card-list">
            <li><strong>Severe Slopes & Stairs:</strong> The village is built on a mountain. Walking requires climbing steep steps.</li>
            <li><strong>Respect Local Residents:</strong> This is a living neighborhood. Keep your voice down and do not photograph inside houses.</li>
            <li><strong>Instagram Bottlenecks:</strong> Waiting in line for the 'Little Prince' photo spot can take over 30 minutes.</li>
          </ul>
        </div>
      </div>

      <div class="my-8 overflow-hidden rounded-sm border border-cream-200/60 shadow-sm bg-white">
        <img src="/images/blog/gamcheon_village_clean.png" alt="Panoramic view of Gamcheon Culture Village houses" class="w-full object-cover aspect-[16/10] md:aspect-[21/10]" />
        <p class="text-[11px] text-ink-500 italic p-3 text-center bg-cream-50/30 m-0 border-t border-cream-100/60 font-light">
          The colorful rows of terraced houses in Gamcheon Culture Village, climbing the slopes of Busan's coastal hills.
        </p>
      </div>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">A Dark History Behind the Rainbow Colors</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        Before it became a tourist attraction, Gamcheon was actually a refugee camp built during the Korean War. Thousands of people fled to Busan and built temporary wooden shacks on these steep mountainsides. In the 2000s, local artists and residents painted the houses and turned it into an art village. Knowing this history makes the steep climbs feel much more meaningful.
      </p>

      <div class="travel-tip-card">
        <p>
          💡 <strong>Curator's Pro-Tip:</strong> Avoid the main road photo lines. Instead, head into **Ganeonae Eoulim**, a community center built inside a traditional bathhouse (Mokyoktang). Climb to its rooftop observatory for a panoramic view of the village without any tourist crowds. Our private drivers drop you at the top entrance of the village, letting you walk down comfortably while they wait at the bottom exit!
        </p>
      </div>
    `
  },
  {
    slug: 'jagalchi-fish-market',
    title: "[Busan Eat-Log] Navigating Jagalchi Fish Market: How to Dine Like a Local Without the Tourist Price",
    excerpt: "Jagalchi is Korea's largest seafood market, but tourists often get overcharged. Read our step-by-step guide to bargaining for fresh crab and dining on the second-floor stalls like a true local.",
    category: "Food Review",
    publishedAt: "2026-07-15", // Scheduled
    coverImage: "/images/blog/jagalchi_seafood_clean.png",
    author: "KoreaHaru Editorial",
    readingTime: "7 min",
    seoTitle: "Busan Jagalchi Fish Market Dining & Bargaining Guide | KoreaHaru",
    seoDesc: "Learn how to buy and dine on fresh seafood at Jagalchi Fish Market in Busan. A curator's review of second-floor stalls and local tips.",
    content: `
      <p class="lead font-serif text-lg text-ink-700 leading-relaxed mb-6 font-light">
        Jagalchi Market is a sensory overload. The sound of water splashing, vendors calling out in thick Busan accents, and tank after tank of strange marine creatures. It is an incredible local experience, but it is also a place where tourists often get overcharged for seafood. Here is our step-by-step guide to dining like a true local.
      </p>

      <div class="verdict-card">
        <div class="verdict-header">
          <h3 class="verdict-title">The Jagalchi Verdict</h3>
          <span class="verdict-rating">★ 4.7 / 5.0</span>
        </div>
        <p class="verdict-content">
          <strong>A must-do dining experience.</strong> Selecting your own fresh crab, fish, or lobster on the first floor and having it cooked immediately on the second floor is exceptionally fun and delicious. However, without price checking, you can easily pay double the local rate. Always confirm the price per kilogram before agreeing.
        </p>
      </div>

      <div class="pros-cons-grid">
        <div class="pros-card">
          <h4 class="card-title">Why We Love It</h4>
          <ul class="card-list">
            <li><strong>Incredibly Fresh Seafood:</strong> Sourced directly from local fishing boats every morning.</li>
            <li><strong>Interactive Selection:</strong> You select the exact crab or fish you want to eat from the first-floor tanks.</li>
            <li><strong>Communal Dining Atmosphere:</strong> The second-floor dining hall is loud, energetic, and filled with local dining culture.</li>
          </ul>
        </div>
        <div class="cons-card">
          <h4 class="card-title">Things to Consider</h4>
          <ul class="card-list">
            <li><strong>Aggressive Sales:</strong> Vendor grandmas are very competitive and will call out to you constantly.</li>
            <li><strong>Cooking Fees:</strong> The second-floor restaurants charge a separate 'table fee' (Chongjang-ryo) per person to cook your food.</li>
            <li><strong>Wet & Slippery Floors:</strong> The market aisles have running water; boots or sneakers are highly recommended.</li>
          </ul>
        </div>
      </div>

      <div class="my-8 overflow-hidden rounded-sm border border-cream-200/60 shadow-sm bg-white">
        <img src="/images/blog/jagalchi_seafood_clean.png" alt="Fresh seafood platter at Jagalchi Market" class="w-full object-cover aspect-[16/10] md:aspect-[21/10]" />
        <p class="text-[11px] text-ink-500 italic p-3 text-center bg-cream-50/30 m-0 border-t border-cream-100/60 font-light">
          A traditional steamed king crab and fresh sashimi selection, cooked and served on the second floor of Jagalchi Market.
        </p>
      </div>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">The Step-by-Step Local Dining Process</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        When you arrive, skip the outdoor street stalls and walk directly into the modern main building. Wander through the center aisles of the first floor. When you see a vendor you like, ask for the price of king crab (Dae-gae) or sea bream (Dom) per kilogram. Once you agree, they will place it in a basket and weigh it. **Check the scale yourself to make sure it reads zero before they weigh it.** After paying, they will send you to a specific restaurant stall on the second floor, where they will steam the crab or slice the fish for you.
      </p>

      <div class="travel-tip-card">
        <p>
          💡 <strong>How to Dine Without the Stress:</strong> If selecting and bargaining in a loud market feels too stressful, our private concierge service can pre-arrange a trusted vendor and a specific table on the second floor, locking in the local market price in advance so you can just arrive, sit down, and enjoy the feast!
        </p>
      </div>
    `
  }
];

/**
 * Returns only posts that should be visible today.
 * Filters out any posts whose publishedAt date is in the future.
 */
export function getPublishedPosts(): BlogPost[] {
  const todayStr = new Date().toISOString().split('T')[0];
  // Filter out future posts
  return BLOG_POSTS.filter(post => post.publishedAt <= todayStr)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

/**
 * Retrieves a post by its slug.
 * Ensures the post is published before returning it.
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return undefined;

  const todayStr = new Date().toISOString().split('T')[0];
  // Only allow viewing if published
  if (post.publishedAt > todayStr) return undefined;

  return post;
}
