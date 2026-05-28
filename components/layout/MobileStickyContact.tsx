'use client';

import { WhatsAppIcon, TelegramIcon } from '@/components/ui/MessengerIcons';
import { MessageSquare } from 'lucide-react';

export function MobileStickyContact() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 block bg-ink-950/95 p-3 px-4 shadow-[0_-8px_30px_rgba(0,0,0,0.4)] border-t border-cream-100/10 backdrop-blur-md animate-fade-in md:hidden">
      <div className="flex items-center justify-between gap-3">
        {/* Left: Concierge Branding & Online Status Indicator */}
        <div className="flex items-center gap-2">
          <div className="relative flex h-7.5 w-7.5 items-center justify-center rounded-full bg-cream-100/10 text-gold-400">
            <MessageSquare className="h-4 w-4" />
            <span className="absolute bottom-0 right-0 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-sage opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-sage"></span>
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-xs font-semibold tracking-wide text-cream-50 leading-tight">
              KoreaHaru Concierge
            </span>
            <span className="text-[8px] uppercase tracking-widest text-gold-400 font-bold leading-none mt-0.5">
              24/7 Live Support
            </span>
          </div>
        </div>

        {/* Right: Direct Quick Contact Buttons (Slightly more compact for perfect mobile fit) */}
        <div className="flex items-center gap-1.5">
          {/* WhatsApp */}
          <a
            href="https://wa.me/821092099855"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via WhatsApp"
            className="flex h-9 items-center gap-1.5 rounded-sm bg-[#25D366] px-3 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm transition-transform active:scale-95 shrink-0"
          >
            <WhatsAppIcon className="h-4.5 w-4.5 fill-white" />
            <span>WhatsApp</span>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/+821092099855"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via Telegram"
            className="flex h-9 items-center gap-1.5 rounded-sm bg-[#229ED9] px-3 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm transition-transform active:scale-95 shrink-0"
          >
            <TelegramIcon className="h-4.5 w-4.5 fill-white" />
            <span>Telegram</span>
          </a>
        </div>
      </div>
    </div>
  );
}
