'use client';

import { useState } from 'react';
import { useCalcStore } from '@/store/calcStore';
import { Terminal } from 'lucide-react';

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
    <form onSubmit={handleSubmit} className="w-full">
      <div className="bg-[#0A0A0A] border border-[#222] rounded-md p-1 flex items-center focus-within:border-[#0070F3] transition-colors duration-200">
        <div className="pl-3 pr-2 text-[#666] flex items-center gap-2">
          <Terminal size={16} />
          <span className="font-mono text-sm">{'>'}</span>
        </div>
        
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter natural language query or system command..."
          className="flex-1 bg-transparent border-none outline-none text-[#eee] font-mono text-sm placeholder-[#444] px-2 py-3"
          disabled={isLoading}
          autoComplete="off"
        />
        
        <button
          type="submit"
          disabled={!prompt.trim() || isLoading}
          className="mr-1 bg-[#111] text-[#888] border border-[#333] hover:text-white hover:border-[#666] px-4 py-1.5 rounded-sm font-mono text-xs transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'EXECUTING...' : 'EXEC'}
        </button>
      </div>
    </form>
  );
}
