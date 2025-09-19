"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const scheduleData = [
  {
    day: "Day 1",
    date: "March 29, 2025",
    events: [
      {
        title: "Junicorn",
      },
      {
        title: "Exclusive Dinner",
      },
    ],
  },
  {
    day: "Day 2",
    date: "March 30, 2025",
    events: [
      {

        title: "Main Summit and ISF Innovation Awards",
      },
      {
        title: "Grand Gala Dinner",

      },
    ],
  },
];

// const scheduleData = [
//   {
//     day: "Day 1",
//     date: "March 29, 2025",
//     events: [
//       {
//         time: "9:00 AM",
//         title: "Junicorn",
//         speaker: "Dr. Sarah Chen",
//         location: "Main Hall",
//       },
//       {
//         time: "11:00 AM",
//         title: "Exclusive Dinner",
//         speaker: "James Wilson",
//         location: "Tech Theater",
//       },
//       {
//         time: "2:00 PM",
//         title: "AI Ethics Workshop",
//         speaker: "Dr. Emily Wong",
//         location: "Workshop Room A",
//       },
//     ],
//   },
//   {
//     day: "Day 2",
//     date: "March 30, 2025",
//     events: [
//       {
//         time: "9:30 AM",
//         title: "Main Summit and ISF Innovation Awards",
//         speaker: "Michael Rodriguez",
//         location: "Business Center",
//       },
//       {
//         time: "11:30 AM",
//         title: "Grand Gala Dinner",
//         speaker: "Dr. Sarah Chen",
//         location: "Tech Theater",
//       },
//       {
//         time: "2:30 PM",
//         title: "Industry Roundtable",
//         speaker: "Panel Discussion",
//         location: "Main Hall",
//       },
//     ],
//   },
// ];

export function Schedule() {
  return (
    <section className="py-20 bg-background" id="schedule">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Schedule</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Plan your summit experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {scheduleData.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, x: dayIndex % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-2xl font-bold mb-2">{day.day}</h3>
              <p className="text-primary mb-6 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {day.date}
              </p>

              <div className="space-y-6">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="border-l-2 border-primary pl-4 pb-6 last:pb-0"
                  >
                    <div className="flex items-center text-sm text-foreground/80 mb-1">
                      {/* <Clock className="w-4 h-4 mr-2" />
                      {event.time} */}
                    </div>
                    <h4 className="text-lg font-semibold mb-1">{event.title}</h4>
                    {/* <p className="text-primary mb-1">{event.speaker}</p> */}
                    <div className="flex items-center text-sm text-foreground/80">
                      {/* <MapPin className="w-4 h-4 mr-2" />
                      {event.location} */}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}