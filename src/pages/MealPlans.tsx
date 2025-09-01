import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, DollarSign } from "lucide-react"

const MealPlans = () => {
  const mealPlanOptions = [
    {
      id: 1,
      title: "Healthy Family Plan",
      description: "Balanced nutrition for the whole family with variety and taste",
      duration: "7 days",
      servings: "4 people",
      estimatedCost: "$120-150",
      features: ["Balanced macros", "Kid-friendly", "Prep-friendly"],
      color: "bg-green-100 text-green-800"
    },
    {
      id: 2,
      title: "Weight Loss",
      description: "Calorie-controlled meals designed to support healthy weight loss",
      duration: "7 days",
      servings: "2 people",
      estimatedCost: "$80-100",
      features: ["Low calorie", "High protein", "Portion controlled"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 3,
      title: "Budget-Friendly",
      description: "Nutritious meals that won't break the bank",
      duration: "7 days",
      servings: "3 people",
      estimatedCost: "$60-80",
      features: ["Affordable", "Bulk cooking", "Pantry staples"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 4,
      title: "Diabetic-Friendly",
      description: "Low-glycemic meals to help manage blood sugar levels",
      duration: "7 days",
      servings: "2 people",
      estimatedCost: "$90-120",
      features: ["Low glycemic", "High fiber", "Heart healthy"],
      color: "bg-orange-100 text-orange-800"
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Meal Plans</h1>
        <p className="text-muted-foreground">Choose a weekly meal plan that fits your lifestyle and goals.</p>
      </div>

      {/* Current Plan */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-primary">Current Active Plan</CardTitle>
              <CardDescription>Your selected meal plan for this week</CardDescription>
            </div>
            <Badge variant="secondary">Active</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Healthy Family Plan</h3>
              <p className="text-muted-foreground">Started March 18, 2024 • 3 days remaining</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">View Details</Button>
              <Button>Generate Shopping List</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Available Plans */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Available Meal Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mealPlanOptions.map((plan) => (
            <Card key={plan.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{plan.title}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </div>
                  <Badge className={plan.color} variant="secondary">New</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Plan Details */}
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{plan.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{plan.servings}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span>{plan.estimatedCost}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <p className="text-sm font-medium">Features:</p>
                  <div className="flex flex-wrap gap-2">
                    {plan.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1">Select Plan</Button>
                  <Button variant="outline">Preview</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Custom Plan Option */}
      <Card className="border-dashed">
        <CardHeader>
          <CardTitle>Need Something Custom?</CardTitle>
          <CardDescription>Create a personalized meal plan based on your specific dietary needs and preferences.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="w-full">
            <Clock className="mr-2 h-4 w-4" />
            Create Custom Plan (Coming Soon)
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default MealPlans