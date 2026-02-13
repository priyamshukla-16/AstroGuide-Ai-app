import { useState } from 'react';
import { 
  Search, Bell, User, Calendar, MapPin, Clock, Check, Plus, ChevronLeft, MoreVertical,
  Users, FolderOpen, FileText, ArrowUp, MessageSquare, Globe, Star, Info
} from 'lucide-react';
import type { Page } from '../App';

interface MatchingProps {
  onNavigate: (page: Page) => void;
  onOpenMenu: () => void;
}

export function Matching({ onNavigate }: MatchingProps) {
  const [activeTab, setActiveTab] = useState<'open' | 'new'>('new');
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-sm px-4 py-3">
        <div className="flex items-center justify-between">
          <button onClick={() => onNavigate('home')} className="p-2">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <span className="text-white font-semibold">Matching</span>
          <button onClick={() => setShowMenu(!showMenu)} className="p-2">
            <MoreVertical className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {showMenu && (
        <div className="absolute top-16 right-4 bg-[#1a1a1a] rounded-xl border border-gray-700 z-50 py-2">
          <button 
            onClick={() => { setActiveTab('new'); setShowMenu(false); }}
            className="w-full px-4 py-3 text-white text-left hover:bg-[#2a2a2a] flex items-center gap-3"
          >
            <Users className="w-5 h-5" />
            New Matching
          </button>
          <button 
            onClick={() => { setActiveTab('open'); setShowMenu(false); }}
            className="w-full px-4 py-3 text-white text-left hover:bg-[#2a2a2a] flex items-center gap-3"
          >
            <FolderOpen className="w-5 h-5" />
            Open Kundli
          </button>
          <button 
            onClick={() => { onNavigate('home'); setShowMenu(false); }}
            className="w-full px-4 py-3 text-white text-left hover:bg-[#2a2a2a] flex items-center gap-3"
          >
            <FileText className="w-5 h-5" />
            AstroGuide AI Articles
          </button>
          <button className="w-full px-4 py-3 text-white text-left hover:bg-[#2a2a2a] flex items-center gap-3">
            <ArrowUp className="w-5 h-5" />
            Upgrade Plan
          </button>
          <button className="w-full px-4 py-3 text-white text-left hover:bg-[#2a2a2a] flex items-center gap-3">
            <MessageSquare className="w-5 h-5" />
            Feedback
          </button>
          <button className="w-full px-4 py-3 text-white text-left hover:bg-[#2a2a2a] flex items-center gap-3">
            <Bell className="w-5 h-5" />
            Notification Settings
          </button>
          <button className="w-full px-4 py-3 text-white text-left hover:bg-[#2a2a2a] flex items-center gap-3">
            <Globe className="w-5 h-5" />
            Change Language
          </button>
          <button className="w-full px-4 py-3 text-white text-left hover:bg-[#2a2a2a] flex items-center gap-3">
            <Star className="w-5 h-5" />
            Rate AstroGuide AI
          </button>
          <button className="w-full px-4 py-3 text-white text-left hover:bg-[#2a2a2a] flex items-center gap-3">
            <Info className="w-5 h-5" />
            About Us
          </button>
          <button className="w-full px-4 py-3 text-white text-left hover:bg-[#2a2a2a] flex items-center gap-3">
            <Users className="w-5 h-5" />
            Astrologer Registration
          </button>
        </div>
      )}

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
          NEW MATCHING
        </button>
      </div>

      {/* Content */}
      {activeTab === 'new' ? (
        <div className="p-6 space-y-6">
          {/* Boy's Details */}
          <div>
            <h3 className="text-gray-500 text-sm mb-4">BOY'S DETAILS</h3>
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Boy's Name"
                  className="w-full pl-12 pr-4 py-3 bg-transparent border-b border-gray-700 text-white placeholder-gray-500 focus:border-[#f5b800] focus:outline-none"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    defaultValue="08-Feb-2026"
                    className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] rounded-lg text-white border border-gray-700 focus:border-[#f5b800] focus:outline-none"
                  />
                </div>
                <div className="flex-1 relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    defaultValue="10:39 PM"
                    className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] rounded-lg text-white border border-gray-700 focus:border-[#f5b800] focus:outline-none"
                  />
                </div>
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <div className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] rounded-lg border border-gray-700">
                  <p className="text-white">Agra</p>
                  <p className="text-gray-500 text-sm">( 027N09, 078E00 +5.5 )</p>
                </div>
              </div>
            </div>
          </div>

          {/* Girl's Details */}
          <div>
            <h3 className="text-gray-500 text-sm mb-4">GIRL'S DETAILS</h3>
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Girl's Name"
                  className="w-full pl-12 pr-4 py-3 bg-transparent border-b border-gray-700 text-white placeholder-gray-500 focus:border-[#f5b800] focus:outline-none"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    defaultValue="08-Feb-2026"
                    className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] rounded-lg text-white border border-gray-700 focus:border-[#f5b800] focus:outline-none"
                  />
                </div>
                <div className="flex-1 relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    defaultValue="10:39 PM"
                    className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] rounded-lg text-white border border-gray-700 focus:border-[#f5b800] focus:outline-none"
                  />
                </div>
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <div className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] rounded-lg border border-gray-700">
                  <p className="text-white">Agra</p>
                  <p className="text-gray-500 text-sm">( 027N09, 078E00 +5.5 )</p>
                </div>
              </div>
            </div>
          </div>

          {/* Save Checkbox */}
          <label className="flex items-center gap-3 cursor-pointer">
            <div className="w-5 h-5 bg-[#f5b800] rounded flex items-center justify-center">
              <Check className="w-4 h-4 text-black" />
            </div>
            <span className="text-white">Save</span>
          </label>

          {/* Type or Paste Birth Details */}
          <button className="w-full py-3 border border-gray-700 rounded-lg text-white flex items-center justify-center gap-2">
            Type or Paste Birth Details
            <Plus className="w-4 h-4" />
          </button>

          {/* Show Match Button */}
          <button className="w-full py-4 bg-[#f5b800] text-black font-semibold rounded-lg btn-hover">
            SHOW MATCH
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
    </div>
  );
}


