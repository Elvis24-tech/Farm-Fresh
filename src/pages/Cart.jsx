import { useCart } from '../context/CartContext';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <section className="section text-center">
        <h2 className="section-title">Your Cart is Empty</h2>
        <p className="section-subtitle">Browse animals and add them to your cart.</p>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Your Cart</h2>
        <div className="animal-grid">
          {cartItems.map((item) => (
            <Card key={item.id}>
              <div className="animal-image-container">
                <img src={item.image} alt={item.name} className="animal-image" />
              </div>
              <CardContent>
                <h3 className="animal-name">{item.name}</h3>
                <p className="animal-detail">{item.breed} • {item.age}</p>
                <p className="animal-price">${item.price.toLocaleString()}</p>
                <Button variant="outline" onClick={() => removeFromCart(item.id)}>
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
