import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Divider } from '@/components/ui/Divider';

export function SiteFooter() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-cream-100">
      <Container>
        <div className="grid grid-cols-2 gap-12 py-20 md:grid-cols-5">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="font-serif text-3xl font-light text-cream-50">
              KoreaHaru
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-100/70">
              {t('tagline')}
            </p>

            <form className="mt-8">
              <label className="eyebrow block text-cream-100/60">{t('newsletter_title')}</label>
              <p className="mt-2 max-w-xs text-sm text-cream-100/60">{t('newsletter_subtitle')}</p>
              <div className="mt-4 flex max-w-sm border border-cream-100/20">
                <input
                  type="email"
                  placeholder={t('newsletter_placeholder')}
                  className="flex-1 bg-transparent px-4 py-3 text-sm text-cream-50 placeholder-cream-100/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-gold-500 px-4 py-3 text-xs uppercase tracking-[0.15em] text-cream-50 transition-colors hover:bg-gold-600"
                >
                  {t('newsletter_cta')}
                </button>
              </div>
            </form>
          </div>

          <FooterColumn title={t('explore')}>
            <FooterLink href="/services">{t('services_link')}</FooterLink>
            <FooterLink href="/destinations">{t('destinations_link')}</FooterLink>
            <FooterLink href="/blog">{t('journal_link')}</FooterLink>
            <FooterLink href="/itineraries">{t('itineraries')}</FooterLink>
          </FooterColumn>

          <FooterColumn title={t('company')}>
            <FooterLink href="/about">{t('about')}</FooterLink>
            <FooterLink href="/trust">{t('trust')}</FooterLink>
            <FooterLink href="/contact">{t('contact')}</FooterLink>
          </FooterColumn>

          <FooterColumn title={t('support')}>
            <FooterLink href="/faq">{t('faq')}</FooterLink>
            <FooterLink href="/contact">{t('concierge')}</FooterLink>
            <FooterLink href="/legal/refund-policy">{t('refund')}</FooterLink>
          </FooterColumn>
        </div>

        <Divider tone="ink" className="bg-cream-100/10" />

        <div className="flex flex-col gap-4 py-8 text-xs text-cream-100/50 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-6">
            <span>© {year} KoreaHaru. {t('rights')}</span>
            <span>{t('license')}</span>
          </div>
          <div className="flex gap-6">
            <Link href="/legal/terms" className="hover:text-cream-50">
              {t('terms')}
            </Link>
            <Link href="/legal/privacy" className="hover:text-cream-50">
              {t('privacy')}
            </Link>
            <Link href="/legal/cookies" className="hover:text-cream-50">
              {t('cookies')}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="eyebrow text-cream-100/60">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-cream-100/80 transition-colors hover:text-gold-400">
        {children}
      </Link>
    </li>
  );
}
