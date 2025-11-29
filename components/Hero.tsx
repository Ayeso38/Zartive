import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-3 py-1 mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Now accepting 2025 bookings
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-ph-dark tracking-tight mb-6 leading-[1.1]">
            Capture moments,<br />
            <span className="text-ph-orange">not just poses.</span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 mb-10">
            Professional photography for people who hate "say cheese". We focus on candid, documentary-style storytelling that feels authentic to you.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => onNavigate('portfolio')}
              className="w-full sm:w-auto px-8 py-4 bg-ph-orange text-white rounded-xl font-bold text-lg hover:bg-red-600 transition-colors shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
            >
              See the Work <ArrowRight size={20} />
            </button>
            <button
              onClick={() => onNavigate('booking')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-ph-dark border-2 border-gray-200 rounded-xl font-bold text-lg hover:border-ph-dark transition-colors flex items-center justify-center"
            >
              Check Availability
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-gray-500 text-sm font-medium flex-wrap">
             <div className="flex items-center gap-1">
                <Star className="text-ph-yellow fill-ph-yellow" size={16} />
                <Star className="text-ph-yellow fill-ph-yellow" size={16} />
                <Star className="text-ph-yellow fill-ph-yellow" size={16} />
                <Star className="text-ph-yellow fill-ph-yellow" size={16} />
                <Star className="text-ph-yellow fill-ph-yellow" size={16} />
                <span className="ml-2 text-gray-700">5.0 Rating</span>
             </div>
             <div>•</div>
             <div>500+ Shoots</div>
             <div>•</div>
             <div>Global Travel</div>
          </div>
        </div>
      </div>
      
      {/* Decorative Grid Background - PostHog style */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>
  );
};

export default Hero;
