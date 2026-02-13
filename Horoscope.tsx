import { useState } from 'react';
import { 
  Search, Bell, ChevronLeft, MoreVertical, Volume2, Copy, Share2, MessageCircle,
  Calendar, Clock, MapPin, ChevronDown, ChevronUp, Phone, Star, ArrowLeft, HomeIcon,
  Heart, ShoppingBag, Users, Info, Sparkles, Video
} from 'lucide-react';
import type { Page } from '../App';

interface HoroscopeProps {
  onNavigate: (page: Page) => void;
}

const zodiacSigns = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

// Sample city data for search
const cities = [
  'Goa, Goa', 'Goa, Bicol', 'Goa Medical College and Hospital, Goa', 'Goa Velha, Goa',
  'Goabaria, Bengal', 'Goah, Jammu and Kashmir', 'Goal, Jammu and Kashmir',
  'Goal Dak Khana, Post Office, Delhi, NCT', 'Goaldei, Orissa', 'Goalnani Bil, Assam',
  'Rajasthan', 'Rajkot', 'Rajahmundry', 'Rajouri', 'Rajgarh',
  'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune'
];

export function Horoscope({ onNavigate }: HoroscopeProps) {
  const [activeTab, setActiveTab] = useState<'daily' | 'panchang' | 'weekly' | 'weeklylove' | 'monthly' | 'yearly' | 'ask'>('daily');
  const [selectedSign, setSelectedSign] = useState('Taurus');
  const [showSignDropdown, setShowSignDropdown] = useState(false);
  const [showThreeDotMenu, setShowThreeDotMenu] = useState(false);
  
  // Panchang states
  const [showLocationSearch, setShowLocationSearch] = useState(false);
  const [locationSearchTab, setLocationSearchTab] = useState<'city' | 'custom' | 'gps'>('city');
  const [citySearchQuery, setCitySearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('New Delhi');
  
  // Yearly accordion states
  const [expandedSection, setExpandedSection] = useState<string | null>('general');

  const filteredCities = cities.filter(city => 
    city.toLowerCase().includes(citySearchQuery.toLowerCase()) && citySearchQuery.length >= 3
  );

  const renderDailyHoroscope = () => (
    <div className="pb-20">
      {/* Banner */}
      <div className="mx-4 mt-4 p-4 bg-gradient-to-r from-red-900/50 to-orange-900/30 rounded-xl">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-red-500 font-bold text-lg">First Chat FREE</p>
            <p className="text-gray-400 text-sm">Get First Chat Free with AI Astrologers</p>
            <button className="mt-2 px-4 py-1 bg-red-600 text-white text-sm rounded">Chat Now</button>
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Astrologer" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Horoscope Content */}
      <div className="px-4 mt-4">
        <h2 className="text-white text-lg font-semibold">Today's Horoscope for Moon Sign : {selectedSign} (12 February, 2026)</h2>
        
        {/* Action Icons */}
        <div className="flex gap-4 mt-3">
          <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <Volume2 className="w-5 h-5 text-[#f5b800]" />
          </button>
          <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <Copy className="w-5 h-5 text-[#f5b800]" />
          </button>
          <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <Share2 className="w-5 h-5 text-[#f5b800]" />
          </button>
          <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-green-500" />
          </button>
        </div>

        {/* Zodiac Image and Text */}
        <div className="mt-4 flex gap-4">
          <div className="w-24 h-24 flex-shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#f5b800]">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M30 70 Q50 20 70 70 Q50 50 30 70" fill="currentColor"/>
              <circle cx="65" cy="35" r="8" fill="currentColor"/>
            </svg>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Unwanted thoughts may occupy your mind. Try to engage yourself in physical exercise because an empty brain is a devil's workshop. You should look twice at investment schemes that are presented to you today. Today work will be stressful and tiring- but the company of friends will keep you in a happy and relaxed mood. Thoughts of meeting your friend after a long time may increase your heat beats like a rolling stone. You will benefit today if you listen to people with experience and try to apply new ideas in your work. The wheel of time moves very fast. So learn to use it wisely and make the most of it. You will spend the best day of your life with your spouse today.
          </p>
        </div>

        {/* Lucky Number */}
        <div className="mt-4">
          <p className="text-white">Lucky Number: <span className="text-[#f5b800] font-bold">5</span></p>
        </div>

        {/* Call/Chat Banner */}
        <div className="mt-6 p-4 bg-[#1a1a1a] rounded-xl">
          <p className="text-white font-semibold">Surrounded By Troubles? Get Instant Solutions from best Astrologers.</p>
          <div className="flex gap-3 mt-3">
            <button className="flex-1 py-2 bg-[#f5b800] text-black font-medium rounded-full flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </button>
            <button className="flex-1 py-2 bg-[#f5b800] text-black font-medium rounded-full flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Chat Now
            </button>
          </div>
        </div>

        {/* Remedy */}
        <div className="mt-4 p-4 bg-[#1a1a1a] rounded-xl">
          <p className="text-white font-semibold">Remedy:</p>
          <p className="text-gray-400 text-sm mt-1">Donate packets of milk to economically weak women, for continued prosperity.</p>
        </div>

        {/* Today's Rating */}
        <div className="mt-4 p-4 bg-[#1a1a1a] rounded-xl">
          <p className="text-white font-semibold mb-3">Today's Rating:</p>
          {[
            { label: 'Health', stars: 2 },
            { label: 'Wealth', stars: 1 },
            { label: 'Family', stars: 4 },
            { label: 'Love Matters', stars: 5 },
            { label: 'Occupation', stars: 4 },
            { label: 'Married Life', stars: 5 },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between py-1">
              <span className="text-gray-400 text-sm">{item.label}</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < item.stars ? 'text-[#f5b800] fill-[#f5b800]' : 'text-gray-600'}`} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Auspicious/Inauspicious */}
        <div className="mt-4 p-4 bg-[#1a1a1a] rounded-xl">
          <p className="text-white font-semibold mb-3">Today's Auspicious & Inauspicious</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400 text-sm">Best Time</span>
              <span className="text-white text-sm">10:44 to 11:40</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 text-sm">Time to be careful</span>
              <span className="text-white text-sm">14:27 to 15:22</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 text-sm">Lucky Number</span>
              <span className="text-white text-sm">5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 text-sm">Lucky Color</span>
              <span className="text-white text-sm">Green, Turquoise</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 text-sm">Inauspicious Direction</span>
              <span className="text-white text-sm">South</span>
            </div>
          </div>
        </div>

        {/* Tomorrow's Horoscope Button */}
        <button className="w-full mt-4 py-3 bg-[#f5b800] text-black font-semibold rounded-xl">
          TOMORROW'S HOROSCOPE
        </button>

        {/* Sign Selector */}
        <div className="mt-4 relative">
          <button 
            onClick={() => setShowSignDropdown(!showSignDropdown)}
            className="w-full p-4 bg-[#1a1a1a] rounded-xl flex items-center justify-between"
          >
            <span className="text-gray-400">Select Your Sign:</span>
            <span className="text-white">{selectedSign}</span>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </button>
          
          {showSignDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] rounded-xl border border-gray-700 z-50 max-h-60 overflow-y-auto">
              {zodiacSigns.map((sign) => (
                <button
                  key={sign}
                  onClick={() => { setSelectedSign(sign); setShowSignDropdown(false); }}
                  className="w-full p-3 text-left text-white hover:bg-[#2a2a2a] transition-colors"
                >
                  {sign}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Brihat Kundli Banner */}
        <div className="mt-4 p-4 bg-blue-900/50 rounded-xl flex items-center gap-4">
          <div className="w-16 h-20 bg-white rounded-lg flex items-center justify-center">
            <span className="text-blue-900 font-bold text-xs text-center">Brihat<br/>Kundli</span>
          </div>
          <div>
            <p className="text-white font-semibold">Brihat Kundli</p>
            <p className="text-gray-400 text-sm">One Solution for all Problems</p>
          </div>
          <button className="ml-auto px-4 py-2 bg-[#f5b800] text-black text-sm font-semibold rounded">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );

  const renderPanchang = () => (
    <div className="pb-20">
      {/* Date and Location */}
      <div className="px-4 mt-4">
        <div className="flex gap-3 mb-3">
          <div className="flex-1 flex items-center justify-between p-3 bg-[#1a1a1a] rounded-xl">
            <button className="text-gray-400"><ChevronLeft className="w-5 h-5" /></button>
            <span className="text-white">18 - Feb - 2026</span>
            <button className="text-gray-400 rotate-180"><ChevronLeft className="w-5 h-5" /></button>
          </div>
          <button className="px-4 py-3 bg-[#1a1a1a] rounded-xl text-white">Today</button>
        </div>
        
        <button 
          onClick={() => setShowLocationSearch(true)}
          className="w-full p-3 bg-[#1a1a1a] rounded-xl text-center border border-[#f5b800]"
        >
          <p className="text-white font-medium">{selectedCity}</p>
          <p className="text-gray-500 text-sm">( 28N38, 77E13 +5.5 )</p>
        </button>
      </div>

      {/* Panchang Details */}
      <div className="px-4 mt-4 space-y-1">
        <div className="p-4 bg-[#1a1a1a] rounded-xl">
          <p className="text-white font-semibold mb-3">Panchang</p>
          {[
            { label: 'Tithi', value: 'Prathama', time: '05:00 PM' },
            { label: 'Nakshatra', value: 'Satabisha', time: '09:16 PM' },
            { label: 'Karana', value: 'Bhav, Baalav', time: '05:00 PM, Tomorrow 04:33 AM' },
            { label: 'Paksha', value: 'Shukla', time: '' },
            { label: 'Yoga', value: 'Siva', time: '10:44 PM' },
            { label: 'Day', value: 'Buddhavara', time: '' },
          ].map((item) => (
            <div key={item.label} className="flex justify-between py-2 border-b border-gray-800 last:border-0">
              <span className="text-gray-400">{item.label}</span>
              <div className="text-right">
                <span className="text-white">{item.value}</span>
                {item.time && <span className="text-gray-500 text-sm ml-2">{item.time}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Sun and Moon Calculations */}
        <div className="p-4 bg-[#1a1a1a] rounded-xl">
          <p className="text-white font-semibold mb-3">Sun And Moon Calculations</p>
          {[
            { label: 'Sun Rise', value: '06:57 AM' },
            { label: 'Moon Rise', value: '07:23 AM' },
            { label: 'Moon Sign', value: 'Kumbha' },
            { label: 'Sun Set', value: '06:13 PM' },
            { label: 'Moon Set', value: '07:08 PM' },
            { label: 'Ritu', value: 'Shishir' },
          ].map((item) => (
            <div key={item.label} className="flex justify-between py-2 border-b border-gray-800 last:border-0">
              <span className="text-gray-400">{item.label}</span>
              <span className="text-white">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Hindu Month and Year */}
        <div className="p-4 bg-[#1a1a1a] rounded-xl">
          <p className="text-white font-semibold mb-3">Hindu Month And Year</p>
          {[
            { label: 'Shaka Samvat', value: '1947', extra: 'Vishvavasu' },
            { label: 'Kali Samvat', value: '5127', extra: '' },
            { label: 'Day Duration', value: '11:15:43', extra: '' },
            { label: 'Vikram Samvat', value: '2082', extra: '' },
            { label: 'Month Amanta', value: 'Phalguna', extra: '' },
            { label: 'Month Purnimanta', value: 'Phalguna', extra: '' },
          ].map((item) => (
            <div key={item.label} className="flex justify-between py-2 border-b border-gray-800 last:border-0">
              <span className="text-gray-400">{item.label}</span>
              <div className="text-right">
                <span className="text-white">{item.value}</span>
                {item.extra && <span className="text-gray-500 text-sm ml-2">{item.extra}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Auspicious/Inauspicious Timings */}
        <div className="p-4 bg-[#1a1a1a] rounded-xl">
          <p className="text-white font-semibold mb-3">Auspicious/Inauspicious Timings</p>
          <p className="text-gray-400 text-sm mb-2">Auspicious Timings</p>
          <div className="flex justify-between py-2">
            <span className="text-gray-400">Abhijit</span>
            <span className="text-white">None</span>
          </div>
          
          <p className="text-gray-400 text-sm mt-4 mb-2">Inauspicious Timings</p>
          {[
            { label: 'Dushta Muhurtas', start: '12:12 PM', end: '12:57 PM' },
            { label: 'Kantaka/Mrityu', start: '04:43 PM', end: '05:28 PM' },
            { label: 'Yamaghanta', start: '09:12 AM', end: '09:57 AM' },
            { label: 'Rahu Kaal', start: '12:35 PM', end: '01:59 PM' },
            { label: 'Kulika', start: '12:12 PM', end: '12:57 PM' },
            { label: 'Kalavela', start: '07:42 AM', end: '08:27 AM' },
          ].map((item) => (
            <div key={item.label} className="flex justify-between py-2 border-b border-gray-800 last:border-0">
              <span className="text-gray-400">{item.label}</span>
              <div className="text-right">
                <span className="text-white">{item.start}</span>
                <span className="text-gray-500 mx-2">-</span>
                <span className="text-white">{item.end}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Gulika Kaal */}
        <div className="p-4 bg-[#1a1a1a] rounded-xl">
          <div className="flex justify-between py-2">
            <span className="text-gray-400">Gulika Kaal</span>
            <div className="text-right">
              <span className="text-white">11:10 AM</span>
              <span className="text-gray-500 mx-2">-</span>
              <span className="text-white">12:35 PM</span>
            </div>
          </div>
        </div>

        {/* Disha Shoola */}
        <div className="p-4 bg-[#1a1a1a] rounded-xl">
          <p className="text-white font-semibold mb-3">Disha Shoola</p>
          <div className="flex justify-between py-2">
            <span className="text-gray-400">Disha Shoola</span>
            <span className="text-white">North</span>
          </div>
        </div>

        {/* Chandrabalam And Tarabalam */}
        <div className="p-4 bg-[#1a1a1a] rounded-xl">
          <p className="text-white font-semibold mb-3">Chandrabalam And Tarabalam</p>
          <p className="text-gray-400 text-sm mb-2">Tara Bala</p>
          <p className="text-white text-sm">Ashwini, Kritika, Mrigashirsha, Arda, Punarvasu, Pushya, Magha, Uttara Phalguni, Chitra, Swati, Vishakha, Anuradha, Moola, Uttara Ashadha, Dhanishta, Satabisha, Poorva Bhadrapada, Uttara Bhadrapada</p>
          
          <p className="text-gray-400 text-sm mt-4 mb-2">Chandra Bala</p>
          <p className="text-white text-sm">Mesha, Vrishabha, Simha, Kanya, Dhanu, Kumbha</p>
        </div>

        {/* Brihat Kundli Banner */}
        <div className="mt-4 p-4 bg-blue-900/50 rounded-xl flex items-center gap-4">
          <div className="w-16 h-20 bg-white rounded-lg flex items-center justify-center">
            <span className="text-blue-900 font-bold text-xs text-center">Brihat<br/>Kundli</span>
          </div>
          <div>
            <p className="text-white font-semibold">Brihat Kundli</p>
            <p className="text-gray-400 text-sm">One Solution for all Problems</p>
          </div>
          <button className="ml-auto px-4 py-2 bg-[#f5b800] text-black text-sm font-semibold rounded">
            Order Now
          </button>
        </div>
      </div>

      {/* Location Search Modal */}
      {showLocationSearch && (
        <div className="fixed inset-0 bg-black z-50">
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center gap-4">
              <button onClick={() => setShowLocationSearch(false)}>
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <span className="text-white text-lg font-semibold">Search Place</span>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex border-b border-gray-800">
            {['city', 'custom', 'gps'].map((tab) => (
              <button
                key={tab}
                onClick={() => setLocationSearchTab(tab as any)}
                className={`flex-1 py-3 text-center font-medium capitalize transition-colors ${
                  locationSearchTab === tab ? 'text-[#f5b800] border-b-2 border-[#f5b800]' : 'text-gray-400'
                }`}
              >
                {tab === 'city' ? 'City search' : tab === 'custom' ? 'Custom city' : 'G.P.S.'}
              </button>
            ))}
          </div>
          
          {/* City Search */}
          {locationSearchTab === 'city' && (
            <div className="p-4">
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={citySearchQuery}
                  onChange={(e) => setCitySearchQuery(e.target.value)}
                  placeholder="Search Place (Min. 3 char. in...)"
                  className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] rounded-xl text-white placeholder-gray-500"
                />
              </div>
              
              <label className="flex items-center gap-3 mb-4">
                <div className="w-5 h-5 border border-gray-600 rounded"></div>
                <span className="text-gray-400">Make it default city</span>
              </label>
              
              {citySearchQuery.length >= 3 && (
                <div className="space-y-1">
                  {filteredCities.map((city, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setSelectedCity(city); setShowLocationSearch(false); setCitySearchQuery(''); }}
                      className="w-full p-3 text-left text-white hover:bg-[#1a1a1a] border-b border-gray-800"
                    >
                      <p className="text-white">{city}</p>
                      <p className="text-gray-500 text-sm">India</p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {/* Custom City */}
          {locationSearchTab === 'custom' && (
            <div className="p-4 space-y-4">
              <div>
                <p className="text-gray-400 mb-2">Time Zone</p>
                <div className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-xl">
                  <span className="text-white">+5.30 IST</span>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              
              <div>
                <p className="text-gray-400 mb-2">Latitude</p>
                <div className="flex gap-4 mb-2">
                  <label className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-[#f5b800] bg-[#f5b800]"></div>
                    <span className="text-white">North</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-600"></div>
                    <span className="text-gray-400">South</span>
                  </label>
                </div>
                <div className="flex gap-2">
                  <input type="text" defaultValue="28" className="w-20 p-3 bg-transparent border-b border-[#f5b800] text-white text-center" />
                  <input type="text" defaultValue="38" className="w-20 p-3 bg-transparent border-b border-[#f5b800] text-white text-center" />
                </div>
              </div>
              
              <div>
                <p className="text-gray-400 mb-2">Longitude</p>
                <div className="flex gap-4 mb-2">
                  <label className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-[#f5b800] bg-[#f5b800]"></div>
                    <span className="text-white">East</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-600"></div>
                    <span className="text-gray-400">West</span>
                  </label>
                </div>
                <div className="flex gap-2">
                  <input type="text" defaultValue="77" className="w-20 p-3 bg-transparent border-b border-[#f5b800] text-white text-center" />
                  <input type="text" defaultValue="13" className="w-20 p-3 bg-transparent border-b border-[#f5b800] text-white text-center" />
                </div>
              </div>
              
              <label className="flex items-center gap-3">
                <div className="w-5 h-5 border border-gray-600 rounded"></div>
                <span className="text-gray-400">Make it default city</span>
              </label>
              
              <button className="w-full py-3 bg-[#f5b800] text-black font-semibold rounded-xl">
                OK
              </button>
            </div>
          )}
          
          {/* GPS */}
          {locationSearchTab === 'gps' && (
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-center py-8">
                <MapPin className="w-16 h-16 text-[#f5b800]" />
              </div>
              <p className="text-white text-center">
                In order to get current location, we require 'Location' permission. please go to App Info and activate permission for location.
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-6 py-2 text-red-500">CANCEL</button>
                <button className="px-6 py-2 text-green-500">OK</button>
              </div>
              <label className="flex items-center gap-3">
                <div className="w-5 h-5 border border-gray-600 rounded"></div>
                <span className="text-gray-400">Make it default city</span>
              </label>
              <button className="w-full py-3 bg-[#f5b800]/50 text-black font-semibold rounded-xl">
                OK
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );

  const renderWeeklyHoroscope = () => (
    <div className="pb-20">
      {/* Banner */}
      <div className="mx-4 mt-4 p-4 bg-gradient-to-r from-red-900/50 to-orange-900/30 rounded-xl">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-red-500 font-bold text-lg">First Chat FREE</p>
            <p className="text-gray-400 text-sm">Get First Chat Free with AI Astrologers</p>
            <button className="mt-2 px-4 py-1 bg-red-600 text-white text-sm rounded">Chat Now</button>
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Astrologer" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="px-4 mt-4">
        <h2 className="text-white text-lg font-semibold">Weekly Horoscope for Moon Sign : {selectedSign} (9 February to 15 February)</h2>
        
        {/* Action Icons */}
        <div className="flex gap-4 mt-3">
          <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <Volume2 className="w-5 h-5 text-[#f5b800]" />
          </button>
          <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <Copy className="w-5 h-5 text-[#f5b800]" />
          </button>
          <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <Share2 className="w-5 h-5 text-[#f5b800]" />
          </button>
          <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-green-500" />
          </button>
        </div>

        {/* Zodiac Image and Text */}
        <div className="mt-4 flex gap-4">
          <div className="w-24 h-24 flex-shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#f5b800]">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M30 70 Q50 20 70 70 Q50 50 30 70" fill="currentColor"/>
              <circle cx="65" cy="35" r="8" fill="currentColor"/>
            </svg>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Due to Ketu being present in the third house with respect to the moon sign. You will have a more emotional, emotional mood this week. Because of which you may feel somewhat hesitant to talk or communicate openly with others. In such a situation, if you want to keep yourself stress- free, then it would be better for you to try to make a new beginning by removing the past. Due to Rahu being placed in the ninth house with respect to the moon sign. To expand your business, you can plan to take any type of loan this week. While you will also be able to get a loan from the bank or any other institution at this time, you must remain highly attentive right from the beginning when making money related transactions. This week, you can enjoy with your family as a new vehicle will bring happiness. Along with this, if there is a member of marriageable age in your family then their marriage can be fixed and you will enjoy different types of dishes. However, you have to participate in family functions whole- heartedly as it will enhance your respect in your family and relatives. During this week, natives of your zodiac sign are likely to attain excellent results in terms of the profession such as monetary increment or promotion at work. You will be able to achieve all of it by putting to use every diplomatic strategy with your discipline and hard work. If you are only then you will get good results. In such a situation, taking best advantage of this time and trying to understand the subjects is advisable.
          </p>
        </div>

        {/* Sign Selector */}
        <div className="mt-6 relative">
          <button 
            onClick={() => setShowSignDropdown(!showSignDropdown)}
            className="w-full p-4 bg-[#1a1a1a] rounded-xl flex items-center justify-between"
          >
            <span className="text-gray-400">Select Your Sign:</span>
            <span className="text-white">{selectedSign}</span>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </button>
          
          {showSignDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] rounded-xl border border-gray-700 z-50 max-h-60 overflow-y-auto">
              {zodiacSigns.map((sign) => (
                <button
                  key={sign}
                  onClick={() => { setSelectedSign(sign); setShowSignDropdown(false); }}
                  className="w-full p-3 text-left text-white hover:bg-[#2a2a2a] transition-colors"
                >
                  {sign}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Call/Chat Banner */}
        <div className="mt-6 p-4 bg-[#1a1a1a] rounded-xl">
          <p className="text-white font-semibold">Surrounded By Troubles? Get Instant Solutions from best Astrologers.</p>
          <div className="flex gap-3 mt-3">
            <button className="flex-1 py-2 bg-[#f5b800] text-black font-medium rounded-full flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </button>
            <button className="flex-1 py-2 bg-[#f5b800] text-black font-medium rounded-full flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Chat Now
            </button>
          </div>
        </div>

        {/* Brihat Kundli Banner */}
        <div className="mt-4 p-4 bg-blue-900/50 rounded-xl flex items-center gap-4">
          <div className="w-16 h-20 bg-white rounded-lg flex items-center justify-center">
            <span className="text-blue-900 font-bold text-xs text-center">Brihat<br/>Kundli</span>
          </div>
          <div>
            <p className="text-white font-semibold">Brihat Kundli</p>
            <p className="text-gray-400 text-sm">One Solution for all Problems</p>
          </div>
          <button className="ml-auto px-4 py-2 bg-[#f5b800] text-black text-sm font-semibold rounded">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );

  const renderWeeklyLoveHoroscope = () => (
    <div className="pb-20">
      {/* Banner */}
      <div className="mx-4 mt-4 p-4 bg-gradient-to-r from-red-900/50 to-orange-900/30 rounded-xl">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-red-500 font-bold text-lg">First Chat FREE</p>
            <p className="text-gray-400 text-sm">Get First Chat Free with AI Astrologers</p>
            <button className="mt-2 px-4 py-1 bg-red-600 text-white text-sm rounded">Chat Now</button>
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Astrologer" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="px-4 mt-4">
        <h2 className="text-white text-lg font-semibold">Weekly Love Horoscope for Moon Sign : {selectedSign} (9 February to 15 February)</h2>
        
        {/* Action Icons */}
        <div className="flex gap-4 mt-3">
          <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <Volume2 className="w-5 h-5 text-[#f5b800]" />
          </button>
          <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <Copy className="w-5 h-5 text-[#f5b800]" />
          </button>
          <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <Share2 className="w-5 h-5 text-[#f5b800]" />
          </button>
          <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-green-500" />
          </button>
        </div>

        {/* Zodiac Image and Text */}
        <div className="mt-4 flex gap-4">
          <div className="w-24 h-24 flex-shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#f5b800]">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M30 70 Q50 20 70 70 Q50 50 30 70" fill="currentColor"/>
              <circle cx="65" cy="35" r="8" fill="currentColor"/>
            </svg>
          </div>
          <div className="text-gray-300 text-sm leading-relaxed">
            <p className="font-semibold text-white mb-2">Love/Marriage/Personal Relations:</p>
            <p>If you have been in a relationship for a long time, you can let your lover meet your family members this week. There are conjunctions that your family members might stand by you for the relationship and pay attention to your marriage. In this regard, you need to speak to your lover. The week seems to be highly romantic for married people and you will come close to your partner by spending good time with them. Also, you will get the opportunity to enjoy romance, spread happiness and share your feelings.</p>
            <p className="mt-3">Remedy: Chant "Om Namo Narayana" daily 21 times.</p>
          </div>
        </div>

        {/* Sign Selector */}
        <div className="mt-6 relative">
          <button 
            onClick={() => setShowSignDropdown(!showSignDropdown)}
            className="w-full p-4 bg-[#1a1a1a] rounded-xl flex items-center justify-between"
          >
            <span className="text-gray-400">Select Your Sign:</span>
            <span className="text-white">{selectedSign}</span>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </button>
          
          {showSignDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] rounded-xl border border-gray-700 z-50 max-h-60 overflow-y-auto">
              {zodiacSigns.map((sign) => (
                <button
                  key={sign}
                  onClick={() => { setSelectedSign(sign); setShowSignDropdown(false); }}
                  className="w-full p-3 text-left text-white hover:bg-[#2a2a2a] transition-colors"
                >
                  {sign}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Call/Chat Banner */}
        <div className="mt-6 p-4 bg-[#1a1a1a] rounded-xl">
          <p className="text-white font-semibold">Surrounded By Troubles? Get Instant Solutions from best Astrologers.</p>
          <div className="flex gap-3 mt-3">
            <button className="flex-1 py-2 bg-[#f5b800] text-black font-medium rounded-full flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </button>
            <button className="flex-1 py-2 bg-[#f5b800] text-black font-medium rounded-full flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Chat Now
            </button>
          </div>
        </div>

        {/* Brihat Kundli Banner */}
        <div className="mt-4 p-4 bg-blue-900/50 rounded-xl flex items-center gap-4">
          <div className="w-16 h-20 bg-white rounded-lg flex items-center justify-center">
            <span className="text-blue-900 font-bold text-xs text-center">Brihat<br/>Kundli</span>
          </div>
          <div>
            <p className="text-white font-semibold">Brihat Kundli</p>
            <p className="text-gray-400 text-sm">One Solution for all Problems</p>
          </div>
          <button className="ml-auto px-4 py-2 bg-[#f5b800] text-black text-sm font-semibold rounded">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );

  const renderMonthlyHoroscope = () => (
    <div className="pb-20">
      {/* Banner */}
      <div className="mx-4 mt-4 p-4 bg-gradient-to-r from-red-900/50 to-orange-900/30 rounded-xl">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-red-500 font-bold text-lg">First Chat FREE</p>
            <p className="text-gray-400 text-sm">Get First Chat Free with AI Astrologers</p>
            <button className="mt-2 px-4 py-1 bg-red-600 text-white text-sm rounded">Chat Now</button>
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Astrologer" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="px-4 mt-4">
        <h2 className="text-white text-lg font-semibold">Monthly Horoscope for Moon Sign : {selectedSign} (February 2026)</h2>
        
        {/* Action Icons */}
        <div className="flex gap-4 mt-3">
          <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <Volume2 className="w-5 h-5 text-[#f5b800]" />
          </button>
          <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <Copy className="w-5 h-5 text-[#f5b800]" />
          </button>
          <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <Share2 className="w-5 h-5 text-[#f5b800]" />
          </button>
          <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-green-500" />
          </button>
        </div>

        {/* Zodiac Image */}
        <div className="mt-4 flex gap-4">
          <div className="w-24 h-24 flex-shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#f5b800]">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M30 70 Q50 20 70 70 Q50 50 30 70" fill="currentColor"/>
              <circle cx="65" cy="35" r="8" fill="currentColor"/>
            </svg>
          </div>
          <div className="text-gray-300 text-sm leading-relaxed">
            <p className="font-semibold text-white mb-2">Health:</p>
            <p>This month will be a matter of concern from the health point of view. The lord Venus of your zodiac sign will remain in the combust position for most of the month which will have an effect on your health. But from the 17th, with the lord of the sign coming into the rising state, there will be improvement in health and the minor illnesses or lack of immunity that was going on will now be cured. Due to the influence of Venus, Mercury, Sun, Mars and Rahu and the influence of Jupiter on them from the 6th of the month, your health will remain full of ups and downs. Along with this, you may be bothered by back pain and skin related problems. People who are already suffering from slip disc problems, their problem may increase. Therefore, they will have to pay special attention to their health. You must go for a morning walk because sitting or lying down immediately after eating can be the main cause of back pain. Therefore, make your daily routine active and take a walk in the morning and evening. If you want to be healthy, then do regular exercise and meditation.</p>
            
            <p className="font-semibold text-white mb-2 mt-4">Career:</p>
            <p>This month will be moderate from the career point of view, but at the beginning of the month, Rahu will be in the tenth house and retrograde Jupiter placed in the second house will also be aspecting it. The lord of the smaller house, Venus, will be fine. At the latter part of the month, the influence of five planets will begin on your tenth house, due to which there could be ups and downs in your career. Sometimes, your work will be very good and other times it may have flaws. You could also be a victim of overconfidence and might do some wrong things by getting influenced by some people. Even if your work is very good, sometimes it may also contain flaws. So, you have to be careful and try to avoid mistakes. Senior officers will pay close attention to your work but, your good work will increase your importance in their eyes which will benefit you. You may get a job change in the first half of the month. If you want to change your job, you may get success during this period. If you have applied for transfer then you may get that too. People doing business will benefit from business trips. Mars, being the lord of the seventh house, will come to your ninth house at the beginning of the month and to your tenth house from the 23rd, which might lead to good progress in business.</p>
            
            <p className="font-semibold text-white mb-2 mt-4">Love/Marriage/Personal Relations:</p>
            <p>If you are in a love relationship, then this month your love will be put to a tough test but the good thing is that your relationship will continue and romantic moments will also come. Saturn's aspect will remain on the fifth house throughout the month which will test the truth of your love. You will be aware of each other's difficult truths, which will also be a test of your love. But, this will increase your trust in each other and also your concern for each other. You will love each other a lot and your love will flourish. The lord Mercury of the fifth house will come to the ninth house at the beginning of the month and to the tenth house from the 3rd. Your family members might get a hint about your love, therefore, prepare to inform them in advance so that your relationship can run smoothly. The beginning of the month will be a little difficult for married people. You might go on trips with your spouse. There might be some arguments over some issues but, the latter half of the month will be favorable. If you are working and your spouse is also working, then the latter half of the month will be full of more love. You will be busy with your work but will take out some time for each other so that your relationship will continue to run smoothly.</p>
            
            <p className="font-semibold text-white mb-2 mt-4">Advice:</p>
            <p>You should touch the feet of little girls on Friday and seek their blessings. Be sure to feed green fodder to the mother cow on Wednesday. Feed the handicapped on Saturday. Worshiping Mahalaxmi Mata with lotus flower on Friday will increase your wealth.</p>
            
            <p className="font-semibold text-white mb-2 mt-4">General:</p>
            <p>This month is likely to be slightly better than average for you. At the beginning of the month, Lord Venus of your zodiac will be in the ninth house along with Mercury, Sun and Mars and on the 6th, it will move to your tenth house, where Sun, Mars and Mercury will also be with it and Rahu will also be there. Venus, the lord of your zodiac will rise on February 17 but you will also gain financial benefits. If you are already doing some business then, there will be chances of getting financial benefit from that also. You may get good money at this time by investing in the stock market. If that money is invested then, there will be strong chances of you getting profit. Money can also be obtained through foreign sources. If you are employed in a hospital or work abroad, you may especially gain monetary benefits.</p>
            
            <p className="font-semibold text-white mb-2 mt-4">Family & Friends:</p>
            <p>This month is going to be moderate on the family front. Ketu will remain present in the fourth house and Rahu will remain present in the tenth house for the whole month. Due to which lack of harmony in family relationships can be clearly visible. Retrograde Jupiter will be present in the second house which will maintain love and closeness in the family. The lord Mercury of the second house will be in the ninth house, along with it will be Venus, Sun and Mars. Due to which family members might get angry with your father over some issue and there could be some arguments over some issues but, the latter half of the month will be favorable. If you are working and your spouse is also working, then the latter half of the month will be full of more love. You will be busy with your work but will take out some time for each other so that your relationship will continue to run smoothly.</p>
          </div>
        </div>

        {/* Sign Selector */}
        <div className="mt-6 relative">
          <button 
            onClick={() => setShowSignDropdown(!showSignDropdown)}
            className="w-full p-4 bg-[#1a1a1a] rounded-xl flex items-center justify-between"
          >
            <span className="text-gray-400">Select Your Sign:</span>
            <span className="text-white">{selectedSign}</span>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </button>
          
          {showSignDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] rounded-xl border border-gray-700 z-50 max-h-60 overflow-y-auto">
              {zodiacSigns.map((sign) => (
                <button
                  key={sign}
                  onClick={() => { setSelectedSign(sign); setShowSignDropdown(false); }}
                  className="w-full p-3 text-left text-white hover:bg-[#2a2a2a] transition-colors"
                >
                  {sign}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Call/Chat Banner */}
        <div className="mt-6 p-4 bg-[#1a1a1a] rounded-xl">
          <p className="text-white font-semibold">Surrounded By Troubles? Get Instant Solutions from best Astrologers.</p>
          <div className="flex gap-3 mt-3">
            <button className="flex-1 py-2 bg-[#f5b800] text-black font-medium rounded-full flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </button>
            <button className="flex-1 py-2 bg-[#f5b800] text-black font-medium rounded-full flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Chat Now
            </button>
          </div>
        </div>

        {/* Brihat Kundli Banner */}
        <div className="mt-4 p-4 bg-blue-900/50 rounded-xl flex items-center gap-4">
          <div className="w-16 h-20 bg-white rounded-lg flex items-center justify-center">
            <span className="text-blue-900 font-bold text-xs text-center">Brihat<br/>Kundli</span>
          </div>
          <div>
            <p className="text-white font-semibold">Brihat Kundli</p>
            <p className="text-gray-400 text-sm">One Solution for all Problems</p>
          </div>
          <button className="ml-auto px-4 py-2 bg-[#f5b800] text-black text-sm font-semibold rounded">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );

  const renderYearlyHoroscope = () => (
    <div className="pb-20">
      <div className="px-4 mt-4">
        <h2 className="text-white text-lg font-semibold">2026 Horoscope for Moon Sign: {selectedSign}</h2>
        
        {/* Action Icons */}
        <div className="flex gap-4 mt-3">
          <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <Volume2 className="w-5 h-5 text-[#f5b800]" />
          </button>
          <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <Copy className="w-5 h-5 text-[#f5b800]" />
          </button>
          <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <Share2 className="w-5 h-5 text-[#f5b800]" />
          </button>
          <button className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-green-500" />
          </button>
        </div>

        {/* Expandable Sections */}
        <div className="mt-4 space-y-2">
          {[
            { id: 'general', title: 'General', content: `Taurus Horoscope 2026: Through this special article on the Taurus Horoscope 2026, we will explore how the year 2026 will be for individuals born under the Taurus zodiac sign in areas such as health, education, business, career, financial life, love, married life, and family life. In addition to this, based on planetary transits, we will also provide some simple remedies to help you achieve positive results in 2026. So, let us begin this horoscope and find out what the Taurus Horoscope 2026 predicts for Taurus natives.` },
            { id: 'family', title: 'Family', content: `According to the Taurus Horoscope 2026, the year will be favorable for the family life of Taurus natives. Especially from the beginning of the year until June 2, the transit of Jupiter in the second house indicates that harmony among family members will remain strong. There is also a possibility of an auspicious event taking place at home. During this time, family and relatives may gather to discuss important matters, communicate openly, and show mutual concern for one another. From June 2 to October 31, Jupiter is expected to deliver neither favorable nor unfavorable results. During this period, family members may be seen busy with their respective responsibilities, possibly leading to less interaction. However, they will neither interfere with nor create trouble for each other. After October 31, due to the changed position of Jupiter, you may remain connected to each other and your relationship will be full of love. You can take your family along on a long distance trip or visit some nice places which will keep the love and closeness intact.` },
            { id: 'health', title: 'Health', content: `According to the Taurus Horoscope 2026, the year is expected to be better than average in terms of health for Taurus natives. However, with proper care and caution, your health can remain favorable throughout the year. The transit of Jupiter will remain in your second house until June 2, which will be considered entirely positive for you. From June 2 to October 31, Jupiter will move to your third house. While this position may or may not bring favorable outcomes, the fact that the lord of the house of gains (eleventh house) is in an exalted state suggests that you won't face any significant negative health issues either. The exalted position of the lord of the eighth house indicates that if you regularly practice yoga, exercise, and meditation, your health will generally remain good.` },
            { id: 'love', title: 'Love', content: `The year 2026 will be an average one for the love life of Taurus natives. However, Mercury, the lord of your fifth house, will prevent any major troubles in your romantic relationships. That said, Saturn's aspect on the fifth house indicates that taking your relationship lightly may not be wise. If you are in love with someone, it is important to express your feelings within respectful boundaries. Failing to do so could lead to misunderstandings or cracks in the relationship. There may also be a risk of defamation or loss of reputation. According to Taurus Horoscope 2026, Jupiter's transit will neither strongly favor nor negatively impact your love life.` },
            { id: 'career', title: 'Career', content: `The year 2026 will bring mixed results for your career. The first half of the year will be particularly favorable, with opportunities for growth and advancement. Your hard work will be recognized by superiors, and you may receive promotions or salary increments. However, be cautious during the middle of the year as some challenges may arise. Stay focused and maintain your professional relationships to navigate through any difficulties.` },
            { id: 'money', title: 'Money', content: `Financially, 2026 looks promising for Taurus natives. The year will bring multiple sources of income, and your investments from previous years may start yielding returns. However, avoid risky investments especially during the second quarter. Focus on saving and building a strong financial foundation for the future.` },
            { id: 'remedies', title: 'Remedies', content: `1. Chant "Om Namo Narayana" daily 21 times.
2. Donate yellow items on Thursday.
3. Feed Brahmins or poor people on your birthday.
4. Wear yellow sapphire after consulting an astrologer.
5. Light a mustard oil lamp under a peepal tree on Saturdays.` },
          ].map((section) => (
            <div key={section.id} className="bg-[#1a1a1a] rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="w-full p-4 flex items-center justify-between"
              >
                <span className="text-white font-medium">{section.title}</span>
                {expandedSection === section.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {expandedSection === section.id && (
                <div className="px-4 pb-4">
                  <p className="text-gray-300 text-sm leading-relaxed">{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sign Selector */}
        <div className="mt-6 relative">
          <button 
            onClick={() => setShowSignDropdown(!showSignDropdown)}
            className="w-full p-4 bg-[#1a1a1a] rounded-xl flex items-center justify-between"
          >
            <span className="text-gray-400">Select Your Sign:</span>
            <span className="text-white">{selectedSign}</span>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </button>
          
          {showSignDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] rounded-xl border border-gray-700 z-50 max-h-60 overflow-y-auto">
              {zodiacSigns.map((sign) => (
                <button
                  key={sign}
                  onClick={() => { setSelectedSign(sign); setShowSignDropdown(false); }}
                  className="w-full p-3 text-left text-white hover:bg-[#2a2a2a] transition-colors"
                >
                  {sign}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Call/Chat Banner */}
        <div className="mt-6 p-4 bg-[#1a1a1a] rounded-xl">
          <p className="text-white font-semibold">Surrounded By Troubles? Get Instant Solutions from best Astrologers.</p>
          <div className="flex gap-3 mt-3">
            <button className="flex-1 py-2 bg-[#f5b800] text-black font-medium rounded-full flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </button>
            <button className="flex-1 py-2 bg-[#f5b800] text-black font-medium rounded-full flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Chat Now
            </button>
          </div>
        </div>

        {/* Brihat Kundli Banner */}
        <div className="mt-4 p-4 bg-blue-900/50 rounded-xl flex items-center gap-4">
          <div className="w-16 h-20 bg-white rounded-lg flex items-center justify-center">
            <span className="text-blue-900 font-bold text-xs text-center">Brihat<br/>Kundli</span>
          </div>
          <div>
            <p className="text-white font-semibold">Brihat Kundli</p>
            <p className="text-gray-400 text-sm">One Solution for all Problems</p>
          </div>
          <button className="ml-auto px-4 py-2 bg-[#f5b800] text-black text-sm font-semibold rounded">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );

  const renderAskQuestions = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="w-20 h-20 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4">
        <MessageCircle className="w-10 h-10 text-gray-500" />
      </div>
      <p className="text-white text-lg font-medium">Ask Your Question</p>
      <p className="text-gray-400 text-sm mt-2 text-center">Get personalized answers from our expert astrologers</p>
      <button 
        onClick={() => onNavigate('consult')}
        className="mt-6 px-8 py-3 bg-[#f5b800] text-black font-semibold rounded-full"
      >
        Ask Now
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-sm px-4 py-3">
        <div className="flex items-center justify-between">
          <button onClick={() => onNavigate('home')} className="p-2">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <span className="text-white font-semibold">Horoscope</span>
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
      <div className="px-4 py-2 flex gap-4 overflow-x-auto hide-scrollbar border-b border-gray-800 items-center">
        {[
          { id: 'daily', label: 'Daily' },
          { id: 'panchang', label: 'Panchang' },
          { id: 'weekly', label: 'Weekly' },
          { id: 'weeklylove', label: 'Weekly Love' },
          { id: 'monthly', label: 'Monthly' },
          { id: 'yearly', label: 'Yearly' },
          { id: 'ask', label: 'Ask Questions' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`whitespace-nowrap pb-2 text-sm font-medium transition-colors ${
              activeTab === tab.id ? 'text-[#f5b800] border-b-2 border-[#f5b800]' : 'text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
        {/* Three Dot Menu Button */}
        <button 
          onClick={() => setShowThreeDotMenu(!showThreeDotMenu)}
          className="p-2 flex-shrink-0"
        >
          <MoreVertical className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Three Dot Menu */}
      {showThreeDotMenu && (
        <div className="absolute top-24 right-4 bg-[#1a1a1a] rounded-xl border border-gray-700 z-50 py-2 w-48">
          <button onClick={() => { onNavigate('home'); setShowThreeDotMenu(false); }} className="w-full px-4 py-3 text-left text-white hover:bg-[#2a2a2a] flex items-center gap-3">
            <HomeIcon className="w-5 h-5" /> Home
          </button>
          <button onClick={() => { setActiveTab('daily'); setShowThreeDotMenu(false); }} className="w-full px-4 py-3 text-left text-white hover:bg-[#2a2a2a] flex items-center gap-3">
            <Calendar className="w-5 h-5" /> Today's
          </button>
          <button onClick={() => { setActiveTab('panchang'); setShowThreeDotMenu(false); }} className="w-full px-4 py-3 text-left text-white hover:bg-[#2a2a2a] flex items-center gap-3">
            <Clock className="w-5 h-5" /> Panchang
          </button>
          <button onClick={() => { setActiveTab('weekly'); setShowThreeDotMenu(false); }} className="w-full px-4 py-3 text-left text-white hover:bg-[#2a2a2a] flex items-center gap-3">
            <Calendar className="w-5 h-5" /> Weekly
          </button>
          <button onClick={() => { setActiveTab('weeklylove'); setShowThreeDotMenu(false); }} className="w-full px-4 py-3 text-left text-white hover:bg-[#2a2a2a] flex items-center gap-3">
            <Heart className="w-5 h-5" /> Weekly Love
          </button>
          <button onClick={() => { setActiveTab('monthly'); setShowThreeDotMenu(false); }} className="w-full px-4 py-3 text-left text-white hover:bg-[#2a2a2a] flex items-center gap-3">
            <Calendar className="w-5 h-5" /> Monthly
          </button>
          <button onClick={() => { setActiveTab('yearly'); setShowThreeDotMenu(false); }} className="w-full px-4 py-3 text-left text-white hover:bg-[#2a2a2a] flex items-center gap-3">
            <Calendar className="w-5 h-5" /> Yearly
          </button>
          <button onClick={() => { onNavigate('notifications'); setShowThreeDotMenu(false); }} className="w-full px-4 py-3 text-left text-white hover:bg-[#2a2a2a] flex items-center gap-3">
            <Bell className="w-5 h-5" /> Horoscope Notification
          </button>
          <button onClick={() => { setShowThreeDotMenu(false); }} className="w-full px-4 py-3 text-left text-white hover:bg-[#2a2a2a] flex items-center gap-3">
            <MessageCircle className="w-5 h-5" /> Feedback
          </button>
          <button onClick={() => { setShowThreeDotMenu(false); }} className="w-full px-4 py-3 text-left text-white hover:bg-[#2a2a2a] flex items-center gap-3">
            <Star className="w-5 h-5" /> Rate AstroGuide AI
          </button>
          <button onClick={() => { onNavigate('astroshop'); setShowThreeDotMenu(false); }} className="w-full px-4 py-3 text-left text-white hover:bg-[#2a2a2a] flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" /> Astro Shop
          </button>
          <button onClick={() => { onNavigate('consult'); setShowThreeDotMenu(false); }} className="w-full px-4 py-3 text-left text-white hover:bg-[#2a2a2a] flex items-center gap-3">
            <Users className="w-5 h-5" /> Ask Our Astrologer
          </button>
          <button onClick={() => { setShowThreeDotMenu(false); }} className="w-full px-4 py-3 text-left text-white hover:bg-[#2a2a2a] flex items-center gap-3">
            <Info className="w-5 h-5" /> About Us
          </button>
          <button onClick={() => { setShowThreeDotMenu(false); }} className="w-full px-4 py-3 text-left text-white hover:bg-[#2a2a2a] flex items-center gap-3">
            <Users className="w-5 h-5" /> Astrologer Registration
          </button>
        </div>
      )}

      {/* Content */}
      {activeTab === 'daily' && renderDailyHoroscope()}
      {activeTab === 'panchang' && renderPanchang()}
      {activeTab === 'weekly' && renderWeeklyHoroscope()}
      {activeTab === 'weeklylove' && renderWeeklyLoveHoroscope()}
      {activeTab === 'monthly' && renderMonthlyHoroscope()}
      {activeTab === 'yearly' && renderYearlyHoroscope()}
      {activeTab === 'ask' && renderAskQuestions()}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-gray-800 px-4 py-2" style={{ maxWidth: '430px', margin: '0 auto' }}>
        <div className="flex justify-around">
          {[
            { icon: HomeIcon, label: 'Home', page: 'home' },
            { icon: Sparkles, label: 'AI Astro', page: 'consult' },
            { icon: Video, label: 'Live', page: 'video' },
            { icon: MessageCircle, label: 'Ask', page: 'ask' },
            { icon: Clock, label: 'History', page: 'history' },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate(item.page as Page)}
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
