"use client";

import { useRouter } from "next/navigation";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"; 
import { Navbar } from "@/components/navbar";
// import RegisterWrapper from "@/components/register-wrapper";
import { SummitHighlights } from "@/components/key-highlights"; // Updated import
import { Schedule } from "@/components/schedule";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { MetaverseSection } from "@/components/metaverse";
import { WhyAttend } from "@/components/whyattend";
import HotelStay from "@/components/HotelStay"; 
import { VenueSection } from "@/components/venueSection";
import { SpeakersSection } from "@/components/speakers";
import { AboutSection } from "@/components/about";
import { PartnersShowcase } from "@/components/partners";
import { AngelsSection } from "@/components/angels"; 
import { UsaTeamSection } from "@/components/usa-team";
import { JunicornTeamSection } from "@/components/junicorn-team";
import { JunicornsSection } from "@/components/junicornProfile";
import { LivestreamDetails } from "@/components/livestream";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  const router = useRouter();

  const handleOpenRegister: () => void = () => {
    router.push("/register");
  };

  return (
    <>
      <Head>
        <title>ISF Global AI Summit 2025</title>
        <meta name="description" content="Join top AI leaders, innovators, and strategists at the ISF Global AI Summit 2025 in Austin, Texas.." />
        <meta property="og:title" content="ISF Global AI Summit 2025" />
        <meta property="og:description" content="Explore the future of artificial intelligence, leadership, and cutting-edge technology" />
        <meta property="og:image" content="https://globalaisummit.isfnetwork.org/ai-summit-og.png" />
        <meta property="og:url" content="https://globalaisummit.isfnetwork.org/" />
        <link rel="canonical" href="https://globalaisummit.isfnetwork.org/" />
      </Head>

      <Analytics />

      <main className="min-h-screen bg-background">
        <div className="absolute inset-0 grid-background -z-10" aria-hidden="true" />

        <div className="h-full flex flex-col">
          <Navbar className="flex-shrink-0" setIsOpen={handleOpenRegister} />

          <div className="flex-1 overflow-y-auto">
            <div className="h-full">
              <HeroSection/>
              {/* <RegisterWrapper setIsOpen={handleOpenRegister} /> */}
              <SummitHighlights /> {/* Updated component */}
              <LivestreamDetails />
              <Features id="key-topics" />
              <JunicornsSection id="junicorns" />
              <SpeakersSection />
              <Schedule id="schedule" />
              <AngelsSection id="angels" />
              <UsaTeamSection id="usa-team" />
              <JunicornTeamSection id="junicorn-team" />
              <VenueSection />
              <HotelStay />
              <AboutSection />
              <PartnersShowcase />
              <WhyAttend id="whyattend" />
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}