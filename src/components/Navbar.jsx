import React, { useState } from 'react';

// Argument mein onCheckout function receive kiya
export default function Navbar({ cartCount, onCheckout }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-orange-600">Craving<span className="text-zinc-900">Bites</span></span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#home" className="hover:text-orange-600 transition">Home</a>
            <a href="#dishes" className="hover:text-orange-600 transition">Popular Dishes</a>
          </div>
          
          {/* Desktop Cart & Checkout */}
          <div className="hidden md:flex items-center space-x-4">
            <div onClick={onCheckout} className="relative p-2 cursor-pointer bg-orange-50 rounded-full hover:bg-orange-100 transition">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </div>
            {/* Checkout button par click logic lagaya */}
            <button 
              onClick={onCheckout}
              className="bg-orange-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-700 transition cursor-pointer"
            >
              Checkout
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <div onClick={onCheckout} className="relative p-2 bg-orange-50 rounded-full cursor-pointer">
              <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 space-y-3">
          <a href="#home" className="block text-gray-700 hover:text-orange-600">Home</a>
          <a href="#dishes" className="block text-gray-700 hover:text-orange-600">Popular Dishes</a>
          <button onClick={onCheckout} className="w-full bg-orange-600 text-white py-2 rounded-full font-semibold">Checkout</button>
        </div>
      )}
    </nav>
  );
}
