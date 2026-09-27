'use client';

import { Calculator } from '@/components/Calculator';
import { AIPrompt } from '@/components/AIPrompt';
import { History } from '@/components/History';

export default function Home() {
  return (
    <main className="min-h-screen relative p-4 md:p-8 flex items-center justify-center">
      {/* Background Mesh */}
      <div className="bg-mesh" />

      {/* Main Container */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Left Column: History & AI Prompt */}
        <div className="lg:col-span-5 flex flex-col gap-6 h-[85vh]">
          {/* Header */}
          <div className="glass p-6 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 text-[10px] font-bold uppercase tracking-widest text-purple-400/50">
              Professional UI
            </div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Nexus Compute
            </h1>
            <p className="text-sm text-gray-400 mt-2 font-medium">Enterprise AI-Powered Calculation Engine</p>
          </div>

          {/* History Console */}
          <div className="flex-1 min-h-0">
            <History />
          </div>

          {/* AI NLP Prompt */}
          <div className="shrink-0">
            <AIPrompt />
          </div>
        </div>

        {/* Right Column: Calculator */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end h-full">
          <Calculator />
        </div>

      </div>
    </main>
  );
}
