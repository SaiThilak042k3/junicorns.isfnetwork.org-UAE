"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface Junicorn {
    name: string;
    age: number;
    photo: string;
    location: {
        institution: string;
        place: string;
    };
    project: {
        name: string;
        description: string;
        youtubeLink?: string;
    };
}

export function JunicornsSection({ id }: { id?: string }) {
    const [selectedJunicorn, setSelectedJunicorn] = useState<Junicorn | null>(null);
    const [visibleJunicorns, setVisibleJunicorns] = useState(8);

    const handleViewMore = () => {
        setVisibleJunicorns((prev) => Math.min(prev + 8, junicorns.length));
    };

    const junicorns: Junicorn[] = [
        {
            name: "Naali Venkatalakshmi",
            age: 14,
            photo: "/junicorns/naali_venkatalakshmi.jpg",
            location: {
                institution: "HEAL Paradise School",
                place: "Thotapalli, Eluru, Andhra Pradesh",
            },
            project: {
                name: "Natura She",
                description: "A low-cost sanitary napkin made from natural materials like cotton, jute, and lotus leaves. The innovation is fully biodegradable and free from chemicals, tackling menstrual waste pollution sustainably.",
                youtubeLink: "https://www.youtube.com/watch?v=C7PK1JzTCCE",
            },
        },
        {
            name: "Abdul Rasheed",
            age: 13,
            photo: "/junicorns/abdul_rasheed.jpg",
            location: {
                institution: "HEAL Paradise School",
                place: "Thotapalli, Krishna District, Andhra Pradesh",
            },
            project: {
                name: "Organic Water Purifier",
                description: "A low-cost, organic water purifier using Nirmali and Moringa seeds to make contaminated water safe to drink without chemicals.",
                youtubeLink: "https://www.youtube.com/watch?v=rasheed_iron_packed_innovation",
            },
        },
        {
            name: "Nikhil Bhargav",
            age: 17,
            photo: "/junicorns/nikhil_bhargav.jpg",
            location: {
                institution: "HEAL Paradise School",
                place: "Thotapalli, Andhra Pradesh",
            },
            project: {
                name: "SP Band",
                description: "A discreet smart wearable for women that sends real-time GPS alerts to emergency contacts via a hidden panic button. It’s app-integrated, eco-friendly, and designed for affordable, wide-scale use.",
                youtubeLink: "https://www.youtube.com/watch?v=sp_band_wristband",
            },
        },
        {
            name: "Purna Venkat Nanupatruni",
            age: 17,
            photo: "/junicorns/purna_venkat.jpg",
            location: {
                institution: "HEAL Paradise School",
                place: "Thotapalli, Andhra Pradesh",
            },
            project: {
                name: "FarmFriend",
                description: "A smart gardening app using AR and AI to help users build home gardens with personalized plans, task reminders, and a gamified experience for sustainable urban farming.",
                youtubeLink: "https://www.youtube.com/watch?v=farmfriend_venkat",
            },
        },
        {
            name: "Chinthala Hema Sai",
            age: 15,
            photo: "/junicorns/chinthala_hema_sai.jpg",
            location: {
                institution: "HEAL Paradise School",
                place: "Thotapalli, Eluru, Andhra Pradesh",
            },
            project: {
                name: "Eco Bricks",
                description: "Thermo-plastic bricks made from waste plastic, fly ash, and brick powder to reduce pollution, aiming to replace traditional bricks in construction for a greener future.",
                youtubeLink: "https://www.youtube.com/watch?v=hema_sai_eco_bricks",
            },
        },
        {
            name: "Pranav Sai & Pravan DR",
            age: 14,
            photo: "/junicorns/pranav_pravan.png",
            location: {
                institution: "Sri Sathya Sai Loka Seva Gurukulam",
                place: "Muddenahalli, Karnataka",
            },
            project: {
                name: "Wave Warn",
                description: "A hyperlocal AI-powered system that predicts heatwaves 10 days in advance using satellite data and weather APIs, providing street-level alerts to save lives.",
                youtubeLink: "https://www.youtube.com/watch?v=wavewarn_heat",
            },
        },
        {
            name: "Tej Krishna & Saket Ram",
            age: 14,
            photo: "/junicorns/tej_saket.png",
            location: {
                institution: "Sri Sathya Sai Loka Seva Gurukulam",
                place: "Bangalore, Karnataka",
            },
            project: {
                name: "Sense Vibe",
                description: "A cost-effective, wearable device for the blind and deaf using ultrasonic sensors, vibration motors, and Arduino technology to aid navigation.",
                youtubeLink: "https://www.youtube.com/watch?v=sense_vibe",
            },
        },
        {
            name: "Keerthi Gowda H N",
            age: 22,
            photo: "/junicorns/keerthi_gowda.jpg",
            location: {
                institution: "Cambridge Institute of Technology",
                place: "Bengaluru, Karnataka",
            },
            project: {
                name: "Vision Assistance Smart Cap",
                description: "A wearable navigation aid for the visually impaired using RP LiDAR for 360° scanning, ultrasonic sensors, AI object recognition, and Bluetooth audio feedback.",
                youtubeLink: "https://www.youtube.com/watch?v=vision_smart_cap",
            },
        },
        {
            name: "Yagyanvalka Mishra",
            age: 13,
            photo: "/junicorns/yagyanvalka_mishra.jpg",
            location: {
                institution: "",
                place: "Bhubaneswar, Odisha",
            },
            project: {
                name: "Eden",
                description: "A fashion brand blending Western designs with Indian prints using natural fabrics and upcycled scraps, supported by Eden AI, an AI-powered fashion stylist.",
            },
        },
        {
            name: "Aishwarya S & Sai Vivek Y",
            age: 21,
            photo: "/junicorns/aishwarya_sai.png",
            location: {
                institution: "Raja Rajeswari College of Engineering",
                place: "Bengaluru, Karnataka",
            },
            project: {
                name: "Krishi Yantra",
                description: "A dual-powered agricultural robot for ploughing, seed sowing, irrigation, pesticide spraying, and weed cutting, with AI-based crop health detection and solar power.",
                youtubeLink: "https://www.youtube.com/watch?v=krishi_yantra",
            },
        },
        {
            name: "Nachiketh Reddy",
            age: 22,
            photo: "/junicorns/nachiketh_reddy.jpg",
            location: {
                institution: "",
                place: "Hyderabad, Telangana",
            },
            project: {
                name: "Offstage",
                description: "An AI-powered travel app for MICE and business travelers, combining business trips with local culture and tourism, initially launching in Hyderabad.",
            },
        },
        {
            name: "Nayan Adithya Tangutooru",
            age: 10,
            photo: "/junicorns/nayan_adithya.jpg",
            location: {
                institution: "Bengaluru International Academy",
                place: "Bengaluru, Karnataka",
            },
            project: {
                name: "NGreen Tech",
                description: "An initiative where children lead e-waste collection drives, aiming to collect 20 tonnes of e-waste and recruit 100,000 members, supported by the JUNICORN program.",
            },
        },
        {
            name: "Abishai Gosula",
            age: 21,
            photo: "/junicorns/abishai_gosula.jpg",
            location: {
                institution: "SRM University",
                place: "Chennai, Tamil Nadu",
            },
            project: {
                name: "Atlitos",
                description: "A sports-tech platform with AI-driven performance tracking, allowing athletes in tier 2 and 3 cities to book courts, find coaches, and purchase gear.",
            },
        },
        {
            name: "Digbijay Sahu & Chiranjib Barik",
            age: 16,
            photo: "/junicorns/digbijay_chiranjib.png",
            location: {
                institution: "S.N. High School",
                place: "Soro, Odisha",
            },
            project: {
                name: "YTSAT 2.0",
                description: "A low-cost satellite using multispectral imaging to analyze soil minerals, helping farmers choose crops and fertilizers, supported by YoungTinker Academy and ISF.",
            },
        },
        {
            name: "Ved",
            age: 15,
            photo: "/junicorns/ved.jpg",
            location: {
                institution: "",
                place: "Hyderabad, Telangana",
            },
            project: {
                name: "EduAI",
                description: "An AI-powered app for personalized learning in rural areas, offering offline access, real-time doubt-solving, and parent progress updates to bridge the rural-urban learning gap.",
            },
        },
        {
            name: "Koushik Kar & Sridhara Jena",
            age: 14,
            photo: "/junicorns/koushik_sridhara.png",
            location: {
                institution: "Satya Nanda High School",
                place: "Soro, Balasore, Odisha",
            },
            project: {
                name: "Rural Volt",
                description: "A solution to convert crop waste into clean ethanol fuel using smart dustbins for efficient waste separation, boosting local employment and supporting India’s biofuel industry.",
            },
        },
        {
            name: "Vrishank Devulapalli",
            age: 15,
            photo: "/junicorns/vrishank_devulapalli.jpg",
            location: {
                institution: "Silver Oaks",
                place: "Hyderabad, Telangana",
            },
            project: {
                name: "HydraTrack",
                description: "A smart water bottle with a 30-minute hydration timer and ultrasonic sensors, designed to combat chronic dehydration affordably on a global scale.",
            },
        },
        {
            name: "Somya Sourav Gouda & P. Aditya Das",
            age: 15,
            photo: "/junicorns/somya_aditya.png",
            location: {
                institution: "Government High School",
                place: "Berhampur, Odisha",
            },
            project: {
                name: "Masala GPT",
                description: "An AI-driven masala dispenser using 10 basic ingredients to create 500 types of masalas tailored to user preferences, eliminating artificial additives.",
            },
        },
        {
            name: "Mudumbi Rangacharyulu",
            age: 18,
            photo: "/junicorns/mudumbi_rangacharyulu.jpg",
            location: {
                institution: "Velagapudi Ramakrishna Siddhartha Engineering College",
                place: "Rajamahendravaram, Andhra Pradesh",
            },
            project: {
                name: "NeuroRide",
                description: "A smart EEG helmet for road safety that detects drowsiness in real-time using EEG-based neural detection through a NeuroSky module and lightweight AI algorithms on an ESP32-S3 chip. Alerts the rider instantly with a buzzer and vibration motor when fatigue is detected, requiring no phone or internet connection.",
            },
        },
        {
            name: "Sai Satyam Pradhan",
            age: 22,
            photo: "/junicorns/sai_satyam.jpg",
            location: {
                institution: "BOSE College",
                place: "Odisha, India",
            },
            project: {
                name: "S.O.B.A.D.Y",
                description: "A self-optimized electric vehicle that generates its own energy from solar, wind, motion, and road pressure, eliminating dependence on grid power or charging stations. Uses a smart AI system to optimize power use in real-time, making it ideal for remote regions without charging infrastructure.",
            },
        },
        {
            name: "Samanyu Sathyamoorthi",
            age: 12,
            photo: "/junicorns/samanyu_sathyamoorthi.jpg",
            location: {
                institution: "Fremont School",
                place: "Fremont, California",
            },
            project: {
                name: "MyChemLab",
                description: "A virtual chemistry lab for students, offering a digital lab experience where they can mix elements, trigger reactions, and learn real-world applications in a fun and interactive way.",
            },
        },
        {
            name: "Nriti Tayi",
            age: 11,
            photo: "/junicorns/nriti_tayi.jpg",
            location: {
                institution: "Jefferson School",
                place: "Tracy, California, USA",
            },
            project: {
                name: "GlucoCharm",
                description: "A smart, stylish wearable for kids with Type I diabetes, designed to monitor glucose levels, scan food for carbs, and offer support through a voice-activated AI buddy, all while boosting confidence with swappable charms.",
            },
        },
        {
            name: "Jashwanth Jagadeesan",
            age: 12,
            photo: "/junicorns/jashwanth_jagadeesan.png",
            location: {
                institution: "Stiles Middle School",
                place: "Austin, Texas, USA",
            },
            project: {
                name: "Happy Swimmers",
                description: "A shirt-like smart swimsuit that keeps kids safe while learning to swim by monitoring their condition and automatically inflating a CO2 bladder if distress is detected, ensuring safety without hindering movement.",
            },
        },
        {
            name: "Riya Kanury",
            age: 15,
            photo: "/junicorns/riya_kanury.jpg",
            location: {
                institution: "High School (10th Grade)",
                place: "Boston, Massachusetts, USA",
            },
            project: {
                name: "SmartHeal",
                description: "An AI-powered first aid assistant that scans wounds, assesses severity, and provides real-time guidance—reducing panic, unnecessary ER visits, and improving at-home wound care with infection alerts and healing progress tracking.",
            },
        },
        {
            name: "Satyavathi Kalapalli",
            age: 21,
            photo: "/junicorns/satyavathi_kalapalli.jpg",
            location: {
                institution: "BTech in Electronics & Communication Engineering",
                place: "Hyderabad, Telangana",
            },
            project: {
                name: "Nurture Sapling",
                description: "An AI & AR-powered initiative that helps households grow their own crops efficiently by suggesting optimal farming techniques, scanning spaces for ideal plant placement, and providing real-time care instructions (water, manure, etc.) to boost organic yield.",
            },
        },
        {
            name: "Sathwik Jillelamudi & Nithin Chowdary Chava",
            age: 21,
            photo: "/junicorns/sathwik_nithin.png",
            location: {
                institution: "JNTUH University College of Engineering Manthani (B.Tech CSE – AI & ML)",
                place: "Manthani, Telangana",
            },
            project: {
                name: "AI Cattle Health Monitoring System",
                description: "A cost-effective sensor-based system that tracks cattle health (heart rate, temperature, etc.) and uses ML to detect heat cycles, diseases, and pregnancy. Farmers receive real-time alerts via mobile to prevent livestock losses and improve productivity.",
            },
        },
        {
            name: "Meeth Kumar Shah",
            age: 22,
            photo: "/junicorns/meeth_kumar_shah.jpg",
            location: {
                institution: "Vignana Bharathi Institute of Technology (B.Tech CSE, 2024)",
                place: "Hyderabad, Telangana",
            },
            project: {
                name: "ApnAInterview CRACKER",
                description: "An AI-powered mock interview platform that boosts students' confidence and readiness with personalized practice sessions, ATS-friendly resume building, portfolio creation, and green skills training—addressing interview stress and career preparedness.",
            },
        },
    ];

    return (
        <section id={id || "junicorns"} className="relative py-20 bg-[#020817] overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:60px_60px]" />
            </div>

            {/* Single glow effect */}
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-900/30 blur-[100px]"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-white/5 rounded-full mb-4 inline-block text-blue-300">
                        Young Innovators
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Meet Our <span className="text-blue-400">Junicorns</span>
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        Discover the brilliant projects from our young tech pioneers
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {junicorns.slice(0, visibleJunicorns).map((junicorn, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="flex flex-col p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-lg transition-all duration-200 h-full hover:-translate-y-2 shadow-lg hover:shadow-blue-500/10 border border-white/10 bg-white/5">
                            <div className="relative w-full aspect-square rounded-lg md:rounded-xl overflow-hidden mb-3 md:mb-4 border border-white/10">
                                <Image
                                    src={junicorn.photo}
                                    alt={junicorn.name}
                                    fill
                                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
                            </div>

                            <div className="flex-grow space-y-2 md:space-y-3">
                                <h3 className="text-sm md:text-base lg:text-lg font-bold text-white break-words line-clamp-2">
                                    {junicorn.name}
                                </h3>
                                <p className="text-blue-200/90 text-xs md:text-sm font-medium break-words line-clamp-2">
                                    {junicorn.project.name}
                                </p>
                                <div className="space-y-1">
                                    <p className="text-white/60 text-xs md:text-sm font-light break-words">
                                        Age: {junicorn.age}
                                    </p>
                                    <p className="text-white/60 text-xs md:text-sm font-light break-words line-clamp-2">
                                        {junicorn.location.institution ? `${junicorn.location.institution}, ${junicorn.location.place}` : junicorn.location.place}
                                    </p>
                                </div>
                            </div>

                            <Button
                                variant="ghost"
                                size="sm"
                                className="mt-2 md:mt-4 w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-medium transition-colors text-xs md:text-sm"
                                onClick={() => setSelectedJunicorn(junicorn)}
                            >
                                Know More
                                <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 opacity-70" />
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {junicorns.length > visibleJunicorns && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-16 text-center"
                    >
                        <Button
                            size="lg"
                            onClick={handleViewMore}
                            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                        >
                            View More
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </motion.div>
                )}

                {/* Modal for detailed information */}
                <Dialog open={!!selectedJunicorn} onOpenChange={() => setSelectedJunicorn(null)}>
                    <DialogContent className="bg-[#020817] border border-white/10 max-w-4xl rounded-2xl p-6 sm:p-8">
                        <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
                            {/* Left column: Image */}
                            {selectedJunicorn?.photo && (
                                <div className="w-full md:w-1/2 relative rounded-lg overflow-hidden border border-white/10" style={{ minHeight: "380px", height: "420px" }}>
                                    <Image
                                        src={selectedJunicorn.photo}
                                        alt={selectedJunicorn.name}
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            )}

                            {/* Right column: Text content */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 sm:space-y-6">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                                        {selectedJunicorn?.name}
                                    </DialogTitle>
                                    <DialogDescription className="text-blue-200/90 text-base sm:text-lg font-medium">
                                        {selectedJunicorn?.project.name}
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-3 sm:space-y-4">
                                    <p className="text-white/90 text-sm sm:text-base font-medium">
                                        Age: {selectedJunicorn?.age}
                                    </p>
                                    <p className="text-white/90 text-sm sm:text-base font-medium">
                                        Location: {selectedJunicorn?.location.institution ? `${selectedJunicorn.location.institution}, ${selectedJunicorn.location.place}` : selectedJunicorn?.location.place}
                                    </p>
                                    <div>
                                        <h4 className="text-lg sm:text-xl font-semibold text-white">Project Description</h4>
                                        <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                                            {selectedJunicorn?.project.description}
                                        </p>
                                    </div>
                                    {selectedJunicorn?.project.youtubeLink && (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-medium transition-colors text-sm sm:text-base"
                                            onClick={() => window.open(selectedJunicorn.project.youtubeLink, "_blank")}
                                        >
                                            Watch on YouTube
                                            <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
}