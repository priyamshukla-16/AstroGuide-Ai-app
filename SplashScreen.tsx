import { Sparkles } from 'lucide-react';

export function SplashScreen() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Zodiac Wheel Logo */}
      <div className="relative mb-8">
        <div className="w-32 h-32 relative animate-pulse-slow">
          {/* Outer circle */}
          <div className="absolute inset-0 border-2 border-dashed border-[#f5b800]/50 rounded-full animate-spin-slow"></div>
          {/* Inner circle */}
          <div className="absolute inset-4 border border-[#f5b800]/70 rounded-full"></div>
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-[#f5b800] rounded-full"></div>
          </div>
          {/* Spokes */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-[45%] h-[1px] bg-[#f5b800]/60 origin-left"
              style={{ transform: `rotate(${i * 45}deg)` }}
            />
          ))}
          {/* Dots on circle */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#f5b800] rounded-full"
              style={{
                top: `${50 - 42 * Math.cos((i * 45 * Math.PI) / 180)}%`,
                left: `${50 + 42 * Math.sin((i * 45 * Math.PI) / 180)}%`,
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Brand Name */}
      <div className="flex items-center gap-2">
        <h1 className="text-3xl font-bold text-[#f5b800]">AstroGuide AI</h1>
        <Sparkles className="w-6 h-6 text-[#f5b800]" />
      </div>

      {/* Constellation Pattern at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
          {/* Left constellation */}
          <g stroke="#f5b800" strokeWidth="0.5" fill="none" opacity="0.4">
            <line x1="20" y1="80" x2="50" y2="60" />
            <line x1="50" y1="60" x2="80" y2="70" />
            <line x1="80" y1="70" x2="100" y2="50" />
            <circle cx="20" cy="80" r="2" fill="#f5b800" />
            <circle cx="50" cy="60" r="2" fill="#f5b800" />
            <circle cx="80" cy="70" r="2" fill="#f5b800" />
            <circle cx="100" cy="50" r="2" fill="#f5b800" />
          </g>
          {/* Middle constellation */}
          <g stroke="#f5b800" strokeWidth="0.5" fill="none" opacity="0.4">
            <line x1="150" y1="90" x2="170" y2="70" />
            <line x1="170" y1="70" x2="200" y2="80" />
            <line x1="200" y1="80" x2="220" y2="60" />
            <circle cx="150" cy="90" r="2" fill="#f5b800" />
            <circle cx="170" cy="70" r="2" fill="#f5b800" />
            <circle cx="200" cy="80" r="2" fill="#f5b800" />
            <circle cx="220" cy="60" r="2" fill="#f5b800" />
          </g>
          {/* Right constellation */}
          <g stroke="#f5b800" strokeWidth="0.5" fill="none" opacity="0.4">
            <line x1="280" y1="85" x2="310" y2="65" />
            <line x1="310" y1="65" x2="340" y2="75" />
            <line x1="340" y1="75" x2="370" y2="55" />
            <circle cx="280" cy="85" r="2" fill="#f5b800" />
            <circle cx="310" cy="65" r="2" fill="#f5b800" />
            <circle cx="340" cy="75" r="2" fill="#f5b800" />
            <circle cx="370" cy="55" r="2" fill="#f5b800" />
          </g>
        </svg>
      </div>
    </div>
  );
}
