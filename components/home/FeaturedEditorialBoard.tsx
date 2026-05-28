'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Compass, Clock, ArrowRight } from 'lucide-react';

export function FeaturedEditorialBoard() {
  return (
    <section className="bg-cream-50 py-16 md:py-24 border-b border-cream-300 relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        
        {/* Section Header */}
        <header className="mb-12 max-w-2xl text-left">
          <p className="eyebrow text-gold-700 tracking-[0.2em] mb-3">Trending Curation</p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-ink-900 leading-tight">
            This Week's Signature Story
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-ink-600 font-light">
            Each week, our concierge team uncovers one truly exceptional local route, generational taste, or quiet escape in Southern Korea.
          </p>
        </header>

        {/* Magazine Cover Big Board Card */}
        <article className="group relative overflow-hidden bg-white border border-cream-200 shadow-xl hover:shadow-2xl hover:border-gold-400/30 transition-all duration-500 rounded-sm">
          <div className="flex flex-col lg:flex-row lg:items-stretch min-h-[400px] md:min-h-[480px]">
            
            {/* Left/Top: Cinematic Wide Image Container */}
            <div className="relative w-full lg:w-[55%] aspect-[16/10] lg:aspect-auto overflow-hidden bg-ink-900 shrink-0">
              <Image
                src="/images/blog/busan_yeongdo_sunset.png"
                alt="The Hidden Alleys of Yeongdo: Busan's Ultimate Coastal Escape"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-[10s] ease-out group-hover:scale-103 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ink-950/10 to-ink-950/30" />
              <div className="absolute left-6 top-6 bg-gold-500 text-cream-50 px-3.5 py-1.5 text-[9px] font-sans font-bold uppercase tracking-[0.2em] shadow-lg rounded-xs">
                Concierge Choice
              </div>
            </div>

            {/* Right/Bottom: Elegant Typography details */}
            <div className="flex flex-col justify-between p-8 md:p-12 lg:w-[45%] text-left bg-white relative z-10">
              <div>
                {/* Meta details */}
                <div className="flex items-center gap-3.5 mb-6 text-xs text-ink-400">
                  <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-sans font-semibold tracking-[0.15em] uppercase bg-accent-sage text-cream-50 rounded-xs">
                    Local Secrets
                  </span>
                  <span className="flex items-center gap-1 font-semibold uppercase tracking-wider text-[10px] text-ink-400">
                    <Clock className="h-3.5 w-3.5 text-gold-600" /> 8 Min Read
                  </span>
                </div>

                {/* Title */}
                <Link href="/blog/busan-local-secrets" className="block group/link">
                  <h3 className="font-serif text-2xl md:text-3.5xl font-light text-ink-900 group-hover/link:text-gold-700 transition-colors leading-tight mb-5 md:mb-6">
                    The Hidden Alleys of Yeongdo: Busan's Ultimate Coastal Escape
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-sm md:text-base leading-relaxed text-ink-600 font-light mb-8 md:mb-10">
                  Cross the southern harbor bridge to enter a rugged coastal island untouched by crowded tourist beaches. Walk cliffside paths forged by shipping trades, discover pastel-painted refugee shelters, and sip slow-drip coffee over majestic crane-lined views.
                </p>
              </div>

              {/* Bottom: Action CTA */}
              <div className="pt-6 border-t border-cream-100 flex items-center justify-between mt-auto">
                <span className="text-[10px] text-ink-400 uppercase tracking-widest font-bold font-mono">
                  Published 2026-05-27
                </span>
                
                <Link
                  href="/blog/busan-local-secrets"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-700 hover:text-gold-800 transition-colors group/btn"
                >
                  Read Full Curation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </article>

      </div>
    </section>
  );
}
