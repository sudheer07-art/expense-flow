import { motion } from "framer-motion";
import {
  Coffee,
  UtensilsCrossed,
  CarTaxiFront,
  ShoppingBag,
  Wallet,
  ChevronRight,
  History,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import SectionCard from "./SectionCard";

function RecentTransactions({ expenses = [] }) {
  const navigate = useNavigate();

  const getIcon = (category) => {
    switch (category?.toLowerCase()) {
      case "food":
        return UtensilsCrossed;

      case "travel":
        return CarTaxiFront;

      case "cafe":
        return Coffee;

      case "shopping":
        return ShoppingBag;

      default:
        return Wallet;
    }
  };

  return (
    <SectionCard
      title="Recent Transactions"
      icon={<History size={20} />}
    >
      <div className="mb-5 flex items-center justify-between">
        <button
          onClick={() => navigate("/expenses")}
          className="text-sm text-indigo-400 hover:text-indigo-300"
        >
          See All
        </button>
      </div>

      {expenses.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-8 text-center">
          <Wallet
            size={36}
            className="mx-auto mb-3 text-gray-500"
          />

          <h3 className="font-semibold text-white">
            No Transactions Yet
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Add your first expense to start tracking.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {expenses.map((expense, index) => {
            const Icon = getIcon(expense.category);

            return (
              <motion.div
                key={expense.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                }}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-3xl
                  border
                  border-[#2A2B32]
                  bg-[#1B1C22]
                  p-4
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#2A2B32]
                    "
                  >
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {expense.title}
                    </h3>

                    <p className="text-sm text-gray-400">
                      {expense.category} •{" "}
                      {new Date(expense.expense_date).toLocaleDateString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "short",
                        }
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-semibold text-red-400">
                    -₹
                    {Number(expense.amount).toLocaleString()}
                  </span>

                  <ChevronRight
                    size={18}
                    color="#666"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </SectionCard>
  );
}

export default RecentTransactions;