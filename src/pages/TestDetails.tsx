import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Info, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button, Card } from '../components/UI';
import { TESTS } from '../data';

const TestDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [test, setTest] = useState<typeof TESTS[0] | null>(null);

  useEffect(() => {
    const foundTest = TESTS.find(t => t.id === id);
    if (foundTest) {
      setTest(foundTest);
    }
  }, [id]);

  if (!test) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-text mb-4">Test Not Found</h2>
          <Button onClick={() => navigate('/diagnostics')}>Browse All Tests</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg py-12 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-start">
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center text-brand-textSec hover:text-brand-accent mb-8 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" /> Back to Catalog
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8 text-center">
             {/* Header */}
             <div>
                <div className="flex items-center justify-center space-x-3 mb-4">
                   <span className="bg-brand-accent/20 text-brand-accent px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                     {test.category}
                   </span>
                </div>
                <h1 className="text-4xl font-heading font-bold text-brand-text mb-6">{test.name}</h1>
                <div className="flex justify-center">
                    <p className="text-xl text-brand-textSec leading-relaxed max-w-2xl">
                      {test.description}
                    </p>
                </div>
             </div>

             {/* Details Cards */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="flex flex-col items-center text-center space-y-2">
                   <div className="p-3 bg-blue-500/20 rounded-full text-blue-400 mb-2"><Clock /></div>
                   <div>
                      <h4 className="font-bold text-brand-text text-lg">Turnaround Time</h4>
                      <p className="text-brand-textSec">{test.turnaround}</p>
                   </div>
                </Card>
                <Card className="flex flex-col items-center text-center space-y-2">
                   <div className="p-3 bg-yellow-500/20 rounded-full text-yellow-400 mb-2"><AlertCircle /></div>
                   <div>
                      <h4 className="font-bold text-brand-text text-lg">Preparation</h4>
                      <p className="text-brand-textSec">{test.preparation}</p>
                   </div>
                </Card>
             </div>
             
             <Card className="text-center">
                <div className="flex items-center justify-center mb-4">
                    <h3 className="text-xl font-bold text-brand-text flex items-center">
                       <Info className="mr-2 h-5 w-5 text-brand-accent" /> Why take this test?
                    </h3>
                </div>
                <ul className="space-y-3 text-brand-textSec inline-block text-left">
                   <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-brand-accent mr-3 shrink-0" />
                      <span>Early detection of underlying health conditions.</span>
                   </li>
                   <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-brand-accent mr-3 shrink-0" />
                      <span>Monitoring effectiveness of ongoing treatments.</span>
                   </li>
                   <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-brand-accent mr-3 shrink-0" />
                      <span>Routine health screening for preventative care.</span>
                   </li>
                </ul>
             </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
             <Card className="sticky top-24 border-brand-accent/50 shadow-[0_0_20px_rgba(0,245,192,0.15)] text-center">
                <div className="mb-6">
                   <span className="text-brand-textSec text-sm">Estimated Price</span>
                   <div className="text-4xl font-bold text-brand-text mt-1">${test.price}</div>
                </div>
                
                <div className="space-y-4 mb-8">
                   <div className="flex items-center justify-between text-sm text-brand-textSec pb-2 border-b border-brand-border">
                      <span>Lab Visit</span>
                      <span className="text-green-400 font-bold">Available</span>
                   </div>
                   <div className="flex items-center justify-between text-sm text-brand-textSec pb-2 border-b border-brand-border">
                      <span>Home Collection</span>
                      <span className="text-green-400 font-bold">Available</span>
                   </div>
                   <div className="flex items-center justify-between text-sm text-brand-textSec">
                      <span>Digital Report</span>
                      <span className="text-green-400 font-bold">Included</span>
                   </div>
                </div>

                <Button 
                   onClick={() => navigate('/appointments', { state: { selectedTest: test.id } })} 
                   className="w-full py-4 text-lg mb-4"
                >
                   Book This Test
                </Button>
                <p className="text-xs text-center text-gray-500">
                   *Prices may vary slightly based on location and urgent requests.
                </p>
             </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDetails;