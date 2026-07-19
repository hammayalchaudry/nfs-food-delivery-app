import React from 'react';

export default function About() {
  const features = [
    {
      id: 1,
      title: "Fast Delivery",
      description: "Hot and fresh food delivered to your doorstep within 30 minutes.",
      icon: "⚡"
    },
    {
      id: 2,
      title: "Fresh Quality",
      description: "We use only organic and 100% fresh ingredients for every meal.",
      icon: "🥗"
    },
    {
      id: 3,
      title: "24/7 Support",
      description: "Our dedicated team is ready to serve you at any hour of the day.",
      icon: "📞"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-2">
          Why Choose <span className="text-orange-600">CravingBites</span>?
        </h2>
        <p className="text-gray-500 max-w-md mx-auto mb-12">
          We provide the best food delivery experience with premium quality.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat) => (
            <div key={feat.id} className="p-8 bg-orange-50/50 rounded-3xl border border-orange-100 hover:scale-105 transition duration-300 text-center">
              <div className="text-4xl mb-4 bg-white w-16 h-16 flex items-center justify-center rounded-2xl mx-auto shadow-sm">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">{feat.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}