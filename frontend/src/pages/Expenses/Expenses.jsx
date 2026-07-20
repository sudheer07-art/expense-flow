import { useEffect, useMemo, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Plus,
  ArrowDownUp,
} from "lucide-react";

import {
  getExpenses,
  deleteExpense,
} from "../../services/expenseService";

import ExpenseCard from "../../components/expense/ExpenseCard";
import ExpenseCardSkeleton from "./ExpenseCardSkeleton";
import AddExpenseModal from "../../components/expense/AddExpenseModal";
import Modal from "../../components/common/Modal";

export default function Expenses() {
  /* ===========================
     State
  =========================== */

  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const [openModal, setOpenModal] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);

  /* ===========================
     Categories
  =========================== */

  const categories = [
    "All",
    "Food",
    "Travel",
    "Shopping",
    "Bills",
    "Entertainment",
    "Health",
    "Education",
    "Other",
  ];

  /* ===========================
     API
  =========================== */

  const loadExpenses = useCallback(async () => {
    try {
      setLoading(true);

      const response = await getExpenses(1, 20);

      if (Array.isArray(response)) {
        setExpenses(response);
      } else if (Array.isArray(response?.data)) {
        setExpenses(response.data);
      } else if (Array.isArray(response?.expenses)) {
        setExpenses(response.expenses);
      } else {
        setExpenses([]);
      }
    } catch (error) {
      console.error("Failed to load expenses:", error);
      setExpenses([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadExpenses();
  }, [loadExpenses]);

  /* ===========================
     Actions
  =========================== */

  const openAddModal = () => {
    setSelectedExpense(null);
    setOpenModal(true);
  };

  const handleEdit = (expense) => {
    setSelectedExpense(expense);
    setOpenModal(true);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Delete this expense?"
    );

    if (!confirmed) return;

    try {
      await deleteExpense(id);
      await loadExpenses();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };
    /* ===========================
     Filter + Search + Sort
  =========================== */

  const filteredExpenses = useMemo(() => {
    let filtered = [...expenses];

    // Search
    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase();

      filtered = filtered.filter((expense) => {
        const title = expense?.title?.toLowerCase() || "";
        const description =
          expense?.description?.toLowerCase() || "";
        const category =
          expense?.category?.toLowerCase() || "";

        return (
          title.includes(search) ||
          description.includes(search) ||
          category.includes(search)
        );
      });
    }

    // Category
    if (category !== "All") {
      filtered = filtered.filter(
        (expense) => expense?.category === category
      );
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "highest":
          return Number(b.amount || 0) - Number(a.amount || 0);

        case "lowest":
          return Number(a.amount || 0) - Number(b.amount || 0);

        case "oldest":
          return (
            new Date(a.expense_date || 0) -
            new Date(b.expense_date || 0)
          );

        case "newest":
        default:
          return (
            new Date(b.expense_date || 0) -
            new Date(a.expense_date || 0)
          );
      }
    });

    return filtered;
  }, [expenses, searchTerm, category, sortBy]);

  /* ===========================
     Summary
  =========================== */

  const totalSpent = useMemo(() => {
    return filteredExpenses.reduce(
      (total, expense) =>
        total + Number(expense?.amount || 0),
      0
    );
  }, [filteredExpenses]);

  const highestExpense = useMemo(() => {
    if (!filteredExpenses.length) return 0;

    return Math.max(
      ...filteredExpenses.map((expense) =>
        Number(expense?.amount || 0)
      )
    );
  }, [filteredExpenses]);

  const averageExpense = useMemo(() => {
    if (!filteredExpenses.length) return 0;

    return totalSpent / filteredExpenses.length;
  }, [filteredExpenses, totalSpent]);

  /* ===========================
     Render
  =========================== */

  return (
   
  <div className="h-screen flex flex-col">
            {/* ===========================
          Header
      =========================== */}
<div
  className="
    shrink-0
    bg-[#0F1117]
    px-6
    pt-5
    pb-4
    border-b
    border-white/5
  "
>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="pt-1"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Expenses
            </h1>

            <p className="mt-0.5 text-xs text-gray-400">
              Track every rupee you spend
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={openAddModal}
            className="
              h-10
              w-10
              rounded-full
              bg-gradient-to-r
              from-indigo-600
              to-purple-600
              flex
              items-center
              justify-center
              shadow-lg
            "
          >
            <Plus
              size={18}
              className="text-white"
            />
          </motion.button>
        </div>
      </motion.div>

      {/* ===========================
          Summary Card
      =========================== */}

      {/* <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="
          mt-5
          rounded-3xl
          border
          border-white/5
          bg-[#1A1F2B]
          p-5
        "
      > */}
        {/* <div className="grid grid-cols-3 gap-4">

          <div>
            <p className="text-[11px] text-gray-400">
              Total
            </p>

            <h2 className="mt-2 text-2xl font-bold text-emerald-400">
              ₹{totalSpent.toLocaleString()}
            </h2>
          </div>

          <div className="text-center">
            <p className="text-[11px] text-gray-400">
              Highest
            </p>

            <h2 className="mt-2 text-lg font-semibold text-white">
              ₹{highestExpense.toLocaleString()}
            </h2>
          </div>

          <div className="text-right">
            <p className="text-[11px] text-gray-400">
              Average
            </p>

            <h2 className="mt-2 text-lg font-semibold text-white">
              ₹{averageExpense.toFixed(0)}
            </h2>
          </div>

        </div> */}
        <div className="mt-4 flex items-center justify-between rounded-xl bg-[#1A1F2B] px-4 py-3">
  <span className="text-sm font-semibold text-emerald-400">
    ₹{totalSpent.toLocaleString()}
  </span>

  <span className="text-xs text-gray-400">
    Highest ₹{highestExpense.toLocaleString()}
  </span>

  <span className="text-xs text-gray-400">
    Avg ₹{averageExpense.toFixed(0)}
  </span>
</div>
      {/* </motion.div> */}

      {/* ===========================
          Search
      =========================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="relative mt-5"
      >
        <Search
          size={18}
          className="
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-gray-500
          "
        />

        <input
          type="text"
          placeholder="Search expenses..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="
            w-full
            h-11
            rounded-xl
            border
            border-white/5
            bg-[#1A1F2B]
            pl-10
            pr-4
            text-sm
            text-white
            placeholder:text-gray-500
            outline-none
            transition-all
            focus:border-indigo-500
          "
        />
      </motion.div>
         {/* ===========================
          Categories
      =========================== */}

      <div className="mt-5 flex gap-2 overflow-x-auto scrollbar-hide pb-2">

        {categories.map((item) => (
          <motion.button
            key={item}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCategory(item)}
            className={`
              whitespace-nowrap
              rounded-full
              px-4
              py-2
              text-xs
              font-medium
              transition-all

              ${
                category === item
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                  : "bg-[#1A1F2B] border border-white/5 text-gray-300 hover:border-indigo-500/40"
              }
            `}
          >
            {item}
          </motion.button>
        ))}

      </div>

      {/* ===========================
          Sort & Count
      =========================== */}

      <div className="mt-1  flex items-center justify-between">

        <div>
          <p className="text-sm font-medium text-white">
            {filteredExpenses.length} Expense
            {filteredExpenses.length !== 1 ? "s" : ""}
          </p>

          <p className="text-xs text-gray-500">
            Showing filtered results
          </p>
        </div>

        <div
          className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-white/5
            bg-[#1A1F2B]
            px-3
          "
        >
          <ArrowDownUp
            size={15}
            className="text-gray-400"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="
              h-10
              bg-transparent
              text-sm
              text-white
              outline-none
              cursor-pointer
            "
          >
            <option value="newest">
              Newest
            </option>

            <option value="oldest">
              Oldest
            </option>

            <option value="highest">
              Highest Amount
            </option>

            <option value="lowest">
              Lowest Amount
            </option>
          </select>
        </div>

      </div>
</div>
      {/* ===========================
          Expense List
      =========================== */}
<div
  className="
    flex-1
    overflow-y-auto
    px-6
    pt-5
    pb-36
    scrollbar-hide
  "
>
      {loading ? (
        <div className="space-y-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <ExpenseCardSkeleton key={index} />
          ))}
        </div>
      ) : filteredExpenses.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            flex
            flex-col
            items-center
            justify-center
            rounded-3xl
            border
            border-dashed
            border-white/10
            bg-[#1A1F2B]
            py-16
            px-6
          "
        >
          <Search
            size={40}
            className="text-gray-500"
          />

          <h2 className="mt-5 text-xl font-bold text-white">
            No Expenses Found
          </h2>

          <p className="mt-2 text-center text-sm text-gray-400">
            Try changing your search or add a new expense.
          </p>

          <button
            onClick={openAddModal}
            className="
              mt-6
              rounded-xl
              bg-indigo-600
              px-5
              py-3
              text-sm
              font-medium
              text-white
            "
          >
            Add Expense
          </button>
        </motion.div>
      ) : (
        <div className="space-y-3">
                  {filteredExpenses.map((expense, index) => (
          <motion.div
            key={expense.id ?? index}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.25,
              delay: index * 0.05,
            }}
          >
            <ExpenseCard
              expense={expense}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </motion.div>
        ))}
      </div>
      )}
</div>
      {/* ===========================
          Floating Add Button
      =========================== */}

      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.92,
        }}
        onClick={openAddModal}
        className="
          fixed
          bottom-24
          left-1/2
          -translate-x-1/2
          z-40
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-gradient-to-r
          from-indigo-600
          to-purple-600
          shadow-[0_10px_35px_rgba(99,102,241,.45)]
        "
      >
        <Plus
          size={20}
          className="text-white"
        />
      </motion.button>
            {/* ===========================
          Add / Edit Expense Modal
      =========================== */}

      {openModal && (
        <Modal>
          <AddExpenseModal
            expense={selectedExpense}
            close={() => {
              setOpenModal(false);
              setSelectedExpense(null);
            }}
            onSuccess={async () => {
              await loadExpenses();

              setOpenModal(false);
              setSelectedExpense(null);
            }}
          />
        </Modal>
      )}
    </div>
  );
}