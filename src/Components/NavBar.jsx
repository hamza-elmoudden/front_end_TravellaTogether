
import React from 'react'
import { useState } from 'react'

export const NavBar = () => {
  const [user, setUser] = useState({
    isLoggedIn: true,
    hasOrganizerPromise: true, // Set this based on your logic
    isOrganizer: false
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <a href="/" className="text-2xl font-bold text-blue-600">
              TravelApp
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </a>
            <a 
              href="/trips" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Trips
            </a>

            {/* Conditional Organizer Section */}
            {user.isLoggedIn && user.hasOrganizerPromise && !user.isOrganizer && (
              <a 
                href="/become-organizer" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Become an Organizer
              </a>
            )}

            {user.isOrganizer && (
              <a 
                href="/organizer-dashboard" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Organizer Dashboard
              </a>
            )}

            {/* User Account */}
            {user.isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <button className="text-gray-700 hover:text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
              </div>
            ) : (
              <a 
                href="/login" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </a>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </a>
              <a href="/trips" className="text-gray-700 hover:text-blue-600 font-medium">
                Trips
              </a>

              {user.isLoggedIn && user.hasOrganizerPromise && !user.isOrganizer && (
                <a 
                  href="/become-organizer" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                >
                  Become an Organizer
                </a>
              )}

              {user.isOrganizer && (
                <a href="/organizer-dashboard" className="text-gray-700 hover:text-blue-600 font-medium">
                  Organizer Dashboard
                </a>
              )}

              {user.isLoggedIn ? (
                <a href="/profile" className="text-gray-700 hover:text-blue-600 font-medium">
                  Profile
                </a>
              ) : (
                <a 
                  href="/login" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Login
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
