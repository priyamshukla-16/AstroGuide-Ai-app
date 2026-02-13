import { useState } from 'react';
import { 
  Menu, Search, Bell, ChevronRight, Heart, Users, 
  Calendar, FileText, Phone, MessageCircle, Video,
  Sparkles, Gem, BookOpen, Scroll, Clock, PhoneCall, Globe
} from 'lucide-react';
import type { Page, UserData } from '../App';

interface HomePageProps {
  userData: UserData;
  onNavigate: (page: Page) => void;
  onOpenMenu: () => void;
}

const quickActions = [
  { icon: Scroll, label: 'Kundli AI', page: 'kundli' as Page },
  { icon: Heart, label: 'Matching', page: 'matching' as Page },
  { icon: Calendar, label: 'Horoscope', page: 'horoscope' as Page },
  { icon: FileText, label: 'Predictions', page: 'predictions' as Page },
];

const categories = [
  { icon: Heart, label: 'Love', color: 'text-red-500' },
  { icon: Users, label: 'Marriage', color: 'text-pink-500' },
  { icon: PhoneCall, label: 'Counsellor', color: 'text-blue-500' },
  { icon: Clock, label: 'Muhurat', color: 'text-[#f5b800]' },
];

const astrologers = [
  { name: 'Mr. Krishnam...', price: '₹16/min', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
  { name: 'Dr. Abhay', price: '₹18/min', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
  { name: 'Ritesh V', price: '₹51/min', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
  { name: 'Jai Bhagw...', price: '₹84/min', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face' },
  { name: 'Poonam M', price: '₹31/min', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face' },
  { name: 'Kajal Sh', price: '₹20/min', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
  { name: 'Vibha M', price: '₹15/min', image: 'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?w=100&h=100&fit=crop&crop=face' },
  { name: 'Dimple Bh', price: '₹15/min', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face' },
];

const liveAstrologers = [
  { name: 'Mystical Me...', topic: 'Kavita Meena', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
  { name: 'Priya Pa', topic: 'Tarot Reader', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face' },
  { name: 'Rishi T', topic: 'Vedic Expert', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face' },
  { name: 'Dr. Paresh', topic: 'Astrologer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
  { name: 'Deepti I', topic: 'Numerologist', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face' },
  { name: 'Expert Hima...', topic: 'Vastu Expert', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
];

const aiAstrologers = [
  { name: 'Mr. Krishn...', type: 'FREE', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
  { name: 'VastuGPT', type: 'FREE', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
  { name: 'Shri Yogdev', type: 'FREE', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
  { name: 'Baburao', type: 'FREE', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face' },
  { name: 'AstroGPT', type: 'FREE', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face' },
  { name: 'Jyotish AI', type: 'FREE', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
];

const reports = [
  { name: 'Brihat Kundli', icon: BookOpen },
  { name: 'Raj Yoga', icon: Sparkles },
  { name: 'Year Book', icon: Calendar },
  { name: 'Horoscope 2026', icon: Scroll },
  { name: 'Life Report', icon: FileText },
  { name: 'Monthly Report', icon: Calendar },
  { name: 'Daily Report', icon: Scroll },
  { name: 'Sade Sati Report', icon: Globe },
];

const products = [
  { name: 'Gemstone', image: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=100&h=100&fit=crop' },
  { name: 'Bracelet', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=100&h=100&fit=crop' },
  { name: 'Rudraksha', image: 'https://images.unsplash.com/photo-1606293459339-fed7f6d4c6c0?w=100&h=100&fit=crop' },
  { name: 'Premium', icon: Gem },
  { name: 'Yantra', image: 'https://images.unsplash.com/photo-1614730341194-75c607400070?w=100&h=100&fit=crop' },
  { name: 'Mala', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=100&h=100&fit=crop' },
  { name: 'Pendant', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop' },
  { name: 'Tumble', image: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=100&h=100&fit=crop' },
];

const videos = [
  { title: 'फाल्गुन मास 2026: ये महीना आपकी लाइफ क्यों बदल सकता है?', thumbnail: 'https://images.unsplash.com/photo-1606293459339-fed7f6d4c6c0?w=300&h=200&fit=crop' },
  { title: 'चंद्रमा को अर्घ्य नहीं दिया तो क्या होगा?', thumbnail: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=300&h=200&fit=crop' },
];

const others = [
  { name: 'Daily Panchang', icon: Calendar },
  { name: 'Talk to Astrologer', icon: Phone },
  { name: 'Brihat Kundli', icon: Scroll },
  { name: 'Daily Notes', icon: FileText },
  { name: 'Ask A Question', icon: MessageCircle },
  { name: 'Kundli AI+', icon: Sparkles },
  { name: 'Numerology', icon: HashIcon },
  { name: 'Free 50+ Pages', icon: BookOpen },
];

function HashIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M4 9h16M4 15h16M9 4v16M15 4v16" />
    </svg>
  );
}

export function HomePage({ onNavigate, onOpenMenu }: HomePageProps) {
  const [activeTab, setActiveTab] = useState('Home');
  const [question, setQuestion] = useState('');

  const tabs = ['Home', '2026', 'Astro Shop', 'Consult', 'Reports', 'Video', 'Panchang', 'Horoscope'];

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-sm px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <button onClick={onOpenMenu} className="p-2">
            <Menu className="w-6 h-6 text-white" />
          </button>
          <span className="text-white font-semibold">AstroGuide AI</span>
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

        {/* Tab Navigation */}
        <div className="flex gap-4 overflow-x-auto hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                if (tab === 'Home') onNavigate('home');
                else if (tab === '2026') onNavigate('2026');
                else if (tab === 'Astro Shop') onNavigate('astroshop');
                else if (tab === 'Consult') onNavigate('consult');
                else if (tab === 'Reports') onNavigate('reports');
                else if (tab === 'Video') onNavigate('video');
                else if (tab === 'Panchang') onNavigate('panchang');
                else if (tab === 'Horoscope') onNavigate('horoscope');
              }}
              className={`whitespace-nowrap pb-2 text-sm font-medium transition-colors ${
                activeTab === tab ? 'text-[#f5b800] border-b-2 border-[#f5b800]' : 'text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="px-4 py-4 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <button
              key={action.label}
              onClick={() => onNavigate(action.page)}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-14 h-14 bg-[#1a1a1a] rounded-xl flex items-center justify-center">
                <action.icon className="w-6 h-6 text-[#f5b800]" />
              </div>
              <span className="text-xs text-gray-300">{action.label}</span>
            </button>
          ))}
        </div>

        {/* AI Question Input */}
        <div className="relative">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="When will I become a mother?"
            className="w-full px-4 py-3 pr-12 bg-[#1a1a1a] rounded-xl text-white placeholder-gray-500 border border-transparent input-focus"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#f5b800] rounded-full flex items-center justify-center">
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-4 gap-4">
          {categories.map((cat) => (
            <button key={cat.label} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-[#1a1a1a] rounded-xl flex items-center justify-center">
                <cat.icon className={`w-6 h-6 ${cat.color}`} />
              </div>
              <span className="text-xs text-gray-300">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-[#f5b800]/20 to-[#f5b800]/10 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-[#f5b800] font-semibold">First Chat FREE</p>
            <p className="text-gray-400 text-sm">Get First Chat Free with AI Astrologers</p>
          </div>
          <button className="px-4 py-2 bg-[#f5b800] text-black text-sm font-semibold rounded-full">
            Chat Now
          </button>
        </div>

        {/* Call & Chat Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Call & Chat</h3>
            <button 
              onClick={() => onNavigate('ask')}
              className="flex items-center text-[#f5b800] text-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            {astrologers.map((astro) => (
              <div key={astro.name} className="flex-shrink-0 w-20 text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-2 border-2 border-[#f5b800]">
                  <img src={astro.image} alt={astro.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-white text-xs truncate">{astro.name}</p>
                <p className="text-[#f5b800] text-xs">{astro.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h3 className="text-white font-semibold">Live</h3>
              <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded">LIVE</span>
            </div>
            <button 
              onClick={() => onNavigate('livetv')}
              className="flex items-center text-[#f5b800] text-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            {liveAstrologers.map((astro) => (
              <div key={astro.name} className="flex-shrink-0 w-20 text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-2 border-2 border-red-500">
                  <img src={astro.image} alt={astro.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-white text-xs truncate">{astro.name}</p>
                <p className="text-gray-400 text-xs truncate">{astro.topic}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Astrologers */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">AI Astrologers</h3>
            <button 
              onClick={() => onNavigate('consult')}
              className="flex items-center text-[#f5b800] text-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            {aiAstrologers.map((astro) => (
              <div key={astro.name} className="flex-shrink-0 w-20 text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-2 border-2 border-gray-600">
                  <img src={astro.image} alt={astro.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-white text-xs truncate">{astro.name}</p>
                <p className="text-green-500 text-xs">{astro.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* History */}
        <div className="bg-[#1a1a1a] rounded-xl p-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img src={astrologers[0].image} alt="History" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">Mr. Krishnam</p>
              <p className="text-gray-400 text-sm">20-01-2026</p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 bg-[#f5b800] rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-black" />
              </button>
              <button className="w-10 h-10 bg-[#f5b800] rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Reports */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Reports</h3>
            <button 
              onClick={() => onNavigate('services')}
              className="flex items-center text-[#f5b800] text-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {reports.map((report) => (
              <button key={report.name} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-[#1a1a1a] rounded-xl flex items-center justify-center">
                  <report.icon className="w-6 h-6 text-[#f5b800]" />
                </div>
                <span className="text-xs text-gray-300 text-center">{report.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Top 10 Articles */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Top 10 Articles</h3>
            <button className="flex items-center text-[#f5b800] text-sm">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            {[
              { title: 'Venus Transit In Aquarius: A C...', image: 'https://images.unsplash.com/photo-1614730341194-75c607400070?w=200&h=150&fit=crop' },
              { title: 'World Cancer Day Sanjay Dutt...', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&h=150&fit=crop' },
              { title: 'Mercury Transit In Aquarius: Imp...', image: 'https://images.unsplash.com/photo-1614730341194-75c607400070?w=200&h=150&fit=crop' },
              { title: 'Saturn Transit 2026 Predictions', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&h=150&fit=crop' },
              { title: 'Jupiter Transit Effects on Zodiac', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=150&fit=crop' },
              { title: 'Rahu Ketu Transit 2026 Guide', image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=200&h=150&fit=crop' },
              { title: 'Solar Eclipse 2026 Astrology', image: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=200&h=150&fit=crop' },
              { title: 'Lunar Eclipse Impact on Signs', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=200&h=150&fit=crop' },
              { title: 'Mangal Dosh Remedies 2026', image: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=200&h=150&fit=crop' },
              { title: 'Kaal Sarp Dosh Effects & Cure', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200&h=150&fit=crop' },
            ].map((article, idx) => (
              <div key={idx} className="flex-shrink-0 w-40">
                <div className="w-40 h-24 rounded-xl overflow-hidden mb-2">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>
                <p className="text-white text-xs line-clamp-2">{article.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Products</h3>
            <button 
              onClick={() => onNavigate('astroshop')}
              className="flex items-center text-[#f5b800] text-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {products.map((product) => (
              <button key={product.name} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-[#1a1a1a] rounded-full overflow-hidden flex items-center justify-center">
                  {'image' in product ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <Gem className="w-6 h-6 text-[#f5b800]" />
                  )}
                </div>
                <span className="text-xs text-gray-300 text-center">{product.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Videos */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Videos</h3>
            <button 
              onClick={() => onNavigate('video')}
              className="flex items-center text-[#f5b800] text-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {videos.map((video, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden">
                <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="absolute bottom-2 left-2 right-2 text-white text-sm">{video.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Others */}
        <div>
          <h3 className="text-white font-semibold mb-4">Others</h3>
          <div className="grid grid-cols-4 gap-4">
            {others.map((item) => (
              <button key={item.name} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-[#1a1a1a] rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#f5b800]" />
                </div>
                <span className="text-xs text-gray-300 text-center">{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Share App Button */}
        <button className="w-full py-4 bg-[#f5b800] text-black font-semibold rounded-xl flex items-center justify-center gap-2">
          Share App with Friends
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Floating Call/Chat Buttons */}
      <div className="fixed bottom-20 left-4 right-4 flex gap-4" style={{ maxWidth: '398px', margin: '0 auto' }}>
        <button className="flex-1 py-3 bg-green-600 text-white rounded-full flex items-center justify-center gap-2">
          <Phone className="w-5 h-5" />
          Call
        </button>
        <button className="flex-1 py-3 bg-blue-500 text-white rounded-full flex items-center justify-center gap-2">
          <MessageCircle className="w-5 h-5" />
          Free Chat
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-gray-800 px-4 py-2" style={{ maxWidth: '430px', margin: '0 auto' }}>
        <div className="flex justify-around">
          {[
            { icon: Scroll, label: 'Home', page: 'home' as Page },
            { icon: Sparkles, label: 'AI Astro', page: 'consult' as Page },
            { icon: Video, label: 'Live', page: 'video' as Page },
            { icon: MessageCircle, label: 'Ask', page: 'ask' as Page },
            { icon: Clock, label: 'History', page: 'history' as Page },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate(item.page)}
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
