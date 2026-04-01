import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { MapPin, Layers, ZoomIn, ZoomOut, Maximize2, TreePalm } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const fieldLocations = [
  { id: 1, name: "Block A1", status: "Sehat", trees: 245, area: "2.5 ha" },
  { id: 2, name: "Block A2", status: "Sehat", trees: 230, area: "2.3 ha" },
  { id: 3, name: "Block B1", status: "Sakit", trees: 210, area: "2.1 ha" },
  { id: 4, name: "Block B2", status: "Sehat", trees: 255, area: "2.6 ha" },
  { id: 5, name: "Block C1", status: "Sakit", trees: 198, area: "2.0 ha" },
]

export default function MapsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="lg:pl-64">
        <Header />
        
        <div className="p-4 lg:p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Farm Maps</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="rounded-xl">
                <Layers className="w-4 h-4 mr-2" />
                Layers
              </Button>
              <Button variant="outline" size="sm" className="rounded-xl">
                <MapPin className="w-4 h-4 mr-2" />
                Add Marker
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Map View */}
            <div className="lg:col-span-3 bg-card rounded-2xl border border-border overflow-hidden">
              <div className="relative h-[500px] bg-gradient-to-br from-green-100 via-green-50 to-emerald-100">
                {/* Simulated Map Background */}
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#16a34a" strokeWidth="0.5" opacity="0.3"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Field Blocks */}
                <div className="absolute top-12 left-12 w-32 h-24 rounded-xl bg-green-500/40 border-2 border-green-600 flex items-center justify-center cursor-pointer hover:bg-green-500/60 transition-colors">
                  <div className="text-center">
                    <TreePalm className="w-6 h-6 text-green-800 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-green-900">Block A1</p>
                  </div>
                </div>

                <div className="absolute top-12 right-32 w-28 h-20 rounded-xl bg-green-500/40 border-2 border-green-600 flex items-center justify-center cursor-pointer hover:bg-green-500/60 transition-colors">
                  <div className="text-center">
                    <TreePalm className="w-6 h-6 text-green-800 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-green-900">Block A2</p>
                  </div>
                </div>

                <div className="absolute top-44 left-24 w-36 h-28 rounded-xl bg-red-400/40 border-2 border-red-500 flex items-center justify-center cursor-pointer hover:bg-red-400/60 transition-colors">
                  <div className="text-center">
                    <TreePalm className="w-6 h-6 text-red-800 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-red-900">Block B1</p>
                    <p className="text-[10px] text-red-700">Perlu Perhatian</p>
                  </div>
                </div>

                <div className="absolute top-48 right-20 w-32 h-24 rounded-xl bg-green-500/40 border-2 border-green-600 flex items-center justify-center cursor-pointer hover:bg-green-500/60 transition-colors">
                  <div className="text-center">
                    <TreePalm className="w-6 h-6 text-green-800 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-green-900">Block B2</p>
                  </div>
                </div>

                <div className="absolute bottom-24 left-1/3 w-28 h-20 rounded-xl bg-red-400/40 border-2 border-red-500 flex items-center justify-center cursor-pointer hover:bg-red-400/60 transition-colors">
                  <div className="text-center">
                    <TreePalm className="w-6 h-6 text-red-800 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-red-900">Block C1</p>
                    <p className="text-[10px] text-red-700">Perlu Perhatian</p>
                  </div>
                </div>

                {/* Map Controls */}
                <div className="absolute right-4 top-4 flex flex-col gap-2">
                  <Button size="icon" variant="secondary" className="rounded-xl w-10 h-10 bg-white shadow-md">
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-xl w-10 h-10 bg-white shadow-md">
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-xl w-10 h-10 bg-white shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute left-4 bottom-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-md">
                  <p className="text-xs font-semibold mb-2 text-foreground">Legend</p>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-green-500" />
                      <span className="text-xs text-foreground">Healthy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-red-400" />
                      <span className="text-xs text-foreground">Needs Attention</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Field List */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Field Locations</h3>
              <div className="space-y-3">
                {fieldLocations.map((field) => (
                  <div
                    key={field.id}
                    className="p-3 rounded-xl border border-border hover:bg-muted/50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{field.name}</span>
                      <Badge
                        className={`text-xs ${
                          field.status === "Sehat"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {field.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <TreePalm className="w-3 h-3" />
                        <span>{field.trees} trees</span>
                      </div>
                      <span>{field.area}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
