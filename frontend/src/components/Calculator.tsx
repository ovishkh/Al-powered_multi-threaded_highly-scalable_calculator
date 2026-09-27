'use client';

import { useCalcStore, CalcMode } from '@/store/calcStore';
import { STANDARD_BUTTONS, SCIENTIFIC_BUTTONS, PROGRAMMER_BUTTONS } from './calculator/constants';
import { DisplayScreen } from './calculator/DisplayScreen';
import { Keypad, ButtonConfig } from './calculator/Keypad';

export function Calculator() {
  const { displayValue, appendValue, clearDisplay, deleteLast, calculate, mode, setMode } = useCalcStore();

  const handlePress = (btn: ButtonConfig) => {
    // Comic mode sound effect
    if (mode === 'comic') {
      const pop = new Audio('https://www.myinstants.com/media/sounds/pop-sound.mp3');
      pop.volume = 0.2;
      pop.play().catch(() => {});
    }

    if (btn.type === 'num' || btn.type === 'operator') {
      if (btn.val) appendValue(btn.val);
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
      className="w-full h-full flex flex-col font-mono"
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
        <DisplayScreen displayValue={displayValue} mode={mode} />
        <Keypad buttons={buttons} mode={mode} onPress={handlePress} />
      </div>
    </div>
  );
}
