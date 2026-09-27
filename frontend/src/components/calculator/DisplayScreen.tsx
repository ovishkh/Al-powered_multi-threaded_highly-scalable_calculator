import { motion } from 'framer-motion';
import { CalcMode } from '@/store/calcStore';

interface DisplayScreenProps {
  displayValue: string;
  mode: CalcMode;
}

export function DisplayScreen({ displayValue, mode }: DisplayScreenProps) {
  return (
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
  );
}
