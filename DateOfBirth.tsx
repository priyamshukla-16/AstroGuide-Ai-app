import { useState, useRef, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';

interface DateOfBirthProps {
  onNext: () => void;
  onUpdate: (dob: { month: string; day: string; year: string }) => void;
  dob: { month: string; day: string; year: string };
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
const years = Array.from({ length: 77 }, (_, i) => String(2026 - i));

export function DateOfBirth({ onNext, onUpdate, dob }: DateOfBirthProps) {
  const [selectedMonth, setSelectedMonth] = useState(dob.month);
  const [selectedDay, setSelectedDay] = useState(dob.day);
  const [selectedYear, setSelectedYear] = useState(dob.year);
  const [dontKnow, setDontKnow] = useState(false);

  const monthRef = useRef<HTMLDivElement>(null);
  const dayRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onUpdate({ month: selectedMonth, day: selectedDay, year: selectedYear });
  }, [selectedMonth, selectedDay, selectedYear]);

  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>, items: string[], setter: (val: string) => void) => {
    if (!ref.current) return;
    const scrollTop = ref.current.scrollTop;
    const itemHeight = 48;
    const index = Math.round(scrollTop / itemHeight);
    const clampedIndex = Math.max(0, Math.min(index, items.length - 1));
    setter(items[clampedIndex]);
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
        <h1 className="text-3xl font-bold text-white mb-8">Enter your<br />date of birth</h1>

        {/* Scroll Pickers */}
        <div className="flex gap-4 h-48 mb-6">
          {/* Month Picker */}
          <div className="flex-1 relative">
            <div
              ref={monthRef}
              className="h-full overflow-y-auto scroll-picker hide-scrollbar"
              onScroll={() => handleScroll(monthRef, months, setSelectedMonth)}
            >
              <div className="h-20"></div>
              {months.map((month) => (
                <div
                  key={month}
                  className={`h-12 flex items-center justify-center text-lg transition-all duration-200 ${
                    selectedMonth === month ? 'text-[#f5b800] font-bold text-xl' : 'text-gray-500'
                  }`}
                >
                  {month}
                </div>
              ))}
              <div className="h-20"></div>
            </div>
            {/* Center highlight */}
            <div className="absolute top-1/2 left-0 right-0 h-12 -translate-y-1/2 border-y border-gray-700 pointer-events-none"></div>
          </div>

          {/* Day Picker */}
          <div className="flex-1 relative">
            <div
              ref={dayRef}
              className="h-full overflow-y-auto scroll-picker hide-scrollbar"
              onScroll={() => handleScroll(dayRef, days, setSelectedDay)}
            >
              <div className="h-20"></div>
              {days.map((day) => (
                <div
                  key={day}
                  className={`h-12 flex items-center justify-center text-lg transition-all duration-200 ${
                    selectedDay === day ? 'text-[#f5b800] font-bold text-xl' : 'text-gray-500'
                  }`}
                >
                  {day}
                </div>
              ))}
              <div className="h-20"></div>
            </div>
            {/* Center highlight */}
            <div className="absolute top-1/2 left-0 right-0 h-12 -translate-y-1/2 border-y border-gray-700 pointer-events-none"></div>
          </div>

          {/* Year Picker */}
          <div className="flex-1 relative">
            <div
              ref={yearRef}
              className="h-full overflow-y-auto scroll-picker hide-scrollbar"
              onScroll={() => handleScroll(yearRef, years, setSelectedYear)}
            >
              <div className="h-20"></div>
              {years.map((year) => (
                <div
                  key={year}
                  className={`h-12 flex items-center justify-center text-lg transition-all duration-200 ${
                    selectedYear === year ? 'text-[#f5b800] font-bold text-xl' : 'text-gray-500'
                  }`}
                >
                  {year}
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
          <span className="text-gray-400 text-sm">I don't know my exact birth date</span>
        </label>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-[#f5b800]"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
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
