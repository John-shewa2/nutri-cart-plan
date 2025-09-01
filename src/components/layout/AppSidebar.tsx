import { NavLink, useLocation } from "react-router-dom"
import { 
  LayoutDashboard, 
  UtensilsCrossed, 
  ShoppingCart, 
  ShoppingBag, 
  Receipt, 
  User,
  Menu
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

const navigation = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Meal Plans", url: "/meal-plans", icon: UtensilsCrossed },
  { title: "Grocery", url: "/grocery", icon: ShoppingBag },
  { title: "Cart", url: "/cart", icon: ShoppingCart },
  { title: "Orders", url: "/orders", icon: Receipt },
  { title: "Profile", url: "/profile", icon: User },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const isCollapsed = state === "collapsed"

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : "hover:bg-sidebar-accent/50"

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-60"} collapsible="icon">
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <UtensilsCrossed className="w-4 h-4 text-primary-foreground" />
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="text-lg font-bold text-sidebar-foreground">NutriCart</h1>
              <p className="text-xs text-sidebar-foreground/60">Smart Grocery & Nutrition</p>
            </div>
          )}
        </div>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"}
                      className={getNavCls}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="p-2 border-t border-sidebar-border mt-auto">
        <SidebarTrigger className="w-full justify-center">
          <Menu className="h-4 w-4" />
        </SidebarTrigger>
      </div>
    </Sidebar>
  )
}