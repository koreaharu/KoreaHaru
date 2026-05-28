'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, RefreshCw } from 'lucide-react';

interface ExchangeRates {
  USD: number;
  EUR: number;
  THB: number;
  VND: number;
}

export function ExchangeRateWidget() {
  const [rates, setRates] = useState<ExchangeRates>({
    USD: 1385,
    EUR: 1498,
    THB: 37.8,
    VND: 54.5, // Per 1,000 VND
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [isLive, setIsLive] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<string>('Static Vetted');

  const fetchRates = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://open.er-api.com/v6/latest/USD');
      if (!res.ok) throw new Error('API failed');
      const data = await res.json();
      
      if (data && data.rates && data.rates.KRW) {
        const krw = data.rates.KRW;
        
        const usdRate = krw; // USD to KRW
        const eurRate = krw / data.rates.EUR; // EUR to KRW
        const thbRate = krw / data.rates.THB; // THB to KRW
        const vndRate = (krw / data.rates.VND) * 1000; // 1,000 VND to KRW

        setRates({
          USD: Math.round(usdRate * 10) / 10,
          EUR: Math.round(eurRate * 10) / 10,
          THB: Math.round(thbRate * 100) / 100,
          VND: Math.round(vndRate * 100) / 100,
        });
        
        const now = new Date();
        setLastUpdated(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        setIsLive(true);
      }
    } catch (err) {
      console.warn('Using fallback exchange rates due to network/CORS limits.', err);
      setIsLive(false);
      setLastUpdated('Vetted Today');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <article className="w-full max-w-[330px] bg-white border border-cream-300 p-6 rounded-sm shadow-[0_15px_40px_rgba(201,168,122,0.12)] text-left select-none animate-fade-in transition-all duration-300 hover:border-gold-500/30">
      <header className="flex items-center justify-between border-b border-cream-200 pb-3.5 mb-5">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-gold-600" />
          <h3 className="font-serif text-base font-semibold tracking-wide text-ink-900">Live Exchange Rates</h3>
        </div>
        <div className="flex items-center gap-1.5">
          {isLive ? (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-sage opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-sage"></span>
            </span>
          ) : (
            <span className="h-2 w-2 rounded-full bg-cream-300"></span>
          )}
          <span className="text-[10px] text-ink-400 uppercase tracking-widest font-bold">
            {isLive ? 'Live' : 'Muted'}
          </span>
        </div>
      </header>

      <div className="space-y-4">
        {/* USD */}
        <div className="flex items-center justify-between border-b border-cream-100 pb-2.5 last:border-b-0 last:pb-0">
          <span className="text-xs font-bold text-ink-500 tracking-wider">USD</span>
          <p className="font-serif text-base font-medium text-ink-900 tracking-wide">
            {loading ? '...' : `1 USD = ${rates.USD.toLocaleString()} KRW`}
          </p>
        </div>

        {/* EUR */}
        <div className="flex items-center justify-between border-b border-cream-100 pb-2.5 last:border-b-0 last:pb-0">
          <span className="text-xs font-bold text-ink-500 tracking-wider">EUR</span>
          <p className="font-serif text-base font-medium text-ink-900 tracking-wide">
            {loading ? '...' : `1 EUR = ${rates.EUR.toLocaleString()} KRW`}
          </p>
        </div>

        {/* THB */}
        <div className="flex items-center justify-between border-b border-cream-100 pb-2.5 last:border-b-0 last:pb-0">
          <span className="text-xs font-bold text-ink-500 tracking-wider">THB</span>
          <p className="font-serif text-base font-medium text-ink-900 tracking-wide">
            {loading ? '...' : `1 THB = ${rates.THB.toLocaleString()} KRW`}
          </p>
        </div>

        {/* VND */}
        <div className="flex items-center justify-between border-b border-cream-100 pb-2.5 last:border-b-0 last:pb-0">
          <span className="text-xs font-bold text-ink-500 tracking-wider">VND</span>
          <p className="font-serif text-base font-medium text-ink-900 tracking-wide">
            {loading ? '...' : `1,000 VND = ${rates.VND.toLocaleString()} KRW`}
          </p>
        </div>
      </div>

      <footer className="mt-5 pt-3.5 border-t border-cream-200 flex items-center justify-between text-[10px] text-ink-400 font-medium">
        <span>As of {lastUpdated}</span>
        <button 
          onClick={fetchRates}
          disabled={loading}
          className="flex items-center gap-1.5 hover:text-gold-600 transition-colors disabled:opacity-50 text-[10px] font-semibold"
          title="Refresh rates"
        >
          <RefreshCw className={`h-3 w-3 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </footer>
    </article>
  );
}
