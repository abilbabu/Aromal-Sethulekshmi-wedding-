// Centralized Audio Manager for Wedding Soundtrack
const PRIMARY_AUDIO_SRC = '/assets/audio/weddingsong.mp3';
const FALLBACK_AUDIO_SRC = '/assets/audio/weddingsong.mp3';

let sharedAudio: HTMLAudioElement | null = null;
type PlayStateListener = (isPlaying: boolean) => void;
const listeners: Set<PlayStateListener> = new Set();
let soundPreferenceMuted = false;

export const getSharedAudio = (): HTMLAudioElement => {
  if (!sharedAudio && typeof window !== 'undefined') {
    sharedAudio = new Audio(PRIMARY_AUDIO_SRC);
    sharedAudio.volume = 0.65;
    sharedAudio.preload = 'auto';
    sharedAudio.loop = true;

    sharedAudio.addEventListener('play', () => {
      listeners.forEach((listener) => listener(true));
    });

    sharedAudio.addEventListener('pause', () => {
      listeners.forEach((listener) => listener(false));
    });

    // Fallback on source error
    sharedAudio.addEventListener('error', () => {
      if (sharedAudio && sharedAudio.src.includes('weddingsong.mp3')) {
        console.info('Switching to secondary wedding soundtrack...');
        sharedAudio.src = FALLBACK_AUDIO_SRC;
        if (!soundPreferenceMuted) {
          sharedAudio.play().catch(() => { });
        }
      }
    });

    sharedAudio.addEventListener('ended', () => {
      if (sharedAudio && !soundPreferenceMuted) {
        sharedAudio.currentTime = 0;
        sharedAudio.play().catch(() => { });
      }
    });
  }
  return sharedAudio!;
};

export const subscribeToPlaybackState = (listener: PlayStateListener): (() => void) => {
  listeners.add(listener);
  if (sharedAudio) {
    listener(!sharedAudio.paused);
  }
  return () => {
    listeners.delete(listener);
  };
};

export const playSoundtrack = async (): Promise<boolean> => {
  soundPreferenceMuted = false;
  const audio = getSharedAudio();
  try {
    audio.muted = false;
    await audio.play();
    return true;
  } catch (err) {
    console.warn('Audio autoplay restrictions or loading issue:', err);
    return false;
  }
};

export const pauseSoundtrack = (): void => {
  soundPreferenceMuted = true;
  if (sharedAudio) {
    sharedAudio.pause();
  }
};

export const toggleSoundtrack = async (): Promise<boolean> => {
  if (isSoundtrackPlaying()) {
    pauseSoundtrack();
    return false;
  } else {
    return await playSoundtrack();
  }
};

export const isSoundtrackPlaying = (): boolean => {
  return sharedAudio ? !sharedAudio.paused : false;
};
