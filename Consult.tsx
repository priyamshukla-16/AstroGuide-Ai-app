import { useState } from 'react';
import { 
  Menu, Search, Bell, Heart, Briefcase, Users, HeartPulse,
  DollarSign, Building2, GraduationCap, Baby, Scale, Phone, MessageCircle, Star, Check, Clock, Video
} from 'lucide-react';
import type { Page } from '../App';

interface ConsultProps {
  onNavigate: (page: Page) => void;
  onOpenMenu: () => void;
}

const categories = [
  { id: 'all', label: 'All', icon: null },
  { id: 'love', label: 'Love', icon: Heart },
  { id: 'career', label: 'Career', icon: Briefcase },
  { id: 'marriage', label: 'Marriage', icon: Users },
  { id: 'health', label: 'Health', icon: HeartPulse },
  { id: 'finance', label: 'Finance', icon: DollarSign },
  { id: 'business', label: 'Business', icon: Building2 },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'pregnancy', label: 'Pregnancy', icon: Baby },
  { id: 'legal', label: 'Legal', icon: Scale },
];

const astrologers = [
  { name: 'Mr. Krishnam...', rating: 4.5, reviews: 335249, specialty: 'Vedic astrology', languages: 'English, Hindi', price: 'FREE', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', verified: false },
  { name: 'Gayatri Prasa...', rating: 4.6, reviews: 15, specialty: 'Vedic astrology', languages: 'English, Hindi, Telugu', price: '₹30/min', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face', verified: true },
  { name: 'Reader Ishika G', rating: 5.0, reviews: 6, specialty: 'Tarot', languages: 'Hindi, English', price: '₹30/min', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', verified: true },
  { name: 'Reena Bhaskar', rating: 4.9, reviews: 45, specialty: 'Tarot', languages: 'English, Hindi', price: '₹25/min', image: 'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?w=100&h=100&fit=crop&crop=face', verified: true },
  { name: 'Vinod Kumar', rating: 4.5, reviews: 5, specialty: 'Vedic astrology', languages: 'Hindi, English', price: '₹31/min', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face', verified: true },
  { name: 'Kumkum Sa', rating: 4.6, reviews: 10, specialty: 'Tarot', languages: 'English, Hindi, Odia', price: '₹30/min', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face', verified: true },
  { name: 'Archana K', rating: 4.7, reviews: 24, specialty: 'Vedic astrology', languages: 'Hindi, English, Bhojpuri', price: '₹20/min', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face', verified: true },
];

export function Consult({ onNavigate, onOpenMenu }: ConsultProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-sm px-4 py-3">
        <div className="flex items-center justify-between">
          <button onClick={onOpenMenu} className="p-2">
            <Menu className="w-6 h-6 text-white" />
          </button>
          <span className="text-white font-semibold">Consult</span>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate('wallet')}
              className="flex items-center gap-1 px-3 py-1 bg-[#1a1a1a] rounded-lg"
            >
              <span className="text-[#f5b800] text-sm">₹0</span>
            </button>
            <button 
              onClick={() => onNavigate('notifications')}
              className="relative p-2"
            >
              <Bell className="w-5 h-5 text-white" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center text-white">11</span>
            </button>
            <button onClick={() => onNavigate('search')} className="p-2">
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-4 py-2 flex gap-4 overflow-x-auto hide-scrollbar border-b border-gray-800">
        {['Home', '2026', 'Astro Shop', 'Consult', 'Reports', 'Video', 'Panchang', 'Horoscope'].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              if (tab === 'Home') onNavigate('home');
              else if (tab === '2026') onNavigate('2026');
              else if (tab === 'Astro Shop') onNavigate('astroshop');
              else if (tab === 'Reports') onNavigate('reports');
              else if (tab === 'Video') onNavigate('video');
              else if (tab === 'Panchang') onNavigate('panchang');
              else if (tab === 'Horoscope') onNavigate('horoscope');
            }}
            className={`whitespace-nowrap pb-2 text-sm font-medium transition-colors ${
              tab === 'Consult' ? 'text-[#f5b800] border-b-2 border-[#f5b800]' : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Category Tabs */}
      <div className="px-4 py-3 flex gap-2 overflow-x-auto hide-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-1 px-4 py-2 rounded-full whitespace-nowrap text-sm transition-colors ${
              activeCategory === cat.id
                ? 'bg-[#f5b800] text-black'
                : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#2a2a2a]'
            }`}
          >
            {cat.icon && <cat.icon className="w-4 h-4" />}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Astrologer List */}
      <div className="px-4 space-y-4">
        {astrologers.map((astro) => (
          <div key={astro.name} className="bg-[#1a1a1a] rounded-xl p-4">
            <div className="flex gap-4">
              {/* Avatar */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img src={astro.image} alt={astro.name} className="w-full h-full object-cover" />
                </div>
                {astro.verified && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-medium">{astro.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#f5b800] fill-[#f5b800]" />
                    <span className="text-white text-sm">{astro.rating}</span>
                    <span className="text-gray-500 text-xs">({astro.reviews})</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{astro.specialty}</p>
                <p className="text-gray-500 text-xs">{astro.languages}</p>
              </div>

              {/* Price */}
              <div className="text-right">
                <p className={`font-semibold ${astro.price === 'FREE' ? 'text-green-500' : 'text-white'}`}>
                  {astro.price}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-4">
              {astro.price !== 'FREE' && (
                <button className="flex-1 py-2 bg-[#f5b800] text-black font-medium rounded-full flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call
                </button>
              )}
              <button className={`flex-1 py-2 ${astro.price === 'FREE' ? 'bg-[#f5b800]' : 'bg-[#f5b800]'} text-black font-medium rounded-full flex items-center justify-center gap-2`}>
                <MessageCircle className="w-4 h-4" />
                Chat
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-gray-800 px-4 py-2" style={{ maxWidth: '430px', margin: '0 auto' }}>
        <div className="flex justify-around">
          {[
            { icon: Menu, label: 'Home', page: 'home' },
            { icon: Star, label: 'AI Astro', page: 'consult' },
            { icon: Video, label: 'Live', page: 'livetv' },
            { icon: MessageCircle, label: 'Ask', page: 'ask' },
            { icon: Clock, label: 'History', page: 'history' },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate(item.page as Page)}
              className={`flex flex-col items-center gap-1 p-2 ${item.label === 'AI Astro' ? 'text-[#f5b800]' : 'text-gray-400'}`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}


