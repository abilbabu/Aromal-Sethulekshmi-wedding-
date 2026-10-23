import React, { useState } from 'react';
import { playSoundtrack } from '../utils/audioManager';

export interface RoyalInvitationGateProps {
  onOpened?: () => void;
}

export const RoyalInvitationGate: React.FC<RoyalInvitationGateProps> = ({ onOpened }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpening, setIsOpening] = useState<boolean>(false);

  const handleOpenInvitation = async () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);

    // 1. Play soundtrack directly on user interaction
    await playSoundtrack();

    if (onOpened) {
      onOpened();
    }

    // 2. Smoothly complete the opening transition
    setTimeout(() => {
      setIsOpen(true);
    }, 850);
  };

  if (isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Royal Wedding Invitation Cover"
      className={`royal-gate-backdrop ${isOpening ? 'royal-gate-backdrop-opening' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `calc(clamp(16px, 3vh, 32px) + env(safe-area-inset-top, 0px))
          calc(clamp(16px, 4vw, 36px) + env(safe-area-inset-right, 0px))
          calc(clamp(16px, 3vh, 32px) + env(safe-area-inset-bottom, 0px))
          calc(clamp(16px, 4vw, 36px) + env(safe-area-inset-left, 0px))`,
        backgroundColor: '#FAF5EC',
        backgroundImage: `
          radial-gradient(circle at 50% 40%, rgba(239, 228, 210, 0.95) 0%, rgba(250, 245, 236, 0.98) 55%, #EFE4D2 100%)
        `,
        overflowX: 'hidden',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        transition: 'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.85s ease',
        opacity: isOpening ? 0 : 1,
        visibility: isOpen ? 'hidden' : 'visible',
      }}
    >
      {/* Traditional Sacred Geometric Mandala Background Pattern */}
      <svg
        className="royal-gate-sacred-geometry"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.35,
          pointerEvents: 'none',
        }}
      >
        <defs>
          <radialGradient id="plumMandalaGlow" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#B89452" stopOpacity="0.35" />
            <stop offset="40%" stopColor="#EFE4D2" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FAF5EC" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="1200" height="900" fill="url(#plumMandalaGlow)" />

        {/* Fine Geometric Yantra Circles & Lines */}
        <g stroke="rgba(184, 148, 82, 0.32)" strokeWidth="0.8" fill="none">
          <circle cx="600" cy="400" r="95" strokeWidth="0.6" strokeDasharray="2 3" />
          <circle cx="600" cy="400" r="135" strokeWidth="1" />
          <circle cx="600" cy="400" r="175" strokeWidth="0.6" strokeDasharray="3 4" />
          <circle cx="600" cy="400" r="240" strokeWidth="0.8" strokeDasharray="4 6" />
          <circle cx="600" cy="400" r="330" strokeWidth="0.5" />
          <circle cx="600" cy="400" r="440" strokeWidth="0.4" />

          {/* Symmetrical Axis Lines */}
          <line x1="80" y1="400" x2="1120" y2="400" stroke="rgba(184, 148, 82, 0.35)" strokeWidth="0.8" />
          <line x1="600" y1="60" x2="600" y2="740" stroke="rgba(184, 148, 82, 0.3)" strokeWidth="0.6" strokeDasharray="3 3" />
          <line x1="220" y1="120" x2="980" y2="680" strokeWidth="0.4" strokeDasharray="3 4" />
          <line x1="220" y1="680" x2="980" y2="120" strokeWidth="0.4" strokeDasharray="3 4" />

          {/* 8-Pointed Star Mandala */}
          <polygon
            points="600,260 695,305 740,400 695,495 600,540 505,495 460,400 505,305"
            strokeWidth="0.7"
            stroke="rgba(184, 148, 82, 0.35)"
          />
        </g>
      </svg>

      {/* Radiant Golden Starburst Nodes on Horizontal Axis */}
      <span className="royal-starburst royal-starburst-left" />
      <span className="royal-starburst royal-starburst-right" />

      {/* Central Content Composition */}
      <div
        className={`royal-gate-content ${isOpening ? 'royal-content-opening' : ''}`}
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          maxWidth: '860px',
          width: '100%',
          minWidth: 0,
          zIndex: 2,
          margin: 'auto',
        }}
      >
        {/* Auspicious Lord Ganesha Header */}
        <div className="royal-ganesha-block">
          <div
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Ambient Gold Halo behind Ganesha */}
            <div
              className="royal-ganesha-halo"
              style={{
                position: 'absolute',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(184, 148, 82, 0.35) 0%, transparent 70%)',
                filter: 'blur(8px)',
                pointerEvents: 'none',
              }}
            />
            <img
              src="/assets/images/lord_ganesha_gold.png"
              alt="Lord Ganesha"
              className="royal-ganesha-img"
              style={{
                position: 'relative',
                height: 'auto',
                display: 'inline-block',
                filter: 'drop-shadow(0 2px 10px rgba(56, 42, 39, 0.15)) drop-shadow(0 0 12px rgba(184, 148, 82, 0.35))',
              }}
            />
          </div>

          {/* Traditional Malayalam Shloka Line */}
          <div
            className="royal-invocation-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              className="royal-invocation-line"
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(184, 148, 82, 0.65))',
              }}
            />
            <span
              className="royal-invocation-malayalam"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: '#B89452',
                letterSpacing: '0.04em',
                fontWeight: 600,
                textShadow: '0 0 8px rgba(184, 148, 82, 0.2)',
              }}
            >
              ഓം ശ്രീ ഗണേശായ നമഃ
            </span>
            <span
              className="royal-invocation-line"
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, rgba(184, 148, 82, 0.65), transparent)',
              }}
            />
          </div>

          {/* Small Heading: A WEDDING CELEBRATION */}
          <div
            className="royal-invocation-sub"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#382A27',
              opacity: 0.85,
            }}
          >
            A WEDDING CELEBRATION
          </div>
        </div>

        {/* Central Monogram Emblem */}
        <div
          className="royal-monogram-container"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Golden Glow Behind Central Ornament */}
          <div
            className="royal-logo-halo"
            style={{
              position: 'absolute',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(184, 148, 82, 0.3) 0%, rgba(239, 228, 210, 0.45) 50%, transparent 75%)',
              filter: 'blur(22px)',
              pointerEvents: 'none',
            }}
          />

          {/* Monogram Outer Golden Rim Ring */}
          <div
            className="royal-monogram-ring"
            style={{
              position: 'relative',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FAF5EC 0%, #B89452 40%, #8E703B 80%, #B89452 100%)',
              boxShadow: `
                0 10px 28px rgba(56, 42, 39, 0.12),
                0 0 22px rgba(184, 148, 82, 0.25),
                inset 0 0 14px rgba(184, 148, 82, 0.18)
              `,
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: '#FAF5EC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="/assets/images/sa_monogram_logo.png"
                alt="Aromal & Sethulekshmi Monogram Logo"
                style={{
                  width: '94%',
                  height: '94%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>

        {/* Couple Names in Flowing Romantic Script: Aromal & Sethulekshmi */}
        <div
          className="royal-names-wrapper"
          style={{
            padding: '0 12px',
            width: '100%',
            minWidth: 0,
          }}
        >
          <h1 className="royal-gate-title">
            <span className="royal-gate-name-wrap">Aromal</span>
            <span className="royal-gate-amp-wrap">&amp;</span>
            <span className="royal-gate-name-wrap">Sethulekshmi</span>
          </h1>
        </div>

        {/* Graceful Wedding Tagline */}
        <p
          className="royal-gate-tagline"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: '#6E5651',
            fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
            fontStyle: 'italic',
            lineHeight: 1.5,
            maxWidth: '560px',
            margin: '0 auto clamp(10px, 2vh, 18px) auto',
            padding: '0 16px',
          }}
        >
          Together with their families, invite you to share in the joy of their sacred union
        </p>

        {/* Traditional Golden Lotus Motif Divider */}
        <div
          className="royal-lotus-divider"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <span
            style={{
              flex: 1,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(184, 148, 82, 0.65))',
            }}
          />
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              filter: 'drop-shadow(0 0 6px rgba(184, 148, 82, 0.4))',
            }}
          >
            <svg
              className="royal-lotus-svg"
              width="26"
              height="16"
              viewBox="0 0 26 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M13 1C13 1 10.2 6.2 10.2 10.5C10.2 12.8 11.4 14.2 13 14.2C14.6 14.2 15.8 12.8 15.8 10.5C15.8 6.2 13 1 13 1Z"
                fill="#FAF5EC"
              />
              <path
                d="M13 6.5C10.5 8.2 5.5 10.8 6.4 13.5C7.2 14.8 9.4 14.4 11 13C12.1 12.1 12.6 10 13 6.5Z"
                fill="#B89452"
              />
              <path
                d="M13 6.5C15.5 8.2 20.5 10.8 19.6 13.5C18.8 14.8 16.6 14.4 15 13C13.9 12.1 13.4 10 13 6.5Z"
                fill="#B89452"
              />
              <path
                d="M13 9C9.5 10.8 2.8 12.5 3.6 14.8C4.3 15.6 6.8 15.2 9.2 14C10.6 13.2 12 11.6 13 9Z"
                fill="#8E703B"
              />
              <path
                d="M13 9C16.5 10.8 23.2 12.5 22.4 14.8C21.7 15.6 19.2 15.2 16.8 14C15.4 13.2 14 11.6 13 9Z"
                fill="#8E703B"
              />
            </svg>
          </div>
          <span
            style={{
              flex: 1,
              height: '1px',
              background: 'linear-gradient(90deg, rgba(184, 148, 82, 0.65), transparent)',
            }}
          />
        </div>

        {/* Primary CTA: OPEN INVITATION */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button
            type="button"
            id="open-invitation-cta"
            onClick={handleOpenInvitation}
            className="royal-open-invitation-action-btn"
            aria-label="Open wedding invitation"
          >
            <span>OPEN INVITATION</span>
          </button>
        </div>
      </div>

      <style>{`
        .royal-gate-content {
          padding: clamp(8px, 1.8vh, 20px) 0;
          transform: scale(1) translateY(0);
          filter: none;
          transition: transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), filter 0.85s ease;
        }
        .royal-gate-content.royal-content-opening {
          transform: scale(1.04) translateY(-10px);
          filter: blur(8px);
        }
        .royal-ganesha-block {
          margin-bottom: clamp(4px, 1.2vh, 10px);
        }
        .royal-ganesha-halo {
          width: 58px;
          height: 58px;
        }
        .royal-ganesha-img {
          width: clamp(32px, 5.5vh, 48px);
        }
        .royal-invocation-row {
          gap: 8px;
          margin-top: 5px;
        }
        .royal-invocation-line {
          width: clamp(18px, 4vw, 36px);
        }
        .royal-invocation-malayalam {
          font-size: clamp(0.72rem, 2.3vw, 0.85rem);
        }
        .royal-invocation-sub {
          font-size: clamp(0.56rem, 1.8vw, 0.65rem);
          margin-top: 4px;
        }
        .royal-monogram-container {
          margin: clamp(6px, 1.5vh, 16px) 0;
        }
        .royal-names-wrapper {
          margin: clamp(4px, 0.8vh, 10px) 0 clamp(4px, 1vh, 8px) 0;
        }
        .royal-lotus-divider {
          gap: 12px;
          max-width: 240px;
          margin: 0 auto clamp(8px, 2vh, 18px) auto;
        }
        .royal-lotus-svg {
          width: 26px;
          height: 16px;
        }

        /* Monogram Responsive Sizing */
        .royal-monogram-ring {
          width: clamp(96px, 18vh, 175px);
          height: clamp(96px, 18vh, 175px);
          padding: 2.5px;
        }
        .royal-logo-halo {
          width: clamp(120px, 23vh, 220px);
          height: clamp(120px, 23vh, 220px);
          animation: logoHaloPulse 4s ease-in-out infinite alternate;
        }

        /* Couple Names Typography */
        .royal-gate-title {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          column-gap: 0.35em;
          row-gap: 0.08em;
          font-family: 'Alex Brush', 'Great Vibes', cursive;
          font-size: clamp(2rem, min(5.5vw, 7.8vh), 3.8rem);
          line-height: 1.15;
          font-weight: 400;
          color: #382A27;
          margin: 0;
          letter-spacing: 0.01em;
          text-shadow:
            0 2px 12px rgba(184, 148, 82, 0.25),
            0 1px 2px rgba(250, 245, 236, 0.8);
        }

        .royal-gate-name-wrap {
          white-space: nowrap;
          display: inline-block;
        }

        .royal-gate-amp-wrap {
          font-family: 'Great Vibes', cursive;
          font-size: 0.88em;
          color: #B89452;
          padding: 0 0.12em;
          display: inline-block;
        }

        /* Action Button Styling - Accessible 48px touch target */
        .royal-open-invitation-action-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 48px;
          padding: clamp(11px, 1.8vh, 14px) clamp(28px, 6vw, 42px);
          background: linear-gradient(180deg, #C9A765 0%, #B89452 50%, #A27F3F 100%);
          color: #FAF5EC;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(0.74rem, 1.9vw, 0.82rem);
          font-weight: 750;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 9999px;
          box-shadow:
            0 0 20px rgba(184, 148, 82, 0.35),
            0 6px 18px rgba(56, 42, 39, 0.12),
            inset 0 1px 2px rgba(255, 255, 255, 0.5);
          cursor: pointer;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          outline: none;
          user-select: none;
          animation: royalButtonGlowPulse 3s ease-in-out infinite alternate;
        }

        @media (hover: hover) {
          .royal-open-invitation-action-btn:hover {
            transform: translateY(-2px) scale(1.03);
            box-shadow: 0 0 32px rgba(184, 148, 82, 0.55), 0 10px 24px rgba(56, 42, 39, 0.16);
            background: linear-gradient(180deg, #D5B573 0%, #C4A05D 50%, #B08B49 100%);
            border-color: #FFFFFF;
            color: #FFFFFF;
          }
        }

        .royal-open-invitation-action-btn:focus-visible {
          outline: 2px solid #B89452;
          outline-offset: 4px;
        }

        .royal-open-invitation-action-btn:active {
          transform: translateY(0) scale(0.96);
          box-shadow: 0 0 14px rgba(184, 148, 82, 0.4), 0 3px 8px rgba(56, 42, 39, 0.15);
        }

        @keyframes royalButtonGlowPulse {
          0% {
            box-shadow:
              0 0 16px rgba(184, 148, 82, 0.25),
              0 4px 14px rgba(56, 42, 39, 0.1),
              inset 0 1px 2px rgba(255, 255, 255, 0.4);
          }
          100% {
            box-shadow:
              0 0 28px rgba(184, 148, 82, 0.5),
              0 6px 20px rgba(56, 42, 39, 0.14),
              inset 0 1px 2px rgba(255, 255, 255, 0.65);
          }
        }

        @keyframes logoHaloPulse {
          0% {
            transform: scale(0.95);
            opacity: 0.65;
          }
          100% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        .royal-starburst {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #B89452;
          box-shadow: 0 0 14px 3px rgba(184, 148, 82, 0.6), 0 0 28px 6px rgba(184, 148, 82, 0.25);
          pointer-events: none;
        }

        .royal-starburst-left {
          top: 45%;
          left: 10%;
          animation: starburstPulse 3s ease-in-out infinite alternate;
        }

        .royal-starburst-right {
          top: 45%;
          right: 10%;
          animation: starburstPulse 3s ease-in-out infinite alternate 1.5s;
        }

        @keyframes starburstPulse {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.3);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .royal-starburst {
            display: none;
          }
          .royal-gate-title {
            font-size: clamp(1.95rem, 6.8vw, 2.7rem);
          }
        }

        @media (max-width: 480px) {
          .royal-gate-title {
            font-size: clamp(1.85rem, 7.5vw, 2.35rem);
          }
          .royal-monogram-ring {
            width: clamp(105px, 34vw, 140px);
            height: clamp(105px, 34vw, 140px);
          }
          .royal-logo-halo {
            width: clamp(125px, 42vw, 170px);
            height: clamp(125px, 42vw, 170px);
          }
          .royal-open-invitation-action-btn {
            min-height: 48px;
            padding: 12px 30px;
          }
        }
      `}</style>
    </div>
  );
};
