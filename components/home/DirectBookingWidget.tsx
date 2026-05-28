'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Sparkles, ChevronRight, Check, Info, ExternalLink } from 'lucide-react';

interface ComparisonItem {
  service: string;
  platform: string;
  platformRate: string;
  directRate: string;
  savings: string;
  color: string;
}

const COMPARISONS: ComparisonItem[] = [
  {
    service: 'Luxury Hanok Stay (경주 한옥 숙박)',
    platform: 'Airbnb',
    platformRate: '135,000 KRW',
    directRate: '100,000 KRW',
    savings: '35,000 KRW',
    color: '#FF5A5F'
  },
  {
    service: 'Premium Ocean Surfing (송정 서핑 레슨)',
    platform: 'Klook',
    platformRate: '80,000 KRW',
    directRate: '65,000 KRW',
    savings: '15,000 KRW',
    color: '#FF5B00'
  },
  {
    service: 'Private Chauffeur Tour (기사 차량 투어)',
    platform: 'TripAdvisor',
    platformRate: '480,000 KRW',
    directRate: '400,000 KRW',
    savings: '80,000 KRW',
    color: '#00AF87'
  },
  {
    service: 'Authentic Culinary Class (한식 쿠킹 클래스)',
    platform: 'KKday',
    platformRate: '75,000 KRW',
    directRate: '60,000 KRW',
    savings: '15,000 KRW',
    color: '#06B9C8'
  }
];

const CHANNELS = [
  {
    name: 'Klook',
    color: '#FF5B00',
    bgColor: 'rgba(255, 91, 0, 0.12)',
    borderColor: 'rgba(255, 91, 0, 0.25)',
    url: 'https://www.klook.com/search?query=KoreaHaru',
    symbol: 'K'
  },
  {
    name: 'TripAdvisor',
    color: '#00AF87',
    bgColor: 'rgba(0, 175, 135, 0.12)',
    borderColor: 'rgba(0, 175, 135, 0.25)',
    url: 'https://www.tripadvisor.com/Search?q=KoreaHaru',
    symbol: 'T'
  },
  {
    name: 'KKday',
    color: '#06B9C8',
    bgColor: 'rgba(6, 185, 200, 0.12)',
    borderColor: 'rgba(6, 185, 200, 0.25)',
    url: 'https://www.kkday.com/en/product/search?keyword=KoreaHaru',
    symbol: 'K'
  },
  {
    name: 'Airbnb',
    color: '#FF5A5F',
    bgColor: 'rgba(255, 90, 95, 0.12)',
    borderColor: 'rgba(255, 90, 95, 0.25)',
    url: 'https://www.airbnb.com/s/Busan~-South-Korea/homes',
    symbol: 'A'
  },
  {
    name: 'Hotel Booking',
    color: '#D4AF37', // Gold for luxury hotel booking
    bgColor: 'rgba(212, 175, 55, 0.12)',
    borderColor: 'rgba(212, 175, 55, 0.25)',
    url: 'https://www.booking.com/searchresults.html?ss=Busan',
    symbol: 'H'
  }
];

