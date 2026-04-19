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
            <a href="#products" className="hover:opacity-80 transition-opacity">Products</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative py-20 px-4 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.18), rgba(0,0,0,0.28)), url('https://cdn.poehali.dev/projects/d5d74ee8-8a30-4bf4-8d56-81221a90a86c/files/76031825-6e62-4e2e-81ad-e955f888b5f2.jpg')`,
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left text */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-1.5 text-sm font-medium text-primary">
              <Icon name="Factory" size={14} />
              Made in China
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Power Tools of<br />
              <span className="text-primary">the Next Generation</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-md">
              Drills, angle grinders, electric saws — professional-grade tools manufactured in China. We're opening official sales for distributors and wholesale partners worldwide soon.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-gray-700">
                <Icon name="Drill" size={18} className="text-primary" />
                <span>Cordless Drills</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Icon name="Disc" size={18} className="text-primary" />
                <span>Angle Grinders</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
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

      {/* Products */}
      <section id="products" className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-2">Our Product Line</h3>
          <p className="text-center text-muted-foreground mb-10">Professional cordless tools — all batteries included</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Cordless Drill", img: "https://cdn.poehali.dev/projects/d5d74ee8-8a30-4bf4-8d56-81221a90a86c/files/ebc98185-8aa5-4d51-a39f-8bfd59fbe43d.jpg" },
              { name: "Angle Grinder", img: "https://cdn.poehali.dev/projects/d5d74ee8-8a30-4bf4-8d56-81221a90a86c/files/3df0e528-3adf-48c1-91f0-d05699b64df7.jpg" },
              { name: "Mini Chainsaw", img: "https://cdn.poehali.dev/projects/d5d74ee8-8a30-4bf4-8d56-81221a90a86c/files/69b1579b-12a1-4eea-be9c-2d724dd35de5.jpg" },
              { name: "Impact Wrench", img: "https://cdn.poehali.dev/projects/d5d74ee8-8a30-4bf4-8d56-81221a90a86c/files/e5b1569f-a96d-4e26-83ec-565301bf45ce.jpg" },
              { name: "Mini Vacuum", img: "https://cdn.poehali.dev/projects/d5d74ee8-8a30-4bf4-8d56-81221a90a86c/files/0c9046c6-b905-4f4f-bdba-c13f91b8df60.jpg" },
              { name: "Laser Level", img: "https://cdn.poehali.dev/projects/d5d74ee8-8a30-4bf4-8d56-81221a90a86c/files/ad360785-3f3d-4c87-a9eb-738eec4cb70e.jpg" },
              { name: "Circular Saw", img: "https://cdn.poehali.dev/projects/d5d74ee8-8a30-4bf4-8d56-81221a90a86c/files/a69f61f9-44de-4447-b702-0441ced07076.jpg" },
              { name: "Pressure Washer", img: "https://cdn.poehali.dev/projects/d5d74ee8-8a30-4bf4-8d56-81221a90a86c/files/3f99ec13-54f5-4452-b83d-da31957ca67a.jpg" },
            ].map((tool) => (
              <Card key={tool.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-50 overflow-hidden">
                  <img src={tool.img} alt={tool.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <CardContent className="p-3 text-center">
                  <p className="font-semibold text-sm text-foreground">{tool.name}</p>
                  <p className="text-xs text-primary mt-1">With battery</p>
                </CardContent>
              </Card>
            ))}
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