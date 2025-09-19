"use client"
import { motion } from "framer-motion"
import {
  Calendar,
  Clock,
  Coffee,
  Award,
  Users,
  PieChart,
  Globe,
  Shield,
  Lightbulb,
  Utensils,
  Music,
} from "lucide-react"
import { useState, useEffect } from "react"

interface ScheduleProps {
  id?: string
}

interface ScheduleEvent {
  time: string
  title: string
  icon: JSX.Element
}

interface ScheduleDay {
  day: string
  date: string
  title: string
  events: ScheduleEvent[]
}

const scheduleData: ScheduleDay[] = [
  {
    day: "Day 1",
    date: "29th May 2025",
    title: "Junicorn Summit",
    events: [
      {
        time: "08:30 - 9:30",
        title: "Arrival & Registration",
        icon: <Users className="w-5 h-5 text-blue-600" />,
      },
      {
        time: "09:30 - 11:00",
        title: "Inaugural Session",
        icon: <Lightbulb className="w-5 h-5 text-blue-600" />,
      },
      {
        time: "11:00 - 11:30",
        title: "Networking Break - Coffee/Tea",
        icon: <Coffee className="w-5 h-5 text-blue-600" />,
      },
      {
        time: "11:30 - 12:30",
        title: "Junicorn Pitch Sessions",
        icon: <PieChart className="w-5 h-5 text-blue-600" />,
      },
      {
        time: "12:30 - 13:30",
        title: "Networking Break - Lunch",
        icon: <Utensils className="w-5 h-5 text-blue-600" />,
      },
      {
        time: "13:30 - 14:30",
        title: "Junicorn Pitch Sessions",
        icon: <PieChart className="w-5 h-5 text-blue-600" />,
      },
      {
        time: "14:30 - 15:30",
        title: "Junicorn Pitch Sessions",
        icon: <PieChart className="w-5 h-5 text-blue-600" />,
      },
      {
        time: "15:30 - 16:30",
        title: "Junicorn Pitch Sessions",
        icon: <PieChart className="w-5 h-5 text-blue-600" />,
      },
      {
        time: "16:30 - 17:15",
        title: "Awards Ceremony",
        icon: <Award className="w-5 h-5 text-blue-600" />,
      },
    ],
  },
  {
    day: "Day 2",
    date: "30th May 2025",
    title: "Global AI Summit",
    events: [
      {
        time: "08:30 - 9:00",
        title: "Arrival & Registration",
        icon: <Users className="w-5 h-5 text-blue-600" />,
      },
      {
        time: "09:00 - 10:00",
        title: "Inaugural Session",
        icon: <Lightbulb className="w-5 h-5 text-blue-600" />,
      },
      {
        time: "10:00 - 11:00",
        title: "Roundtable: Next-Gen Health: AI Across the Continuum",
        icon: <Users className="w-5 h-5 text-blue-600" />,
      },
      {
        time: "11:00 - 11:30",
        title: "Networking Break - Coffee/Tea",
        icon: <Coffee className="w-5 h-5 text-blue-600" />,
      },
      {
        time: "11:30 - 12:30",
        title: "Roundtable: Capital Meets Innovation: AI Investor Connect",
        icon: <Users className="w-5 h-5 text-blue-600" />,
      },
      {
        time: "12:00 - 13:30",
        title: "Networking Break - Lunch",
        icon: <Utensils className="w-5 h-5 text-blue-600" />,
      },
      {
        time: "13:30 - 14:30",
        title: "Roundtable: AI Everywhere: Cross-Industry Impact",
        icon: <Globe className="w-5 h-5 text-blue-600" />,
      },
      {
        time: "14:30 - 15:30",
        title: "Roundtable: GCC Without Borders: AI, Operations & Data Privacy",
        icon: <Shield className="w-5 h-5 text-blue-600" />,
      },
      {
        time: "15:30 - 16:30",
        title: "Roundtable: Future Forward: AI, Work, & What Comes Next",
        icon: <Lightbulb className="w-5 h-5 text-blue-600" />,
      },
      {
        time: "16:30 - 17:15",
        title: "Awards Ceremony",
        icon: <Award className="w-5 h-5 text-blue-600" />,
      },
      {
        time: "17:15 - 18:00",
        title: "Cultural Evening",
        icon: <Music className="w-5 h-5 text-blue-600" />,
      },
    ],
  },
]

const MobileTimeline = ({ day }: { day: ScheduleDay }) => {
  return (
    <div className="relative px-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 text-blue-600">
        <Calendar className="w-6 h-6" />
        <div>
          <h3 className="text-xl font-bold">{day.title}</h3>
          <p className="text-muted-foreground text-sm">{day.date}</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-2.5 top-0 bottom-0 w-[2px] bg-blue-200" />

        {day.events.map((event, index) => (
          <div key={index} className="relative mb-6 last:mb-0">
            {/* Time indicator */}
            <div className="flex items-center mb-2">
              <div className="relative">
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-blue-600 z-10">
                  <div className="absolute inset-0 animate-ping rounded-full opacity-40 bg-blue-400" />
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-sm font-medium text-blue-700 ml-6">
                <Clock className="w-4 h-4" />
                <span>{event.time}</span>
              </div>
            </div>

            {/* Event card */}
            <div className="ml-6 p-4 rounded-lg bg-foreground/5 border border-border/20 hover:bg-foreground/10 transition-colors shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 p-2 rounded-lg bg-blue-100 flex items-center justify-center h-10 w-10">
                  {event.icon}
                </div>
                <h4 className="font-medium text-foreground">{event.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const DesktopSchedule = ({ day }: { day: ScheduleDay }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="glass-card p-6 rounded-xl border border-border/50 backdrop-blur-sm shadow-lg"
  >
    <div className="flex items-center gap-3 mb-6">
      <Calendar className="w-6 h-6 text-blue-600" />
      <div>
        <h3 className="text-2xl font-bold text-blue-600">{day.title}</h3>
        <p className="text-foreground/60 text-sm">{day.date}</p>
      </div>
    </div>

    <div className="space-y-3">
      {day.events.map((event, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          className="flex items-center justify-between p-4 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
        >
          <div className="flex items-center gap-4">
            {event.icon}
            <span className="font-medium">{event.title}</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/60">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{event.time}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
)

const TabButton = ({
  day,
  isActive,
  onClick,
}: {
  day: ScheduleDay
  isActive: boolean
  onClick: () => void
}) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 text-sm font-medium rounded-lg transition-colors ${
      isActive ? "bg-blue-100 text-blue-700" : "bg-foreground/5 text-foreground/60 hover:bg-foreground/10"
    }`}
    role="tab"
    aria-selected={isActive}
  >
    {day.day}
  </button>
)

export function Schedule({ id }: ScheduleProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => setIsMobile(window.innerWidth < 768)
      checkMobile()
      window.addEventListener("resize", checkMobile)
      return () => window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Schedule</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Join us for two days of innovation, networking, and insights at the Global AI Summit and Junicorn events.
          </p>
        </motion.div>

        <div className="flex gap-2 mb-8 justify-center">
          {scheduleData.map((day, index) => (
            <TabButton key={index} day={day} isActive={activeTab === index} onClick={() => setActiveTab(index)} />
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          {isMobile ? (
            <MobileTimeline day={scheduleData[activeTab]} />
          ) : (
            <DesktopSchedule day={scheduleData[activeTab]} />
          )}
        </div>
      </div>
    </section>
  )
}
