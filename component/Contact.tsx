'use client'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { a } from 'framer-motion/client'

const SERVICE_ID  = 'service_myuxezl'
const TEMPLATE_ID = 'template_pyehgh9'
const PUBLIC_KEY  = '0Zu1RmX9F6ZBNcP1C'

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'romicha617@gmail.com',
    href: 'mailto:romicha617@gmail.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/romicha-parvin',
    href: 'https://www.linkedin.com/in/romicha-parvin-402a16352/',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/Romicha935',
    href: 'https://github.com/Romicha935',
  },
]

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({ from_name: '', from_email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.from_name || !form.from_email || !form.message) return
    setSending(true)
    setError(false)
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY)
      setSent(true)
      setForm({ from_name: '', from_email: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    } catch (err) {
      console.error(err)
      setError(true)
      setTimeout(() => setError(false), 4000)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="relative mb-12 z-10">

        {/* Header */}
        <div data-aos="fade-down" className="flex flex-col items-center mb-20">
          <span className="text-[11px] font-mono tracking-[0.4em] text-[#7c3aed]/70 uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold text-white mb-4">
            Contact <span className="text-[#7c3aed]">Me</span>
          </h2>
          <div className="flex items-center gap-3">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#7c3aed]/60" />
            <div className="w-2 h-2 rounded-full bg-[#7c3aed]" />
            <div className="w-24 h-[1px] bg-[#7c3aed]/40" />
            <div className="w-2 h-2 rounded-full border border-[#9f67ff]" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#9f67ff]/60" />
          </div>
          <p className="text-white/35 text-sm font-mono text-center mt-5 max-w-md leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach out — I&apos;m always open to new opportunities.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* LEFT: Info Cards */}
          <div data-aos='fade-left' className="lg:col-span-2 flex flex-col gap-5">

            {/* Available badge */}
            <div className="flex items-center gap-3 p-4 rounded-2xl border border-[#7c3aed]/20 bg-[#7c3aed]/5">
              <span className="w-3 h-3 rounded-full bg-[#7c3aed] animate-pulse shadow-[0_0_10px_rgba(124,58,237,0.6)]" />
              <div>
                <p className="text-[#7c3aed] font-syne font-bold text-sm">Available for work</p>
                <p className="text-white/35 text-xs font-mono">Open to freelance & full-time roles</p>
              </div>
            </div>

            {/* Contact info cards */}
            {contactInfo.map((info) => (
              <a 
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/[0.02] hover:border-[#7c3aed]/25 hover:bg-[#7c3aed]/[0.03] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/10 border border-[#7c3aed]/20 flex items-center justify-center text-[#7c3aed] group-hover:bg-[#7c3aed]/20 transition-all duration-300 shrink-0">
                  {info.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-white/30 text-[10px] font-mono tracking-widest uppercase mb-0.5">{info.label}</p>
                  <p className="text-white/70 text-sm font-mono group-hover:text-white transition-colors duration-300 truncate">{info.value}</p>
                </div>
                <svg className="ml-auto shrink-0 text-white/20 group-hover:text-[#7c3aed] transition-colors duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            ))}
          </div>

          {/* RIGHT: Contact Form */}
          <div data-aos='fade-right' className="lg:col-span-3">
            <div className="p-8 rounded-2xl border border-white/20 bg-white/[0.02] relative overflow-hidden">

              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7c3aed] to-[#9f67ff]" />

              <h3 className="font-syne font-bold text-white text-lg mb-6">Send a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono text-white/40 tracking-widest uppercase">
                      Your Name <span className="text-[#7c3aed]">*</span>
                    </label>
                    <input
                      type="text" name="from_name" value={form.from_name} onChange={handleChange} required
                      placeholder="Enter Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-white/80 text-sm font-mono placeholder-white/20 focus:outline-none focus:border-[#7c3aed]/40 focus:bg-[#7c3aed]/[0.03] transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono text-white/40 tracking-widest uppercase">
                      Email Address <span className="text-[#7c3aed]">*</span>
                    </label>
                    <input
                      type="email" name="from_email" value={form.from_email} onChange={handleChange} required
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-white/80 text-sm font-mono placeholder-white/20 focus:outline-none focus:border-[#7c3aed]/40 focus:bg-[#7c3aed]/[0.03] transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono text-white/40 tracking-widest uppercase">Subject</label>
                  <input
                    type="text" name="subject" value={form.subject} onChange={handleChange}
                    placeholder="Project Collaboration / Job Opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-white/80 text-sm font-mono placeholder-white/20 focus:outline-none focus:border-[#7c3aed]/40 focus:bg-[#7c3aed]/[0.03] transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono text-white/40 tracking-widest uppercase">
                    Message <span className="text-[#7c3aed]">*</span>
                  </label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-white/80 text-sm font-mono placeholder-white/20 focus:outline-none focus:border-[#7c3aed]/40 focus:bg-[#7c3aed]/[0.03] transition-all duration-300 resize-none"
                  />
                </div>

                {/* Error */}
                {error && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-mono">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    Something went wrong. Please try again.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending || sent}
                  className={`
                    w-full py-3.5 rounded-xl font-syne font-bold text-sm tracking-widest uppercase
                    flex items-center justify-center gap-2 transition-all duration-300
                    ${sent
                      ? 'bg-[#7c3aed]/15 border border-[#7c3aed]/40 text-[#7c3aed] cursor-default'
                      : error
                      ? 'bg-red-500/20 border border-red-500/30 text-red-400 cursor-default'
                      : 'bg-gradient-to-r from-[#7c3aed] to-[#9f67ff] text-white hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(124,58,237,0.3)] disabled:opacity-70 disabled:cursor-not-allowed'
                    }
                  `}
                >
                  {sent ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      Message Sent Successfully!
                    </>
                  ) : sending ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}