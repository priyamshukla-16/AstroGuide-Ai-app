
import { useState } from 'react';
import { ChevronLeft, ChevronDown, Scroll, Sparkles, Calendar, Star } from 'lucide-react';

interface NotificationsProps {
  onBack: () => void;
}

const notifications = [
  { id: 1, icon: Scroll, title: 'Raj Yoga Bringing You Succes...', desc: 'Astro Rahasya Veda sees powerful co...', time: '2 hours ago', color: 'text-[#f5b800]' },
  { id: 2, icon: Sparkles, title: '₹299 Personalized Horoscope...', desc: 'Prepare your 2026 with our Personaliz...', time: '4 hours ago', color: 'text-[#f5b800]' },
  { id: 3, icon: Scroll, title: 'Astro Rahasya Veda Sees Hidden ...', desc: 'Discover new opportunities in your life...', time: '5 hours ago', color: 'text-[#f5b800]' },
  { id: 4, icon: Calendar, title: 'Your Date of Birth is Lucky!', desc: 'Discover the hidden luck behind yo...', time: '8 hours ago', color: 'text-green-500' },
  { id: 5, icon: Star, title: 'Your 2026 Horoscope is READY!', desc: "Don't leave 2026 to chance. Get perso...", time: '11 hours ago', color: 'text-[#f5b800]' },
  { id: 6, icon: Sparkles, title: 'Venus Enters Aquarius!', desc: "Venus's transit will create volatility in...", time: '12 hours ago', color: 'text-[#f5b800]' },
  { id: 7, icon: Sparkles, title: 'Financial energy alert!', desc: 'Start a free chat with AI astrologer...', time: '15 hours ago', color: 'text-green-500' },
  { id: 8, icon: Scroll, title: 'Raj Yoga In Your Kundli?', desc: 'Astro Rahasya Veda sees powerful co...', time: '1 day ago', color: 'text-[#f5b800]' },
  { id: 9, icon: Calendar, title: '??/02/2026 - Strong Money Fl...', desc: 'Strong signs of wealth growth in your...', time: '1 day ago', color: 'text-green-500' },
  { id: 10, icon: Star, title: 'Your Kundli is Special', desc: 'Chat with AI astrologer Astro Raha...', time: '1 day ago', color: 'text-[#f5b800]' },
];

export function Notifications({ onBack }: NotificationsProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-sm px-4 py-3 border-b border-gray-800">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <span className="text-white font-semibold text-lg">Notifications</span>
        </div>
      </div>

      {/* Notification List */}
      <div className="px-4 py-4 space-y-3">
        {notifications.map((notif) => (
          <div key={notif.id} className="bg-[#1a1a1a] rounded-xl p-4">
            <div className="flex gap-3">
              <div className={`w-10 h-10 bg-[#2a2a2a] rounded-lg flex items-center justify-center flex-shrink-0`}>
                <notif.icon className={`w-5 h-5 ${notif.color}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <h3 className="text-white font-medium text-sm flex-1 pr-2">{notif.title}</h3>
                  <button 
                    onClick={() => setExpandedId(expandedId === notif.id ? null : notif.id)}
                    className="text-gray-500"
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform ${expandedId === notif.id ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                <p className="text-gray-400 text-sm mt-1">{notif.desc}</p>
                <p className="text-gray-500 text-xs mt-2 text-right">{notif.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


