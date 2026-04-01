import { TreePalm } from "lucide-react"

const yieldData = [
  { name: "Fresh Fruit Bunches", yield: "32.5 Tons", icon: TreePalm },
  { name: "Crude Palm Oil", yield: "6.8 Tons", icon: TreePalm },
  { name: "Palm Kernel", yield: "1.4 Tons", icon: TreePalm },
  { name: "Palm Kernel Oil", yield: "0.6 Tons", icon: TreePalm },
]

export function YieldForecast() {
  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-6">Seasonal Yield Forecast</h3>
      <div className="space-y-4">
        {yieldData.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-foreground">{item.name}</span>
            </div>
            <span className="text-sm font-semibold text-primary">{item.yield}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Total Expected Yield</span>
          <span className="text-lg font-bold text-primary">41.3 Tons</span>
        </div>
      </div>
    </div>
  )
}
