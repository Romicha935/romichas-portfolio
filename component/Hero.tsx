'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

const roles = ['Frontend Developer.', 'Full Stack Developer.']

const techStack = [
  { name: 'React',      color: '#61DAFB' },
  { name: 'Next.js',    color: '#ffffff' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Email.js',    color: '#68A063' },
  { name: 'AOS',    color: '#47A248' },
  { name: 'Tailwind',   color: '#38BDF8' },
  { name: 'Vercel',    color: '#ffffff' },
  
]

export default function Hero() {
  const [roleIndex, setRoleIndex]   = useState(0)
  const [charIndex, setCharIndex]   = useState(0)
  const [deleting, setDeleting]     = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const displayed = roles[roleIndex].slice(0, charIndex)

  // Typewriter
  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80)
    } else if (!deleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 45)
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false)
        setRoleIndex((i) => (i + 1) % roles.length)
      }, 0)
    }
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530)
    return () => clearInterval(interval)
  }, [])

  // AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <section id="home" className="relative py-9 lg:py-25 flex flex-col items-center overflow-hidden">

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle, #7c3aed 1px, transparent 1px)`,
          backgroundSize: '38px 38px',
        }}
      />

      {/* ── Hero Content ── */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-14 pt-24 pb-10">

        {/* LEFT: Text */}
        <div data-aos="fade-right" className="flex-1 flex flex-col px-4 items-start">

          <p className="text-white/40 text-sm md:text-base font-mono tracking-[0.3em] uppercase mb-4">
            Hello, I&apos;m
          </p>

          <h1 className="font-syne text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-[#7c3aed] via-[#9f67ff] to-[#7c3aed] bg-clip-text text-transparent tracking-tight leading-none mb-5">
            Romicha
          </h1>

          {/* Typewriter */}
          <div className="h-[40px] flex items-center mb-6">
            <h2 className="text-xl md:text-2xl font-syne font-bold text-[#7c3aed]">
              {displayed}
              <span
                className="inline-block w-[2px] h-[1.1em] bg-[#7c3aed] ml-[2px] align-middle"
                style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s' }}
              />
            </h2>
          </div>

          {/* Description */}
          <p className="text-white/45 text-sm md:text-base leading-relaxed max-w-md mb-10">
            Passionate Full Stack Developer 
            <br />
           Building responsive, scalable, and modern web applications
with React, Next.js, TypeScript, and backend technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
    <a
  href="/01.resume-of-romicha .pdf"
  download
  className="
  flex items-center gap-2 px-6 py-3 rounded-md
  cursor-pointer
  bg-gradient-to-r from-[#7c3aed] to-[#9f67ff]
  text-white font-syne font-bold text-sm tracking-wide
  hover:scale-105 transition-transform
  "
>
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>

  Download Resume
</a>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 rounded-md cursor-pointer bg-white/5 backdrop-blur-md border border-[#7c3aed]/40 text-[#7c3aed] font-syne font-bold text-sm tracking-wide hover:bg-[#7c3aed]/10 hover:border-[#7c3aed] transition-all duration-300 shadow-md"
            >
              Get In Touch
            </button>
          </div>

          {/* ── Social Icons (FIXED) ── */}
          <div className="flex items-center gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/Romicha935"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-white/45 hover:text-[#7c3aed] hover:border-[#7c3aed]/40 hover:bg-[#7c3aed]/10 hover:shadow-[0_0_25px_rgba(124,58,237,0.35)] transition-all duration-300 hover:-translate-y-1"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/romicha-parvin-402a16352/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-white/45 hover:text-[#7c3aed] hover:border-[#7c3aed]/40 hover:bg-[#7c3aed]/10 hover:shadow-[0_0_25px_rgba(124,58,237,0.35)] transition-all duration-300 hover:-translate-y-1"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:romicha617@gmail.com"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-white/45 hover:text-[#7c3aed] hover:border-[#7c3aed]/40 hover:bg-[#7c3aed]/10 hover:shadow-[0_0_25px_rgba(124,58,237,0.35)] transition-all duration-300 hover:-translate-y-1"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>

            {/* Facebook (optional) */}
            <a
              href="#"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-white/45 hover:text-[#7c3aed] hover:border-[#7c3aed]/40 hover:bg-[#7c3aed]/10 hover:shadow-[0_0_25px_rgba(124,58,237,0.35)] transition-all duration-300 hover:-translate-y-1"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT: Profile Photo */}
        <div data-aos="fade-left" className="flex-shrink-0">
          <div className="relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] xl:h-[440px] xl:w-[440px]">

            {/* Outer gradient ring */}
            <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-[#7c3aed] via-[#9f67ff] to-[#7c3aed]">
              <div className="w-full h-full rounded-full bg-[#0e0e0e]" />
            </div>

            {/* Animated glow */}
            <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-[#7c3aed]/20 to-[#9f67ff]/20 blur-md animate-pulse" style={{ animationDuration: '3s' }} />

            {/* Photo */}
            <div className="absolute inset-[4px] rounded-full overflow-hidden bg-[#161616]">
              <Image
                src="/me.jpg"
                alt="Romicha"
                fill
                className="object-cover transition-all duration-500 hover:scale-110"
              />
            </div>

            {/* Open to work badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0e0e0e] border border-[#7c3aed]/30 flex items-center gap-2 whitespace-nowrap shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" />
              <span className="text-[11px] font-mono text-[#7c3aed]/80 tracking-wider">Open to work</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tech Stack Strip ── */}
      <div data-aos="fade-up" className="relative z-10 w-full mt-8 mb-4">
        {/* Label */}
        <p className="text-center text-[11px] font-mono tracking-[0.4em] text-white/40 uppercase mb-6">
         This portfolio is built with
        </p>

        {/* Strip */}
        <div className="relative flex items-center gap-0 overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0e0e0e] to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0e0e0e] to-transparent z-10 pointer-events-none" />

          {/* Scrolling tags — duplicate for infinite loop */}
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/[0.03] backdrop-blur-sm shrink-0"
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: tech.color, boxShadow: `0 0 6px ${tech.color}80` }}
                />
                <span className="text-white/60 text-xs font-mono tracking-wide">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}




// 'use client'
// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import AOS from 'aos'
// import 'aos/dist/aos.css'

// const roles = ['Frontend Developer.', 'MERN Stack Developer.']

// export default function Hero() {
//   const [roleIndex, setRoleIndex] = useState(0)
//   const [charIndex, setCharIndex] = useState(0)
//   const [deleting, setDeleting] = useState(false)
//   const [showCursor, setShowCursor] = useState(true)
//   const displayed = roles[roleIndex].slice(0, charIndex)

//   useEffect(() => {
//     const currentRole = roles[roleIndex]
//     let timeout: ReturnType<typeof setTimeout>

//     if (!deleting && charIndex < currentRole.length) {
//       timeout = setTimeout(() => setCharIndex((c) => c + 1), 80)
//     } else if (!deleting && charIndex === currentRole.length) {
//       timeout = setTimeout(() => setDeleting(true), 1800)
//     } else if (deleting && charIndex > 0) {
//       timeout = setTimeout(() => setCharIndex((c) => c - 1), 45)
//     } else if (deleting && charIndex === 0) {
//       timeout = setTimeout(() => {
//         setDeleting(false)
//         setRoleIndex((i) => (i + 1) % roles.length)
//       }, 0)
//     }

//     return () => clearTimeout(timeout)
//   }, [charIndex, deleting, roleIndex])

//   useEffect(() => {
//     const interval = setInterval(() => setShowCursor((v) => !v), 530)
//     return () => clearInterval(interval)
//   }, [])

//   useEffect(() => {
//   AOS.init({
//     duration: 800,
//     once: true,
//   })
// }, [])

//   return (
//     <section id="home" className="relative  py-9 lg:py-25 flex items-center overflow-hidden">

//       {/* Dot grid */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-[0.07]"
//         style={{
//           backgroundImage: `radial-gradient(circle, #7c3aed 1px, transparent 1px)`,
//           backgroundSize: '38px 38px',
//         }}
//       />

//       <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-14 pt-24 pb-16">

//         {/* LEFT: Text */}
//         <div data-aos="fade-right" className="flex-1 flex flex-col items-start">

//           <p className="text-white/40 text-sm md:text-base font-mono tracking-[0.3em] uppercase mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
//             Hello, I&apos;m
//           </p>

//           {/* Name */}
//           <h1
//             className="font-syne text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-[#7c3aed] via-[#9f67ff] to-[#7c3aed]
//             bg-clip-text text-transparent tracking-tight leading-none mb-5 animate-fade-in"
//             style={{ animationDelay: '0.2s' }}
//           >
//             Romicha
//           </h1>

//           {/* Typewriter */}
//           <div className="h-[40px] flex items-center mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
//             <h2 className="text-xl md:text-2xl font-syne font-bold text-[#7c3aed]">
//               {displayed}
//               <span
//                 className="inline-block w-[2px] h-[1.1em] bg-[#7c3aed] ml-[2px] align-middle"
//                 style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s' }}
//               />
//             </h2>
//           </div>

//           {/* Description */}
//           <p className="text-white/45 text-sm md:text-base leading-relaxed max-w-md mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
//             Passionate Full Stack Developer | MERN Enthusiast.
//             <br />
//             Turning ideas into interactive web experiences with clean, efficient,
//             and modern code. I thrive on building solutions that are not just
//             functional, but memorable.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-wrap gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
//             <button className="flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-[#7c3aed] to-[#9f67ff] text-white font-syne font-bold text-sm tracking-wide hover:scale-105 transition-transform">
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//                 <polyline points="7 10 12 15 17 10" />
//                 <line x1="12" y1="15" x2="12" y2="3" />
//               </svg>
//               Download Resume
//             </button>

//             <button
//               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//               className="px-6 py-3 rounded-md
//               bg-white/5 backdrop-blur-md border border-[#7c3aed]/40
//               text-[#7c3aed] font-syne font-bold text-sm tracking-wide
//               hover:bg-[#7c3aed]/10 hover:border-[#7c3aed]
//               transition-all duration-300 shadow-md"
//             >
//               Get In Touch
//             </button>
//           </div>

//           {/* Social Icons */}
//       <div
//   className="flex items-center gap-4 animate-fade-in"
//   style={{ animationDelay: '0.6s' }}
// >
//   {/* GitHub */}
//   <a
//     href="https://github.com/devromicha"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="
//     group w-11 h-11 rounded-full
//     border border-white/10
//     bg-white/[0.03]
//     backdrop-blur-xl
//     flex items-center justify-center
//     text-white/45
//     hover:text-[#7c3aed]
//     hover:border-[#7c3aed]/40
//     hover:bg-[#7c3aed]/10
//     hover:shadow-[0_0_25px_rgba(124,58,237,0.35)]
//     transition-all duration-300
//     hover:-translate-y-1
//     "
//   >
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504..." />
//     </svg>
//   </a>

//   {/* LinkedIn */}
//   <a
//     href="https://www.linkedin.com/in/romicha-parvin-402a16352/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="
//     group w-11 h-11 rounded-full
//     border border-white/10
//     bg-white/[0.03]
//     backdrop-blur-xl
//     flex items-center justify-center
//     text-white/45
//     hover:text-[#7c3aed]
//     hover:border-[#7c3aed]/40
//     hover:bg-[#7c3aed]/10
//     hover:shadow-[0_0_25px_rgba(124,58,237,0.35)]
//     transition-all duration-300
//     hover:-translate-y-1
//     "
//   >
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7..." />
//     </svg>
//   </a>

//   {/* Email */}
//   <a
//     href="mailto:yourmail@gmail.com"
//     className="
//     group w-11 h-11 rounded-full
//     border border-white/10
//     bg-white/[0.03]
//     backdrop-blur-xl
//     flex items-center justify-center
//     text-white/45
//     hover:text-[#7c3aed]
//     hover:border-[#7c3aed]/40
//     hover:bg-[#7c3aed]/10
//     hover:shadow-[0_0_25px_rgba(124,58,237,0.35)]
//     transition-all duration-300
//     hover:-translate-y-1
//     "
//   >
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M4 4h16c1.1 0 2 .9 2 2v12..." />
//     </svg>
//   </a>
// </div>
//         </div>

//         {/* RIGHT: Profile Photo */}
//         <div data-aos='fade-left' className="flex-shrink-0 animate-fade-in" style={{ animationDelay: '0.25s' }}>
//           <div className="relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] xl:h-[440px] xl:w-[440px]">

//             {/* Outer gradient ring */}
//             <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-[#7c3aed] via-[#9f67ff] to-[#7c3aed]">
//               <div className="w-full h-full rounded-full bg-[#0e0e0e]" />
//             </div>

//             {/* Animated glow */}
//             <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-[#7c3aed]/20 to-[#9f67ff]/20 blur-md animate-pulse" style={{ animationDuration: '3s' }} />

//             {/* Photo */}
//             <div className="absolute inset-[4px] rounded-full overflow-hidden bg-[#161616] flex items-center justify-center group">
//               <Image src="/romicha.png" alt="Romicha" fill className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl" />
//               <div className="w-full h-full bg-gradient-to-br from-[#1c1c1c] to-[#111] flex items-center justify-center">
//                 <span className="text-white/15 text-xs font-mono tracking-widest">YOUR PHOTO</span>
//               </div>
//             </div>

//             {/* Open to work badge */}
//             <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0e0e0e] border border-[#7c3aed]/30 flex items-center gap-2 whitespace-nowrap shadow-lg">
//               <span className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" />
//               <span className="text-[11px] font-mono text-[#7c3aed]/80 tracking-wider">Open to work</span>
//             </div>

//           </div>
//         </div>

//       </div>

//       <style>{`
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(20px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in {
//           opacity: 0;
//           animation: fade-in 0.7s ease forwards;
//         }
//       `}</style>
//     </section>
//   )
// }