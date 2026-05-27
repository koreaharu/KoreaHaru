import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm uppercase tracking-[0.25em] text-gold-700">404</p>
      <h1 className="mt-4 font-serif text-4xl font-light text-ink-900 md:text-6xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base text-ink-600">
        The page you&rsquo;re looking for has moved or never existed.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center bg-gold-500 px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-cream-50 transition-colors hover:bg-gold-600"
      >
        Back to home
      </Link>
    </div>
  );
}
