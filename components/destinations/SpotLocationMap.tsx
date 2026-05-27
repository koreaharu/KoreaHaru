'use client';

import { useState } from 'react';
import Image from 'next/image';

interface SpotLocationMapProps {
  title: string;
  subtitle?: string;
  koreanAddress: string;
  address: string;
  imageUrl: string;
  driveTime?: string;
  description?: string;
  isNested?: boolean;
  hideTitle?: boolean;
  googleMapsUrl?: string;
  mapQuery?: string;
}

export function SpotLocationMap({
  title,
  subtitle,
  koreanAddress,
  address,
  imageUrl,
  driveTime,
  description,
  isNested = false,
  hideTitle = false,
  googleMapsUrl,
  mapQuery
}: SpotLocationMapProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'location'>('location');

  const mapsQuery = mapQuery || koreanAddress || title;
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const directUrl = googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

  return (
    <div className={`flex flex-col w-full ${
      isNested 
        ? 'bg-cream-50/70 p-5 rounded-sm border border-cream-100 shadow-sm' 
        : 'border border-cream-200 bg-cream-50 p-6 rounded-sm min-h-[460px] shadow-sm mt-8'
    }`}>
      <div className="space-y-5 flex-1">
        {/* Title & Subtitle */}
        {!hideTitle && (
          <div>
            <span className="text-[9px] font-bold uppercase tracking-widest text-gold-700">Explore Location</span>
            <h3 className="mt-1 font-serif text-xl font-light text-ink-900">{title}</h3>
            {subtitle && (
              <p className="text-[10px] font-semibold text-gold-600 uppercase tracking-wide mt-0.5">{subtitle}</p>
            )}
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex border-b border-cream-200">
          <button
            onClick={() => setActiveTab('location')}
            className={`flex-1 pb-2 text-[10px] font-bold uppercase tracking-wider border-b-2 text-center transition-all ${
              activeTab === 'location'
                ? 'border-gold-600 text-gold-900'
                : 'border-transparent text-ink-400 hover:text-ink-600'
            }`}
          >
            📍 Location Map
          </button>
          <button
            onClick={() => setActiveTab('info')}
            className={`flex-1 pb-2 text-[10px] font-bold uppercase tracking-wider border-b-2 text-center transition-all ${
              activeTab === 'info'
                ? 'border-gold-600 text-gold-900'
                : 'border-transparent text-ink-400 hover:text-ink-600'
            }`}
          >
            Spot Photo
          </button>
        </div>

        {/* Tab Contents */}
        {activeTab === 'info' ? (
          <div className="space-y-4 animate-fade-in">
            {/* Spot Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-100 rounded-sm shadow-inner">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
            </div>
            {driveTime && (
              <div className="flex items-center gap-2 text-[11px] font-bold text-ink-900 bg-white p-2 border border-cream-200 rounded-sm">
                <svg className="h-3.5 w-3.5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Access: {driveTime}</span>
              </div>
            )}
            {description && (
              <p className="text-xs leading-relaxed text-ink-700 font-medium line-clamp-3">
                {description}
              </p>
            )}
          </div>
        ) : (
          <div className="space-y-4 animate-fade-in">
            {/* Google Map Iframe Container */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-cream-300 bg-cream-100 shadow-inner group/map">
              <iframe
                title={`${title} Google Map`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={embedUrl}
              ></iframe>

              {/* Overlay Button */}
              <a
                href={directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2.5 left-2.5 bg-white/95 px-2.5 py-1 text-[9px] font-semibold text-ink-900 rounded-sm border border-cream-200 shadow-sm flex items-center gap-1 transition-all hover:bg-gold-50 hover:border-gold-300 z-10"
              >
                <span>지도에서 열기</span>
                <svg className="h-2.5 w-2.5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Address Details */}
            <div className="space-y-1 p-3 bg-white border border-cream-200 rounded-sm shadow-sm">
              <div className="flex items-start gap-1 text-[11px] font-bold text-ink-900 leading-snug">
                <span className="text-gold-600 mt-0.5">📍</span>
                <span>{koreanAddress}</span>
              </div>
              <p className="text-[10px] text-ink-500 font-medium leading-relaxed pl-3.5">{address}</p>
            </div>

            {/* External CTA */}
            <a
              href={directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center bg-gold-600 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-white transition-all hover:bg-gold-700 rounded-sm shadow-sm gap-1.5"
            >
              <span>View on Google Maps</span>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
