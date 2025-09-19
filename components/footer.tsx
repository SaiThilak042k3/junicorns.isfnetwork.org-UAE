"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  SiFacebook, 
  SiX, 
  SiYoutube, 
  SiInstagram, 
} from "@icons-pack/react-simple-icons";

export function Footer() {
  return (
    <footer className="bg-[#000312] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          
          {/* Left Section - Logo and Address */}
          <div className="text-center md:text-left space-y-4">
            <Image
              src="/isf-logo.webp"
              alt="ISF Logo"
              width={200}
              height={80}
              className="mx-auto md:mx-0"
            />
            <p className="max-w-sm text-sm text-gray-300 leading-relaxed">
              310, Saideep Hulas, #32/2B, Old Madaras Road, Near Budigere Cross,
              Virgonagar, Avalahalli, Bandapura, Bangalore Karnataka 560049
            </p>
          </div>

          {/* Right Section - Social Media Links */}
          <div className="text-center md:text-right space-y-4">
            <h4 className="text-lg font-semibold text-white">Follow us on</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <Link href="https://www.facebook.com/theISFnetwork" target="_blank">
                <SiFacebook className="w-6 h-6 transition hover:text-blue-500" />
              </Link>
              <Link href="https://x.com/theISFnetwork" target="_blank">
                <SiX className="w-6 h-6 transition hover:text-gray-400" />
              </Link>
              <Link href="https://www.youtube.com/@theISFnetwork" target="_blank">
                <SiYoutube className="w-6 h-6 transition hover:text-red-500" />
              </Link>
              <Link href="https://www.instagram.com/theisfnetwork/" target="_blank">
                <SiInstagram className="w-6 h-6 transition hover:text-pink-500" />
              </Link>
              <Link href="https://www.linkedin.com/showcase/theisfnetwork/" target="_blank">
                {/* <SiLinkedIn className="w-6 h-6 transition hover:text-blue-700" /> */}
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            Empowering innovation and fostering global collaboration. 
          </p>
          <p className="mt-2 text-sm">&copy; 2025 International Startup Festival. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
