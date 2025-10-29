import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const isCartEmpty = cartItems.length === 0;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 150 ? 0 : 10; // Exemple: livraison gratuite au-dessus de 150$
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {isCartEmpty ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <ShoppingCart className="w-24 h-24 text-gray-400 mb-6" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is currently empty.</h2>
              <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
              <Link to="/" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Return to shop
              </Link>

              <div className="mt-12 text-gray-700">
                <h3 className="text-xl font-semibold mb-4">DO YOU NEED HELP ?</h3>
                <p className="mb-2">We offer Chat & Email Support.</p>
                <p className="text-sm">Mon – Fri: 9am – 10pm PST</p>
                <p className="text-sm">Sat & Sun: 11am – 10pm PST</p>
                <p className="mt-4">[email protected]</p>
                <p className="text-sm">Response within 1-2 business days.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-foreground mb-6">Your Cart ({cartItems.length} items)</h2>
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex items-center border rounded-lg p-4 bg-card shadow-sm">
                      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground text-lg">{item.name}</h3>
                        <p className="text-muted-foreground">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center text-foreground">{item.quantity}</span>
                        <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="ml-4 text-foreground font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                      <Button variant="ghost" size="icon" className="ml-4 text-red-500 hover:text-red-700" onClick={() => removeFromCart(item.id)}>
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="border rounded-lg p-6 bg-card shadow-sm">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Cart Totals</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between text-foreground">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-foreground">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? "Free" : `${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-foreground border-t pt-4 mt-4">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 mt-6">
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;