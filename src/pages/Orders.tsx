import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, Calendar, MapPin, RefreshCw } from "lucide-react"

const Orders = () => {
  const orders = [
    {
      id: "ORD-001",
      date: "2024-03-20",
      status: "delivered",
      total: 89.50,
      items: 12,
      deliveryDate: "2024-03-21",
      address: "123 Main St, City, State"
    },
    {
      id: "ORD-002", 
      date: "2024-03-18",
      status: "in_transit",
      total: 156.75,
      items: 18,
      deliveryDate: "2024-03-22",
      address: "123 Main St, City, State"
    },
    {
      id: "ORD-003",
      date: "2024-03-15",
      status: "processing",
      total: 73.25,
      items: 9,
      deliveryDate: "2024-03-23",
      address: "123 Main St, City, State"
    },
    {
      id: "ORD-004",
      date: "2024-03-12",
      status: "delivered",
      total: 124.30,
      items: 15,
      deliveryDate: "2024-03-14",
      address: "123 Main St, City, State"
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'delivered':
        return <Badge className="bg-green-100 text-green-800">Delivered</Badge>
      case 'in_transit':
        return <Badge className="bg-blue-100 text-blue-800">In Transit</Badge>
      case 'processing':
        return <Badge className="bg-yellow-100 text-yellow-800">Processing</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Order History</h1>
        <p className="text-muted-foreground">Track your grocery orders and delivery status.</p>
      </div>

      {/* Current Order (if any) */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-primary">Current Order</CardTitle>
              <CardDescription>Your most recent grocery order</CardDescription>
            </div>
            <Badge className="bg-blue-100 text-blue-800">In Transit</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <Package className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">#ORD-002</p>
                <p className="text-sm text-muted-foreground">18 items</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Est. Delivery</p>
                <p className="text-sm text-muted-foreground">March 22, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Delivery Address</p>
                <p className="text-sm text-muted-foreground">123 Main St</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-primary">$156.75</div>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Track Order
            </Button>
            <Button variant="outline">View Details</Button>
          </div>
        </CardContent>
      </Card>

      {/* Order History */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Past Orders</h2>
        
        {orders.map((order) => (
          <Card key={order.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{order.id}</h3>
                      {getStatusBadge(order.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ordered on {new Date(order.date).toLocaleDateString()} • {order.items} items
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {order.address}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:items-end gap-2">
                  <p className="text-2xl font-bold">${order.total}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button variant="outline" size="sm">Reorder</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State (when no orders) */}
      {orders.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold mb-2">No orders yet</h3>
            <p className="text-muted-foreground mb-4">Start shopping to see your order history here!</p>
            <Button>
              <Package className="mr-2 h-4 w-4" />
              Start Shopping
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default Orders