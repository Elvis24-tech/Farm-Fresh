import { Search } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const HeroSection = ({ searchTerm, setSearchTerm }) => {
  const scrollToAnimals = () => {
    const section = document.getElementById('featured-animals');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFarmerClick = () => {
    alert("Redirecting to farmer registration (not implemented)");
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">
          Connect Directly with <span className="highlight">Local Farmers</span>
        </h1>
        <p className="hero-subtitle">
          Buy high-quality farm animals directly from trusted farmers.
        </p>
        <div className="hero-searchbar">
          <Search className="search-icon" />
          <Input
            type="text"
            placeholder="Search for animals, breeds, or farmers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="hero-input"
          />
        </div>
        <div className="hero-buttons">
          <Button size="lg" onClick={scrollToAnimals}>Browse Animals</Button>
          <Button variant="outline" size="lg" onClick={handleFarmerClick}>I'm a Farmer</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
