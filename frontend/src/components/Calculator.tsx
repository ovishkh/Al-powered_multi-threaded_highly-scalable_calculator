'use client';

import { useCalcStore } from '@/store/calcStore';
import { motion } from 'framer-motion';
import { Delete, Divide, Minus, Plus, X, Equal } from 'lucide-react';

const BUTTONS = [
  { label: 'AC', type: 'action', action: 'clear' },
  { label: 'DEL', type: 'action', action: 'delete' },
  { label: '%', type: 'operator', val: '%' },
  { label: <Divide size={20} />, type: 'operator', val: '/' },
  
  { label: '7', type: 'num', val: '7' },
  { label: '8', type: 'num', val: '8' },
  { label: '9', type: 'num', val: '9' },
  { label: <X size={20} />, type: 'operator', val: '*' },
  
  { label: '4', type: 'num', val: '4' },
  { label: '5', type: 'num', val: '5' },
  { label: '6', type: 'num', val: '6' },
  { label: <Minus size={20} />, type: 'operator', val: '-' },
  
  { label: '1', type: 'num', val: '1' },
  { label: '2', type: 'num', val: '2' },
  { label: '3', type: 'num', val: '3' },
  { label: <Plus size={20} />, type: 'operator', val: '+' },
  
  { label: '0', type: 'num', val: '0', className: 'col-span-2' },
  { label: '.', type: 'num', val: '.' },
  { label: <Equal size={20} />, type: 'action', action: 'calc', className: 'bg-blue-600 hover:bg-blue-500 text-white' },
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
    <div className="glass w-full max-w-md rounded-[2.5rem] p-8 flex flex-col gap-6 shadow-2xl">
      {/* Display Screen */}
      <div className="bg-black/40 border border-white/5 rounded-3xl p-6 h-32 flex flex-col justify-end items-end overflow-hidden">
        <motion.div 
          key={displayValue}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-light tracking-tight truncate w-full text-right"
        >
          {displayValue || '0'}
        </motion.div>
      </div>

      {/* Keypad */}
      <div className="grid grid-cols-4 gap-4">
        {BUTTONS.map((btn, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handlePress(btn)}
            className={`
              h-16 rounded-2xl flex items-center justify-center text-xl font-medium transition-colors
              ${btn.className || ''}
              ${btn.type === 'num' ? 'bg-white/5 hover:bg-white/10' : ''}
              ${btn.type === 'operator' ? 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30' : ''}
              ${btn.action === 'clear' || btn.action === 'delete' ? 'text-red-400 bg-red-500/10 hover:bg-red-500/20' : ''}
            `}
          >
            {btn.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
