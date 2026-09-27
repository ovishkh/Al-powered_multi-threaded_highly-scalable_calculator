'use client';

import { useCalcStore } from '@/store/calcStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, CheckCircle2 } from 'lucide-react';

export function History() {
  const { history, isLoading } = useCalcStore();

  return (
    <div className="h-full glass rounded-3xl p-6 overflow-y-auto flex flex-col gap-4">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex gap-4 bg-white/5 p-4 rounded-2xl border border-white/5"
          >
            <div className="shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
              <Bot size={16} />
            </div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-white/10 rounded w-1/3 animate-pulse"></div>
              <div className="h-3 bg-white/5 rounded w-1/2 animate-pulse"></div>
              <div className="h-3 bg-white/5 rounded w-2/3 animate-pulse"></div>
            </div>
          </motion.div>
        )}

        {history.length === 0 && !isLoading && (
          <div className="m-auto text-center text-gray-500 flex flex-col items-center gap-2">
            <Bot size={32} className="opacity-50" />
            <p>No calculations yet.<br/>Try standard math or ask the AI!</p>
          </div>
        )}

        {history.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-2xl border border-white/5 ${
              item.type === 'ai' ? 'bg-purple-900/10' : 'bg-white/5'
            }`}
          >
            {/* Query */}
            <div className="flex items-start gap-3 mb-3">
              <div className="shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mt-0.5">
                <User size={16} />
              </div>
              <div className="flex-1 text-sm md:text-base text-gray-200 leading-relaxed">
                {item.query}
              </div>
            </div>

            {/* AI Steps (if any) */}
            {item.steps && item.steps.length > 0 && (
              <div className="ml-11 mb-4 space-y-2">
                {item.steps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                    <CheckCircle2 size={12} className="text-green-500/70" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Result */}
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mt-0.5">
                <Bot size={16} />
              </div>
              <div className="flex-1">
                <div className="text-lg md:text-xl font-medium text-white tracking-wide bg-white/5 inline-block px-3 py-1 rounded-lg">
                  {item.result}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
