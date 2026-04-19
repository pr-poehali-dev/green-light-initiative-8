import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

export default function LaunchPadPage() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !name) return

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <Icon name="CheckCircle" size={64} className="text-primary mx-auto" />
              <h2 className="text-2xl font-bold text-foreground">You're on the list!</h2>
              <p className="text-muted-foreground">
                Thank you, {name}! We'll send a notification to {email} when we open sales for partners.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                Add another email
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={24} className="text-primary-foreground" />
            <h1 className="text-2xl font-bold tracking-tight">Antaophotoelectric</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:opacity-80 transition-opacity">About</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Products</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative py-20 px-4 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url('https://cdn.poehali.dev/projects/d5d74ee8-8a30-4bf4-8d56-81221a90a86c/files/6feb4081-bc00-45fc-b1c5-e09b9a23747b.jpg')`,
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left text */}
          <div className="flex-1 text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-1.5 text-sm font-medium text-primary-foreground">
              <Icon name="Factory" size={14} />
              Professional Manufacturing
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Power Tools of<br />
              <span className="text-primary">the Next Generation</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-md">
              Drills, angle grinders, electric saws — professional-grade tools straight from the factory. We're opening official sales for distributors and wholesale partners soon.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Icon name="Drill" size={18} className="text-primary" />
                <span>Cordless Drills</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Icon name="Disc" size={18} className="text-primary" />
                <span>Angle Grinders</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Icon name="Scissors" size={18} className="text-primary" />
                <span>Electric Saws</span>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="w-full max-w-md">
            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle className="text-center text-secondary text-xl">Become a Partner</CardTitle>
                <CardDescription className="text-center">
                  Leave your contact — we'll reach out before the official launch
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Icon name="User" size={16} className="absolute left-3 top-3 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Your name or company"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Icon name="Mail" size={16} className="absolute left-3 top-3 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="email@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-accent hover:text-accent-foreground transition-colors font-semibold"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Get Partnership Terms"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-300">
                Already <span className="font-bold text-primary">347</span> companies are waiting for the launch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-10">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Factory" size={28} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">In-House Manufacturing</h4>
              <p className="text-muted-foreground text-sm">Full production cycle — from raw materials to finished tools delivered to your warehouse</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="BadgeCheck" size={28} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Quality Guaranteed</h4>
              <p className="text-muted-foreground text-sm">Every unit passes multi-stage quality control before shipment</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Truck" size={28} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Wholesale Supply</h4>
              <p className="text-muted-foreground text-sm">We work with dealers, retail chains and large-scale buyers worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-primary font-bold text-lg">
            <Icon name="Zap" size={20} />
            Antaophotoelectric
          </div>
          <p className="text-muted-foreground text-sm">© 2025 Antaophotoelectric. All rights reserved.</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
