"use client";
import { useState } from "react";

type Tech = {
  name: string;
  color: string;
  icon: string;
};

type Project = {
  title: string;
  description: string;
  link: string;
  gradient: string;
  icon: string;
  tags: string[];
};

const techStack: Tech[] = [
  { name: "Next.js", color: "from-black to-gray-800", icon: "⚡" },
  { name: "React", color: "from-blue-400 to-blue-600", icon: "⚛️" },
  { name: "Node.js", color: "from-green-400 to-green-600", icon: "🟢" },
  { name: "MongoDB", color: "from-green-500 to-emerald-600", icon: "🍃" },
  { name: "TailwindCSS", color: "from-cyan-400 to-blue-500", icon: "🎨" },
  { name: "Kafka", color: "from-orange-400 to-red-500", icon: "📡" },
  { name: "Redis", color: "from-red-400 to-red-600", icon: "💾" },
];

const projects: Project[] = [
  {
    title: "WhatsApp Automation SaaS",
    description:
      "Multi-tenant SaaS platform (Microservices + Event-Driven) built on Next.js, Kafka, MongoDB.",
    link: "#",
    gradient: "from-green-400 via-emerald-500 to-teal-600",
    icon: "💬",
    tags: ["SaaS", "Microservices", "Event-Driven"],
  },
  {
    title: "Project Management Tool",
    description:
      "Role-based platform with Next App Router + Redux Toolkit to manage tasks and teams.",
    link: "#",
    gradient: "from-purple-400 via-pink-500 to-red-500",
    icon: "📋",
    tags: ["Management", "Redux", "Teams"],
  },
  {
    title: "Hotel Booking UI",
    description:
      "Front-end only premium hotel showcasing template using pure Next.js + Tailwind.",
    link: "#",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    icon: "🏨",
    tags: ["UI/UX", "Frontend", "Design"],
  },
];

export default function PortfolioPage() {
  const [showMore, setShowMore] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden relative">
      {/* Background gradient bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="mb-8 inline-block">
            <div className="text-6xl animate-bounce">👨‍💻</div>
          </div>
          <h1 className="text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 text-transparent bg-clip-text animate-pulse">
            Chinmaya Kumar Das Work
          </h1>
          <div className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
            Full Stack Developer
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            🚀 I build production SaaS & tech products with clean architecture, 
            microservices, and modern UI that users absolutely love!
          </p>
          <div className="flex justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full font-bold text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-violet-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
              Contact Me
            </button>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-4xl font-black mb-12 text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
            🛠️ Tech Arsenal
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative"
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div className={`rounded-2xl bg-gradient-to-br ${tech.color} p-6 text-center transform transition-all duration-500 hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-2xl cursor-pointer`}>
                  <div className="text-3xl mb-2 group-hover:animate-bounce">
                    {tech.icon}
                  </div>
                  <div className="text-sm font-bold text-white">
                    {tech.name}
                  </div>
                </div>
                {hoveredTech === index && (
                  <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-cyan-400 to-pink-400 rounded-2xl -z-10 animate-pulse"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-4xl font-black mb-12 text-center bg-gradient-to-r from-emerald-400 to-cyan-500 text-transparent bg-clip-text">
            🎯 Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {(showMore ? projects : projects.slice(0, 2)).map((proj) => (
              <div
                key={proj.title}
                className="group relative rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-90`}></div>
                <div className="relative z-10 p-8 text-white">
                  <div className="text-4xl mb-4 group-hover:animate-spin transition-all duration-500">
                    {proj.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                    {proj.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-6 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-black bg-opacity-30 rounded-full text-xs font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={proj.link}
                    className="inline-flex items-center gap-2 font-bold hover:text-yellow-300 transition-colors duration-300 group-hover:animate-pulse"
                  >
                    <span>Explore Project</span>
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {projects.length > 2 && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowMore(!showMore)}
                className="group relative px-10 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full font-bold text-white transform transition-all duration-300 hover:scale-110 hover:shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                <span className="relative z-10">
                  {showMore ? "🔼 Show Less Magic" : "🔽 Reveal More Magic"}
                </span>
              </button>
            </div>
          )}
        </section>

        {/* Call to Action */}
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-12 transform hover:scale-105 transition-all duration-500 shadow-2xl">
            <h2 className="text-4xl font-black mb-6 text-white">
              Ready to Build Something Amazing? 🚀
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Let s collaborate and create the next big thing together. 
              Your ideas + My code = Pure Magic! ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:bg-yellow-300 hover:text-black transform hover:scale-105 transition-all duration-300 shadow-lg">
                💼 Hire Me Now
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300">
                📧 Get In Touch
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-purple-700 bg-black bg-opacity-50 py-8 text-center">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex justify-center gap-8 mb-6">
              <a href="#" className="text-2xl hover:text-cyan-400 transition-colors duration-300 hover:animate-bounce">🐙</a>
              <a href="#" className="text-2xl hover:text-blue-400 transition-colors duration-300 hover:animate-bounce">💼</a>
              <a href="#" className="text-2xl hover:text-pink-400 transition-colors duration-300 hover:animate-bounce">📧</a>
              <a href="#" className="text-2xl hover:text-purple-400 transition-colors duration-300 hover:animate-bounce">🐦</a>
            </div>
            <p className="text-gray-400 mb-4">
              © {new Date().getFullYear()} Chinmaya Kumar Das - Crafting Digital Dreams 🌟
            </p>
            <p className="text-sm text-gray-500">
              Made with 💖 and lots of ☕ in India
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
