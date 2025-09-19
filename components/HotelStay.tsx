"use client";

import { MapPin, ExternalLink, Phone, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const hotelData = [
  {
    id: 1,
    name: "Days Inn by Wyndham San Marcos",
    address: "1005 Interstate-Highway 35 North, San Marcos, TX 78666",
    phone: "+1 512-353-5050",
    distanceFromVenue: "0.7 miles",
    image: "https://www.wyndhamhotels.com/content/dam/property-images/en-us/di/us/tx/san-marcos/06447/06447_exterior_view_2.jpg?crop=3000:2000;*,*&downsize=1800:*",
    website: "https://www.wyndhamhotels.com/days-inn/san-marcos-texas/days-inn-san-marcos/overview?CID=LC:iqv0j1dklijly45:06447&iata=00093796",
  },
  {
    id: 2,
    name: "Hilton Garden Inn San Marcos",
    address: "2131 I-35, San Marcos, TX 78666, United States",
    phone: "+1 512-878-4411",
    distanceFromVenue: "2.1 miles",
    image: "https://www.hilton.com/im/en/AUSSMGI/9222314/01-aussmgi-hilton-garden-inn-san-marcos-exterior.jpg?impolicy=crop&cw=4495&ch=2516&gravity=NorthWest&xposition=0&yposition=241&rw=768&rh=430",
    website: "https://www.hilton.com/en/hotels/aussmgi-hilton-garden-inn-san-marcos/?SEO_id=GMB-AMER-GI-AUSSMGI&y_source=1_NjAxNzY1MC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
  },
  {
    id: 3,
    name: "Fairfield Inn & Suites San Marcos",
    address: "1250 I-35 N Frontage Rd, San Marcos, TX 78666",
    phone: "+1 512-396-0131",
    distanceFromVenue: "1.9 miles",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/627578290.jpg?k=a2b0e0c3dbc51333cbcfb7865cc8f182bf19af41d8401869dc5ad66866bd26f5&o=&hp=1",
    website: "https://www.marriott.com/en-us/hotels/ausfm-fairfield-inn-and-suites-austin-san-marcos/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0",
  },
  {
    id: 4,
    name: "Candlewood Suites San Marcos",
    address: "600 Wonder World Dr, San Marcos, TX 78666",
    phone: "+1 512-482-8000",
    distanceFromVenue: "2.9 miles",
    image: "https://digital.ihg.com/is/image/ihg/candlewood-suites-san-marcos-3410160060-4x3?wid=733",
    website: "https://www.ihg.com/candlewood/hotels/us/en/san-marcos/aussm/hoteldetail?cm_mmc=GoogleMaps-_-CW-_-US-_-AUSSM",
  },
];

export default function HotelStay() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="py-16 bg-[#020817]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Nearby Accommodations
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400">
              Convenient hotels located within 3 miles of the summit venue
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-[#1b212e] rounded-xl shadow-md overflow-hidden border border-gray-700 h-[350px] animate-pulse">
                <div className="h-40 bg-gray-700"></div>
                <div className="p-4 space-y-3">
                  <div className="h-6 bg-gray-700 rounded"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-700 rounded"></div>
                  </div>
                  <div className="h-10 bg-gray-700 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-[#020817]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Nearby Accommodations
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Convenient hotels located within 3 miles of the summit venue
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotelData.map((hotel) => (
            <div key={hotel.id} className="bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-700 flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg md:hover:scale-105 md:hover:shadow-lg">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {hotel.name}
                </h3>
                <div className="text-sm text-gray-400 flex-1 space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                    <span>{hotel.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="flex-shrink-0" />
                    <span>{hotel.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Info size={16} className="flex-shrink-0" />
                    <span>{hotel.distanceFromVenue} from venue</span>
                  </div>
                </div>
                <Button 
                  className="mt-4 w-full bg-[#3b82f6] hover:bg-[#2563eb]"
                  asChild
                >
                  <a href={hotel.website} target="_blank" rel="noopener noreferrer">
                    Visit Website <ExternalLink size={16} className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