export function DirectBookingWidget() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % COMPARISONS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const active = COMPARISONS[activeIndex];

  return (
    <article className="bg-white border border-cream-200/50 p-5 px-6 rounded-sm shadow-[0_20px_50px_rgba(201,168,122,0.08)] select-none animate-fade-in transition-all hover:border-gold-500/20 hover:shadow-[0_20px_50px_rgba(201,168,122,0.12)] flex flex-col justify-between gap-4 w-full h-full max-w-4xl mx-auto text-left">
      
      {/* TIER 1 (TOP ROW): Direct Platform Links exactly as they were */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-5 w-full">
        {/* Title Section */}
        <div className="flex items-center gap-2.5 lg:border-r lg:border-cream-200 lg:pr-5 shrink-0">
          <Shield className="h-5.5 w-5.5 text-gold-600" />
          <span className="font-serif text-sm font-semibold tracking-widest text-ink-900 uppercase">
            Booking Channels
          </span>
        </div>

        {/* Horizontal List of Channels */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3.5">
          {CHANNELS.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-sm border border-cream-200 bg-cream-50/40 transition-all hover:bg-cream-100 hover:border-gold-500/30 group shrink-0"
            >
              <span 
                className="flex h-5 w-5 md:h-6.5 md:w-6.5 items-center justify-center rounded-full text-[10px] md:text-xs font-extrabold shrink-0"
                style={{ 
                  backgroundColor: c.bgColor, 
                  color: c.color,
                  border: `1px solid ${c.borderColor}` 
                }}
              >
                {c.symbol}
              </span>
              <span className="text-xs md:text-sm font-bold text-ink-900 tracking-wider group-hover:text-gold-600 transition-colors">
                {c.name}
              </span>
              <ExternalLink className="h-3 w-3 md:h-3.5 md:w-3.5 text-ink-400/50 group-hover:text-gold-600 transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-cream-200" />

      {/* TIER 2 (BOTTOM ROW): Direct Booking Savings Ticker & Golden CTA */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-5">
        
        {/* Left: Sparkles & Title */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 w-full lg:w-auto">
          <div className="flex items-center gap-2.5 md:border-r md:border-cream-200 md:pr-5 shrink-0">
            <Sparkles className="h-5.5 w-5.5 text-gold-600" />
            <div className="flex flex-col text-left">
              <span className="font-serif text-xs font-semibold tracking-widest text-ink-900 uppercase">
                Direct Savings
              </span>
              <span className="text-[9px] font-bold text-gold-600 tracking-wider uppercase">
                Save 15% – 20% Fees
              </span>
            </div>
          </div>

          {/* Rotating Comparison Ticker */}
          <div className="h-12 md:h-10 flex flex-col justify-center min-w-0 md:min-w-[340px] w-full text-left">
            <div className="text-[10px] text-ink-500 uppercase tracking-widest font-semibold flex items-center gap-1.5 flex-wrap">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: active.color }} />
              {active.service}
            </div>
            <div className="flex items-center gap-2 mt-0.5 flex-wrap">
              <span className="text-xs text-ink-600 font-medium">
                {active.platform}: <span className="line-through text-ink-400/70">{active.platformRate}</span>
              </span>
              <span className="text-xs text-gold-700 font-extrabold flex items-center gap-1">
                <ChevronRight className="h-3 w-3 text-gold-600" /> Our Direct: {active.directRate}
              </span>
              <span className="text-[10px] px-1.5 py-0.5 bg-gold-500/10 border border-gold-500/30 text-gold-700 font-bold rounded-full uppercase tracking-wider scale-90">
                Save {active.savings}
              </span>
            </div>
          </div>

          {/* Tooltip trigger button */}
          <div className="relative shrink-0 flex items-center">
            <button 
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={() => setShowTooltip(!showTooltip)}
              className="flex items-center justify-center h-8 w-8 rounded-full bg-cream-50 border border-cream-200 text-ink-500 hover:text-gold-600 hover:bg-cream-100 hover:border-gold-500/30 transition-all"
              title="Show Platform Fee Comparison"
            >
              <Info className="h-4.5 w-4.5" />
            </button>
            
            {/* Interactive Comparison Tooltip */}
            {showTooltip && (
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 w-[300px] sm:w-[360px] max-w-[calc(100vw-48px)] bg-white border border-cream-300 p-5 rounded-sm shadow-[0_15px_40px_rgba(201,168,122,0.15)] text-left animate-fade-in">
                <h4 className="font-serif text-sm font-semibold text-ink-900 mb-3 flex items-center gap-1.5 border-b border-cream-200 pb-2">
                  <Shield className="h-4 w-4 text-gold-600" />
                  Platform Fee Comparison (수수료 비교)
                </h4>
                <div className="space-y-2.5">
                  {COMPARISONS.map((c) => (
                    <div key={c.service} className="text-xs flex flex-col gap-1 pb-2 border-b border-cream-100 last:border-b-0">
                      <div className="font-medium text-ink-900">{c.service.split(' (')[0]}</div>
                      <div className="flex items-center justify-between text-ink-500 font-mono">
                        <span>{c.platform} Booking Fee:</span>
                        <span className="line-through text-ink-400">{c.platformRate}</span>
                      </div>
                      <div className="flex items-center justify-between text-gold-700 font-bold font-mono">
                        <span className="flex items-center gap-1 text-[11px]"><Check className="h-3 w-3 text-gold-600" /> KoreaHaru Direct Rate:</span>
                        <span>{c.directRate} (Save {c.savings})</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-[10px] text-ink-400/80 leading-relaxed text-center">
                  ⚠️ 에어비앤비, 클룩 등 플랫폼이 부과하는 15%~20%의 대행 수수료를 즉시 아끼실 수 있습니다.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right: Primary Booking CTA */}
        <Link
          href="/booking"
          className="flex items-center justify-center gap-1.5 w-full lg:w-auto px-5 py-3 bg-gold-500 hover:bg-gold-600 text-ink-950 font-bold text-sm tracking-wider rounded-sm shadow-lg hover:shadow-gold-500/10 transition-all group shrink-0"
        >
          Book Direct & Save
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

    </article>
  );
}
