'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { 
  Calendar, 
  MapPin, 
  Compass, 
  Check, 
  ShieldCheck, 
  User, 
  Mail, 
  MessageSquare, 
  ExternalLink,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

const CHANNELS = [
  { 
    name: 'Wise Direct Transfer', 
    color: '#00B9FF', // Wise Brand Blue
    bgColor: 'rgba(0, 185, 255, 0.08)',
    borderColor: 'rgba(0, 185, 255, 0.25)',
    hoverBorderColor: 'rgba(0, 185, 255, 0.6)',
    desc: 'Pay directly via Wise.com (formerly TransferWise) to receive our 15% – 20% Direct Booking Discount.',
    payText: 'Wise 해외송금 할인 예약',
    symbol: 'W'
  },
  { 
    name: 'TripAdvisor', 
    color: '#00AF87', 
    bgColor: 'rgba(0, 175, 135, 0.08)',
    borderColor: 'rgba(0, 175, 135, 0.25)',
    hoverBorderColor: 'rgba(0, 175, 135, 0.6)',
    desc: 'Official TripAdvisor-Escrow Booking. Features complete payment protection & traveler reviews.',
    payText: 'TripAdvisor 결제 및 예약',
    symbol: 'T'
  },
  { 
    name: 'Klook', 
    color: '#FF5B00', 
    bgColor: 'rgba(255, 91, 0, 0.08)',
    borderColor: 'rgba(255, 91, 0, 0.25)',
    hoverBorderColor: 'rgba(255, 91, 0, 0.6)',
    desc: 'Authorized Klook Global Travel Voucher. Instant confirmation with mobile voucher entry.',
    payText: 'Klook 클룩 결제 및 예약',
    symbol: 'K'
  },
  { 
    name: 'KKday', 
    color: '#06B9C8', 
    bgColor: 'rgba(6, 185, 200, 0.08)',
    borderColor: 'rgba(6, 185, 200, 0.25)',
    hoverBorderColor: 'rgba(6, 185, 200, 0.6)',
    desc: 'Preferred KKday Premium Service Portal. Seamless card processing and local currency billing.',
    payText: 'KKday 케이케이데이 결제',
    symbol: 'K'
  },
  { 
    name: 'Google Travel', 
    color: '#4285F4', 
    bgColor: 'rgba(66, 137, 244, 0.08)',
    borderColor: 'rgba(66, 137, 244, 0.25)',
    hoverBorderColor: 'rgba(66, 137, 244, 0.6)',
    desc: 'Direct integration with Google Travel Chauffeur. Managed through secure Google Pay checkout.',
    payText: 'Google Travel 간편 결제',
    symbol: 'G'
  },
  { 
    name: 'Visit Korea', 
    color: '#C60C30', 
    bgColor: 'rgba(198, 12, 48, 0.08)',
    borderColor: 'rgba(198, 12, 48, 0.25)',
    hoverBorderColor: 'rgba(198, 12, 48, 0.6)',
    desc: 'KTO (Korea Tourism Organization) Certified Escrow. Heavily verified safe local checkout.',
    payText: 'Visit Korea 인증 결제',
    symbol: 'V'
  },
];

const SERVICES = [
  'Private Chauffeur (전용 기사 차량 서비스)',
  'Luxury Stays & Retreats (럭셔리 호텔/한옥 숙박)',
  'Ocean Surfing (송정/임랑 오션 서핑 체험)',
  'Traditional Cooking Class (한식 쿠킹 클래스)',
  'Hanok Photoshoot (경주 한복 스냅 촬영)',
];

const DESTINATIONS = [
  'Busan (부산)',
  'Gyeongju (경주)',
  'Tongyeong (통영)',
  'Geoje (거제)',
  'Namhae (남해)',
];

