export const STANDARD_BUTTONS = [
  { label: 'AC', type: 'action', action: 'clear' },
  { label: 'DEL', type: 'action', action: 'delete' },
  { label: '%', type: 'operator', val: '%' },
  { label: '/', type: 'operator', val: '/' },
  
  { label: '7', type: 'num', val: '7' },
  { label: '8', type: 'num', val: '8' },
  { label: '9', type: 'num', val: '9' },
  { label: '*', type: 'operator', val: '*' },
  
  { label: '4', type: 'num', val: '4' },
  { label: '5', type: 'num', val: '5' },
  { label: '6', type: 'num', val: '6' },
  { label: '-', type: 'operator', val: '-' },
  
  { label: '1', type: 'num', val: '1' },
  { label: '2', type: 'num', val: '2' },
  { label: '3', type: 'num', val: '3' },
  { label: '+', type: 'operator', val: '+' },
  
  { label: '0', type: 'num', val: '0', className: 'col-span-2' },
  { label: '.', type: 'num', val: '.' },
  { label: '=', type: 'action', action: 'calc', className: 'bg-[#0070F3] hover:bg-[#005bb5] text-white border-transparent' },
];

export const SCIENTIFIC_BUTTONS = [
  { label: 'sin', type: 'operator', val: 'Math.sin(' },
  { label: 'cos', type: 'operator', val: 'Math.cos(' },
  { label: 'tan', type: 'operator', val: 'Math.tan(' },
  { label: 'log', type: 'operator', val: 'Math.log10(' },
  
  { label: 'ln', type: 'operator', val: 'Math.log(' },
  { label: 'π', type: 'num', val: 'Math.PI' },
  { label: 'e', type: 'num', val: 'Math.E' },
  { label: '^', type: 'operator', val: '**' },
  
  { label: '(', type: 'operator', val: '(' },
  { label: ')', type: 'operator', val: ')' },
  { label: '√', type: 'operator', val: 'Math.sqrt(' },
  { label: '!', type: 'operator', val: '!' },
  
  ...STANDARD_BUTTONS
];

export const PROGRAMMER_BUTTONS = [
  { label: 'AND', type: 'operator', val: '&' },
  { label: 'OR', type: 'operator', val: '|' },
  { label: 'XOR', type: 'operator', val: '^' },
  { label: 'NOT', type: 'operator', val: '~' },
  
  { label: '<<', type: 'operator', val: '<<' },
  { label: '>>', type: 'operator', val: '>>' },
  { label: 'HEX', type: 'action', action: 'hex' },
  { label: 'BIN', type: 'action', action: 'bin' },
  
  { label: 'A', type: 'num', val: 'A' },
  { label: 'B', type: 'num', val: 'B' },
  { label: 'C', type: 'num', val: 'C' },
  { label: 'D', type: 'num', val: 'D' },
  
  { label: 'E', type: 'num', val: 'E' },
  { label: 'F', type: 'num', val: 'F' },
  { label: 'AC', type: 'action', action: 'clear', className: 'text-red-500 bg-[#1A1A1A]' },
  { label: 'DEL', type: 'action', action: 'delete', className: 'text-red-500 bg-[#1A1A1A]' },

  { label: '7', type: 'num', val: '7' },
  { label: '8', type: 'num', val: '8' },
  { label: '9', type: 'num', val: '9' },
  { label: '/', type: 'operator', val: '/' },
  
  { label: '4', type: 'num', val: '4' },
  { label: '5', type: 'num', val: '5' },
  { label: '6', type: 'num', val: '6' },
  { label: '*', type: 'operator', val: '*' },
  
  { label: '1', type: 'num', val: '1' },
  { label: '2', type: 'num', val: '2' },
  { label: '3', type: 'num', val: '3' },
  { label: '-', type: 'operator', val: '-' },
  
  { label: '0', type: 'num', val: '0', className: 'col-span-2' },
  { label: '=', type: 'action', action: 'calc', className: 'bg-[#0070F3] hover:bg-[#005bb5] text-white border-transparent' },
  { label: '+', type: 'operator', val: '+' },
];
