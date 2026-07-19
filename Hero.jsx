import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 leading-tight">
            Super Fast <br />
            <span className="text-orange-600">Food Delivery</span> <br />
            To Your Doorstep!
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Order from your favorite local restaurants and get fresh, hot food delivered in under 30 minutes.
          </p>
          <div className="mt-8 flex space-x-4">
            {/* Get Started button ko hum dynamic bana rahe hain taake yeh direct Dishes section par le jaye */}
            <a href="#dishes" className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-700 transition text-center">
              Get Started
            </a>
            {/* View Menu ko bhi dishes list se connect kar diya */}
            <a href="#dishes" className="inline-block bg-white border border-gray-300 text-zinc-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition text-center">
              View Menu
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80" 
            alt="Delicious Pizza" 
            className="rounded-3xl shadow-2xl w-full max-w-md object-cover h-96"
          />
        </div>
      </div>
    </section>
  );
}