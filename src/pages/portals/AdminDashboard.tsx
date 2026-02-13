import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Card } from '../../components/UI';

const data = [
  { name: 'Mon', tests: 40 },
  { name: 'Tue', tests: 30 },
  { name: 'Wed', tests: 55 },
  { name: 'Thu', tests: 80 },
  { name: 'Fri', tests: 65 },
  { name: 'Sat', tests: 90 },
  { name: 'Sun', tests: 45 },
];

const revenueData = [
    { name: 'Wk1', amt: 2400 },
    { name: 'Wk2', amt: 1398 },
    { name: 'Wk3', amt: 9800 },
    { name: 'Wk4', amt: 3908 },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
       <h1 className="text-3xl font-heading font-bold text-brand-text">Admin Overview</h1>
       
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center">
             <div className="text-4xl font-bold text-brand-accent mb-2">405</div>
             <div className="text-brand-textSec">Tests This Week</div>
          </Card>
          <Card className="text-center">
             <div className="text-4xl font-bold text-brand-accentSec mb-2">$12.5k</div>
             <div className="text-brand-textSec">Total Revenue</div>
          </Card>
          <Card className="text-center">
             <div className="text-4xl font-bold text-blue-400 mb-2">89</div>
             <div className="text-brand-textSec">New Patients</div>
          </Card>
           <Card className="text-center">
             <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
             <div className="text-brand-textSec">Satisfaction Rate</div>
          </Card>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
             <h3 className="text-xl font-bold text-brand-text mb-6">Weekly Test Volume</h3>
             <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip contentStyle={{backgroundColor: '#1E3D35', border: '1px solid #00F5C0', color: '#fff'}} />
                      <Bar dataKey="tests" fill="#00F5C0" />
                   </BarChart>
                </ResponsiveContainer>
             </div>
          </Card>

          <Card>
             <h3 className="text-xl font-bold text-brand-text mb-6">Revenue Trend</h3>
             <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                   <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip contentStyle={{backgroundColor: '#1E3D35', border: '1px solid #00C853', color: '#fff'}} />
                      <Line type="monotone" dataKey="amt" stroke="#00C853" strokeWidth={3} dot={{r: 4}} />
                   </LineChart>
                </ResponsiveContainer>
             </div>
          </Card>
       </div>
    </div>
  );
};

export default AdminDashboard;