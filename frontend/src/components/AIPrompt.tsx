'use client';

import { useState } from 'react';
import { useCalcStore } from '@/store/calcStore';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUp } from 'lucide-react';

export function AIPrompt() {
  const [prompt, setPrompt] = useState('');
  const { calculateAI, isLoading } = useCalcStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isLoading) {
      calculateAI(prompt);
      setPrompt('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
      
      <div className="relative glass rounded-2xl p-2 flex items-center gap-2">
        <div className="pl-3 text-purple-400">
          <Sparkles size={20} className={isLoading ? "animate-pulse" : ""} />
        </div>
        
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask AI to calculate anything..."
          className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400 px-2 py-3"
          disabled={isLoading}
        />
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={!prompt.trim() || isLoading}
          className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </form>
  );
}
