import AnimalCard from './AnimalCard';

const FeaturedAnimals = ({ animals }) => (
  <section className="featured-section">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Featured Animals</h2>
        <p className="section-subtitle">Hand-picked quality animals from verified farmers</p>
      </div>
      <div className="animal-grid">
        {animals.map((animal) => <AnimalCard key={animal.id} animal={animal} />)}
      </div>
      {animals.length === 0 && (
        <div className="no-animals">
          <p>No animals found matching your criteria.</p>
        </div>
      )}
    </div>
  </section>
);

export default FeaturedAnimals;
