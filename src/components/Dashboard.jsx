import React, { useState, useEffect } from 'react';
import { 
  Terminal, Cloud, Cpu, Globe, Server, Puzzle, Code, 
  ShieldAlert, Activity, Database, Layout, ExternalLink, ThumbsUp, ThumbsDown
} from 'lucide-react';

const A1Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [diagnosis, setDiagnosis] = useState({ internet: 'Checking...', gpu: '65°C', mem: '72%', drive: 'C:, D:' });

  // Rule: 5-Second Self-Diagnosis [cite: 2026-02-11]
  useEffect(() => {
    const timer = setTimeout(() => setDiagnosis(prev => ({ ...prev, internet: 'Green' })), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoggedIn) {
    return <LoginModal onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="flex h-screen bg-black text-blue-100 font-mono overflow-hidden">
      {/* Phase 3: Sidebar Navigation */}
      <aside className="w-64 bg-gray-950 border-r border-blue-900/30 flex flex-col">
        <div className="p-6 text-2xl font-bold tracking-tighter text-blue-500 border-b border-blue-900/20">
          A1 MASTER_OS
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-4">
          <MenuItem icon={<Terminal size={18}/>} label="Universal Terminal" />
          <MenuItem icon={<Cloud size={18}/>} label="Cloud Storage" sub={['Unlimited Drives', 'API Config']} />
          <MenuItem icon={<Cpu size={18}/>} label="AI Engines" sub={['Unlimited Link', 'Ghost Modules']} />
          <MenuItem icon={<Globe size={18}/>} label="Web & WP" sub={['WP Installer', 'AI Injector']} />
          <MenuItem icon={<Server size={18}/>} label="Hosting & DNS" />
          <MenuItem icon={<Puzzle size={18}/>} label="Plugin Store" />
          <MenuItem icon={<Code size={18}/>} label="Dev Controls" />
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        
        {/* Phase 2: Global Header */}
        <header className="h-16 bg-gray-900/80 backdrop-blur-md border-b border-blue-900/30 flex items-center justify-between px-8">
          <div className="flex gap-6 items-center">
            <h1 className="text-xl font-bold tracking-widest">A1 CORE ENGINE</h1>
            <div className="flex gap-4 text-[10px] uppercase">
              <Indicator label="NET" value={diagnosis.internet} color="text-green-400" />
              <Indicator label="GPU" value={diagnosis.gpu} color="text-orange-400" />
              <Indicator label="MEM" value={diagnosis.mem} color="text-blue-400" />
              <Indicator label="STORAGE" value={diagnosis.drive} color="text-purple-400" />
            </div>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded text-xs font-bold animate-pulse flex items-center gap-2">
            <ShieldAlert size={16}/> EMERGENCY KILL SWITCH
          </button>
        </header>

        {/* Phase 4: Scrollable Grid Content */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-12 gap-6">
          
          {/* Section A: Universal Terminal */}
          <div className="col-span-12 lg:col-span-7 bg-gray-900/50 border border-blue-500/20 p-4 rounded-lg">
            <div className="flex justify-between mb-2"><span className="text-xs text-blue-500 uppercase tracking-widest">Terminal_Output</span> <Activity size={14}/></div>
            <div className="h-48 bg-black rounded p-3 text-xs mb-4 border border-blue-900/50 overflow-y-auto font-mono">
              <p className="text-green-500">[SYSTEM] A1 Core initialized...</p>
              <p className="text-blue-400">[OS] Ready for Intent Command.</p>
            </div>
            <div className="flex gap-2">
              <input className="flex-1 bg-gray-950 border border-blue-900/50 rounded px-4 py-2 text-sm" placeholder="Enter Hinglish/Intent Command..." />
              <button className="bg-blue-600 px-6 py-2 rounded text-xs font-bold uppercase tracking-widest">Execute</button>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex gap-2"><ThumbsUp size={16} className="cursor-pointer hover:text-green-500"/><ThumbsDown size={16} className="cursor-pointer hover:text-red-500"/></div>
              <div className="bg-blue-900/20 px-3 py-1 rounded text-[10px] border border-blue-500/20">COUNCIL OF EXPERTS: AUDITING...</div>
            </div>
          </div>

          {/* Section B: Engine & Cloud Hub */}
          <div className="col-span-12 lg:col-span-5 bg-gray-900/50 border border-blue-500/20 p-4 rounded-lg overflow-hidden">
            <h3 className="text-xs text-blue-500 mb-4 font-bold uppercase">AI Engine & Cloud Hub</h3>
            <table className="w-full text-[10px] text-left">
              <thead><tr className="border-b border-blue-900/30"><th>Name</th><th>Type</th><th>Status</th><th>Action</th></tr></thead>
              <tbody>
                <tr className="hover:bg-blue-900/10"><td>GPT-O_OPEN</td><td>API_KEY</td><td className="text-green-400">SYNCED</td><td><InjectBtn/></td></tr>
                <tr className="hover:bg-blue-900/10"><td>LLAMA_3_LOCAL</td><td>URL</td><td className="text-blue-400">ACTIVE</td><td><InjectBtn/></td></tr>
                <tr className="hover:bg-blue-900/10"><td>VOICE_GEN</td><td>GHOST_STUB</td><td className="text-gray-500">EMPTY</td><td><InjectBtn/></td></tr>
              </tbody>
            </table>
          </div>

          {/* Section C: Web & WP Admin */}
          <div className="col-span-12 bg-gray-900/50 border border-blue-500/20 p-4 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="border-r border-blue-900/20 pr-4">
                <h4 className="text-[10px] text-blue-500 font-bold mb-2">WP_AUTO_INSTALLER</h4>
                <input className="w-full bg-gray-950 border border-blue-900/30 p-2 text-xs mb-2" placeholder="Domain..." />
                <button className="w-full bg-blue-600/20 border border-blue-600 py-2 text-[10px] font-bold">INSTALL WORDPRESS</button>
             </div>
             <div className="border-r border-blue-900/20 px-4">
                <h4 className="text-[10px] text-blue-500 font-bold mb-2">INFRASTRUCTURE_NODES</h4>
                <div className="space-y-2">
                   <div className="flex justify-between text-[10px]"><span>hostinger_main</span> <div className="w-2 h-2 bg-green-500 rounded-full"></div></div>
                   <div className="flex justify-between text-[10px]"><span>godaddy_dns</span> <div className="w-2 h-2 bg-blue-500 rounded-full"></div></div>
                </div>
             </div>
             <div className="pl-4">
                <h4 className="text-[10px] text-blue-500 font-bold mb-2">WEB_ADMIN_COMMAND</h4>
                <button className="w-full bg-indigo-600/40 py-2 text-[10px] border border-indigo-500 mb-2">1-CLICK BUILD AI_IN_WEB</button>
                <button className="w-full bg-gray-900 py-2 text-[10px] border border-gray-700">MANAGE_DOMAINS</button>
             </div>
          </div>

          {/* Section D: Plugin & App Store */}
          <div className="col-span-12 lg:col-span-8 bg-gray-900/50 border border-blue-500/20 p-4 rounded-lg">
            <h3 className="text-xs text-blue-500 mb-4 font-bold uppercase tracking-widest">Social Integrations & Plugin Hub</h3>
            <div className="grid grid-cols-4 gap-4">
              {['Truecaller', 'WhatsApp', 'Facebook', 'Instagram'].map(app => (
                <div key={app} className="bg-gray-950 p-3 rounded border border-blue-900/30 flex flex-col gap-2">
                  <span className="text-[10px] font-bold">{app}</span>
                  <button className="bg-blue-900/20 text-[8px] border border-blue-500/30 py-1">CONNECT API</button>
                  <button className="bg-gray-900 text-[8px] border border-gray-700 py-1">SYNC CLOUD</button>
                </div>
              ))}
            </div>
          </div>

          {/* Section E: Dev Controls */}
          <div className="col-span-12 lg:col-span-4 bg-gray-900/50 border border-blue-500/20 p-4 rounded-lg">
             <h3 className="text-xs text-blue-500 mb-4 font-bold uppercase tracking-widest">Logic Builder Canvas</h3>
             <div className="h-32 bg-gray-950 border border-dashed border-blue-500/30 rounded flex items-center justify-center">
                <span className="text-[10px] text-blue-900 animate-pulse">Drag Nodes Here (Hosting -> Domain)</span>
             </div>
             <div className="mt-4 flex gap-2">
               <button className="flex-1 bg-green-900/20 border border-green-700 text-[10px] py-1">JS PANEL</button>
               <button className="flex-1 bg-orange-900/20 border border-orange-700 text-[10px] py-1">JAVA PANEL</button>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Sub-components for cleaner code
const MenuItem = ({ icon, label, sub }) => (
  <div className="group">
    <div className="flex items-center gap-3 text-sm text-blue-300/70 hover:text-blue-400 cursor-pointer p-2 rounded hover:bg-blue-900/10 transition-all">
      {icon} <span className="flex-1">{label}</span>
    </div>
    {sub && <div className="ml-8 border-l border-blue-900/50 pl-4 mt-1 space-y-1">
      {sub.map(s => <div key={s} className="text-[10px] text-blue-600 hover:text-blue-400 cursor-pointer">{s}</div>)}
    </div>}
  </div>
);

const Indicator = ({ label, value, color }) => (
  <div className="flex flex-col border-r border-blue-900/30 pr-4 last:border-0">
    <span className="text-gray-500">{label}</span>
    <span className={`${color} font-bold`}>{value}</span>
  </div>
);

const InjectBtn = () => (
  <button className="bg-blue-600/20 text-blue-400 border border-blue-600 px-2 py-0.5 rounded text-[8px] hover:bg-blue-600 hover:text-white">1-CLICK INJECT</button>
);

const LoginModal = ({ onLogin }) => (
  <div className="h-screen bg-black flex items-center justify-center p-6 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
    <div className="w-full max-w-sm bg-gray-900 border border-blue-500/50 p-8 rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.2)]">
      <h2 className="text-2xl font-bold text-center mb-8 tracking-tighter text-blue-400">A1 SYSTEM_LOGIN</h2>
      <input className="w-full bg-gray-950 border border-blue-900/50 p-3 rounded mb-4 text-sm focus:border-blue-500 outline-none" placeholder="Username" />
      <input className="w-full bg-gray-950 border border-blue-900/50 p-3 rounded mb-2 text-sm focus:border-blue-500 outline-none" type="password" placeholder="Password" />
      <div className="text-right mb-6"><a href="#" className="text-[10px] text-blue-700 hover:text-blue-400">Forgot Password?</a></div>
      <button onClick={onLogin} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg shadow-lg shadow-blue-900/20 transition-all">ACCESS CORE_ENGINE</button>
    </div>
  </div>
);

export default A1Dashboard;
                
