'use client';

import { useState } from 'react';
import { X, Car } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface TaxiCardProps {
  destination: string;
  destinationEn: string;
  message: string;
  waitTip: string;
  waitTipEn: string;
}

export function TaxiCard({
  destination,
  destinationEn,
  message,
  waitTip,
  waitTipEn,
}: TaxiCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 flex flex-col items-center justify-center rounded-full bg-gold-600 p-4 text-cream-50 shadow-2xl transition-all hover:bg-gold-700 hover:scale-110 active:scale-95"
      >
        <Car className="h-6 w-6" />
        <span className="mt-1 text-[10px] font-bold uppercase tracking-tighter">Show to Driver</span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md overflow-hidden rounded-lg bg-white shadow-2xl animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div className="bg-ink-900 p-6 text-cream-50">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 text-cream-50/50 hover:text-cream-50"
              >
                <X className="h-6 w-6" />
              </button>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gold-400">Taxi Destination Card</h3>
              <p className="mt-1 text-xs text-cream-50/60">Show this screen to your taxi driver</p>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Destination */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-ink-400 mb-2">🚩 Destination (목적지)</p>
                <p className="text-3xl font-bold text-ink-900 leading-tight">{destination}</p>
                <p className="mt-1 text-sm text-ink-500 italic">({destinationEn})</p>
              </div>

              {/* Message */}
              <div className="rounded-sm bg-cream-50 p-6 border-l-4 border-gold-500">
                <p className="text-[10px] font-bold uppercase tracking-widest text-ink-400 mb-3">💬 Message to Driver</p>
                <p className="text-2xl font-medium text-ink-900 leading-snug">"{message}"</p>
              </div>

              {/* Extra Tip */}
              <div className="pt-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-ink-400 mb-2">💡 Local Friend's Tip</p>
                <div className="rounded-sm border border-gold-200 bg-gold-50 p-4">
                  <p className="text-lg font-medium text-ink-900">{waitTip}</p>
                  <p className="mt-1 text-xs text-ink-600">({waitTipEn})</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-cream-50 p-4 text-center">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="w-full justify-center"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
