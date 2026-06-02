'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TEL_URL, ZALO_URL } from '@/lib/constants';

export default function FloatingContact({ hidden = false }) {
  return (
    <AnimatePresence>
      {!hidden && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-0 left-0 right-0 z-40 sm:hidden px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
            aria-label="Liên hệ nhanh"
          >
            <div className="glass-card rounded-t-[var(--radius-2xl)] rounded-b-none border border-[var(--border-subtle)] border-b-0 px-3 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.12)]">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={ZALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat Zalo"
                  className="flex items-center justify-center gap-2 h-12 rounded-[var(--radius-lg)] bg-[var(--color-info)] text-white font-semibold focus-ring touch-manipulation"
                >
                  <MessageCircle size={18} />
                  Zalo
                </a>
                <a
                  href={TEL_URL}
                  aria-label="Gọi điện"
                  className="flex items-center justify-center gap-2 h-12 rounded-[var(--radius-lg)] bg-[var(--color-primary)] text-white font-semibold focus-ring touch-manipulation"
                >
                  <Phone size={18} />
                  Gọi ngay
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:block fixed bottom-4 right-3 sm:bottom-6 sm:right-5 z-40 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
            aria-label="Liên hệ nhanh"
          >
            <div className="glass-card rounded-[var(--radius-xl)] p-1.5 sm:p-2 flex flex-col gap-1.5 sm:gap-2">
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat Zalo"
                className="flex items-center justify-center w-11 h-11 sm:min-h-[48px] sm:min-w-[48px] sm:px-3 rounded-full sm:rounded-[var(--radius-lg)] bg-[var(--color-info)] text-white hover:brightness-110 focus-ring touch-manipulation"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href={TEL_URL}
                aria-label="Gọi điện"
                className="flex items-center justify-center w-11 h-11 sm:min-h-[48px] sm:min-w-[48px] sm:px-3 rounded-full sm:rounded-[var(--radius-lg)] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] focus-ring touch-manipulation"
              >
                <Phone size={20} />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
