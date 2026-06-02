'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone } from 'lucide-react';
import ProductCard from './ProductCard';

export default function ProductGrid({ cards, onCardClick, onResetFilter }) {
  return (
    <div className="product-grid">
      <AnimatePresence mode="popLayout">
        {cards.map((card) => (
          <ProductCard key={card.name} card={card} onClick={onCardClick} />
        ))}
      </AnimatePresence>

      {cards.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-full w-full text-center py-16 sm:py-24"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] mb-5">
            <Smartphone size={32} className="text-[var(--text-muted)]" strokeWidth={1.5} />
          </div>
          <p className="text-lg font-semibold text-[var(--text-primary)]">
            Không tìm thấy sản phẩm
          </p>
          <p className="text-sm text-[var(--text-muted)] mt-2 max-w-sm mx-auto">
            Thử chọn dòng iPhone khác hoặc xem toàn bộ danh mục.
          </p>
          {onResetFilter && (
            <button
              type="button"
              onClick={onResetFilter}
              className="mt-6 btn-primary text-sm py-3 px-6 min-h-[44px]"
            >
              Xem tất cả sản phẩm
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
}
