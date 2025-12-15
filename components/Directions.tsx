import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const Directions: React.FC = () => {
  return (
    <div className="bg-white w-full py-24 border-t border-gray-100">
      <section id="directions" className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#006064] mb-4">Location</h2>
          <p className="text-gray-500 text-lg">오시는 길</p>
        </div>

        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-50 group">
           {/* Using Google Maps Embed fallback for the location visual */}
           <iframe 
             src="https://maps.google.com/maps?q=37.5348877,126.8966477&z=15&output=embed"
             className="w-full h-full border-0"
             allowFullScreen
             loading="lazy"
             title="Location Map"
           />
           
           {/* Overlay Button */}
           <div className="absolute bottom-6 right-6 z-10">
              <a 
                href="https://naver.me/5gYGnTe9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/90 backdrop-blur text-[#00838f] px-6 py-3 rounded-full font-bold shadow-lg hover:bg-[#00838f] hover:text-white transition-all border border-[#00838f]/20"
              >
                <MapPin size={18} />
                <span>네이버 지도에서 보기</span>
                <ExternalLink size={14} />
              </a>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Directions;