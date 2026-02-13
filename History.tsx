import { useState } from 'react';
import { 
  ChevronLeft, Bell, Search, Wallet, Phone, MessageCircle, 
  Grid3X3, Video, Users, Gift, Receipt, DollarSign 
} from 'lucide-react';
import type { Page } from '../App';

interface HistoryProps {
  onNavigate: (page: Page) => void;
}

const tabs = [
  { id: 'wallet', label: 'Wallet', icon: Wallet },
  { id: 'call', label: 'Call History', icon: Phone },
  { id: 'chat', label: 'Chat History', icon: MessageCircle },
  { id: 'kundli', label: 'Kundli AI', icon: Grid3X3 },
  { id: 'video', label: 'Video History', icon: Video },
  { id: 'live', label: 'Live History', icon: Users },
  { id: 'gift', label: 'Gift', icon: Gift },
  { id: 'deduction', label: 'Wallet Deduction', icon: Receipt },
];

export function History({ onNavigate }: HistoryProps) {
  const [activeTab, setActiveTab] = useState('wallet');

  const renderContent = () => {
    switch (activeTab) {
      case 'wallet':
        return (
          <div className="p-4">
            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <p className="text-gray-400 text-sm mb-2">Available Balance</p>
              <p className="text-white text-4xl font-bold">₹ 0.00</p>
              <button 
                onClick={() => onNavigate('wallet')}
                className="w-full mt-6 py-3 bg-[#f5b800] text-black font-semibold rounded-full"
              >
                Recharge
              </button>
            </div>
            <div className="flex flex-col items-center justify-center mt-20">
              <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4">
                <Receipt className="w-8 h-8 text-gray-500" />
              </div>
              <p className="text-gray-400">No transactions yet</p>
            </div>
          </div>
        );
      case 'call':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
            <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4">
              <Phone className="w-8 h-8 text-gray-500" />
            </div>
            <p className="text-gray-400 text-lg">No Data Found</p>
            <p className="text-gray-500 text-sm mt-2">Your Call History will appear here</p>
          </div>
        );
      case 'chat':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
            <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-gray-500" />
            </div>
            <p className="text-gray-400 text-lg">No Data Found</p>
            <p className="text-gray-500 text-sm mt-2">Your Chat History will appear here</p>
          </div>
        );
      case 'kundli':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
            <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4">
              <Grid3X3 className="w-8 h-8 text-gray-500" />
            </div>
            <p className="text-gray-400 text-lg">No Data Found</p>
            <p className="text-gray-500 text-sm mt-2">Your Kundli AI will appear here</p>
          </div>
        );
      case 'video':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
            <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4">
              <Video className="w-8 h-8 text-gray-500" />
            </div>
            <p className="text-gray-400 text-lg">No Data Found</p>
            <p className="text-gray-500 text-sm mt-2">Your Video History will appear here</p>
          </div>
        );
      case 'live':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
            <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-gray-500" />
            </div>
            <p className="text-gray-400 text-lg">No Data Found</p>
            <p className="text-gray-500 text-sm mt-2">Your Live History will appear here</p>
          </div>
        );
      case 'gift':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
            <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4">
              <Gift className="w-8 h-8 text-gray-500" />
            </div>
            <p className="text-gray-400 text-lg">No Data Found</p>
            <p className="text-gray-500 text-sm mt-2">Your Gift will appear here</p>
          </div>
        );
      case 'deduction':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
            <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4">
              <DollarSign className="w-8 h-8 text-gray-500" />
            </div>
            <p className="text-gray-400 text-lg">No Data Found</p>
            <p className="text-gray-500 text-sm mt-2">Your Wallet Deduction will appear here</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-sm px-4 py-3 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('home')} className="p-2">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <span className="text-white font-semibold text-lg">History</span>
          </div>
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
            </button>
            <button onClick={() => onNavigate('search')} className="p-2">
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-3 whitespace-nowrap transition-colors ${
              activeTab === tab.id ? 'text-[#f5b800] border-b-2 border-[#f5b800]' : 'text-gray-400'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span className="text-sm">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
}
