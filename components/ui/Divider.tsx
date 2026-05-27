import { cn } from '@/lib/cn';

interface DividerProps {
  className?: string;
  tone?: 'cream' | 'gold' | 'ink';
}

const toneClasses: Record<NonNullable<DividerProps['tone']>, string> = {
  cream: 'bg-cream-300',
  gold: 'bg-gold-500',
  ink: 'bg-ink-700',
};

export function Divider({ className, tone = 'cream' }: DividerProps) {
  return <hr className={cn('h-px w-full border-0', toneClasses[tone], className)} />;
}
