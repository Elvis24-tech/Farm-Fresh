const StatsSection = () => (
  <section className="py-16 px-8 bg-green-50">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        
        <div className="bg-white p-8 rounded-lg border border-green-200 shadow-md 
          hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
          <div className="text-lg font-medium text-gray-600">Verified Farmers</div>
        </div>

        <div className="bg-white p-8 rounded-lg border border-green-200 shadow-md 
          hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="text-4xl font-bold text-green-600 mb-2">2,500+</div>
          <div className="text-lg font-medium text-gray-600">Happy Customers</div>
        </div>

        <div className="bg-white p-8 rounded-lg border border-green-200 shadow-md 
          hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="text-4xl font-bold text-green-600 mb-2">5,000+</div>
          <div className="text-lg font-medium text-gray-600">Animals Sold</div>
        </div>
        
      </div>
    </div>
  </section>
);

export default StatsSection;