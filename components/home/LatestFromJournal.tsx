import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const POSTS = [
  {
    key: 'post_1',
    slug: 'three-days-in-busan',
    image:
      'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1200&q=80&auto=format&fit=crop',
  },
  {
    key: 'post_2',
    slug: 'best-raw-fish-tongyeong',
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80&auto=format&fit=crop',
  },
  {
    key: 'post_3',
    slug: 'dermatology-clinics-busan',
    image:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80&auto=format&fit=crop',
  },
] as const;

export function LatestFromJournal() {
  const t = useTranslations('home.journal');

  return (
    <Section tone="default">
      <Container>
        <header className="mb-16 max-w-2xl">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 className="mt-4 text-4xl font-light md:text-5xl">{t('title')}</h2>
        </header>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {POSTS.map((post) => (
            <Link
              key={post.key}
              href={`/blog/${post.slug}`}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={post.image}
                  alt={t(`posts.${post.key}_title`)}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-700">
                  {t(`posts.${post.key}_category`)}
                </span>
                <span className="text-xs text-ink-400">{t(`posts.${post.key}_read`)}</span>
              </div>
              <h3 className="mt-3 font-serif text-2xl font-normal leading-snug text-ink-800 transition-colors group-hover:text-gold-700">
                {t(`posts.${post.key}_title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                {t(`posts.${post.key}_excerpt`)}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button href="/blog" variant="secondary" size="md">
            {t('view_all')}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
