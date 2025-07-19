import { useCart } from '../context/CartContext';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Your Cart is Empty
        </h2>
        <p className="text-lg text-gray-600">
          Browse animals and add them to your cart.
        </p>
      </section>
    );
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Your Cart
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cartItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {item.breed} • {item.age}
                </p>
                <p className="text-xl font-bold text-green-600 mb-3">
                  ${item.price.toLocaleString()}
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => removeFromCart(item.id)}
                  className="w-full"
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}