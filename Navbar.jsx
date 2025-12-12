import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calendar, Users, LogIn, UserPlus } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold">College Events</h1>
            <div className="flex space-x-4">
              <Link to="/" className="flex items-center space-x-1 hover:text-indigo-200">
                <Home size={18}/> <span>Home</span>
              </Link>
              <Link to="/events" className="flex items-center space-x-1 hover:text-indigo-200">
                <Calendar size={18}/> <span>Events</span>
              </Link>
              <Link to="/clubs" className="flex items-center space-x-1 hover:text-indigo-200">
                <Users size={18}/> <span>Clubs</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="flex items-center space-x-1 hover:text-indigo-200">
              <LogIn size={18}/> <span>Login</span>
            </Link>
            <Link to="/register" className="bg-indigo-700 px-4 py-2 rounded hover:bg-indigo-800">
              <UserPlus size={18}/> <span>Register</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
