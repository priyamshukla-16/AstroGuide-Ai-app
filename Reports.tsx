import { 
  Menu, Search, Bell, FileText, Calendar, Globe, ArrowUp,
  Mars, Snail, Moon, BookOpen, Baby, Sparkles, Gem
} from 'lucide-react';
import type { Page } from '../App';

interface ReportsProps {
  onNavigate: (page: Page) => void;
  onOpenMenu: () => void;
}

const reportTypes = [
  { icon: FileText, label: 'Life Report' },
  { icon: Calendar, label: 'Monthly Report' },
  { icon: Calendar, label: 'Daily Report' },
  { icon: Globe, label: 'Sade Sati Report' },
  { icon: ArrowUp, label: 'Ascendant Prediction' },
  { icon: Calendar, label: 'Annual Prediction' },
  { icon: Mars, label: 'Mangal Dosh' },
  { icon: Snail, label: 'Kaal Sarp Dosh' },
  { icon: Moon, label: 'Moon Sign' },
  { icon: BookOpen, label: 'Lal Kitab Debt' },
  { icon: BookOpen, label: 'Lal Kitab Teva' },
  { icon: Baby, label: 'Baby Names' },
  { icon: Sparkles, label: 'Lal Kitab Remedies' },
  { icon: Globe, label: 'Planet Consideration' },
  { icon: Gem, label: 'Gemstones Report' },
];

export function Reports({ onNavigate, onOpenMenu }: ReportsProps) {
  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-sm px-4 py-3">
        <div className="flex items-center justify-between">
          <button onClick={onOpenMenu} className="p-2">
            <Menu className="w-6 h-6 text-white" />
          </button>
          <span className="text-white font-semibold">Reports</span>
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
              else if (tab === 'Video') onNavigate('video');
              else if (tab === 'Panchang') onNavigate('panchang');
              else if (tab === 'Horoscope') onNavigate('horoscope');
            }}
            className={`whitespace-nowrap pb-2 text-sm font-medium transition-colors ${
              tab === 'Reports' ? 'text-[#f5b800] border-b-2 border-[#f5b800]' : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="p-4">
        <div className="grid grid-cols-3 gap-4">
          {reportTypes.map((report) => (
            <button
              key={report.label}
              onClick={() => onNavigate('predictions')}
              className="flex flex-col items-center gap-3 p-4 bg-[#1a1a1a] rounded-xl hover:bg-[#2a2a2a] transition-colors"
            >
              <report.icon className="w-8 h-8 text-[#f5b800]" />
              <span className="text-xs text-gray-300 text-center">{report.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-gray-800 px-4 py-2" style={{ maxWidth: '430px', margin: '0 auto' }}>
        <div className="flex justify-around">
          {[
            { icon: FileText, label: 'Home' },
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
