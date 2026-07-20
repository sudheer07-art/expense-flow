import {
  Wallet,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
} from "lucide-react";

function BalancePreview() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#171B23] p-6 shadow-2xl">

      {/* Background Glow */}
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

      {/* Header */}
      <div className="relative flex items-start justify-between">

        <div>
          <p className="text-sm text-gray-400">
            Total Balance
          </p>

          <h2 className="mt-2 text-4xl font-bold tracking-tight">
            ₹25,430
          </h2>

          <div className="mt-3 flex items-center gap-2 text-sm text-emerald-400">
            <ArrowUpRight size={16} />

            <span>+12.5% this month</span>
          </div>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/15">
          <Wallet
            size={28}
            className="text-indigo-400"
          />
        </div>

      </div>

      {/* Divider */}

      <div className="my-6 h-px bg-white/10" />

      {/* Income / Expense */}

      <div className="grid grid-cols-2 gap-4">

        {/* Income */}

        <div className="rounded-2xl border border-white/5 bg-white/5 p-4">

          <div className="flex items-center gap-2">

            <TrendingUp
              size={18}
              className="text-emerald-400"
            />

            <span className="text-sm text-gray-400">
              Income
            </span>

          </div>

          <h3 className="mt-4 text-2xl font-semibold">
            ₹18,000
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            +8% from last month
          </p>

        </div>

        {/* Expense */}

        <div className="rounded-2xl border border-white/5 bg-white/5 p-4">

          <div className="flex items-center gap-2">

            <TrendingDown
              size={18}
              className="text-red-400"
            />

            <span className="text-sm text-gray-400">
              Expense
            </span>

          </div>

          <h3 className="mt-4 text-2xl font-semibold">
            ₹7,500
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            −12% from last month
          </p>

        </div>

      </div>

      {/* Bottom */}

      <div className="mt-6 rounded-2xl border border-indigo-500/10 bg-indigo-500/10 px-4 py-3">

        <div className="flex items-center justify-between">

          <span className="text-sm text-gray-300">
            Savings Goal
          </span>

          <span className="text-sm font-semibold text-white">
            72%
          </span>

        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">

          <div className="h-full w-[72%] rounded-full bg-indigo-500" />

        </div>

      </div>

    </div>
  );
}

export default BalancePreview;