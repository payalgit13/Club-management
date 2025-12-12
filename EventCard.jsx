import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventCard = ({ event, onRegister }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
    <p className="text-gray-600 mb-4">{event.description}</p>
    <div className="flex items-center text-gray-500 text-sm space-x-4 mb-4">
      <span className="flex items-center"><Calendar size={16} className="mr-1"/> {event.date}</span>
      <span className="flex items-center"><Clock size={16} className="mr-1"/> {event.time}</span>
      <span className="flex items-center"><MapPin size={16} className="mr-1"/> {event.location}</span>
    </div>
    <button 
      onClick={() => onRegister(event.id)}
      className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200 font-medium">
      Register
    </button>
  </div>
);

export default EventCard;
