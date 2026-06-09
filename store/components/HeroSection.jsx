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
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-[var(--bg-color)]/75 dark:from-black/20 dark:via-black/5 dark:to-[var(--bg-color)]/80" />
        <div className="absolute -top-24 left-[-10%] h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute top-1/3 right-[-8%] h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
        
        {/* Animated SVG decorations */}
        <motion.svg
          className="absolute top-[10%] left-[5%] w-16 h-16 text-orange-600 dark:text-[var(--color-primary)]/30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ filter: 'drop-shadow(0 0 20px rgba(234, 88, 12, 0.8))' }}
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </motion.svg>
        
        <motion.svg
          className="absolute top-[20%] right-[15%] w-12 h-12 text-orange-500 dark:text-[var(--color-primary)]/45"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ filter: 'drop-shadow(0 0 25px rgba(249, 115, 22, 0.8))' }}
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <rect x="7" y="7" width="10" height="10" rx="1" fill="currentColor" opacity="0.6" />
        </motion.svg>
        
        <motion.svg
          className="absolute bottom-[30%] left-[8%] w-20 h-20 text-amber-600 dark:text-[var(--color-primary)]/24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          animate={{ 
            scale: [1, 1.25, 1],
            rotate: [0, 60, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: 'drop-shadow(0 0 30px rgba(217, 119, 6, 0.75))' }}
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </motion.svg>
        
        <motion.svg
          className="absolute bottom-[20%] right-[10%] w-14 h-14 text-orange-700 dark:text-[var(--color-primary)]/36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          animate={{ 
            scale: [1, 0.8, 1],
            rotate: [0, -45, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: 'drop-shadow(0 0 25px rgba(194, 65, 12, 0.8))' }}
        >
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v8M8 12h8" strokeWidth="3" />
        </motion.svg>
        
        {/* Floating dots pattern with strong glow */}
        <motion.div
          className="absolute top-[15%] left-[20%] w-4 h-4 rounded-full bg-orange-500 dark:bg-[var(--color-primary)]/60"
          animate={{
            y: [0, -25, 0],
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: 'blur(1.5px) drop-shadow(0 0 15px rgba(249, 115, 22, 0.9))' }}
        />
        <motion.div
          className="absolute top-[25%] right-[25%] w-5 h-5 rounded-full bg-amber-500 dark:bg-[var(--color-primary)]/45"
          animate={{
            y: [0, -20, 0],
            opacity: [0.65, 1, 0.65],
            scale: [1, 1.35, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ filter: 'blur(1.5px) drop-shadow(0 0 18px rgba(245, 158, 11, 0.85))' }}
        />
        <motion.div
          className="absolute bottom-[35%] left-[15%] w-4 h-4 rounded-full bg-orange-600 dark:bg-[var(--color-primary)]/75"
          animate={{
            y: [0, -30, 0],
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ filter: 'blur(1.5px) drop-shadow(0 0 20px rgba(234, 88, 12, 0.9))' }}
        />
        
        {/* iPhone silhouette with strong gradient and glow */}
        <motion.svg
          className="absolute top-[40%] right-[5%] w-24 h-40 text-orange-700 dark:text-[var(--color-primary)]/15"
          viewBox="0 0 24 40"
          fill="currentColor"
          animate={{ 
            y: [0, -15, 0],
            rotate: [-8, 8, -8]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: 'drop-shadow(0 0 35px rgba(194, 65, 12, 0.7))' }}
        >
          <defs>
            <linearGradient id="iphoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <rect x="2" y="1" width="20" height="38" rx="3" fill="url(#iphoneGradient)" />
          <rect x="4" y="3" width="12" height="1" rx="0.5" fill="rgba(0,0,0,0.5)" />
          <circle cx="12" cy="36" r="1.5" fill="rgba(0,0,0,0.5)" />
        </motion.svg>
        
        {/* Additional decorative elements with strong effects */}
        <motion.div
          className="absolute top-[5%] right-[30%] w-2 h-2 rounded-full bg-orange-500"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: 'drop-shadow(0 0 18px rgba(249, 115, 22, 0.85))' }}
        />
        <motion.div
          className="absolute bottom-[15%] left-[30%] w-2.5 h-2.5 rounded-full bg-amber-600"
          animate={{
            scale: [1, 2.2, 1],
            opacity: [0.55, 1, 0.55]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          style={{ filter: 'drop-shadow(0 0 20px rgba(217, 119, 6, 0.8))' }}
        />
        <motion.div
          className="absolute top-[45%] left-[3%] w-1.5 h-1.5 rounded-full bg-orange-600"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          style={{ filter: 'drop-shadow(0 0 15px rgba(234, 88, 12, 0.75))' }}
        />
      </div>

      {/* Mobile/Tablet hero image - removed to fix 404 error */}
      <div className="relative z-10 lg:hidden" style={{ paddingTop: '56px' }}>
        <div className="absolute -top-24 left-[-10%] h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute top-1/3 right-[-8%] h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
        
        {/* Animated SVG decorations for mobile */}
        <motion.svg
          className="absolute top-[5%] left-[10%] w-12 h-12 text-orange-600 dark:text-[var(--color-primary)]/30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ filter: 'drop-shadow(0 0 20px rgba(234, 88, 12, 0.8))' }}
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </motion.svg>
        
        <motion.svg
          className="absolute top-[15%] right-[10%] w-10 h-10 text-orange-500 dark:text-[var(--color-primary)]/45"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ filter: 'drop-shadow(0 0 25px rgba(249, 115, 22, 0.8))' }}
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <rect x="7" y="7" width="10" height="10" rx="1" fill="currentColor" opacity="0.6" />
        </motion.svg>
        
        <motion.div
          className="absolute top-[20%] left-[25%] w-4 h-4 rounded-full bg-orange-500 dark:bg-[var(--color-primary)]/60"
          animate={{
            y: [0, -20, 0],
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: 'blur(1.5px) drop-shadow(0 0 15px rgba(249, 115, 22, 0.9))' }}
        />
        <motion.div
          className="absolute top-[30%] right-[20%] w-4 h-4 rounded-full bg-amber-500 dark:bg-[var(--color-primary)]/45"
          animate={{
            y: [0, -18, 0],
            opacity: [0.65, 1, 0.65],
            scale: [1, 1.35, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ filter: 'blur(1.5px) drop-shadow(0 0 18px rgba(245, 158, 11, 0.85))' }}
        />
        
        {/* iPhone silhouette for mobile with strong gradient and glow */}
        <motion.svg
          className="absolute bottom-[25%] right-[8%] w-16 h-28 text-orange-700 dark:text-[var(--color-primary)]/15"
          viewBox="0 0 24 40"
          fill="currentColor"
          animate={{ 
            y: [0, -12, 0],
            rotate: [-5, 5, -5]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: 'drop-shadow(0 0 30px rgba(194, 65, 12, 0.7))' }}
        >
          <defs>
            <linearGradient id="iphoneGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <rect x="2" y="1" width="20" height="38" rx="3" fill="url(#iphoneGradientMobile)" />
          <rect x="4" y="3" width="12" height="1" rx="0.5" fill="rgba(0,0,0,0.5)" />
          <circle cx="12" cy="36" r="1.5" fill="rgba(0,0,0,0.5)" />
        </motion.svg>
        
        {/* Additional decorative elements for mobile with strong effects */}
        <motion.div
          className="absolute top-[8%] right-[25%] w-2 h-2 rounded-full bg-orange-500"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: 'drop-shadow(0 0 18px rgba(249, 115, 22, 0.85))' }}
        />
        <motion.div
          className="absolute bottom-[35%] left-[12%] w-1.5 h-1.5 rounded-full bg-amber-600"
          animate={{
            scale: [1, 2.2, 1],
            opacity: [0.55, 1, 0.55]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          style={{ filter: 'drop-shadow(0 0 15px rgba(217, 119, 6, 0.8))' }}
        />
      </div>

      {/* Hero card */}
      <div className="relative z-10 w-full max-w-4xl xl:max-w-5xl mx-auto section-padding mt-5 lg:mt-0">
        <div className="hero-glass-card text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-pill)] border border-blue-500/25 bg-[var(--color-primary-soft)] text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-semibold"
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
            <span className="block text-[var(--text-primary)]">Kim</span>
            <span className="block shimmer-text">Store</span>
          </motion.h1>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
          >
            <motion.a
              href={ZALO_TRAGOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: [
                  '0 8px 28px -4px rgba(245, 158, 11, 0.5)',
                  '0 8px 40px -4px rgba(245, 158, 11, 0.8)',
                  '0 8px 28px -4px rgba(245, 158, 11, 0.5)',
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                },
              }}
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                gap: 10, minHeight: 56, padding: '0 36px', borderRadius: 9999,
                background: 'linear-gradient(135deg, #F59E0B, #FBBF24, #F59E0B)',
                backgroundSize: '200% 200%',
                color: '#fff', fontWeight: 700, fontSize: 16, textDecoration: 'none',
                boxShadow: '0 8px 28px -4px rgba(245, 158, 11, 0.5)', whiteSpace: 'nowrap',
                animation: 'shimmer 3s ease-in-out infinite',
              }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
              >
                <MessageCircle size={20} />
              </motion.span>
              Nhận tư vấn mua trả góp ngay
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="hero-trust-badge">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden />
              Cập nhật theo kho thực tế
            </span>
            <span className="hero-trust-badge">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden />
              Tư vấn nhanh trên Zalo
            </span>
            <span className="hero-trust-badge">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" aria-hidden />
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
