
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Plus,
  Pizza,
  Coffee,
  Car,
  ShoppingBag,
  Wallet,
  X,
  ChevronRight
} from "lucide-react";

import AnimatedCard from "../components/AnimatedCard";

const categories = [
  {
    title: "Food",
    amount: 320,
    icon: Pizza,
    color: "bg-orange-500",
  },
  {
    title: "Coffee",
    amount: 180,
    icon: Coffee,
    color: "bg-amber-500",
  },
  {
    title: "Travel",
    amount: 560,
    icon: Car,
    color: "bg-sky-500",
  },
  {
    title: "Shopping",
    amount: 890,
    icon: ShoppingBag,
    color: "bg-pink-500",
  },
];

export default function ExpensesPage({ setShowFooter }) {
  const [expenses, setExpenses] = useState([]);
  const [showSheet, setShowSheet] = useState(false);
  useEffect(() => {
  console.log("showSheet:", showSheet);
  setShowFooter?.(!showSheet);
}, [showSheet, setShowFooter]);

  const total = useMemo(
    () =>
      expenses.reduce(
        (sum, item) => sum + item.amount,
        0
      ),
    [expenses]
  );

  const addExpense = (expense) => {
    setExpenses((prev) => [
      {
        id: Date.now(),
        ...expense,
      },
      ...prev,
    ]);

    setShowSheet(false);
  };

  return (
    <>
      <div className="h-full overflow-y-auto">
        <div className="mx-auto flex min-h-full max-w-[390px] flex-col px-5 pt-9 pb-36">

          {/* Header */}

          <motion.div
            initial={{
              opacity: 0,
              y: -18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.35,
            }}
          >
            <p className="text-sm text-white/45">
              Welcome Back 👋
            </p>

            <h1 className="mt-1 text-[38px] font-bold leading-none tracking-tight">
              Expenses
            </h1>
          </motion.div>

          {/* Hero Card */}

          <AnimatedCard
            delay={0.08}
            className="mt-5 p-5"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-white/55">
                  Total Spending
                </p>

                <motion.h2
                  key={total}
                  initial={{
                    scale: 0.9,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="mt-2 text-[40px] font-bold leading-none"
                >
                  ₹{total.toLocaleString()}
                </motion.h2>

              </div>

              <div className="rounded-2xl bg-orange-500/15 p-3.5">

                <Wallet
                  size={26}
                  className="text-orange-400"
                />

              </div>

            </div>
          </AnimatedCard>

          {/* Add Expense */}

          <motion.button
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={() => setShowSheet(true)}
            className="
              mt-5
              flex
              h-12
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-gradient-to-r
              from-orange-500
              via-orange-500
              to-pink-500
              font-semibold
              shadow-lg
            "
          >
            <Plus size={18} />

            Add Expense
          </motion.button>

          <div className="my-5 h-px bg-white/5" />

          {/* Expense List */}

          <div className="space-y-3">

            <AnimatePresence>

              {expenses.length === 0 && (

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="py-12 text-center"
                >
                  <p className="text-white/35">
                    No expenses yet
                  </p>

                  <p className="mt-2 text-sm text-white/25">
                    Tap "Add Expense" to begin
                  </p>
                </motion.div>

              )}

              {expenses.map((expense) => {

                const Icon = expense.icon;

                return (

                  <motion.div
                    key={expense.id}
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
                  >
                    <AnimatedCard className="px-4 py-3">

                      <div className="flex items-center">

                        <div
                          className={`${expense.color} rounded-xl p-2.5`}
                        >
                          <Icon size={18} />
                        </div>

                        <div className="ml-4 flex-1">

                          <h3 className="font-semibold">
                            {expense.title}
                          </h3>

                          <p className="text-[11px] text-white/45">
                            Today
                          </p>

                        </div>

                        <span className="font-semibold">
                          ₹{expense.amount}
                        </span>

                      </div>

                    </AnimatedCard>

                  </motion.div>

                );

              })}

            </AnimatePresence>

          </div>

        </div>
      </div>
            {/* Bottom Sheet */}

      <AnimatePresence>
        {showSheet && (
          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSheet(false)}
              className="fixed inset-0 z-40 bg-black/45 backdrop-blur-sm"
            />

            {/* Sheet */}

            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.08}
              onDragEnd={(event, info) => {
                if (info.offset.y > 120) {
                  setShowSheet(false);
                }
              }}
              initial={{ y: 500 }}
              animate={{ y: 0 }}
              exit={{ y: 500 }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 30,
              }}
              className="
                fixed
                bottom-0
                left-1/2
                z-50
                w-full
                max-w-[350px]
                -translate-x-1/2
                max-h-[55vh]
                overflow-y-auto
                rounded-t-[30px]
                border
                border-white/10
                bg-[#171A22]
                px-5
                pt-3
                pb-6
                backdrop-blur-3xl
              "
            >
              {/* Drag Handle */}

              <div className="mb-4 flex justify-center">
                <div className="h-1.5 w-12 rounded-full bg-white/20" />
              </div>

              {/* Header */}

              <div className="mb-5 flex items-center justify-between">

                <h2 className="text-lg font-semibold">
                  Select Category
                </h2>

                <button
                  onClick={() => setShowSheet(false)}
                  className="rounded-full p-1 transition hover:bg-white/10"
                >
                  <X size={22} />
                </button>

              </div>

              {/* Categories */}

              <div className="space-y-3">

                {categories.map((item, index) => {

                  const Icon = item.icon;

                  return (
                    <motion.button
                      key={item.title}
                      whileHover={{
                        x: 4,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                      }}
                      onClick={() => addExpense(item)}
                      className="
                        flex
                        w-full
                        items-center
                        rounded-2xl
                        bg-white/5
                        px-4
                        py-3
                        transition
                        hover:bg-white/10
                      "
                    >
                      <div
                        className={`${item.color} rounded-xl p-2.5`}
                      >
                        <Icon size={18} />
                      </div>

                      <div className="ml-4 flex-1 text-left">

                        <h3 className="font-medium">
                          {item.title}
                        </h3>

                        <p className="text-xs text-white/45">
                          ₹{item.amount}
                        </p>

                      </div>

                      <ChevronRight
                        size={18}
                        className="text-white/30"
                      />
                    </motion.button>
                  );

                })}

              </div>

            </motion.div>

          </>
        )}
      </AnimatePresence>

    </>
  );
}