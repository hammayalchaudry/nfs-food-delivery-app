import React, { useState } from 'react';

// Yahan argument mein { addToCart } receive kiya hai
export default function Dishes({ addToCart }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const foodItems = [
    { id: 1, name: "Cheese Pepperoni Pizza", price: "$12.99", rating: "4.8", category: "Pizza", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80" },
    { id: 2, name: "Classic Beef Burger", price: "$8.49", rating: "4.7", category: "Burger", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80" },
    { id: 3, name: "Alfredo Pasta", price: "$10.99", rating: "4.6", category: "Pasta", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80" },
    { id: 4, name: "Crunchy Zinger Burger", price: "$6.99", rating: "4.9", category: "Burger", img: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=400&q=80" },
    { id: 5, name: "BBQ Chicken Wings", price: "$9.20", rating: "4.5", category: "Appetizer", img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&q=80" },
    { id: 6, name: "Molten Lava Cake", price: "$5.50", rating: "4.9", category: "Dessert", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80" },
    { id: 7, name: "Peri Peri Fries", price: "$3.99", rating: "4.4", category: "Sides", img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&q=80" },
    { id: 8, name: "Club Sandwich", price: "$7.49", rating: "4.5", category: "Sandwich", img: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=400&q=80" },
    { id: 9, name: "Margherita Pizza", price: "$11.00", rating: "4.6", category: "Pizza", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80" },
    { id: 10, name: "Grilled Chicken Steak", price: "$14.99", rating: "4.8", category: "Steak", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80" },
{ id: 11, name: "Crispy Chicken Nuggets", price: "$5.99", rating: "4.3", category: "Sides", img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80" },
    { id: 12, name: "Vanilla Ice Cream Shake", price: "$4.99", rating: "4.7", category: "Drinks", img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&q=80" },
    { id: 13, name: "Fajita Chicken Pizza", price: "$13.50", rating: "4.7", category: "Pizza", img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&q=80" },
    { id: 14, name: "Double Cheese Burger", price: "$9.99", rating: "4.9", category: "Burger", img: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?w=400&q=80" },
    { id: 15, name: "Spaghetti Bolognaise", price: "$11.49", rating: "4.5", category: "Pasta", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&q=80" },
    { id: 16, name: "Greek Salad", price: "$6.50", rating: "4.4", category: "Salad", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80" },
    { id: 17, name: "Red Velvet Cupcake", price: "$3.50", rating: "4.8", category: "Dessert", img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&q=80" },
    { id: 18, name: "Mint Margarita", price: "$3.00", rating: "4.6", category: "Drinks", img: "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=400&q=80" },
    { id: 19, name: "Special Chicken Biryani", price: "$7.99", rating: "4.9", category: "Rice", img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400&q=80" },
    { id: 20, name: "Chocolate Brownie", price: "$4.00", rating: "4.8", category: "Dessert", img: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&q=80" }
  ];

  const categories = ["All", "Pizza", "Burger", "Pasta", "Dessert", "Drinks", "Sides"];

  const filteredItems = foodItems.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="dishes" className="py-16 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-2">
          Our <span className="text-orange-600">Popular Dishes</span>
        </h2>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          Super delicious meals just one click away.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="🔍 Search your favorite food..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-3 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-600 bg-white text-zinc-950 text-sm"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
                  : "bg-white text-zinc-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between overflow-hidden">
                <div>
                  <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-5 text-left">
                    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full uppercase">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-zinc-900 mt-3 line-clamp-1">{item.name}</h3>
                    <div className="flex items-center mt-2 text-sm text-gray-600">
                      <span className="text-yellow-500 mr-1">⭐</span>
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 pt-0 flex items-center justify-between mt-4">
                  <span className="text-xl font-extrabold text-zinc-900">{item.price}</span>
                  <button 
                    onClick={addToCart} 
                    className="bg-orange-600 text-white px-4 py-2 rounded-full font-medium text-sm hover:bg-orange-700 transition cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-500 py-12">
            😢 Oops! No food found for "{searchQuery}"
          </div>
        )}
      </div>
    </section>
  );
}
