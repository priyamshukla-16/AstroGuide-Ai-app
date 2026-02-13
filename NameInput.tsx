import { ChevronLeft } from 'lucide-react';

interface NameInputProps {
  onNext: () => void;
  onUpdate: (name: string) => void;
  name: string;
}

export function NameInput({ onNext, onUpdate, name }: NameInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate(e.target.value);
  };

  const isValid = name.trim().length > 0;

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
        <p className="text-[#f5b800] mb-2">Hello there!</p>
        <h1 className="text-3xl font-bold text-white mb-8">What is your<br />name?</h1>

        {/* Name Input */}
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full px-4 py-4 bg-[#1a1a1a] rounded-xl text-white placeholder-gray-500 input-focus border border-transparent text-lg"
        />
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-[#f5b800]"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
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
