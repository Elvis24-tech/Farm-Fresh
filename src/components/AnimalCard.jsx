import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Clock, MapPin, Star } from 'lucide-react';
import { Button } from './ui/button';

const AnimalCard = ({ animal }) => {
  const { addToCart } = useCart();
  const { user, loginWithGoogle } = useAuth();

  const handleAddToCart = async () => {
    if (!user) {
      alert('Please sign in with Google to add items to your cart.');
      await loginWithGoogle();
      return;
    }

    if (user.email === 'elvis@farmart.com') {
      alert('Admin cannot add items to cart.');
      return;
    }

    addToCart(animal);
  };

  const image = Array.isArray(animal.images) ? animal.images[0] : animal.image;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      <div className="relative">
        <img
          src={image}
          alt={animal.name}
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full">
          {animal.breed}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-2 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{animal.name}</h3>

        <div className="flex items-center text-sm text-gray-600 gap-1">
          <Clock size={14} /> {animal.age}
        </div>

        <div className="flex items-center text-sm text-gray-600 gap-1">
          <MapPin size={14} /> {animal.farmer}, {animal.location}
        </div>

        <div className="flex items-center text-sm text-yellow-500 gap-1">
          <Star size={14} fill="currentColor" /> {animal.rating}
        </div>

        <div className="mt-2 flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-800">
            Ksh {animal.price.toLocaleString()}
          </span>
          <Button
            size="sm"
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
