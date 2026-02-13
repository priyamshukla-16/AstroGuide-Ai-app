import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProfessionStatusProps {
  onStart: () => void;
  onUpdate: (data: { profession: string; maritalStatus: string }) => void;
  profession: string;
  maritalStatus: string;
}

const professions = [
  'Not Specified',
  'Businessman',
  'Student',
  'Homemaker',
  'Employee',
  'Retired',
];

const maritalStatuses = [
  'Not Specified',
  'Single',
  'Married',
  'Divorced',
  'Widowed',
];

export function ProfessionStatus({ onStart, onUpdate, profession, maritalStatus }: ProfessionStatusProps) {
  const [showProfessions, setShowProfessions] = useState(false);
  const [showStatuses, setShowStatuses] = useState(false);
  const [selectedProfession, setSelectedProfession] = useState(profession);
  const [selectedStatus, setSelectedStatus] = useState(maritalStatus);

  const handleProfessionSelect = (prof: string) => {
    setSelectedProfession(prof);
    onUpdate({ profession: prof, maritalStatus: selectedStatus });
    setShowProfessions(false);
  };

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(status);
    onUpdate({ profession: selectedProfession, maritalStatus: status });
    setShowStatuses(false);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col p-6">
      {/* Content */}
      <div className="flex-1">
        {/* Profession Dropdown */}
        <div className="mb-6">
          <label className="text-gray-500 text-sm mb-2 block">PROFESSION</label>
          <div className="relative">
            <button
              onClick={() => {
                setShowProfessions(!showProfessions);
                setShowStatuses(false);
              }}
              className="w-full flex items-center justify-between p-4 bg-[#1a1a1a] rounded-xl text-white"
            >
              <span>{selectedProfession}</span>
              {showProfessions ? <ChevronUp className="w-5 h-5 text-[#f5b800]" /> : <ChevronDown className="w-5 h-5 text-[#f5b800]" />}
            </button>

            {/* Profession Options */}
            {showProfessions && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] rounded-xl overflow-hidden z-10 border border-gray-700">
                {professions.map((prof) => (
                  <button
                    key={prof}
                    onClick={() => handleProfessionSelect(prof)}
                    className={`w-full p-4 text-left transition-colors ${
                      selectedProfession === prof
                        ? 'bg-[#f5b800] text-black'
                        : 'text-white hover:bg-[#2a2a2a]'
                    }`}
                  >
                    {prof}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Marital Status Dropdown */}
        <div className="mb-6">
          <label className="text-gray-500 text-sm mb-2 block">MARITAL STATUS</label>
          <div className="relative">
            <button
              onClick={() => {
                setShowStatuses(!showStatuses);
                setShowProfessions(false);
              }}
              className="w-full flex items-center justify-between p-4 bg-[#1a1a1a] rounded-xl text-white"
            >
              <span>{selectedStatus}</span>
              {showStatuses ? <ChevronUp className="w-5 h-5 text-[#f5b800]" /> : <ChevronDown className="w-5 h-5 text-[#f5b800]" />}
            </button>

            {/* Status Options */}
            {showStatuses && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] rounded-xl overflow-hidden z-10 border border-gray-700">
                {maritalStatuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => handleStatusSelect(status)}
                    className={`w-full p-4 text-left transition-colors ${
                      selectedStatus === status
                        ? 'bg-[#f5b800] text-black'
                        : 'text-white hover:bg-[#2a2a2a]'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-[#f5b800]"></div>
      </div>

      {/* Start Journey Button */}
      <button
        onClick={onStart}
        className="w-full py-4 rounded-xl font-semibold text-lg bg-[#f5b800] text-black btn-hover"
      >
        START JOURNEY
      </button>
    </div>
  );
}
