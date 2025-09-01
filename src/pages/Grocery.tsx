import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Filter } from "lucide-react"

const Grocery = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    "All", "Fruits & Vegetables", "Meat & Poultry", "Dairy", "Pantry", "Frozen", "Beverages"
  ]

  const products = [
    {
      id: 1,
      name: "Organic Chicken Breast",
      price: 12.99,
      unit: "per lb",
      category: "Meat & Poultry",
      seller: "Fresh Farms Co.",
      image: "🐔",
      inStock: true
    },
    {
      id: 2,
      name: "Fresh Spinach",
      price: 3.49,
      unit: "per bag",
      category: "Fruits & Vegetables",
      seller: "Green Valley",
      image: "🥬",
      inStock: true
    },
    {
      id: 3,
      name: "Organic Quinoa",
      price: 5.99,
      unit: "per box",
      category: "Pantry",
      seller: "Healthy Grains",
      image: "🌾",
      inStock: true
    },
    {
      id: 4,
      name: "Wild-Caught Salmon",
      price: 18.99,
      unit: "per lb",
      category: "Meat & Poultry",
      seller: "Ocean Fresh",
      image: "🐟",
      inStock: true
    },
    {
      id: 5,
      name: "Greek Yogurt",
      price: 4.99,
      unit: "per container",
      category: "Dairy",
      seller: "Farm Fresh Dairy",
      image: "🥛",
      inStock: false
    },
    {
      id: 6,
      name: "Red Bell Peppers",
      price: 4.99,
      unit: "per 3-pack",
      category: "Fruits & Vegetables",
      seller: "Garden Fresh",
      image: "🫑",
      inStock: true
    },
    {
      id: 7,
      name: "Brown Rice",
      price: 3.99,
      unit: "per bag",
      category: "Pantry",
      seller: "Grain Masters",
      image: "🍚",
      inStock: true
    },
    {
      id: 8,
      name: "Organic Eggs",
      price: 6.49,
      unit: "per dozen",
      category: "Dairy",
      seller: "Happy Hens Farm",
      image: "🥚",
      inStock: true
    }
  ]

  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Grocery Marketplace</h1>
        <p className="text-muted-foreground">Browse and add fresh ingredients to your cart.</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="text-center">
                <div className="text-4xl mb-2">{product.image}</div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription className="text-sm">{product.seller}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">${product.price}</p>
                  <p className="text-sm text-muted-foreground">{product.unit}</p>
                </div>
                <Badge variant="secondary">{product.category}</Badge>
              </div>
              
              {product.inStock ? (
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              ) : (
                <Button className="w-full" variant="secondary" disabled>
                  Out of Stock
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default Grocery