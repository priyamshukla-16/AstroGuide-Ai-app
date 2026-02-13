import { 
  Menu, Search, Bell, Scroll, Sparkles, ShoppingBag, Brain, Package, Droplets, Crown
} from 'lucide-react';
import type { Page } from '../App';

interface AstroShopProps {
  onNavigate: (page: Page) => void;
  onOpenMenu: () => void;
}

const shopCategories = [
  { name: 'Brihat Kundli', image: 'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?w=100&h=100&fit=crop' },
  { name: 'Rudraksha', image: 'https://images.unsplash.com/photo-1606293459339-fed7f6d4c6c0?w=100&h=100&fit=crop' },
  { name: 'Yantra', image: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=100&h=100&fit=crop' },
  { name: 'Gemstone', image: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=100&h=100&fit=crop' },
  { name: 'Mala', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=100&h=100&fit=crop' },
  { name: 'Jadi', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=100&h=100&fit=crop' },
  { name: 'Services', icon: ShoppingBag },
  { name: 'Kundli AI+', icon: Brain },
  { name: 'CogniAstro', icon: Sparkles },
  { name: 'Miscellaneous', icon: Package },
  { name: 'Aroma', icon: Droplets },
  { name: 'Bracelet', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=100&h=100&fit=crop' },
  { name: 'Premium', icon: Crown },
  { name: 'Pendant', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop' },
  { name: 'Tumble', image: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=100&h=100&fit=crop' },
];

export function AstroShop({ onNavigate, onOpenMenu }: AstroShopProps) {
  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-sm px-4 py-3">
        <div className="flex items-center justify-between">
          <button onClick={onOpenMenu} className="p-2">
            <Menu className="w-6 h-6 text-white" />
          </button>
          <span className="text-white font-semibold">Astro Shop</span>
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
              else if (tab === 'Consult') onNavigate('consult');
              else if (tab === 'Reports') onNavigate('reports');
              else if (tab === 'Video') onNavigate('video');
              else if (tab === 'Panchang') onNavigate('panchang');
              else if (tab === 'Horoscope') onNavigate('horoscope');
            }}
            className={`whitespace-nowrap pb-2 text-sm font-medium transition-colors ${
              tab === 'Astro Shop' ? 'text-[#f5b800] border-b-2 border-[#f5b800]' : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="p-4">
        <div className="grid grid-cols-3 gap-4">
          {shopCategories.map((category) => (
            <button
              key={category.name}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                {'image' in category ? (
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                ) : (
                  <category.icon className="w-8 h-8 text-[#f5b800]" />
                )}
              </div>
              <span className="text-xs text-gray-300 text-center">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-gray-800 px-4 py-2" style={{ maxWidth: '430px', margin: '0 auto' }}>
        <div className="flex justify-around">
          {[
            { icon: Scroll, label: 'Home' },
            { icon: Sparkles, label: 'AI Astro' },
            { icon: Search, label: 'Live' },
            { icon: Bell, label: 'Ask' },
            { icon: Menu, label: 'History' },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => item.label === 'Home' && onNavigate('home')}
              className={`flex flex-col items-center gap-1 p-2 ${item.label === 'Home' ? 'text-[#f5b800]' : 'text-gray-400'}`}
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
