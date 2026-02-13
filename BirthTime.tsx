import { useState, useRef } from 'react';
import { ChevronLeft } from 'lucide-react';

interface BirthTimeProps {
  onNext: () => void;
  onUpdate: (birthTime: { hour: string; minute: string; period: string }) => void;
  birthTime: { hour: string; minute: string; period: string };
}

const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));
const periods = ['AM', 'PM'];

export function BirthTime({ onNext, onUpdate, birthTime }: BirthTimeProps) {
  const [selectedHour, setSelectedHour] = useState(birthTime.hour);
  const [selectedMinute, setSelectedMinute] = useState(birthTime.minute);
  const [selectedPeriod, setSelectedPeriod] = useState(birthTime.period);
  const [dontKnow, setDontKnow] = useState(false);

  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const periodRef = useRef<HTMLDivElement>(null);

  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>, items: string[], setter: (val: string) => void) => {
    if (!ref.current) return;
    const scrollTop = ref.current.scrollTop;
    const itemHeight = 48;
    const index = Math.round(scrollTop / itemHeight);
    const clampedIndex = Math.max(0, Math.min(index, items.length - 1));
    const newValue = items[clampedIndex];
    setter(newValue);
    onUpdate({ 
      hour: selectedHour, 
      minute: selectedMinute, 
      period: selectedPeriod,
      [items === hours ? 'hour' : items === minutes ? 'minute' : 'period']: newValue 
    });
  };

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
        <h1 className="text-3xl font-bold text-white mb-8">Enter your<br />birth time</h1>

        {/* Scroll Pickers */}
        <div className="flex gap-4 h-48 mb-6">
          {/* Hour Picker */}
          <div className="flex-1 relative">
            <div
              ref={hourRef}
              className="h-full overflow-y-auto scroll-picker hide-scrollbar"
              onScroll={() => handleScroll(hourRef, hours, setSelectedHour)}
            >
              <div className="h-20"></div>
              {hours.map((hour) => (
                <div
                  key={hour}
                  className={`h-12 flex items-center justify-center text-lg transition-all duration-200 ${
                    selectedHour === hour ? 'text-[#f5b800] font-bold text-xl' : 'text-gray-500'
                  }`}
                >
                  {hour}
                </div>
              ))}
              <div className="h-20"></div>
            </div>
            {/* Center highlight */}
            <div className="absolute top-1/2 left-0 right-0 h-12 -translate-y-1/2 border-y border-gray-700 pointer-events-none"></div>
          </div>

          {/* Minute Picker */}
          <div className="flex-1 relative">
            <div
              ref={minuteRef}
              className="h-full overflow-y-auto scroll-picker hide-scrollbar"
              onScroll={() => handleScroll(minuteRef, minutes, setSelectedMinute)}
            >
              <div className="h-20"></div>
              {minutes.map((minute) => (
                <div
                  key={minute}
                  className={`h-12 flex items-center justify-center text-lg transition-all duration-200 ${
                    selectedMinute === minute ? 'text-[#f5b800] font-bold text-xl' : 'text-gray-500'
                  }`}
                >
                  {minute}
                </div>
              ))}
              <div className="h-20"></div>
            </div>
            {/* Center highlight */}
            <div className="absolute top-1/2 left-0 right-0 h-12 -translate-y-1/2 border-y border-gray-700 pointer-events-none"></div>
          </div>

          {/* Period Picker */}
          <div className="flex-1 relative">
            <div
              ref={periodRef}
              className="h-full overflow-y-auto scroll-picker hide-scrollbar"
              onScroll={() => handleScroll(periodRef, periods, setSelectedPeriod)}
            >
              <div className="h-20"></div>
              {periods.map((period) => (
                <div
                  key={period}
                  className={`h-12 flex items-center justify-center text-lg transition-all duration-200 ${
                    selectedPeriod === period ? 'text-[#f5b800] font-bold text-xl' : 'text-gray-500'
                  }`}
                >
                  {period}
                </div>
              ))}
              <div className="h-20"></div>
            </div>
            {/* Center highlight */}
            <div className="absolute top-1/2 left-0 right-0 h-12 -translate-y-1/2 border-y border-gray-700 pointer-events-none"></div>
          </div>
        </div>

        {/* Checkbox */}
        <label className="flex items-center gap-3 cursor-pointer">
          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
            dontKnow ? 'bg-[#f5b800] border-[#f5b800]' : 'border-gray-600'
          }`}>
            {dontKnow && <span className="text-black text-sm">✓</span>}
          </div>
          <input
            type="checkbox"
            checked={dontKnow}
            onChange={(e) => setDontKnow(e.target.checked)}
            className="hidden"
          />
          <span className="text-gray-400 text-sm">I don't know my exact birth time</span>
        </label>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-[#f5b800]"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="w-full py-4 rounded-xl font-semibold text-lg bg-[#f5b800] text-black btn-hover"
      >
        NEXT STEP
      </button>
    </div>
  );
}
