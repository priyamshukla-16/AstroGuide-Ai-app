import { ChevronLeft, User } from 'lucide-react';

interface GenderSelectionProps {
  onNext: () => void;
  onSelect: (gender: 'male' | 'female') => void;
  selectedGender: string;
}

export function GenderSelection({ onNext, onSelect, selectedGender }: GenderSelectionProps) {
  const isValid = selectedGender !== '';

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
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-white mb-8">What is your<br />gender?</h1>

        {/* Gender Options */}
        <div className="flex gap-4">
          {/* Male Option */}
          <button
            onClick={() => onSelect('male')}
            className={`flex-1 aspect-square bg-[#1a1a1a] rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-200 ${
              selectedGender === 'male'
                ? 'border-2 border-[#f5b800]'
                : 'border border-transparent hover:border-gray-600'
            }`}
          >
            <User className={`w-12 h-12 ${selectedGender === 'male' ? 'text-[#f5b800]' : 'text-gray-500'}`} />
            <span className={`text-sm ${selectedGender === 'male' ? 'text-[#f5b800]' : 'text-gray-400'}`}>MALE</span>
          </button>

          {/* Female Option */}
          <button
            onClick={() => onSelect('female')}
            className={`flex-1 aspect-square bg-[#1a1a1a] rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-200 ${
              selectedGender === 'female'
                ? 'border-2 border-[#f5b800]'
                : 'border border-transparent hover:border-gray-600'
            }`}
          >
            <User className={`w-12 h-12 ${selectedGender === 'female' ? 'text-[#f5b800]' : 'text-gray-500'}`} />
            <span className={`text-sm ${selectedGender === 'female' ? 'text-[#f5b800]' : 'text-gray-400'}`}>FEMALE</span>
          </button>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-[#f5b800]"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
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
