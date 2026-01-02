
export default function Feature() {

 interface FeaturedDestination {
    id: number;
    title: string;
    description: string;
    image: string;
    price: string;
    badge: string;
}
const destinations: FeaturedDestination[] = [
  {
    id: 1,
    title: "Sajek Valley",
    description: "The 'Queen of Hills' in Rangamati. Experience the mesmerizing clouds and tribal culture.",
    image: "https://images.unsplash.com/photo-1624026676760-53603403ac94?auto=format&fit=crop&w=600&q=80",
    price: "4,500",
    badge: "Most Popular"
  },
  {
    id: 2,
    title: "Sundarbans",
    description: "The world's largest mangrove forest. Spot the Royal Bengal Tiger and explore the wild.",
    image: "https://images.unsplash.com/photo-1608958435020-e79397e10816?auto=format&fit=crop&w=600&q=80",
    price: "12,000",
    badge: "Adventure"
  },
  {
    id: 3,
    title: "Cox's Bazar",
    description: "Relax on the longest natural sea beach in the world with stunning sunset views.",
    image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&w=600&q=80",
    price: "3,500",
    badge: "Relaxing"
  }
];

  return (
  <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Destinations
          </h2>
          <p className="text-lg text-gray-600">
            Handpicked locations for your next escape
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div 
              key={dest.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {dest.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 italic-hover">
                  {dest.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                  {dest.description}
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 uppercase">From</span>
                    <span className="text-lg font-bold text-gray-900">${dest.price}</span>
                  </div>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-500 transition-colors duration-300">
                    Explore →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
