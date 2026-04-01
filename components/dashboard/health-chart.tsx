"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const healthData = [
  { name: "Healthy Fields", value: 42, color: "#22c55e" },
  { name: "Moderate Risk", value: 26, color: "#eab308" },
  { name: "Needs Attention", value: 5, color: "#ef4444" },
]

const total = healthData.reduce((acc, item) => acc + item.value, 0)

export function HealthChart() {
  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-6">Crop Health Overview</h3>
      
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={healthData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={3}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {healthData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-foreground">{total}</span>
            <span className="text-xs text-muted-foreground">Total</span>
          </div>
          
          {/* Labels on chart */}
          <div className="absolute top-4 right-6 text-xs font-semibold text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-full">
            26
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
            42
          </div>
          <div className="absolute top-12 left-4 text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
            5
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 w-full space-y-3">
          {healthData.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-foreground">{item.name}</span>
              </div>
              <span className="text-sm font-semibold text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
