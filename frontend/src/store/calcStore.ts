import { create } from 'zustand';

export type CalcMode = 'standard' | 'scientific' | 'programmer' | 'comic' | 'financial';

export interface HistoryItem {
  id: string;
  query: string;
  result: string;
  steps?: string[];
  type: 'standard' | 'ai';
}

interface CalcState {
  displayValue: string;
  history: HistoryItem[];
  isLoading: boolean;
  setDisplayValue: (val: string) => void;
  appendValue: (val: string) => void;
  clearDisplay: () => void;
  deleteLast: () => void;
  calculate: () => void;
  mode: CalcMode;
  setMode: (mode: CalcMode) => void;
  calculateAI: (prompt: string) => Promise<void>;
}

export const useCalcStore = create<CalcState>((set, get) => ({
  displayValue: '',
  history: [],
  isLoading: false,
  mode: 'standard',

  setMode: (mode) => set({ mode }),

  setDisplayValue: (val) => set({ displayValue: val }),
  
  appendValue: (val) => set((state) => ({ displayValue: state.displayValue + val })),
  
  clearDisplay: () => set({ displayValue: '' }),
  
  deleteLast: () => set((state) => ({ displayValue: state.displayValue.slice(0, -1) })),

  calculate: () => {
    const { displayValue, history } = get();
    if (!displayValue.trim()) return;

    try {
      // Very basic local calculation fallback. In reality, this would hit the API gateway.
      const result = eval(displayValue).toString();
      
      const newItem: HistoryItem = {
        id: Date.now().toString(),
        query: displayValue,
        result,
        type: 'standard'
      };

      set({ 
        displayValue: result,
        history: [newItem, ...history]
      });
    } catch {
      set({ displayValue: 'Error' });
    }
  },

  calculateAI: async (prompt: string) => {
    const { history } = get();
    if (!prompt.trim()) return;

    set({ isLoading: true });

    // Mocking an AI delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const mockSteps = [
      "Parsing natural language into mathematical AST...",
      "Identifying operation: First derivative with respect to x",
      "Applying power rule to x^2",
      "Applying chain rule to sin(x)"
    ];
    
    const newItem: HistoryItem = {
      id: Date.now().toString(),
      query: prompt,
      result: "2x * sin(x) + x^2 * cos(x)",
      steps: mockSteps,
      type: 'ai'
    };

    set({
      history: [newItem, ...history],
      isLoading: false
    });
  }
}));
