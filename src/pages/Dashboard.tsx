import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UtensilsCrossed, ShoppingCart, Calendar, TrendingUp } from "lucide-react"

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your nutrition and shopping overview.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Meal Plan</CardTitle>
            <UtensilsCrossed className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Healthy Family</div>
            <p className="text-xs text-muted-foreground">7 days remaining</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cart Items</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">$89.50 total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5/7</div>
            <p className="text-xs text-muted-foreground">meals planned</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$156</div>
            <p className="text-xs text-muted-foreground">$44 under budget</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* This Week's Meals */}
        <Card>
          <CardHeader>
            <CardTitle>This Week's Meal Plan</CardTitle>
            <CardDescription>Your scheduled meals for the week</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { day: "Monday", meal: "Grilled Chicken Salad", status: "completed" },
              { day: "Tuesday", meal: "Vegetable Stir Fry", status: "completed" },
              { day: "Wednesday", meal: "Salmon with Quinoa", status: "active" },
              { day: "Thursday", meal: "Lentil Soup", status: "pending" },
              { day: "Friday", meal: "Turkey Wrap", status: "pending" },
            ].map((item) => (
              <div key={item.day} className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <p className="font-medium">{item.day}</p>
                  <p className="text-sm text-muted-foreground">{item.meal}</p>
                </div>
                <div className={`px-2 py-1 rounded text-xs ${
                  item.status === 'completed' ? 'bg-green-100 text-green-800' :
                  item.status === 'active' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {item.status}
                </div>
              </div>
            ))}
            <Button className="w-full" variant="outline">
              View Full Meal Plan
            </Button>
          </CardContent>
        </Card>

        {/* Shopping Cart Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Shopping Cart</CardTitle>
            <CardDescription>Items ready for checkout</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Organic Chicken Breast", price: "$12.99", qty: "2 lbs" },
              { name: "Fresh Spinach", price: "$3.49", qty: "1 bag" },
              { name: "Quinoa", price: "$5.99", qty: "1 box" },
              { name: "Salmon Fillet", price: "$18.99", qty: "1 lb" },
              { name: "Red Bell Peppers", price: "$4.99", qty: "3 pieces" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.qty}</p>
                </div>
                <p className="font-semibold">{item.price}</p>
              </div>
            ))}
            <div className="flex justify-between pt-4 border-t">
              <p className="font-semibold">Total: $89.50</p>
              <Button>Checkout</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks to get you started</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <UtensilsCrossed className="h-6 w-6" />
              <span>Create New Meal Plan</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <ShoppingCart className="h-6 w-6" />
              <span>Browse Grocery Store</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Calendar className="h-6 w-6" />
              <span>Schedule Delivery</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard