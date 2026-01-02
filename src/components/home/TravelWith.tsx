import { BadgeDollarSign, Headphones, Map, ShieldCheck } from "lucide-react";
import React from "react";
import { Link } from "react-router";


export default function TravelWith() {
    
    interface IFeatures {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    }


 const features: IFeatures[] = [
  {
    id: 1,
    title: "Local Expertise",
    description: "Our guides are born and raised in the regions you visit, from the hills of Sajek to the mangroves.",
    icon: <Map className="w-8 h-8 text-green-600" />,
  },
  {
    id: 2,
    title: "Safety Guaranteed",
    description: "Your safety is our priority. We partner with verified transport and eco-resorts across Bangladesh.",
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
  },
  {
    id: 3,
    title: "Transparent Pricing",
    description: "No hidden costs. We provide the best value for your money with flexible payment options.",
    icon: <BadgeDollarSign className="w-8 h-8 text-green-600" />,
  },
  {
    id: 4,
    title: "Support 24/7",
    description: "Our dedicated support team is always a phone call away to assist you during your expedition.",
    icon: <Headphones className="w-8 h-8 text-green-600" />,
  },
];


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-3">
              Core Values
            </h2>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Why Choose Us for Your <br /> 
              <span className="text-green-600">Next Adventure?</span>
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              We don't just book tours; we create memories. With over 10 years of experience 
              exploring the delta, we ensure every trip is authentic, safe, and unforgettable.
            </p>
          <Link to={`/about`}>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-200">
              Learn More About Us
            </button>
          </Link>
          </div>

          {/* Right Side: Features Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-green-100 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-4 p-3 bg-white w-fit rounded-2xl shadow-sm group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  {/* Icon clones itself to change color on hover if using Lucide */}
                {React.cloneElement(feature.icon as React.ReactElement<{ className?: string }>, { 
                 className: "w-8 h-8 group-hover:text-white transition-colors" 
                 })}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
