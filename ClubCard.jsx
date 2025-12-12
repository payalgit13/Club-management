import React from 'react';
import { Users } from 'lucide-react';

const ClubCard = ({ club }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
    <h3 className="text-xl font-bold mb-2">{club.name}</h3>
    <p className="text-gray-600 mb-4">{club.description}</p>
    <div className="flex items-center text-gray-500 text-sm space-x-2">
      <Users size={16}/> <span>{club.members} members</span>
    </div>
  </div>
);

export default ClubCard;
