import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { WeatherCard } from "@/components/dashboard/weather-card"
import { HealthChart } from "@/components/dashboard/health-chart"
import { YieldForecast } from "@/components/dashboard/yield-forecast"
import { FieldStatus } from "@/components/dashboard/field-status"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="lg:pl-64">
        <Header />
        
        <div className="p-4 lg:p-6 space-y-6">
          {/* Welcome Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
              Hey Rakib 👋, welcome back!
            </h1>
          </div>

          {/* Stats Cards */}
          <StatsCards />

          {/* Middle Section - 3 Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <WeatherCard />
            <HealthChart />
            <YieldForecast />
          </div>

          {/* Field Status Table */}
          <FieldStatus />
        </div>
      </main>
    </div>
  )
}
