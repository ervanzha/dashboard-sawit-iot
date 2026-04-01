"use client"

import { Search, Plus, ChevronDown, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 sticky top-0 z-20">
      {/* Search */}
      <div className="flex-1 max-w-md ml-8 lg:ml-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-10 pl-10 pr-4 rounded-xl border border-border bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-destructive" />
        </button>
        
        <Button variant="outline" className="hidden sm:flex items-center gap-2 rounded-xl">
          <span>Monthly</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
        
        <Button className="flex items-center gap-2 rounded-xl bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Add Field</span>
        </Button>
      </div>
    </header>
  )
}
