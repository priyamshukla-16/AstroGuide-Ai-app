import { Sparkles, Star } from 'lucide-react';

interface WelcomeScreenProps {
  name: string;
  onStart: () => void;
}

export function WelcomeScreen({ name, onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      {/* Star Icon */}
      <div className="mb-8">
        <div className="w-20 h-20 relative">
          <Star className="w-full h-full text-[#f5b800] fill-[#f5b800]" />
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-[#f5b800]" />
        </div>
      </div>

      {/* Welcome Text */}
      <h1 className="text-3xl font-bold text-white mb-4 text-center">
        Welcome, {name || 'User'}!
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-center mb-2">
        Your astrological journey begins now.
      </p>
      <p className="text-[#f5b800] text-center mb-12">
        AstroGuide AI is ready to guide you.
      </p>

      {/* Start Button */}
      <button
        onClick={onStart}
        className="px-12 py-4 bg-[#f5b800] text-black font-semibold rounded-full btn-hover"
      >
        Start Your Journey
      </button>
    </div>
  );
}
