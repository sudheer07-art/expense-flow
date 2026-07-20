import { motion } from "framer-motion";
import { ChartColumn } from "lucide-react";

import InsightsPreview from "./components/InsightsPreview";
import ProgressDots from "./ProgressDots";

function InsightsSlide({ onNext }) {
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

          <ChartColumn
            size={30}
            className="text-indigo-400"
          />

        </div>

      </div>

      {/* Heading */}

      <div className="mt-12">

        <p className="text-sm uppercase tracking-[0.3em] text-indigo-400">
          Insights
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight">
          Know where
          <br />
          your money goes.
        </h1>

        <p className="mt-5 text-base leading-7 text-gray-400">
          Visualize spending patterns and discover smarter ways to save every month.
        </p>

      </div>

      {/* Card */}

      <div className="mt-10">
        <InsightsPreview />
      </div>

      {/* Bottom */}

      <div className="mt-auto">

        <ProgressDots
          current={1}
          total={3}
        />

        <button
          onClick={onNext}
          className="mt-8 w-full rounded-2xl bg-indigo-600 py-4 font-semibold transition-all hover:bg-indigo-500 active:scale-[0.98]"
        >
          Continue
        </button>

      </div>

    </motion.div>
  );
}

export default InsightsSlide;