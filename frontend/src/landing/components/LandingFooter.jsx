import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LandingDots from "./LandingDots";

function LandingFooter({
  currentPage,
  totalPages,
  onLogin,
  onSignup,
  onSelectPage,
}) {
  return (
    <motion.div
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 20,
      }}
      className="pointer-events-none absolute inset-x-0 bottom-4 z-50 flex justify-center px-4"
    >
      <div
        className="
          pointer-events-auto
          w-full
          max-w-[350px]
          rounded-[28px]
          border
          border-white/10
          bg-white/10
          backdrop-blur-3xl
          shadow-[0_20px_60px_rgba(0,0,0,.45)]
          p-4
        "
      >
        {/* Small Handle */}

        <div className="mb-3 flex justify-center">
          <div className="h-1 w-12 rounded-full bg-white/20" />
        </div>

        {/* Page Indicator */}

        <div className="mb-4 flex justify-center">
          <LandingDots
            current={currentPage}
            total={totalPages}
            onSelect={onSelectPage}
          />
        </div>

        {/* Buttons */}

        <div className="grid grid-cols-2 gap-3">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onLogin}
            className="
              h-12
              rounded-2xl
              border
              border-white/10
              bg-white/5
              text-sm
              font-semibold
              transition
              hover:bg-white/10
            "
          >
            Login
          </motion.button>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onSignup}
            className="
              flex
              h-12
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-gradient-to-r
              from-indigo-500
              via-violet-500
              to-pink-500
              text-sm
              font-semibold
              shadow-lg
            "
          >
            Get Started
            <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default LandingFooter;