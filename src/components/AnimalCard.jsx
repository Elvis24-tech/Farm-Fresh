import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Clock, MapPin, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const AnimalCard = ({ animal }) => {
  const { addToCart } = useCart();

  // 🛠️ Fallback image support
  const image = Array.isArray(animal.images) ? animal.images[0] : animal.image;

  return (
    <Card className="animal-card">
      <div className="animal-image-container">
        <img src={image} alt={animal.name} className="animal-image" />
        <Badge className="badge-overlay">{animal.breed}</Badge>
      </div>
      <CardContent className="animal-card-content">
        <h3 className="animal-name">{animal.name}</h3>
        <div className="animal-detail"><Clock className="icon" />{animal.age}</div>
        <div className="animal-detail"><MapPin className="icon" />{animal.farmer}, {animal.location}</div>
        <div className="animal-rating"><Star className="icon star" /><span>{animal.rating}</span></div>
        <div className="animal-price-bar">
          <span className="animal-price">${animal.price.toLocaleString()}</span>
          <Button size="sm" onClick={() => addToCart(animal)}>Add to Cart</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimalCard;
