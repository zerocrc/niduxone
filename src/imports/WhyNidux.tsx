import { useState, useRef, useEffect } from "react";
import {
  Calculator,
  DollarSign,
  TrendingDown,
  TrendingUp,
  ShoppingCart,
  MessageCircle,
  Heart,
  Puzzle,
  Shirt,
  PawPrint,
  Sparkles,
  Package,
  Unlink,
  Users,
  BarChart3,
  Smartphone,
  Bell,
  Gift,
  ArrowRight,
  CheckCircle2,
  Zap,
  Store,
  Globe,
  Layers,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   WHY NIDUX — 3 interactive tabs section
   ═══════════════════════════════════════════════════════════════ */

const TABS = [
  { id: "calculator", label: "Calculadora de Ventas", icon: Calculator },
  { id: "builder", label: "Constructor Visual", icon: Puzzle },
  { id: "simulator", label: "Simulador de Retención", icon: Smartphone },
] as const;

type TabId = (typeof TABS)[number]["id"];

/* ─────────────── animated number ─────────────── */
function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<number>();

  useEffect(() => {
    const start = display;
    const diff = value - start;
    const duration = 600;
    const t0 = performance.now();
    cancelAnimationFrame(ref.current!);
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(start + diff * ease));
      if (p < 1) ref.current = requestAnimationFrame(tick);
    };
    ref.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(ref.current!);
  }, [value]);

  return (
    <span>
      {prefix}
      {display.toLocaleString("es-CR")}
      {suffix}
    </span>
  );
}

/* ─────────────── TAB 1: Sales Leak Calculator ─────────────── */
function SalesLeakCalculator() {
  const [monthlySales, setMonthlySales] = useState(200);
  const [avgTicket, setAvgTicket] = useState(25000);
  const [abandonRate, setAbandonRate] = useState(30);

  const monthlyRevenue = monthlySales * avgTicket;
  const leakAmount = Math.round(monthlyRevenue * (abandonRate / 100));
  const recoveryWhatsapp = Math.round(leakAmount * 0.35);
  const recoveryLoyalty = Math.round(monthlyRevenue * 0.12);
  const totalRecovery = recoveryWhatsapp + recoveryLoyalty;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Sliders */}
      <div className="space-y-8">
        <SliderInput
          label="Ventas mensuales"
          value={monthlySales}
          onChange={setMonthlySales}
          min={10}
          max={1000}
          step={10}
          suffix=" ventas"
          icon={<ShoppingCart className="w-4 h-4" />}
        />
        <SliderInput
          label="Ticket promedio"
          value={avgTicket}
          onChange={setAvgTicket}
          min={5000}
          max={200000}
          step={1000}
          prefix="₡"
          icon={<DollarSign className="w-4 h-4" />}
        />
        <SliderInput
          label="Tasa de abandono estimada"
          value={abandonRate}
          onChange={setAbandonRate}
          min={5}
          max={80}
          step={1}
          suffix="%"
          icon={<TrendingDown className="w-4 h-4" />}
        />
      </div>

      {/* Results */}
      <div className="space-y-5">
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
          <p className="text-red-400 text-sm font-medium mb-1 flex items-center gap-2">
            <TrendingDown className="w-4 h-4" /> Fuga mensual estimada
          </p>
          <p className="text-3xl sm:text-4xl font-bold text-red-400">
            <AnimatedNumber value={leakAmount} prefix="₡" />
          </p>
          <p className="text-[var(--nx-text-5)] text-xs mt-2">
            Dinero que se pierde por carritos abandonados y falta de seguimiento
          </p>
        </div>

        <div className="bg-[var(--nx-accent)]/10 border border-[var(--nx-accent)]/20 rounded-2xl p-6">
          <p className="text-[var(--nx-accent)] text-sm font-medium mb-1 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" /> Recuperación con Nidux
          </p>
          <p className="text-3xl sm:text-4xl font-bold text-[var(--nx-accent)]">
            <AnimatedNumber value={totalRecovery} prefix="+₡" />
            <span className="text-lg text-[var(--nx-text-4)]"> /mes</span>
          </p>
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-2 text-sm text-[var(--nx-text-3)]">
              <MessageCircle className="w-4 h-4 text-[var(--nx-accent)]" />
              <span>WhatsApp carrito abandonado: </span>
              <span className="font-semibold text-[var(--nx-text)]">
                +₡{recoveryWhatsapp.toLocaleString("es-CR")}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--nx-text-3)]">
              <Heart className="w-4 h-4 text-[var(--nx-accent)]" />
              <span>Programa de lealtad QPONS: </span>
              <span className="font-semibold text-[var(--nx-text)]">
                +₡{recoveryLoyalty.toLocaleString("es-CR")}
              </span>
            </div>
          </div>
        </div>

        <a
          href="#agendar"
          className="flex items-center justify-center gap-2 bg-[var(--nx-accent)] text-black font-bold text-sm py-3.5 rounded-full hover:brightness-110 transition w-full"
        >
          Recuperar mis ventas <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix = "",
  suffix = "",
  icon,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  icon: React.ReactNode;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <label className="text-sm text-[var(--nx-text-3)] flex items-center gap-2">
          <span className="text-[var(--nx-accent)]">{icon}</span>
          {label}
        </label>
        <span className="text-lg font-bold text-[var(--nx-text)]">
          {prefix}
          {value.toLocaleString("es-CR")}
          {suffix}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 appearance-none rounded-full cursor-pointer"
          style={{
            background: `linear-gradient(to right, #C9F31D ${pct}%, rgba(255,255,255,0.1) ${pct}%)`,
          }}
        />
      </div>
    </div>
  );
}

