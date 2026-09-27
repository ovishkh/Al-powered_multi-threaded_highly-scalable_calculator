'use client';

import Link from 'next/link';

const SERVICES = [
  { 
    name: 'API Gateway', 
    type: 'NestJS', 
    status: 'Operational', 
    uptime: 99.99, 
    latency: '12ms',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  { 
    name: 'Calculation Engine', 
    type: 'Go', 
    status: 'Operational', 
    uptime: 100.00, 
    latency: '4ms',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  { 
    name: 'AI NLP Service', 
    type: 'Python', 
    status: 'Operational', 
    uptime: 99.95, 
    latency: '235ms',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  { 
    name: 'PostgreSQL', 
    type: 'Database', 
    status: 'Operational', 
    uptime: 100.00, 
    latency: '8ms',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  { 
    name: 'Redis', 
    type: 'Cache', 
    status: 'Operational', 
    uptime: 100.00, 
    latency: '2ms',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  { 
    name: 'RabbitMQ', 
    type: 'Message Broker', 
    status: 'Operational', 
    uptime: 99.98, 
    latency: '5ms',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  },
];

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] flex flex-col font-sans relative overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 flex-1 p-8">
        <header className="mb-16 max-w-5xl mx-auto w-full pt-8">
          <Link href="/" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono text-sm mb-8 w-fit">
            <span className="transition-transform group-hover:-translate-x-1">&larr;</span> 
            Back to Dashboard
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                System Status
              </h1>
              <p className="text-gray-400 mt-3 max-w-xl text-lg">
                Real-time monitoring of OvCompute microservices and infrastructure.
              </p>
            </div>
            
            {/* Master Status Badge */}
            <div className="flex items-center gap-3 px-5 py-3 bg-green-500/10 border border-green-500/20 rounded-full shrink-0 shadow-[0_0_30px_rgba(34,197,94,0.15)]">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
              </div>
              <span className="text-sm font-semibold text-green-400 tracking-wide uppercase">All Systems Operational</span>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/10 rounded-2xl p-6 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden backdrop-blur-xl"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex justify-between items-start">
                <div className="flex gap-4 items-center">
                  <div className="p-2.5 bg-white/[0.05] rounded-xl text-gray-300 group-hover:text-white transition-colors group-hover:bg-white/[0.1] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg tracking-tight leading-tight">{service.name}</h3>
                    <span className="text-xs text-gray-500 font-mono">{service.type}</span>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 mt-2 flex items-center justify-between bg-black/40 rounded-lg px-4 py-2 border border-white/[0.03]">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Status</span>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></span>
                  <span className="text-xs font-mono text-green-400 uppercase tracking-wider font-semibold">{service.status}</span>
                </div>
              </div>
              
              <div className="relative z-10 grid grid-cols-2 gap-6 mt-1">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Uptime</span>
                    <span className="text-sm font-semibold text-white">{service.uptime.toFixed(2)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" 
                      style={{ width: `${service.uptime}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Latency</span>
                    <span className="text-sm font-semibold text-white">{service.latency}</span>
                  </div>
                  <div className="flex items-end h-1.5 gap-0.5 opacity-60">
                    <div className="h-full w-1/5 bg-green-500 rounded-sm"></div>
                    <div className="h-full w-1/5 bg-green-500 rounded-sm"></div>
                    <div className="h-3/4 w-1/5 bg-green-500 rounded-sm"></div>
                    <div className="h-1/2 w-1/5 bg-green-500 rounded-sm"></div>
                    <div className="h-2/3 w-1/5 bg-green-500 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
