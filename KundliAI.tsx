import { useState } from 'react';
import { 
  Menu, Search, Home, User, Calendar, MapPin, Clock, Check, Settings, Plus, Star, MessageCircle
} from 'lucide-react';
import type { Page } from '../App';

interface KundliAIProps {
  onNavigate: (page: Page) => void;
  onOpenMenu: () => void;
}

export function KundliAI({ onNavigate, onOpenMenu }: KundliAIProps) {
  const [activeTab, setActiveTab] = useState<'open' | 'new'>('new');
  const [name, setName] = useState('');
  const [date, setDate] = useState('08-FEB-2026');
  const [time, setTime] = useState('10:39 PM');
  const [place] = useState('Agra');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [save, setSave] = useState(true);

  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-sm px-4 py-3">
        <div className="flex items-center justify-between">
          <button onClick={onOpenMenu} className="p-2">
            <Menu className="w-6 h-6 text-white" />
          </button>
          <span className="text-white font-semibold">Kundli</span>
          <button onClick={() => onNavigate('home')} className="p-2">
            <Home className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-800">
        <button
          onClick={() => setActiveTab('open')}
          className={`flex-1 py-3 text-center font-medium transition-colors ${
            activeTab === 'open' ? 'text-[#f5b800] border-b-2 border-[#f5b800]' : 'text-gray-400'
          }`}
        >
          OPEN KUNDLI
        </button>
        <button
          onClick={() => setActiveTab('new')}
          className={`flex-1 py-3 text-center font-medium transition-colors ${
            activeTab === 'new' ? 'text-[#f5b800] border-b-2 border-[#f5b800]' : 'text-gray-400'
          }`}
        >
          NEW KUNDLI
        </button>
      </div>

      {/* Content */}
      {activeTab === 'new' ? (
        <div className="p-6 space-y-4">
          {/* Name Input */}
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              className="w-full pl-12 pr-4 py-3 bg-transparent border-b border-gray-700 text-white placeholder-gray-500 focus:border-[#f5b800] focus:outline-none"
            />
          </div>

          {/* Date and Time */}
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] rounded-lg text-white border border-gray-700 focus:border-[#f5b800] focus:outline-none"
              />
            </div>
            <div className="flex-1 relative">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] rounded-lg text-white border border-gray-700 focus:border-[#f5b800] focus:outline-none"
              />
            </div>
          </div>

          {/* Place */}
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <div className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] rounded-lg border border-gray-700">
              <p className="text-white">{place}</p>
              <p className="text-gray-500 text-sm">( 027N09, 078E00 +5.5 )</p>
            </div>
          </div>

          {/* Gender */}
          <div className="flex gap-4">
            <button
              onClick={() => setGender('male')}
              className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                gender === 'male' ? 'bg-[#f5b800] text-black' : 'bg-[#1a1a1a] text-white border border-gray-700'
              }`}
            >
              Male
            </button>
            <button
              onClick={() => setGender('female')}
              className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                gender === 'female' ? 'bg-[#f5b800] text-black' : 'bg-[#1a1a1a] text-white border border-gray-700'
              }`}
            >
              Female
            </button>
          </div>

          {/* Save and Settings */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-3 cursor-pointer">
              <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                save ? 'bg-[#f5b800] border-[#f5b800]' : 'border-gray-600'
              }`}>
                {save && <Check className="w-4 h-4 text-black" />}
              </div>
              <input
                type="checkbox"
                checked={save}
                onChange={(e) => setSave(e.target.checked)}
                className="hidden"
              />
              <span className="text-white">Save</span>
            </label>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-white">
              <Settings className="w-4 h-4" />
              Settings
            </button>
            <button className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center text-white">
              <Plus className="w-5 h-5" />
            </button>
          </div>

          {/* Type or Paste Birth Details */}
          <button className="w-full py-3 border border-gray-700 rounded-lg text-white flex items-center justify-center gap-2">
            Type or Paste Birth Details
            <Plus className="w-4 h-4" />
          </button>

          {/* Get Horoscope Button */}
          <button className="w-full py-4 bg-[#f5b800] text-black font-semibold rounded-lg btn-hover">
            GET HOROSCOPE
          </button>
        </div>
      ) : (
        <div className="p-6">
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search kundli by name"
              className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] rounded-lg text-white placeholder-gray-500 border border-transparent input-focus"
            />
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-4">
            <button className="flex-1 py-2 bg-[#f5b800] text-black font-medium rounded-lg">
              All Local Kundlis
            </button>
            <button className="flex-1 py-2 bg-[#1a1a1a] text-white border border-gray-700 rounded-lg">
              Cloud Kundlis
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-gray-800 px-4 py-2" style={{ maxWidth: '430px', margin: '0 auto' }}>
        <div className="flex justify-around">
          {[
            { icon: Home, label: 'Home' },
            { icon: Star, label: 'AI Astro' },
            { icon: Clock, label: 'Live' },
            { icon: MessageCircle, label: 'Ask' },
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


