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
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-40 sm:hidden px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
            aria-label="Liên hệ nhanh"
          >
            <div className="glass-card rounded-t-[var(--radius-2xl)] rounded-b-none border border-[var(--color-primary)]/30 border-b-0 px-3 py-3 shadow-[0_-10px_40px_rgba(245,158,11,0.25)]">
              <div className="grid grid-cols-2 gap-3">
                <motion.a
                  href={ZALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat Zalo"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 h-14 rounded-[var(--radius-lg)] bg-[var(--color-info)] text-white font-semibold focus-ring touch-manipulation shadow-lg"
                >
                  <MessageCircle size={20} />
                  Zalo
                </motion.a>
                <motion.a
                  href={TEL_URL}
                  aria-label="Gọi điện"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 h-14 rounded-[var(--radius-lg)] bg-[var(--color-primary)] text-white font-semibold focus-ring touch-manipulation shadow-lg"
                >
                  <Phone size={20} />
                  Gọi ngay
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.8 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
            className="hidden sm:block fixed bottom-8 right-8 z-40 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
            aria-label="Liên hệ nhanh"
          >
            <div className="glass-card rounded-[var(--radius-xl)] p-2 flex flex-col gap-2 shadow-[0_8px_32px_rgba(245,158,11,0.3)] border border-[var(--color-primary)]/20">
              <motion.a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat Zalo"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(14, 165, 233, 0.7)',
                    '0 0 0 10px rgba(14, 165, 233, 0)',
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                  },
                }}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-info)] text-white focus-ring touch-manipulation shadow-lg"
              >
                <MessageCircle size={24} />
              </motion.a>
              <motion.a
                href={TEL_URL}
                aria-label="Gọi điện"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(245, 158, 11, 0.7)',
                    '0 0 0 10px rgba(245, 158, 11, 0)',
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                    delay: 1,
                  },
                }}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-primary)] text-white focus-ring touch-manipulation shadow-lg"
              >
                <Phone size={24} />
              </motion.a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