/* ─────────────── TAB 2: Visual Ecosystem Builder ─────────────── */

const INDUSTRIES = [
  { id: "ropa", label: "Moda", emoji: "👗" },
  { id: "mascotas", label: "Mascotas", emoji: "🐾" },
  { id: "belleza", label: "Belleza", emoji: "💄" },
  { id: "alimentos", label: "Alimentos", emoji: "🍽️" },
  { id: "tech", label: "Tecnología", emoji: "💻" },
  { id: "hogar", label: "Hogar", emoji: "🏠" },
];

const PAIN_POINTS = [
  { id: "inventario", label: "Inventario desordenado", icon: Package, module: "NDX POS", color: "#C9F31D" },
  { id: "canales", label: "Canales desconectados", icon: Unlink, module: "NDX Ecommerce", color: "#22d3ee" },
  { id: "clientes", label: "No conozco a mis clientes", icon: Users, module: "NDX Loyalty", color: "#f472b6" },
  { id: "whatsapp", label: "WhatsApp manual y lento", icon: MessageCircle, module: "NDX Connect", color: "#4ade80" },
  { id: "datos", label: "Sin datos para decidir", icon: BarChart3, module: "NDX Analytics", color: "#a78bfa" },
  { id: "online", label: "No vendo online", icon: Globe, module: "NDX Ecommerce", color: "#fb923c" },
];

