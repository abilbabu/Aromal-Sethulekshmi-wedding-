import React from 'react';
import { RoyalInvitationGate } from './components/RoyalInvitationGate';
import { HeroSection } from './components/HeroSection';
import { CoupleSection } from './components/CoupleSection';
import { CelebrationEvents } from './components/CelebrationEvents';
import { DestinationGuide } from './components/DestinationGuide';
import { VisualJourney } from './components/VisualJourney';
import { CinematicEpilogue } from './components/CinematicEpilogue';
import { SoundtrackControl } from './components/SoundtrackControl';

export const App: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#FAF5EC',
        color: '#382A27',
        overflowX: 'hidden',
      }}
    >
      {/* 1. Royal Entrance Gate: Opens invitation and unlocks soundtrack seamlessly */}
      <RoyalInvitationGate />

      {/* Main Wedding Invitation Website */}
      <main>
        {/* 2. Hero Section — Cinematic Wedding Cover Anchor */}
        <HeroSection />

        {/* 3. Couple Section — Portraits of Aromal & Sethulekshmi */}
        <CoupleSection />

        {/* 5. Wedding Events — Separate Event Cards (Familial Blessings, Muhurtham, Reception) */}
        <CelebrationEvents />

        {/* 6. Google Maps & Destination Guide — Transit and Venue Logistics */}
        <DestinationGuide />

        {/* 7. Wedding Memories / Gallery — Editorial Grid with Lightbox */}
        <VisualJourney />
      </main>

      {/* 8. Closing Section — Gratitude, Couple Names, Date & Hashtag */}
      <CinematicEpilogue />

      {/* 9. Fixed Background Wedding Soundtrack Player */}
      <SoundtrackControl />
    </div>
  );
};

export default App;
