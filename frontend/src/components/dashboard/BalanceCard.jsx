import { motion } from "framer-motion";
import {
  Wallet,
  IndianRupee,
  TrendingUp,
  CircleDollarSign,
  BadgeCheck,
} from "lucide-react";

export default function BalanceCard({ summary, loading }) {
  if (loading) {
    return (
      <div className="h-80 rounded-3xl bg-slate-800 animate-pulse" />
    );
  }

  if (!summary) return null;

  const totalExpense = Number(summary.total_expense ?? 0);
  const budget = Number(summary.budget ?? 0);
  const monthExpense = Number(summary.this_month_expense ?? 0);
  const remaining = Number(summary.remaining_budget ?? 0);
  const transactions = Number(summary.total_transactions ?? 0);

  const progress = Math.min(
    Number(summary.budget_used_percentage ?? 0),
    100
  );

  const status = summary.budget_status ?? "No Budget";

  let progressColor = "bg-emerald-500";

  if (progress >= 80 && progress < 100) {
    progressColor = "bg-yellow-500";
  } else if (progress >= 100) {
    progressColor = "bg-red-500";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 p-6 text-white shadow-2xl"
    >
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/70 text-sm">
            Total Expenses
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            ₹ {totalExpense.toLocaleString()}
          </h1>
        </div>

        <div className="rounded-2xl bg-white/20 p-4">
          <Wallet size={30} />
        </div>
      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="mb-2 flex justify-between text-sm">
          <span>Budget Used</span>

          <span>
            {progress.toFixed(0)}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/20">
          <div
            className={`h-full rounded-full ${progressColor}`}
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

      </div>

      {/* Stats */}

      <div className="mt-8 grid grid-cols-2 gap-4">

        <Card
          icon={<IndianRupee size={20} />}
          title="Budget"
          value={budget}
        />

        <Card
          icon={<TrendingUp size={20} />}
          title="This Month"
          value={monthExpense}
        />

        <Card
          icon={<CircleDollarSign size={20} />}
          title="Remaining"
          value={remaining}
        />

        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">

          <BadgeCheck size={20} />

          <p className="mt-3 text-sm text-white/70">
            Status
          </p>

          <p className="mt-2 text-lg font-bold">
            {status}
          </p>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between border-t border-white/20 pt-5">

        <div>
          <p className="text-xs text-white/60">
            Transactions
          </p>

          <p className="font-bold">
            {transactions}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-white/60">
            Updated
          </p>

          <p className="font-bold">
            Just now
          </p>
        </div>

      </div>
    </motion.div>
  );
}

function Card({ icon, title, value }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">

      <div className="mb-3">
        {icon}
      </div>

      <p className="text-sm text-white/70">
        {title}
      </p>

      <h3 className="mt-2 text-xl font-bold">
        ₹ {Number(value ?? 0).toLocaleString()}
      </h3>

    </div>
  );
}