import { TreePalm, Leaf, Droplets, Activity, Thermometer, Target, AlertTriangle, TrendingUp } from "lucide-react"

const stats = [
  {
    label: "Total Active Fields",
    value: "24",
    icon: TreePalm,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "Palm Trees Monitored",
    value: "2,450",
    icon: Leaf,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    label: "Soil Moisture Average",
    value: "68%",
    icon: Droplets,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    label: "Health Check Today",
    value: "18",
    icon: Activity,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
]

const statsSecondary = [
  {
    label: "Water Usage",
    value: "12,400 Liters",
    icon: Droplets,
  },
  {
    label: "Crop Health Score",
    value: "92%",
    icon: Leaf,
  },
  {
    label: "Weather Risk Level",
    value: "Low Risk",
    icon: AlertTriangle,
  },
  {
    label: "Estimated Yield",
    value: "46.8 Tons",
    icon: TrendingUp,
  },
]

export function StatsCards() {
  return (
    <div className="space-y-4">
      {/* Primary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-card rounded-2xl border border-border p-5 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statsSecondary.map((stat) => (
          <div
            key={stat.label}
            className="bg-card rounded-2xl border border-border p-4 flex items-center gap-3 hover:shadow-md transition-shadow duration-200"
          >
            <div className="p-2.5 rounded-xl bg-muted">
              <stat.icon className="w-4 h-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="text-sm font-semibold text-foreground">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
