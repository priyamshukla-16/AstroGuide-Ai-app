import { 
  Upload, Sliders, Bell, Globe, ArrowUp, Ban, MessageSquare, 
  Star, Info, Users, Scroll, Download, Share2, User, CreditCard, X
} from 'lucide-react';
import type { Page, UserData } from '../App';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  userData: UserData;
  onNavigate: (page: Page) => void;
}

const menuItems = [
  { icon: Upload, label: 'Upload Your Charts' },
  { icon: Sliders, label: 'Set Preferences' },
  { icon: Bell, label: 'Notification Setting' },
  { icon: Globe, label: 'Change Language' },
  { icon: ArrowUp, label: 'Upgrade Plan' },
  { icon: Ban, label: 'Remove Ads' },
  { icon: MessageSquare, label: 'Feedback' },
  { icon: Star, label: 'Rate AstroGuide AI' },
  { icon: Info, label: 'About Us' },
  { icon: Users, label: 'Astrologer Registration' },
  { icon: Scroll, label: 'Choose Your Kundli' },
  { icon: Download, label: 'Downloads' },
  { icon: Share2, label: 'Refer & Earn' },
  { icon: User, label: 'My Account' },
  { icon: CreditCard, label: 'Manage Subscription' },
];

export function SideMenu({ isOpen, onClose, userData, onNavigate }: SideMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 z-50"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className="fixed top-0 left-0 bottom-0 w-[80%] max-w-[320px] bg-black z-50 overflow-y-auto">
        {/* Profile Section */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-gray-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-lg">{userData.phone || '917770038609'}</p>
              <p className="text-gray-400 text-sm">{userData.name || 'Basic'}</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                onClose();
                if (item.label === 'Upload Your Charts') onNavigate('kundli');
              }}
              className="w-full flex items-center gap-4 px-6 py-4 text-white hover:bg-[#1a1a1a] transition-colors"
            >
              <item.icon className="w-5 h-5 text-gray-400" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-50 w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center"
      >
        <X className="w-5 h-5 text-white" />
      </button>
    </>
  );
}
