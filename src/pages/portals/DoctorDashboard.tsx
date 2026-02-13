import React from 'react';
import { Users, ClipboardList, Clock } from 'lucide-react';
import { Card, Button } from '../../components/UI';
import { APPOINTMENTS, REPORTS } from '../../data';

const DoctorDashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
           <h1 className="text-3xl font-heading font-bold text-brand-text mb-2">Dr. Sarah Chen</h1>
           <p className="text-brand-textSec">Pathologist | Dashboard</p>
        </div>
        <div className="text-right">
          <p className="text-brand-accent font-bold text-xl">{new Date().toLocaleDateString()}</p>
        </div>
      </div>

       {/* Stats */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="flex items-center space-x-4 border-l-4 border-brand-accent">
           <div className="p-3 bg-brand-bg rounded-full text-brand-accent"><Clock /></div>
           <div>
             <div className="text-2xl font-bold text-brand-text">{APPOINTMENTS.length}</div>
             <div className="text-sm text-brand-textSec">Today's Appointments</div>
           </div>
        </Card>
        <Card className="flex items-center space-x-4 border-l-4 border-yellow-500">
           <div className="p-3 bg-brand-bg rounded-full text-yellow-500"><ClipboardList /></div>
           <div>
             <div className="text-2xl font-bold text-brand-text">{REPORTS.filter(r => r.status === 'Pending').length}</div>
             <div className="text-sm text-brand-textSec">Pending Reviews</div>
           </div>
        </Card>
        <Card className="flex items-center space-x-4 border-l-4 border-blue-500">
           <div className="p-3 bg-brand-bg rounded-full text-blue-500"><Users /></div>
           <div>
             <div className="text-2xl font-bold text-brand-text">124</div>
             <div className="text-sm text-brand-textSec">Total Patients</div>
           </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Patient Queue */}
         <div className="lg:col-span-2">
            <Card>
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-xl font-bold text-brand-text">Today's Schedule</h2>
                 <Button variant="outline" className="py-1 px-3 text-xs">View Calendar</Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-brand-textSec">
                  <thead className="text-xs uppercase bg-brand-bg text-brand-textSec">
                    <tr>
                      <th className="px-4 py-3">Time</th>
                      <th className="px-4 py-3">Patient</th>
                      <th className="px-4 py-3">Test</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border">
                    {APPOINTMENTS.map((app) => (
                      <tr key={app.id} className="hover:bg-brand-bg transition-colors">
                        <td className="px-4 py-3 font-mono">{app.time}</td>
                        <td className="px-4 py-3 font-bold text-brand-text">{app.patientName}</td>
                        <td className="px-4 py-3">{app.testName}</td>
                        <td className="px-4 py-3">
                           <span className={`px-2 py-1 rounded-full text-xs ${app.status === 'Confirmed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{app.status}</span>
                        </td>
                        <td className="px-4 py-3">
                           <button className="text-brand-accent hover:underline">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
         </div>

         {/* Pending Reports Quick View */}
         <div>
            <Card className="h-full">
               <h2 className="text-xl font-bold text-brand-text mb-6">Pending Reports</h2>
               <div className="space-y-4">
                 {REPORTS.filter(r => r.status === 'Pending').map(r => (
                   <div key={r.id} className="p-4 bg-brand-bg rounded border border-brand-border hover:border-brand-accent cursor-pointer transition-colors">
                      <div className="flex justify-between mb-1">
                        <span className="font-bold text-brand-text">{r.patientName}</span>
                        <span className="text-xs text-red-400 font-mono">Urgent</span>
                      </div>
                      <p className="text-sm text-brand-textSec mb-3">{r.testName}</p>
                      <Button className="w-full py-2 text-xs">Analyze & Sign</Button>
                   </div>
                 ))}
                 {REPORTS.filter(r => r.status === 'Pending').length === 0 && <p className="text-brand-textSec">All caught up!</p>}
               </div>
            </Card>
         </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;