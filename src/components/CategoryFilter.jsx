import { Button } from './ui/button';
import { Badge } from './ui/badge';

const CategoryFilter = ({ categories, selectedFilter, onFilterChange }) => (
  <section className="category-filter-section">
    <div className="category-buttons">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedFilter === category.id ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(category.id)}
          className="category-button"
        >
          {category.name}
          <Badge variant="secondary" className="category-badge">{category.count}</Badge>
        </Button>
      ))}
    </div>
  </section>
);

export default CategoryFilter;
