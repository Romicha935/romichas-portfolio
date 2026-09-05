'use client'

const education = [
  {
    degree: 'Diploma in Engineering',
    field: 'Computer Science & Technology',
    institute: 'Rangpur Polytechnic Institute',
    duration: '2020 — 2024',
    type: 'Full-time',

    points: [
      'Studying core computer science and programming fundamentals',
      'Learning web development, database systems, and software engineering basics',
      'Practicing frontend development with React.js and modern tools',
      'Working on real-world project-based assignments',
    ],
  },

  {
    degree: 'Secondary School Certificate (SSC)',
    field: 'Science',
    institute: ' Sarkar Bari High School',
    duration: '2018 — 2020',
    type: 'Full-time',

    points: [
      'Completed secondary education with focus on Science group',
      'Built strong foundation in mathematics, physics, and ICT',
      'Developed interest in computer and technology field',
    ],
  },
]
export default function Education() {
  return (
    <section id="education" className="relative md:px-7   overflow-hidden">

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, #7c3aed 1px, transparent 1px)`,
          backgroundSize: '38px 38px',
        }}
      />

      <div className="relative z-10">

        {/* ── Header ── */}
        <div data-aos="fade-down" className="flex flex-col items-center mb-20">
          <span className="text-[11px] font-mono tracking-[0.4em] text-[#7c3aed]/70 uppercase mb-3">
            Academic Background
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold text-white mb-4">
            My <span className="text-[#7c3aed]">Education</span>
          </h2>
          <div className="flex items-center gap-3">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#7c3aed]/60" />
            <div className="w-2 h-2 rounded-full bg-[#7c3aed]" />
            <div className="w-24 h-[1px] bg-[#7c3aed]/40" />
            <div className="w-2 h-2 rounded-full border border-[#c8f135]" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c8f135]/60" />
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className="relative pl-8 border-l-2 border-[#7c3aed]/15">
          {education.map((edu, i) => (
            <div key={i} className="relative mb-12 last:mb-0">

              {/* Glowing dot */}
              <div className="absolute -left-[41px] top-6 w-4 h-4 rounded-full bg-[#7c3aed] shadow-[0_0_14px_rgba(124,58,237,0.7)] ring-4 ring-[#7c3aed]/15" />

              {/* Card */}
              <div  data-aos={i % 2 === 0 ? 'fade-left' : 'fade-right'}
      data-aos-delay={i * 120} className="group p-7 rounded-2xl border border-white/20 bg-white/[0.02] hover:border-[#7c3aed]/25 hover:bg-[#7c3aed]/[0.03] transition-all duration-300 relative overflow-hidden">

                {/* Shimmer line top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7c3aed] to-[#c8f135] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <h3 className="font-syne font-extrabold text-white text-xl mb-1">{edu.degree}</h3>
                    <p className="text-[#7c3aed] font-mono text-sm font-semibold">{edu.field}</p>
                    <p className="text-white/35 font-mono text-xs mt-0.5">{edu.institute}</p>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-2">
                    {edu.type && (
                      <span className="text-[11px] font-mono px-3 py-1 rounded-full border border-[#7c3aed]/30 text-[#7c3aed]/80 bg-[#7c3aed]/8 whitespace-nowrap">
                        {edu.type}
                      </span>
                    )}
                    <div className="flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff40" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <span className="text-white/35 text-xs font-mono whitespace-nowrap">{edu.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/5 mb-5" />

                {/* Bullet points */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {edu.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-white/50 text-sm leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#7c3aed]/70 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}