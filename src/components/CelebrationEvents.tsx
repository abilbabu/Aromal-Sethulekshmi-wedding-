import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Navigation, Sparkles, Music, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { weddingContent } from '../data/weddingContent';

export const CelebrationEvents: React.FC = () => {
  const events = weddingContent.events;
  const [activeDetailsId, setActiveDetailsId] = useState<string | null>(null);
  const [addedCalendarId, setAddedCalendarId] = useState<string | null>(null);

  // Curated imagery mapping matching the reference layout
  const eventPhotos: Record<string, { image: string; number: string; iconType: string }> = {
    'familial-blessings': {
      image: '/assets/images/gallery/photo_35_jis09746.jpg', // Kasavu jewelry & hands ritual
      number: '/02.',
      iconType: 'sparkles',
    },
    'auspicious-muhurtham': {
      image: '/assets/images/gallery/photo_18_jis09407.jpg', // Bride in sacred Kasavu & temple jewelry
      number: '/03.',
      iconType: 'rings',
    },
    'wedding-reception': {
      image: '/assets/images/gallery/photo_31_jis09656.jpg', // Twilight celebratory atmosphere
      number: '/04.',
      iconType: 'music',
    },
  };

  // Google Calendar URL generator
  const getGoogleCalendarUrl = (event: typeof events[0]) => {
    if (event.isTBA) return '#';
    let dates = '20261024T093000Z/20261024T150000Z';
    if (event.id === 'auspicious-muhurtham') {
      dates = '20261025T053000Z/20261025T100000Z';
    } else if (event.id === 'wedding-reception') {
      dates = '20261025T123000Z/20261025T160000Z';
    }

    const title = encodeURIComponent(event.calendarTitle || event.title);
    const details = encodeURIComponent(`${event.title} - ${event.description}\nAromal & Sethulekshmi Wedding Celebrations`);
    const location = encodeURIComponent(`${event.venueName}, ${event.address}`);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  // Download ICS Calendar file
  const downloadIcs = (event: typeof events[0]) => {
    if (event.isTBA) return;
    let dtStart = '20261024T093000Z';
    let dtEnd = '20261024T150000Z';
    if (event.id === 'auspicious-muhurtham') {
      dtStart = '20261025T053000Z';
      dtEnd = '20261025T100000Z';
    } else if (event.id === 'wedding-reception') {
      dtStart = '20261025T123000Z';
      dtEnd = '20261025T160000Z';
    }

    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Aromal and Sethulekshmi Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${event.id}-2026@aromalsethu.wedding`,
      `DTSTART:${dtStart}`,
      `DTEND:${dtEnd}`,
      `SUMMARY:${event.title} | Aromal & Sethulekshmi`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.venueName}, ${event.address}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.id}_Aromal_Sethulekshmi.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setAddedCalendarId(event.id);
    setTimeout(() => setAddedCalendarId(null), 3000);
  };

  return (
    <section
      id="events"
      className="celebrations-panoramic-section"
      style={{
        position: 'relative',
        backgroundColor: '#FAF5EC',
        backgroundImage: `
          radial-gradient(circle at 50% 25%, rgba(239, 228, 210, 0.75) 0%, rgba(250, 245, 236, 0.95) 55%, #FAF5EC 100%)
        `,
        padding: 'clamp(46px, 6vh, 80px) 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(184, 148, 82, 0.2)',
      }}
    >
      {/* Background Sacred Geometric Mandala Linework Matching Reference */}
      <svg
        className="celebrations-bg-geometry"
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.28,
          pointerEvents: 'none',
        }}
      >
        <defs>
          <radialGradient id="celebrationsGlow" cx="50%" cy="30%" r="50%">
            <stop offset="0%" stopColor="#B89452" stopOpacity="0.35" />
            <stop offset="45%" stopColor="#EFE4D2" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FAF5EC" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="1400" height="900" fill="url(#celebrationsGlow)" />

        {/* Delicate Yantra Lattice centered behind the typography */}
        <g stroke="rgba(184, 148, 82, 0.28)" strokeWidth="0.75" fill="none">
          <circle cx="700" cy="220" r="110" strokeDasharray="3 4" />
          <circle cx="700" cy="220" r="170" />
          <circle cx="700" cy="220" r="250" strokeDasharray="4 6" />
          <circle cx="700" cy="220" r="350" strokeWidth="0.5" />

          {/* Symmetrical Axis Rays */}
          <line x1="100" y1="220" x2="1300" y2="220" strokeWidth="0.7" stroke="rgba(184, 148, 82, 0.3)" />
          <line x1="700" y1="20" x2="700" y2="850" strokeWidth="0.7" stroke="rgba(184, 148, 82, 0.3)" />
          <line x1="300" y1="40" x2="1100" y2="600" strokeDasharray="3 5" strokeWidth="0.45" />
          <line x1="300" y1="600" x2="1100" y2="40" strokeDasharray="3 5" strokeWidth="0.45" />
        </g>
      </svg>

      <div className="editorial-container celebrations-container" style={{ position: 'relative', zIndex: 10 }}>

        {/* =========================================================
            TOP SECTION HEADER: Full-width Centered Title & Description
            ========================================================= */}
        <div className="celebrations-top-header">
          {/* Top Traditional Lotus Emblem with Flanking Gold Lines */}
          <div className="celebrations-lotus-top">
            <span className="celebrations-hairline celebrations-hairline-left" />
            <svg width="24" height="15" viewBox="0 0 26 16" fill="none" aria-hidden="true">
              <path d="M13 1C13 1 10.2 6.2 10.2 10.5C10.2 12.8 11.4 14.2 13 14.2C14.6 14.2 15.8 12.8 15.8 10.5C15.8 6.2 13 1 13 1Z" fill="#FAF5EC" />
              <path d="M13 6.5C10.5 8.2 5.5 10.8 6.4 13.5C7.2 14.8 9.4 14.4 11 13C12.1 12.1 12.6 10 13 6.5Z" fill="#B89452" />
              <path d="M13 6.5C15.5 8.2 20.5 10.8 19.6 13.5C18.8 14.8 16.6 14.4 15 13C13.9 12.1 13.4 10 13 6.5Z" fill="#B89452" />
              <path d="M13 9C9.5 10.8 2.8 12.5 3.6 14.8C4.3 15.6 6.8 15.2 9.2 14C10.6 13.2 12 11.6 13 9Z" fill="#8E703B" />
              <path d="M13 9C16.5 10.8 23.2 12.5 22.4 14.8C21.7 15.6 19.2 15.2 16.8 14C15.4 13.2 14 11.6 13 9Z" fill="#8E703B" />
            </svg>
            <span className="celebrations-hairline celebrations-hairline-right" />
          </div>

          {/* Sub-Heading: OUR SPECIAL DAY */}
          <div className="celebrations-special-day">
            OUR SPECIAL DAY
          </div>

          {/* Stacked Serif Title: WEDDING CELEBRATIONS */}
          <h2 className="celebrations-stacked-title">
            <span>WEDDING</span>
            <span>CELEBRATIONS</span>
          </h2>

          {/* Description Text matching Reference */}
          <p className="celebrations-center-desc">
            A beautiful journey of traditions, togetherness, and unforgettable moments.
            We warmly invite you to be a part of our wedding celebrations.
          </p>

          {/* Bottom Centered Golden Lotus Motif */}
          <div className="celebrations-lotus-bottom">
            <svg width="26" height="16" viewBox="0 0 26 16" fill="none" aria-hidden="true">
              <path d="M13 1C13 1 10.2 6.2 10.2 10.5C10.2 12.8 11.4 14.2 13 14.2C14.6 14.2 15.8 12.8 15.8 10.5C15.8 6.2 13 1 13 1Z" fill="#FAF5EC" />
              <path d="M13 6.5C10.5 8.2 5.5 10.8 6.4 13.5C7.2 14.8 9.4 14.4 11 13C12.1 12.1 12.6 10 13 6.5Z" fill="#B89452" />
              <path d="M13 6.5C15.5 8.2 20.5 10.8 19.6 13.5C18.8 14.8 16.6 14.4 15 13C13.9 12.1 13.4 10 13 6.5Z" fill="#B89452" />
              <path d="M13 9C9.5 10.8 2.8 12.5 3.6 14.8C4.3 15.6 6.8 15.2 9.2 14C10.6 13.2 12 11.6 13 9Z" fill="#8E703B" />
              <path d="M13 9C16.5 10.8 23.2 12.5 22.4 14.8C21.7 15.6 19.2 15.2 16.8 14C15.4 13.2 14 11.6 13 9Z" fill="#8E703B" />
            </svg>
          </div>
        </div>

        {/* =========================================================
            DOWN: Images & Cards Display Below Header
            Left: /01. Large Wedding Portrait
            Right: /02., /03., /04. Event Cards
            ========================================================= */}
        <div className="celebrations-imagery-layout">

          {/* Left Column: /01. Large Wedding Photograph */}
          <div className="celebrations-left-hero-col">
            <div className="celebrations-hero-image-card">
              {/* Number /01. Overlaid at Top */}
              <div className="celebrations-numeral celebrations-numeral-hero">
                /01.
              </div>

              {/* Main Wedding Portrait */}
              <img
                src="/assets/images/gallery/photo_06_jis09198.jpg"
                alt="Aromal & Sethulekshmi wedding celebration"
                loading="lazy"
                className="celebrations-hero-img"
              />

              {/* Gradient Vignette Overlay */}
              <div className="celebrations-hero-gradient" />
            </div>
          </div>

          {/* Right Column: Three Vertical Event Cards (/02., /03., /04.) */}
          <div className="celebrations-right-cards-col">
            <div className="celebrations-cards-row">
              {events.map((event) => {
                const meta = eventPhotos[event.id] || {
                  image: '/assets/images/gallery/photo_18_jis09407.jpg',
                  number: '/02.',
                  iconType: 'sparkles',
                };
                const isExpanded = activeDetailsId === event.id;

                return (
                  <div
                    key={event.id}
                    className="celebration-vertical-card"
                  >
                    {/* Background Wedding Photo with Deep Wine Plum Gradient Overlay */}
                    <div className="celebration-card-bg-wrap">
                      <img
                        src={meta.image}
                        alt={event.title}
                        loading="lazy"
                        className="celebration-card-bg-img"
                      />
                      <div className="celebration-card-overlay" />
                    </div>

                    {/* Card Top Content: Number /02., /03., /04. + Icon + Title */}
                    <div className="celebration-card-top-content">
                      <div className="celebrations-card-numeral">
                        {meta.number}
                      </div>

                      {/* Small Icon matching Reference */}
                      <div className="celebrations-card-icon">
                        {meta.iconType === 'sparkles' && <Sparkles size={16} />}
                        {meta.iconType === 'rings' && (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <circle cx="9" cy="12" r="6" />
                            <circle cx="15" cy="12" r="6" />
                          </svg>
                        )}
                        {meta.iconType === 'music' && <Music size={16} />}
                      </div>

                      {/* Spaced All-Caps Event Title matching Reference */}
                      <h3 className="celebrations-card-title">
                        {event.title.toUpperCase()}
                      </h3>
                    </div>

                    {/* Card Bottom Content: Essential Info & Interactive Quick Action Buttons */}
                    <div className="celebration-card-bottom-content">
                      <div className="celebration-card-meta-row">
                        <div className="celebration-card-meta-item">
                          <Calendar size={13} style={{ color: '#E7C477', flexShrink: 0 }} />
                          <span>{event.date}</span>
                        </div>
                        <div className="celebration-card-meta-item">
                          <Clock size={13} style={{ color: '#E7C477', flexShrink: 0 }} />
                          <span>{event.time}</span>
                        </div>
                        <div className="celebration-card-meta-item">
                          <MapPin size={13} style={{ color: '#E7C477', flexShrink: 0 }} />
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {event.venueName}
                          </span>
                        </div>
                      </div>

                      {/* Interactive Drawer for Full Details & Directions */}
                      <div style={{ marginTop: '10px' }}>
                        {!event.isTBA ? (
                          <>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                              {/* Direct Google Maps Directions */}
                              <a
                                href={event.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="celebration-mini-btn celebration-btn-gold"
                                aria-label={`Get directions to ${event.venueName} on Google Maps`}
                              >
                                <Navigation size={12} />
                                <span>DIRECTIONS</span>
                              </a>

                              {/* Toggle In-Card Info / Map */}
                              <button
                                type="button"
                                onClick={() => setActiveDetailsId(isExpanded ? null : event.id)}
                                className="celebration-mini-btn celebration-btn-outline"
                                aria-expanded={isExpanded}
                                aria-label={`Toggle full details for ${event.title}`}
                              >
                                {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                                <span>{isExpanded ? 'CLOSE' : 'DETAILS'}</span>
                              </button>
                            </div>

                            {/* In-Card Expanded Info Tray */}
                            {isExpanded && (
                              <div className="celebration-expanded-tray">
                                <p style={{ fontSize: '0.8rem', color: '#382A27', lineHeight: 1.5, margin: '0 0 10px 0', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                                  "{event.description}"
                                </p>
                                <div style={{ fontSize: '0.74rem', color: '#6E5651', marginBottom: '10px', lineHeight: 1.4 }}>
                                  <strong style={{ color: '#241A18' }}>Address: </strong>
                                  {event.address}
                                </div>
                                <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: '#B89452', textTransform: 'uppercase', marginBottom: '8px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                                  <Calendar size={11} />
                                  <span>Save The Date</span>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                                  <a
                                    href={getGoogleCalendarUrl(event)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="celebration-mini-btn celebration-btn-subtle"
                                  >
                                    <Calendar size={11} />
                                    <span>Google Cal</span>
                                  </a>
                                  <button
                                    type="button"
                                    onClick={() => downloadIcs(event)}
                                    className="celebration-mini-btn celebration-btn-subtle"
                                  >
                                    {addedCalendarId === event.id ? (
                                      <>
                                        <Check size={11} style={{ color: '#B89452' }} />
                                        <span>Saved</span>
                                      </>
                                    ) : (
                                      <>
                                        <Calendar size={11} />
                                        <span>Apple / iCal</span>
                                      </>
                                    )}
                                  </button>
                                </div>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="celebration-tba-pill">
                            <span>DETAILS WILL BE ANNOUNCED SHORTLY</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* ---------------- TOP HEADER BLOCK ---------------- */
        .celebrations-top-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          justifyContent: center;
          text-align: center;
          max-width: 820px;
          margin: 0 auto clamp(24px, 3.8vh, 42px) auto;
          padding: 0 16px;
        }

        .celebrations-lotus-top {
          display: flex;
          align-items: center;
          justifyContent: center;
          gap: 16px;
          width: 100%;
          max-width: 240px;
          margin-bottom: 12px;
        }

        .celebrations-hairline {
          flex: 1;
          height: 1px;
        }

        .celebrations-hairline-left {
          background: linear-gradient(90deg, transparent, rgba(231, 196, 119, 0.75));
        }

        .celebrations-hairline-right {
          background: linear-gradient(90deg, rgba(231, 196, 119, 0.75), transparent);
        }

        .celebrations-special-day {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(0.7rem, 1.1vw, 0.8rem);
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #B89452;
          margin-bottom: 10px;
        }

        .celebrations-stacked-title {
          font-family: var(--font-editorial);
          font-size: clamp(2.2rem, 3.8vw, 3.4rem);
          font-weight: 500;
          line-height: 1.05;
          color: #241A18;
          margin: 0 0 14px 0;
          letter-spacing: 0.04em;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-shadow: 0 2px 14px rgba(184, 148, 82, 0.2);
        }

        .celebrations-center-desc {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1rem, 1.35vw, 1.18rem);
          line-height: 1.65;
          color: #6E5651;
          max-width: 580px;
          margin: 0 auto 14px auto;
          font-style: italic;
        }

        .celebrations-lotus-bottom {
          display: flex;
          align-items: center;
          justifyContent: center;
          filter: drop-shadow(0 0 6px rgba(184, 148, 82, 0.4));
        }

        /* ---------------- DOWN: IMAGERY & CARDS LAYOUT ---------------- */
        .celebrations-imagery-layout {
          display: grid;
          grid-template-columns: minmax(280px, 1fr) minmax(450px, 2.2fr);
          gap: clamp(20px, 2.5vw, 32px);
          align-items: stretch;
          width: 100%;
          max-width: 1380px;
          margin: 0 auto;
        }

        /* Left Hero Image Card (/01.) */
        .celebrations-left-hero-col {
          display: flex;
          flex-direction: column;
        }

        .celebrations-hero-image-card {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: clamp(450px, 56vh, 520px);
          border-radius: var(--radius-lg, 20px);
          overflow: hidden;
          background-color: #EFE4D2;
          border: 1.2px solid rgba(184, 148, 82, 0.35);
          box-shadow: 0 16px 36px rgba(56, 42, 39, 0.1);
        }

        .celebrations-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 25%;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .celebrations-hero-image-card:hover .celebrations-hero-img {
          transform: scale(1.03);
        }

        .celebrations-hero-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(56, 42, 39, 0.45) 0%, rgba(56, 42, 39, 0.08) 40%, rgba(56, 42, 39, 0.6) 100%);
          pointer-events: none;
        }

        .celebrations-numeral {
          position: absolute;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.2rem, 3.2vw, 3.6rem);
          font-style: italic;
          font-weight: 300;
          color: #FAF5EC;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 10px rgba(56, 42, 39, 0.7);
          z-index: 2;
        }

        .celebrations-numeral-hero {
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
        }

        /* Right Column (Cards Row) */
        .celebrations-right-cards-col {
          display: flex;
          flex-direction: column;
          justifyContent: center;
        }

        .celebrations-cards-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(12px, 1.4vw, 18px);
          height: 100%;
          min-height: clamp(450px, 56vh, 520px);
        }

        .celebration-vertical-card {
          position: relative;
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg, 20px);
          overflow: hidden;
          background-color: #EFE4D2;
          border: 1.2px solid rgba(184, 148, 82, 0.35);
          box-shadow: 0 14px 34px rgba(56, 42, 39, 0.1);
          transition: all 0.38s cubic-bezier(0.16, 1, 0.3, 1);
          min-height: clamp(450px, 56vh, 520px);
        }

        @media (hover: hover) {
          .celebration-vertical-card:hover {
            transform: translateY(-5px);
            border-color: #B89452;
            box-shadow: 0 20px 45px rgba(56, 42, 39, 0.15), 0 0 20px rgba(184, 148, 82, 0.25);
          }
          .celebration-vertical-card:hover .celebration-card-bg-img {
            transform: scale(1.05);
          }
        }

        .celebration-card-bg-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .celebration-card-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .celebration-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(56, 42, 39, 0.65) 0%,
            rgba(56, 42, 39, 0.30) 30%,
            rgba(40, 30, 28, 0.75) 65%,
            rgba(30, 22, 20, 0.92) 100%
          );
        }

        .celebration-card-top-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 24px 14px 10px 14px;
        }

        .celebrations-card-numeral {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.8rem, 2.6vw, 2.6rem);
          font-style: italic;
          font-weight: 300;
          color: #FAF5EC;
          line-height: 1;
          margin-bottom: 12px;
          text-shadow: 0 2px 10px rgba(56, 42, 39, 0.7);
        }

        .celebrations-card-icon {
          color: #C9A765;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          filter: drop-shadow(0 0 6px rgba(184, 148, 82, 0.6));
        }

        .celebrations-card-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(0.72rem, 1vw, 0.82rem);
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #FFFFFF;
          margin: 0;
          line-height: 1.35;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
        }

        .celebration-card-bottom-content {
          position: relative;
          z-index: 2;
          margin-top: auto;
          padding: 14px 14px 18px 14px;
        }

        .celebration-card-meta-row {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 10px 12px;
          background: rgba(239, 228, 210, 0.94);
          border: 1px solid rgba(184, 148, 82, 0.35);
          border-radius: var(--radius-sm, 8px);
          backdrop-filter: blur(8px);
        }

        .celebration-card-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: #382A27;
          font-family: var(--font-sans);
        }

        .celebration-mini-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 8px 10px;
          min-height: 36px;
          border-radius: var(--radius-full);
          font-family: var(--font-sans);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
          border: none;
          outline: none;
        }

        .celebration-btn-gold {
          background: linear-gradient(180deg, #C9A765 0%, #B89452 50%, #A27F3F 100%);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 4px 12px rgba(184, 148, 82, 0.35);
        }
        .celebration-btn-gold:hover {
          background: linear-gradient(180deg, #D5B573 0%, #C4A05D 50%, #B08B49 100%);
          color: #FFFFFF;
          transform: translateY(-1px);
        }

        .celebration-btn-outline {
          background: rgba(239, 228, 210, 0.9);
          color: #382A27;
          border: 1px solid rgba(184, 148, 82, 0.45);
        }
        .celebration-btn-outline:hover {
          background: #E4D6C1;
          border-color: #B89452;
          color: #241A18;
        }

        .celebration-btn-subtle {
          background: #FAF5EC;
          color: #382A27;
          border: 1px solid rgba(184, 148, 82, 0.35);
        }
        .celebration-btn-subtle:hover {
          border-color: #B89452;
          color: #B89452;
        }

        .celebration-expanded-tray {
          margin-top: 8px;
          padding: 10px;
          background: rgba(239, 228, 210, 0.96);
          border: 1px solid rgba(184, 148, 82, 0.35);
          border-radius: var(--radius-sm, 8px);
          backdrop-filter: blur(12px);
          animation: trayFadeIn 0.25s ease;
        }

        .celebration-tba-pill {
          padding: 8px;
          text-align: center;
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #6E5651;
          background: rgba(239, 228, 210, 0.85);
          border: 1px dashed rgba(184, 148, 82, 0.4);
          border-radius: var(--radius-sm);
        }

        @keyframes trayFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ========================================================
           RESPONSIVE BREAKPOINTS: Tablet (768px - 1024px)
           ======================================================== */
        @media (max-width: 1024px) and (min-width: 768px) {
          .celebrations-imagery-layout {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .celebrations-hero-image-card {
            height: 440px;
            min-height: 440px;
          }

          .celebrations-cards-row {
            grid-template-columns: repeat(3, 1fr);
            min-height: 480px;
            gap: 14px;
          }

          .celebration-vertical-card {
            min-height: 480px;
          }
        }

        /* ========================================================
           RESPONSIVE BREAKPOINTS: Mobile (320px - 767px)
           ======================================================== */
        @media (max-width: 767px) {
          .celebrations-top-header {
            margin-bottom: 24px;
          }

          .celebrations-stacked-title {
            font-size: clamp(2rem, 8.5vw, 2.6rem);
            margin-bottom: 12px;
          }

          .celebrations-center-desc {
            font-size: 1rem;
            max-width: 100%;
            margin-bottom: 14px;
          }

          .celebrations-imagery-layout {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .celebrations-hero-image-card {
            height: clamp(320px, 50vh, 400px);
            min-height: 320px;
            border-radius: 16px;
          }

          .celebrations-cards-row {
            display: flex;
            flex-direction: column;
            gap: 16px;
            min-height: auto;
            height: auto;
          }

          .celebration-vertical-card {
            min-height: 420px;
            height: auto;
            border-radius: 16px;
          }

          .celebration-card-bottom-content {
            padding: 14px 14px 22px 14px;
          }

          .celebrations-card-numeral {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  );
};
