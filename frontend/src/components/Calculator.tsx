'use client';

import { useCalcStore, CalcMode } from '@/store/calcStore';
import { motion } from 'framer-motion';

const STANDARD_BUTTONS = [
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

const SCIENTIFIC_BUTTONS = [
  { label: 'sin', type: 'operator', val: 'Math.sin(' },
  { label: 'cos', type: 'operator', val: 'Math.cos(' },
  { label: 'tan', type: 'operator', val: 'Math.tan(' },
  { label: 'log', type: 'operator', val: 'Math.log10(' },
  
  { label: 'ln', type: 'operator', val: 'Math.log(' },
  { label: 'π', type: 'num', val: 'Math.PI' },
  { label: 'e', type: 'num', val: 'Math.E' },
  { label: '^', type: 'operator', val: '**' },
  
  { label: '(', type: 'operator', val: '(' },
  { label: ')', type: 'operator', val: ')' },
  { label: '√', type: 'operator', val: 'Math.sqrt(' },
  { label: '!', type: 'operator', val: '!' },
  
  ...STANDARD_BUTTONS
];

const PROGRAMMER_BUTTONS = [
  { label: 'AND', type: 'operator', val: '&' },
  { label: 'OR', type: 'operator', val: '|' },
  { label: 'XOR', type: 'operator', val: '^' },
  { label: 'NOT', type: 'operator', val: '~' },
  
  { label: '<<', type: 'operator', val: '<<' },
  { label: '>>', type: 'operator', val: '>>' },
  { label: 'HEX', type: 'action', action: 'hex' },
  { label: 'BIN', type: 'action', action: 'bin' },
  
  { label: 'A', type: 'num', val: 'A' },
  { label: 'B', type: 'num', val: 'B' },
  { label: 'C', type: 'num', val: 'C' },
  { label: 'D', type: 'num', val: 'D' },
  
  { label: 'E', type: 'num', val: 'E' },
  { label: 'F', type: 'num', val: 'F' },
  { label: 'AC', type: 'action', action: 'clear', className: 'text-red-500 bg-[#1A1A1A]' },
  { label: 'DEL', type: 'action', action: 'delete', className: 'text-red-500 bg-[#1A1A1A]' },

  { label: '7', type: 'num', val: '7' },
  { label: '8', type: 'num', val: '8' },
  { label: '9', type: 'num', val: '9' },
  { label: '/', type: 'operator', val: '/' },
  
  { label: '4', type: 'num', val: '4' },
  { label: '5', type: 'num', val: '5' },
  { label: '6', type: 'num', val: '6' },
  { label: '*', type: 'operator', val: '*' },
  
  { label: '1', type: 'num', val: '1' },
  { label: '2', type: 'num', val: '2' },
  { label: '3', type: 'num', val: '3' },
  { label: '-', type: 'operator', val: '-' },
  
  { label: '0', type: 'num', val: '0', className: 'col-span-2' },
  { label: '=', type: 'action', action: 'calc', className: 'bg-[#0070F3] hover:bg-[#005bb5] text-white border-transparent' },
  { label: '+', type: 'operator', val: '+' },
];

export function Calculator() {
  const { displayValue, appendValue, clearDisplay, deleteLast, calculate, mode, setMode } = useCalcStore();

  const handlePress = (btn: any) => {
    // Comic mode sound effect
    if (mode === 'comic') {
      const pop = new Audio('https://www.myinstants.com/media/sounds/pop-sound.mp3');
      pop.volume = 0.2;
      pop.play().catch(() => {});
    }

    if (btn.type === 'num' || btn.type === 'operator') {
      appendValue(btn.val);
    } else if (btn.type === 'action') {
      if (btn.action === 'clear') clearDisplay();
      if (btn.action === 'delete') deleteLast();
      if (btn.action === 'calc') calculate();
    }
  };

  const getButtons = () => {
    switch (mode) {
      case 'scientific': return SCIENTIFIC_BUTTONS;
      case 'programmer': return PROGRAMMER_BUTTONS;
      default: return STANDARD_BUTTONS;
    }
  };

  const buttons = getButtons();

  return (
    <div 
      className="w-full h-full flex flex-col font-mono absolute inset-0"
      style={{ fontFamily: mode === 'comic' ? '"Comic Sans MS", "Comic Sans", cursive' : undefined }}
    >
      <div className="h-10 border-b border-[#222] bg-[#111] flex items-center justify-between px-4 shrink-0">
        <span className="text-xs font-mono text-gray-500">Compute Node</span>
        <select 
          value={mode}
          onChange={(e) => setMode(e.target.value as CalcMode)}
          className="bg-[#222] text-white text-xs border border-[#333] rounded px-2 py-1 outline-none cursor-pointer hover:border-[#555] transition-colors"
        >
          <option value="standard">Standard</option>
          <option value="scientific">Scientific</option>
          <option value="programmer">Programmer</option>
          <option value="comic">Comic (Beta)</option>
        </select>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        {/* Display Screen */}
        <div className={`bg-[#111] border rounded-sm p-4 h-24 shrink-0 flex flex-col justify-end items-end overflow-hidden relative ${mode === 'comic' ? 'border-yellow-400 bg-yellow-900/20' : 'border-[#333]'}`}>
          <div className="absolute top-2 left-2 flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <motion.div 
            key={displayValue}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: mode === 'comic' ? 'spring' : 'tween', duration: 0.2 }}
            className={`tracking-tight truncate w-full text-right ${mode === 'comic' ? 'text-5xl text-yellow-400 font-black' : 'text-4xl text-white'}`}
          >
            {displayValue || '0'}
          </motion.div>
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={() => handlePress(btn)}
              className={`
                h-12 rounded-sm flex items-center justify-center text-sm md:text-base transition-all border border-[#222]
                active:scale-95 duration-75
                ${btn.className || ''}
                ${btn.type === 'num' ? 'bg-[#111] text-[#ccc] hover:bg-[#222] hover:border-[#444]' : ''}
                ${btn.type === 'operator' ? 'bg-[#1A1A1A] text-[#0070F3] hover:bg-[#2A2A2A] hover:border-[#0070F3]' : ''}
                ${btn.action === 'clear' || btn.action === 'delete' ? 'text-red-500 bg-[#1A1A1A] hover:bg-[#2A2A2A] hover:border-red-900' : ''}
                ${mode === 'comic' ? 'rounded-2xl border-2 border-black hover:scale-105 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : ''}
                ${mode === 'comic' && btn.type === 'action' ? 'bg-red-500 text-white' : ''}
                ${mode === 'comic' && btn.type === 'num' ? 'bg-yellow-400 text-black' : ''}
                ${mode === 'comic' && btn.type === 'operator' ? 'bg-blue-400 text-black' : ''}
              `}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
