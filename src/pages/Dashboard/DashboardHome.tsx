import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/Card";
import { Users, Gauge, Activity, Settings, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Admin Users",
    value: "12",
    description: "Active system administrators",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "Registered Meters",
    value: "248",
    description: "Total meters in the system",
    icon: Gauge,
    color: "text-green-600",
  },
  {
    title: "Recent Readings",
    value: "1,429",
    description: "Readings this month",
    icon: Activity,
    color: "text-purple-600",
  },
  {
    title: "Active Limits",
    value: "56",
    description: "Consumption limit rules",
    icon: Settings,
    color: "text-orange-600",
  },
];

export default function DashboardHome() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
        <p className="text-muted-foreground text-white">
          Monitor and manage your energy consumption system
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="shadow-soft hover:shadow-medium transition-shadow duration-200 border border-zinc-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground text-white">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1 text-white">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Welcome Section */}
      <Card className="shadow-medium border border-zinc-900">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-primary text-white" />
            <span className="text-white">Welcome to EnergyFlow Dashboard</span>
          </CardTitle>
          <CardDescription className="text-white">
            Your comprehensive solution for energy consumption management
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground text-white">
            Use the sidebar navigation to access different modules of the system:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-primary text-purple-600" />
              <span className="text-white"><strong>Admin Users:</strong> Manage system administrators</span>
            </li>
            <li className="flex items-center space-x-2">
              <Gauge className="h-4 w-4 text-primary text-purple-600" />
              <span className="text-white"><strong>Meter Registration:</strong> Add and configure meters</span>
            </li>
            <li className="flex items-center space-x-2">
              <Activity className="h-4 w-4 text-primary text-purple-600" />
              <span className="text-white"><strong>Consumption Readings:</strong> Record energy usage data</span>
            </li>
            <li className="flex items-center space-x-2">
              <Settings className="h-4 w-4 text-primary text-purple-600" />
              <span className="text-white"><strong>Consumption Limits:</strong> Set usage thresholds and alerts</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}