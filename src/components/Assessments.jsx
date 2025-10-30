import React, { useState } from 'react';
import { FileCode, PlusCircle } from 'lucide-react';

export default function Assessments() {
  const [tab, setTab] = useState('skills');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-blue-700">
          <FileCode size={20} />
          <h3 className="font-semibold text-slate-900">Assessments</h3>
        </div>

        <div className="inline-flex rounded-lg border border-blue-100 bg-white/70 backdrop-blur-sm overflow-hidden">
          <button
            onClick={() => setTab('skills')}
            className={`px-4 py-2 text-sm ${tab === 'skills' ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-blue-50'}`}
          >
            Skill Tests
          </button>
          <button
            onClick={() => setTab('code')}
            className={`px-4 py-2 text-sm ${tab === 'code' ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-blue-50'}`}
          >
            Code Assessments
          </button>
        </div>
      </div>

      {tab === 'skills' ? <SkillTests /> : <CodeAssessments />}
    </div>
  );
}

function Section({ title, children, action }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-slate-900">{title}</h4>
        {action}
      </div>
      {children}
    </div>
  );
}

function SkillTests() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Section
        title="Create Skill Test"
        action={(
          <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            <PlusCircle size={16} /> New Test
          </button>
        )}
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-1 gap-3"
        >
          <input className="px-3 py-2 rounded-lg border border-blue-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Test title (e.g., React Fundamentals)" />
          <textarea className="px-3 py-2 rounded-lg border border-blue-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4} placeholder="Description" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <select className="px-3 py-2 rounded-lg border border-blue-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            <input className="px-3 py-2 rounded-lg border border-blue-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Duration (min)" />
            <input className="px-3 py-2 rounded-lg border border-blue-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Max score" />
          </div>
          <button className="justify-self-start px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Save Test</button>
        </form>
      </Section>

      <Section title="Recent Skill Tests">
        <ul className="divide-y divide-blue-100">
          {[
            { title: 'React Fundamentals', level: 'Intermediate', duration: 45 },
            { title: 'System Design Basics', level: 'Advanced', duration: 60 },
            { title: 'Product Sense', level: 'Intermediate', duration: 30 },
          ].map((t) => (
            <li key={t.title} className="py-3 flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-900">{t.title}</p>
                <p className="text-sm text-slate-500">{t.level} • {t.duration} min</p>
              </div>
              <button className="px-3 py-1.5 rounded-lg border border-blue-100 text-blue-700 hover:bg-blue-50">Manage</button>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

function CodeAssessments() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Section title="Create Code Assessment">
        <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-3">
          <input className="px-3 py-2 rounded-lg border border-blue-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Challenge title (e.g., Two Sum)" />
          <textarea className="px-3 py-2 rounded-lg border border-blue-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4} placeholder="Problem description" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <select className="px-3 py-2 rounded-lg border border-blue-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>JavaScript</option>
              <option>Python</option>
              <option>Java</option>
              <option>Go</option>
            </select>
            <input className="px-3 py-2 rounded-lg border border-blue-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Time limit (min)" />
            <input className="px-3 py-2 rounded-lg border border-blue-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Memory limit (MB)" />
          </div>
          <button className="justify-self-start px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Save Challenge</button>
        </form>
      </Section>

      <Section title="Popular Coding Challenges">
        <ul className="divide-y divide-blue-100">
          {[
            { title: 'Two Sum', lang: 'JavaScript', difficulty: 'Easy' },
            { title: 'LRU Cache', lang: 'Python', difficulty: 'Medium' },
            { title: 'Word Ladder', lang: 'Java', difficulty: 'Hard' },
          ].map((c) => (
            <li key={c.title} className="py-3 flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-900">{c.title}</p>
                <p className="text-sm text-slate-500">{c.lang} • {c.difficulty}</p>
              </div>
              <button className="px-3 py-1.5 rounded-lg border border-blue-100 text-blue-700 hover:bg-blue-50">Assign</button>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
