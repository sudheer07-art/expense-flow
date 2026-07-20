import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Wallet,
  TrendingUp,
  CalendarDays,
  BadgeIndianRupee,
} from "lucide-react";

// import AuthOverlay from "../../components/auth/AuthOverlay";
import Modal from "../../components/common/Modal";
import SetBudgetModal from "../../components/budget/SetBudgetModal";

import {
  getCurrentBudget,
  createBudget,
  updateBudget,
} from "../../services/budgetService";

export default function Budget() {
  const [loading, setLoading] = useState(true);
  const [budget, setBudget] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    loadBudget();
  }, []);

  const loadBudget = async () => {
    try {
      const data = await getCurrentBudget();
      setBudget(data);
    } catch (err) {
      console.error("Failed to load budget", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveBudget = async (data) => {
    try {
      const today = new Date();

      if (budget?.budget_id) {
        await updateBudget(budget.budget_id, {
          amount: Number(data.monthlyBudget),
        });
      } else {
        await createBudget({
          amount: Number(data.monthlyBudget),
          month: today.getMonth() + 1,
          year: today.getFullYear(),
        });
      }

      await loadBudget();
      setOpenModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  const today = new Date();

  const lastDay = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  );

  const daysLeft = Math.max(
    lastDay.getDate() - today.getDate(),
    1
  );

  const dailyLimit =
    (budget?.remaining ?? 0) / daysLeft;

  const progressColor = useMemo(() => {
    switch (budget?.status) {
      case "Exceeded":
        return "bg-red-500";

      case "Warning":
        return "bg-yellow-400";

      case "Good":
        return "bg-blue-500";

      case "Excellent":
        return "bg-emerald-500";

      default:
        return "bg-indigo-500";
    }
  }, [budget]);

  const statusBadge = useMemo(() => {
    switch (budget?.status) {
      case "Exceeded":
        return {
          text: "Exceeded",
          bg: "bg-red-500/20",
          color: "text-red-400",
        };

      case "Warning":
        return {
          text: "Warning",
          bg: "bg-yellow-500/20",
          color: "text-yellow-300",
        };

      case "Good":
        return {
          text: "Good",
          bg: "bg-blue-500/20",
          color: "text-blue-300",
        };

      case "Excellent":
        return {
          text: "Excellent",
          bg: "bg-emerald-500/20",
          color: "text-emerald-400",
        };

      default:
        return {
          text: "No Budget",
          bg: "bg-gray-600/20",
          color: "text-gray-300",
        };
    }
  }, [budget]);

  const insight = useMemo(() => {
    switch (budget?.status) {
      case "Excellent":
        return "Excellent! Your spending is well under control.";

      case "Good":
        return "You're on track. Keep maintaining your spending habits.";

      case "Warning":
        return "You're getting close to your monthly limit. Spend carefully.";

      case "Exceeded":
        return "You've exceeded your monthly budget. Try reducing expenses.";

      default:
        return "Set your monthly budget to start tracking your spending.";
    }
  }, [budget]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen px-6 pt-4 pb-32">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-2xl font-bold text-white">
              Budget
            </h1>

            <p className="mt-1 text-sm text-gray-400">
              Manage your monthly spending
            </p>
          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-indigo-600
              to-purple-600
              shadow-lg
            "
          >
            <Plus size={18} className="text-white" />
          </button>
        </motion.div>
                {/* Budget Overview Card */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="
            mt-6
            overflow-hidden
            rounded-3xl
            bg-gradient-to-br
            from-indigo-600
            via-indigo-500
            to-purple-600
            p-6
            shadow-xl
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/80">
                Monthly Budget
              </p>

              <h2 className="mt-2 text-4xl font-bold text-white">
                ₹{budget?.amount?.toLocaleString() ?? 0}
              </h2>
            </div>

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-white/20
              "
            >
              <Wallet size={28} className="text-white" />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between text-sm text-white/80">
            <span>
              ₹{budget?.spent?.toLocaleString() ?? 0} Spent
            </span>

            <span>
              {budget?.used_percentage ?? 0}% Used
            </span>
          </div>

          <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/20">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${Math.min(
                  budget?.used_percentage ?? 0,
                  100
                )}%`,
              }}
              transition={{
                duration: 0.8,
              }}
              className={`h-full rounded-full ${progressColor}`}
            />
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div>
              <p className="text-xs text-white/70">
                Remaining
              </p>

              <h3 className="text-lg font-semibold text-white">
                ₹{budget?.remaining?.toLocaleString() ?? 0}
              </h3>
            </div>

            <span
              className={`
                rounded-full
                px-4
                py-2
                text-xs
                font-semibold
                ${statusBadge.bg}
                ${statusBadge.color}
              `}
            >
              {statusBadge.text}
            </span>
          </div>
        </motion.div>

        {/* Summary Cards */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 grid grid-cols-2 gap-4"
        >
          <div className="rounded-2xl border border-white/5 bg-[#1A1F2B] p-5">
            <div className="flex items-center gap-2">
              <BadgeIndianRupee
                size={18}
                className="text-red-400"
              />

              <p className="text-xs text-gray-400">
                Spent
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-bold text-white">
              ₹{budget?.spent?.toLocaleString() ?? 0}
            </h3>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#1A1F2B] p-5">
            <div className="flex items-center gap-2">
              <Wallet
                size={18}
                className="text-emerald-400"
              />

              <p className="text-xs text-gray-400">
                Remaining
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-bold text-white">
              ₹{budget?.remaining?.toLocaleString() ?? 0}
            </h3>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#1A1F2B] p-5">
            <div className="flex items-center gap-2">
              <TrendingUp
                size={18}
                className="text-indigo-400"
              />

              <p className="text-xs text-gray-400">
                Budget Used
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-bold text-white">
              {budget?.used_percentage ?? 0}%
            </h3>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#1A1F2B] p-5">
            <div className="flex items-center gap-2">
              <CalendarDays
                size={18}
                className="text-yellow-400"
              />

              <p className="text-xs text-gray-400">
                Days Left
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-bold text-white">
              {daysLeft}
            </h3>
          </div>
        </motion.div>

        {/* Daily Spending Limit */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
            mt-6
            rounded-2xl
            border
            border-white/5
            bg-[#1A1F2B]
            p-5
          "
        >
          <p className="text-sm text-gray-400">
            Daily Spending Limit
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            ₹{dailyLimit.toFixed(0)}
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            You can spend approximately
            <span className="font-semibold text-white">
              {" "}₹{dailyLimit.toFixed(0)}
            </span>
            {" "}per day for the remaining
            {" "}
            <span className="font-semibold text-white">
              {daysLeft} days
            </span>
            .
          </p>
        </motion.div>
                {/* Empty State */}

        {budget?.amount === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              mt-6
              rounded-3xl
              border
              border-dashed
              border-white/10
              bg-[#1A1F2B]
              p-8
              text-center
            "
          >
            <div
              className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-indigo-500/20
              "
            >
              <Wallet
                size={30}
                className="text-indigo-400"
              />
            </div>

            <h2 className="mt-5 text-xl font-bold text-white">
              No Budget Set
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Set your monthly budget to
              start tracking your spending
              and stay financially healthy.
            </p>

            <button
              onClick={() => setOpenModal(true)}
              className="
                mt-6
                rounded-xl
                bg-gradient-to-r
                from-indigo-600
                to-purple-600
                px-6
                py-3
                font-semibold
                text-white
              "
            >
              Set Monthly Budget
            </button>
          </motion.div>
        )}

        {/* Budget Insight */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="
            mt-6
            rounded-3xl
            border
            border-white/5
            bg-[#1A1F2B]
            p-6
          "
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">
              Budget Insight
            </h3>

            <span
              className={`
                rounded-full
                px-3
                py-1
                text-xs
                font-semibold
                ${statusBadge.bg}
                ${statusBadge.color}
              `}
            >
              {statusBadge.text}
            </span>
          </div>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            {insight}
          </p>
        </motion.div>

        {/* Quick Tips */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
            mt-6
            rounded-3xl
            border
            border-white/5
            bg-[#1A1F2B]
            p-6
          "
        >
          <h3 className="text-lg font-semibold text-white">
            Smart Tips
          </h3>

          <div className="mt-5 space-y-4">

            <div className="flex gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />

              <p className="text-sm text-gray-400">
                Review your expenses every week to
                avoid overspending.
              </p>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />

              <p className="text-sm text-gray-400">
                Save at least 20% of your monthly
                income whenever possible.
              </p>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />

              <p className="text-sm text-gray-400">
                Track your highest expenses to
                identify where you can cut costs.
              </p>
            </div>

          </div>
        </motion.div>

      </div>

      {openModal && (
        <Modal
          onClose={() => setOpenModal(false)}
        >
          <SetBudgetModal
            close={() => setOpenModal(false)}
            onSave={handleSaveBudget}
          />
        </Modal>
      )}
    </>
  );
}