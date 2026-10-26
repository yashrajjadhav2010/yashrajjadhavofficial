import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, BookOpen, FileText, Sparkles, CheckCircle2, Video, ChevronRight, ShieldCheck, Download, Layers, ArrowUpRight } from 'lucide-react';

export default function BoardTapasyaPreview() {
  const [activeTab, setActiveTab] = useState<'lecture' | 'notes' | 'pyq'>('lecture');
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      subject: "Physics",
      grade: "Class 12",
      topic: "Wave Optics & Interference",
      concept: "Huygens Principle & Young's Double Slit 3D Wavefronts",
      duration: "14:20",
      accent: "from-amber-500/20 to-orange-500/5",
      points: ["Wavefront Geometry in 3D Space", "Fringe Width Derivation (Direct 5 Marks)", "Path Difference & Coherent Sources"]
    },
    {
      subject: "Chemistry",
      grade: "Class 12",
      topic: "Electrochemistry & Redox Cells",
      concept: "Galvanic Potential & Nernst Equation Derivations",
      duration: "18:05",
      accent: "from-emerald-500/20 to-teal-500/5",
      points: ["Electron Flow & Salt Bridge Mechanism", "Gibbs Free Energy vs EMF", "Conductivity & Kohlrausch's Law"]
    },
    {
      subject: "Mathematics",
      grade: "Class 10 & 12",
      topic: "Calculus & Differential Equations",
      concept: "Tangent Slopes, Area Under Curves & Linear Integrals",
      duration: "16:40",
      accent: "from-blue-500/20 to-indigo-500/5",
      points: ["Limit Derivatives geometrically mapped", "Definite Integration by Substitution", "Differential Equation General Solution"]
    }
  ];

  const notesList = [
    {
      title: "Class 12 Physics: Complete Formula Roadmap",
      pages: "14 Pages · High-Yield",
      category: "Formulas & Derivations",
      desc: "All board exam derivations compiled with exact step-marking notes and circuit diagrams."
    },
    {
      title: "Class 10 & 12 Chemistry: Organic Reaction Master Flowchart",
      pages: "18 Pages · Visual Mind Map",
      category: "Named Reactions & Conversions",
      desc: "Reagents roadmap, IUPAC nomenclature rules, and conversion shortcuts for board toppers."
    },
    {
      title: "Class 12 Mathematics: PYQ Marking Scheme Blueprint",
      pages: "22 Pages · Solved Exemplar",
      category: "CBSE & State Boards",
      desc: "Step-by-step verified solutions showing how evaluators award partial marks on derivations."
    }
  ];

  return (
    <div className="w-full bg-[#0a0a0f] rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col justify-between p-4 md:p-6 text-white relative">
      {/* Top Studio Hardware Bar */}
      <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-amber-400/90 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
          <div className="flex flex-col">
            <span className="text-xs font-semibold tracking-tight text-white flex items-center gap-1.5">
              Board Tapasya
              <span className="text-[10px] font-mono text-zinc-400 font-normal">by Yashraj Jadhav</span>
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">
              Animated Lectures & Smart Notes
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://boardtapasya.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-[11px] font-mono text-zinc-300 hover:text-white transition-colors border border-white/[0.08]"
            title="Open boardtapasya.netlify.app in new window"
          >
            <span>boardtapasya.netlify.app</span>
            <ArrowUpRight size={12} className="text-amber-400" />
          </a>

          {/* Apple-style Segmented Control */}
          <div className="flex items-center bg-zinc-900/90 p-1 rounded-xl border border-white/[0.06] text-[11px] font-medium">
            <button
              onClick={() => setActiveTab('lecture')}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'lecture' 
                  ? 'bg-white text-black shadow-sm font-semibold' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
            <Video size={12} />
            <span>Lectures</span>
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'notes' 
                ? 'bg-white text-black shadow-sm font-semibold' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <BookOpen size={12} />
            <span>Notes</span>
          </button>
          <button
            onClick={() => setActiveTab('pyq')}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'pyq' 
                ? 'bg-white text-black shadow-sm font-semibold' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <FileText size={12} />
            <span>PYQs</span>
          </button>
        </div>
      </div>
    </div>

      {/* Main Content Pane */}
      <div className="flex-1 py-4 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {activeTab === 'lecture' && (
            <motion.div
              key="lecture"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col justify-between gap-3"
            >
              {/* Studio Display Screen */}
              <div className={`relative w-full aspect-[16/9] rounded-2xl bg-gradient-to-br ${chapters[activeChapter].accent} to-[#060609] border border-white/[0.08] p-4 md:p-5 flex flex-col justify-between overflow-hidden shadow-2xl`}>
                {/* Background Ambient Wave Graphics */}
                <div className="absolute inset-0 pointer-events-none opacity-25">
                  <div className="absolute -top-12 -left-12 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl" />
                  <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl" />
                  <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M 10 100 Q 100 20, 200 100 T 390 100" 
                      stroke="rgba(255,255,255,0.18)" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4"
                    />
                    <circle cx="200" cy="100" r="40" stroke="rgba(245,158,11,0.4)" strokeWidth="1" />
                    <circle cx="200" cy="100" r="70" stroke="rgba(245,158,11,0.2)" strokeWidth="1" strokeDasharray="6 6" />
                  </svg>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/[0.08] border border-white/[0.1] text-amber-300 font-medium">
                      {chapters[activeChapter].grade} · {chapters[activeChapter].subject}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">
                      3D High-Retention Animation
                    </span>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">
                    {chapters[activeChapter].duration}
                  </span>
                </div>

                <div className="relative z-10 text-center my-auto py-2">
                  <h4 className="text-lg md:text-2xl font-bold tracking-tight text-white mb-1">
                    {chapters[activeChapter].topic}
                  </h4>
                  <p className="text-xs text-zinc-300 font-normal max-w-sm mx-auto line-clamp-1">
                    {chapters[activeChapter].concept}
                  </p>
                  <div className="flex items-center justify-center gap-3 mt-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.25)]"
                      title={isPlaying ? "Pause Lecture" : "Play Lecture"}
                    >
                      {isPlaying ? <Pause size={18} /> : <Play size={18} className="translate-x-0.5" />}
                    </button>
                  </div>
                </div>

                {/* Progress Bar & Meta */}
                <div className="relative z-10 space-y-1.5">
                  <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <Sparkles size={11} className="text-amber-400" />
                      Visual Concept Breakdown by Yashraj Jadhav
                    </span>
                    <span>1080p · 60 FPS</span>
                  </div>
                  <div className="w-full h-1 bg-white/[0.1] rounded-full overflow-hidden">
                    <motion.div
                      animate={isPlaying ? { width: ["15%", "88%"] } : {}}
                      transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-200 rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Chapter Selector (Clean Apple Pills) */}
              <div className="grid grid-cols-3 gap-2">
                {chapters.map((ch, idx) => (
                  <button
                    key={ch.subject}
                    onClick={() => setActiveChapter(idx)}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      activeChapter === idx
                        ? 'bg-white/[0.08] border-amber-400/40 text-white'
                        : 'bg-white/[0.02] border-white/[0.05] text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span className="block font-mono text-[9px] uppercase tracking-wider text-amber-300">
                      {ch.subject}
                    </span>
                    <span className="text-xs font-medium block truncate mt-0.5">
                      {ch.topic}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'notes' && (
            <motion.div
              key="notes"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-2.5"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  Class 10th & 12th Master Study Materials
                </span>
                <span className="text-[11px] font-mono text-amber-400">Free Open Access</span>
              </div>
              {notesList.map((note) => (
                <div
                  key={note.title}
                  className="p-3.5 rounded-xl bg-white/[0.025] border border-white/[0.06] hover:border-amber-400/40 transition-all flex items-center justify-between gap-3 group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 font-medium">
                        {note.category}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500">{note.pages}</span>
                    </div>
                    <h5 className="text-xs md:text-sm font-semibold text-white group-hover:text-amber-200 transition-colors">
                      {note.title}
                    </h5>
                    <p className="text-[11px] text-zinc-400 font-light line-clamp-1">
                      {note.desc}
                    </p>
                  </div>
                  <ChevronRight size={16} className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'pyq' && (
            <motion.div
              key="pyq"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-white/[0.025] border border-white/[0.06] flex flex-col justify-center gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white">Board Exam Master Marking Scheme</h5>
                  <p className="text-xs text-zinc-400 font-mono">10 Years Solved Papers · CBSE & State Boards</p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>Exact step-by-step marking rubrics showing where marks are awarded</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>Interactive animations of difficult derivations to eliminate rote learning</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>Common examiner traps and mistakes to avoid for 95%+ marks</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs">
                <span className="font-mono text-zinc-400">Target Score: 95%+</span>
                <span className="font-mono text-amber-400 font-medium">Curated for 2026 Boards</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Status Bar */}
      <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
        <span>Engineered by Yashraj Madhav Jadhav</span>
        <span className="text-zinc-300">Class 10th & 12th EdTech</span>
      </div>
    </div>
  );
}
