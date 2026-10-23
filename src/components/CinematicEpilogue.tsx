import React from 'react';
import { ArrowUp } from 'lucide-react';
import { weddingContent } from '../data/weddingContent';

export const CinematicEpilogue: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="epilogue"
      style={{
        position: 'relative',
        background: 'radial-gradient(ellipse at 50% 25%, #EFE4D2 0%, #FAF5EC 65%, #FAF5EC 100%)',
        padding: 'clamp(70px, 9vh, 110px) 0 50px 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(184, 148, 82, 0.22)',
        textAlign: 'center',
      }}
    >
      <div className="mandala-bg-pattern" />

      {/* Ambient Center Glow */}
      <div
        className="ambient-glow-plum"
        style={{ top: '20%', left: '50%', transform: 'translateX(-50%)', opacity: 0.35 }}
      />

      <div className="editorial-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Traditional Ornamental Gold Motif */}
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
          <div
            style={{
              position: 'relative',
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(184, 148, 82, 0.25) 0%, transparent 70%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/assets/images/sa_monogram_logo.png"
              alt="Aromal & Sethulekshmi Monogram"
              style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                border: '2px solid rgba(184, 148, 82, 0.65)',
                boxShadow: '0 8px 24px rgba(56, 42, 39, 0.12), 0 0 16px rgba(184, 148, 82, 0.25)',
              }}
            />
          </div>
        </div>

        {/* Traditional Floral Gold Motif Divider */}
        <div className="gold-divider" style={{ maxWidth: '320px', marginBottom: '28px' }}>
          <span className="gold-divider-line gold-divider-line-left" />
          <svg width="28" height="18" viewBox="0 0 26 16" fill="none" aria-hidden="true">
            <path d="M13 1C13 1 10.2 6.2 10.2 10.5C10.2 12.8 11.4 14.2 13 14.2C14.6 14.2 15.8 12.8 15.8 10.5C15.8 6.2 13 1 13 1Z" fill="#FAF5EC" />
            <path d="M13 6.5C10.5 8.2 5.5 10.8 6.4 13.5C7.2 14.8 9.4 14.4 11 13C12.1 12.1 12.6 10 13 6.5Z" fill="#B89452" />
            <path d="M13 6.5C15.5 8.2 20.5 10.8 19.6 13.5C18.8 14.8 16.6 14.4 15 13C13.9 12.1 13.4 10 13 6.5Z" fill="#B89452" />
            <path d="M13 9C9.5 10.8 2.8 12.5 3.6 14.8C4.3 15.6 6.8 15.2 9.2 14C10.6 13.2 12 11.6 13 9Z" fill="#8E703B" />
            <path d="M13 9C16.5 10.8 23.2 12.5 22.4 14.8C21.7 15.6 19.2 15.2 16.8 14C15.4 13.2 14 11.6 13 9Z" fill="#8E703B" />
          </svg>
          <span className="gold-divider-line gold-divider-line-right" />
        </div>

        {/* Couple Names */}
        <h2
          style={{
            fontFamily: "'Alex Brush', 'Great Vibes', cursive",
            fontSize: 'clamp(2.6rem, 7vw, 4.8rem)',
            color: '#382A27',
            margin: '0 0 12px 0',
            lineHeight: 1.15,
            textShadow: '0 2px 14px rgba(184, 148, 82, 0.2)',
          }}
        >
          <span>Aromal</span>
          <span style={{ color: '#B89452', padding: '0 0.16em', fontFamily: "'Great Vibes', cursive", fontSize: '0.85em' }}>
            &amp;
          </span>
          <span>Sethulekshmi</span>
        </h2>

        {/* Wedding Date */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            color: '#B89452',
            fontWeight: 600,
            letterSpacing: '0.06em',
            marginBottom: '20px',
          }}
        >
          <span>Sunday, October 25, 2026</span>
          <span>•</span>
          <span>Santhi Auditorium, Konni</span>
        </div>

        {/* Short Gratitude Message for Family and Guests */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.15rem, 2.2vw, 1.35rem)',
            color: '#382A27',
            lineHeight: 1.75,
            maxWidth: '680px',
            margin: '0 auto 28px auto',
            fontStyle: 'italic',
          }}
        >
          "With heartfelt gratitude, we thank our beloved families, revered elders, and dear friends
          for gracing our lives with your unconditional love, timeless blessings, and presence as we
          embark upon this sacred journey together."
        </p>

        {/* Configurable Wedding Hashtag */}
        <div style={{ marginBottom: '36px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '8px 22px',
              borderRadius: 'var(--radius-full)',
              background: '#EFE4D2',
              border: '1px solid rgba(184, 148, 82, 0.4)',
              color: '#B89452',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              boxShadow: '0 4px 14px rgba(56, 42, 39, 0.08)',
            }}
          >
            {weddingContent.couple.hashtag}
          </span>
        </div>

        {/* Back to Top Quick Action */}
        <div>
          <button
            type="button"
            onClick={scrollToTop}
            className="btn-gold-outline"
            style={{
              padding: '10px 22px',
              fontSize: '0.74rem',
            }}
            aria-label="Scroll back to top of invitation"
          >
            <ArrowUp size={14} />
            <span>BACK TO TOP</span>
          </button>
        </div>

        {/* Copyright Note */}
        <div
          style={{
            marginTop: '45px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(184, 148, 82, 0.18)',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-sans)',
            color: '#6E5651',
            opacity: 0.85,
          }}
        >
          © 2026 Aromal &amp; Sethulekshmi. With love and blessings.
        </div>
      </div>
    </footer>
  );
};
