import { useState } from 'react';
import { ChevronLeft, Search } from 'lucide-react';

interface PlaceOfBirthProps {
  onNext: () => void;
  onSelect: (place: string) => void;
  selectedPlace: string;
}

const cities = [
  { name: 'Mumbai, Maharashtra', country: 'INDIA' },
  { name: 'Delhi, NCR', country: 'INDIA' },
  { name: 'Bangalore, Karnataka', country: 'INDIA' },
  { name: 'Hyderabad, Telangana', country: 'INDIA' },
  { name: 'Chennai, Tamil Nadu', country: 'INDIA' },
  { name: 'Pune, Maharashtra', country: 'INDIA' },
  { name: 'Ahmedabad, Gujarat', country: 'INDIA' },
  { name: 'Kolkata, West Bengal', country: 'INDIA' },
  { name: 'Surat, Gujarat', country: 'INDIA' },
  { name: 'Jaipur, Rajasthan', country: 'INDIA' },
  { name: 'Lucknow, Uttar Pradesh', country: 'INDIA' },
  { name: 'Kanpur, Uttar Pradesh', country: 'INDIA' },
  { name: 'Nagpur, Maharashtra', country: 'INDIA' },
  { name: 'Indore, Madhya Pradesh', country: 'INDIA' },
  { name: 'Thane, Maharashtra', country: 'INDIA' },
  { name: 'Bhopal, Madhya Pradesh', country: 'INDIA' },
  { name: 'Visakhapatnam, Andhra Pradesh', country: 'INDIA' },
  { name: 'Vadodara, Gujarat', country: 'INDIA' },
  { name: 'Firozabad, Uttar Pradesh', country: 'INDIA' },
  { name: 'Ludhiana, Punjab', country: 'INDIA' },
];

export function PlaceOfBirth({ onNext, onSelect, selectedPlace }: PlaceOfBirthProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isValid = selectedPlace !== '';

  return (
    <div className="min-h-screen bg-black flex flex-col p-6">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center">
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <span className="flex-1 text-center text-gray-400 text-sm tracking-wider">YOUR DETAILS</span>
        <div className="w-10"></div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h1 className="text-3xl font-bold text-white mb-6">Where were<br />you born?</h1>

        {/* Search Input */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search city name"
            className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] rounded-xl text-white placeholder-gray-500 input-focus border border-transparent"
          />
        </div>

        {/* City List */}
        <div className="flex-1 overflow-y-auto hide-scrollbar -mx-6 px-6">
          <div className="space-y-2 pb-24">
            {filteredCities.map((city) => (
              <button
                key={city.name}
                onClick={() => onSelect(city.name)}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-200 ${
                  selectedPlace === city.name
                    ? 'bg-[#f5b800]/20 border border-[#f5b800]'
                    : 'bg-[#1a1a1a] hover:bg-[#2a2a2a]'
                }`}
              >
                <span className={`text-left ${selectedPlace === city.name ? 'text-[#f5b800]' : 'text-white'}`}>
                  {city.name}
                </span>
                <span className="text-gray-500 text-sm">{city.country}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-[#f5b800]"></div>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={!isValid}
        className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
          isValid
            ? 'bg-[#f5b800] text-black btn-hover'
            : 'bg-gray-700 text-gray-500 cursor-not-allowed'
        }`}
      >
        NEXT STEP
      </button>
    </div>
  );
}
