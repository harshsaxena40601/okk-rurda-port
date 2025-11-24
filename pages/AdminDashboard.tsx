import React, { useEffect, useState } from 'react';
import { getDashboardStats, getMessages } from '../services/api';
import { Users, MessageSquare, Briefcase, TrendingUp, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getDashboardStats().then(setStats);
    getMessages().then(setMessages);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  if (!stats) return <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
           <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
           <button onClick={handleLogout} className="flex items-center gap-2 text-slate-400 hover:text-red-500">
              <LogOut size={18} /> Logout
           </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
           <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
              <div className="flex items-center justify-between mb-4">
                 <span className="text-slate-400 text-sm">Total Visits</span>
                 <Users size={20} className="text-blue-500" />
              </div>
              <div className="text-3xl font-bold text-white">{stats.visits}</div>
           </div>
           <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
              <div className="flex items-center justify-between mb-4">
                 <span className="text-slate-400 text-sm">Messages</span>
                 <MessageSquare size={20} className="text-green-500" />
              </div>
              <div className="text-3xl font-bold text-white">{stats.messages}</div>
           </div>
           <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
              <div className="flex items-center justify-between mb-4">
                 <span className="text-slate-400 text-sm">Projects</span>
                 <Briefcase size={20} className="text-purple-500" />
              </div>
              <div className="text-3xl font-bold text-white">{stats.projects}</div>
           </div>
           <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
              <div className="flex items-center justify-between mb-4">
                 <span className="text-slate-400 text-sm">Conversion</span>
                 <TrendingUp size={20} className="text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-white">{stats.conversionRate}</div>
           </div>
        </div>

        {/* Messages Table */}
        <div className="bg-[#111] rounded-2xl border border-white/5 overflow-hidden">
           <div className="p-6 border-b border-white/5">
              <h2 className="text-xl font-bold text-white">Recent Messages</h2>
           </div>
           <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-400">
                 <thead className="bg-white/5 text-white uppercase font-bold">
                    <tr>
                       <th className="p-4">Name</th>
                       <th className="p-4">Email</th>
                       <th className="p-4">Service</th>
                       <th className="p-4">Budget</th>
                       <th className="p-4">Date</th>
                    </tr>
                 </thead>
                 <tbody>
                    {messages.map((msg) => (
                       <tr key={msg._id} className="border-b border-white/5 hover:bg-white/5">
                          <td className="p-4 text-white font-medium">{msg.name}</td>
                          <td className="p-4">{msg.email}</td>
                          <td className="p-4">
                             <span className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded text-xs font-bold">{msg.service}</span>
                          </td>
                          <td className="p-4">{msg.budget}</td>
                          <td className="p-4">{new Date(msg.date).toLocaleDateString()}</td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
