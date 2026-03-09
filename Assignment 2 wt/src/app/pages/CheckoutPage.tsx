import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { products } from "../data/products";
import { getCartFromStorage, clearCart } from "../data/cart";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { CreditCard, Truck, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export function CheckoutPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(getCartFromStorage());
  const [step, setStep] = useState<'info' | 'payment' | 'confirmation'>('info');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('card');

  useEffect(() => {
    const currentCart = getCartFromStorage();
    if (currentCart.items.length === 0) {
      navigate('/cart');
    }
    setCart(currentCart);
  }, [navigate]);

  const cartItems = cart.items.map(item => {
    const product = products.find(p => p.id === item.productId);
    return { ...item, product };
  }).filter(item => item.product);

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + (item.product?.price || 0) * item.quantity;
  }, 0);

  const shippingCost = shippingMethod === 'express' ? 19.99 : subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shippingCost + tax;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 'info') {
      setStep('payment');
    } else if (step === 'payment') {
      // Simulate order processing
      setStep('confirmation');
      clearCart();
      window.dispatchEvent(new Event('cart-updated'));
      toast.success("Order placed successfully!");
    }
  };

  if (step === 'confirmation') {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle2 className="h-24 w-24 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your purchase. We've sent a confirmation email with your order details.
          </p>
          
          <Card className="p-6 mb-8 text-left">
            <h2 className="font-bold text-xl mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {cartItems.map(item => (
                <div key={item.productId} className="flex justify-between">
                  <span>{item.product?.name} x{item.quantity}</span>
                  <span>${((item.product?.price || 0) * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-blue-600">${total.toFixed(2)}</span>
            </div>
          </Card>

          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/products')}>
              Continue Shopping
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/')}>
              Go to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmitOrder}>
            {step === 'info' && (
              <div className="space-y-6">
                {/* Shipping Information */}
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Street Address *</Label>
                      <Input id="address" required />
                    </div>
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" required />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input id="state" required />
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP Code *</Label>
                      <Input id="zip" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                  </div>
                </Card>

                {/* Shipping Method */}
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Shipping Method</h2>
                  <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                    <div className="flex items-center justify-between p-4 border rounded-lg mb-3">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard" className="flex items-center gap-2 cursor-pointer">
                          <Truck className="h-5 w-5" />
                          <div>
                            <div className="font-semibold">Standard Shipping</div>
                            <div className="text-sm text-gray-600">5-7 business days</div>
                          </div>
                        </Label>
                      </div>
                      <span className="font-semibold">
                        {subtotal > 50 ? 'Free' : '$9.99'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="express" id="express" />
                        <Label htmlFor="express" className="flex items-center gap-2 cursor-pointer">
                          <Truck className="h-5 w-5" />
                          <div>
                            <div className="font-semibold">Express Shipping</div>
                            <div className="text-sm text-gray-600">2-3 business days</div>
                          </div>
                        </Label>
                      </div>
                      <span className="font-semibold">$19.99</span>
                    </div>
                  </RadioGroup>
                </Card>

                <Button type="submit" size="lg" className="w-full">
                  Continue to Payment
                </Button>
              </div>
            )}

            {step === 'payment' && (
              <div className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center gap-3 p-4 border rounded-lg mb-3">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                        <CreditCard className="h-5 w-5" />
                        Credit/Debit Card
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === 'card' && (
                    <div className="mt-6 space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date *</Label>
                          <Input id="expiry" placeholder="MM/YY" required />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input id="cvv" placeholder="123" required />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cardName">Name on Card *</Label>
                        <Input id="cardName" required />
                      </div>
                    </div>
                  )}
                </Card>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    onClick={() => setStep('info')}
                  >
                    Back
                  </Button>
                  <Button type="submit" size="lg" className="flex-1">
                    Place Order
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-20">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              {cartItems.map(item => (
                <div key={item.productId} className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {item.product?.name} x{item.quantity}
                  </span>
                  <span>${((item.product?.price || 0) * item.quantity).toFixed(2)}</span>
                </div>
              ))}

              <Separator />

              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">
                  {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </div>

              <Separator />

              <div className="flex justify-between text-lg">
                <span className="font-bold">Total</span>
                <span className="font-bold text-blue-600">${total.toFixed(2)}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
