'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';

export function QuickBookingBar() {
  const t = useTranslations('home.booking_bar');

  return (
    <div className="sticky top-20 z-30 -mt-12 hidden md:block">
      <Container>
        <form className="grid grid-cols-1 gap-0 border border-cream-300 bg-cream-50 shadow-sm md:grid-cols-[1fr_1fr_1fr_auto]">
          <Field label={t('where')} placeholder={t('where_placeholder')} />
          <Field label={t('when')} placeholder={t('when_placeholder')} type="date" />
          <Field label={t('service')} placeholder={t('service_placeholder')} />
          <button
            type="submit"
            className="bg-gold-500 px-8 py-5 text-sm font-medium uppercase tracking-[0.15em] text-cream-50 transition-colors hover:bg-gold-600"
          >
            {t('cta')}
          </button>
        </form>
      </Container>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = 'text',
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="flex flex-col gap-1 border-cream-300 px-6 py-3 [&:not(:last-child)]:border-r">
      <span className="eyebrow">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-transparent text-base text-ink-800 placeholder-ink-400 focus:outline-none"
      />
    </label>
  );
}
