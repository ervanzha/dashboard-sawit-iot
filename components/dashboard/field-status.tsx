"use client"

import { ArrowUpDown, TreePalm } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const fields = [
  {
    id: 1,
    name: "Block A1",
    image: "https://images.unsplash.com/photo-1591105234049-b1a3c3bb0e33?w=100&h=100&fit=crop",
    crop: "Kelapa Sawit",
    soilMoisture: 70,
    temp: "24°C",
    health: "Sehat",
  },
  {
    id: 2,
    name: "Block A2",
    image: "https://images.unsplash.com/photo-1591105234049-b1a3c3bb0e33?w=100&h=100&fit=crop",
    crop: "Kelapa Sawit",
    soilMoisture: 65,
    temp: "25°C",
    health: "Sehat",
  },
  {
    id: 3,
    name: "Block B1",
    image: "https://images.unsplash.com/photo-1591105234049-b1a3c3bb0e33?w=100&h=100&fit=crop",
    crop: "Kelapa Sawit",
    soilMoisture: 45,
    temp: "26°C",
    health: "Sakit",
  },
  {
    id: 4,
    name: "Block B2",
    image: "https://images.unsplash.com/photo-1591105234049-b1a3c3bb0e33?w=100&h=100&fit=crop",
    crop: "Kelapa Sawit",
    soilMoisture: 72,
    temp: "24°C",
    health: "Sehat",
  },
  {
    id: 5,
    name: "Block C1",
    image: "https://images.unsplash.com/photo-1591105234049-b1a3c3bb0e33?w=100&h=100&fit=crop",
    crop: "Kelapa Sawit",
    soilMoisture: 38,
    temp: "27°C",
    health: "Sakit",
  },
]

export function FieldStatus() {
  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Field Status</h3>
        <Button variant="outline" size="sm" className="rounded-xl text-xs">
          See All
        </Button>
      </div>

      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-2">
                <button className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Field <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="text-left py-3 px-2">
                <button className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Crops <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="text-left py-3 px-2">
                <button className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Soil Moisture <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="text-left py-3 px-2">
                <button className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Temp <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="text-left py-3 px-2">
                <button className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Health <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field) => (
              <tr key={field.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="py-4 px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                      <Image
                        src={field.image}
                        alt={field.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground">{field.name}</span>
                  </div>
                </td>
                <td className="py-4 px-2">
                  <div className="flex items-center gap-2">
                    <TreePalm className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">{field.crop}</span>
                  </div>
                </td>
                <td className="py-4 px-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground">{field.soilMoisture}%</span>
                    <div className="w-8 h-8 relative">
                      <svg className="w-8 h-8 -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="3"
                          strokeDasharray={`${field.soilMoisture}, 100`}
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-2">
                  <span className="text-sm text-foreground">{field.temp}</span>
                </td>
                <td className="py-4 px-2">
                  <Badge
                    variant={field.health === "Sehat" ? "default" : "destructive"}
                    className={`rounded-lg text-xs font-medium ${
                      field.health === "Sehat"
                        ? "bg-green-100 text-green-700 hover:bg-green-100"
                        : "bg-red-100 text-red-700 hover:bg-red-100"
                    }`}
                  >
                    {field.health}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
