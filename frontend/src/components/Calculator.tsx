'use client';

import { useCalcStore } from '@/store/calcStore';
import { motion } from 'framer-motion';

const BUTTONS = [
  { label: 'AC', type: 'action', action: 'clear' },
  { label: 'DEL', type: 'action', action: 'delete' },
  { label: '%', type: 'operator', val: '%' },
  { label: '/', type: 'operator', val: '/' },
  
  { label: '7', type: 'num', val: '7' },
  { label: '8', type: 'num', val: '8' },
  { label: '9', type: 'num', val: '9' },
  { label: '*', type: 'operator', val: '*' },
  
  { label: '4', type: 'num', val: '4' },
  { label: '5', type: 'num', val: '5' },
  { label: '6', type: 'num', val: '6' },
  { label: '-', type: 'operator', val: '-' },
  
  { label: '1', type: 'num', val: '1' },
  { label: '2', type: 'num', val: '2' },
  { label: '3', type: 'num', val: '3' },
  { label: '+', type: 'operator', val: '+' },
  
  { label: '0', type: 'num', val: '0', className: 'col-span-2' },
  { label: '.', type: 'num', val: '.' },
  { label: '=', type: 'action', action: 'calc', className: 'bg-[#0070F3] hover:bg-[#005bb5] text-white border-transparent' },
];

export function Calculator() {
  const { displayValue, appendValue, clearDisplay, deleteLast, calculate } = useCalcStore();

  const handlePress = (btn: any) => {
    if (btn.type === 'num' || btn.type === 'operator') {
      appendValue(btn.val);
    } else if (btn.type === 'action') {
      if (btn.action === 'clear') clearDisplay();
      if (btn.action === 'delete') deleteLast();
      if (btn.action === 'calc') calculate();
    }
  };

  return (
    <div className="w-full max-w-sm flex flex-col gap-4 font-mono">
      {/* Display Screen */}
      <div className="bg-[#111] border border-[#333] rounded-sm p-4 h-24 flex flex-col justify-end items-end overflow-hidden relative">
        <div className="absolute top-2 left-2 flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
        <motion.div 
          key={displayValue}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="text-4xl text-white tracking-tight truncate w-full text-right"
        >
          {displayValue || '0'}
        </motion.div>
      </div>

      {/* Keypad */}
      <div className="grid grid-cols-4 gap-2">
        {BUTTONS.map((btn, i) => (
          <button
            key={i}
            onClick={() => handlePress(btn)}
            className={`
              h-14 rounded-sm flex items-center justify-center text-lg transition-colors border border-[#222]
              active:scale-95 duration-75
              ${btn.className || ''}
              ${btn.type === 'num' ? 'bg-[#111] text-[#ccc] hover:bg-[#222] hover:border-[#444]' : ''}
              ${btn.type === 'operator' ? 'bg-[#1A1A1A] text-[#0070F3] hover:bg-[#2A2A2A] hover:border-[#0070F3]' : ''}
              ${btn.action === 'clear' || btn.action === 'delete' ? 'text-red-500 bg-[#1A1A1A] hover:bg-[#2A2A2A] hover:border-red-900' : ''}
            `}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}
