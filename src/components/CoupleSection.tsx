import React from 'react';
import { Heart } from 'lucide-react';
import { weddingContent } from '../data/weddingContent';

export const CoupleSection: React.FC = () => {
  const { groom, bride } = weddingContent.couple;

  return (
    <section
      id="couple"
      style={{
        position: 'relative',
        backgroundColor: '#FAF5EC',
        backgroundImage: `
          linear-gradient(180deg, #FAF5EC 0%, rgba(239, 228, 210, 0.6) 50%, #FAF5EC 100%)
        `,
        padding: 'clamp(80px, 11vh, 130px) 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(184, 148, 82, 0.2)',
      }}
    >
      {/* Background Mandala & Ambient Lighting */}
      <div className="mandala-bg-pattern" />
      <div
        className="ambient-glow-plum"
        style={{ top: '30%', right: '-120px', opacity: 0.35 }}
      />
      <div
        className="ambient-glow-plum"
        style={{ bottom: '20%', left: '-120px', opacity: 0.35 }}
      />

      <div className="editorial-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '750px',
            margin: '0 auto clamp(40px, 6vh, 65px) auto',
          }}
        >
          <div className="editorial-badge">
            <Heart size={13} style={{ color: '#B89452' }} />
            <span>The Groom &amp; The Bride</span>
          </div>
          <h2 className="editorial-title" style={{ marginBottom: '16px', color: '#241A18' }}>
            Aromal &amp; Sethulekshmi
          </h2>
          <p className="editorial-subtitle" style={{ margin: '0 auto' }}>
            United by love, cherished family values, and the timeless cultural traditions of Kerala.
          </p>
        </div>

        {/* 2-Column Responsive Layout for Groom & Bride */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'clamp(28px, 4vw, 48px)',
            maxWidth: '1050px',
            margin: '0 auto',
            alignItems: 'stretch',
          }}
        >
          {/* Groom Card: Aromal */}
          <div
            className="luxury-card couple-portrait-card"
            style={{
              padding: 'clamp(24px, 3.5vw, 36px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {/* Portrait with Ornate Gold Frame */}
            <div
              className="couple-portrait-frame"
              style={{
                position: 'relative',
                width: 'clamp(180px, 24vw, 240px)',
                height: 'clamp(220px, 30vw, 300px)',
                borderRadius: 'var(--radius-lg)',
                padding: '3px',
                background: 'linear-gradient(135deg, #FAF5EC 0%, #B89452 40%, #8E703B 80%, #B89452 100%)',
                boxShadow: '0 12px 28px rgba(56, 42, 39, 0.1), 0 0 18px rgba(184, 148, 82, 0.2)',
                marginBottom: '24px',
              }}
            >
              {/* Inner Frame */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 'calc(var(--radius-lg) - 3px)',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#FAF5EC',
                }}
              >
                <img
                  src={groom.photo}
                  alt={groom.fullName}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>

              {/* Decorative Corner Flourishes */}
              <div className="corner-accent corner-tl" />
              <div className="corner-accent corner-tr" />
              <div className="corner-accent corner-bl" />
              <div className="corner-accent corner-br" />
            </div>

            {/* Role & Name */}
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#B89452',
                marginBottom: '8px',
              }}
            >
              {groom.roleTitle}
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                color: '#241A18',
                margin: '0 0 10px 0',
                fontWeight: 600,
              }}
            >
              {groom.fullName}
            </h3>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.08rem',
                color: '#382A27',
                lineHeight: 1.6,
                marginBottom: '16px',
                fontStyle: 'italic',
              }}
            >
              "{groom.description}"
            </p>

            <div
              style={{
                marginTop: 'auto',
                paddingTop: '16px',
                borderTop: '1px solid rgba(184, 148, 82, 0.22)',
                width: '100%',
                fontSize: '0.84rem',
                fontFamily: 'var(--font-sans)',
                color: '#6E5651',
                lineHeight: 1.55,
              }}
            >
              <div style={{ fontWeight: 600, color: '#2E2220', marginBottom: '4px' }}>
                Son of Mrs. Jayasree &amp; Mr. Santhosh Kurup
              </div>
              <div style={{ color: '#6E5651' }}>
                Thempamkoottathil (H), Iravon, Konni
              </div>
            </div>
          </div>

          {/* Bride Card: Sethulekshmi */}
          <div
            className="luxury-card couple-portrait-card"
            style={{
              padding: 'clamp(24px, 3.5vw, 36px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {/* Portrait with Ornate Gold Frame */}
            <div
              className="couple-portrait-frame"
              style={{
                position: 'relative',
                width: 'clamp(180px, 24vw, 240px)',
                height: 'clamp(220px, 30vw, 300px)',
                borderRadius: 'var(--radius-lg)',
                padding: '3px',
                background: 'linear-gradient(135deg, #FAF5EC 0%, #B89452 40%, #8E703B 80%, #B89452 100%)',
                boxShadow: '0 12px 28px rgba(56, 42, 39, 0.1), 0 0 18px rgba(184, 148, 82, 0.2)',
                marginBottom: '24px',
              }}
            >
              {/* Inner Frame */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 'calc(var(--radius-lg) - 3px)',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#FAF5EC',
                }}
              >
                <img
                  src={bride.photo}
                  alt={bride.fullName}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>

              {/* Decorative Corner Flourishes */}
              <div className="corner-accent corner-tl" />
              <div className="corner-accent corner-tr" />
              <div className="corner-accent corner-bl" />
              <div className="corner-accent corner-br" />
            </div>

            {/* Role & Name */}
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#B89452',
                marginBottom: '8px',
              }}
            >
              {bride.roleTitle}
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                color: '#241A18',
                margin: '0 0 10px 0',
                fontWeight: 600,
              }}
            >
              {bride.fullName}
            </h3>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.08rem',
                color: '#382A27',
                lineHeight: 1.6,
                marginBottom: '16px',
                fontStyle: 'italic',
              }}
            >
              "{bride.description}"
            </p>

            <div
              style={{
                marginTop: 'auto',
                paddingTop: '16px',
                borderTop: '1px solid rgba(184, 148, 82, 0.22)',
                width: '100%',
                fontSize: '0.84rem',
                fontFamily: 'var(--font-sans)',
                color: '#6E5651',
                lineHeight: 1.55,
              }}
            >
              <div style={{ fontWeight: 600, color: '#2E2220', marginBottom: '4px' }}>
                Daughter of Mrs. Bindhu M G &amp; Mr. Suresh Madhavan Nair
              </div>
              <div style={{ color: '#6E5651' }}>
                Suresh Bhavan, Achencovil, Kollam
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .corner-accent {
          position: absolute;
          width: 14px;
          height: 14px;
          border-color: #B89452;
          pointer-events: none;
        }
        .corner-tl {
          top: -4px;
          left: -4px;
          border-top: 2px solid #B89452;
          border-left: 2px solid #B89452;
        }
        .corner-tr {
          top: -4px;
          right: -4px;
          border-top: 2px solid #B89452;
          border-right: 2px solid #B89452;
        }
        .corner-bl {
          bottom: -4px;
          left: -4px;
          border-bottom: 2px solid #B89452;
          border-left: 2px solid #B89452;
        }
        .corner-br {
          bottom: -4px;
          right: -4px;
          border-bottom: 2px solid #B89452;
          border-right: 2px solid #B89452;
        }
      `}</style>
    </section>
  );
};
