import { motion } from "framer-motion";
import { PiggyBank } from "lucide-react";

import BudgetPreview from "./components/BudgetPreview";
import ProgressDots from "./ProgressDots";

function BudgetSlide({ onSignup, onLogin }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45 }}
      className="flex min-h-screen flex-col bg-[#0F1117] px-6 py-10 text-white"
    >
      {/* Icon */}

      <div className="flex justify-center">

        <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-[#171B23]">

          <PiggyBank
            size={30}
            className="text-indigo-400"
          />

        </div>

      </div>

      {/* Heading */}

      <div className="mt-12">

        <p className="text-sm uppercase tracking-[0.3em] text-indigo-400">
          Budget
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight">
          Stay within
          <br />
          your budget.
        </h1>

        <p className="mt-5 text-base leading-7 text-gray-400">
          Plan smarter, spend wisely, and achieve your financial goals with confidence.
        </p>

      </div>

      {/* Card */}

      <div className="mt-10">
        <BudgetPreview />
      </div>

      {/* Bottom */}

      <div className="mt-auto">

        <ProgressDots
          current={2}
          total={3}
        />

        <button
          onClick={onSignup}
          className="mt-8 w-full rounded-2xl bg-indigo-600 py-4 text-base font-semibold transition-all hover:bg-indigo-500 active:scale-[0.98]"
        >
          Get Started
        </button>

        <button
          onClick={onLogin}
          className="mt-4 w-full rounded-2xl border border-white/10 bg-white/5 py-4 text-base font-medium transition hover:bg-white/10"
        >
          I already have an account
        </button>

      </div>

    </motion.div>
  );
}

export default BudgetSlide;