'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { KakaoIcon, LineIcon, WhatsAppIcon, WeChatIcon, TelegramIcon } from '@/components/ui/MessengerIcons';

const MESSENGERS = [
  { key: 'whatsapp', href: 'https://wa.me/821092099855', bg: '#25D366', fg: '#ffffff', Icon: WhatsAppIcon },
  { key: 'telegram', href: 'https://t.me/+821092099855', bg: '#229ED9', fg: '#ffffff', Icon: TelegramIcon },
] as const;

export function MessengerWidget() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('messengers');

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 animate-fade-in">
          {MESSENGERS.map((m) => (
            <a
              key={m.key}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t(m.key)}
              className={`group flex items-center gap-3 rounded-sm border border-cream-300 bg-cream-50 py-2 pl-2 pr-4 shadow-sm transition-colors hover:border-gold-500`}
            >
              <span
                className="flex h-9 w-9 items-center justify-center"
                style={{ backgroundColor: m.bg, color: m.fg }}
                aria-hidden="true"
              >
                <m.Icon className="h-5 w-5" />
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-ink-700">
                {t(m.key)}
              </span>
            </a>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t('title')}
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-cream-50 transition-colors hover:bg-gold-600"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
