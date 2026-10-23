import React from 'react';
import { ArrowUpRight, Calendar, Clock, MapPin } from 'lucide-react';
import { CURATED_PHOTOGRAPHS } from '../data/curatedAssets';

export const HeroSection: React.FC = () => {
  const heroPhoto = CURATED_PHOTOGRAPHS.hero;

  return (
    <section id="hero" className="hero-section" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Background Image Canvas with Deep Plum & Wine Grading */}
      <div
        className="hero-bg-canvas"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        <img
          src={heroPhoto.webFile}
          alt="Aromal & Sethulekshmi in Sacred Kerala Kasavu Attire"
          fetchPriority="high"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 20%',
            filter: 'brightness(0.92) contrast(1.04) saturate(1.05)',
          }}
        />

        {/* Sophisticated Ivory & Soft Champagne Gradient Vignette Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(180deg, 
                rgba(250, 245, 236, 0.42) 0%, 
                rgba(250, 245, 236, 0.20) 25%, 
                rgba(250, 245, 236, 0.65) 65%, 
                rgba(250, 245, 236, 0.98) 100%
              )
            `,
          }}
        />

        {/* Subtle Radial Vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 35%, transparent 35%, rgba(239, 228, 210, 0.45) 90%)',
          }}
        />

        {/* Sacred Geometric Pattern Overlay */}
        <div className="mandala-bg-pattern" />
      </div>

      {/* Hero Foreground Content */}
      <div
        className="editorial-container"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: 'clamp(60px, 9vh, 100px)',
          paddingBottom: 'clamp(40px, 6vh, 70px)',
        }}
      >
        {/* Lord Ganesha Invocation Header */}
        <div style={{ marginBottom: '16px' }}>
          <div
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(184, 148, 82, 0.35) 0%, transparent 70%)',
                filter: 'blur(8px)',
              }}
            />
            <img
              src="/assets/images/lord_ganesha_gold.png"
              alt="Lord Ganesha"
              style={{
                width: '42px',
                height: 'auto',
                filter: 'drop-shadow(0 2px 10px rgba(56, 42, 39, 0.15)) drop-shadow(0 0 10px rgba(184, 148, 82, 0.35))',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <span style={{ width: '28px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(184, 148, 82, 0.7))' }} />
            <span
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '0.86rem',
                color: '#B89452',
                letterSpacing: '0.04em',
                fontWeight: 600,
              }}
            >
              ഓം ശ്രീ ഗണേശായ നമഃ
            </span>
            <span style={{ width: '28px', height: '1px', background: 'linear-gradient(90deg, rgba(184, 148, 82, 0.7), transparent)' }} />
          </div>

          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(0.65rem, 1.4vw, 0.74rem)',
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#382A27',
              marginTop: '6px',
              opacity: 0.85,
            }}
          >
            A WEDDING CELEBRATION
          </div>
        </div>

        {/* Cinematic Names Lockup: Aromal & Sethulekshmi */}
        <div style={{ margin: 'clamp(8px, 2vh, 22px) 0' }}>
          <h1
            style={{
              fontFamily: "'Alex Brush', 'Great Vibes', cursive",
              fontSize: 'clamp(2.8rem, 8.5vw, 6.2rem)',
              lineHeight: 1.1,
              fontWeight: 400,
              color: '#382A27',
              letterSpacing: '0.02em',
              margin: 0,
              textShadow: '0 2px 14px rgba(184, 148, 82, 0.25), 0 1px 2px rgba(250, 245, 236, 0.8)',
            }}
          >
            <span>Aromal</span>
            <span
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: '0.85em',
                color: '#B89452',
                padding: '0 0.18em',
                display: 'inline-block',
              }}
            >
              &amp;
            </span>
            <span>Sethulekshmi</span>
          </h1>
        </div>

        {/* Wedding Tagline */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: '#6E5651',
            fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)',
            fontStyle: 'italic',
            lineHeight: 1.6,
            maxWidth: '650px',
            margin: '0 auto 24px auto',
          }}
        >
          Request the honour of your presence to witness and bless our sacred marital union
        </p>

        {/* Traditional Lotus Divider */}
        <div className="gold-divider" style={{ maxWidth: '280px', marginBottom: '24px' }}>
          <span className="gold-divider-line gold-divider-line-left" />
          <svg width="22" height="14" viewBox="0 0 26 16" fill="none" aria-hidden="true">
            <path d="M13 1C13 1 10.2 6.2 10.2 10.5C10.2 12.8 11.4 14.2 13 14.2C14.6 14.2 15.8 12.8 15.8 10.5C15.8 6.2 13 1 13 1Z" fill="#FAF5EC" />
            <path d="M13 6.5C10.5 8.2 5.5 10.8 6.4 13.5C7.2 14.8 9.4 14.4 11 13C12.1 12.1 12.6 10 13 6.5Z" fill="#B89452" />
            <path d="M13 6.5C15.5 8.2 20.5 10.8 19.6 13.5C18.8 14.8 16.6 14.4 15 13C13.9 12.1 13.4 10 13 6.5Z" fill="#B89452" />
          </svg>
          <span className="gold-divider-line gold-divider-line-right" />
        </div>

        {/* Verified Date, Muhurtham & Clickable Venue Anchor Bar */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 'clamp(8px, 1.8vw, 16px)',
            padding: '12px 24px',
            background: '#EFE4D2',
            border: '1px solid rgba(184, 148, 82, 0.4)',
            borderRadius: 'var(--radius-full)',
            boxShadow: '0 8px 24px rgba(56, 42, 39, 0.08), 0 0 16px rgba(184, 148, 82, 0.15)',
            backdropFilter: 'blur(12px)',
            maxWidth: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#382A27', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
            <Calendar size={14} style={{ color: '#B89452' }} />
            <span>Sunday, October 25, 2026</span>
          </div>

          <span style={{ color: 'rgba(184, 148, 82, 0.6)', fontSize: '0.8rem' }}>•</span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#382A27', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
            <Clock size={14} style={{ color: '#B89452' }} />
            <span>Muhurtham: 12:08 PM – 12:30 PM IST</span>
          </div>

          <span style={{ color: 'rgba(184, 148, 82, 0.6)', fontSize: '0.8rem' }}>•</span>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Santhi+Auditorium+Eliyarackal+Konni+Pathanamthitta+Kerala"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Santhi Auditorium, Konni on Google Maps"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '0.82rem',
              color: '#B89452',
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#241A18')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#B89452')}
          >
            <MapPin size={14} />
            <span>Santhi Auditorium, Konni</span>
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
};
