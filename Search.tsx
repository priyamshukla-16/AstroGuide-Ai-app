import { useState } from 'react';
import { ChevronLeft, X } from 'lucide-react';

interface SearchProps {
  onBack: () => void;
}

const searchItems = [
  'Kundli',
  'Kundli Milan',
  'Dainik Panchang',
  'Ask A Question',
  'KP System',
  'Lal Kitab',
  'AstroGuide Patrika',
  'Jyotish Sikhe',
  'Shakshik Rashifal 2026',
  'Arthik Rashifal 2026',
  'Lalkitab Horoscope 2026',
  'Lal Kitab Rashifal 2026',
  'Ank Jyotish 2026',
  'Namkaran Muhurat 2026',
  'Karnavedha Muhurat 2026',
  'Ketu Transit 2026',
  'Ketu Gochor 2026',
  '2026 mein Vakri Grah',
  '2026 mein Vakri Budh',
  'Masik Report',
  'Dainik Report',
  'Tyohar',
  'Choghadia',
  'Anya Calendar',
  'Daily horoscope',
  'Weekly horoscope',
  'Weekly Love',
  'Monthly horoscope',
  'Yearly horoscope',
  'Yantras',
  'Yantra',
  'Numerology',
  'Daily Notes',
  'Vidyarambh Muhurat 2026',
  'Surya Grahan 2026',
  'Mercury Retrograde 2026',
  'Monthly Report',
  'Daily Report',
  'Lagna Bhavishyavani',
  'Baby Names',
  'Lal Kitab Upay',
  'Transit Today',
  'Monthly Calendar',
  'Yearly Vrat',
];

export function Search({ onBack }: SearchProps) {
  const [query, setQuery] = useState('');

  const filteredItems = searchItems.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-sm px-4 py-3 border-b border-gray-800">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full px-4 py-2 bg-[#1a1a1a] rounded-xl text-white placeholder-gray-500 input-focus border border-transparent"
              autoFocus
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="px-4 py-2">
        {query && (
          <div className="text-gray-400 text-sm mb-4">
            Showing results for "{query}"
          </div>
        )}
        <div className="space-y-1">
          {filteredItems.map((item, idx) => (
            <button
              key={idx}
              className="w-full text-left py-3 px-4 text-white hover:bg-[#1a1a1a] rounded-xl transition-colors border-b border-gray-800 last:border-0"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
