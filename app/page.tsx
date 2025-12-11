"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { icons } from "lucide-react"
import { MouseBackground } from "@/components/mouse-background"


export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedDarkMode = localStorage.getItem("darkMode")
    if (savedDarkMode !== null) {
      const dark = JSON.parse(savedDarkMode)
      setIsDark(dark)
      updateDarkMode(dark)
    } else {
      updateDarkMode(true)
      setIsDark(true)
    }
  }, [])

  const updateDarkMode = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }



  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode))
    updateDarkMode(newDarkMode)
  }

  if (!mounted) return null

  const TechStack = [
    { name: "React", icon: "react-light" },
    { name: "Next.js", icon: "nextjs-light" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Tailwind CSS", icon: "tailwindcss-light" },
    { name: "Bootstrap", icon: "bootstrap-light" },
    { name: "Material UI", icon: "materialui" },
    { name: "shadcn/ui", icon: "shadcnui" },
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "Figma", icon: "figma-light" },
  ];

  return (
    <div className="min-h-screen animate-gradient text-slate-900 dark:text-white transition-colors duration-500 relative">
      <MouseBackground />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-300 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-300">
            YOUSEF ALBUSHRA
          </span>
          <div className="flex gap-8 text-sm items-center">
            <Link
              href="#projects"
              className="text-slate-700 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-slate-700 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition"
            >
              Contact
            </Link>
            <button
              onClick={toggleDarkMode}
              className="px-3 py-1 rounded border border-slate-400 dark:border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition text-sm text-slate-700 dark:text-slate-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 pt-24 md:pt-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0 w-full max-w-[300px] md:max-w-[400px] flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-400 overflow-hidden shadow-lg shadow-cyan-500/20">
              <Image
                src="/logo.jpg"
                alt="Yousef Alboshra"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white leading-tight">
              Hey, I'm Yousef.{" "}
              <span className="text-cyan-500 dark:text-cyan-400 block mt-2">I'm a Frontend Software Developer</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg max-w-2xl mx-auto md:mx-0">
              With 2+ years of experience building web applications and delivering seamless user experiences.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="px-4 py-2 rounded border border-slate-400 dark:border-slate-600 text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span>📍</span> Sudan, Sennar
              </div>
              <a
                href="https://www.linkedin.com/in/yousef-alboshra-79509b235"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded border border-slate-400 dark:border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2"
              >
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} className="dark:invert" /> LinkedIn
              </a>
              <a
                href="https://github.com/JoeMicro240528"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded border border-slate-400 dark:border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2"
              >
                <Image src="/icons/github-dark.svg" alt="GitHub" width={20} height={20} className="dark:invert" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section  */}
      <section className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <h2 className="text-center text-xl font-bold tracking-widest text-slate-700 dark:text-slate-300 mb-12">
          TECH STACK
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6 mb-4">
          {TechStack.map((tech) => (
            <div
              key={tech.name}
              className="aspect-square rounded-xl border border-slate-300 dark:border-slate-700 hover:border-cyan-400 flex flex-col gap-3 items-center justify-center text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-900 transition cursor-pointer text-slate-900 dark:text-slate-300 group"
            >
              <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform group-hover:scale-110 duration-300">
                <Image
                  src={`/icons/${tech.icon}.svg`}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-center px-2">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <h2 className="text-xl font-bold tracking-widest text-slate-700 dark:text-slate-300 mb-12">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* TRIBE Project */}
          <div className="border border-slate-300 dark:border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition bg-slate-50 dark:bg-slate-900/50 hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">MoviesDB</h3>
              <span className="text-2xl">🎬</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">
              A movie database application that allows users to browse, search, and discover movies with detailed information and user reviews.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Reactjs ", "Typescript", "ReduxToolKit", "Tailwind CSS"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-auto">
              <a
                href="https://movies-db-b5co.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 rounded bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition text-sm border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-300 text-center"
              >
                🔗 Live Demo
              </a>
              <a
                href="https://github.com/JoeMicro240528/Movies_DB"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 rounded bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition text-sm border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-300 text-center"
              >
                💾 Source
              </a>
            </div>
          </div>

          {/* Additional Projects */}
          {[
            { name: " Real Estate", emoji: " 🏠", tech: ["React", "aos animation", "Tailwind CSS"], description: "A real estate listing platform with interactive maps and property details.", sourcecode: 'https://github.com/JoeMicro240528/Real_Estate.git', livedemo: 'https://real-estate-lyart-one-31.vercel.app/' },
            { name: "landing page", emoji: "🌐", tech: ["React", "React-typed", "Tailwind CSS"], description: "A landing page with interactive typing animation and responsive design.", sourcecode: 'https://github.com/JoeMicro240528/tailwindcss-app.git', livedemo: 'https://tailwindcss-app-sepia.vercel.app/' },
          ].map((project) => (
            <div
              key={project.name}
              className="border border-slate-300 dark:border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition bg-slate-50 dark:bg-slate-900/50 hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.name}</h3>
                <span className="text-2xl">{project.emoji}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.livedemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 rounded bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition text-sm border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-300 text-center"
                >
                  🔗 Live Demo
                </a>
                <a
                  href={project.sourcecode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 rounded bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition text-sm border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-300 text-center"
                >
                  💾 Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <h2 className="text-xl font-bold tracking-widest text-slate-700 dark:text-slate-300 mb-12">CONTACT</h2>
        <div className="border border-slate-300 dark:border-slate-700 rounded-xl p-8 max-w-2xl bg-slate-50 dark:bg-slate-900/50 hover:border-cyan-400 transition">
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
            Have a project in mind or just want to chat? Feel free to reach out to me through any of these channels.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <span className="text-cyan-500 dark:text-cyan-400 font-bold w-20">Email:</span>
              <a
                href="mailto:yousefalboshra@gmail.com"
                className="text-slate-700 dark:text-slate-300 hover:text-cyan-400 transition group-hover:translate-x-1 duration-300"
              >
                yousefalboshra@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 group">
              <span className="text-cyan-500 dark:text-cyan-400 font-bold w-20">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/yousef-alboshra-79509b235"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-cyan-400 transition group-hover:translate-x-1 duration-300"
              >
                linkedin.com/yousef-alboshra
              </a>
            </div>
            <div className="flex items-center gap-4 group">
              <span className="text-cyan-500 dark:text-cyan-400 font-bold w-20">GitHub:</span>
              <a
                href="https://github.com/JoeMicro240528"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-cyan-400 transition group-hover:translate-x-1 duration-300"
              >
                github.com/JoeMicro
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-300 dark:border-slate-700">
            <a
              href="mailto:yousefalboshra@gmail.com"
              className="inline-block px-8 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-lg transition shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40"
            >
              Send Me an Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-300 dark:border-slate-800 mt-20 bg-white dark:bg-slate-950 transition-colors duration-500 relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center text-slate-600 dark:text-slate-400 text-sm">
          <p>© 2025 Yousef Albushra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
