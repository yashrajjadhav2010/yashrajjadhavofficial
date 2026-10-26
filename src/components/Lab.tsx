import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gamepad2, Timer, RotateCcw, Zap, Sparkles } from 'lucide-react';

// --- Apple-style Minimalist Tic Tac Toe ---
const TicTacToe = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  
  const checkWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = checkWinner(board);
  const isDraw = !winner && board.every(Boolean);

  const handleClick = (i: number) => {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 flex items-center justify-between w-full max-w-xs px-2">
        <span className="text-xs font-mono tracking-wider uppercase text-zinc-400">
          {winner ? `Winner: Player ${winner}` : isDraw ? 'Match Drawn' : `Next Turn: Player ${isXNext ? 'X' : 'O'}`}
        </span>
        <button 
          onClick={reset} 
          className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors flex items-center gap-1.5 text-xs font-mono"
          title="Reset Game"
        >
          <RotateCcw size={14} />
          <span>Reset</span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2.5 bg-black/40 p-3 rounded-2xl w-full max-w-xs aspect-square border border-white/[0.08] shadow-2xl backdrop-blur-xl">
        {board.map((cell, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: cell ? 1 : 0.97 }}
            whileTap={{ scale: cell ? 1 : 0.94 }}
            onClick={() => handleClick(i)}
            className="bg-white/[0.03] hover:bg-white/[0.06] rounded-xl flex items-center justify-center text-3xl font-bold font-sans transition-colors border border-white/[0.04]"
          >
            <AnimatePresence>
              {cell && (
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={cell === 'X' ? 'text-amber-400' : 'text-zinc-200'}
                >
                  {cell}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

// --- Apple-style Precision Reaction Test ---
const ReactionTest = () => {
  type State = 'waiting' | 'ready' | 'clicked' | 'too-early';
  const [gameState, setGameState] = useState<State>('waiting');
  const [startTime, setStartTime] = useState(0);
  const [reactionTime, setReactionTime] = useState<number | null>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (gameState === 'ready') {
      const delay = Math.random() * 2000 + 1500;
      timeout = setTimeout(() => {
        setGameState('clicked');
        setStartTime(Date.now());
      }, delay);
    }
    return () => clearTimeout(timeout);
  }, [gameState]);

  const handleClick = () => {
    if (gameState === 'waiting') {
      setGameState('ready');
      setReactionTime(null);
    } else if (gameState === 'ready') {
      setGameState('too-early');
    } else if (gameState === 'clicked') {
      setReactionTime(Date.now() - startTime);
      setGameState('waiting');
    } else if (gameState === 'too-early') {
      setGameState('waiting');
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto">
      <div className="mb-6 text-center h-8 flex items-center justify-center">
        {reactionTime && gameState === 'waiting' && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2">
            <span className="text-2xl font-bold font-mono text-amber-400 tracking-tight">
              {reactionTime} ms
            </span>
            <span className="text-xs font-mono text-zinc-400">
              {reactionTime < 220 ? '⚡ Ultra Reflex' : reactionTime < 300 ? '✓ Excellent' : 'Solid'}
            </span>
          </motion.div>
        )}
      </div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={handleClick}
        className={`w-full aspect-[4/3] rounded-3xl cursor-pointer flex flex-col items-center justify-center p-8 border transition-all duration-300 shadow-2xl ${
          gameState === 'waiting' 
            ? 'bg-white/[0.03] border-white/[0.08] text-white hover:bg-white/[0.05]' :
          gameState === 'ready' 
            ? 'bg-rose-500/10 border-rose-500/30 text-rose-300' :
          gameState === 'clicked' 
            ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' :
            'bg-amber-500/10 border-amber-500/30 text-amber-300'
        }`}
      >
        <Zap size={36} className="mb-4 opacity-70" />
        <p className="font-semibold text-base tracking-tight text-center">
          {gameState === 'waiting' ? 'Tap to start test' :
           gameState === 'ready' ? 'Wait for green signal...' :
           gameState === 'clicked' ? 'Click Now!' :
           'Too early! Tap to retry'}
        </p>
        <p className="text-xs text-zinc-400 font-mono mt-1">
          {gameState === 'waiting' ? 'Tests cognitive response time in milliseconds' : 'Hold attention'}
        </p>
      </motion.div>
    </div>
  );
};

export default function Lab() {
  const [activeTab, setActiveTab] = useState<'tic' | 'reaction'>('tic');

  return (
    <section id="lab" className="py-28 md:py-36 bg-[#050507] text-white border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
                Interactive Experiments · Lab
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              The Interactive Playground.
            </h2>
          </div>
          <p className="text-xs md:text-sm text-zinc-400 max-w-sm font-light">
            Micro-applications and responsive experiments developed to explore physics, timing, and lightweight state management.
          </p>
        </div>

        <div className="bg-zinc-950/60 rounded-3xl border border-white/[0.08] p-6 md:p-12 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
          {/* Segmented control */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              <button
                onClick={() => setActiveTab('tic')}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium text-xs tracking-tight transition-all ${
                  activeTab === 'tic' 
                    ? 'bg-white text-black shadow-sm font-semibold' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Gamepad2 size={15} /> Tic Tac Toe
              </button>
              <button
                onClick={() => setActiveTab('reaction')}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium text-xs tracking-tight transition-all ${
                  activeTab === 'reaction' 
                    ? 'bg-white text-black shadow-sm font-semibold' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Timer size={15} /> Reaction Reflex
              </button>
            </div>
          </div>

          <div className="min-h-[340px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {activeTab === 'tic' ? (
                <motion.div
                  key="tic"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full"
                >
                  <TicTacToe />
                </motion.div>
              ) : (
                <motion.div
                  key="reaction"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full"
                >
                  <ReactionTest />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
