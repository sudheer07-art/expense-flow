// import { useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Wallet,
//   Target,
//   UtensilsCrossed,
//   Car,
//   ShoppingBag,
// } from "lucide-react";

// import AnimatedCard from "../components/AnimatedCard";

// const categoryBudgets = [
//   {
//     title: "Food",
//     spent: 8200,
//     limit: 10000,
//     icon: UtensilsCrossed,
//     color: "bg-orange-500",
//   },
//   {
//     title: "Travel",
//     spent: 4200,
//     limit: 6000,
//     icon: Car,
//     color: "bg-sky-500",
//   },
//   {
//     title: "Shopping",
//     spent: 9300,
//     limit: 12000,
//     icon: ShoppingBag,
//     color: "bg-pink-500",
//   },
// ];

// function BudgetPage() {
//   const [budget, setBudget] = useState(25000);

//   const spent = 21700;

//   const remaining = budget - spent;

//   const progress = useMemo(() => {
//     return Math.min((spent / budget) * 100, 100);
//   }, [budget]);

//   return (
//     <div className="flex h-full flex-col px-6 pt-14 pb-8">
//       {/* Header */}

//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         <p className="text-white/60">Budget Planner</p>

//         <h1 className="mt-2 text-4xl font-bold">
//           Monthly Budget
//         </h1>
//       </motion.div>

//       {/* Budget Card */}

//       <AnimatedCard
//         delay={0.1}
//         className="mt-8 p-6"
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-white/60">
//               Available Budget
//             </p>

//             <motion.h2
//               key={budget}
//               initial={{
//                 scale: .9,
//                 opacity: 0,
//               }}
//               animate={{
//                 scale: 1,
//                 opacity: 1,
//               }}
//               className="mt-2 text-4xl font-bold"
//             >
//               ₹{budget.toLocaleString()}
//             </motion.h2>
//           </div>

//           <div className="rounded-2xl bg-emerald-500/20 p-4">
//             <Wallet className="text-emerald-400" />
//           </div>
//         </div>

//         {/* Slider */}

//         <div className="mt-8">
//           <input
//             type="range"
//             min={10000}
//             max={50000}
//             step={500}
//             value={budget}
//             onChange={(e) =>
//               setBudget(Number(e.target.value))
//             }
//             className="w-full accent-emerald-500"
//           />

//           <div className="mt-2 flex justify-between text-sm text-white/40">
//             <span>₹10K</span>
//             <span>₹50K</span>
//           </div>
//         </div>
//       </AnimatedCard>

//       {/* Progress */}

//       <AnimatedCard
//         delay={0.2}
//         className="mt-6 p-6"
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-white/60">
//               Remaining
//             </p>

//             <motion.h3
//               key={remaining}
//               initial={{
//                 scale: .9,
//                 opacity: 0,
//               }}
//               animate={{
//                 scale: 1,
//                 opacity: 1,
//               }}
//               className={`mt-2 text-3xl font-bold ${
//                 remaining > 0
//                   ? "text-emerald-400"
//                   : "text-red-400"
//               }`}
//             >
//               ₹{remaining.toLocaleString()}
//             </motion.h3>
//           </div>

//           <div className="rounded-2xl bg-emerald-500/20 p-4">
//             <Target className="text-emerald-400" />
//           </div>
//         </div>

//         {/* Progress Bar */}

//         <div className="mt-8 h-4 overflow-hidden rounded-full bg-white/10">
//           <motion.div
//             initial={{
//               width: 0,
//             }}
//             animate={{
//               width: `${progress}%`,
//             }}
//             transition={{
//               duration: .8,
//             }}
//             className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-green-500"
//           />
//         </div>

//         <div className="mt-3 flex justify-between text-sm text-white/50">
//           <span>Spent ₹{spent.toLocaleString()}</span>
//           <span>{progress.toFixed(0)}%</span>
//         </div>
//       </AnimatedCard>

//       {/* Categories */}

//       <div className="mt-6 flex-1 space-y-4 overflow-y-auto">
//         {categoryBudgets.map((item, index) => {
//           const Icon = item.icon;

//           const percent =
//             (item.spent / item.limit) * 100;

//           return (
//             <AnimatedCard
//               key={item.title}
//               delay={0.3 + index * 0.1}
//               className="p-5"
//             >
//               <div className="flex items-center">
//                 <div
//                   className={`${item.color} rounded-xl p-3`}
//                 >
//                   <Icon size={22} />
//                 </div>

//                 <div className="ml-4 flex-1">
//                   <div className="flex items-center justify-between">
//                     <h3 className="font-semibold">
//                       {item.title}
//                     </h3>

