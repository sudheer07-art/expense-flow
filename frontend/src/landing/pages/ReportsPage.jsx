// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Trophy,
//   Sparkles,
//   Wallet,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// import AnimatedCard from "../components/AnimatedCard";

// const reports = [
//   {
//     title: "Top Category",
//     emoji: "🍔",
//     value: "Food",
//     subtitle: "₹12,480 spent",
//     gradient: "from-orange-500 to-pink-500",
//   },
//   {
//     title: "Best Saving Day",
//     emoji: "🎉",
//     value: "Tuesday",
//     subtitle: "Only ₹320 spent",
//     gradient: "from-emerald-500 to-teal-500",
//   },
//   {
//     title: "Monthly Savings",
//     emoji: "💰",
//     value: "₹18,750",
//     subtitle: "22% higher than last month",
//     gradient: "from-indigo-500 to-violet-500",
//   },
// ];

// function ReportsPage() {
//   const [page, setPage] = useState(0);

//   const next = () => {
//     setPage((prev) =>
//       prev === reports.length - 1 ? 0 : prev + 1
//     );
//   };

//   const previous = () => {
//     setPage((prev) =>
//       prev === 0 ? reports.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className="flex h-full flex-col px-6 pt-14 pb-8">

//       {/* Header */}

//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         <p className="text-white/60">
//           Monthly Report
//         </p>

//         <h1 className="mt-2 text-4xl font-bold">
//           Your Highlights
//         </h1>
//       </motion.div>

//       {/* Financial Score */}

//       <AnimatedCard
//         delay={0.1}
//         className="mt-8 p-6"
//       >
//         <div className="flex items-center justify-between">

//           <div>

//             <p className="text-white/60">
//               Financial Health
//             </p>

//             <motion.h2
//               initial={{
//                 scale: .8,
//                 opacity: 0,
//               }}
//               animate={{
//                 scale: 1,
//                 opacity: 1,
//               }}
//               className="mt-2 text-5xl font-bold"
//             >
//               92
//               <span className="text-2xl text-white/50">
//                 /100
//               </span>
//             </motion.h2>

//           </div>

//           <div className="rounded-2xl bg-pink-500/20 p-4">
//             <Trophy className="text-pink-400" />
//           </div>

//         </div>

//         <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/10">

//           <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: "92%" }}
//             transition={{
//               duration: 1,
//             }}
//             className="h-full rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500"
//           />

//         </div>

//       </AnimatedCard>

//       {/* Swipeable Card */}

//       <div className="mt-8">

//         <AnimatePresence mode="wait">

//           <motion.div
//             key={page}
//             initial={{
//               opacity: 0,
//               x: 120,
//             }}
//             animate={{
//               opacity: 1,
//               x: 0,
//             }}
//             exit={{
//               opacity: 0,
//               x: -120,
//             }}
//             transition={{
//               duration: .35,
//             }}
//           >

//             <AnimatedCard className="overflow-hidden p-0">

//               <div
//                 className={`bg-gradient-to-br ${reports[page].gradient} p-8`}
//               >

//                 <div className="text-6xl">
//                   {reports[page].emoji}
//                 </div>

//                 <h2 className="mt-6 text-3xl font-bold">
//                   {reports[page].value}
//                 </h2>

//                 <p className="mt-2 text-white/80">
//                   {reports[page].title}
//                 </p>

//                 <p className="mt-6 text-white/90">
//                   {reports[page].subtitle}
//                 </p>

//               </div>

//             </AnimatedCard>

//           </motion.div>

//         </AnimatePresence>

//       </div>

//       {/* Navigation */}

//       <div className="mt-6 flex items-center justify-center gap-6">

//         <motion.button
//           whileTap={{
//             scale: .92,
//           }}
//           onClick={previous}
//           className="rounded-full bg-white/10 p-4"
//         >
//           <ChevronLeft />
//         </motion.button>

//         <div className="flex gap-2">

//           {reports.map((_, index) => (

//             <motion.div
//               key={index}
//               animate={{
//                 width: page === index ? 30 : 8,
//               }}
//               className={`h-2 rounded-full ${
//                 page === index
//                   ? "bg-pink-500"
//                   : "bg-white/20"
//               }`}
//             />

//           ))}

//         </div>

//         <motion.button
//           whileTap={{
//             scale: .92,
//           }}
//           onClick={next}
//           className="rounded-full bg-white/10 p-4"
//         >
//           <ChevronRight />
//         </motion.button>

//       </div>

//       {/* Achievement */}

//       <AnimatedCard
//         delay={0.3}
//         className="mt-8 p-5"
//       >

//         <div className="flex items-center">

//           <div className="rounded-xl bg-yellow-500/20 p-3">

//             <Sparkles className="text-yellow-400" />

//           </div>

//           <div className="ml-4">

//             <h3 className="font-semibold">
//               Achievement Unlocked
//             </h3>

//             <p className="mt-1 text-sm text-white/50">
//               Stayed within your budget for 4 weeks.
//             </p>

//           </div>

//         </div>

//       </AnimatedCard>

//       {/* Savings */}

