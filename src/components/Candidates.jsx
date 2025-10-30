import React, { useMemo, useState } from 'react';
import { Users, Search, Star, ThumbsUp, ThumbsDown } from 'lucide-react';

const candidatesSeed = [
  { id: 1, name: 'Ava Thompson', role: 'Frontend Engineer', score: 86, stage: 'Technical' },
  { id: 2, name: 'Liam Carter', role: 'Backend Engineer', score: 78, stage: 'Screening' },
  { id: 3, name: 'Noah Patel', role: 'Data Scientist', score: 91, stage: 'Interview' },
  { id: 4, name: 'Mia Rodriguez', role: 'Product Manager', score: 74, stage: 'Screening' },
  { id: 5, name: 'Ethan Chen', role: 'DevOps Engineer', score: 82, stage: 'Technical' },
];

export default function Candidates() {
  const [query, setQuery] = useState('');
  const [stageFilter, setStageFilter] = useState('All');

  const candidates = useMemo(() => {
    return candidatesSeed.filter((c) => {
      const matchesQuery = [c.name, c.role, c.stage].some((v) => v.toLowerCase().includes(query.toLowerCase()));
      const matchesStage = stageFilter === 'All' || c.stage === stageFilter;
      return matchesQuery && matchesStage;
    });
  }, [query, stageFilter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-blue-700">
          <Users size={20} />
          <h3 className="font-semibold text-slate-900">Candidates</h3>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, role, or stage"
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-blue-100 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value)}
            className="px-3 py-2 rounded-lg border border-blue-100 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {['All', 'Screening', 'Technical', 'Interview'].map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white/70 backdrop-blur-sm border border-blue-100 rounded-xl overflow-hidden">
          <thead className="bg-blue-50 text-blue-800">
            <tr>
              <th className="text-left px-4 py-3 text-sm font-medium">Name</th>
              <th className="text-left px-4 py-3 text-sm font-medium">Role</th>
              <th className="text-left px-4 py-3 text-sm font-medium">Score</th>
              <th className="text-left px-4 py-3 text-sm font-medium">Stage</th>
              <th className="text-right px-4 py-3 text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((c) => (
              <tr key={c.id} className="border-t border-blue-100">
                <td className="px-4 py-3">
                  <div className="font-medium text-slate-900">{c.name}</div>
                </td>
                <td className="px-4 py-3 text-slate-600">{c.role}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={16} />
                    <span className="font-medium">{c.score}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">{c.stage}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 hover:bg-emerald-100">
                      <ThumbsUp size={16} /> Shortlist
                    </button>
                    <button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-rose-50 text-rose-700 border border-rose-100 hover:bg-rose-100">
                      <ThumbsDown size={16} /> Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
