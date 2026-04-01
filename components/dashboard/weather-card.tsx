import { Thermometer, Droplets, Wind, Sun, CloudRain } from "lucide-react"

const weatherData = [
  { label: "Temperature", value: "24°C", icon: Thermometer },
  { label: "Humidity", value: "63%", icon: Droplets },
  { label: "Wind Speed", value: "9 km/h", icon: Wind },
  { label: "Sunlight Hours", value: "8.4", icon: Sun },
  { label: "Rain Probability", value: "12%", icon: CloudRain },
]

export function WeatherCard() {
  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-6">Farm Weather Conditions</h3>
      <div className="space-y-5">
        {weatherData.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-muted">
                <item.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <span className="text-sm text-foreground">{item.label}</span>
            </div>
            <span className="text-sm font-semibold text-foreground">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