export default function BookingPage() {
  const [selectedChannel, setSelectedChannel] = useState<string>('Wise Direct Transfer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    service: SERVICES[0],
    destination: DESTINATIONS[0],
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);

  const activeChannel = CHANNELS.find(c => c.name === selectedChannel) || CHANNELS[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setShowModal(true);
    }, 1200);
  };

  const handleQuickChannelRedirect = (channelName: string) => {
    setSelectedChannel(channelName);
    setShowModal(true);
    setSuccess(false);
  };

  return (
    <Section className="min-h-screen bg-cream-50/50 py-16 md:py-24 relative overflow-hidden">
      {/* Decorative backdrop gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-ink-900/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Header Section */}
        <header className="max-w-3xl mb-16 text-left">
          <p className="eyebrow text-gold-700 tracking-[0.2em] mb-3">Secure Reservation & Payment Gateway</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-ink-900 leading-tight">
            Plan with a Local Companion
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-ink-600">
            아래의 공식 파트너 채널을 통해 원화(KRW) 결제 및 안전 에스크로 예약을 빠르게 진행할 수 있습니다. 
            원하시는 일정과 인포메이션을 입력하고 선호하는 플랫폼을 선택해 주세요.
          </p>
        </header>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Premium Booking Form */}
          <article className="lg:col-span-7 bg-white/70 backdrop-blur-md border border-cream-200 p-8 rounded-sm shadow-xl hover:shadow-2xl transition-all">
            <h2 className="font-serif text-2xl text-ink-900 font-normal mb-6 flex items-center gap-2 pb-3 border-b border-cream-200/50">
              <Compass className="h-5 w-5 text-gold-600" />
              1. 예약 일정 및 세부 사항 입력
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-ink-700 uppercase tracking-wider flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-gold-600" /> 성함 (Full Name)
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="홍길동 (Gildong Hong)"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-cream-50/50 border border-cream-200 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-ink-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-gold-600" /> 이메일 주소 (Email)
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-cream-50/50 border border-cream-200 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
              </div>

              {/* Service & Destination */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-ink-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Compass className="h-3.5 w-3.5 text-gold-600" /> 이용 서비스 선택
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-cream-50/50 border border-cream-200 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-gold-500 transition-colors text-ink-800"
                  >
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-ink-700 uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-gold-600" /> 여행 희망지 (Destination)
                  </label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full bg-cream-50/50 border border-cream-200 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-gold-500 transition-colors text-ink-800"
                  >
                    {DESTINATIONS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
              </div>

              {/* Travel Date */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-ink-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-gold-600" /> 여행 예정일 (Travel Date)
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full bg-cream-50/50 border border-cream-200 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-gold-500 transition-colors text-ink-700"
                />
              </div>

              {/* Select Platform for Checkout */}
              <div className="space-y-3 pt-2">
                <label className="text-xs font-semibold text-ink-700 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold-600" /> 2. 결제 및 예약 결제 플랫폼 선택
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {CHANNELS.map((c) => {
                    const isSelected = selectedChannel === c.name;
                    return (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setSelectedChannel(c.name)}
                        className={`flex items-center justify-between px-3.5 py-3 border rounded-sm transition-all text-left ${
                          isSelected 
                            ? 'bg-ink-950 border-ink-950 text-cream-50 shadow-md scale-[1.02]' 
                            : 'bg-cream-50/40 border-cream-200 text-ink-800 hover:bg-cream-50 hover:border-cream-300'
                        }`}
                      >
                        <span className="text-xs font-semibold tracking-wide">{c.name}</span>
                        {isSelected && <Check className="h-3.5 w-3.5 text-gold-400" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-ink-700 uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquare className="h-3.5 w-3.5 text-gold-600" /> 추가 요청 사항 (Message)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="예약 인원, 특별한 요청 사항 혹은 픽업 희망 시간 등을 입력해 주세요."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-cream-50/50 border border-cream-200 p-4 rounded-sm text-sm focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gold-600 hover:bg-gold-700 text-white font-medium py-4 px-6 rounded-sm shadow-md transition-colors text-sm uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? '안전 결제 게이트웨이 연결 중...' : `${activeChannel.name} 에스크로 예약 & 결제하기`}
                <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </article>

          {/* RIGHT: Vetted Channels Direct Checkouts */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-ink-950 border border-cream-100/10 p-6 rounded-sm text-cream-50 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
              <h2 className="font-serif text-xl font-normal text-cream-100 mb-4 pb-2 border-b border-cream-100/10 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-gold-400" />
                Vetted Travel Channels
              </h2>
              <p className="text-xs text-cream-200/70 leading-relaxed mb-6">
                KoreaHaru의 모든 서비스는 관광청 인증 플랫폼 및 글로벌 에스크로 정산망을 통하여 결제 대금이 안전하게 보호됩니다. 
                원하시는 플랫폼 카드를 아래에서 클릭하시면 간편 간이 창을 통해 즉시 결제 링크로 연결할 수 있습니다.
              </p>

              {/* Vertical list of platforms */}
              <div className="space-y-4">
                {CHANNELS.map((c) => {
                  const isSelected = selectedChannel === c.name;
                  return (
                    <article
                      key={c.name}
                      onClick={() => handleQuickChannelRedirect(c.name)}
                      className="cursor-pointer border rounded-sm p-4 transition-all group relative"
                      style={{ 
                        backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.03)' : 'transparent',
                        borderColor: isSelected ? c.color : 'rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span 
                            className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-transform group-hover:scale-105"
                            style={{ 
                              backgroundColor: c.bgColor, 
                              color: c.color,
                              border: `1px solid ${c.borderColor}` 
                            }}
                          >
                            {c.symbol}
                          </span>
                          <h3 className="text-sm font-semibold tracking-wide text-cream-50 group-hover:text-gold-400 transition-colors">
                            {c.name}
                          </h3>
                        </div>
                        <span className="text-[10px] text-cream-200/40 group-hover:text-cream-200/80 transition-all flex items-center gap-1">
                          {c.payText}
                          <ExternalLink className="h-2.5 w-2.5" />
                        </span>
                      </div>
                      <p className="text-[11px] text-cream-200/60 leading-relaxed pl-10 pr-4">
                        {c.desc}
                      </p>
                      {/* Glow indicator line */}
                      {isSelected && (
                        <div 
                          className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-sm" 
                          style={{ backgroundColor: c.color }}
                        />
                      )}
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Escrow assurance note */}
            <div className="bg-cream-100/50 border border-cream-200 p-5 rounded-sm text-left">
              <h4 className="text-xs font-bold text-ink-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                🔒 100% 안전 대금 보호 제도
              </h4>
              <p className="text-[11px] text-ink-600 leading-relaxed">
                고객님이 예약금을 결제하시면 여행이 성사되고 에스코트 서비스가 끝날 때까지 파트너 대금 에스크로 망에 
                금액이 보관되며, 투어가 정상적으로 종료된 후에 당사로 정산됩니다. 예기치 못한 일정 변경이나 노쇼(No-Show) 발생 시 
                각 플랫폼 규정에 의거 신속하게 전액 환불 처리가 보장됩니다.
              </p>
            </div>
          </aside>
          
        </div>
      </Container>

      {/* SECURE CHECKOUT OVERLAY MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/80 backdrop-blur-sm animate-fade-in">
          <div 
            className="w-full max-w-md bg-white border border-cream-200 p-8 rounded-sm shadow-2xl relative text-center"
            style={{ borderTop: `4px solid ${activeChannel.color}` }}
          >
            {/* Pulsing indicator */}
            <div className="flex justify-center mb-6">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: activeChannel.bgColor }}>
                <ShieldCheck className="h-6 w-6" style={{ color: activeChannel.color }} />
              </span>
            </div>

            <h3 className="font-serif text-2xl text-ink-900 font-normal mb-3">
              {activeChannel.name} 안전 결제 연결
            </h3>
            
            {success ? (
              <div className="space-y-4">
                {activeChannel.name === 'Wise Direct Transfer' ? (
                  <p className="text-sm text-ink-700 leading-relaxed">
                    예약 신청이 성공적으로 접수되었습니다! 입력하신 연락처(WhatsApp/이메일)로 <strong>15% – 20% 수수료 할인</strong>이 적용된 Wise 전용 입금 계좌 정보 및 최종 인보이스를 신속하게 전송해 드립니다.
                  </p>
                ) : (
                  <p className="text-sm text-ink-700 leading-relaxed">
                    예약 세부 정보가 성공적으로 확인되었습니다! 선택하신 <strong>{activeChannel.name}</strong> 에스크로 결제망으로 지금 즉시 안전하게 연동 및 리다이렉트됩니다.
                  </p>
                )}
                <div className="bg-cream-50 p-4 rounded-sm border border-cream-200 text-left space-y-2 text-xs text-ink-800 font-mono">
                  <div>· 예약자: {formData.name}</div>
                  <div>· 서비스: {formData.service.split(' (')[0]}</div>
                  <div>· 일정: {formData.date}</div>
                  <div>· 결제수단: {activeChannel.name === 'Wise Direct Transfer' ? 'Wise Direct Remittance (Discounted)' : `${activeChannel.name} Escrow`}</div>
                </div>
              </div>
            ) : (
              <p className="text-sm text-ink-700 leading-relaxed">
                {activeChannel.name === 'Wise Direct Transfer' ? (
                  'Wise 송금을 이용하시면 플랫폼 수수료(15%~20%)가 제외된 가장 저렴한 직거래 가격 혜택을 받으실 수 있습니다.'
                ) : (
                  `${activeChannel.name} 예약 정산 게이트웨이로 바로 연결하여 간편 신용카드/앱카드로 실시간 원화 결제를 수행할 수 있습니다.`
                )}
              </p>
            )}

            <div className="mt-8 space-y-3">
              {activeChannel.name === 'Wise Direct Transfer' ? (
                <a
                  href="https://wise.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-semibold text-white rounded-sm transition-colors shadow-sm animate-pulse"
                  style={{ backgroundColor: activeChannel.color }}
                >
                  Wise 공식 사이트 방문하기
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : (
                <a
                  href={`https://www.google.com/search?q=KoreaHaru+${activeChannel.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-semibold text-white rounded-sm transition-colors shadow-sm"
                  style={{ backgroundColor: activeChannel.color }}
                >
                  {activeChannel.name} 결제창으로 이동하기
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="w-full py-2.5 text-xs text-ink-500 hover:text-ink-900 transition-colors uppercase tracking-wider font-semibold border-t border-cream-100 mt-2"
              >
                창 닫기 (이전 화면으로)
              </button>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
