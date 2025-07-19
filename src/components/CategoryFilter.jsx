import { Button } from './ui/button';
import { Badge } from './ui/badge';

const CategoryFilter = ({ categories, selectedFilter, onFilterChange }) => (
  <section className="py-8 px-8 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedFilter === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => onFilterChange(category.id)}
            className="flex items-center gap-2 px-4 py-2 rounded-full"
          >
            {category.name}
            <Badge variant="secondary" className="ml-1">
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>
    </div>
  </section>
);

export default CategoryFilter;