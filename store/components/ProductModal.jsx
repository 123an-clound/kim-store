'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Phone, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { TEL_URL, ZALO_URL } from '@/lib/constants';

export default function ProductModal({ card, onClose }) {
  const [activeVariant, setActiveVariant] = useState(card.variants[0]);
  const [currentImg, setCurrentImg] = useState(0);
  const closeButtonRef = useRef(null);
  const modalRef = useRef(null);
  const images = activeVariant.images.length > 0 ? activeVariant.images : card.images;
  const isActive = (v) => activeVariant.spec === v.spec && activeVariant.price === v.price;

  const selectVariant = (v) => { setActiveVariant(v); setCurrentImg(0); };

  const prevImage = useCallback(() => {
    if (!images.length) return;
    setCurrentImg((p) => (p - 1 + images.length) % images.length);
  }, [images.length]);

  const nextImage = useCallback(() => {
    if (!images.length) return;
    setCurrentImg((p) => (p + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    setTimeout(() => closeButtonRef.current?.focus(), 50);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, prevImage, nextImage]);

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="bd"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 50,
          background: 'rgba(0,0,0,0.72)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      />

      {/* Modal */}
      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 24 }}
        transition={{ duration: 0.28, type: 'spring', stiffness: 340, damping: 30 }}
        style={{
          position: 'fixed', inset: 0, zIndex: 51,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px',
          pointerEvents: 'none',
        }}
      >
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label={card.name}
          onClick={(e) => e.stopPropagation()}
          style={{
            pointerEvents: 'auto',
            width: '100%',
            maxWidth: 960,
            maxHeight: 'calc(100vh - 32px)',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 24,
            overflow: 'hidden',
            background: 'var(--surface)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.35), 0 0 0 1px var(--border-subtle)',
          }}
        >
          {/* ── HEADER BAR ── */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 20px',
            borderBottom: '1px solid var(--border-subtle)',
            background: 'var(--surface)',
            flexShrink: 0,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                background: 'var(--color-primary-soft)', color: 'var(--color-primary)',
                borderRadius: 9999, padding: '4px 12px',
                fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
              }}>
                <Sparkles size={11} />{card.series}
              </span>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                background: 'var(--surface-elevated)', color: 'var(--text-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 9999, padding: '4px 12px',
                fontSize: 11, fontWeight: 600,
              }}>
                <ShieldCheck size={11} />Chính hãng
              </span>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Đóng"
              style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'var(--surface-elevated)',
                border: '1px solid var(--border-subtle)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)', transition: 'all 0.15s',
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* ── BODY: 2 columns ── */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            minHeight: 0,
            overflow: 'hidden',
          }}>

            {/* LEFT: image */}
            <div style={{
              width: '44%',
              flexShrink: 0,
              position: 'relative',
              background: 'var(--surface-elevated)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 400,
            }}>
              <AnimatePresence mode="wait">
                {images.length > 0 ? (
                  <motion.div
                    key={`${activeVariant.spec}-${currentImg}`}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    <Image
                      src={images[currentImg]}
                      alt={`${card.name} - ${activeVariant.spec}`}
                      fill
                      style={{ objectFit: 'contain', padding: '10%' }}
                      priority
                    />
                  </motion.div>
                ) : (
                  <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>Không có hình ảnh</p>
                )}
              </AnimatePresence>

              {/* Prev / Next */}
              {images.length > 1 && (
                <>
                  <button type="button" onClick={prevImage} aria-label="Ảnh trước"
                    style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', zIndex: 2, width: 40, height: 40, borderRadius: '50%', background: 'rgba(0,0,0,0.45)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', backdropFilter: 'blur(6px)' }}>
                    <ChevronLeft size={18} />
                  </button>
                  <button type="button" onClick={nextImage} aria-label="Ảnh sau"
                    style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', zIndex: 2, width: 40, height: 40, borderRadius: '50%', background: 'rgba(0,0,0,0.45)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', backdropFilter: 'blur(6px)' }}>
                    <ChevronRight size={18} />
                  </button>
                  {/* Dots */}
                  <div style={{ position: 'absolute', bottom: 14, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 6, zIndex: 2 }}>
                    {images.map((_, i) => (
                      <button key={i} type="button" onClick={() => setCurrentImg(i)} aria-label={`Ảnh ${i + 1}`}
                        style={{ height: 5, borderRadius: 9999, border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.2s', width: i === currentImg ? 24 : 5, background: i === currentImg ? '#10b981' : 'rgba(0,0,0,0.2)' }} />
                    ))}
                  </div>
                  {/* Counter */}
                  <div style={{ position: 'absolute', top: 12, right: 12, zIndex: 2, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)', borderRadius: 8, padding: '3px 8px', fontSize: 11, fontWeight: 600, color: '#fff' }}>
                    {currentImg + 1}/{images.length}
                  </div>
                </>
              )}
            </div>

            {/* RIGHT: info — scrollable */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
              padding: '24px 28px',
              borderLeft: '1px solid var(--border-subtle)',
            }}>

              {/* Product name */}
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2, margin: 0 }}>
                  {card.name}
                </h2>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 5 }}>
                  Chọn phiên bản phù hợp với bạn
                </p>
              </div>

              {/* Price */}
              <div style={{
                borderRadius: 14,
                border: '1px solid rgba(16,185,129,0.25)',
                background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, var(--surface) 60%)',
                padding: '16px 20px',
              }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#059669', marginBottom: 8 }}>
                  Giá bán
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 34, fontWeight: 900, color: '#059669', lineHeight: 1 }}>
                    {activeVariant.priceFormatted}
                  </span>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)', background: 'var(--surface-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 9999, padding: '3px 10px', fontWeight: 500 }}>
                    Giá theo phiên bản
                  </span>
                </div>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 6 }}>{activeVariant.spec}</p>
              </div>

              {/* Variants */}
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: 10 }}>
                  Dung lượng / RAM
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 8 }}>
                  {card.variants.map((v, i) => (
                    <button
                      key={`${v.spec}-${v.price}-${i}`}
                      type="button"
                      onClick={() => selectVariant(v)}
                      style={{
                        padding: '10px 14px',
                        borderRadius: 10,
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.15s',
                        border: isActive(v) ? '2px solid #10b981' : '1px solid var(--border-subtle)',
                        background: isActive(v) ? 'rgba(16,185,129,0.1)' : 'var(--surface-elevated)',
                        outline: 'none',
                      }}
                    >
                      <span style={{ display: 'block', fontSize: 13, fontWeight: 700, color: isActive(v) ? '#059669' : 'var(--text-primary)', lineHeight: 1.3 }}>
                        {v.spec}
                      </span>
                      <span style={{ display: 'block', fontSize: 12, fontWeight: 600, marginTop: 3, color: isActive(v) ? '#059669' : 'var(--text-muted)' }}>
                        {v.priceFormatted}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              {card.description && (
                <div style={{
                  borderRadius: 12,
                  border: '1px solid var(--border-subtle)',
                  background: 'var(--surface-elevated)',
                  padding: '14px 18px',
                }}>
                  <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: 8 }}>
                    Mô tả
                  </p>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                    {card.description}
                  </p>
                </div>
              )}

              {/* CTA */}
              <div style={{ marginTop: 'auto', paddingTop: 4, display: 'flex', gap: 10 }}>
                <a href={TEL_URL}
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 50, borderRadius: 12, background: 'linear-gradient(135deg,#10b981,#059669)', color: '#fff', fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: '0 4px 16px rgba(16,185,129,0.35)' }}>
                  <Phone size={17} />Gọi mua ngay
                </a>
                <a href={ZALO_URL} target="_blank" rel="noopener noreferrer"
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 50, borderRadius: 12, background: '#2563eb', color: '#fff', fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: '0 4px 16px rgba(37,99,235,0.3)' }}>
                  <MessageCircle size={17} />Tư vấn Zalo
                </a>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