function EcosystemBuilder() {
  const [step, setStep] = useState(1);
  const [industry, setIndustry] = useState<string | null>(null);
  const [painPoints, setPainPoints] = useState<string[]>([]);

  const togglePain = (id: string) => {
    setPainPoints((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]));
  };

  const selectedModules = PAIN_POINTS.filter((p) => painPoints.includes(p.id));
  const uniqueModules = [...new Map(selectedModules.map((m) => [m.module, m])).values()];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
      {/* Left: Steps */}
      <div className="lg:col-span-3 space-y-6">
        {/* Step indicators */}
        <div className="flex items-center gap-3 mb-6">
          {[1, 2].map((s) => (
            <button
              key={s}
              onClick={() => s === 1 || industry ? setStep(s) : undefined}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
                step === s
                  ? "bg-[var(--nx-accent)] text-black"
                  : s < step
                  ? "bg-[var(--nx-accent)]/20 text-[var(--nx-accent)] cursor-pointer"
                  : "bg-[var(--nx-surface)] text-[var(--nx-text-5)]"
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center text-xs font-bold">
                {s < step ? "✓" : s}
              </span>
              {s === 1 ? "Industria" : "Dolores"}
            </button>
          ))}
        </div>

        {step === 1 && (
          <div>
            <p className="text-[var(--nx-text-3)] text-sm mb-4">¿En qué industria está su negocio?</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {INDUSTRIES.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => {
                    setIndustry(ind.id);
                    setStep(2);
                  }}
                  className={`flex flex-col items-center gap-2 p-5 rounded-2xl border transition hover:scale-[1.03] ${
                    industry === ind.id
                      ? "border-[var(--nx-accent)] bg-[var(--nx-accent)]/10 shadow-[0_0_20px_rgba(201,243,29,0.1)]"
                      : "border-[var(--nx-border)] bg-[var(--nx-surface)] hover:border-[var(--nx-accent)]/40"
                  }`}
                >
                  <span className="text-3xl">{ind.emoji}</span>
                  <span className="text-sm font-medium text-[var(--nx-text)]">{ind.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="text-[var(--nx-text-3)] text-sm mb-4">
              ¿Qué le causa más dolor de cabeza hoy? <span className="text-[var(--nx-text-5)]">(seleccione varios)</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PAIN_POINTS.map((pain) => {
                const selected = painPoints.includes(pain.id);
                const Icon = pain.icon;
                return (
                  <button
                    key={pain.id}
                    onClick={() => togglePain(pain.id)}
                    className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition hover:scale-[1.02] ${
                      selected
                        ? "border-[var(--nx-accent)] bg-[var(--nx-accent)]/10"
                        : "border-[var(--nx-border)] bg-[var(--nx-surface)] hover:border-[var(--nx-accent)]/30"
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${pain.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: pain.color }} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[var(--nx-text)]">{pain.label}</p>
                      <p className="text-xs text-[var(--nx-text-5)]">{pain.module}</p>
                    </div>
                    {selected && <CheckCircle2 className="w-5 h-5 text-[var(--nx-accent)] ml-auto shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Right: Visual ecosystem preview */}
      <div className="lg:col-span-2">
        <div className="bg-[var(--nx-surface)] border border-[var(--nx-border)] rounded-3xl p-6 min-h-[320px] flex flex-col">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--nx-accent)] mb-4">
            Tu ecosistema Nidux
          </p>

          {uniqueModules.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-center">
              <div>
                <Layers className="w-10 h-10 text-[var(--nx-text-5)] mx-auto mb-3 opacity-40" />
                <p className="text-sm text-[var(--nx-text-5)]">
                  Seleccione sus dolores de cabeza y vea cómo Nidux los resuelve
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3 flex-1">
              {/* Central hub */}
              <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[var(--nx-accent)]/10 border border-[var(--nx-accent)]/30">
                <Zap className="w-5 h-5 text-[var(--nx-accent)]" />
                <span className="font-bold text-sm text-[var(--nx-accent)]">Nidux One</span>
              </div>

              {/* Connected modules */}
              <div className="space-y-2">
                {uniqueModules.map((mod, i) => {
                  const Icon = PAIN_POINTS.find((p) => p.module === mod.module)!.icon;
                  return (
                    <div
                      key={mod.module}
                      className="flex items-center gap-3 p-3 rounded-xl border border-[var(--nx-border)] bg-black/20 animate-[fadeSlideIn_0.3s_ease-out_forwards]"
                      style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ background: mod.color }} />
                      <Icon className="w-4 h-4" style={{ color: mod.color }} />
                      <span className="text-sm font-medium text-[var(--nx-text)]">{mod.module}</span>
                      <span className="text-xs text-[var(--nx-text-5)] ml-auto">Sincronizado 24/7</span>
                    </div>
                  );
                })}
              </div>

              {uniqueModules.length >= 2 && (
                <div className="mt-4 pt-4 border-t border-[var(--nx-border)]">
                  <a
                    href="#agendar"
                    className="flex items-center justify-center gap-2 bg-[var(--nx-accent)] text-black font-bold text-sm py-3 rounded-full hover:brightness-110 transition w-full"
                  >
                    Armar mi ecosistema <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────── TAB 3: Immersive Retention Simulator ─────────────── */

function RetentionSimulator() {
  const [productName, setProductName] = useState("");
  const [simulating, setSimulating] = useState(false);
  const [step, setStep] = useState(0);

  const displayProduct = productName.trim() || "Crema Facial Premium";

  const startSimulation = () => {
    setSimulating(true);
    setStep(0);
    let s = 0;
    const interval = setInterval(() => {
      s++;
      setStep(s);
      if (s >= 4) clearInterval(interval);
    }, 1200);
  };

  const resetSimulation = () => {
    setSimulating(false);
    setStep(0);
  };

  const messages = [
    {
      type: "notification",
      title: "QPONS.VIP",
      text: `📍 ¡Bienvenido! Detectamos que estás cerca de nuestra tienda`,
    },
    {
      type: "whatsapp",
      title: "Tu Tienda",
      text: `¡Hola! 👋 Vimos que te encanta ${displayProduct}. Hoy tienes un cupón VIP por tus compras frecuentes`,
    },
    {
      type: "coupon",
      title: "Cupón exclusivo",
      text: `🎁 15% OFF en ${displayProduct} — Solo hoy, solo para ti`,
    },
    {
      type: "result",
      title: "Resultado",
      text: "El cliente compra con su cupón y acumula puntos de lealtad ✅",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Left: Controls */}
      <div className="space-y-6">
        <div>
          <p className="text-[var(--nx-text-3)] text-sm mb-3">
            Escriba el nombre de un producto estrella de su negocio:
          </p>
          <div className="relative">
            <input
              type="text"
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
                if (simulating) resetSimulation();
              }}
              placeholder="Ej: Crema Facial Premium"
              className="w-full bg-transparent border border-[var(--nx-border)] rounded-xl px-4 py-3.5 text-[var(--nx-text)] placeholder:text-[var(--nx-text-5)] focus:border-[#C9F31D]/50 focus:outline-none transition"
            />
            <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--nx-accent)]" />
          </div>
        </div>

        <button
          onClick={simulating ? resetSimulation : startSimulation}
          className={`flex items-center justify-center gap-2 font-bold text-sm py-3.5 rounded-full transition w-full ${
            simulating
              ? "bg-[var(--nx-surface)] border border-[var(--nx-border)] text-[var(--nx-text-3)] hover:bg-[var(--nx-surface)]"
              : "bg-[var(--nx-accent)] text-black hover:brightness-110"
          }`}
        >
          {simulating ? (
            <>Reiniciar simulación</>
          ) : (
            <>
              <Zap className="w-4 h-4" /> Simular experiencia del cliente
            </>
          )}
        </button>

        {step >= 4 && (
          <div className="bg-[var(--nx-accent)]/10 border border-[var(--nx-accent)]/20 rounded-2xl p-5 animate-[fadeSlideIn_0.4s_ease-out_forwards]">
            <p className="text-[var(--nx-accent)] text-sm font-bold mb-2">Esto es Comercio Unificado</p>
            <p className="text-[var(--nx-text-3)] text-sm leading-relaxed">
              Con Nidux, cada cliente recibe mensajes personalizados basados en su historial, ubicación y preferencias.
              Todo automatizado.
            </p>
            <a
              href="#agendar"
              className="flex items-center justify-center gap-2 bg-[var(--nx-accent)] text-black font-bold text-sm py-3 rounded-full hover:brightness-110 transition w-full mt-4"
            >
              Activar 30 días gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>

      {/* Right: Phone mockup */}
      <div className="flex justify-center">
        <div className="relative w-[280px] sm:w-[300px]">
          {/* Phone frame */}
          <div className="bg-[#1a1a1a] rounded-[2.5rem] border-2 border-[#333] p-3 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
            {/* Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />

            {/* Screen */}
            <div className="bg-gradient-to-b from-[#0f1a0f] to-[#0a0a0a] rounded-[2rem] min-h-[420px] overflow-hidden relative pt-10 px-3 pb-4">
              {/* Status bar */}
              <div className="flex justify-between items-center px-2 mb-6 text-[10px] text-[var(--nx-text-4)]">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <span>5G</span>
                  <div className="w-6 h-3 border border-[var(--nx-text-5)] rounded-sm relative">
                    <div className="absolute inset-[2px] right-[4px] bg-[var(--nx-accent)] rounded-[1px]" />
                  </div>
                </div>
              </div>

              {/* Store header */}
              <div className="flex items-center gap-2 mb-6 px-1">
                <div className="w-8 h-8 rounded-full bg-[var(--nx-accent)]/20 flex items-center justify-center">
                  <Store className="w-4 h-4 text-[var(--nx-accent)]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--nx-text)]">Tu Tienda</p>
                  <p className="text-[10px] text-[var(--nx-text-5)]">Cliente frecuente · 120 pts</p>
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-3">
                {!simulating && (
                  <div className="flex items-center justify-center h-48 text-center">
                    <div>
                      <Smartphone className="w-8 h-8 text-[var(--nx-text-5)] mx-auto mb-2 opacity-40" />
                      <p className="text-xs text-[var(--nx-text-5)]">
                        Presione "Simular" para ver la experiencia del cliente
                      </p>
                    </div>
                  </div>
                )}

                {simulating &&
                  messages.map((msg, i) => {
                    if (i >= step) return null;
                    const isNotification = msg.type === "notification";
                    const isCoupon = msg.type === "coupon";
                    const isResult = msg.type === "result";
                    return (
                      <div
                        key={i}
                        className="animate-[fadeSlideIn_0.4s_ease-out_forwards]"
                        style={{ opacity: 0, animationDelay: "0ms" }}
                      >
                        {isNotification && (
                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/5">
                            <div className="flex items-center gap-2 mb-1">
                              <Bell className="w-3 h-3 text-[var(--nx-accent)]" />
                              <span className="text-[10px] font-bold text-[var(--nx-accent)]">{msg.title}</span>
                              <span className="text-[9px] text-[var(--nx-text-5)] ml-auto">ahora</span>
                            </div>
                            <p className="text-[11px] text-[var(--nx-text-3)] leading-relaxed">{msg.text}</p>
                          </div>
                        )}
                        {msg.type === "whatsapp" && (
                          <div className="bg-[#005c4b] rounded-2xl rounded-tl-sm p-3">
                            <p className="text-[11px] text-white/90 leading-relaxed">{msg.text}</p>
                            <p className="text-[9px] text-white/40 text-right mt-1">10:32 ✓✓</p>
                          </div>
                        )}
                        {isCoupon && (
                          <div className="bg-gradient-to-r from-[var(--nx-accent)]/20 to-[var(--nx-accent)]/5 border border-[var(--nx-accent)]/30 rounded-2xl p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <Gift className="w-3 h-3 text-[var(--nx-accent)]" />
                              <span className="text-[10px] font-bold text-[var(--nx-accent)]">{msg.title}</span>
                            </div>
                            <p className="text-[11px] text-[var(--nx-text)] leading-relaxed">{msg.text}</p>
                          </div>
                        )}
                        {isResult && (
                          <div className="bg-[var(--nx-accent)]/10 border border-[var(--nx-accent)]/20 rounded-2xl p-3 text-center">
                            <p className="text-[11px] text-[var(--nx-accent)] font-medium">{msg.text}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── MAIN SECTION EXPORT ─────────────── */

export default function WhyNiduxSection() {
  const [activeTab, setActiveTab] = useState<TabId>("calculator");

  return (
    <section
      id="por-que-nidux"
      data-reveal="scale"
      className="relative py-16 md:py-24 snap-start shrink-0 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(201,243,29,0.03) 0%, #0a0a0a 70%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-[var(--nx-accent)] text-xs font-bold tracking-[0.2em] uppercase">
            Descúbralo usted mismo
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            ¿Por qué elegir <span className="text-[var(--nx-accent)]">Nidux?</span>
          </h2>
          <p className="mt-3 text-[var(--nx-text-4)] text-base max-w-lg mx-auto">
            Interactúe con nuestras herramientas y vea el impacto real en su negocio.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition ${
                  isActive
                    ? "bg-[var(--nx-accent)] text-black shadow-[0_0_20px_rgba(201,243,29,0.2)]"
                    : "bg-[var(--nx-surface)] border border-[var(--nx-border)] text-[var(--nx-text-3)] hover:border-[var(--nx-accent)]/40 hover:text-[var(--nx-text)]"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div className="bg-[var(--nx-surface)] border border-[var(--nx-border)] rounded-3xl p-6 md:p-10 backdrop-blur-sm">
          {activeTab === "calculator" && <SalesLeakCalculator />}
          {activeTab === "builder" && <EcosystemBuilder />}
          {activeTab === "simulator" && <RetentionSimulator />}
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #C9F31D;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(201,243,29,0.4);
        }
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #C9F31D;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(201,243,29,0.4);
        }
      `}</style>
    </section>
  );
}
