import { motion } from "framer-motion";
import { WalletMinimal } from "lucide-react";

import BalancePreview from "./components/BalancePreview";
import ProgressDots from "./ProgressDots";

function WelcomeSlide({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45 }}
      className="flex min-h-screen flex-col bg-[#0F1117] px-6 py-10 text-white"
    >
      {/* Logo */}

      <div className="flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-[#171B23]">
          <WalletMinimal
            size={30}
            className="text-indigo-400"
          />
        </div>
      </div>

      {/* Heading */}

      <div className="mt-12">

        <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-400">
          ExpenseFlow
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight">
          Control
          <br />
          your money.
        </h1>

        <p className="mt-5 text-base leading-7 text-gray-400">
          Track expenses, understand your spending, and build better financial
          habits with one simple app.
        </p>

      </div>

      {/* Card */}

      <div className="mt-10">
        <BalancePreview />
      </div>

      {/* Bottom */}

      <div className="mt-auto">

        <ProgressDots
          current={0}
          total={3}
        />

        <button
          onClick={onNext}
          className="
            mt-8
            flex
            w-full
            items-center
            justify-center
            rounded-2xl
            bg-indigo-600
            py-4
            text-base
            font-semibold
            transition-all
            duration-300
            hover:bg-indigo-500
            active:scale-[0.98]
          "
        >
          Continue
        </button>

        <p className="mt-5 text-center text-sm text-gray-500">
          Swipe to explore →
        </p>

      </div>

    </motion.div>
  );
}

export default WelcomeSlide;