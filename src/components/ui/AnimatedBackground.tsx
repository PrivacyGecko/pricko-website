import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      {/* Dramatic Wave Layer 1 - Green */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(74, 222, 128, 0.15), transparent)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Dramatic Wave Layer 2 - Cyan */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(6, 182, 212, 0.12), transparent)',
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Particles - Large */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Center Glow - Golden Touch */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.08), transparent)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Particle Field - Small Dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-accent/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};
