import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import {
  getSharedAudio,
  toggleSoundtrack,
  subscribeToPlaybackState,
} from '../utils/audioManager';

export const SoundtrackControl: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const audio = getSharedAudio();
    const unsubscribe = subscribeToPlaybackState((playing) => {
      setIsPlaying(playing);
    });

    const onError = () => {
      setHasError(true);
      setIsPlaying(false);
    };

    audio.addEventListener('error', onError);

    return () => {
      unsubscribe();
      audio.removeEventListener('error', onError);
    };
  }, []);

  const handleToggle = async () => {
    await toggleSoundtrack();
  };

  return (
    <aside
      aria-label="Wedding Soundtrack Control"
      style={{
        position: 'fixed',
        bottom: 'calc(clamp(14px, 3vh, 26px) + env(safe-area-inset-bottom, 0px))',
        right: 'calc(clamp(14px, 3vw, 26px) + env(safe-area-inset-right, 0px))',
        zIndex: 9990,
      }}
    >
      <button
        type="button"
        id="soundtrack-toggle-btn"
        onClick={handleToggle}
        aria-label={isPlaying ? 'Mute background wedding music' : 'Play background wedding music'}
        title={isPlaying ? 'SOUND ON — Click to mute' : 'SOUND OFF — Click to unmute'}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          minHeight: '44px',
          padding: '10px 18px',
          background: isPlaying
            ? 'linear-gradient(135deg, rgba(239, 228, 210, 0.98) 0%, rgba(245, 237, 224, 0.95) 100%)'
            : 'linear-gradient(135deg, rgba(239, 228, 210, 0.92) 0%, rgba(250, 245, 236, 0.95) 100%)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: isPlaying
            ? '1.2px solid rgba(184, 148, 82, 0.85)'
            : '1px solid rgba(184, 148, 82, 0.45)',
          borderRadius: 'var(--radius-full)',
          boxShadow: isPlaying
            ? '0 8px 24px rgba(56, 42, 39, 0.16), 0 0 18px rgba(184, 148, 82, 0.3)'
            : '0 6px 18px rgba(56, 42, 39, 0.1), 0 0 10px rgba(184, 148, 82, 0.15)',
          cursor: 'pointer',
          color: '#382A27',
          transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
          outline: 'none',
        }}
        className="soundtrack-btn"
      >
        {isPlaying ? (
          <>
            <Volume2 size={16} style={{ color: '#B89452', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#382A27',
                whiteSpace: 'nowrap',
              }}
            >
              SOUND ON
            </span>
            {/* Animated Equalizer Bars */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'flex-end',
                gap: '2.5px',
                height: '12px',
                marginLeft: '4px',
              }}
              aria-hidden="true"
            >
              <span className="eq-bar eq-1" />
              <span className="eq-bar eq-2" />
              <span className="eq-bar eq-3" />
            </div>
          </>
        ) : (
          <>
            <VolumeX size={16} style={{ color: 'rgba(56, 42, 39, 0.65)', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(56, 42, 39, 0.75)',
                whiteSpace: 'nowrap',
              }}
            >
              {hasError ? 'SOUND UNAVAILABLE' : 'SOUND OFF'}
            </span>
          </>
        )}
      </button>

      <style>{`
        .soundtrack-btn:hover {
          transform: translateY(-2px) scale(1.03);
          border-color: #B89452;
          box-shadow: 0 10px 28px rgba(56, 42, 39, 0.2), 0 0 22px rgba(184, 148, 82, 0.35);
        }
        .eq-bar {
          width: 2.5px;
          background: #B89452;
          border-radius: 2px;
          animation: eqBounce 1.2s ease-in-out infinite alternate;
        }
        .eq-1 {
          height: 60%;
          animation-delay: 0.1s;
        }
        .eq-2 {
          height: 100%;
          animation-delay: 0.3s;
        }
        .eq-3 {
          height: 75%;
          animation-delay: 0.2s;
        }
        @keyframes eqBounce {
          0% { height: 25%; }
          50% { height: 100%; }
          100% { height: 45%; }
        }
      `}</style>
    </aside>
  );
};
