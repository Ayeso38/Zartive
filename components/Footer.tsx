import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ph-bg border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-xl font-bold text-ph-dark block mb-4">Zartive</span>
            <p className="text-gray-500 text-sm">
              Documenting life, love, and the chaotic beauty in between.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-ph-dark mb-4">Sitemap</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-ph-orange">Home</a></li>
              <li><a href="#" className="hover:text-ph-orange">Portfolio</a></li>
              <li><a href="#" className="hover:text-ph-orange">Pricing</a></li>
              <li><a href="#" className="hover:text-ph-orange">Booking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-ph-dark mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-ph-orange">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-ph-orange">Terms of Service</a></li>
              <li><a href="#" className="hover:text-ph-orange">Image Licensing</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-ph-dark mb-4">Connect</h4>
             <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-ph-dark hover:text-ph-orange transition-all">
                    <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-ph-dark hover:text-ph-orange transition-all">
                    <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-ph-dark hover:text-ph-orange transition-all">
                    <Linkedin size={20} />
                </a>
             </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Zartive Photography. All rights reserved.</p>
            <p>Designed with a vibe coding.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
