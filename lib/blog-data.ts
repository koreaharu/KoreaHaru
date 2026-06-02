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
    title: "[Busan Diary] Is Yeongdo Worth Visiting? My Honest Review & Hidden Pastel Alleys",
    excerpt: "Everyone goes to Haeundae, but I wanted something real. Here is my completely honest review of Yeongdo island in Busan, including its raw ocean cliff paths, cozy cabin cafes, and whether it's actually worth adding to your limited South Korea trip.",
    category: "Honest Review",
    publishedAt: "2026-05-27", // Published today
    coverImage: "/images/blog/busan_yeongdo_sunset_clean.png",
    author: "Elena (KoreaHaru Guest)",
    readingTime: "8 min",
    seoTitle: "Busan Diary: Is Yeongdo Worth Visiting? Honest Travel Review",
    seoDesc: "An authentic, honest travel review of Yeongdo Island in Busan. Discover steep cliffside walks, Huinnyeoul pastel alleys, hidden forest cafes, and crucial travel realities.",
    content: `
      <p class="lead font-serif text-lg text-ink-700 leading-relaxed mb-6 font-light">
        Honestly, when everyone told me to just stay in Haeundae or Gwangalli during my Busan trip, I was hesitant. I wanted something raw, quiet, and intimately connected to the ocean. So, I grabbed my camera, crossed the harbor bridge heading south, and spent a day on the volcanic island of Yeongdo. It was, without a doubt, the most soulful decision of my entire South Korea journey.
      </p>

      <div class="verdict-card">
        <div class="verdict-header">
          <h3 class="verdict-title">The Yeongdo Verdict</h3>
          <span class="verdict-rating">★ 4.8 / 5.0</span>
        </div>
        <p class="verdict-content">
          <strong>Absolutely a must-visit</strong> if you want to experience Busan's true, rugged maritime character away from the polished skyscraper tourist zones. It offers breathtaking ocean-edge walks and a world-class cafe scene. However, the terrain is incredibly steep and transit can be exhausting if you do not plan your access points carefully.
        </p>
      </div>

      <div class="pros-cons-grid">
        <div class="pros-card">
          <h4 class="card-title">What I Absolutely Loved</h4>
          <ul class="card-list">
            <li><strong>Jeoryeong Coastal Walk:</strong> Volcanic cliffside pathways where waves crash literally inches from your feet.</li>
            <li><strong>Pastel Culture Alleys:</strong> The whimsical, pastel-colored houses of Huinnyeoul Culture Village clinging to the cliffs.</li>
            <li><strong>High-End Forest Cafes:</strong> Architectural coffee roasters hidden in pine forests with sweeping views of massive container ships.</li>
          </ul>
        </div>
        <div class="cons-card">
          <h4 class="card-title">What to Watch Out For</h4>
          <ul class="card-list">
            <li><strong>Insanely Steep Slopes:</strong> Severe, narrow residential stairways that will push your legs to the absolute limit.</li>
            <li><strong>Difficult Transit & Parking:</strong> Narrow one-way roads and lack of parking make taxi/bus navigation tricky.</li>
            <li><strong>Extreme Ocean Winds:</strong> Being an exposed island, it can get very windy and chilly, even on sunny spring/autumn days.</li>
          </ul>
        </div>
      </div>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">Huffing and Puffing: The Jeoryeong Coastal Trail</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        I started my morning at the **Jeoryeong Coastal Trail**, which is basically a path carved directly into the rugged volcanic rocks. Oh my god, the waves crash *right* next to your feet, and the salty sea breeze hits your face so intensely that all your travel stress just melts away. 
      </p>

      <div class="my-8 overflow-hidden rounded-sm border border-cream-200/60 shadow-sm bg-white">
        <img src="/images/blog/yeongdo_coastal_walk.png" alt="Huinnyeoul Culture Village Cliffside Walk" class="w-full object-cover aspect-[16/10] md:aspect-[21/10] transition-transform duration-500 hover:scale-[1.02]" />
        <p class="text-[11px] text-ink-500 italic p-3 text-center bg-cream-50/30 m-0 border-t border-cream-100/60 font-light">
          The stunning pastel alleys of Huinnyeoul Culture Village, clinging elegantly to the volcanic cliffs of Yeongdo.
        </p>
      </div>
      
      <blockquote class="border-l-2 border-gold-500 pl-6 my-8 italic text-ink-600 font-serif font-light text-lg">
        "Unlike the manicured, sterile boardwalks of high-end resorts, Jeoryeong feels beautifully wild, real, and intimately connected to the sea."
      </blockquote>

      <p class="text-ink-800 leading-relaxed mb-6">
        Be warned, though—those concrete stairs to go up are no joke! I was huffing and puffing by the time I reached the top, but the moment I stepped into **Huinnyeoul Culture Village**, it was completely worth it. It’s this crazy, beautiful maze of tiny pastel blue, yellow, and pink houses clinging to the cliffs. I found a stray orange cat napping on a blue windowsill, sat down on the path, and just watched the huge cargo ships anchored in the harbor for like twenty minutes.
      </p>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">Sore Legs & A Hidden Wooden Cabin Cafe</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        By noon, my legs were absolutely screaming for a break. I wanted to avoid the crowded commercial cafes, so I headed deep into the mountain woods to find a place called **Sinki Cabin**. It literally looks like a cozy, secret wooden treehouse. I ordered a slow-drip single origin brew, sat by the floor-to-ceiling glass window, and just watched the harbor lights start to flicker below. Pure, absolute heaven.
      </p>

      <div class="my-8 overflow-hidden rounded-sm border border-cream-200/60 shadow-sm bg-white">
        <img src="/images/blog/yeongdo_cabin_cafe.png" alt="Sinki Cabin Cafe Interior" class="w-full object-cover aspect-[16/10] md:aspect-[21/10] transition-transform duration-500 hover:scale-[1.02]" />
        <p class="text-[11px] text-ink-500 italic p-3 text-center bg-cream-50/30 m-0 border-t border-cream-100/60 font-light">
          Cozy single-origin hand drip coffee with floor-to-ceiling glass panoramic harbor views inside Sinki Cabin.
        </p>
      </div>

      <div class="travel-tip-card">
        <p>
          💡 <strong>Elena's Golden Tip:</strong> If you want to do this walk, arrive by 9:00 AM on a weekday to avoid the photo-queue crowds. The residential streets are extremely steep and parking is a total nightmare. I booked a private car through <strong>KoreaHaru</strong> for the day, and it was a complete lifesaver. My driver, Mr. Kim, dropped me off directly at the coastal trail entrance and was waiting for me at the top of the village three hours later, saving my legs from a grueling hike back down the hill!
        </p>
      </div>

      <p class="text-ink-800 leading-relaxed mb-6">
        After the walk, Mr. Kim drove me over to the **Taejongdae Park** lighthouse, where we had the freshest sea squirt and raw abalone lunch, prepared right on the seaside rocks by local grandmas (Ajummas). Dipping fresh seafood in spicy gochujang while the ocean spray literally splashes your face... I'll never forget it. If you want a real, soulful taste of Busan, Yeongdo is the absolute place to be!
      </p>
    `
  },
  {
    slug: 'busan-local-millmyeon',
    title: "[Busan Eat-Log] Chilled Wheat Noodles (Millmyeon): Is it Actually Worth the Queue?",
    excerpt: "Skip the Instagram tourist traps. Here is my honest, vetted review of Busan's legendary cold wheat noodles, including my visits to two historic, generational noodle dynasties and a local guide on how to eat like an authentic Busanite.",
    category: "Food Review",
    publishedAt: "2026-06-03", // Scheduled for next week
    coverImage: "/images/blog/busan_local_noodle.png",
    author: "Elena (KoreaHaru Guest)",
    readingTime: "5 min",
    seoTitle: "Busan Eat-Log: Is Millmyeon Chilled Noodles Worth the Hype?",
    seoDesc: "An honest food review of cold wheat Millmyeon noodles in Busan. Generational noodle dynasties, history, pros and cons, and tips on eating like a local.",
    content: `
      <p class="lead font-serif text-lg text-ink-700 leading-relaxed mb-6 font-light">
        It was 32 degrees in Busan, and I was literally melting on the asphalt. I texted my **KoreaHaru concierge** asking for the absolute best local cold noodles—not the heavy, overpriced tourist traps you see all over Instagram, but the real deals where local masters spend their early mornings. And boy, did they deliver.
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
        <img src="/images/blog/busan_local_noodle.png" alt="Busan Local Millmyeon Noodles" class="w-full object-cover aspect-[16/10] md:aspect-[21/10] transition-transform duration-500 hover:scale-[1.02]" />
        <p class="text-[11px] text-ink-500 italic p-3 text-center bg-cream-50/30 m-0 border-t border-cream-100/60 font-light">
          A traditional brass bowl of Busan Millmyeon, featuring wheat-flour cold noodles in an icy slow-cooked beef broth.
        </p>
      </div>

      <p class="text-ink-800 leading-relaxed mb-6">
        Before we dive into the food, here's a super cool piece of history: Millmyeon (밀면) was actually born during the Korean War! Refugees fleeing south to Busan couldn't find buckwheat for their traditional cold noodles, so they used the wheat flour provided by humanitarian relief organizations instead. It's literally history in a chilled brass bowl, which makes it taste ten times better.
      </p>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">Vetted: My Two Generational noodle Dynasties</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        While hundreds of shops in Busan claim to serve authentic Millmyeon, I focused on the generational houses that slow-cook their secret broths for days using traditional medicinal herbs and beef bones.
      </p>

      <div class="my-8 border-l-4 border-gold-500 pl-6 space-y-4">
        <h3 class="font-serif text-lg font-semibold text-ink-900">1. Choryang Milmyeon (초량밀면)</h3>
        <p class="text-xs text-ink-500 uppercase tracking-widest">Near Busan Station — Super Accessible</p>
        <p class="text-sm text-ink-700 leading-relaxed">The queue here can get crazy, but thanks to my driver, Mr. Kim, we slipped in just before the heavy lunch rush. The broth was out of this world—rich, cold, with a distinct hint of cinnamon and licorice. And the steamed pork dumplings (Mandu)? Oh my god. Juicy, warm, and massive. I easily ate four of them!</p>
      </div>

      <div class="my-8 overflow-hidden rounded-sm border border-cream-200/60 shadow-sm bg-white">
        <img src="/images/blog/busan_mandu_steamed.png" alt="Freshly Steamed Local Dumplings" class="w-full object-cover aspect-[16/10] md:aspect-[21/10] transition-transform duration-500 hover:scale-[1.02]" />
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
          💡 <strong>How to Eat Like a Genuine Local:</strong> A sweet local Ajumma (grandmother) sitting next to me saw me struggling and gave me a massive tip: do NOT cut the noodles too many times with the scissors! Just once or twice is more than enough to preserve the bouncy texture. Taste the pure, cold broth first before adding anything, then mix the red sauce thoroughly, add a splash of vinegar for acidity, and enjoy the cooling bite!
        </p>
      </div>

      <p class="text-ink-800 leading-relaxed mb-6">
        Our KoreaHaru concierge team coordinates private visits and secures tables at these institutions before the heavy queues start, so you can enjoy authentic local hospitality in peace and comfort. Trust me, you can't leave Busan without trying this!
      </p>
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
