import { CalcMode } from '@/store/calcStore';

export interface ButtonConfig {
  label: string;
  type: string;
  val?: string;
  action?: string;
  className?: string;
}

interface KeypadProps {
  buttons: ButtonConfig[];
  mode: CalcMode;
  onPress: (btn: ButtonConfig) => void;
}

export function Keypad({ buttons, mode, onPress }: KeypadProps) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {buttons.map((btn, i) => (
        <button
          key={i}
          onClick={() => onPress(btn)}
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
  );
}
