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
    title: "[Busan Diary] Lost in the Pastel Alleys of Yeongdo (My New Favorite Escape!)",
    excerpt: "Haeundae is nice, but Yeongdo stole my heart. Here’s a personal diary of my quiet walk along rugged ocean cliffs, pastel houses, and the absolute best slow-drip coffee with harbor views.",
    category: "Travel Log",
    publishedAt: "2026-05-27", // Published today
    coverImage: "/images/blog/busan_yeongdo_sunset_clean.png",
    author: "Elena (KoreaHaru Guest)",
    readingTime: "8 min",
    seoTitle: "Busan Diary: Exploring the Hidden Alleys of Yeongdo",
    seoDesc: "My personal travel log of Yeongdo island in Busan. Discover steep cliffside walks, Huinnyeoul pastel alleys, cozy forest cafes, and rockside fresh seafood.",
    content: `
      <p class="lead font-serif text-lg text-ink-700 leading-relaxed mb-6 font-light">
        Honestly, when everyone told me to visit Haeundae and Gwangalli in Busan, I was a bit hesitant. I wanted something raw, quiet, and away from the massive crowds. So, I grabbed my camera, crossed the harbor bridge heading south, and spent a day in Yeongdo. It was, without a doubt, the best decision of my entire Korea trip.
      </p>
      
      <p class="text-ink-800 leading-relaxed mb-6">
        Yeongdo used to be a gritty enclave of shipping repair yards, but recently, it has quieted into this beautifully slow, artistic island. Artists and independent coffee roasters have breathed life into the ancient alleys while keeping the island's authentic, rugged character intact. It feels like a real, living neighborhood, and it completely stole my heart.
      </p>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">Huffing and Puffing: The Jeoryeong Coastal Trail</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        I started my morning at the **Jeoryeong Coastal Trail**, which is basically a path carved directly into the rugged volcanic rocks. Oh my god, the waves crash *right* next to your feet, and the salty sea breeze hits your face so intensely that all your travel stress just melts away. 
      </p>
      
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
      
      <ul class="list-disc pl-6 mb-6 space-y-3 text-ink-800">
        <li><strong>Sinki Cabin:</strong> Tucked away in the quiet woods, with hand-poured coffee that will blow your mind and an insane panoramic harbor view.</li>
        <li><strong>Huinnyeoul Tea Shop:</strong> A tiny, three-seat counter run by a sweet local grandmother serving iced coffee and warm, freshly toasted sweet bean cakes.</li>
      </ul>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">My Golden Tip for Travelers</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        If you want to do this walk, **arrive by 9:00 AM on a weekday**. The weekend crowds can get hectic. Also, the residential streets are insanely steep and parking is a total nightmare. 
      </p>
      
      <p class="text-ink-800 leading-relaxed mb-6">
        I actually booked a private driver through **KoreaHaru** for the day, and it was a total lifesaver. My driver, Mr. Kim, dropped me off directly at the coastal trail entrance and was waiting for me at the top of the village three hours later, saving me from a grueling hike back down the hill! 
      </p>
      
      <p class="text-ink-800 leading-relaxed mb-6">
        After the walk, Mr. Kim drove me over to the **Taejongdae Park** lighthouse, where we had the freshest sea squirt and raw abalone lunch, prepared right on the seaside rocks by local grandmas (Ajummas). Dipping fresh seafood in spicy gochujang while the ocean spray literally splashes your face... I'll never forget it. If you want a real, soulful taste of Busan, Yeongdo is the absolute place to be!
      </p>
    `
  },
  {
    slug: 'busan-local-millmyeon',
    title: "[Busan Eat-Log] Spicy, Chewy, & Ice-Cold: My Quest for the Ultimate Local Millmyeon!",
    excerpt: "Skip the heavy tourist-trap restaurants. Here is my personal diary of hunting down the absolute best hand-pulled cold wheat noodles in Busan, served in chilled brass bowls.",
    category: "Food Log",
    publishedAt: "2026-06-03", // Scheduled for next week
    coverImage: "/images/blog/busan_local_noodle.png",
    author: "Elena (KoreaHaru Guest)",
    readingTime: "5 min",
    seoTitle: "Busan Eat-Log: Hunting the Best Local Millmyeon Noodles",
    seoDesc: "A food blogger's diary of hunting for the best cold wheat Millmyeon noodles in Busan. Vetted local spots, history, and tips on how to eat like a local.",
    content: `
      <p class="lead font-serif text-lg text-ink-700 leading-relaxed mb-6 font-light">
        It was 32 degrees in Busan, and I was literally melting on the asphalt. I texted my **KoreaHaru concierge** asking for the absolute best local cold noodles—not the heavy, overpriced tourist traps you see all over Instagram, but the real deals where local masters spend their early mornings. And boy, did they deliver.
      </p>

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

      <div class="my-8 border-l-4 border-gold-500 pl-6 space-y-4">
        <h3 class="font-serif text-lg font-semibold text-ink-900">2. Gaegeum Milmyeon (개금밀면)</h3>
        <p class="text-xs text-ink-500 uppercase tracking-widest">Hidden inside Gaegeum Alley Market</p>
        <p class="text-sm text-ink-700 leading-relaxed">Serving hungry locals since 1966! If you love spicy food, this is your holy grail. The red pepper sauce (Yangnyeom) has an intense, fiery kick that makes your tongue tingle, but it is so addictive you literally cannot stop eating. The chewiness of the noodles is just unreal.</p>
      </div>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">How to Eat Like a Genuine Local</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        A sweet local Ajumma (grandmother) sitting next to me saw me struggling and gave me a massive tip: **do NOT cut the noodles too many times with the scissors!** Just once or twice is more than enough to preserve the texture. 
      </p>

      <p class="text-ink-800 leading-relaxed mb-6">
        Taste the pure, cold broth first before adding anything. Then, mix the red sauce thoroughly, add a splash of vinegar for acidity, and enjoy the cooling, chewy bite. It is the ultimate antidote to the Korean summer heat. 
      </p>

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
