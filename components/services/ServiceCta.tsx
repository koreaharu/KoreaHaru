import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

interface ServiceCtaProps {
  title: string;
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaPrimaryHref?: string;
  ctaSecondaryHref?: string;
}

export function ServiceCta({
  title,
  body,
  ctaPrimary,
  ctaSecondary,
  ctaPrimaryHref = '/booking',
  ctaSecondaryHref = '/contact',
}: ServiceCtaProps) {
  return (
    <section className="bg-ink-900 py-24 text-cream-50">
      <Container>
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl font-light text-cream-50 md:text-4xl">{title}</h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/80">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <Button href={ctaPrimaryHref} variant="primary" size="lg">
              {ctaPrimary}
            </Button>
            <Button href={ctaSecondaryHref} variant="inverse" size="lg">
              {ctaSecondary}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
