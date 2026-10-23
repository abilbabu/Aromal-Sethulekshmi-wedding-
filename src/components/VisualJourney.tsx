import React, { useState, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { EXHIBITION_MASTERWORKS, type CuratedPhoto } from '../data/curatedAssets';

export const VisualJourney: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % EXHIBITION_MASTERWORKS.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) => (prev !== null ? (prev - 1 + EXHIBITION_MASTERWORKS.length) % EXHIBITION_MASTERWORKS.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  // Master collage layout images:
  // Left: Plate 1 (Veranda), Plate 4 (Sacred Waters)
  // Center (Larger): Plate 2 (Echoes in Granite - Couple sitting by water)
  // Right: Plate 3 (Aura of Kasavu - Couple standing), Plate 6 (Golden Hour Reverie - Hands & Kasavu)
  const leftTopPhoto = EXHIBITION_MASTERWORKS[0];     // photo_07_jis09224.jpg
  const leftBottomPhoto = EXHIBITION_MASTERWORKS[3];  // photo_22_jis09552.jpg
  const centerHeroPhoto = EXHIBITION_MASTERWORKS[1];  // photo_10_jis09306.jpg (Featured Centerpiece)
  const rightTopPhoto = EXHIBITION_MASTERWORKS[2];    // photo_18_jis09407.jpg
  const rightBottomPhoto = EXHIBITION_MASTERWORKS[5]; // photo_35_jis09746.jpg

  const activePhoto: CuratedPhoto | null = selectedPhotoIndex !== null ? EXHIBITION_MASTERWORKS[selectedPhotoIndex] : null;

  return (
    <section
      id="gallery"
      style={{
        position: 'relative',
        backgroundColor: '#FAF5EC',
        backgroundImage: `
          linear-gradient(180deg, #FAF5EC 0%, rgba(239, 228, 210, 0.5) 50%, #FAF5EC 100%)
        `,
        padding: 'clamp(80px, 11vh, 130px) 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(184, 148, 82, 0.2)',
      }}
    >
      <div className="mandala-bg-pattern" />

      {/* Ambient Lighting Glow */}
      <div
        className="ambient-glow-plum"
        style={{ top: '25%', left: '50%', transform: 'translateX(-50%)', opacity: 0.35 }}
      />

      <div className="editorial-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '750px',
            margin: '0 auto clamp(36px, 5vh, 55px) auto',
          }}
        >
          <div className="editorial-badge">
            <Camera size={13} style={{ color: '#B89452' }} />
            <span>Cherished Moments</span>
          </div>
          <h2 className="editorial-title" style={{ marginBottom: '16px', color: '#241A18' }}>
            Wedding Gallery
          </h2>
          <p className="editorial-subtitle" style={{ margin: '0 auto' }}>
            A curated photographic tapestry capturing traditional Kerala Kasavu grace,
            timeless emotions, and the promise of a lifetime together.
          </p>
        </div>

        {/* Text-Free Luxury Photo Collage: Center Image Larger, Arranged Harmoniously Around It */}
        <div className="gallery-collage-wrapper">
          {/* Left Column (2 Stacked Smaller Images) */}
          <div className="collage-column collage-side-column">
            {/* Left Top Image */}
            <div
              className="collage-photo-frame"
              onClick={() => setSelectedPhotoIndex(0)}
              role="button"
              tabIndex={0}
              aria-label="View photo in fullscreen"
            >
              <img
                src={leftTopPhoto.webFile}
                alt="Aromal and Sethulekshmi wedding photograph"
                loading="lazy"
                style={{
                  objectPosition: leftTopPhoto.focalPosition || 'center 35%',
                }}
              />
              <div className="collage-photo-hover-glow">
                <Maximize2 size={18} className="collage-hover-icon" />
              </div>
            </div>

            {/* Left Bottom Image */}
            <div
              className="collage-photo-frame"
              onClick={() => setSelectedPhotoIndex(3)}
              role="button"
              tabIndex={0}
              aria-label="View photo in fullscreen"
            >
              <img
                src={leftBottomPhoto.webFile}
                alt="Aromal and Sethulekshmi wedding photograph"
                loading="lazy"
                style={{
                  objectPosition: leftBottomPhoto.focalPosition || 'center 20%',
                }}
              />
              <div className="collage-photo-hover-glow">
                <Maximize2 size={18} className="collage-hover-icon" />
              </div>
            </div>
          </div>

          {/* Center Column: Prominent Larger Centerpiece Image */}
          <div className="collage-column collage-center-column">
            <div
              className="collage-photo-frame collage-hero-frame"
              onClick={() => setSelectedPhotoIndex(1)}
              role="button"
              tabIndex={0}
              aria-label="View featured centerpiece photo in fullscreen"
            >
              {/* Refined Gold Halo behind Centerpiece */}
              <div className="collage-center-halo" />

              <img
                src={centerHeroPhoto.webFile}
                alt="Aromal and Sethulekshmi intimate wedding portrait"
                loading="lazy"
                style={{
                  objectPosition: centerHeroPhoto.focalPosition || 'center 20%',
                }}
              />

              {/* Decorative Delicate Corner Gold Accents */}
              <span className="gold-corner-accent gold-corner-tl" />
              <span className="gold-corner-accent gold-corner-tr" />
              <span className="gold-corner-accent gold-corner-bl" />
              <span className="gold-corner-accent gold-corner-br" />

              <div className="collage-photo-hover-glow">
                <Maximize2 size={22} className="collage-hover-icon" />
              </div>
            </div>
          </div>

          {/* Right Column (2 Stacked Smaller Images) */}
          <div className="collage-column collage-side-column">
            {/* Right Top Image */}
            <div
              className="collage-photo-frame"
              onClick={() => setSelectedPhotoIndex(2)}
              role="button"
              tabIndex={0}
              aria-label="View photo in fullscreen"
            >
              <img
                src={rightTopPhoto.webFile}
                alt="Aromal and Sethulekshmi wedding photograph"
                loading="lazy"
                style={{
                  objectPosition: rightTopPhoto.focalPosition || 'center 18%',
                }}
              />
              <div className="collage-photo-hover-glow">
                <Maximize2 size={18} className="collage-hover-icon" />
              </div>
            </div>

            {/* Right Bottom Image */}
            <div
              className="collage-photo-frame"
              onClick={() => setSelectedPhotoIndex(5)}
              role="button"
              tabIndex={0}
              aria-label="View photo in fullscreen"
            >
              <img
                src={rightBottomPhoto.webFile}
                alt="Aromal and Sethulekshmi wedding photograph"
                loading="lazy"
                style={{
                  objectPosition: rightBottomPhoto.focalPosition || 'center 18%',
                }}
              />
              <div className="collage-photo-hover-glow">
                <Maximize2 size={18} className="collage-hover-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Fullscreen Lightbox Modal */}
      {selectedPhotoIndex !== null && activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo Lightbox Viewer"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            backgroundColor: 'rgba(11, 4, 14, 0.96)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'lightboxFadeIn 0.3s ease',
          }}
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Top Controls Bar */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              zIndex: 10002,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              style={{
                color: '#FAF5EC',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
              }}
            >
              {selectedPhotoIndex + 1} / {EXHIBITION_MASTERWORKS.length}
            </span>
            <button
              type="button"
              onClick={() => setSelectedPhotoIndex(null)}
              aria-label="Close lightbox"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#EFE4D2',
                border: '1px solid rgba(184, 148, 82, 0.45)',
                color: '#382A27',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B89452';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#EFE4D2';
                e.currentTarget.style.color = '#382A27';
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Prev Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((selectedPhotoIndex - 1 + EXHIBITION_MASTERWORKS.length) % EXHIBITION_MASTERWORKS.length);
            }}
            aria-label="Previous photo"
            style={{
              position: 'absolute',
              left: 'clamp(10px, 3vw, 30px)',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#EFE4D2',
              border: '1px solid rgba(184, 148, 82, 0.45)',
              color: '#382A27',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10002,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#B89452';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#EFE4D2';
              e.currentTarget.style.color = '#382A27';
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Navigation Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((selectedPhotoIndex + 1) % EXHIBITION_MASTERWORKS.length);
            }}
            aria-label="Next photo"
            style={{
              position: 'absolute',
              right: 'clamp(10px, 3vw, 30px)',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#EFE4D2',
              border: '1px solid rgba(184, 148, 82, 0.45)',
              color: '#382A27',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10002,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#B89452';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#EFE4D2';
              e.currentTarget.style.color = '#382A27';
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Center Image Container in Lightbox (Clean, text-free) */}
          <div
            style={{
              maxWidth: '92vw',
              maxHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 10001,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePhoto.webFile}
              alt="Aromal & Sethulekshmi wedding photograph"
              style={{
                maxWidth: '100%',
                maxHeight: '82vh',
                objectFit: 'contain',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.85), 0 0 32px rgba(184, 148, 82, 0.3)',
                border: '1.5px solid rgba(184, 148, 82, 0.65)',
              }}
            />
          </div>
        </div>
      )}

      <style>{`
        /* Master Collage Responsive Layout */
        .gallery-collage-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.38fr 1fr;
          gap: clamp(14px, 2vw, 22px);
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          align-items: stretch;
        }

        .collage-column {
          display: flex;
          flex-direction: column;
          gap: clamp(14px, 2vw, 22px);
        }

        .collage-side-column {
          justify-content: space-between;
        }

        /* Base Photo Frame: Rounded corners, refined gold outline, subtle shadow, NO text */
        .collage-photo-frame {
          position: relative;
          border-radius: var(--radius-lg, 20px);
          overflow: hidden;
          background-color: #EFE4D2;
          border: 1.2px solid rgba(184, 148, 82, 0.32);
          box-shadow: 0 12px 30px rgba(56, 42, 39, 0.08);
          cursor: pointer;
          transition: all 0.38s cubic-bezier(0.16, 1, 0.3, 1);
          flex: 1;
          min-height: 270px;
          display: flex;
        }

        .collage-photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Centerpiece Hero Frame: Significantly Larger, prominent golden styling */
        .collage-hero-frame {
          height: 100%;
          min-height: 560px;
          border: 2px solid rgba(184, 148, 82, 0.65);
          box-shadow:
            0 18px 45px rgba(56, 42, 39, 0.12),
            0 0 28px rgba(184, 148, 82, 0.2);
        }

        .collage-center-halo {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle, rgba(184, 148, 82, 0.2) 0%, transparent 70%);
          filter: blur(20px);
          pointer-events: none;
          z-index: 0;
        }

        /* Hover States on Desktop */
        @media (hover: hover) {
          .collage-photo-frame:hover {
            transform: translateY(-5px);
            border-color: #B89452;
            box-shadow:
              0 18px 40px rgba(56, 42, 39, 0.12),
              0 0 20px rgba(184, 148, 82, 0.25);
          }

          .collage-photo-frame:hover img {
            transform: scale(1.04);
          }

          .collage-photo-frame:hover .collage-photo-hover-glow {
            opacity: 1;
          }
        }

        /* Subtle Hover Indicator (Clean, no text) */
        .collage-photo-hover-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(56, 42, 39, 0.12) 0%, rgba(56, 42, 39, 0.35) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .collage-hover-icon {
          color: #382A27;
          filter: drop-shadow(0 2px 8px rgba(56, 42, 39, 0.2));
          padding: 10px;
          background: #EFE4D2;
          border: 1px solid rgba(184, 148, 82, 0.5);
          border-radius: 50%;
        }

        /* Delicate Gold Corner Accents on Center Hero */
        .gold-corner-accent {
          position: absolute;
          width: 18px;
          height: 18px;
          border-color: #B89452;
          pointer-events: none;
          z-index: 2;
        }
        .gold-corner-tl {
          top: 8px;
          left: 8px;
          border-top: 2px solid #B89452;
          border-left: 2px solid #B89452;
        }
        .gold-corner-tr {
          top: 8px;
          right: 8px;
          border-top: 2px solid #B89452;
          border-right: 2px solid #B89452;
        }
        .gold-corner-bl {
          bottom: 8px;
          left: 8px;
          border-bottom: 2px solid #B89452;
          border-left: 2px solid #B89452;
        }
        .gold-corner-br {
          bottom: 8px;
          right: 8px;
          border-bottom: 2px solid #B89452;
          border-right: 2px solid #B89452;
        }

        /* Tablet Width (641px - 991px): Center Image Spans Top Full Width, Flanked by 2x2 Grid */
        @media (max-width: 991px) and (min-width: 641px) {
          .gallery-collage-wrapper {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }

          .collage-center-column {
            grid-column: 1 / -1;
            order: -1; /* Center image comes first */
          }

          .collage-hero-frame {
            min-height: 440px;
            height: 440px;
          }

          .collage-side-column {
            flex-direction: column;
            gap: 16px;
          }

          .collage-photo-frame {
            min-height: 220px;
            height: 220px;
          }
        }

        /* Mobile Width (<= 640px): Clean, Balanced Hierarchy with Zero Clipping */
        @media (max-width: 640px) {
          .gallery-collage-wrapper {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }

          .collage-center-column {
            order: -1; /* Large center hero photo leads on top */
            width: 100%;
          }

          .collage-hero-frame {
            min-height: 360px;
            height: 360px;
            border-radius: 16px;
          }

          .collage-side-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            width: 100%;
          }

          .collage-photo-frame {
            min-height: 180px;
            height: 180px;
            border-radius: 14px;
          }
        }

        @keyframes lightboxFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};
