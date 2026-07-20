// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Bell,
//   CheckCircle2,
//   Calendar,
//   Zap,
//   CreditCard,
//   ChevronRight,
// } from "lucide-react";

// import AnimatedCard from "../components/AnimatedCard";

// const initialBills = [
//   {
//     id: 1,
//     title: "Netflix",
//     date: "Today",
//     amount: 649,
//     color: "bg-red-500",
//     paid: false,
//   },
//   {
//     id: 2,
//     title: "Electricity",
//     date: "Tomorrow",
//     amount: 1280,
//     color: "bg-yellow-500",
//     paid: false,
//   },
//   {
//     id: 3,
//     title: "Internet",
//     date: "25 Jul",
//     amount: 899,
//     color: "bg-sky-500",
//     paid: false,
//   },
//   {
//     id: 4,
//     title: "Spotify",
//     date: "28 Jul",
//     amount: 119,
//     color: "bg-emerald-500",
//     paid: false,
//   },
// ];

// function BillsPage() {
//   const [bills, setBills] = useState(initialBills);

//   const payBill = (id) => {
//     setBills((prev) =>
//       prev.map((bill) =>
//         bill.id === id ? { ...bill, paid: true } : bill
//       )
//     );
//   };

//   const pending = bills.filter((bill) => !bill.paid).length;

//   return (
//     <div className="flex h-full flex-col px-6 pt-14 pb-8">
//       {/* Header */}

//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         <p className="text-white/60">Upcoming Bills</p>

//         <h1 className="mt-2 text-4xl font-bold">
//           Never Miss One
//         </h1>
//       </motion.div>

//       {/* Summary */}

//       <AnimatedCard
//         delay={0.1}
//         className="mt-8 p-6"
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-white/60">
//               Pending Bills
//             </p>

//             <motion.h2
//               key={pending}
//               initial={{
//                 scale: .85,
//                 opacity: 0,
//               }}
//               animate={{
//                 scale: 1,
//                 opacity: 1,
//               }}
//               className="mt-2 text-5xl font-bold"
//             >
//               {pending}
//             </motion.h2>
//           </div>

//           <div className="rounded-2xl bg-yellow-500/20 p-4">
//             <Bell className="text-yellow-400" />
//           </div>
//         </div>
//       </AnimatedCard>

//       {/* Reminder */}

//       <AnimatedCard
//         delay={0.2}
//         className="mt-6 overflow-hidden p-0"
//       >
//         <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6">
//           <div className="flex items-center gap-3">
//             <Zap />

//             <div>
//               <h2 className="font-bold">
//                 Payment Reminder
//               </h2>

//               <p className="mt-1 text-sm text-white/90">
//                 Netflix renews today.
//               </p>
//             </div>
//           </div>
//         </div>
//       </AnimatedCard>

//       {/* Bills */}

//       <div className="mt-6 flex-1 space-y-4 overflow-y-auto">

//         <AnimatePresence>

//           {bills.map((bill, index) => (
//             <motion.div
//               key={bill.id}
//               layout
//               initial={{
//                 opacity: 0,
//                 y: 30,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               exit={{
//                 opacity: 0,
//                 x: 100,
//               }}
//               transition={{
//                 delay: index * .08,
//               }}
//             >
//               <AnimatedCard className="p-5">

//                 <div className="flex items-center">

//                   <div
//                     className={`${bill.color} rounded-2xl p-3`}
//                   >
//                     <CreditCard size={22} />
//                   </div>

//                   <div className="ml-4 flex-1">

//                     <h3 className="font-semibold">
//                       {bill.title}
//                     </h3>

//                     <div className="mt-1 flex items-center gap-2 text-sm text-white/45">
//                       <Calendar size={14} />
//                       {bill.date}
//                     </div>

//                   </div>

//                   <div className="text-right">

//                     <p className="font-bold">
//                       ₹{bill.amount}
//                     </p>

//                     {bill.paid ? (
//                       <motion.div
//                         initial={{
//                           scale: 0,
//                         }}
//                         animate={{
//                           scale: 1,
//                         }}
//                         className="mt-2 flex items-center justify-end gap-1 text-emerald-400"
//                       >
//                         <CheckCircle2 size={16} />
//                         <span className="text-xs">
//                           Paid
//                         </span>
//                       </motion.div>
//                     ) : (
//                       <motion.button
//                         whileTap={{
//                           scale: .95,
//                         }}
//                         whileHover={{
//                           x: 3,
//                         }}
//                         onClick={() =>
//                           payBill(bill.id)
//                         }
//                         className="mt-2 flex items-center gap-1 text-sm text-yellow-400"
//                       >
//                         Pay
//                         <ChevronRight size={16} />
//                       </motion.button>
//                     )}

//                   </div>

//                 </div>

//               </AnimatedCard>
//             </motion.div>
//           ))}

//         </AnimatePresence>

//       </div>

//       {/* Footer Card */}

//       <AnimatedCard
//         delay={0.4}
//         className="mt-5 p-5"
//       >
//         <div className="flex items-center justify-between">

//           <div>

