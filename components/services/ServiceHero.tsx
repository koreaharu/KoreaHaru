import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaPrimaryHref?: string;
  ctaSecondaryHref?: string;
}

export function ServiceHero({
  eyebrow,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  ctaPrimaryHref = '/booking',
  ctaSecondaryHref = '/contact',
}: ServiceHeroProps) {
  return (
    <section className="bg-cream-100 pb-20 pt-28 md:pb-28 md:pt-36">
      <Container>
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-6 font-serif text-5xl font-light leading-[1.05] text-ink-900 md:text-6xl">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-600">{subtitle}</p>
          <div className="mt-12 flex flex-wrap gap-3">
            <Button href={ctaPrimaryHref} variant="primary" size="lg">
              {ctaPrimary}
            </Button>
            <Button href={ctaSecondaryHref} variant="secondary" size="lg">
              {ctaSecondary}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
