import AnimalCard from './AnimalCard';

const FeaturedAnimals = ({ animals }) => (
  <section className="py-16 px-8 bg-gray-50" id="featured-animals">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Animals</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Hand-picked quality animals from verified farmers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>

      {animals.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600">No animals found matching your criteria.</p>
        </div>
      )}
    </div>
  </section>
);

export default FeaturedAnimals;