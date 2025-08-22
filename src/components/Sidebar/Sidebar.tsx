import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  Gauge, 
  Activity, 
  Settings
} from "lucide-react";
import { cn } from "../../lib/utils";
import logo from "../../assets/Group 2260.svg";

const navigationItems = [
  { title: "Dashboard", href: ".", icon: LayoutDashboard }, // "." = rota index
  { title: "Usuário Admin", href: "admin-users", icon: Users },
  { title: "Registro de Medidores", href: "medidores", icon: Gauge },
  { title: "Leituras de Consumo", href: "leituras", icon: Activity },
  { title: "Limites de Consumo", href: "limite", icon: Settings },
];


export function Sidebar() {
  return (
    <div className="bg-black hidden md:flex h-screen w-64 flex-col fixed left-0 top-0 bg-sidebar border-r border-dashboard-border border-r border-zinc-900">
      <div className="flex h-16 items-center px-6 border-b border-dashboard-border border-b border-zinc-900">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="" className="w-32 h-32" />
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-4 py-6 text-white">
        {navigationItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                isActive
                  ? "bg-accent text-accent-foreground shadow-soft"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              )
            }
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.title}
          </NavLink>
        ))}
      </nav>

      <div className="px-4 py-4 border-t border-dashboard-border">
        <div className="text-xs text-muted-foreground text-white">
          v1.0.0 - Dashboard
        </div>
      </div>
    </div>
  );
}