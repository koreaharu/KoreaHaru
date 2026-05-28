import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function Hero() {
  const t = useTranslations('home.hero');

  return (
    <section className="relative h-[55vh] md:h-[88vh] min-h-[380px] md:min-h-[450px] w-full overflow-hidden bg-ink-900">
      <Image
        src="/images/home/hero.png"
        alt="Night view of Busan from Hwangnyeongsan"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/50 via-ink-900/20 to-ink-900/80" />

      <Container className="relative flex h-full flex-col items-center justify-center text-center text-cream-50">
        <p className="eyebrow text-cream-50/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">{t('eyebrow')}</p>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl font-light leading-tight text-cream-50 drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] md:text-7xl">
          {t('title')}
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-cream-50/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] font-medium md:text-lg">
          {t('subtitle')}
        </p>
        
        {/* Hero buttons - hidden on mobile to avoid CTA redundancy */}
        <div className="mt-10 hidden sm:flex flex-col gap-3 sm:flex-row">
          <Button href="/booking" variant="primary" size="lg">
            {t('cta_primary')}
          </Button>
          <Button 
            href="/services" 
            className="bg-transparent text-cream-50 hover:bg-cream-50 hover:text-ink-900 border border-cream-50/70 hover:border-cream-50 transition-colors" 
            size="lg"
          >
            {t('cta_secondary')}
          </Button>
        </div>
      </Container>
    </section>
  );
}
