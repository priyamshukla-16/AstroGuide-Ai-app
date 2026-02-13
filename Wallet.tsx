import { useState } from 'react';
import { ChevronLeft, FileText } from 'lucide-react';

interface WalletProps {
  onBack: () => void;
}

const rechargePacks = [
  { amount: 50, bonus: 'Get ₹75', extra: null },
  { amount: 100, bonus: 'Get ₹200', extra: null },
  { amount: 199, bonus: 'Get ₹300', extra: null },
  { amount: 300, bonus: '₹300', extra: '5% Extra' },
  { amount: 500, bonus: '₹500', extra: '50% Extra' },
  { amount: 1000, bonus: '₹1,000', extra: '9% Extra' },
  { amount: 2000, bonus: '₹2,000', extra: '11% Extra' },
  { amount: 3000, bonus: '₹3,000', extra: '12% Extra' },
  { amount: 5000, bonus: '₹5,000', extra: '14% Extra' },
  { amount: 10000, bonus: '₹10,000', extra: '16% Extra' },
  { amount: 15000, bonus: '₹15,000', extra: '17% Extra' },
  { amount: 20000, bonus: '₹20,000', extra: '18% Extra' },
  { amount: 50000, bonus: '₹50,000', extra: '20% Extra' },
  { amount: 100000, bonus: '₹1,00,000', extra: '22% Extra' },
];

export function Wallet({ onBack }: WalletProps) {
  const [customAmount, setCustomAmount] = useState('');
  const [showError, setShowError] = useState(false);

  const handleProceed = () => {
    const amount = parseInt(customAmount);
    if (amount < 50) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setCustomAmount(value);
    setShowError(false);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-sm px-4 py-3 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <span className="text-white font-semibold text-lg">Select Recharge Pack</span>
          </div>
          <button className="p-2">
            <FileText className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Balance */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-400">Available Balance</span>
          <span className="text-white text-2xl font-bold">₹ 0.00</span>
        </div>

        {/* Custom Amount Input */}
        <div className="bg-[#1a1a1a] rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">Enter your amount</span>
            <ChevronLeft className="w-4 h-4 text-gray-500 rotate-270" />
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              value={customAmount}
              onChange={handleInputChange}
              placeholder="Minimum recharge ₹50"
              className="flex-1 px-4 py-3 bg-black rounded-xl text-white placeholder-gray-500 input-focus border border-transparent"
            />
            <button
              onClick={handleProceed}
              className="px-6 py-3 bg-[#f5b800] text-black font-semibold rounded-xl btn-hover"
            >
              Proceed
            </button>
          </div>
        </div>

        {/* Error Message */}
        {showError && (
          <div className="bg-[#f5b800] text-black px-4 py-3 rounded-xl mb-4 text-center font-medium">
            Minimum recharge amount should be ₹50
          </div>
        )}

        {/* Recharge Packs Grid */}
        <div className="grid grid-cols-3 gap-3">
          {rechargePacks.map((pack) => (
            <button
              key={pack.amount}
              className="bg-[#1a1a1a] rounded-xl p-3 flex flex-col items-center hover:bg-[#2a2a2a] transition-colors"
            >
              {pack.extra && (
                <span className="text-[#f5b800] text-xs font-medium mb-1">{pack.extra}</span>
              )}
              <span className="text-white font-semibold">{pack.bonus}</span>
              <span className="text-gray-400 text-sm">₹ {pack.amount.toLocaleString()}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-gray-800 px-4 py-2" style={{ maxWidth: '430px', margin: '0 auto' }}>
        <div className="flex justify-around">
          {[
            { label: 'Home' },
            { label: 'AI Astro' },
            { label: 'Live' },
            { label: 'Ask' },
            { label: 'History' },
          ].map((item) => (
            <button
              key={item.label}
              className="flex flex-col items-center gap-1 p-2 text-gray-400"
            >
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
