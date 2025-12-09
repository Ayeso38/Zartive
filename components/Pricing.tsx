import React from 'react';
import { Check, Info } from 'lucide-react';
import { PricingPackage } from '../types';

const PACKAGES: PricingPackage[] = [
  {
    id: 'essential',
    name: 'The Essential',
    price: 500,
    description: 'Perfect for quick portraits, LinkedIn headshots, or couples sessions.',
    features: ['1 Hour Session', '25 High-Res Edits', 'Online Gallery', 'Print Rights', '1 Location'],
  },
  {
    id: 'storyteller',
    name: 'The Storyteller',
    price: 1200,
    description: 'Ideal for engagements, small events, or extensive branding shoots.',
    features: ['4 Hour Session', '100+ High-Res Edits', 'Online Gallery', 'Print Rights', '2 Locations', 'Hardcover Photobook'],
    recommended: true,
  },
  {
    id: 'legacy',
    name: 'The Legacy',
    price: 2500,
    description: 'Full day coverage for weddings or major commercial projects.',
    features: ['10 Hour Coverage', '400+ High-Res Edits', 'Private Cloud Storage', 'Print Rights', 'Unlimited Locations', 'Second Shooter Included', 'Premium Leather Album'],
  },
];

interface PricingProps {
    onSelectPackage: (pkgId: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectPackage }) => {
  return (
    <div className="bg-white py-20 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ph-dark mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">No hidden fees. No "contact for quote" (unless it's huge). What you see is what you get.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative flex flex-col p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 ${
                pkg.recommended 
                  ? 'border-ph-orange bg-orange-50/30 shadow-xl shadow-orange-500/10' 
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-ph-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-ph-dark mb-2">{pkg.name}</h3>
                <p className="text-gray-500 text-sm h-10">{pkg.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-ph-dark">RM{pkg.price}</span>
                <span className="text-gray-500 ml-2">/ session</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => onSelectPackage(pkg.id)}
                className={`w-full py-3 px-6 rounded-lg font-bold text-sm transition-colors ${
                  pkg.recommended
                    ? 'bg-ph-orange text-white hover:bg-red-600'
                    : 'bg-ph-dark text-white hover:bg-gray-800'
                }`}
              >
                Choose {pkg.name}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-ph-bg rounded-xl border border-gray-200 flex items-start gap-4">
            <Info className="text-ph-blue flex-shrink-0 mt-1" />
            <div>
                <h4 className="font-bold text-ph-dark">Need something custom?</h4>
                <p className="text-sm text-gray-600 mt-1">
                    I do offer custom packages for multi-day events or commercial projects. 
                    <button className="text-ph-blue font-semibold hover:underline ml-1">Contact me directly</button> for a quote.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
