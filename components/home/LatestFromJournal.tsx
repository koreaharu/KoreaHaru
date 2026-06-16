import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { getPublishedPosts } from '@/lib/blog-data';

export function LatestFromJournal() {
  const t = useTranslations('home.journal');
  const posts = getPublishedPosts().slice(0, 3);

  return (
    <Section tone="default">
      <Container>
        <header className="mb-16 max-w-2xl">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 className="mt-4 text-4xl font-light md:text-5xl">{t('title')}</h2>
        </header>

        {posts.length === 0 ? (
          <div className="text-center py-10 border border-dashed border-cream-300 bg-white">
            <p className="font-serif text-sm text-ink-600">No recent journal entries found.</p>
          </div>
        ) : (
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none md:grid md:grid-cols-3 md:gap-10 md:pb-0 md:overflow-visible">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col shrink-0 w-[270px] sm:w-[310px] snap-center md:w-auto md:shrink text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-cream-200/20 shadow-sm">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-700 font-semibold">
                    {post.category}
                  </span>
                  <span className="text-xs text-ink-400">{post.readingTime} read</span>
                </div>
                <h3 className="mt-3 font-serif text-2xl font-normal leading-snug text-ink-800 transition-colors group-hover:text-gold-700 line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600 line-clamp-3 font-light">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-16 flex justify-center">
          <Button href="/blog" variant="secondary" size="md">
            {t('view_all')}
          </Button>
        </div>
      </Container>
    </Section>
  );
}

