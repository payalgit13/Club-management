import React from 'react';
import { EventCard } from '../components/EventCard';
import { ClubCard } from '../components/ClubCard';

// Mock data
const mockEvents = [
  { id: 'evt1', title: 'Hackathon 2025', description: '24-hour coding challenge', date: '2025-10-15', time: '09:00', location: 'Tech Lab' },
  { id: 'evt2', title: 'Photo Walk', description: 'Campus photography session', date: '2025-10-20', time: '14:00', location: 'Campus Grounds' }
];

const mockClubs = [
  { id: 'club1', name: 'Tech Club', description: 'Coding and tech enthusiasts', members: 45 },
  { id: 'club2', name: 'Photography Club', description: 'Capture moments together', members: 30 }
];

const Home = () => {
  const handleRegister = (id) => {
    alert(`Registered for event ${id}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Welcome to College Events</h1>

      <h2 className="text-3xl font-semibold mb-6">Upcoming Events</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {mockEvents.map(event => <EventCard key={event.id} event={event} onRegister={handleRegister} />)}
      </div>

      <h2 className="text-3xl font-semibold mb-6">Clubs</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {mockClubs.map(club => <ClubCard key={club.id} club={club} />)}
      </div>
    </div>
  );
};

export default Home;
