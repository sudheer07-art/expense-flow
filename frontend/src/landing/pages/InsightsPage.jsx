import { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

import AnimatedCard from "../components/AnimatedCard";

const weekData = [35, 55, 40, 70, 45, 85, 60];
const monthData = [60, 80, 45, 70, 90, 50, 75];
const yearData = [30, 45, 80, 55, 90, 70, 100];

export default function InsightsPage() {
  const [tab, setTab] = useState("Week");

  const data =
    tab === "Week"
      ? weekData
      : tab === "Month"
      ? monthData
      : yearData;

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto flex min-h-full max-w-[390px] flex-col px-5 pt-10 pb-36">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm text-white/50">
            Smart Insights
          </p>

          <h1 className="mt-1 text-3xl font-bold">
            Analytics
          </h1>
        </motion.div>

        {/* Tabs */}

        <div className="mt-6 flex rounded-2xl bg-white/5 p-1">
          {["Week", "Month", "Year"].map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className="relative flex-1 rounded-xl py-2.5 text-sm font-medium transition"
            >
              {tab === item && (
                <motion.div
                  layoutId="tab"
                  className="absolute inset-0 rounded-xl bg-violet-500"
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 28,
                  }}
                />
              )}

              <span className="relative z-10">
                {item}
              </span>
            </button>
          ))}
        </div>

        {/* Spending */}

        <AnimatedCard
          delay={0.1}
          className="mt-6 p-5"
        >
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-white/60">
                Spending
              </p>

              <motion.h2
                key={tab}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="mt-2 text-3xl font-bold"
              >
                ₹24,350
              </motion.h2>
            </div>

            <div className="rounded-2xl bg-violet-500/20 p-3">
              <TrendingUp
                size={24}
                className="text-violet-400"
              />
            </div>

          </div>
        </AnimatedCard>

        {/* Chart */}

        <AnimatedCard
          delay={0.2}
          className="mt-5 p-5"
        >
          <div className="flex h-40 items-end justify-between">
            {data.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <motion.div
                  initial={{ height: 0 }}
                  animate={{
                    height: value * 1.1,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                  }}
                  className="w-5 rounded-full bg-gradient-to-t from-violet-500 to-pink-400"
                />

                <span className="mt-2 text-[11px] text-white/45">
                  {["M", "T", "W", "T", "F", "S", "S"][index]}
                </span>
              </div>
            ))}
          </div>
        </AnimatedCard>

        {/* Insight */}

        <AnimatedCard
          delay={0.3}
          className="mt-5 p-4"
        >
          <div className="flex items-start">

            <div className="rounded-xl bg-emerald-500/20 p-3">
              <ArrowUpRight
                size={20}
                className="text-emerald-400"
              />
            </div>

            <div className="ml-4 flex-1">
              <h3 className="text-base font-semibold">
                You're saving more this month
              </h3>

              <p className="mt-1 text-sm leading-6 text-white/55">
                Spending is down by <span className="font-medium text-emerald-400">18%</span> compared to last month. Keep maintaining your current spending habits.
              </p>
            </div>

          </div>
        </AnimatedCard>

      </div>
    </div>
  );
}