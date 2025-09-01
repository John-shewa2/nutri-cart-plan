import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { User, Mail, MapPin, CreditCard, Bell, Shield, Crown } from "lucide-react"

const Profile = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Profile Settings</h1>
        <p className="text-muted-foreground">Manage your account information and preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <div className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <p className="text-sm text-muted-foreground">john.doe@email.com</p>
                  <Badge variant="secondary" className="mt-1">
                    <Crown className="mr-1 h-3 w-3" />
                    Free Plan
                  </Badge>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Member since</span>
                  <span className="text-sm font-medium">March 2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total Orders</span>
                  <span className="text-sm font-medium">4</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total Saved</span>
                  <span className="text-sm font-medium">$127.50</span>
                </div>
              </div>

              <Button className="w-full" variant="outline">
                <Crown className="mr-2 h-4 w-4" />
                Upgrade to Premium
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your basic account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@email.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          {/* Dietary Preferences */}
          <Card>
            <CardHeader>
              <CardTitle>Dietary Preferences</CardTitle>
              <CardDescription>Help us personalize your meal plans</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" placeholder="30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Weekly Budget</Label>
                  <Input id="budget" type="number" placeholder="200" />
                </div>
              </div>

              <div className="space-y-3">
                <Label>Dietary Restrictions</Label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Vegetarian",
                    "Vegan", 
                    "Gluten-Free",
                    "Dairy-Free",
                    "Nut-Free",
                    "Low-Carb",
                    "Diabetic-Friendly",
                    "Heart-Healthy"
                  ].map((diet) => (
                    <div key={diet} className="flex items-center space-x-2">
                      <Switch id={diet.toLowerCase()} />
                      <Label htmlFor={diet.toLowerCase()} className="text-sm">{diet}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button>Update Preferences</Button>
            </CardContent>
          </Card>

          {/* Delivery Address */}
          <Card>
            <CardHeader>
              <CardTitle>Delivery Address</CardTitle>
              <CardDescription>Manage your delivery locations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Home</p>
                      <p className="text-sm text-muted-foreground">
                        123 Main Street<br />
                        Apartment 4B<br />
                        City, State 12345
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary">Default</Badge>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                <MapPin className="mr-2 h-4 w-4" />
                Add New Address
              </Button>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Control how you receive updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "Order updates", description: "Get notified about order status changes" },
                { label: "Meal plan reminders", description: "Reminders to plan your weekly meals" },
                { label: "Promotional offers", description: "Special deals and discounts" },
                { label: "New products", description: "Notifications about new grocery items" }
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <Switch />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Account Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Account Actions</CardTitle>
              <CardDescription>Manage your account security and data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2">
                <Button variant="outline">
                  <Shield className="mr-2 h-4 w-4" />
                  Change Password
                </Button>
                <Button variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  Update Email
                </Button>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Button variant="outline" className="w-full">
                  Export My Data
                </Button>
                <Button variant="destructive" className="w-full">
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Profile