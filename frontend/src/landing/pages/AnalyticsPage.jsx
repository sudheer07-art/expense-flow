// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   TrendingUp,
//   TrendingDown,
//   IndianRupee,
//   PieChart,
// } from "lucide-react";

// import AnimatedCard from "../components/AnimatedCard";

// const weeklyIncome = [18, 24, 20, 30, 27, 35, 32];
// const weeklyExpense = [12, 18, 15, 22, 19, 24, 21];

// const monthlyIncome = [30, 45, 40, 52, 48, 60, 56];
// const monthlyExpense = [22, 30, 28, 38, 36, 44, 41];

// function AnalyticsPage() {
//   const [mode, setMode] = useState("Weekly");

//   const income =
//     mode === "Weekly" ? weeklyIncome : monthlyIncome;

//   const expense =
//     mode === "Weekly" ? weeklyExpense : monthlyExpense;

//   return (
//     <div className="flex h-full flex-col px-6 pt-14 pb-8">

//       {/* Header */}

//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         <p className="text-white/60">
//           Financial Analytics
//         </p>

//         <h1 className="mt-2 text-4xl font-bold">
//           Overview
//         </h1>
//       </motion.div>

//       {/* Toggle */}

//       <div className="mt-8 flex rounded-2xl bg-white/5 p-1">

//         {["Weekly", "Monthly"].map((item) => (

//           <button
//             key={item}
//             onClick={() => setMode(item)}
//             className="relative flex-1 py-3"
//           >
//             {mode === item && (
//               <motion.div
//                 layoutId="analytics-tab"
//                 className="absolute inset-0 rounded-xl bg-indigo-500"
//                 transition={{
//                   type: "spring",
//                   stiffness: 300,
//                   damping: 28,
//                 }}
//               />
//             )}

//             <span className="relative z-10 font-medium">
//               {item}
//             </span>

//           </button>

//         ))}

//       </div>

//       {/* Income & Expense */}

//       <div className="mt-6 grid grid-cols-2 gap-4">

//         <AnimatedCard className="p-5">

//           <div className="flex items-center justify-between">

//             <TrendingUp className="text-emerald-400" />

//             <span className="text-xs text-emerald-400">
//               +12%
//             </span>

//           </div>

//           <p className="mt-5 text-white/60">
//             Income
//           </p>

//           <h3 className="mt-2 text-2xl font-bold">
//             ₹68K
//           </h3>

//         </AnimatedCard>

//         <AnimatedCard className="p-5">

//           <div className="flex items-center justify-between">

//             <TrendingDown className="text-red-400" />

//             <span className="text-xs text-red-400">
//               -6%
//             </span>

//           </div>

//           <p className="mt-5 text-white/60">
//             Expense
//           </p>

//           <h3 className="mt-2 text-2xl font-bold">
//             ₹42K
//           </h3>

//         </AnimatedCard>

//       </div>

//       {/* Comparison Chart */}

//       <AnimatedCard
//         delay={0.15}
//         className="mt-6 p-6"
//       >

//         <div className="flex items-center justify-between">

//           <h2 className="font-semibold">
//             Income vs Expense
//           </h2>

//           <IndianRupee
//             size={20}
//             className="text-indigo-400"
//           />

//         </div>

//         <div className="mt-8 flex h-52 items-end justify-between">

//           {income.map((value, index) => (

//             <div
//               key={index}
//               className="flex items-end gap-1"
//             >

//               <motion.div
//                 initial={{ height: 0 }}
//                 animate={{
//                   height: value * 2.2,
//                 }}
//                 transition={{
//                   duration: .5,
//                   delay: index * .05,
//                 }}
//                 className="w-4 rounded-full bg-emerald-400"
//               />

//               <motion.div
//                 initial={{ height: 0 }}
//                 animate={{
//                   height: expense[index] * 2.2,
//                 }}
//                 transition={{
//                   duration: .5,
//                   delay: index * .05 + .1,
//                 }}
//                 className="w-4 rounded-full bg-indigo-500"
//               />

//             </div>

//           ))}

//         </div>

//       </AnimatedCard>

//       {/* Spending Breakdown */}

//       <AnimatedCard
//         delay={0.25}
//         className="mt-6 p-6"
//       >

//         <div className="flex items-center justify-between">

//           <h2 className="font-semibold">
//             Spending Breakdown
//           </h2>

//           <PieChart className="text-pink-400" />

//         </div>

//         <div className="mt-8 flex items-center justify-center">

//           <div className="relative">

//             <svg
//               width="170"
//               height="170"
//               viewBox="0 0 170 170"
//             >
//               <circle
//                 cx="85"
//                 cy="85"
//                 r="65"
//                 fill="none"
//                 stroke="rgba(255,255,255,.08)"
//                 strokeWidth="14"
//               />

//               <motion.circle
//                 cx="85"
//                 cy="85"
//                 r="65"
//                 fill="none"
//                 stroke="#6366F1"
//                 strokeWidth="14"
//                 strokeLinecap="round"
//                 strokeDasharray="408"
//                 initial={{
//                   strokeDashoffset: 408,
//                 }}
//                 animate={{
//                   strokeDashoffset: 95,
//                 }}
//                 transition={{
//                   duration: 1,
//                 }}
//                 transform="rotate(-90 85 85)"
//               />
//             </svg>

