"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, ExternalLink, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Venue {
  type: string;
  title: string;
  description: string;
  website: string;
  buttonText: string;
  additionalLink?: {
    text: string;
    url: string;
  };
  imageUrl: string;
}

interface VenueCardProps {
  venue: Venue;
}

const VenueCard = ({ venue }: VenueCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col lg:flex-row gap-6 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
    >
      <div className="lg:w-1/2 space-y-4">
        <div className="flex items-center gap-2">
          <div className={`h-3 w-3 rounded-full ${venue.type === 'university' ? 'bg-blue-500' : 'bg-emerald-500'}`} />
          <span className="text-xs font-medium tracking-wider text-white/60 uppercase">
            {venue.type === 'university' ? 'Academic Venue' : 'Host City'}
          </span>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          {venue.title}
        </h3>
        
        <p className="text-white/80 leading-relaxed">
          {venue.description}
        </p>
        
        <div className="flex flex-wrap gap-3 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="group hover:bg-white/10 border-white/20"
            onClick={() => window.open(venue.website, "_blank")}
          >
            {venue.buttonText}
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
          
          {venue.additionalLink && (
            <Button
              variant="ghost"
              size="sm"
              className="group text-white/70 hover:text-white hover:bg-transparent"
              onClick={() => window.open(venue.additionalLink?.url, "_blank")}
            >
              {venue.additionalLink.text}
              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          )}
        </div>
      </div>
      
      <div className="lg:w-1/2 relative h-64 lg:h-auto rounded-lg overflow-hidden">
        <Image
          src={venue.imageUrl}
          alt={venue.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    </motion.div>
  )
}

export function VenueSection() {
  const venues: Venue[] = [
    {
      type: "university",
      title: "Texas State University",
      description: "Texas State University is a premier public research institution in San Marcos, Texas, known for its vibrant campus and academic excellence. With a perfect blend of historic charm and modern facilities, it fosters innovation and leadership.",
      website: "https://www.txst.edu",
      buttonText: "View Campus",
      additionalLink: {
        text: "Google Maps",
        url: "https://maps.app.goo.gl/fJx8wjpmB4YXaevHA"
      },
      imageUrl: "https://docs.gato.txst.edu/202415/w/2000/0ODGHyq9DiWg/36087364320_08f3117160-landscape-small.jpg"
    },
    {
      type: "city",
      title: "San Marcos, TX",
      description: "Nestled between Austin and San Antonio, San Marcos offers a perfect blend of natural beauty and urban convenience. Enjoy the vibrant downtown and scenic riverwalk.",
      website: "https://www.visitsanmarcos.com",
      buttonText: "Explore City",
      additionalLink: {
        text: "Google Maps",
        url: "https://maps.app.goo.gl/wDvKKgVVCRXNAkCk7"
      },
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/be/Hays_county_courthouse_historic_district_2013.jpg"
    }
  ]

  return (
    <section id="venue" className="relative py-20 bg-[#020817]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:60px_60px]" />
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Venue and Host City
          </h2>
        </motion.div>

        <div className="space-y-8">
          {venues.map((venue, index) => (
            <VenueCard key={index} venue={venue} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-3">Parking Information</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Find details about the Pay-to-Park garage in the link below. You'll be parking at the LBJ Student Center Garage, with directions provided.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="group hover:bg-white/10 border-white/20"
              onClick={() => window.open("https://www.parking.txst.edu/visitors.html#pay-garage", "_blank")}
            >
              View Parking Details
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}