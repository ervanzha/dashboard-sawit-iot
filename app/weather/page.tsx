import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { Cloud, Droplets, Wind, Sun, Thermometer, CloudRain, CloudSun, Umbrella } from "lucide-react"

const hourlyForecast = [
  { time: "06:00", temp: "22°C", icon: CloudSun },
  { time: "09:00", temp: "25°C", icon: Sun },
  { time: "12:00", temp: "28°C", icon: Sun },
  { time: "15:00", temp: "27°C", icon: CloudSun },
  { time: "18:00", temp: "24°C", icon: Cloud },
  { time: "21:00", temp: "22°C", icon: Cloud },
]

const weeklyForecast = [
  { day: "Monday", high: "28°C", low: "22°C", condition: "Sunny", icon: Sun },
  { day: "Tuesday", high: "27°C", low: "21°C", condition: "Partly Cloudy", icon: CloudSun },
  { day: "Wednesday", high: "26°C", low: "22°C", condition: "Cloudy", icon: Cloud },
  { day: "Thursday", high: "25°C", low: "21°C", condition: "Light Rain", icon: CloudRain },
  { day: "Friday", high: "27°C", low: "22°C", condition: "Sunny", icon: Sun },
  { day: "Saturday", high: "28°C", low: "23°C", condition: "Sunny", icon: Sun },
  { day: "Sunday", high: "26°C", low: "22°C", condition: "Partly Cloudy", icon: CloudSun },
]

export default function WeatherPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="lg:pl-64">
        <Header />
        
        <div className="p-4 lg:p-6 space-y-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Weather Forecast</h1>

          {/* Current Weather */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-card rounded-2xl border border-border p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <p className="text-muted-foreground mb-2">Current Weather</p>
                  <div className="flex items-center gap-4">
                    <Sun className="w-16 h-16 text-yellow-500" />
                    <div>
                      <p className="text-5xl font-bold text-foreground">24°C</p>
                      <p className="text-muted-foreground">Feels like 26°C</p>
                    </div>
                  </div>
                  <p className="mt-4 text-lg text-foreground">Sunny with light breeze</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                    <Droplets className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-xs text-muted-foreground">Humidity</p>
                      <p className="text-sm font-semibold">63%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                    <Wind className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="text-xs text-muted-foreground">Wind</p>
                      <p className="text-sm font-semibold">9 km/h</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                    <Umbrella className="w-5 h-5 text-indigo-500" />
                    <div>
                      <p className="text-xs text-muted-foreground">Rain</p>
                      <p className="text-sm font-semibold">12%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                    <Sun className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-xs text-muted-foreground">UV Index</p>
                      <p className="text-sm font-semibold">Moderate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Farm Conditions</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl bg-green-50">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-sm">Optimal for harvesting</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-yellow-50">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="text-sm">Light irrigation needed</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="text-sm">Good soil moisture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hourly Forecast */}
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Hourly Forecast</h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {hourlyForecast.map((hour) => (
                <div key={hour.time} className="flex flex-col items-center p-3 rounded-xl bg-muted">
                  <p className="text-xs text-muted-foreground mb-2">{hour.time}</p>
                  <hour.icon className="w-8 h-8 text-primary mb-2" />
                  <p className="text-sm font-semibold">{hour.temp}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Forecast */}
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">7-Day Forecast</h3>
            <div className="space-y-3">
              {weeklyForecast.map((day) => (
                <div key={day.day} className="flex items-center justify-between p-3 rounded-xl hover:bg-muted transition-colors">
                  <div className="flex items-center gap-4 min-w-[120px]">
                    <span className="text-sm font-medium w-24">{day.day}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <day.icon className="w-6 h-6 text-primary" />
                    <span className="text-sm text-muted-foreground w-28">{day.condition}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold">{day.high}</span>
                    <span className="text-sm text-muted-foreground">{day.low}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
