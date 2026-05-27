import Link from 'next/link';
import Image from 'next/image';
import { getPublishedPosts } from '@/lib/blog-data';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'KoreaHaru Journal — Curation & Stories',
  description: 'Guides, local secrets, culinary explorations, and quiet recommendations across Busan, Gyeongnam, and Gyeongju.',
  path: '/blog',
});

export default function BlogIndexPage() {
  const posts = getPublishedPosts();

  return (
    <Section className="min-h-screen bg-cream-50/40 py-16 md:py-24">
      <Container>
        {/* Header */}
        <header className="mb-20 max-w-3xl">
          <p className="eyebrow text-gold-700 tracking-[0.2em] mb-3">KoreaHaru Journal</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-ink-900 leading-tight">
            Stories, Guides & Quiet Recommendations
          </h1>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-ink-600 font-light">
            We write for the traveler who seeks stillness, detail, and true regional heritage. 
            Discover quiet pathways, generational culinary masters, and deep cultural experiences across southern Korea.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-cream-300 bg-white">
            <p className="font-serif text-lg text-ink-600">The journal is being prepared. New stories are coming soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => {
              // Highlight the first post with a larger card layout
              const isFeatured = idx === 0;
              return (
                <article 
                  key={post.slug}
                  className={`group flex flex-col overflow-hidden border border-cream-200 bg-white shadow-sm hover:shadow-xl hover:border-gold-400/40 transition-all ${
                    isFeatured ? 'md:col-span-2 lg:col-span-2 flex-col lg:flex-row' : ''
                  }`}
                >
                  {/* Card Cover Image */}
                  <div className={`relative aspect-[16/10] overflow-hidden ${
                    isFeatured ? 'w-full lg:w-1/2 lg:aspect-auto min-h-[300px]' : 'w-full'
                  }`}>
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes={isFeatured ? '(min-width: 1024px) 40vw, 90vw' : '(min-width: 1024px) 30vw, 90vw'}
                      className="object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
                  </div>

                  {/* Card Info */}
                  <div className={`flex flex-col justify-between p-8 ${
                    isFeatured ? 'w-full lg:w-1/2' : 'w-full flex-1'
                  }`}>
                    <div>
                      <div className="flex items-center gap-3.5 mb-4">
                        <Badge tone="sage">{post.category}</Badge>
                        <span className="text-[10px] uppercase tracking-wider text-ink-400 font-semibold">{post.readingTime}</span>
                      </div>
                      
                      <Link href={`/blog/${post.slug}`} className="block group/link">
                        <h2 className="font-serif text-xl md:text-2xl font-light text-ink-900 group-hover/link:text-gold-700 transition-colors leading-snug mb-3">
                          {post.title}
                        </h2>
                      </Link>

                      <p className="text-sm leading-relaxed text-ink-600 line-clamp-3 mb-6 font-light">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-cream-100 mt-auto">
                      <span className="text-[10px] text-ink-400 uppercase tracking-widest font-bold">
                        {post.publishedAt}
                      </span>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-xs uppercase tracking-[0.15em] text-gold-700 font-bold hover:text-gold-800 transition-colors flex items-center gap-1"
                      >
                        Read Article →
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </Container>
    </Section>
  );
}
