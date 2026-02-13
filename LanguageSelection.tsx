import { useState } from 'react';
import { Check } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  color: string;
  image: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', color: 'from-orange-500 to-yellow-500', image: 'https://images.unsplash.com/photo-1529651795107-e5a141e34843?w=300&h=200&fit=crop' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', color: 'from-orange-400 to-green-500', image: 'https://images.unsplash.com/photo-1561361058-4c1e8c301ced?w=300&h=200&fit=crop' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', color: 'from-blue-500 to-purple-500', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7e74208?w=300&h=200&fit=crop' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳', color: 'from-green-500 to-teal-500', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳', color: 'from-yellow-500 to-orange-500', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=300&h=200&fit=crop' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳', color: 'from-pink-500 to-red-500', image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=300&h=200&fit=crop' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳', color: 'from-purple-500 to-indigo-500', image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=300&h=200&fit=crop' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳', color: 'from-red-500 to-pink-500', image: 'https://images.unsplash.com/photo-1561361058-4c1e8c301ced?w=300&h=200&fit=crop' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳', color: 'from-teal-500 to-cyan-500', image: 'https://images.unsplash.com/photo-1606293459339-fed7f6d4c6c0?w=300&h=200&fit=crop' },
];

interface LanguageSelectionProps {
  onContinue: () => void;
  onSelect: (language: string) => void;
  selectedLanguage: string;
}

export function LanguageSelection({ onContinue, onSelect, selectedLanguage }: LanguageSelectionProps) {
  const [selected, setSelected] = useState(selectedLanguage);

  const handleSelect = (langName: string) => {
    setSelected(langName);
    onSelect(langName);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Select Language</h1>
        <p className="text-gray-400">Choose your preferred language</p>
      </div>

      {/* Language Grid - Scrollable */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <div className="grid grid-cols-2 gap-4 pb-24">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.name)}
              className={`relative rounded-2xl overflow-hidden aspect-[4/3] transition-all duration-200 ${
                selected === lang.name
                  ? 'ring-2 ring-[#f5b800] scale-[1.02]'
                  : 'hover:scale-[1.02]'
              }`}
            >
              {/* Background Image */}
              <img 
                src={lang.image} 
                alt={lang.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <span className="text-white text-lg font-semibold">{lang.nativeName}</span>
                <span className="text-white/70 text-sm">{lang.name}</span>
              </div>

              {/* Checkmark for selected */}
              {selected === lang.name && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-[#f5b800] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-black" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black to-transparent" style={{ maxWidth: '430px', margin: '0 auto' }}>
        <button
          onClick={onContinue}
          disabled={!selected}
          className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-200 ${
            selected
              ? 'bg-[#f5b800] text-black btn-hover'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
