import { cn } from '@/lib/cn';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  tone?: 'default' | 'cream' | 'dark';
  id?: string;
}

const toneClasses: Record<NonNullable<SectionProps['tone']>, string> = {
  default: 'bg-cream-50',
  cream: 'bg-cream-100',
  dark: 'bg-ink-900 text-cream-50',
};

export function Section({ children, className, tone = 'default', id }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-28', toneClasses[tone], className)}>
      {children}
    </section>
  );
}
