import React from 'react';
import { Photo } from '../types';

const PHOTOS: Photo[] = [
  { id: 1, url: 'https://picsum.photos/800/600?random=1', category: 'Portrait', title: 'Urban Solitude' },
  { id: 2, url: 'https://picsum.photos/600/800?random=2', category: 'Wedding', title: 'First Dance' },
  { id: 3, url: 'https://picsum.photos/800/800?random=3', category: 'Lifestyle', title: 'Morning Coffee' },
  { id: 4, url: 'https://picsum.photos/600/600?random=4', category: 'Travel', title: 'Kyoto Streets' },
  { id: 5, url: 'https://picsum.photos/800/500?random=5', category: 'Portrait', title: 'Studio Session' },
  { id: 6, url: 'https://picsum.photos/500/800?random=6', category: 'Wedding', title: 'The Vows' },
];

const Gallery: React.FC = () => {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-ph-dark mb-4">Featured Work</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          A selection of recent stories told through my lens. Each image represents a moment that will never happen exactly the same way again.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {/* Bento Grid Layout - Manual placement for "PostHog" vibe */}
        
        {/* Large Item */}
        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl border-2 border-gray-100 bg-gray-200">
           <img 
            src={PHOTOS[0].url} 
            alt={PHOTOS[0].title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
           />
           <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-ph-yellow text-sm font-bold uppercase tracking-wider">{PHOTOS[0].category}</span>
              <h3 className="text-white text-2xl font-bold">{PHOTOS[0].title}</h3>
           </div>
        </div>

        {/* Tall Item */}
        <div className="md:row-span-2 relative group overflow-hidden rounded-2xl border-2 border-gray-100 bg-gray-200">
            <img 
            src={PHOTOS[1].url} 
            alt={PHOTOS[1].title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
           />
           <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-ph-yellow text-sm font-bold uppercase tracking-wider">{PHOTOS[1].category}</span>
              <h3 className="text-white text-2xl font-bold">{PHOTOS[1].title}</h3>
           </div>
        </div>

        {/* Standard Items */}
        {PHOTOS.slice(2).map((photo) => (
          <div key={photo.id} className="relative group overflow-hidden rounded-2xl border-2 border-gray-100 bg-gray-200">
            <img 
              src={photo.url} 
              alt={photo.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-ph-yellow text-xs font-bold uppercase tracking-wider">{photo.category}</span>
                <h3 className="text-white text-lg font-bold">{photo.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="text-ph-dark font-bold border-b-2 border-ph-orange hover:text-ph-orange transition-colors pb-1">
            View Full Archive →
        </button>
      </div>
    </div>
  );
};

export default Gallery;
