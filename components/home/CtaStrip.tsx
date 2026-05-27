import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { KakaoIcon, LineIcon, WhatsAppIcon, WeChatIcon, TelegramIcon } from '@/components/ui/MessengerIcons';

const MESSENGERS = [
  { key: 'kakao', bg: '#FAE100', fg: '#3C1E1E', href: 'https://pf.kakao.com/_koreaharu/chat', Icon: KakaoIcon },
  { key: 'line', bg: '#06C755', fg: '#ffffff', href: 'https://line.me/R/ti/p/@koreaharu', Icon: LineIcon },
  { key: 'whatsapp', bg: '#25D366', fg: '#ffffff', href: 'https://wa.me/821000000000', Icon: WhatsAppIcon },
  { key: 'wechat', bg: '#07C160', fg: '#ffffff', href: '#', Icon: WeChatIcon },
  { key: 'telegram', bg: '#229ED9', fg: '#ffffff', href: 'https://t.me/koreaharu', Icon: TelegramIcon },
] as const;

export function CtaStrip() {
  const t = useTranslations('home.cta_strip');
  const tm = useTranslations('messengers');

  return (
    <section className="bg-ink-900 py-24 text-cream-50">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-cream-50/70">{t('eyebrow')}</p>
            <h2 className="mt-4 font-serif text-4xl font-light text-cream-50 md:text-5xl">
              {t('title')}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream-100/80">
              {t('subtitle')}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/booking" variant="primary" size="lg">
                {t('cta_primary')}
              </Button>
              <Button href="/contact" variant="inverse" size="lg">
                {t('cta_secondary')}
              </Button>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <p className="eyebrow text-cream-50/70">{tm('title')}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {MESSENGERS.map((m) => (
                <a
                  key={m.key}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tm(m.key)}
                  style={{ backgroundColor: m.bg, color: m.fg }}
                  className="flex h-14 w-14 items-center justify-center transition-transform hover:-translate-y-0.5"
                >
                  <m.Icon className="h-7 w-7" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
