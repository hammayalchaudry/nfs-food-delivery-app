import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Logo & About */}
        <div className="space-y-4">
          <span className="text-2xl font-bold text-orange-500">Craving<span className="text-white">Bites</span></span>
          <p className="text-sm text-gray-400 mt-2">
            Fresh, hot, and delicious meals delivered straight to your doorstep in under 30 minutes.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-orange-500 transition">Home</a></li>
            <li><a href="#dishes" className="hover:text-orange-500 transition">Popular Dishes</a></li>
            <li><a href="#about" className="hover:text-orange-500 transition">About Us</a></li>
          </ul>
        </div>

        {/* Column 3: Opening Hours */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Opening Hours</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Monday - Friday: 10:00 AM - 11:00 PM</li>
            <li>Saturday - Sunday: 11:00 AM - 12:00 AM</li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 123 Food Street, Lahore, Pakistan</li>
            <li>📞 +92 300 1234567</li>
            <li>✉️ support@cravingbites.com</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-sm text-gray-500">
        <p>&copy; 2026 CravingBites. All rights reserved.</p>
      </div>
    </footer>
  );
}
