import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Clock, MapPin, Star } from 'lucide-react';

const AnimalCard = ({ animal }) => {
  const { addToCart } = useCart();
  const { user, login } = useAuth();

  const handleAddToCart = () => {
    if (!user) {
      alert('You must be logged in to add to cart.');
      login();
      return;
    }
    addToCart(animal);
  };

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
          <span className="animal-price">Ksh {animal.price.toLocaleString()}</span>
          <Button size="sm" onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimalCard;
