'use client';

import { useCalcStore } from '@/store/calcStore';
import { motion, AnimatePresence } from 'framer-motion';

export function History() {
  const { history, isLoading } = useCalcStore();

  return (
    <div className="h-full p-4 overflow-y-auto font-mono text-sm flex flex-col gap-1">
      <AnimatePresence>
        {history.length === 0 && !isLoading && (
          <div className="text-[#444] p-2 flex flex-col gap-1">
            <p>OCompEngine Terminal v1.0</p>
            <p>Type a command or natural language math query below.</p>
          </div>
        )}

        {history.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15 }}
            className="mb-6 flex flex-col gap-2"
          >
            {/* User Input line */}
            <div className="flex items-start gap-2 text-[#ccc]">
              <span className="text-[#0070F3] shrink-0">➜</span>
              <span className="text-gray-500 shrink-0">usr:</span>
              <span className="break-all">{item.query}</span>
            </div>

            {/* AI Steps (if any) */}
            {item.steps && item.steps.length > 0 && (
              <div className="pl-6 border-l border-[#222] ml-1.5 my-1 flex flex-col gap-1">
                {item.steps.map((step, idx) => (
                  <div key={idx} className="text-[#666] flex gap-2">
                    <span className="text-[#333]">[{idx+1}]</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Output Result */}
            <div className="flex items-start gap-2">
              <span className="text-green-500 shrink-0">✔</span>
              <span className="text-gray-500 shrink-0">sys:</span>
              <span className="text-white bg-[#111] px-2 py-0.5 rounded-sm border border-[#333]">
                {item.result}
              </span>
            </div>
          </motion.div>
        ))}

        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-start gap-2 text-[#888] mt-2"
          >
            <span className="text-yellow-500 animate-pulse shrink-0">⟳</span>
            <span className="text-gray-500 shrink-0">sys:</span>
            <span className="flex items-center gap-1">
              Processing workload
              <span className="animate-blink">_</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
