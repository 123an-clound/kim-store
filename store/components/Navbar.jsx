'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useSyncExternalStore } from 'react';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOGO_URL } from '@/lib/supabase';
import { TEL_URL, HOTLINE_DISPLAY } from '@/lib/constants';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const scrolled = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener('scroll', onStoreChange, { passive: true });
      return () => window.removeEventListener('scroll', onStoreChange);
    },
    () => window.scrollY > 16,
    () => false
  );

  useEffect(() => {
    // Sync initial theme from HTML class set in layout script.
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    try {
      localStorage.setItem('theme', next);
    } catch {}
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--surface)]/96 backdrop-blur-xl border-b border-[var(--border-subtle)] shadow-[var(--shadow-1)]'
          : 'bg-[var(--surface)]/80 backdrop-blur-md'
      }`}
    >
      <div className="section-shell section-padding flex items-center justify-between h-14 sm:h-16 lg:h-[4.5rem]">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group focus-ring rounded-lg">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-[var(--radius-md)] overflow-hidden ring-1 ring-[var(--border-subtle)] group-hover:ring-emerald-500/40 transition-all">
            <Image
              src={LOGO_URL}
              alt="Bé Táo Store logo"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 32px, 36px"
            />
          </div>
          <span className="font-bold text-base sm:text-lg lg:text-xl tracking-tight heading-display">
            <span className="text-[var(--text-primary)]">Bé Táo</span>{' '}
            <span className="text-gold-gradient">Store</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="btn-ghost gap-2 !min-h-[40px] px-4"
            aria-label={theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            {theme === 'dark' ? 'Sáng' : 'Tối'}
          </button>
          <a href={TEL_URL} className="btn-ghost gap-2 !min-h-[40px] px-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden />
            {HOTLINE_DISPLAY}
          </a>
          <a href="#products" className="btn-primary btn-sm !min-h-[40px] px-5">
            Sản phẩm
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-[var(--text-primary)] focus-ring rounded-[var(--radius-md)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-[var(--border-subtle)] bg-[var(--surface)] px-4 sm:px-6 pb-5"
          >
            <div className="rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-3 sm:p-4">
              <button
                type="button"
                onClick={() => {
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-between py-3 text-base sm:text-lg font-semibold text-[var(--text-primary)] border-b border-[var(--border-subtle)]"
              >
                <span className="flex items-center gap-2">
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                  {theme === 'dark' ? 'Giao diện sáng' : 'Giao diện tối'}
                </span>
                <span className="text-caption">{theme === 'dark' ? 'Chuyển sáng' : 'Chuyển tối'}</span>
              </button>
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 text-base sm:text-lg font-semibold text-[var(--text-primary)] border-b border-[var(--border-subtle)]"
              >
                <span>Xem sản phẩm</span>
                <span className="text-caption">Khám phá ngay</span>
              </a>
              <a href={TEL_URL} className="mt-4 btn-primary w-full !min-h-[48px]">
                <Phone size={18} />
                Gọi {HOTLINE_DISPLAY}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
