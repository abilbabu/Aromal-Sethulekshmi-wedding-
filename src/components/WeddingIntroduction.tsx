import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { weddingContent } from '../data/weddingContent';

export const WeddingIntroduction: React.FC = () => {
  const targetDate = new Date(weddingContent.weddingDate.targetDateISO).getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section
      id="introduction"
      style={{
        position: 'relative',
        backgroundColor: '#190B1D',
        backgroundImage: `
          radial-gradient(ellipse at 50% 20%, rgba(56, 24, 54, 0.6) 0%, rgba(25, 11, 29, 0.98) 70%)
        `,
        padding: 'clamp(80px, 11vh, 130px) 0 clamp(60px, 8vh, 100px) 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(231, 196, 119, 0.15)',
      }}
    >
      {/* Background Mandala Geometry */}
      <div className="mandala-bg-pattern" />

      {/* Ambient Plum Glow */}
      <div
        className="ambient-glow-plum"
        style={{ top: '10%', left: '50%', transform: 'translateX(-50%)', opacity: 0.5 }}
      />

      <div className="editorial-container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        {/* Decorative Badge */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="editorial-badge">
            <Sparkles size={13} style={{ color: '#E7C477' }} />
            <span>The Sacred Matrimony</span>
          </div>
        </div>

        {/* Malayalam Shloka & Divine Blessing */}
        <div style={{ maxWidth: '780px', margin: '0 auto 24px auto' }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.15rem, 2.4vw, 1.45rem)',
              color: '#E7C477',
              letterSpacing: '0.02em',
              lineHeight: 1.6,
              fontWeight: 600,
              marginBottom: '10px',
            }}
          >
            {weddingContent.introduction.shloka}
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '0.95rem',
              color: '#BBA477',
              fontStyle: 'italic',
            }}
          >
            "{weddingContent.introduction.shlokaTranslation}"
          </p>
        </div>

        {/* Decorative Gold Divider */}
        <div className="gold-divider" style={{ maxWidth: '300px', margin: '20px auto 32px auto' }}>
          <span className="gold-divider-line gold-divider-line-left" />
          <svg width="24" height="15" viewBox="0 0 26 16" fill="none" aria-hidden="true">
            <path d="M13 1C13 1 10.2 6.2 10.2 10.5C10.2 12.8 11.4 14.2 13 14.2C14.6 14.2 15.8 12.8 15.8 10.5C15.8 6.2 13 1 13 1Z" fill="#FFF0D0" />
            <path d="M13 6.5C10.5 8.2 5.5 10.8 6.4 13.5C7.2 14.8 9.4 14.4 11 13C12.1 12.1 12.6 10 13 6.5Z" fill="#E7C477" />
            <path d="M13 6.5C15.5 8.2 20.5 10.8 19.6 13.5C18.8 14.8 16.6 14.4 15 13C13.9 12.1 13.4 10 13 6.5Z" fill="#E7C477" />
          </svg>
          <span className="gold-divider-line gold-divider-line-right" />
        </div>

        {/* Warm Invitation Message for Family & Friends */}
        <div style={{ maxWidth: '820px', margin: '0 auto 48px auto' }}>
          <h2
            className="editorial-title"
            style={{
              marginBottom: '18px',
              color: '#FFFFFF',
            }}
          >
            Aromal &amp; Sethulekshmi
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)',
              lineHeight: 1.8,
              color: '#FFF0D0',
              fontWeight: 400,
            }}
          >
            With the graceful blessings of God Almighty and the cherished love of our elders,
            we invite you with family and friends to share in our joy, join in our prayers, and grace
            the sacred occasion of our holy wedding on:
          </p>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '20px',
              padding: '12px 28px',
              background: 'linear-gradient(135deg, rgba(40, 17, 39, 0.9) 0%, rgba(56, 24, 54, 0.8) 100%)',
              border: '1px solid rgba(231, 196, 119, 0.35)',
              borderRadius: 'var(--radius-full)',
              color: '#E7C477',
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              fontWeight: 600,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
            }}
          >
            <Calendar size={18} style={{ color: '#E7C477' }} />
            <span>Sunday, October 25, 2026</span>
          </div>
        </div>

        {/* Live Countdown Timer to Sacred Muhurtham */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            background: 'linear-gradient(145deg, rgba(40, 17, 39, 0.85) 0%, rgba(25, 11, 29, 0.95) 100%)',
            border: '1.5px solid rgba(231, 196, 119, 0.35)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(24px, 4vw, 36px)',
            boxShadow: '0 20px 48px rgba(0, 0, 0, 0.6), 0 0 30px rgba(231, 196, 119, 0.12)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#E7C477',
              marginBottom: '20px',
            }}
          >
            <Clock size={15} />
            <span>Countdown to Sacred Muhurtham</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 'clamp(8px, 2vw, 18px)',
            }}
          >
            {[
              { label: 'DAYS', value: String(timeLeft.days).padStart(2, '0') },
              { label: 'HOURS', value: String(timeLeft.hours).padStart(2, '0') },
              { label: 'MINUTES', value: String(timeLeft.minutes).padStart(2, '0') },
              { label: 'SECONDS', value: String(timeLeft.seconds).padStart(2, '0') },
            ].map((unit) => (
              <div
                key={unit.label}
                style={{
                  background: 'rgba(25, 11, 29, 0.75)',
                  border: '1px solid rgba(231, 196, 119, 0.22)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'clamp(12px, 2.5vw, 20px) 8px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'inset 0 0 16px rgba(0, 0, 0, 0.5)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-editorial)',
                    fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    lineHeight: 1,
                    textShadow: '0 2px 10px rgba(231, 196, 119, 0.3)',
                  }}
                >
                  {unit.value}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(0.6rem, 1.4vw, 0.72rem)',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: '#BBA477',
                    marginTop: '6px',
                  }}
                >
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '18px',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '0.92rem',
              color: '#FFF0D0',
              opacity: 0.85,
            }}
          >
            Ordained Muhurtham: 12:08 PM – 12:30 PM IST • Santhi Auditorium, Konni
          </div>
        </div>
      </div>
    </section>
  );
};
