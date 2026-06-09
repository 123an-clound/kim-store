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

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = saved || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);

    // Listen for storage changes from other tabs
    const handleStorageChange = () => {
      const newTheme = localStorage.getItem('theme');
      if (newTheme) setTheme(newTheme);
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const scrolled = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener('scroll', onStoreChange, { passive: true });
      return () => window.removeEventListener('scroll', onStoreChange);
    },
    () => window.scrollY > 16,
    () => false
  );

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
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group focus-ring rounded-lg">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-[var(--radius-md)] overflow-hidden ring-1 ring-[var(--border-subtle)] group-hover:ring-[var(--color-primary)]/50 transition-all shadow-sm group-hover:shadow-md group-hover:shadow-[var(--color-primary)]/20">
              <Image
                src={LOGO_URL}
                alt="Kim store logo"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 40px, 44px"
              />
            </div>
            <span className="font-bold text-lg sm:text-xl lg:text-2xl tracking-tight heading-display">
              <span className="text-[var(--text-primary)]">Kim</span>{' '}
              <span className="text-gold-gradient">Store</span>
            </span>
          </Link>
        </motion.div>

        <div className="hidden lg:flex items-center gap-3">
          <motion.button
            type="button"
            onClick={toggleTheme}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="btn-ghost gap-2 !min-h-[40px] px-4"
            aria-label={theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            {theme === 'dark' ? 'Sáng' : 'Tối'}
          </motion.button>
          <motion.a
            href={TEL_URL}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="btn-ghost gap-2 !min-h-[40px] px-4"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" aria-hidden />
            {HOTLINE_DISPLAY}
          </motion.a>
          <motion.a
            href="#products"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary btn-sm !min-h-[40px] px-5"
          >
            Sản phẩm
          </motion.a>
        </div>

        <motion.button
          type="button"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-[var(--text-primary)] focus-ring rounded-[var(--radius-md)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--surface)' }}
            className="lg:hidden"
          >
            {/* Menu card */}
            <div style={{ margin: '12px 16px 16px', borderRadius: 16, border: '1px solid var(--border-subtle)', background: 'var(--surface-elevated)', overflow: 'hidden' }}>

              {/* Theme toggle */}
              <motion.button
                type="button"
                onClick={() => { toggleTheme(); setMobileMenuOpen(false); }}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '16px 20px', background: 'transparent', border: 'none',
                  borderBottom: '1px solid var(--border-subtle)', cursor: 'pointer',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, fontWeight: 600, color: 'var(--text-primary)' }}>
                  <span style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--surface)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', flexShrink: 0 }}>
                    {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                  </span>
                  {theme === 'dark' ? 'Giao diện sáng' : 'Giao diện tối'}
                </span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: 9999, padding: '3px 10px', fontWeight: 500 }}>
                  {theme === 'dark' ? 'Chuyển sáng' : 'Chuyển tối'}
                </span>
              </motion.button>

              {/* Xem sản phẩm */}
              <motion.a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '16px 20px', textDecoration: 'none',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, fontWeight: 600, color: 'var(--text-primary)' }}>
                  <span style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--surface)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-secondary)' }}><rect x="2" y="3" width="7" height="7"/><rect x="15" y="3" width="7" height="7"/><rect x="2" y="14" width="7" height="7"/><rect x="15" y="14" width="7" height="7"/></svg>
                  </span>
                  Xem sản phẩm
                </span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: 9999, padding: '3px 10px', fontWeight: 500 }}>
                  Khám phá
                </span>
              </motion.a>

              {/* Call CTA */}
              <div style={{ padding: '16px 20px' }}>
                <motion.a
                  href={TEL_URL}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      '0 6px 18px rgba(245, 158, 11, 0.35)',
                      '0 8px 24px rgba(245, 158, 11, 0.5)',
                      '0 6px 18px rgba(245, 158, 11, 0.35)',
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
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    width: '100%', minHeight: 52, borderRadius: 12,
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-hover))',
                    color: '#fff', fontWeight: 700, fontSize: 16,
                    textDecoration: 'none', boxShadow: '0 6px 18px rgba(245, 158, 11, 0.35)',
                  }}
                >
                  <Phone size={18} />
                  Gọi {HOTLINE_DISPLAY}
                </motion.a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
