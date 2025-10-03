import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Heart, Shield, DollarSign, TrendingUp } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const featureCards = [
    {
      icon: Shield,
      title: "Medical Aid",
      description: "Essential help for health."
    },
    {
      icon: DollarSign,
      title: "Trust Funds",
      description: "Support those in need."
    },
    {
      icon: TrendingUp,
      title: "Funds Raised",
      description: "Collect funds for causes."
    }
  ]

  return (
    <section id="home" className="relative min-h-screen">
      {/* Background Image with Blur */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1582307811683-75b18a39ab71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex items-center min-h-[80vh]">
          {/* Content - Centered */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 lg:p-12 text-gray-800">
              <div className="mb-8">
                <p className="text-orange-500 text-sm font-medium mb-4">
                  HELP MAKE A DIFFERENCE
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Lend Your{' '}
                  <span className="text-orange-500">Heart</span>{' '}
                  To Change A{' '}
                  <span className="text-orange-500">Child&apos;s</span>{' '}
                  Story
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Join our mission to support and uplift helpless children. Your donation helps provide essential care and hope.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-medium transition-all duration-300">
                  DONATE NOW
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-medium">
                  <Heart className="w-4 h-4 mr-2 text-orange-500" />
                  BE A VOLUNTEER
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureCards.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="text-center transition-all duration-300 border border-gray-200 bg-white/95 backdrop-blur-md">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
