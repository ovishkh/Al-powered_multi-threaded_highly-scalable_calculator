'use client';

import Link from 'next/link';

const SERVICES = [
  { name: 'API Gateway (NestJS)', status: 'Operational', uptime: '99.99%', latency: '12ms' },
  { name: 'Calculation Engine (Go)', status: 'Operational', uptime: '100.00%', latency: '4ms' },
  { name: 'AI NLP Service (Python)', status: 'Operational', uptime: '99.95%', latency: '235ms' },
  { name: 'PostgreSQL Database', status: 'Operational', uptime: '100.00%', latency: '8ms' },
  { name: 'Redis Cache', status: 'Operational', uptime: '100.00%', latency: '2ms' },
  { name: 'RabbitMQ Message Broker', status: 'Operational', uptime: '99.98%', latency: '5ms' },
];

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-black text-[#ededed] flex flex-col font-sans p-8">
      <header className="mb-12 max-w-5xl mx-auto w-full">
        <Link href="/" className="text-gray-400 hover:text-white transition-colors font-mono text-sm mb-4 inline-block">
          &larr; Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">System Status</h1>
        <p className="text-gray-500 mt-2">All microservices and infrastructure components are operating normally.</p>
      </header>

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, idx) => (
          <div key={idx} className="bg-[#0A0A0A] border border-[#222] rounded-md p-6 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-white">{service.name}</h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest">{service.status}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-2 pt-4 border-t border-[#111]">
              <div>
                <div className="text-[10px] text-gray-500 font-mono mb-1 uppercase tracking-widest">Uptime (30d)</div>
                <div className="font-mono text-lg text-white">{service.uptime}</div>
              </div>
              <div>
                <div className="text-[10px] text-gray-500 font-mono mb-1 uppercase tracking-widest">Latency</div>
                <div className="font-mono text-lg text-white">{service.latency}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
