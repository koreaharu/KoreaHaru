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
    title: "The Hidden Alleys of Yeongdo: Busan's Ultimate Coastal Escape",
    excerpt: "A quiet route along Yeongdo's steep cliffs, removed from crowded beaches. Discover a peaceful neighborhood, traditional cliffside rafter houses, and deep harbor view coffee spots.",
    category: "Guides",
    publishedAt: "2026-05-27", // Published today
    coverImage: "/images/blog/busan_yeongdo_sunset.png",
    author: "KoreaHaru Concierge",
    readingTime: "8 min",
    seoTitle: "The Hidden Alleys of Yeongdo: Busan's Ultimate Coastal Escape",
    seoDesc: "A quiet route along Yeongdo's steep cliffs, removed from crowded beaches. Discover a peaceful neighborhood, traditional cliffside rafter houses, and deep harbor view coffee spots.",
    content: `
      <p class="lead font-serif text-lg text-ink-700 leading-relaxed mb-6 font-light">
        Busan is celebrated globally for the golden sands of Haeundae and the high-rise glitz of Gwangalli. Yet, if you cross the bridge heading south, the skyline drops and the pace changes. You enter Yeongdo—an island of rugged ocean-facing cliffs, industrial shipping yards, and a neighborhood clinging tenaciously to the edge of the sea.
      </p>
      
      <p class="text-ink-800 leading-relaxed mb-6">
        For years, Yeongdo was a gritty enclave of shipping repair shops and local fishermen. But in recent years, a quiet revival has taken root. Artists, independent coffee roasters, and local families have breathed life into the ancient alleys without losing the island's authentic character. It has become Busan's ultimate coastal escape for slow travelers who crave solitude and local authenticity.
      </p>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">The Walk: Jeoryeong Coastal Trail to Huinnyeoul</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        The best way to experience Yeongdo is on foot. Start your morning at the **Jeoryeong Coastal Trail**, a path carved directly into the rocky volcanic cliffs of the southern shore. Here, the ocean waves smash directly into the stones beneath you, and the salty breeze is thick and cooling.
      </p>
      
      <blockquote class="border-l-2 border-gold-500 pl-6 my-8 italic text-ink-600 font-serif font-light text-lg">
        "Unlike the pristine, manicured boardwalks of modern resorts, Jeoryeong feels raw, real, and intimately connected to the powerful maritime heritage of southern Korea."
      </blockquote>

      <p class="text-ink-800 leading-relaxed mb-6">
        As you ascend the steep concrete stairs, you will find yourself in **Huinnyeoul Culture Village**. Built originally by refugees during the Korean War, the village is a maze of narrow, winding walkways perched hundreds of feet above the sea. The houses are painted in light pastels, and the rafter rafters frames frame beautiful views of the shipping vessels anchored in the harbor below.
      </p>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">Where to Rest: Quiet Harbor Coffee Spots</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        The climb through the alleys will test your stamina. Thankfully, Yeongdo has quietly become one of the premier specialty coffee hubs in Korea. Avoid the large commercial coffee houses and seek out the tiny counters hidden inside converted residential brick homes.
      </p>
      
      <ul class="list-disc pl-6 mb-6 space-y-3 text-ink-800">
        <li><strong>Sinki Cabin:</strong> Tucked deep into the mountain forest with floor-to-ceiling glass looking down over the harbor lights. Famous for their slow-drip single origin brews.</li>
        <li><strong>Huinnyeoul Coffee Shop:</strong> A cozy three-seat counter run by a local grandmother, serving sweet Korean iced coffee and warm, freshly toasted sweet bean cakes.</li>
      </ul>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">Concierge Recommendations for the Discerning Guest</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        To experience Yeongdo without the weekend crowds, we recommend arriving by **9:00 AM on a Tuesday or Wednesday**. Our private chauffeurs can drop you at the entrance of the coastal trail and meet you at the top of the village three hours later, saving you from navigating the extremely steep residential parking. 
      </p>
      
      <p class="text-ink-800 leading-relaxed mb-6">
        After your walk, ask your driver to take you to the nearby **Taejongdae Park** lighthouse for a quiet, gourmet lunch featuring freshly caught ocean delicacies prepared directly on the seaside rocks by local culinary matriarchs.
      </p>
    `
  },
  {
    slug: 'busan-local-millmyeon',
    title: "A Gastronomer's Guide to Busan's Best Hand-pulled Millmyeon",
    excerpt: "Forget the heavy tourist-trap restaurants. Here is where the absolute local culinary masters of cold wheat noodles spend their early mornings in Busan.",
    category: "Food",
    publishedAt: "2026-06-03", // Scheduled for next week (automatically hidden until this date)
    coverImage: "/images/blog/busan_local_noodle.png",
    author: "KoreaHaru Concierge",
    readingTime: "5 min",
    seoTitle: "A Gastronomer's Guide to Busan's Best Hand-pulled Millmyeon",
    seoDesc: "Forget the heavy tourist-trap restaurants. Here is where the absolute local culinary masters of cold wheat noodles spend their early mornings in Busan.",
    content: `
      <p class="lead font-serif text-lg text-ink-700 leading-relaxed mb-6 font-light">
        In the scorching summer heat of Busan, there is only one dish that truly unites the city: Millmyeon (밀면). Cold, savory, slightly sweet, and fiercely spicy, these wheat noodles are more than just a meal—they are a piece of historical resilience served in a chilled brass bowl.
      </p>

      <p class="text-ink-800 leading-relaxed mb-6">
        Unlike Naengmyeon, which uses buckwheat, Millmyeon is made from wheat flour. During the Korean War, refugees fleeing south to Busan could not find buckwheat, so they used the wheat flour provided by humanitarian relief organizations to replicate their beloved home dishes. The result was a lighter, chewier noodle that perfectly matched the coastal palate.
      </p>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">Vetted: The Three Culinary Dynasties</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        While hundreds of shops claim to serve authentic Millmyeon, the discerning gourmet should focus on the generational masters who slow-cook their broth for days using traditional medicinal herbs and beef bones.
      </p>

      <div class="my-8 border-l-4 border-gold-500 pl-6 space-y-4">
        <h3 class="font-serif text-lg font-semibold text-ink-900">1. Choryang Milmyeon (조량밀면)</h3>
        <p class="text-xs text-ink-500 uppercase tracking-widest">Location: Choryang-dong, near Busan Station</p>
        <p class="text-sm text-ink-700 leading-relaxed">Famous for their sweet beef broth simmered with cinnamon and licorice root. Their hand-pulled noodles have an extraordinary bite, paired perfectly with their famous steamed pork dumplings (Mandu).</p>
      </div>

      <div class="my-8 border-l-4 border-gold-500 pl-6 space-y-4">
        <h3 class="font-serif text-lg font-semibold text-ink-900">2. Gaegeum Milmyeon (개금밀면)</h3>
        <p class="text-xs text-ink-500 uppercase tracking-widest">Location: Gaegeum Alley Market</p>
        <p class="text-sm text-ink-700 leading-relaxed">Serving since 1966, this institution is famous for its intensely spicy red pepper sauce (Yangnyeom) and deep, concentrated chicken-and-beef broth. Best for foodies seeking authentic heat.</p>
      </div>

      <h2 class="font-serif text-2xl font-light text-ink-900 mt-12 mb-4">How to Eat Like a Busan Local</h2>
      <p class="text-ink-800 leading-relaxed mb-6">
        When your bowl arrives, do not immediately add vinegar or mustard. Taste the pure broth first. Then, use the kitchen scissors provided to cut the noodles once or twice (never cut too many times, or you destroy the long-lived tradition!). Mix the red sauce thoroughly, add a splash of vinegar for acidity, and enjoy the cooling, chewy bite.
      </p>

      <p class="text-ink-800 leading-relaxed mb-6">
        Our **KoreaHaru Concierge** coordinates private visits to these locations, securing reservations before the heavy lunchtime lines begin, ensuring our VIP guests receive authentic, quiet hospitality.
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
