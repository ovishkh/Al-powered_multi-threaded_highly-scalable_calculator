'use client';

import { Calculator } from '@/components/Calculator';
import { AIPrompt } from '@/components/AIPrompt';
import { History } from '@/components/History';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-[#ededed] flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="h-14 border-b border-[#222] flex items-center px-6 justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full border-2 border-[#0070F3]"></div>
          <h1 className="font-bold tracking-tight text-lg">OvCompute</h1>
          <span className="bg-[#111] border border-[#333] text-xs px-2 py-0.5 rounded text-gray-400 font-mono tracking-widest ml-2">
            v1.0.0-PROD
          </span>
        </div>
        <div className="text-xs font-mono text-gray-500 uppercase tracking-widest flex gap-6">
          <span>Status: <span className="text-green-500">Online</span></span>
          <span>Workers: <span className="text-blue-500">12/12</span></span>
        </div>
      </header>

      {/* Main Grid Workspace */}
      <main className="flex-1 p-6 flex flex-col lg:flex-row gap-6 h-[calc(100vh-3.5rem)] overflow-hidden">
        
        {/* Left Column: History & Prompt */}
        <div className="flex-1 flex flex-col gap-6 min-w-0 h-full">
          {/* History Terminal */}
          <div className="flex-1 min-h-0 bg-[#0A0A0A] border border-[#222] rounded-md overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-8 border-b border-[#222] bg-[#111] flex items-center px-4 text-xs font-mono text-gray-500">
              Terminal Output
            </div>
            <div className="pt-8 h-full">
              <History />
            </div>
          </div>

          {/* AI NLP Prompt Input */}
          <div className="shrink-0">
            <AIPrompt />
          </div>
        </div>

        {/* Right Column: Calculator Engine */}
        <div className="w-full lg:w-[400px] shrink-0 h-full flex flex-col">
          <div className="flex-1 bg-[#0A0A0A] border border-[#222] rounded-md overflow-hidden relative flex flex-col">
            <div className="flex-1 p-6 overflow-y-auto flex flex-col items-center justify-center">
              <Calculator />
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
