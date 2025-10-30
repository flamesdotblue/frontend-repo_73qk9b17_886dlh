import React from 'react';
import { LayoutDashboard, Users, FileCode, CheckCircle2 } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, trend }) => (
  <div className="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-xl p-5 shadow-sm hover:shadow-md transition">
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
        <Icon size={22} />
      </div>
      <div className="flex-1">
        <p className="text-sm text-slate-500">{label}</p>
        <p className="text-2xl font-semibold text-slate-900">{value}</p>
      </div>
      {trend && (
        <span className={`text-sm font-medium ${trend > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
          {trend > 0 ? '+' : ''}{trend}%
        </span>
      )}
    </div>
  </div>
);

const MiniBar = ({ values, color = 'bg-blue-500' }) => (
  <div className="flex items-end gap-1 h-16">
    {values.map((v, i) => (
      <div key={i} className={`w-3 rounded-sm ${color}`} style={{ height: `${v}%` }} />
    ))}
  </div>
);

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} label="Candidates" value="1,248" trend={8.4} />
        <StatCard icon={LayoutDashboard} label="Open Roles" value="24" trend={-2.1} />
        <StatCard icon={FileCode} label="Assessments" value="76" trend={4.3} />
        <StatCard icon={CheckCircle2} label="Pass Rate" value="62%" trend={1.2} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/70 backdrop-blur-sm border border-blue-100 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-900 font-semibold">Weekly Applications</h3>
            <span className="text-sm text-slate-500">Last 8 weeks</span>
          </div>
          <div className="flex items-end gap-3">
            <MiniBar values={[20, 40, 35, 55, 38, 70, 64, 82]} />
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-xl p-6">
          <h3 className="text-slate-900 font-semibold mb-4">Stage Conversion</h3>
          <div className="space-y-3">
            {[
              { label: 'Screening', value: 85 },
              { label: 'Technical', value: 64 },
              { label: 'Interview', value: 48 },
              { label: 'Offer', value: 22 },
            ].map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-sm text-slate-600 mb-1">
                  <span>{s.label}</span>
                  <span>{s.value}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600" style={{ width: `${s.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
