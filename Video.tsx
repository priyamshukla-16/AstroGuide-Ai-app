import { 
  Menu, Search, Bell, Video as VideoIcon, Play, Star, MessageCircle, Clock
} from 'lucide-react';
import type { Page } from '../App';

interface VideoProps {
  onNavigate: (page: Page) => void;
  onOpenMenu: () => void;
}

const videos = [
  { 
    title: 'मकर संक्रांति 2026 | सूर्य का मकर राशि में गोचर 2026 | ज्योतिषीय महत्व', 
    thumbnail: 'https://images.unsplash.com/photo-1606293459339-fed7f6d4c6c0?w=400&h=300&fit=crop',
    author: 'AstroGuide AI'
  },
  { 
    title: 'फाल्गुन मास 2026: ये महीना आपकी लाइफ क्यों बदल सकता है? #holi2026 #mahashivratri', 
    thumbnail: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=300&fit=crop',
    author: 'AstroGuide AI'
  },
  { 
    title: 'चंद्रमा को अर्घ्य नहीं दिया तो क्या होगा? माघ पूर्णिमा 2026 Special #maghpurnima', 
    thumbnail: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=400&h=300&fit=crop',
    author: 'AstroGuide AI'
  },
  { 
    title: 'मकर संक्रांति खुशियों का मकर राशि में गोचर जानिए महत्व', 
    thumbnail: 'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?w=400&h=300&fit=crop',
    author: 'AstroGuide AI'
  },
];

export function Video({ onNavigate, onOpenMenu }: VideoProps) {
  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-sm px-4 py-3">
        <div className="flex items-center justify-between">
          <button onClick={onOpenMenu} className="p-2">
            <Menu className="w-6 h-6 text-white" />
          </button>
          <span className="text-white font-semibold">Video</span>
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
              else if (tab === 'Consult') onNavigate('consult');
              else if (tab === 'Reports') onNavigate('reports');
              else if (tab === 'Panchang') onNavigate('panchang');
              else if (tab === 'Horoscope') onNavigate('horoscope');
            }}
            className={`whitespace-nowrap pb-2 text-sm font-medium transition-colors ${
              tab === 'Video' ? 'text-[#f5b800] border-b-2 border-[#f5b800]' : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Banner */}
      <div className="mx-4 mt-4 p-4 bg-gradient-to-r from-[#f5b800]/20 to-purple-900/30 rounded-xl">
        <div className="flex items-center gap-4">
          <div className="w-16 h-20 bg-[#f5b800] rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-xs text-center">2026<br/>New<br/>Year</span>
          </div>
          <div>
            <p className="text-white font-semibold">Personalized Horoscope 2026</p>
            <p className="text-gray-400 text-sm">Accurate Predictions for New Year</p>
          </div>
          <button className="ml-auto px-4 py-2 bg-[#f5b800] text-black text-sm font-semibold rounded-full">
            Order Now
          </button>
        </div>
      </div>

      {/* Video List */}
      <div className="px-4 mt-4 space-y-4">
        {videos.map((video, idx) => (
          <div key={idx} className="relative rounded-xl overflow-hidden">
            <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
              <p className="text-white text-sm font-medium line-clamp-2">{video.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-gray-800 px-4 py-2" style={{ maxWidth: '430px', margin: '0 auto' }}>
        <div className="flex justify-around">
          {[
            { icon: Menu, label: 'Home' },
            { icon: Star, label: 'AI Astro' },
            { icon: VideoIcon, label: 'Live' },
            { icon: MessageCircle, label: 'Ask' },
            { icon: Clock, label: 'History' },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => item.label === 'Home' && onNavigate('home')}
              className={`flex flex-col items-center gap-1 p-2 ${item.label === 'Live' ? 'text-[#f5b800]' : 'text-gray-400'}`}
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


