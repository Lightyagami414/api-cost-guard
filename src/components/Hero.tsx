import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface HeroProps {
  onGetStarted: () => void
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-background to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-light border border-primary/20 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            Now in Beta - Track API costs with ease
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Track, Control, and{" "}
            <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              Cut API Costs
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            A budget tracker for developers and teams using paid APIs like OpenAI, Stripe, Twilio, and more. 
            Get real-time insights, set smart alerts, and never exceed your budget again.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" onClick={onGetStarted} className="group">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          {/* Hero Dashboard Preview */}
          <div className="relative">
            <Card className="p-8 bg-gradient-card border shadow-lg overflow-hidden">
              {/* Quick stats overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">Monthly Spend</div>
                  <div className="text-3xl font-bold">$2,847</div>
                  <div className="text-sm text-success">↗ 12% vs last month</div>
                </div>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">Active APIs</div>
                  <div className="text-3xl font-bold">8</div>
                  <div className="text-sm text-warning">2 approaching limits</div>
                </div>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">Budget Utilization</div>
                  <div className="text-3xl font-bold">68%</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '68%' }} />
                  </div>
                </div>
              </div>

              {/* Mock API cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-lg">🤖</div>
                    <div>
                      <div className="font-medium text-sm">OpenAI GPT-4</div>
                      <div className="text-xs text-muted-foreground">91% budget used</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <div className="bg-warning h-1.5 rounded-full" style={{ width: '91%' }} />
                  </div>
                </div>
                
                <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-lg">💳</div>
                    <div>
                      <div className="font-medium text-sm">Stripe Payments</div>
                      <div className="text-xs text-muted-foreground">59% budget used</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <div className="bg-success h-1.5 rounded-full" style={{ width: '59%' }} />
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-success rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-warning rounded-full animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  )
}