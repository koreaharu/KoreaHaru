import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const ITEMS = [
  { key: 'concierge', numeral: '01', icon: '/icons/concierge.svg' },
  { key: 'drivers', numeral: '02', icon: '/icons/chauffeur.svg' },
  { key: 'languages', numeral: '03', icon: '🌏' },
  { key: 'pricing', numeral: '04', icon: '💎' },
] as const;

export function WhyKoreaHaru() {
  const t = useTranslations('home.why');

  return (
    <Section tone="default">
      <Container>
        <header className="mb-20 max-w-2xl">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 className="mt-4 text-4xl font-light md:text-5xl">{t('title')}</h2>
        </header>

        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <div key={item.key} className="flex flex-col">
              <div className="h-12 w-12">
                {item.icon.startsWith('/') ? (
                  <Image
                    src={item.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="h-full w-full"
                  />
                ) : (
                  <span className="text-4xl">{item.icon}</span>
                )}
              </div>
              <span className="mt-6 font-serif text-4xl font-light text-gold-500">{item.numeral}</span>
              <h3 className="mt-4 font-sans text-lg font-semibold text-ink-900">
                {t(`items.${item.key}_title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                {t(`items.${item.key}_desc`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
