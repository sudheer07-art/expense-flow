import {
  PiggyBank,
  Target,
  WalletCards,
  TrendingUp,
} from "lucide-react";

function BudgetPreview() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#171B23] p-6 shadow-2xl">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-gray-400">
            Monthly Budget
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            ₹30,000
          </h2>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/15">
          <PiggyBank
            className="text-indigo-400"
            size={28}
          />
        </div>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="flex justify-between text-sm">

          <span className="text-gray-400">
            Used
          </span>

          <span className="font-semibold">
            72%
          </span>

        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/5">

          <div className="h-full w-[72%] rounded-full bg-indigo-500 transition-all duration-700" />

        </div>

      </div>

      {/* Stats */}

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-white/5 p-4">

          <WalletCards
            className="text-indigo-400"
            size={18}
          />

          <p className="mt-3 text-sm text-gray-400">
            Remaining
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            ₹8,400
          </h3>

        </div>

        <div className="rounded-2xl bg-white/5 p-4">

          <Target
            className="text-emerald-400"
            size={18}
          />

          <p className="mt-3 text-sm text-gray-400">
            Goal
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            ₹50,000
          </h3>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">

        <div className="flex items-center gap-3">

          <TrendingUp
            className="text-emerald-400"
            size={20}
          />

          <div>

            <p className="font-medium">
              You're doing great
            </p>

            <p className="text-sm text-gray-400">
              Keep tracking expenses to stay within budget.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default BudgetPreview;