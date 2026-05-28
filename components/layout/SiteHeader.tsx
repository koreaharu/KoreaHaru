import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function SiteHeader() {
  const t = useTranslations('nav');

  const links = [
    { href: '/services', label: t('services') },
    { href: '/destinations', label: t('destinations') },
    { href: '/blog', label: t('journal') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-serif text-2xl font-light tracking-wide text-ink-900">
              KoreaHaru
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.25em] text-gold-700 md:inline">
              Korea
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-700 transition-colors hover:text-gold-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button href="/booking" variant="primary" size="sm">
              {t('book')}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
