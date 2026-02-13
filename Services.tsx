import { ChevronLeft, Lock, ChevronRight } from 'lucide-react';
import type { Page } from '../App';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const services = [
  { 
    name: 'AstroGuide Brihat Kundli', 
    description: 'What will you get in 250+ page...',
    discount: '53% off',
    image: 'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?w=100&h=100&fit=crop',
    locked: true
  },
  { 
    name: 'Ask a Question', 
    description: 'Is there any question or proble...',
    discount: '47% off',
    image: 'https://images.unsplash.com/photo-1606293459339-fed7f6d4c6c0?w=100&h=100&fit=crop',
    locked: true
  },
  { 
    name: 'Name Correction', 
    description: 'Your name plays a major role i...',
    discount: null,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=100&h=100&fit=crop',
    locked: true
  },
  { 
    name: 'Vastu', 
    description: 'If the structure of your house, ...',
    discount: null,
    image: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=100&h=100&fit=crop',
    locked: true
  },
  { 
    name: 'Detailed Report - 3 Questions', 
    description: 'Are you puzzled with some my...',
    discount: '40% off',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=100&h=100&fit=crop',
    locked: true
  },
  { 
    name: 'Marriage Report', 
    description: 'Love Marriage or Arranged Mar...',
    discount: '40% off',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=100&h=100&fit=crop',
    locked: true
  },
  { 
    name: 'Career / Job Report', 
    description: 'Worried about your career? do...',
    discount: '40% off',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&h=100&fit=crop',
    locked: true
  },
];

export function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-sm px-4 py-3 border-b border-gray-800">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('home')} className="p-2">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <span className="text-white font-semibold text-lg">Services</span>
        </div>
      </div>

      {/* Services List */}
      <div className="p-4 space-y-4">
        {services.map((service) => (
          <div key={service.name} className="bg-[#1a1a1a] rounded-xl p-4 flex items-center gap-4">
            {service.discount && (
              <div className="absolute -mt-16 -ml-2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] font-bold text-center">{service.discount}</span>
              </div>
            )}
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-white flex-shrink-0">
              <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">{service.name}</p>
              <p className="text-gray-400 text-sm">{service.description}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-2 py-0.5 bg-[#f5b800]/20 text-[#f5b800] text-xs rounded flex items-center gap-1">
                  <span className="w-3 h-3 bg-[#f5b800] rounded-full flex items-center justify-center text-[8px] text-black">D</span>
                  Dhruv Membership 10% Extra Discount
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {service.locked && <Lock className="w-5 h-5 text-gray-500" />}
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