//       <AnimatedCard
//         delay={0.4}
//         className="mt-5 p-5"
//       >

//         <div className="flex items-center justify-between">

//           <div>

//             <p className="text-white/60">
//               Total Savings
//             </p>

//             <h2 className="mt-2 text-3xl font-bold">
//               ₹18,750
//             </h2>

//           </div>

//           <div className="rounded-2xl bg-emerald-500/20 p-4">

//             <Wallet className="text-emerald-400" />

//           </div>

//         </div>

//       </AnimatedCard>

//     </div>
//   );
// }

// export default ReportsPage;
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Sparkles,
  Wallet,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import AnimatedCard from "../components/AnimatedCard";

const reports = [
  {
    title: "Top Category",
    emoji: "🍔",
    value: "Food",
    subtitle: "₹12,480 spent",
    gradient: "from-orange-500 to-pink-500",
  },
  {
    title: "Best Saving Day",
    emoji: "🎉",
    value: "Tuesday",
    subtitle: "Only ₹320 spent",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Monthly Savings",
    emoji: "💰",
    value: "₹18,750",
    subtitle: "22% higher than last month",
    gradient: "from-indigo-500 to-violet-500",
  },
];

function ReportsPage() {
  const [page, setPage] = useState(0);

  const next = () => {
    setPage((prev) =>
      prev === reports.length - 1 ? 0 : prev + 1
    );
  };

  const previous = () => {
    setPage((prev) =>
      prev === 0 ? reports.length - 1 : prev - 1
    );
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto flex min-h-full max-w-[390px] flex-col px-5 pt-10 pb-36">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm text-white/50">
            Monthly Report
          </p>

          <h1 className="mt-1 text-3xl font-bold">
            Your Highlights
          </h1>
        </motion.div>

        {/* Financial Score */}

        <AnimatedCard
          delay={0.1}
          className="mt-6 p-5"
        >
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-white/60">
                Financial Health
              </p>

              <motion.h2
                initial={{
                  scale: 0.95,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                className="mt-2 text-4xl font-bold"
              >
                92
                <span className="text-xl text-white/40">
                  /100
                </span>
              </motion.h2>
            </div>

            <div className="rounded-2xl bg-pink-500/20 p-3">
              <Trophy
                size={24}
                className="text-pink-400"
              />
            </div>

          </div>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "92%" }}
              transition={{
                duration: 1,
              }}
              className="h-full rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500"
            />
          </div>

        </AnimatedCard>

        {/* Report Carousel */}

        <div className="mt-5">

          <AnimatePresence mode="wait">

            <motion.div
              key={page}
              initial={{
                opacity: 0,
                x: 80,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -80,
              }}
              transition={{
                duration: 0.3,
              }}
            >

              <AnimatedCard className="overflow-hidden p-0">

                <div
                  className={`bg-gradient-to-br ${reports[page].gradient} p-6`}
                >

                  <div className="text-5xl">
                    {reports[page].emoji}
                  </div>

                  <h2 className="mt-4 text-3xl font-bold">
                    {reports[page].value}
                  </h2>

                  <p className="mt-1 text-sm text-white/80">
                    {reports[page].title}
                  </p>

                  <p className="mt-4 text-sm text-white/90">
                    {reports[page].subtitle}
                  </p>

                </div>

              </AnimatedCard>

            </motion.div>

          </AnimatePresence>

        </div>

        {/* Navigation */}

        <div className="mt-5 flex items-center justify-center gap-5">

          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={previous}
            className="rounded-full bg-white/10 p-3"
          >
            <ChevronLeft size={20} />
          </motion.button>

          <div className="flex gap-2">

            {reports.map((_, index) => (

              <motion.div
                key={index}
                animate={{
                  width: page === index ? 24 : 8,
                }}
                transition={{
                  duration: 0.25,
                }}
                className={`h-2 rounded-full ${
                  page === index
                    ? "bg-pink-500"
                    : "bg-white/20"
                }`}
              />

            ))}

          </div>

          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={next}
            className="rounded-full bg-white/10 p-3"
          >
            <ChevronRight size={20} />
          </motion.button>

        </div>

        {/* Achievement */}

        <AnimatedCard
          delay={0.3}
          className="mt-5 p-4"
        >

          <div className="flex items-start">

            <div className="rounded-xl bg-yellow-500/20 p-3">
              <Sparkles
                size={20}
                className="text-yellow-400"
              />
            </div>

            <div className="ml-4 flex-1">

              <h3 className="font-semibold">
                Achievement Unlocked
              </h3>

              <p className="mt-1 text-sm leading-6 text-white/55">
                Stayed within your budget for
                four consecutive weeks.
              </p>

            </div>

          </div>

        </AnimatedCard>

        {/* Savings */}

        <AnimatedCard
          delay={0.4}
          className="mt-5 p-5"
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-white/60">
                Total Savings
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                ₹18,750
              </h2>

            </div>

            <div className="rounded-2xl bg-emerald-500/20 p-3">
              <Wallet
                size={24}
                className="text-emerald-400"
              />
            </div>

          </div>

        </AnimatedCard>

      </div>
    </div>
  );
}

export default ReportsPage;