//             <div className="absolute inset-0 flex flex-col items-center justify-center">

//               <h2 className="text-3xl font-bold">
//                 77%
//               </h2>

//               <p className="text-xs text-white/50">
//                 Saved
//               </p>

//             </div>

//           </div>

//         </div>

//       </AnimatedCard>

//     </div>
//   );
// }

// export default AnalyticsPage;
import { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  IndianRupee,
  PieChart,
} from "lucide-react";

import AnimatedCard from "../components/AnimatedCard";

const weeklyIncome = [18, 24, 20, 30, 27, 35, 32];
const weeklyExpense = [12, 18, 15, 22, 19, 24, 21];

const monthlyIncome = [30, 45, 40, 52, 48, 60, 56];
const monthlyExpense = [22, 30, 28, 38, 36, 44, 41];

function AnalyticsPage() {
  const [mode, setMode] = useState("Weekly");

  const income =
    mode === "Weekly" ? weeklyIncome : monthlyIncome;

  const expense =
    mode === "Weekly" ? weeklyExpense : monthlyExpense;

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto flex min-h-full max-w-[390px] flex-col px-5 pt-10 pb-36">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm text-white/50">
            Financial Analytics
          </p>

          <h1 className="mt-1 text-3xl font-bold">
            Overview
          </h1>
        </motion.div>

        {/* Toggle */}

        <div className="mt-6 flex rounded-2xl bg-white/5 p-1">
          {["Weekly", "Monthly"].map((item) => (
            <button
              key={item}
              onClick={() => setMode(item)}
              className="relative flex-1 rounded-xl py-2.5 text-sm font-medium"
            >
              {mode === item && (
                <motion.div
                  layoutId="analytics-tab"
                  className="absolute inset-0 rounded-xl bg-indigo-500"
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

        {/* Income & Expense */}

        <div className="mt-5 grid grid-cols-2 gap-3">

          <AnimatedCard className="p-4">

            <div className="flex items-center justify-between">
              <TrendingUp
                size={22}
                className="text-emerald-400"
              />

              <span className="text-xs text-emerald-400">
                +12%
              </span>
            </div>

            <p className="mt-4 text-sm text-white/60">
              Income
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              ₹68K
            </h3>

          </AnimatedCard>

          <AnimatedCard className="p-4">

            <div className="flex items-center justify-between">
              <TrendingDown
                size={22}
                className="text-red-400"
              />

              <span className="text-xs text-red-400">
                -6%
              </span>
            </div>

            <p className="mt-4 text-sm text-white/60">
              Expense
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              ₹42K
            </h3>

          </AnimatedCard>

        </div>

        {/* Comparison Chart */}

        <AnimatedCard
          delay={0.15}
          className="mt-5 p-5"
        >

          <div className="flex items-center justify-between">

            <h2 className="font-semibold">
              Income vs Expense
            </h2>

            <IndianRupee
              size={20}
              className="text-indigo-400"
            />

          </div>

          <div className="mt-6 flex h-40 items-end justify-between">

            {income.map((value, index) => (

              <div
                key={index}
                className="flex items-end gap-1"
              >

                <motion.div
                  initial={{ height: 0 }}
                  animate={{
                    height: value * 1.7,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="w-3 rounded-full bg-emerald-400"
                />

                <motion.div
                  initial={{ height: 0 }}
                  animate={{
                    height: expense[index] * 1.7,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05 + 0.1,
                  }}
                  className="w-3 rounded-full bg-indigo-500"
                />

              </div>

            ))}

          </div>

        </AnimatedCard>

        {/* Spending Breakdown */}

        <AnimatedCard
          delay={0.25}
          className="mt-5 p-5"
        >

          <div className="flex items-center justify-between">

            <h2 className="font-semibold">
              Spending Breakdown
            </h2>

            <PieChart
              size={22}
              className="text-pink-400"
            />

          </div>

          <div className="mt-6 flex justify-center">

            <div className="relative">

              <svg
                width="150"
                height="150"
                viewBox="0 0 170 170"
              >
                <circle
                  cx="85"
                  cy="85"
                  r="65"
                  fill="none"
                  stroke="rgba(255,255,255,.08)"
                  strokeWidth="14"
                />

                <motion.circle
                  cx="85"
                  cy="85"
                  r="65"
                  fill="none"
                  stroke="#6366F1"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray="408"
                  initial={{
                    strokeDashoffset: 408,
                  }}
                  animate={{
                    strokeDashoffset: 95,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  transform="rotate(-90 85 85)"
                />

              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">

                <h2 className="text-3xl font-bold">
                  77%
                </h2>

                <p className="text-xs text-white/50">
                  Saved
                </p>

              </div>

            </div>

          </div>

        </AnimatedCard>

      </div>
    </div>
  );
}

export default AnalyticsPage;