import React from 'react';
import { Calendar } from 'lucide-react';

export default function Interviews() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-blue-700">
        <Calendar size={20} />
        <h3 className="font-semibold text-slate-900">General Interviews</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-xl p-6">
          <h4 className="font-semibold text-slate-900 mb-4">Schedule Interview</h4>
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-3">
            <input className="px-3 py-2 rounded-lg border border-blue-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Candidate name" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="date" className="px-3 py-2 rounded-lg border border-blue-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="time" className="px-3 py-2 rounded-lg border border-blue-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <select className="px-3 py-2 rounded-lg border border-blue-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Virtual</option>
                <option>On-site</option>
                <option>Phone</option>
              </select>
              <input className="px-3 py-2 rounded-lg border border-blue-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Interviewer" />
            </div>
            <textarea rows={4} className="px-3 py-2 rounded-lg border border-blue-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Notes / agenda" />
            <button className="justify-self-start px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Create Invite</button>
          </form>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-xl p-6">
          <h4 className="font-semibold text-slate-900 mb-4">Upcoming</h4>
          <ul className="divide-y divide-blue-100">
            {[
              { candidate: 'Ava Thompson', date: '2025-11-03', time: '10:00', mode: 'Virtual', interviewer: 'Maria' },
              { candidate: 'Noah Patel', date: '2025-11-05', time: '14:30', mode: 'On-site', interviewer: 'James' },
              { candidate: 'Ethan Chen', date: '2025-11-07', time: '09:00', mode: 'Phone', interviewer: 'Aria' },
            ].map((i) => (
              <li key={i.candidate} className="py-3 flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-900">{i.candidate}</p>
                  <p className="text-sm text-slate-500">{i.date} • {i.time} • {i.mode} • {i.interviewer}</p>
                </div>
                <button className="px-3 py-1.5 rounded-lg border border-blue-100 text-blue-700 hover:bg-blue-50">Details</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
