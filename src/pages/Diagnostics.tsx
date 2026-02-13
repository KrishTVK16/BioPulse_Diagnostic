import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, Info, Clock, ArrowRight } from 'lucide-react';
import { Button, Card, SectionTitle } from '../components/UI';
import { TESTS } from '../data';

const Diagnostics: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  
  const [filter, setFilter] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');

  // Update local filter state if URL params change
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
        setFilter(cat);
    }
  }, [searchParams]);

  // Update URL if local filter changes
  const handleFilterChange = (newCategory: string) => {
      setFilter(newCategory);
      if (newCategory === 'All') {
          setSearchParams({});
      } else {
          setSearchParams({ category: newCategory });
      }
  };

  const categories = ['All', 'Pathology', 'Cardiac', 'Thyroid', 'Diabetes', 'Vitamin', 'Radiology', 'Allergy'];

  const filteredTests = TESTS.filter(test => {
    const matchesCategory = filter === 'All' || test.category === filter;
    const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-brand-bg py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Diagnostic Catalog" subtitle="Browse our comprehensive list of tests and packages." />

        {/* Filters & Search */}
        <div className="flex flex-col items-center mb-10 gap-6">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search tests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-brand-bgSec border border-brand-border rounded-lg pl-10 pr-4 py-2 text-brand-text text-center focus:outline-none focus:border-brand-accent transition-colors placeholder-brand-textSec"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-brand-textSec" />
          </div>

          <div className="flex flex-wrap justify-center gap-2 w-full">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  filter === cat 
                  ? 'bg-brand-accent text-white border-brand-accent shadow-[0_0_10px_rgba(13,148,136,0.4)] dark:shadow-[0_0_10px_rgba(0,245,192,0.4)]' 
                  : 'bg-transparent text-brand-textSec border-brand-border hover:text-brand-text hover:border-brand-accent/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test) => (
            <Card key={test.id} className="flex flex-col h-full group text-center items-center">
              <div className="w-full flex justify-between items-center mb-4">
                 <span className="bg-brand-bg px-2 py-1 rounded text-xs font-bold text-brand-accent uppercase tracking-wider border border-brand-accent/20 mx-auto">{test.category}</span>
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-accent transition-colors">{test.name}</h3>
              <p className="text-brand-textSec text-sm mb-4 flex-grow line-clamp-3">{test.description}</p>
              
              <div className="bg-brand-bg/50 px-3 py-1 rounded-full border border-brand-border mb-4 inline-block">
                 <span className="text-brand-accentSec font-bold text-lg">${test.price}</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2 text-xs text-brand-textSec mb-6">
                 <Clock className="h-4 w-4" />
                 <span>Result in {test.turnaround}</span>
              </div>

              <div className="flex gap-3 mt-auto w-full">
                 <Button variant="outline" className="flex-1 py-2 text-sm" onClick={() => navigate(`/test/${test.id}`)}>
                    Details
                 </Button>
                 <Button className="flex-1 py-2 text-sm" onClick={() => navigate('/appointments', { state: { selectedTest: test.id } })}>
                    Book
                 </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredTests.length === 0 && (
          <div className="text-center py-20 bg-brand-bgSec/30 rounded-xl border border-dashed border-brand-border">
            <Info className="h-16 w-16 text-brand-textSec mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-brand-textSec">No tests found</h3>
            <p className="text-brand-textSec mt-2">Try adjusting your filters or search for something else.</p>
            <Button variant="outline" onClick={() => {setFilter('All'); setSearchTerm(''); setSearchParams({});}} className="mt-6">Clear Filters</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Diagnostics;