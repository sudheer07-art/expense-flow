import { useEffect, useState } from "react";
import BudgetModal from "../components/budget/BudgetModal";
import {
  getCurrentBudget,
  deleteBudget,
} from "../services/budgetService";

export default function Budget() {
  const [budget, setBudget] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const loadBudget = async () => {
    try {
      setLoading(true);
      const data = await getCurrentBudget();
      setBudget(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBudget();
  }, []);

  const handleDelete = async () => {
    if (!budget?.budget_id) return;

    if (!window.confirm("Delete this month's budget?")) {
      return;
    }

    try {
      await deleteBudget(budget.budget_id);
      loadBudget();
    } catch (err) {
      console.error(err);
      alert("Unable to delete budget.");
    }
  };

  const getProgressColor = () => {
    if (!budget) return "bg-indigo-500";

    if (budget.used_percentage < 60) return "bg-green-500";
    if (budget.used_percentage < 80) return "bg-yellow-500";
    if (budget.used_percentage <= 100) return "bg-orange-500";

    return "bg-red-500";
  };

  if (loading) {
    return (
      <div className="p-6 text-center">
        Loading Budget...
      </div>
    );
  }

  return (
    <div className="p-5">

      <div className="rounded-3xl bg-[#181A20] border border-[#2A2B32] p-6">

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-2xl font-bold">
            Monthly Budget
          </h1>

          <button
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 px-4 py-2 rounded-xl"
          >
            {budget?.budget_id ? "Edit" : "Set Budget"}
          </button>

        </div>

        <div className="space-y-5">

          <div>
            <p className="text-gray-400 text-sm">
              Budget
            </p>

            <h2 className="text-3xl font-bold">
              ₹{budget?.amount ?? 0}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-[#23252C] rounded-xl p-4">
              <p className="text-gray-400 text-sm">
                Spent
              </p>

              <h3 className="text-xl font-semibold">
                ₹{budget?.spent ?? 0}
              </h3>
            </div>

            <div className="bg-[#23252C] rounded-xl p-4">
              <p className="text-gray-400 text-sm">
                Remaining
              </p>

              <h3 className="text-xl font-semibold">
                ₹{budget?.remaining ?? 0}
              </h3>
            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">

              <span>Progress</span>

              <span>
                {budget?.used_percentage ?? 0}%
              </span>

            </div>

            <div className="w-full bg-[#2A2B32] rounded-full h-3">

              <div
                className={`${getProgressColor()} h-3 rounded-full transition-all duration-500`}
                style={{
                  width: `${Math.min(
                    budget?.used_percentage ?? 0,
                    100
                  )}%`,
                }}
              />

            </div>

          </div>

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-400 text-sm">
                Status
              </p>

              <h3 className="text-lg font-semibold">
                {budget?.status}
              </h3>

            </div>

            {budget?.budget_id && (
              <button
                onClick={handleDelete}
                className="bg-red-600 px-4 py-2 rounded-xl"
              >
                Delete
              </button>
            )}

          </div>

        </div>

      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <BudgetModal
            close={() => setShowModal(false)}
            onSuccess={loadBudget}
            budget={
              budget?.budget_id
                ? {
                    id: budget.budget_id,
                    amount: budget.amount,
                    month: budget.month,
                    year: budget.year,
                  }
                : null
            }
          />

        </div>
      )}

    </div>
  );
}