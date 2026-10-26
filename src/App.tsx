import { motion, useScroll, useTransform } from "motion/react";
import { 
  Github, 
  ExternalLink, 
  Mail, 
  Sparkles, 
  GraduationCap, 
  Video, 
  BookOpen, 
  Layers, 
  ArrowUpRight, 
  Compass, 
  Cpu, 
  Code2, 
  Check, 
  ChevronRight,
  Monitor
} from "lucide-react";
import { useRef, useState } from "react";
import Lab from "./components/Lab";
import BoardTapasyaPreview from "./components/BoardTapasyaPreview";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [boardViewMode, setBoardViewMode] = useState<'interactive' | 'live'>('interactive');
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const ambientOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.4]);

  const platforms = [
    {
      id: "board-tapasya",
      title: "Board Tapasya",
      tagline: "Animated Lectures & Comprehensive Notes",
      audience: "Class 10th & 12th Board Students · CBSE & State Boards",
      description: "An educational platform designed and developed by Yashraj Jadhav to transform high-stakes board preparation. Combines high-retention 3D concept animations, structured chapter revision notes, formula cheat-sheets, and step-by-step previous year question (PYQ) solutions engineered to help students score 95%+ without rote memorization.",
      highlights: [
        "High-retention 3D animated concept lectures for Physics, Chemistry & Maths",
        "Handwritten master summary notes & visual formula roadmaps",
        "CBSE & State board marking scheme solutions with partial mark breakdowns"
      ],
      tech: ["Animated Lectures", "Comprehensive Notes", "Class 10th & 12th", "EdTech Platform", "TypeScript"],
      isInteractiveDemo: true,
      url: "https://boardtapasya.netlify.app",
      accent: "text-amber-400"
    },
    {
      id: "yashraj-frames",
      title: "Yashraj Frames",
      tagline: "Digital Canvas & Aesthetic Showcase",
      audience: "Creative Web Design · Visual Showcase",
      description: "An interactive digital exhibition space and aesthetic web frames showcase crafted by Yashraj Jadhav. Features high-velocity responsive canvas styling, buttery-smooth GPU transitions, and dynamic art presentations engineered for modern displays.",
      highlights: [
        "Responsive canvas layout with hardware-accelerated transitions",
        "Fluid dynamic frame exhibition system",
        "Ultra-lightweight architecture with zero layout shift"
      ],
      tech: ["React", "Custom CSS", "Modern Web", "Canvas Design"],
      showIframe: true,
      url: "https://yashrajframes.netlify.app",
      accent: "text-amber-300"
    },
    {
      id: "jee-tapasya",
      title: "JEE Tapasya",
      tagline: "Engineering Entrance Examination Ecosystem",
      audience: "JEE Main & JEE Advanced Aspirants",
      description: "A specialized competitive examination portal developed by Yashraj Jadhav for engineering aspirants preparing for JEE Main & JEE Advanced. Delivers structured DPPs (Daily Practice Problems), topic-wise problem sets, and test series resources with clean, zero-distraction UI.",
      highlights: [
        "Targeted question banks aligned with latest NTA patterns",
        "Daily Practice Problems with solution explanations",
        "Minimalist distraction-free exam simulation interface"
      ],
      tech: ["Next.js", "JEE Main & Advanced", "Test Engine", "Tailwind CSS"],
      showIframe: true,
      url: "https://jeetapasya.vercel.app",
      accent: "text-amber-400"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050507] text-[#f4f4f5] selection:bg-amber-400 selection:text-black">
      {/* Apple-grade Fixed 3-Zone Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-14 md:h-16 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.6)]" />
            <span className="text-sm font-semibold tracking-tight text-white group-hover:text-amber-200 transition-colors">
              Yashraj Jadhav
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
            <a href="#platforms" className="hover:text-white transition-colors">Platforms</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#lab" className="hover:text-white transition-colors">Lab</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Zone 3: Primary Action Button */}
          <div className="flex items-center gap-3">
            <a 
              href="mailto:yashrajjadhav2010@gmail.com"
              className="bg-white hover:bg-zinc-200 text-black text-xs font-semibold px-4 py-1.5 rounded-full transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section: Apple Keynote Style */}
      <section className="relative min-h-screen pt-32 md:pt-40 pb-20 px-6 overflow-hidden flex flex-col justify-center">
        {/* Ambient Top Light Beam */}
        <motion.div 
          style={{ opacity: ambientOpacity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] pointer-events-none ambient-glow" 
        />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Typographic Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Clean Authoritative Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-300">
                Class 11th Student & Developer · Son of Madhavrao Jadhav
              </span>
            </div>

            {/* Apple Keynote Master Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.035em] leading-[1.05] text-white mb-6">
              Engineering digital products that define learning and design.
            </h1>

            {/* Clear, High-Value Subtitle */}
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-xl mb-8">
              Portfolio of <strong className="text-white font-semibold">Yashraj Madhav Jadhav</strong>. Developer behind <strong className="text-white font-medium">Yashraj Frames</strong>, <strong className="text-white font-medium">Board Tapasya</strong> (animated lectures & comprehensive notes for board students), and <strong className="text-white font-medium">JEE Tapasya</strong>.
            </p>

            {/* Apple-style Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-12">
              <a 
                href="#platforms"
                className="bg-white hover:bg-zinc-200 text-black text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex items-center gap-2"
              >
                <span>Explore 3 Flagship Platforms</span>
                <ChevronRight size={15} />
              </a>
              <a 
                href="#about"
                className="bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 text-xs sm:text-sm font-medium px-6 py-3 rounded-full border border-white/[0.1] transition-all"
              >
                About Yashraj & Heritage
              </a>
            </div>

            {/* Apple Keynote Metric Strip */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/[0.08] w-full max-w-lg">
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-white tracking-tight">03</span>
                <span className="text-[11px] font-mono text-zinc-400 tracking-wider uppercase">Live Platforms</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-white tracking-tight">11th</span>
                <span className="text-[11px] font-mono text-zinc-400 tracking-wider uppercase">Grade Innovator</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-white tracking-tight">100%</span>
                <span className="text-[11px] font-mono text-zinc-400 tracking-wider uppercase">Independent Tech</span>
              </div>
            </div>
          </div>

          {/* Founder Hardware Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent rounded-3xl blur-2xl pointer-events-none" />
              
              <div className="relative rounded-3xl overflow-hidden border border-white/[0.1] bg-zinc-900/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src="https://i.ibb.co/B5QMKYxx/founder.png" 
                    alt="Yashraj Madhav Jadhav" 
                    className="w-full h-full object-cover object-top scale-100 group-hover:scale-[1.02] transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Subtle Apple-style Metadata Plaque */}
                <div className="p-4 bg-zinc-950/80 border-t border-white/[0.08] flex items-center justify-between">
                  <div>
                    <h2 className="text-sm font-semibold text-white tracking-tight">
                      Yashraj Madhav Jadhav
                    </h2>
                    <p className="text-[11px] text-zinc-400 font-mono">
                      Son of Madhavrao Jadhav · India
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[10px] font-mono font-medium">
                      <Sparkles size={11} /> Creator
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Marquee Divider */}
        <div className="mt-20 pt-6 border-t border-white/[0.08] overflow-hidden">
          <div className="flex whitespace-nowrap gap-12 opacity-40 text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="flex items-center gap-8 shrink-0">
                <span>Yashraj Frames</span>
                <span>·</span>
                <span>Board Tapasya (Animated Lectures & Notes)</span>
                <span>·</span>
                <span>JEE Tapasya</span>
                <span>·</span>
                <span>Class 11th Student Engineer</span>
                <span>·</span>
                <span>Son of Madhavrao Jadhav</span>
                <span>·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Platforms Showcase Section */}
      <section id="platforms" className="py-28 md:py-36 px-6 bg-[#07070a] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
                Flagship Platforms · Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Three Distinct Products. Built from the Ground Up.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
              Engineered with extreme attention to visual fidelity, pedagogical clarity, and performance. Each platform solves a specific, high-value problem.
            </p>
          </div>

          {/* Platform 1: Board Tapasya */}
          <div className="mb-24 lg:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold text-amber-400">01</span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Flagship EdTech Platform
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                  Board Tapasya
                </h3>
                <p className="text-sm font-medium text-amber-300/90 mb-4 font-mono">
                  Animated Lectures & Notes for Board Students
                </p>
                <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-6">
                  Created by Yashraj Jadhav for Class 10th and 12th board students. Delivers high-retention 3D concept animations that simplify complex physics, chemistry, and mathematics principles into intuitive visuals, alongside comprehensive revision notes and PYQ marking schemes.
                </p>

                <div className="space-y-2.5 mb-8">
                  {platforms[0].highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <Check size={16} className="text-amber-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://boardtapasya.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-zinc-200 text-black text-xs font-semibold px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                  >
                    <span>Launch Board Tapasya</span>
                    <ExternalLink size={13} />
                  </a>
                  <a
                    href="https://boardtapasya.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-amber-300 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>boardtapasya.netlify.app</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7">
                {/* Apple Segmented Switcher: Interactive Suite vs Live Web Embed */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="text-[11px] font-mono text-zinc-400">
                    Preview Mode
                  </span>
                  <div className="flex items-center bg-zinc-900/90 p-1 rounded-xl border border-white/[0.08] text-xs">
                    <button
                      onClick={() => setBoardViewMode('interactive')}
                      className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 font-mono text-[11px] ${
                        boardViewMode === 'interactive'
                          ? 'bg-white text-black font-semibold shadow-sm'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Sparkles size={12} className={boardViewMode === 'interactive' ? 'text-amber-600' : ''} />
                      <span>Interactive Demo</span>
                    </button>
                    <button
                      onClick={() => setBoardViewMode('live')}
                      className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 font-mono text-[11px] ${
                        boardViewMode === 'live'
                          ? 'bg-white text-black font-semibold shadow-sm'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Monitor size={12} />
                      <span>Live Site (Netlify)</span>
                    </button>
                  </div>
                </div>

                {boardViewMode === 'interactive' ? (
                  <BoardTapasyaPreview />
                ) : (
                  <div className="aspect-[16/11] rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0a0a0f] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col group">
                    {/* Studio Display Browser Bar */}
                    <div className="bg-[#121217] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400 truncate max-w-[240px]">
                        https://boardtapasya.netlify.app
                      </span>
                      <a 
                        href="https://boardtapasya.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors"
                        title="Open Board Tapasya in new tab"
                      >
                        <ExternalLink size={13} />
                      </a>
                    </div>

                    {/* Embedded Iframe Preview */}
                    <div className="relative flex-1 bg-black">
                      <iframe
                        src="https://boardtapasya.netlify.app"
                        title="Board Tapasya - Animated Lectures & Notes for Board Students"
                        className="w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Platform 2: Yashraj Frames */}
          <div className="mb-24 lg:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="aspect-[16/11] rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0a0a0f] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col group">
                  {/* Studio Display Browser Bar */}
                  <div className="bg-[#121217] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 truncate max-w-[220px]">
                      https://yashrajframes.netlify.app
                    </span>
                    <a 
                      href="https://yashrajframes.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors"
                      title="Open Yashraj Frames in new tab"
                    >
                      <ExternalLink size={13} />
                    </a>
                  </div>

                  {/* Embedded Iframe Preview */}
                  <div className="relative flex-1 bg-black">
                    <iframe
                      src="https://yashrajframes.netlify.app"
                      title="Yashraj Frames"
                      className="w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold text-amber-400">02</span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Creative Web Showcase
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                  Yashraj Frames
                </h3>
                <p className="text-sm font-medium text-amber-300/90 mb-4 font-mono">
                  Digital Canvas & Exhibition Platform
                </p>
                <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-6">
                  An interactive digital exhibition space designed and programmed by Yashraj Jadhav. Explores custom canvas rendering, fluid responsive frame layouts, and modern visual presentations that elevate media into sleek art pieces.
                </p>

                <div className="space-y-2.5 mb-8">
                  {platforms[1].highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <Check size={16} className="text-amber-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://yashrajframes.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-zinc-200 text-black text-xs font-semibold px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink size={13} />
                  </a>
                  <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
                    yashrajframes.netlify.app
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Platform 3: JEE Tapasya */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold text-amber-400">03</span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Competitive Examination Prep
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                  JEE Tapasya
                </h3>
                <p className="text-sm font-medium text-amber-300/90 mb-4 font-mono">
                  Engineering Entrance Portal (JEE Main & Adv)
                </p>
                <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-6">
                  Engineered specifically for engineering aspirants striving for top national ranks in JEE Main and Advanced. Provides curated Daily Practice Problems (DPPs), chapter-wise test archives, and rapid concept revisions designed for intense focus.
                </p>

                <div className="space-y-2.5 mb-8">
                  {platforms[2].highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <Check size={16} className="text-amber-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://jeetapasya.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-zinc-200 text-black text-xs font-semibold px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5"
                  >
                    <span>Visit Live Portal</span>
                    <ExternalLink size={13} />
                  </a>
                  <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
                    jeetapasya.vercel.app
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="aspect-[16/11] rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0a0a0f] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col group">
                  {/* Studio Display Browser Bar */}
                  <div className="bg-[#121217] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 truncate max-w-[220px]">
                      https://jeetapasya.vercel.app
                    </span>
                    <a 
                      href="https://jeetapasya.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors"
                      title="Open JEE Tapasya in new tab"
                    >
                      <ExternalLink size={13} />
                    </a>
                  </div>

                  {/* Embedded Iframe Preview */}
                  <div className="relative flex-1 bg-black">
                    <iframe
                      src="https://jeetapasya.vercel.app"
                      title="JEE Tapasya"
                      className="w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section: Apple Executive / Engineering Story */}
      <section id="about" className="py-28 md:py-36 px-6 bg-[#050507] border-t border-white/[0.08] relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
                  Profile & Heritage
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                The Heritage of Building.
              </h2>
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-6">
                Yashraj Madhav Jadhav · Son of Madhavrao Jadhav
              </p>
              <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.08] space-y-2">
                <span className="text-[11px] font-mono text-zinc-400 uppercase block">Current Academic Standing</span>
                <p className="text-sm font-semibold text-white">Class 11th Science Student</p>
                <p className="text-xs text-zinc-400 font-light">Balancing rigorous high-school academics with full-stack software and educational architecture.</p>
              </div>
            </div>

            <div className="md:col-span-8 flex flex-col gap-6 text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
              <p>
                I'm <strong className="text-white font-semibold">Yashraj Madhav Jadhav</strong>, a developer and high school student from India. As the son of <strong className="text-white font-medium">Madhavrao Jadhav</strong>, I grew up with a deep belief that knowledge is meant to be engineered into practical, accessible tools that solve genuine problems.
              </p>
              <p>
                Rather than treating web development as simple aesthetic templates, I approach software as holistic digital products. That philosophy led directly to the creation of <span className="text-amber-300 font-medium">Board Tapasya</span>—an ecosystem specifically designed for Class 10th and 12th students that replaces passive rote memorization with visual 3D concept animations and verified marking scheme notes.
              </p>
              <p>
                Alongside Board Tapasya, I actively engineer <span className="text-white font-medium">Yashraj Frames</span> (exploring creative canvas architecture) and <span className="text-white font-medium">JEE Tapasya</span> (providing competitive exam preparation tools). Every platform is built with modern TypeScript, accessible UI design, and production reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Engineering Pillars */}
      <section id="capabilities" className="py-24 px-6 bg-[#08080c] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 block mb-2">
              Engineering Disciplines
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Disciplined Technical Architecture.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Cpu,
                title: "Frontend Engineering",
                desc: "React, Next.js, TypeScript, and modern bundlers configured for sub-second page loads and zero hydration friction."
              },
              {
                icon: Video,
                title: "Educational Motion",
                desc: "High-retention 3D concept visualizations, interactive SVG physics models, and animated pedagogical lectures."
              },
              {
                icon: Monitor,
                title: "Design Systems",
                desc: "Minimalist Apple-grade dark canvas layouts, typography hierarchy, zero-pill discipline, and frosted glass surfaces."
              },
              {
                icon: Layers,
                title: "Cloud & Reliability",
                desc: "Serverless deployments, real-time Firestore persistence, static edge distribution, and structured JSON-LD SEO schemas."
              }
            ].map((col, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-white/[0.15] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-5">
                    <col.icon size={20} />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">{col.title}</h4>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">{col.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Lab Section */}
      <Lab />

      {/* Contact & Footer: Apple Minimalist Dark Style */}
      <footer id="contact" className="bg-[#050507] border-t border-white/[0.08] pt-24 pb-16 px-6 text-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
            {/* Column 1: Brand & Filial Heritage */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-base font-bold tracking-tight text-white">
                  Yashraj Madhav Jadhav
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-mono">
                Son of Madhavrao Jadhav · Class 11th Student & Platform Architect
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-sm leading-relaxed">
                Developer of Yashraj Frames, Board Tapasya (animated lectures & notes for board students), and JEE Tapasya. Dedicated to high-standard web engineering and educational tools.
              </p>
              <div className="pt-2">
                <a 
                  href="mailto:yashrajjadhav2010@gmail.com"
                  className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <Mail size={14} />
                  <span>yashrajjadhav2010@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Column 2: Flagship Platforms */}
            <div className="lg:col-span-3 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                Flagship Platforms
              </span>
              <ul className="space-y-2 text-xs font-normal text-zinc-300">
                <li>
                  <a 
                    href="https://yashrajframes.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>Yashraj Frames</span>
                    <ArrowUpRight size={12} className="text-zinc-500" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://boardtapasya.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>Board Tapasya (Lectures & Notes)</span>
                    <ArrowUpRight size={12} className="text-zinc-500" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://jeetapasya.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>JEE Tapasya Portal</span>
                    <ArrowUpRight size={12} className="text-zinc-500" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Navigation */}
            <div className="lg:col-span-2 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                Explore
              </span>
              <ul className="space-y-2 text-xs font-normal text-zinc-300">
                <li><a href="#platforms" className="hover:text-white transition-colors">Selected Works</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Founder Story</a></li>
                <li><a href="#capabilities" className="hover:text-white transition-colors">Technical Stack</a></li>
                <li><a href="#lab" className="hover:text-white transition-colors">Interactive Lab</a></li>
              </ul>
            </div>

            {/* Column 4: Location & Status */}
            <div className="lg:col-span-2 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                Presence
              </span>
              <p className="text-xs text-zinc-300 font-light">Maharashtra, India</p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Active on Projects
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Legal / Apple Minimal Strip */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-400">
            <p>© {new Date().getFullYear()} Yashraj Madhav Jadhav. Son of Madhavrao Jadhav. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span>Yashraj Frames · Board Tapasya · JEE Tapasya</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