//             <p className="text-white/60">
//               Auto Pay
//             </p>

//             <h2 className="mt-2 text-2xl font-bold">
//               Enabled
//             </h2>

//           </div>

//           <motion.div
//             animate={{
//               rotate: [0, 10, -10, 0],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 2.5,
//             }}
//             className="rounded-full bg-emerald-500/20 p-4"
//           >
//             <Bell className="text-emerald-400" />
//           </motion.div>

//         </div>
//       </AnimatedCard>
//     </div>
//   );
// }

// export default BillsPage;
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  CheckCircle2,
  Calendar,
  Zap,
  CreditCard,
  ChevronRight,
} from "lucide-react";

import AnimatedCard from "../components/AnimatedCard";

const initialBills = [
  {
    id: 1,
    title: "Netflix",
    date: "Today",
    amount: 649,
    color: "bg-red-500",
    paid: false,
  },
  {
    id: 2,
    title: "Electricity",
    date: "Tomorrow",
    amount: 1280,
    color: "bg-yellow-500",
    paid: false,
  },
  {
    id: 3,
    title: "Internet",
    date: "25 Jul",
    amount: 899,
    color: "bg-sky-500",
    paid: false,
  },
  {
    id: 4,
    title: "Spotify",
    date: "28 Jul",
    amount: 119,
    color: "bg-emerald-500",
    paid: false,
  },
];

function BillsPage() {
  const [bills, setBills] = useState(initialBills);

  const payBill = (id) => {
    setBills((prev) =>
      prev.map((bill) =>
        bill.id === id ? { ...bill, paid: true } : bill
      )
    );
  };

  const pending = bills.filter((bill) => !bill.paid).length;

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto flex min-h-full max-w-[390px] flex-col px-5 pt-10 pb-36">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm text-white/50">
            Upcoming Bills
          </p>

          <h1 className="mt-1 text-3xl font-bold">
            Never Miss One
          </h1>
        </motion.div>

        {/* Summary */}

        <AnimatedCard
          delay={0.1}
          className="mt-6 p-5"
        >
          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-white/60">
                Pending Bills
              </p>

              <motion.h2
                key={pending}
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
                {pending}
              </motion.h2>

            </div>

            <div className="rounded-2xl bg-yellow-500/20 p-3">
              <Bell
                size={24}
                className="text-yellow-400"
              />
            </div>

          </div>
        </AnimatedCard>

        {/* Reminder */}

        <AnimatedCard
          delay={0.2}
          className="mt-5 overflow-hidden p-0"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-5">

            <div className="flex items-center gap-3">

              <Zap size={22} />

              <div>

                <h2 className="font-semibold">
                  Payment Reminder
                </h2>

                <p className="mt-1 text-sm text-white/90">
                  Netflix renews today.
                </p>

              </div>

            </div>

          </div>
        </AnimatedCard>

        {/* Bills */}

        <div className="mt-5 space-y-3">

          <AnimatePresence>

            {bills.map((bill, index) => (

              <motion.div
                key={bill.id}
                layout
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 80,
                }}
                transition={{
                  delay: index * 0.06,
                }}
              >

                <AnimatedCard className="p-4">

                  <div className="flex items-center">

                    <div
                      className={`${bill.color} rounded-xl p-3`}
                    >
                      <CreditCard size={20} />
                    </div>

                    <div className="ml-4 flex-1">

                      <h3 className="font-semibold">
                        {bill.title}
                      </h3>

                      <div className="mt-1 flex items-center gap-2 text-xs text-white/50">

                        <Calendar size={13} />

                        {bill.date}

                      </div>

                    </div>

                    <div className="text-right">

                      <p className="font-semibold">
                        ₹{bill.amount}
                      </p>

                      {bill.paid ? (

                        <motion.div
                          initial={{
                            scale: 0,
                          }}
                          animate={{
                            scale: 1,
                          }}
                          className="mt-2 flex items-center justify-end gap-1 text-emerald-400"
                        >

                          <CheckCircle2 size={15} />

                          <span className="text-xs">
                            Paid
                          </span>

                        </motion.div>

                      ) : (

                        <motion.button
                          whileTap={{
                            scale: 0.95,
                          }}
                          whileHover={{
                            x: 2,
                          }}
                          onClick={() =>
                            payBill(bill.id)
                          }
                          className="mt-2 flex items-center gap-1 text-xs font-medium text-yellow-400"
                        >

                          Pay

                          <ChevronRight size={15} />

                        </motion.button>

                      )}

                    </div>

                  </div>

                </AnimatedCard>

              </motion.div>

            ))}

          </AnimatePresence>

        </div>

        {/* Auto Pay */}

        <AnimatedCard
          delay={0.35}
          className="mt-5 p-5"
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-white/60">
                Auto Pay
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Enabled
              </h2>

            </div>

            <motion.div
              animate={{
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
              }}
              className="rounded-2xl bg-emerald-500/20 p-3"
            >
              <Bell
                size={22}
                className="text-emerald-400"
              />
            </motion.div>

          </div>

        </AnimatedCard>

      </div>
    </div>
  );
}

export default BillsPage;