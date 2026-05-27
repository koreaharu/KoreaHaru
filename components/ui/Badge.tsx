import { cn } from '@/lib/cn';

type Tone = 'gold' | 'rust' | 'sage' | 'navy' | 'neutral';

const toneClasses: Record<Tone, string> = {
  gold: 'bg-gold-500 text-cream-50',
  rust: 'bg-accent-rust text-cream-50',
  sage: 'bg-accent-sage text-cream-50',
  navy: 'bg-accent-navy text-cream-50',
  neutral: 'bg-cream-200 text-ink-800',
};

interface BadgeProps {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}

export function Badge({ children, tone = 'gold', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 text-[11px] font-sans font-semibold tracking-[0.15em] uppercase',
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
