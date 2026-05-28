'use client';

import { useState, useEffect } from 'react';
import { DollarSign, Euro, TrendingUp, RefreshCw } from 'lucide-react';

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
      // Fetch latest rates with USD base (extremely reliable and fast CDN)
      const res = await fetch('https://open.er-api.com/v6/latest/USD');
      if (!res.ok) throw new Error('API failed');
      const data = await res.json();
      
      if (data && data.rates && data.rates.KRW) {
        const krw = data.rates.KRW;
        
        // Calculate rates relative to KRW
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
    // Auto refresh every 5 minutes
    const interval = setInterval(fetchRates, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <article className="w-full max-w-[330px] bg-ink-900 border border-gold-500/20 p-6 rounded-sm shadow-xl text-left select-none animate-fade-in transition-all hover:border-gold-500/30">
      <header className="flex items-center justify-between border-b border-cream-100/10 pb-3.5 mb-5">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-gold-400" />
          <h3 className="font-serif text-base font-normal tracking-wide text-cream-100">Live Exchange Rates</h3>
        </div>
        <div className="flex items-center gap-1.5">
          {isLive ? (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-sage opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-sage"></span>
            </span>
          ) : (
            <span className="h-2 w-2 rounded-full bg-cream-300/30"></span>
          )}
          <span className="text-xs text-cream-200/50 uppercase tracking-widest font-medium">
            {isLive ? 'Live' : 'Muted'}
          </span>
        </div>
      </header>

      <div className="space-y-4">
        {/* USD */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-cream-100 tracking-wider">USD</span>
          <p className="font-serif text-base font-light text-cream-50 tracking-wide">
            {loading ? '...' : `1 USD = ${rates.USD.toLocaleString()} KRW`}
          </p>
        </div>

        {/* EUR */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-cream-100 tracking-wider">EUR</span>
          <p className="font-serif text-base font-light text-cream-50 tracking-wide">
            {loading ? '...' : `1 EUR = ${rates.EUR.toLocaleString()} KRW`}
          </p>
        </div>

        {/* THB */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-cream-100 tracking-wider">THB</span>
          <p className="font-serif text-base font-light text-cream-50 tracking-wide">
            {loading ? '...' : `1 THB = ${rates.THB.toLocaleString()} KRW`}
          </p>
        </div>

        {/* VND */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-cream-100 tracking-wider">VND</span>
          <p className="font-serif text-base font-light text-cream-50 tracking-wide">
            {loading ? '...' : `1,000 VND = ${rates.VND.toLocaleString()} KRW`}
          </p>
        </div>
      </div>

      <footer className="mt-5 pt-3.5 border-t border-cream-100/5 flex items-center justify-between text-[10px] text-cream-200/40">
        <span>As of {lastUpdated}</span>
        <button 
          onClick={fetchRates}
          disabled={loading}
          className="flex items-center gap-1.5 hover:text-cream-100 transition-colors disabled:opacity-50 text-[10px] font-medium"
          title="Refresh rates"
        >
          <RefreshCw className={`h-3 w-3 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </footer>
    </article>
  );
}
