'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Smartphone, Sparkles, MessageCircle } from 'lucide-react';
import { ZALO_TRAGOP_URL } from '@/lib/constants';

const heroHighlights = [
  {
    icon: Smartphone,
    title: 'iPhone chính hãng',
    description: 'Dòng máy cập nhật liên tục theo kho thực tế.',
  },
  {
    icon: ShieldCheck,
    title: 'Bảo hành uy tín',
    description: 'Hỗ trợ rõ ràng, dễ hiểu, dễ theo dõi.',
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-0 sm:pt-0 lg:pt-28 pb-8 sm:pb-10 lg:pb-16 lg:min-h-[80svh] lg:flex lg:items-end lg:justify-center">

      {/* Desktop background */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <Image
          src="/Hero.png"
          alt="Bé Táo Store hero banner"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-[var(--bg-color)]/75 dark:from-black/20 dark:via-black/5 dark:to-[var(--bg-color)]/80" />
        <div className="absolute -top-24 left-[-10%] h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="absolute top-1/3 right-[-8%] h-80 w-80 rounded-full bg-amber-300/15 blur-3xl" />
      </div>

      {/* Mobile/Tablet hero image */}
      <div className="relative z-10 lg:hidden" style={{ paddingTop: '56px' }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '52vw',
          minHeight: 180,
          maxHeight: 260,
          overflow: 'hidden',
        }}>
          <Image
            src="/Hero.png"
            alt="Bé Táo Store hero banner"
            fill
            priority
            style={{
              objectFit: 'cover',
              objectPosition: 'center 30%',
              transform: 'scale(1.18)',
              transformOrigin: 'center 35%',
            }}
            sizes="100vw"
          />
        </div>
      </div>

      {/* Hero card */}
      <div className="relative z-10 w-full max-w-4xl xl:max-w-5xl mx-auto section-padding mt-5 lg:mt-0">
        <div className="hero-glass-card text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-pill)] border border-emerald-500/25 bg-[var(--color-primary-soft)] text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-semibold"
          >
            <Sparkles size={14} className="shrink-0" />
            iPhone chính hãng · Giá tốt
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="text-display"
          >
            <span className="block text-[var(--text-primary)]">Bé Táo</span>
            <span className="block shimmer-text">Store</span>
          </motion.h1>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
          >
            <a
              href={ZALO_TRAGOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                gap: 10, minHeight: 56, padding: '0 36px', borderRadius: 9999,
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: '#fff', fontWeight: 700, fontSize: 16, textDecoration: 'none',
                boxShadow: '0 8px 28px -4px rgba(37,99,235,0.5)', whiteSpace: 'nowrap',
              }}
            >
              <MessageCircle size={20} />
              Nhận tư vấn mua trả góp ngay
            </a>
          </motion.div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="hero-trust-badge">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
              Cập nhật theo kho thực tế
            </span>
            <span className="hero-trust-badge">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden />
              Tư vấn nhanh trên Zalo
            </span>
            <span className="hero-trust-badge">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden />
              Hỗ trợ mua trả góp
            </span>
          </div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            className="hero-highlights-grid"
          >
            {heroHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="hero-highlight-card" style={{ animationDelay: `${index * 90}ms` }}>
                  <div className="hero-highlight-icon"><Icon size={22} /></div>
                  <div className="hero-highlight-text">
                    <p className="hero-highlight-title">{item.title}</p>
                    <p className="hero-highlight-desc">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
