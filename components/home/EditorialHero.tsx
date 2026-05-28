'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';

export function EditorialHero() {
  return (
    <section className="relative w-full overflow-hidden bg-cream-50 border-b border-cream-300 relative z-20">
      
      {/* Editorial Split Screen Container */}
      <div className="w-full flex flex-col lg:flex-row lg:items-stretch lg:min-h-[75vh]">
        
        {/* Left Side: Cinematic Magazine Cover Visual */}
        <div className="relative w-full lg:w-[52%] aspect-[4/3] lg:aspect-auto min-h-[350px] md:min-h-[500px] overflow-hidden bg-ink-950 shrink-0">
          <Image
            src="/images/blog/busan_yeongdo_sunset.png"
            alt="Busan's Rugged Soul: Yeongdo"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover opacity-85 transition-transform duration-[12s] ease-out scale-101 hover:scale-103"
          />
          {/* Faint gold/sepia overlay matching the user mockup */}
          <div className="absolute inset-0 bg-[#C9A87A]/10 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent pointer-events-none" />
          
          {/* Magazine Cover Overlay Elements */}
          <div className="absolute inset-0 p-8 flex flex-col justify-between text-left select-none pointer-events-none">
            {/* Top Row */}
            <div className="flex items-center justify-between">
              <span className="bg-white/10 backdrop-blur-md text-cream-50 border border-white/20 px-3.5 py-1.5 text-[8px] font-sans font-bold uppercase tracking-[0.25em] shadow-lg rounded-xs">
                Concierge Choice
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-cream-100/50 font-bold font-serif hidden sm:inline">
                JOURNEYS
              </span>
            </div>

            {/* Bottom Row: Editorial Titles embedded on the picture itself! */}
            <div className="max-w-md drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              <h2 className="font-serif text-3xl md:text-4.5xl font-light text-cream-50 leading-none uppercase tracking-wide">
                Busan's <br />
                Rugged Soul: <br />
                <span className="text-gold-400 font-normal">Yeongdo</span>
              </h2>
              <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-cream-100/70 font-semibold leading-relaxed max-w-[280px]">
                Exploring the cliffside secrets & golden magic of southern Korea.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Clean, High-Contrast Story Cards & CTAs */}
        <div className="w-full lg:w-[48%] bg-white p-8 md:p-14 lg:p-16 flex flex-col justify-between text-left relative z-10">
          <div>
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-8 border-b border-cream-100 pb-4">
              <Sparkles className="h-4 w-4 text-gold-500 animate-pulse" />
              <span className="font-serif text-xs md:text-sm font-semibold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 uppercase">
                Korea, Beautifully Told.
              </span>
            </div>

            {/* Meta info */}
            <div className="flex items-center gap-3.5 mb-6 text-xs text-ink-400">
              <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-sans font-semibold tracking-[0.15em] uppercase bg-accent-sage text-cream-50 rounded-xs">
                Local Secrets
              </span>
              <span className="flex items-center gap-1 font-semibold uppercase tracking-wider text-[10px] text-ink-400">
                <Clock className="h-3.5 w-3.5 text-gold-600" /> 8 Min Read
              </span>
            </div>

            {/* Dynamic Editorial Title */}
            <Link href="/blog/busan-local-secrets" className="block group/link">
              <h2 className="font-serif text-3xl md:text-4xl font-light text-ink-900 group-hover/link:text-gold-700 transition-colors leading-tight mb-5 md:mb-6">
                The Hidden Alleys of Yeongdo: <br className="hidden md:inline" />
                Busan's Ultimate Coastal Escape
              </h2>
            </Link>

            {/* Rich excerpt */}
            <p className="text-sm md:text-base leading-relaxed text-ink-600 font-light mb-8 md:mb-10">
              Cross the southern harbor bridge to enter a rugged coastal island untouched by crowded tourist beaches. Walk cliffside paths forged by shipping trades, discover pastel-painted refugee shelters, and sip slow-drip coffee over majestic crane-lined views.
            </p>
          </div>

          {/* Double CTA Buttons: Read Curation & Plan Trip */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-cream-100 mt-auto">
            <Button
              href="/blog/busan-local-secrets"
              variant="primary"
              className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] shadow-md group/btn py-4 px-6 sm:w-1/2"
            >
              Read Curation
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
            
            <Button
              href="/booking"
              variant="secondary"
              className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] border border-ink-800 hover:bg-ink-900 hover:text-cream-50 transition-colors py-4 px-6 sm:w-1/2"
            >
              Plan Your Journey
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
