import {
  Utensils,
  ShoppingBag,
  Car,
  Film,
  Wallet,
  Sparkles,
} from "lucide-react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "./SectionCard";

function FinancialInsights({ expenses = [] }) {
  const navigate = useNavigate();

  const categoryIcons = {
    food: Utensils,
    shopping: ShoppingBag,
    travel: Car,
    entertainment: Film,
  };

  const categoryColors = {
    food: "bg-orange-500/20 text-orange-400",
    shopping: "bg-purple-500/20 text-purple-400",
    travel: "bg-blue-500/20 text-blue-400",
    entertainment: "bg-pink-500/20 text-pink-400",
  };

  const insights = useMemo(() => {
    const grouped = {};

    expenses.forEach((expense) => {
      const category = expense.category || "Others";

      if (!grouped[category]) {
        grouped[category] = 0;
      }

      grouped[category] += Number(expense.amount);
    });

    return Object.entries(grouped)
      .map(([name, amount]) => ({
        name,
        amount,
        icon:
          categoryIcons[name.toLowerCase()] || Wallet,
        color:
          categoryColors[name.toLowerCase()] ||
          "bg-gray-500/20 text-gray-300",
      }))
      .sort((a, b) => b.amount - a.amount);
  }, [expenses]);

  return (
    <SectionCard
      title="Financial Insights"
      icon={<Sparkles size={20} />}
    >
      <div className="mb-5">
        <p className="text-sm text-gray-400">
          Top spending categories
        </p>
      </div>

      {insights.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-8 text-center">
          <Wallet
            size={36}
            className="mx-auto mb-3 text-gray-500"
          />

          <h3 className="font-semibold">
            No Insights Yet
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Add some expenses to see your spending patterns.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {insights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-2xl border border-[#2A2B32] bg-[#1B1C22] p-4"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}
                  >
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-400">
                      ₹{item.amount.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="rounded-full bg-indigo-500/15 px-3 py-1 text-sm font-medium text-indigo-400">
                  Top
                </div>
              </div>
            );
          })}
        </div>
      )}

      {insights.length > 0 && (
        <button
          onClick={() => navigate("/reports")}
          className="mt-6 font-medium text-indigo-400 transition hover:text-indigo-300"
        >
          View Full Report →
        </button>
      )}
    </SectionCard>
  );
}

export default FinancialInsights;