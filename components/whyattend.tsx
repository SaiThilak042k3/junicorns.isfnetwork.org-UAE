"use client";

interface WhyAttendProps {
  id?: string;
}

export function WhyAttend({ id }: WhyAttendProps) {
  return (
    <section className="bg-[#000312] text-white py-16 px-6" id={id}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-white">
          Why Attend?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card Data */}
          {[
            {
              emoji: "📌",
              title: "Expert-Led & Leadership Benchmarking",
              description:
                "Gain cutting-edge insights from business, technology, and responsible AI leaders.",
            },
            {
              emoji: "🔗",
              title: "Global Networking & Collaboration",
              description:
                "Connect with experts, academics, and entrepreneurs to drive ethical AI innovations.",
            },
            {
              emoji: "🚀",
              title: "Innovation & Startup Growth",
              description:
                "Pitch AI solutions to VCs and mentors, fueling scalable ventures.",
            },
            {
              emoji: "🔮",
              title: "Future-Focused & Immersive",
              description:
                "Join in-person or via the Metaverse for interactive discussions and masterclasses.",
            },
            {
              emoji: "🎯",
              title: "Talent & Opportunities",
              description:
                "Explore AI career pathways at the Job Mela, plus specialized tracks for students (Junicorn).",
            },
            {
              emoji: "🏆",
              title: "Recognition & Social Impact",
              description:
                "Celebrate standout innovations at the ISF Innovation Awards and shape inclusive, sustainable AI in the 'Tech for Good' Lab.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{item.emoji}</span>
                <h3 className="font-bold text-lg sm:text-xl text-blue-400">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}