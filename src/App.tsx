import { motion, useScroll, useTransform } from "motion/react";
import { Github, Globe, ExternalLink, Mail, Code, Sparkles, GraduationCap, Layout } from "lucide-react";
import { useRef } from "react";

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const projects = [
    {
      title: "Yashraj Frames",
      url: "https://yashrajframes.netlify.app",
      description: "A framework/showcase for digital frames and art.",
      tech: ["React", "Custom CSS", "Design"],
      showIframe: true
    },
    {
      title: "Jee Tapasya",
      url: "https://jeetapasya.vercel.app",
      description: "A specialized platform for educational resources.",
      tech: ["Next.js", "Education", "Web Dev"],
      showIframe: true
    },
    {
      title: "More Projects",
      url: "#",
      description: "Constantly building and innovating with new web technologies.",
      tech: ["Experimentation", "UI/UX"],
      showIframe: false
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen selection:bg-brand selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 mix-blend-difference text-white flex justify-between items-center bg-transparent">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg md:text-xl font-display uppercase tracking-widest"
        >
          Yashraj J.
        </motion.div>
        <div className="flex gap-4 md:gap-8 text-[10px] md:text-sm uppercase tracking-widest font-medium">
          {["Work", "About", "Contact"].map((item) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1, color: "#ff5f1f" }}
              className="cursor-pointer"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Floating UI for Desktop */}
      <div className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center gap-6 z-40">
        <div className="w-[1px] h-24 bg-dark/20" />
        <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.3em] font-mono text-dark/40 py-4 rotate-180">
          Scroll to explore
        </span>
      </div>

      <div className="hidden lg:flex fixed right-8 bottom-8 flex-col items-center gap-8 z-40 mix-blend-difference text-white">
        <motion.a whileHover={{ scale: 1.2, color: "#ff5f1f" }} href="#" title="Github">
          <Github size={20} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2, color: "#ff5f1f" }} href="mailto:yashrajjadhav2010@gmail.com" title="Email">
          <Mail size={20} />
        </motion.a>
        <div className="w-px h-12 bg-white/40 mt-2" />
      </div>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col justify-start p-6 md:p-12 bg-dark text-white overflow-hidden pt-48 md:pt-64">
        {/* Background Decorative Text */}
        <motion.div 
          style={{ rotate }}
          className="absolute -top-1/4 -right-1/4 w-[120vw] h-[120vw] opacity-5 pointer-events-none"
        >
          <div className="w-full h-full border-[10vw] border-white rounded-full" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-start pb-24 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left h-full flex flex-col justify-start"
          >
            {/* Top Element to prevent cutoff and add detail */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-12">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest font-mono text-white/60">Available for projects</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-white/20" />
              <span className="hidden md:block text-[10px] uppercase tracking-widest font-mono text-white/40">Open to innovate</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="w-8 md:w-12 h-[1px] bg-brand" />
              <span className="text-brand font-mono text-[10px] md:text-sm uppercase tracking-[0.3em]">Developer & Student</span>
            </div>
            <h1 className="text-[15vw] lg:text-[10vw] leading-[0.8] uppercase mb-8">
              Yashraj <br />
              <span className="text-outline text-white/20">Jadhav</span>
            </h1>
            <p className="max-w-md mx-auto lg:mx-0 text-base md:text-lg text-white/60 font-light leading-relaxed mb-8 md:mb-12">
              Transforming complex ideas into digital experiences. Currently in Class 11th while building the future of the web.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <motion.a 
                href="#work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm flex items-center gap-2"
              >
                Projects <Layout size={18} />
              </motion.a>
            </div>

            {/* Desktop Stats */}
            <div className="hidden lg:flex gap-12 mt-16 pt-8 border-t border-white/10">
              <div>
                <span className="block text-3xl font-display text-brand">02+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Live Sites</span>
              </div>
              <div>
                <span className="block text-3xl font-display text-brand">11th</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Grade</span>
              </div>
              <div>
                <span className="block text-3xl font-display text-brand">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Commitment</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
            className="relative group max-w-sm mx-auto lg:max-w-md lg:w-full"
          >
            <div className="absolute inset-0 bg-brand/10 blur-3xl rounded-full scale-75 group-hover:scale-90 transition-transform duration-700" />
            <div className="relative z-10 w-full aspect-[4/5] rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-white/10 group-hover:border-brand/40 transition-all duration-700 shadow-2xl">
              <img 
                src="https://i.ibb.co/B5QMKYxx/founder.png" 
                alt="Yashraj Jadhav" 
                className="w-full h-full object-cover object-top transition-all duration-1000 scale-100 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floaties */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:top-10 md:-right-10 z-20 bg-dark/80 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-white/20 shadow-2xl"
            >
              <Sparkles className="text-brand w-6 h-6 md:w-8 md:h-8" />
            </motion.div>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-brand py-2 border-y border-dark">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-12"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-dark font-display uppercase tracking-widest text-sm flex items-center gap-4">
                <Code size={14} /> Design & Code <span className="text-white/40">•</span> Class 11th Student <span className="text-white/40">•</span> Web Developer
              </span>
            ))}
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 bg-white flex flex-col items-center relative overflow-hidden">
        {/* Background Decorative element for Desktop */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none hidden lg:block">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        <div className="max-w-4xl w-full relative z-10">
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="grid grid-cols-1 md:grid-cols-12 gap-12"
          >
            <div className="md:col-span-4">
              <h2 className="text-5xl uppercase mb-6 leading-none">The <br /><span className="text-brand">Story</span></h2>
              <GraduationCap className="text-brand w-12 h-12 mb-4" />
              <p className="font-mono text-sm uppercase text-dark/40">Current Academic: Class 11th</p>
            </div>
            <div className="md:col-span-8 flex flex-col gap-6 text-xl text-dark/80 font-light leading-relaxed">
              <p>
                Hey there! I'm <span className="font-bold text-dark italic underline decoration-brand underline-offset-4">Yashraj Jadhav</span>. 
                balancing the rigors of high school with my passion for creating digital experiences.
              </p>
              <p>
                My journey into the world of web development started with a simple curiosity: how are things built? 
                Now, I spend my time crafting websites that aren't just functional but visually striking. 
                Whether it's building portfolio frames or educational platforms, I'm always looking for the next challenge.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Tech Section */}
      <section className="py-24 bg-light border-y border-dark/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-3xl uppercase mb-4 flex items-center gap-2">
                <Code className="text-brand" /> Technical <span className="text-brand">Stack</span>
              </h3>
              <p className="text-dark/60 font-light max-w-sm">The tools and languages I use to bring ideas to life.</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "React", level: "90%" },
                { name: "Next.js", level: "85%" },
                { name: "Tailwind", level: "95%" },
                { name: "TypeScript", level: "80%" },
                { name: "Framer Motion", level: "88%" },
                { name: "Vite", level: "90%" },
                { name: "Firebase", level: "75%" },
                { name: "UI/UX Design", level: "85%" }
              ].map((skill) => (
                <motion.div 
                  key={skill.name}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 rounded-xl border border-dark/5 shadow-sm hover:shadow-md transition-all"
                >
                  <p className="font-display uppercase text-sm mb-2">{skill.name}</p>
                  <div className="h-1 bg-dark/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-brand"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 md:py-32 bg-dark text-white p-4 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[12vw] md:text-[8vw] leading-[0.8] uppercase flex flex-col"
            >
              Selected <span className="text-outline text-white/30">Works</span>
            </motion.h2>
            <p className="max-w-xs text-white/40 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:text-right">
              / 02 MAJOR PROJECTS <br />
              / LIVE PREVIEW AVAILABLE
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:gap-24">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-16 items-center`}
              >
                <div className="flex-1 w-full flex flex-col justify-center">
                  <span className="font-mono text-brand text-lg md:text-xl mb-4 md:mb-8 block">Project 0{index + 1}</span>
                  <h3 className="text-5xl md:text-8xl uppercase mb-6 font-display leading-[0.9]">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-base md:text-xl font-light mb-8 max-w-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-white/60 rounded-full text-[10px] uppercase font-mono tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-dark px-6 md:px-8 py-3 md:py-4 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm flex items-center gap-2"
                    >
                      Visit Site <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>

                {project.showIframe && (
                  <div className="flex-1 w-full aspect-[3/4] md:aspect-[16/14] bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                    <div className="absolute inset-0 bg-dark/40 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                    <iframe 
                      src={project.url} 
                      title={project.title}
                      className="w-full h-full border-none opacity-80 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-brand text-dark pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">
        {/* Animated Background Text */}
        <div className="absolute top-0 right-0 p-12 pointer-events-none opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Globe size={400} className="stroke-1" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start gap-24">
          <div className="flex-1">
            <h2 className="text-[12vw] md:text-[6vw] leading-none uppercase mb-12">
              Let's <br /> Build something <br /> <span className="italic underline decoration-dark underline-offset-4">Together</span>.
            </h2>
            <div className="flex flex-col gap-6">
              <a href="mailto:yashrajjadhav2010@gmail.com" className="text-lg md:text-4xl break-all md:break-normal hover:italic flex items-center gap-4 transition-all group">
                <Mail className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform shrink-0" /> yashrajjadhav2010@gmail.com
              </a>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col gap-12 items-end">
            <div className="flex gap-8">
              <motion.a whileHover={{ y: -5 }} href="#"><Github className="w-8 h-8 cursor-pointer" /></motion.a>
              <motion.a whileHover={{ y: -5 }} href="https://yashrajframes.netlify.app"><Globe className="w-8 h-8 cursor-pointer" /></motion.a>
            </div>
            
            <div className="text-right">
              <p className="font-mono uppercase text-xs tracking-widest mb-4 opacity-60">Located in • India</p>
              <p className="text-6xl font-display uppercase leading-none tabular-nums">
                {new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-48 pt-8 border-t border-dark/20 flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] uppercase tracking-widest opacity-60">
          <p>© 2026 Yashraj Jadhav. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-dark">Privacy</a>
            <a href="#" className="hover:text-dark">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
