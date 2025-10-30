import React, { useState } from 'react';
import Dashboard from './components/Dashboard.jsx';
import Candidates from './components/Candidates.jsx';
import Assessments from './components/Assessments.jsx';
import Interviews from './components/Interviews.jsx';
import { LayoutDashboard, Users, FileCode, Calendar } from 'lucide-react';

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'candidates', label: 'Candidates', icon: Users },
  { id: 'assessments', label: 'Assessments', icon: FileCode },
  { id: 'interviews', label: 'Interviews', icon: Calendar },
];

export default function App() {
  const [active, setActive] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="sticky top-0 z-20 bg-white/60 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-content-center font-bold">H</div>
            <div>
              <h1 className="text-lg font-semibold text-slate-900">Hiring Hub</h1>
              <p className="text-xs text-slate-500">All your hiring in one clean workspace</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm border transition ${
                  active === t.id
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white/80 text-slate-700 border-blue-100 hover:bg-blue-50'
                }`}
              >
                <t.icon size={16} /> {t.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="md:hidden mb-4">
          <select
            value={active}
            onChange={(e) => setActive(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-blue-100 bg-white/90 backdrop-blur-sm"
          >
            {tabs.map((t) => (
              <option key={t.id} value={t.id}>{t.label}</option>
            ))}
          </select>
        </div>

        {active === 'dashboard' && <Dashboard />}
        {active === 'candidates' && <Candidates />}
        {active === 'assessments' && <Assessments />}
        {active === 'interviews' && <Interviews />}
      </div>

      <footer className="border-t border-blue-100 py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-500">
          Built with a calming blue palette for clarity and focus.
        </div>
      </footer>
    </div>
  );
}
