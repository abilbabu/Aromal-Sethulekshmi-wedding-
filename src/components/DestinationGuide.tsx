import React, { useState } from 'react';
import { MapPin, Navigation, Train, Plane, Car, Compass } from 'lucide-react';

export const DestinationGuide: React.FC = () => {
  const [selectedVenue, setSelectedVenue] = useState<'muhurtham' | 'blessings'>('muhurtham');

  const venues = {
    muhurtham: {
      name: "Santhi Auditorium",
      event: "Auspicious Muhurtham & Feast",
      address: "Eliyarackal, Konni, Pathanamthitta District, Kerala 689691",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Santhi+Auditorium+Eliyarackal+Konni+Pathanamthitta+Kerala",
      embedQuery: "Santhi Auditorium, Eliyarackal, Konni, Pathanamthitta, Kerala",
      parking: "Dedicated venue parking available within the auditorium premises.",
      transit: [
        { icon: Train, title: "Chengannur Railway Station (CNGR)", dist: "Approx. 32 km (~45 mins drive via SH8)" },
        { icon: Plane, title: "Trivandrum Int'l Airport (TRV)", dist: "Approx. 105 km (~2.5 hrs drive via Main Central Rd)" },
        { icon: Plane, title: "Cochin Int'l Airport (COK)", dist: "Approx. 135 km (~3 hrs drive via MC Rd / NH66)" },
        { icon: Car, title: "Konni Junction / KSRTC", dist: "Approx. 2.5 km (~6 mins drive)" },
      ],
    },
    blessings: {
      name: "Thempamkoottathil",
      event: "Familial Blessings & Reception",
      address: "Ayravon (PO), Konni, Pathanamthitta District, Kerala (9°13'22.4\"N 76°51'41.4\"E)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=9.222881,76.861496",
      embedQuery: "9.222881,76.861496",
      parking: "Residence approach road and designated guest parking.",
      transit: [
        { icon: Car, title: "Konni Town Center", dist: "Approx. 4.5 km (~10 mins drive)" },
        { icon: Train, title: "Chengannur Railway Station (CNGR)", dist: "Approx. 34 km (~50 mins drive)" },
        { icon: Car, title: "Pathanamthitta KSRTC Bus Station", dist: "Approx. 14 km (~25 mins drive)" },
      ],
    },
  };

  const current = venues[selectedVenue];

  return (
    <section
      id="venues"
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
      <div className="mandala-bg-pattern" />

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
            <Compass size={13} style={{ color: '#B89452' }} />
            <span>Venues &amp; Directions</span>
          </div>
          <h2 className="editorial-title" style={{ marginBottom: '16px', color: '#241A18' }}>
            Destination &amp; Location Guide
          </h2>
          <p className="editorial-subtitle" style={{ margin: '0 auto' }}>
            Situated amidst the serene landscapes and historic heritage of Konni, Pathanamthitta.
            Find direct Google Maps directions and transit assistance below.
          </p>
        </div>

        {/* Venue Selector Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '36px',
            flexWrap: 'wrap',
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedVenue('muhurtham')}
            style={{
              padding: '12px 26px',
              borderRadius: 'var(--radius-full)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.28s ease',
              border: selectedVenue === 'muhurtham'
                ? '1px solid rgba(255, 255, 255, 0.6)'
                : '1px solid rgba(184, 148, 82, 0.35)',
              background: selectedVenue === 'muhurtham'
                ? 'linear-gradient(180deg, #C9A765 0%, #B89452 50%, #A27F3F 100%)'
                : '#EFE4D2',
              color: selectedVenue === 'muhurtham' ? '#FFFFFF' : '#382A27',
              boxShadow: selectedVenue === 'muhurtham'
                ? '0 6px 20px rgba(184, 148, 82, 0.35)'
                : 'none',
            }}
          >
            Santhi Auditorium (Muhurtham)
          </button>

          <button
            type="button"
            onClick={() => setSelectedVenue('blessings')}
            style={{
              padding: '12px 26px',
              borderRadius: 'var(--radius-full)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.28s ease',
              border: selectedVenue === 'blessings'
                ? '1px solid rgba(255, 255, 255, 0.6)'
                : '1px solid rgba(184, 148, 82, 0.35)',
              background: selectedVenue === 'blessings'
                ? 'linear-gradient(180deg, #C9A765 0%, #B89452 50%, #A27F3F 100%)'
                : '#EFE4D2',
              color: selectedVenue === 'blessings' ? '#FFFFFF' : '#382A27',
              boxShadow: selectedVenue === 'blessings'
                ? '0 6px 20px rgba(184, 148, 82, 0.35)'
                : 'none',
            }}
          >
            Thempamkoottathil (Blessings & Reception)
          </button>
        </div>

        {/* 2-Column Responsive Layout: Logistics Details + Google Maps Embed */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: 'clamp(28px, 4vw, 44px)',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Venue Details & Transit Connections */}
          <div
            className="luxury-card"
            style={{
              padding: 'clamp(28px, 4vw, 38px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#B89452',
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                <MapPin size={15} />
                <span>{current.event}</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                  color: '#241A18',
                  margin: '0 0 12px 0',
                }}
              >
                {current.name}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.98rem',
                  color: '#382A27',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                }}
              >
                {current.address}
              </p>

              {/* Transit Recommendations */}
              <div style={{ marginBottom: '28px' }}>
                <div
                  style={{
                    fontSize: '0.76rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#6E5651',
                    marginBottom: '14px',
                  }}
                >
                  Nearby Transit &amp; Routes
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {current.transit.map((t, idx) => {
                    const IconComp = t.icon;
                    return (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '10px 14px',
                          background: '#FAF5EC',
                          border: '1px solid rgba(184, 148, 82, 0.22)',
                          borderRadius: 'var(--radius-sm)',
                        }}
                      >
                        <IconComp size={16} style={{ color: '#B89452', flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <div style={{ fontSize: '0.86rem', color: '#241A18', fontWeight: 600 }}>
                            {t.title}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: '#6E5651' }}>
                            {t.dist}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
            <div>
              <a
                href={current.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                aria-label={`Open Google Maps directions to ${current.name}`}
              >
                <Navigation size={16} />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Responsive Map Frame */}
          <div
            className="luxury-card"
            style={{
              padding: '6px',
              minHeight: '380px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <iframe
              title={`Google Maps embed for ${current.name}`}
              width="100%"
              height="100%"
              style={{
                border: 0,
                borderRadius: 'calc(var(--radius-lg) - 6px)',
                minHeight: '380px',
                flex: 1,
                filter: 'contrast(1.05) saturate(1.1)',
              }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                current.embedQuery || `${current.name}, ${current.address}`
              )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
