"use client"

import { Card, CardContent } from '../components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel'
import { Badge } from '../components/ui/badge'
import Image from 'next/image'

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1582307811683-75b18a39ab71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Education Programs",
    category: "Education",
    location: "Lagos, Nigeria"
  },
  {
    // Changed to a working Unsplash image
    src: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Healthcare Initiative",
    category: "Healthcare",
    location: "Abuja, Nigeria"
  },
  {
    src: "https://images.unsplash.com/photo-1567471945805-069e09c11098?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Agricultural Training",
    category: "Agriculture",
    location: "Kano, Nigeria"
  },
  {
    src: "https://images.unsplash.com/photo-1704648853529-b1ab9a64ff32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "School Construction",
    category: "Infrastructure",
    location: "Ibadan, Nigeria"
  },
  {
    src: "https://images.unsplash.com/photo-1714575626905-73fa9850d310?q=80&w=1014&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Community Outreach",
    category: "Community",
    location: "Port Harcourt, Nigeria"
  },
  {
    src: "https://images.unsplash.com/photo-1655720357872-ce227e4164ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Women Empowerment",
    category: "Empowerment",
    location: "Enugu, Nigeria"
  }
]

export default function Gallery() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-50 text-orange-600 border-orange-200">Gallery</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
            Our Impact in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we&apos;re making a difference across African communities through our various initiatives and programs.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border border-gray-200 overflow-hidden group cursor-pointer bg-white">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-orange-50 text-orange-600 border-orange-200">
                            {image.category}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                          <p className="text-sm text-white/80">{image.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation Arrows - Bottom Right */}
            <div className="flex justify-end mt-4 space-x-2">
              <CarouselPrevious className="relative left-0 top-0 translate-x-0 translate-y-0 bg-white border border-gray-300 text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 shadow-lg" />
              <CarouselNext className="relative right-0 top-0 translate-x-0 translate-y-0 bg-white border border-gray-300 text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 shadow-lg" />
            </div>
          </Carousel>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">150+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">12</div>
            <div className="text-gray-600">Countries Reached</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
            <div className="text-gray-600">Volunteers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">$2M+</div>
            <div className="text-gray-600">Funds Raised</div>
          </div>
        </div>
      </div>
    </section>
  )
}
