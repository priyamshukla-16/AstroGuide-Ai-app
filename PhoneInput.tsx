import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Facebook, Mail } from 'lucide-react';

interface PhoneInputProps {
  onConfirm: () => void;
  onUpdate: (phone: string) => void;
  phone: string;
}

export function PhoneInput({ onConfirm, onUpdate, phone }: PhoneInputProps) {
  const [inputValue, setInputValue] = useState(phone);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setInputValue(value);
    onUpdate(value);
  };

  const isValid = inputValue.length === 10;

  return (
    <div className="min-h-screen bg-black flex flex-col p-6">
      {/* Skip Button */}
      <div className="flex justify-end mb-8">
        <button className="px-4 py-2 border border-gray-600 rounded-full text-gray-400 text-sm">
          SKIP
        </button>
      </div>

      {/* Microphone Image */}
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 rounded-3xl overflow-hidden bg-gradient-to-br from-orange-400 to-red-500">
          <img 
            src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=300&h=300&fit=crop" 
            alt="Microphone"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Branding */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#f5b800] italic">astrogudie ai</h2>
      </div>

      {/* Phone Input */}
      <div className="mb-6">
        <div className="flex gap-3">
          {/* Country Code */}
          <button className="flex items-center gap-1 px-4 py-3 bg-[#1a1a1a] rounded-xl text-white">
            <span>+91</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {/* Phone Number Input */}
          <input
            type="tel"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter mobile number"
            className="flex-1 px-4 py-3 bg-[#1a1a1a] rounded-xl text-white placeholder-gray-500 input-focus border border-transparent"
          />
        </div>
      </div>

      {/* Confirm Button */}
      <button
        onClick={onConfirm}
        disabled={!isValid}
        className={`w-full py-4 rounded-xl font-semibold text-lg mb-6 transition-all duration-200 ${
          isValid
            ? 'bg-[#f5b800] text-black btn-hover'
            : 'bg-gray-700 text-gray-500 cursor-not-allowed'
        }`}
      >
        CONFIRM
      </button>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-gray-700"></div>
        <span className="text-gray-500 text-sm">OR CONTINUE WITH</span>
        <div className="flex-1 h-px bg-gray-700"></div>
      </div>

      {/* Truecaller Button */}
      <button className="w-full py-3 bg-[#0087ff] rounded-xl text-white font-semibold flex items-center justify-center gap-2 mb-6">
        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
          <span className="text-[#0087ff] text-xs font-bold">T</span>
        </div>
        Continue with Truecaller
      </button>

      {/* Social Login */}
      <div className="flex justify-center gap-4 mb-auto">
        <button className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center hover:bg-[#2a2a2a] transition-colors">
          <Facebook className="w-6 h-6 text-white" />
        </button>
        <button className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center hover:bg-[#2a2a2a] transition-colors">
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </button>
        <button className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center hover:bg-[#2a2a2a] transition-colors">
          <Mail className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Footer Links */}
      <div className="flex justify-center gap-6 mt-8">
        <button className="text-gray-500 text-sm hover:text-gray-400">PRIVACY POLICY</button>
        <button className="text-gray-500 text-sm hover:text-gray-400">TERMS OF SERVICE</button>
      </div>
    </div>
  );
}
