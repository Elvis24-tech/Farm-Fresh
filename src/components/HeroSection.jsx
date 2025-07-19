import { Search } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const HeroSection = ({ searchTerm, setSearchTerm }) => {
  const scrollToAnimals = () => {
    const section = document.getElementById('featured-animals');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-20 px-8 text-center">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Connect Directly with <span className="text-green-600">Local Farmers</span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Buy high-quality farm animals directly from trusted farmers.
        </p>

        <div className="flex items-center justify-center gap-2 bg-white p-3 
          border-2 border-green-200 rounded-lg max-w-2xl mx-auto mb-8 shadow-md">
          <Search className="text-green-600 w-5 h-5 flex-shrink-0" />
          <Input
            type="text"
            placeholder="Search for animals, breeds, or farmers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 border-none text-base focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg" onClick={scrollToAnimals} className="px-8 py-3 text-lg">
            Browse Animals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;