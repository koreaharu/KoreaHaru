'use client';

import { WhatsAppIcon, TelegramIcon } from '@/components/ui/MessengerIcons';
import { MessageSquare } from 'lucide-react';

export function MobileStickyContact() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 block bg-ink-950/95 p-4 px-6 shadow-[0_-8px_30px_rgba(0,0,0,0.4)] border-t border-cream-100/10 backdrop-blur-md animate-fade-in md:hidden">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Concierge Branding & Online Status Indicator */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-cream-100/10 text-gold-400">
            <MessageSquare className="h-4.5 w-4.5" />
            <span className="absolute bottom-0 right-0 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-sage opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-sage"></span>
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-sm font-semibold tracking-wide text-cream-50">
              KoreaHaru Concierge
            </span>
            <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold">
              24/7 Live Assistance
            </span>
          </div>
        </div>

        {/* Right: Direct Quick Contact Buttons */}
        <div className="flex items-center gap-2">
          {/* WhatsApp */}
          <a
            href="https://wa.me/821092099855"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via WhatsApp"
            className="flex h-11 items-center gap-2 rounded-sm bg-[#25D366] px-4 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-transform active:scale-95"
          >
            <WhatsAppIcon className="h-5 w-5 fill-white" />
            <span>WhatsApp</span>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/+821092099855"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via Telegram"
            className="flex h-11 items-center gap-2 rounded-sm bg-[#229ED9] px-4 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-transform active:scale-95"
          >
            <TelegramIcon className="h-5 w-5 fill-white" />
            <span>Telegram</span>
          </a>
        </div>
      </div>
    </div>
  );
}
