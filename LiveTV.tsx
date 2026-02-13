import { useState } from 'react';
import { ChevronLeft, Video, Share2, Clock } from 'lucide-react';
import type { Page } from '../App';

interface LiveTVProps {
  onNavigate: (page: Page) => void;
}

const ongoingLive = [
  { name: 'Dr Paresh', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
  { name: 'Deepti I', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face' },
  { name: 'Expert Hima...', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
  { name: 'Abhimanyu Y', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
  { name: 'Rashmi Ji', image: 'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?w=100&h=100&fit=crop&crop=face' },
  { name: 'Ramesh Ku...', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face' },
  { name: 'Abhishek Y', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face' },
  { name: 'Jagdeep', image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=100&h=100&fit=crop&crop=face' },
  { name: 'Kirti', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face' },
  { name: 'Kewala Nand', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
  { name: 'Sunil D', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
  { name: 'Rati Sh', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face' },
];

const upcomingLive = [
  { name: 'Acharya Vishvesh B', title: '7 मिनट में नि:शुल्क ज्योतिष परामर्श', date: '12 Feb, Thursday', time: '06:45 PM', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
  { name: 'Acharya Vashisht S', title: 'कोई भी समस्या हो समाधान पाएं', date: '12 Feb, Thursday', time: '06:59 PM', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
  { name: 'Acharya Vishvesh B', title: '7 मिनट में नि:शुल्क ज्योतिष परामर्श', date: '12 Feb, Thursday', time: '07:00 PM', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
  { name: 'Tarot Sana Na', title: 'CHIT CHAT / LIVE CALL', date: '12 Feb, Thursday', time: '07:00 PM', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face' },
  { name: 'Acharya Muktinarayan', title: 'कुंडली के 12 भाव, 12 राशियां, 9 ग्रह', date: '12 Feb, Thursday', time: '07:15 PM', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
];

export function LiveTV({ onNavigate }: LiveTVProps) {
  const [activeTab, setActiveTab] = useState<'ongoing' | 'upcoming'>('ongoing');

  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-sm px-4 py-3 border-b border-gray-800">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('home')} className="p-2">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <span className="text-white font-semibold text-lg">AstroGuide AI Live TV</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-800">
        <button
          onClick={() => setActiveTab('ongoing')}
          className={`flex-1 py-3 text-center font-medium transition-colors ${
            activeTab === 'ongoing' ? 'text-[#f5b800] border-b-2 border-[#f5b800]' : 'text-gray-400'
          }`}
        >
          ONGOING
        </button>
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`flex-1 py-3 text-center font-medium transition-colors ${
            activeTab === 'upcoming' ? 'text-[#f5b800] border-b-2 border-[#f5b800]' : 'text-gray-400'
          }`}
        >
          UPCOMING
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'ongoing' ? (
          <div className="grid grid-cols-3 gap-4">
            {ongoingLive.map((item) => (
              <div key={item.name} className="flex flex-col items-center">
                <div className="relative w-20 h-20">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#f5b800]">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#f5b800] rounded text-[10px] text-black font-bold">
                    LIVE
                  </div>
                </div>
                <p className="text-white text-xs mt-2 text-center">{item.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {upcomingLive.map((item) => (
              <div key={item.name} className="flex items-center gap-4 bg-[#1a1a1a] rounded-xl p-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black"></div>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">{item.name}</p>
                  <p className="text-gray-400 text-sm">{item.title}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.date} | {item.time}</p>
                </div>
                <button className="p-2">
                  <Share2 className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-gray-800 px-4 py-2" style={{ maxWidth: '430px', margin: '0 auto' }}>
        <div className="flex justify-around">
          {[
            { icon: Clock, label: 'Home' },
            { icon: Video, label: 'AI Astro' },
            { icon: Video, label: 'Live' },
            { icon: Share2, label: 'Ask' },
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
