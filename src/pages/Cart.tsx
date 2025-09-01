import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

const Cart = () => {
  // Mock cart data
  const cartItems = [
    {
      id: 1,
      name: "Organic Chicken Breast",
      price: 12.99,
      quantity: 2,
      unit: "lbs",
      image: "🐔",
      seller: "Fresh Farms Co."
    },
    {
      id: 2,
      name: "Fresh Spinach",
      price: 3.49,
      quantity: 1,
      unit: "bag",
      image: "🥬",
      seller: "Green Valley"
    },
    {
      id: 3,
      name: "Organic Quinoa",
      price: 5.99,
      quantity: 1,
      unit: "box",
      image: "🌾",
      seller: "Healthy Grains"
    },
    {
      id: 4,
      name: "Wild-Caught Salmon",
      price: 18.99,
      quantity: 1,
      unit: "lb",
      image: "🐟",
      seller: "Ocean Fresh"
    },
    {
      id: 5,
      name: "Red Bell Peppers",
      price: 4.99,
      quantity: 1,
      unit: "3-pack",
      image: "🫑",
      seller: "Garden Fresh"
    }
  ]

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const tax = subtotal * 0.08 // 8% tax
  const deliveryFee = 5.99
  const total = subtotal + tax + deliveryFee

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
        <p className="text-muted-foreground">Review your items and proceed to checkout.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cart Items ({cartItems.length})</CardTitle>
              <CardDescription>Manage your selected products</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {cartItems.map((item, index) => (
                <div key={item.id}>
                  <div className="flex items-center gap-4 p-4 rounded-lg border">
                    <div className="text-3xl">{item.image}</div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.seller}</p>
                      <p className="text-sm font-medium">${item.price} per {item.unit}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Input 
                          type="number" 
                          value={item.quantity} 
                          className="w-16 text-center h-8"
                          min="1"
                        />
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <div className="text-right min-w-[80px]">
                        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      
                      <Button variant="ghost" size="icon" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  {index < cartItems.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* From Meal Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Add from Meal Plan</CardTitle>
              <CardDescription>Missing ingredients from your current meal plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Olive Oil", price: 7.99, image: "🫒" },
                  { name: "Garlic", price: 1.99, image: "🧄" },
                  { name: "Lemon", price: 2.49, image: "🍋" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.image}</span>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">${item.price}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Plus className="h-3 w-3 mr-1" />
                      Add
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full" size="lg">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Proceed to Checkout
              </Button>

              <Button variant="outline" className="w-full">
                Continue Shopping
              </Button>
            </CardContent>
          </Card>

          {/* Delivery Info */}
          <Card>
            <CardHeader>
              <CardTitle>Delivery Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm"><strong>Estimated Delivery:</strong> Tomorrow, 2-4 PM</p>
              <p className="text-sm"><strong>Delivery Address:</strong> 123 Main St, City, State</p>
              <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                Change delivery details
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Empty Cart State (hidden when items exist) */}
      {cartItems.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <div className="text-6xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground mb-4">Add some delicious items to get started!</p>
            <Button>
              <ShoppingBag className="mr-2 h-4 w-4" />
              Start Shopping
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default Cart