//                     <span className="text-sm text-white/50">
//                       ₹{item.spent.toLocaleString()} /
//                       ₹{item.limit.toLocaleString()}
//                     </span>
//                   </div>

//                   <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
//                     <motion.div
//                       initial={{
//                         width: 0,
//                       }}
//                       animate={{
//                         width: `${percent}%`,
//                       }}
//                       transition={{
//                         duration: .7,
//                         delay: index * .1,
//                       }}
//                       className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </AnimatedCard>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default BudgetPage;
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  Target,
  UtensilsCrossed,
  Car,
  ShoppingBag,
} from "lucide-react";

import AnimatedCard from "../components/AnimatedCard";

const categoryBudgets = [
  {
    title: "Food",
    spent: 8200,
    limit: 10000,
    icon: UtensilsCrossed,
    color: "bg-orange-500",
  },
  {
    title: "Travel",
    spent: 4200,
    limit: 6000,
    icon: Car,
    color: "bg-sky-500",
  },
  {
    title: "Shopping",
    spent: 9300,
    limit: 12000,
    icon: ShoppingBag,
    color: "bg-pink-500",
  },
];

function BudgetPage() {
  const [budget, setBudget] = useState(25000);

  const spent = 21700;
  const remaining = budget - spent;

  const progress = useMemo(() => {
    return Math.min((spent / budget) * 100, 100);
  }, [budget]);

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto flex min-h-full max-w-[390px] flex-col px-5 pt-10 pb-36">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm text-white/50">
            Budget Planner
          </p>

          <h1 className="mt-1 text-3xl font-bold">
            Monthly Budget
          </h1>
        </motion.div>

        {/* Budget Card */}

        <AnimatedCard
          delay={0.1}
          className="mt-6 p-5"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/60">
                Available Budget
              </p>

              <motion.h2
                key={budget}
                initial={{
                  scale: 0.95,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                className="mt-2 text-3xl font-bold"
              >
                ₹{budget.toLocaleString()}
              </motion.h2>
            </div>

            <div className="rounded-2xl bg-emerald-500/20 p-3">
              <Wallet
                size={24}
                className="text-emerald-400"
              />
            </div>
          </div>

          {/* Slider */}

          <div className="mt-6">
            <input
              type="range"
              min={10000}
              max={50000}
              step={500}
              value={budget}
              onChange={(e) =>
                setBudget(Number(e.target.value))
              }
              className="w-full accent-emerald-500"
            />

            <div className="mt-2 flex justify-between text-xs text-white/40">
              <span>₹10K</span>
              <span>₹50K</span>
            </div>
          </div>
        </AnimatedCard>

        {/* Progress */}

        <AnimatedCard
          delay={0.2}
          className="mt-5 p-5"
        >
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-white/60">
                Remaining
              </p>

              <motion.h3
                key={remaining}
                initial={{
                  scale: 0.95,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                className={`mt-2 text-2xl font-bold ${
                  remaining > 0
                    ? "text-emerald-400"
                    : "text-red-400"
                }`}
              >
                ₹{remaining.toLocaleString()}
              </motion.h3>
            </div>

            <div className="rounded-2xl bg-emerald-500/20 p-3">
              <Target
                size={22}
                className="text-emerald-400"
              />
            </div>

          </div>

          {/* Progress Bar */}

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 0.8,
              }}
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-green-500"
            />
          </div>

          <div className="mt-3 flex justify-between text-xs text-white/50">
            <span>
              Spent ₹{spent.toLocaleString()}
            </span>

            <span>
              {progress.toFixed(0)}%
            </span>
          </div>
        </AnimatedCard>

        {/* Categories */}

        <div className="mt-5 space-y-3">
          {categoryBudgets.map((item, index) => {
            const Icon = item.icon;

            const percent =
              (item.spent / item.limit) * 100;

            return (
              <AnimatedCard
                key={item.title}
                delay={0.3 + index * 0.08}
                className="p-4"
              >
                <div className="flex items-center">

                  <div
                    className={`${item.color} rounded-xl p-3`}
                  >
                    <Icon size={20} />
                  </div>

                  <div className="ml-4 flex-1">

                    <div className="flex items-center justify-between">

                      <h3 className="font-semibold">
                        {item.title}
                      </h3>

                      <span className="text-xs text-white/50">
                        ₹{item.spent.toLocaleString()} / ₹
                        {item.limit.toLocaleString()}
                      </span>

                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: `${percent}%`,
                        }}
                        transition={{
                          duration: 0.7,
                          delay: index * 0.08,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"
                      />
                    </div>

                  </div>

                </div>
              </AnimatedCard>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default BudgetPage;