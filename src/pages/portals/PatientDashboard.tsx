import React, { useState } from 'react';
import { FileText, Calendar, Activity, Download } from 'lucide-react';
import { Card, Button, Modal } from '../../components/UI';
import { REPORTS, APPOINTMENTS } from '../../data';

const PatientDashboard: React.FC = () => {
  const [viewReport, setViewReport] = useState<string | null>(null);

  const myReports = REPORTS.filter(r => r.patientName === 'John Doe'); // Mock filtered data
  const myAppointments = APPOINTMENTS.filter(a => a.patientName === 'John Doe');

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-heading font-bold text-brand-text mb-2">Hello, John Doe</h1>
        <p className="text-brand-textSec">Welcome to your health dashboard.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="flex items-center space-x-4">
           <div className="p-3 bg-blue-500/20 rounded-full text-blue-400"><FileText /></div>
           <div>
             <div className="text-2xl font-bold text-brand-text">{myReports.length}</div>
             <div className="text-sm text-brand-textSec">Total Reports</div>
           </div>
        </Card>
        <Card className="flex items-center space-x-4">
           <div className="p-3 bg-brand-accent/20 rounded-full text-brand-accent"><Calendar /></div>
           <div>
             <div className="text-2xl font-bold text-brand-text">{myAppointments.filter(a => a.status === 'Confirmed').length}</div>
             <div className="text-sm text-brand-textSec">Upcoming Visits</div>
           </div>
        </Card>
        <Card className="flex items-center space-x-4">
           <div className="p-3 bg-purple-500/20 rounded-full text-purple-400"><Activity /></div>
           <div>
             <div className="text-2xl font-bold text-brand-text">Good</div>
             <div className="text-sm text-brand-textSec">Health Status</div>
           </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Reports */}
        <Card>
           <h2 className="text-xl font-bold text-brand-text mb-6">Recent Reports</h2>
           <div className="space-y-4">
             {myReports.map(report => (
               <div key={report.id} className="flex justify-between items-center p-4 bg-brand-bg rounded-lg border border-brand-border">
                 <div>
                   <h4 className="font-bold text-brand-text">{report.testName}</h4>
                   <p className="text-xs text-brand-textSec">{report.date}</p>
                 </div>
                 <div className="flex items-center space-x-3">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${report.status === 'Ready' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                      {report.status}
                    </span>
                    {report.status === 'Ready' && (
                      <button onClick={() => setViewReport(report.id)} className="p-2 hover:bg-brand-accent/10 rounded-full text-brand-accent">
                        <Download className="h-5 w-5" />
                      </button>
                    )}
                 </div>
               </div>
             ))}
           </div>
        </Card>

        {/* Appointments */}
        <Card>
           <h2 className="text-xl font-bold text-brand-text mb-6">Upcoming Appointments</h2>
           <div className="space-y-4">
             {myAppointments.map(app => (
               <div key={app.id} className="flex justify-between items-center p-4 bg-brand-bg rounded-lg border border-brand-border">
                 <div>
                   <h4 className="font-bold text-brand-text">{app.testName}</h4>
                   <p className="text-xs text-brand-textSec">{app.date} at {app.time}</p>
                 </div>
                 <div className="text-right">
                   <div className="text-sm text-brand-accent">{app.doctorName}</div>
                   <span className="text-xs text-brand-textSec">Ref: #{app.id}</span>
                 </div>
               </div>
             ))}
             {myAppointments.length === 0 && <p className="text-brand-textSec text-center py-4">No upcoming appointments.</p>}
           </div>
        </Card>
      </div>

      <Modal isOpen={!!viewReport} onClose={() => setViewReport(null)} title="Medical Report Viewer">
         <div className="h-96 flex flex-col items-center justify-center bg-brand-bg/5 rounded border border-brand-border border-dashed">
            <FileText className="h-16 w-16 text-brand-textSec mb-4" />
            <p className="text-brand-textSec mb-4">Previewing PDF Report #{viewReport}</p>
            <Button onClick={() => alert("Downloading PDF...")}>Download Full PDF</Button>
         </div>
      </Modal>
    </div>
  );
};

export default PatientDashboard;