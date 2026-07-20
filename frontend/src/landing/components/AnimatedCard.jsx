import { motion } from "framer-motion";

function AnimatedCard({
  children,
  className = "",
  delay = 0,
  onClick,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
        delay,
      }}
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      className={`
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-white/8
        bg-white/[0.05]
        backdrop-blur-2xl
        shadow-[0_10px_30px_rgba(0,0,0,0.18)]
        ${className}
      `}
    >
      {/* top shine */}

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* left glow */}

      <div className="absolute -left-12 top-0 h-24 w-24 rounded-full bg-white/5 blur-3xl" />

      {/* right glow */}

      <div className="absolute -right-10 bottom-0 h-24 w-24 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export default AnimatedCard;