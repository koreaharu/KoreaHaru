import Link from 'next/link';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'inverse';
type Size = 'sm' | 'md' | 'lg';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gold-500 text-cream-50 hover:bg-gold-600 active:bg-gold-700 border border-gold-500 hover:border-gold-600',
  secondary:
    'bg-transparent text-ink-800 border border-ink-800 hover:bg-ink-900 hover:text-cream-50',
  ghost: 'bg-transparent text-ink-700 hover:text-gold-600 border border-transparent',
  inverse:
    'bg-cream-50 text-ink-900 hover:bg-cream-100 border border-cream-50 hover:border-cream-100',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm tracking-wide',
  lg: 'px-8 py-4 text-base tracking-wide',
};

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  href: string;
  external?: boolean;
}

interface ButtonAsButtonProps extends ButtonBaseProps {
  href?: undefined;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-sm font-sans font-medium uppercase tracking-[0.15em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50',
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ('href' in props && props.href !== undefined) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={props.type ?? 'button'} onClick={props.onClick} className={classes}>
      {children}
    </button>
  );
}
