import { useState } from 'react';
import { featuredAnimals } from '../data/featuredAnimals';
import { categories } from '../data/categories';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoryFilter from '../components/CategoryFilter';
import FeaturedAnimals from '../components/FeaturedAnimals';
import StatsSection from '../components/StatsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredAnimals = featuredAnimals.filter((animal) => {
    const matchesSearch =
      animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animal.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === 'all' || animal.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryFilter
        categories={categories}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />
      <FeaturedAnimals animals={filteredAnimals} />
      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;