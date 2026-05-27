import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const REVIEWS = [
  {
    key: 'tw',
    flag: 'tw',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=yi-ling&scale=80',
  },
  {
    key: 'jp',
    flag: 'jp',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=hiroshi&scale=80',
  },
  {
    key: 'us',
    flag: 'us',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&scale=80',
  },
] as const;

export function Testimonials() {
  const t = useTranslations('home.testimonials');

  return (
    <Section tone="cream">
      <Container>
        <header className="mb-16 max-w-3xl">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 className="mt-4 text-4xl font-light md:text-5xl">{t('title')}</h2>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <article
              key={review.key}
              className="flex flex-col border border-cream-300 bg-cream-50 p-8"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-cream-200">
                  <Image
                    src={review.avatar}
                    alt={t(`items.${review.key}_name`)}
                    fill
                    className="object-cover"
                  />
                </div>
                <FlagBadge code={review.flag} />
                <Stars />
              </div>
              <blockquote className="mt-6 flex-1 font-serif text-xl font-light leading-snug text-ink-800">
                &ldquo;{t(`items.${review.key}_text`)}&rdquo;
              </blockquote>
              <footer className="mt-6 border-t border-cream-300 pt-4 text-sm text-ink-600">
                <span className="font-semibold text-ink-800">{t(`items.${review.key}_name`)}</span>
                <span className="ml-2 text-ink-500">· {t(`items.${review.key}_country`)}</span>
              </footer>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FlagBadge({ code }: { code: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-6 w-9 items-center justify-center bg-cream-200 text-[10px] font-bold uppercase tracking-wider text-ink-700"
    >
      {code}
    </span>
  );
}

function Stars() {
  return (
    <span className="text-sm tracking-[0.3em] text-gold-500" aria-label="5 out of 5 stars">
      ★★★★★
    </span>
  );
}
