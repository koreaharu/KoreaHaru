import { cn } from '@/lib/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'article';
}

export function Card({ children, className, as: Tag = 'div' }: CardProps) {
  return (
    <Tag
      className={cn(
        'group flex flex-col overflow-hidden border border-cream-300 bg-cream-50 transition-colors duration-300 hover:border-gold-500',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
