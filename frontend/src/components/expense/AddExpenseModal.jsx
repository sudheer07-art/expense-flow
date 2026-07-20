import { useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  IndianRupee,
  FileText,
  Calendar,
  Tag,
  AlignLeft,
  Check,
} from "lucide-react";

import {
  createExpense,
  updateExpense,
} from "../../services/expenseService";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function AddExpenseModal({
  close,
  onSuccess,
  expense = null,
}) {
  const [form, setForm] = useState({
    title: expense?.title || "",
    amount: expense?.amount || "",
    category: expense?.category || "Food",
    description: expense?.description || "",
    expense_date:
      expense?.expense_date ||
      new Date().toISOString().split("T")[0],
  });

  const [loading, setLoading] = useState(false);

  const categories = [
    "Food",
    "Travel",
    "Shopping",
    "Bills",
    "Entertainment",
    "Health",
    "Education",
    "Other",
  ];

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (!form.title.trim() || !form.amount) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        ...form,
        amount: Number(form.amount),
      };

      if (expense) {
        await updateExpense(expense.id, payload);
      } else {
        await createExpense(payload);
      }

      onSuccess?.();
      close?.();
    } catch (err) {
      console.error(err);
      alert("Unable to save expense.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = `
    w-full
    h-14
    rounded-2xl
    bg-[#23252F]
    border
    border-white/5
    pl-12
    pr-4
    text-[15px]
    text-white
    placeholder:text-gray-500
    outline-none
    transition-all
    duration-300
    focus:border-indigo-500
    focus:ring-4
    focus:ring-indigo-500/20
    hover:border-white/10
  `;

  return (
    <motion.div
      initial={{
        y: 700,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: 700,
        opacity: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 30,
      }}
      className="
        relative
       w-[330px]
        max-w-[92vw]
        max-h-[88vh]
        mb-0
        overflow-hidden
        rounded-t-[30px]
        bg-[#181A20]
        border-t
        border-white/10
        shadow-[0_-30px_80px_rgba(0,0,0,.55)]
      "
    >
      {/* Drag Handle */}

     <div className="
flex
justify-center
pt-4
pb-2
bg-[#181A20]
">

        <div className="flex justify-center">

          <motion.div
            layoutId="sheetHandle"
            className="
              h-1.5
              w-14
              rounded-full
              bg-gray-500
            "
          />

        </div>

      </div>

      {/* Close Button */}

      <button
        onClick={close}
        className="
          absolute
          top-5
          right-5
          z-40
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/5
          bg-white/5
          backdrop-blur-xl
          transition-all
          duration-300
          hover:bg-white/10
          hover:rotate-90
          active:scale-90
        "
      >
        <X size={18} />
      </button>

      <div
        className="
          max-h-[80vh]
          overflow-y-auto
          px-6
          pb-8
          scrollbar-hide
        "
      >

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
                    <motion.div
            variants={itemVariants}
            className="mb-7"
          >
            <h2 className="text-3xl font-bold text-white">
              {expense ? "Edit Expense" : "Add Expense"}
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Track every rupee with a beautiful and organized expense log.
            </p>
          </motion.div>

          {/* Title */}

          <motion.div
            variants={itemVariants}
            className="relative mb-5"
          >
            <FileText
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-500
                pointer-events-none
              "
            />

            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Expense title"
              className={inputClass}
            />
          </motion.div>

          {/* Amount */}

          <motion.div
            variants={itemVariants}
            className="relative mb-5"
          >
            <IndianRupee
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-500
                pointer-events-none
              "
            />

            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="Amount"
              className={inputClass}
            />
          </motion.div>

          {/* Category */}

          <motion.div
            variants={itemVariants}
            className="relative mb-5"
          >
            <Tag
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-500
                pointer-events-none
              "
            />

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className={inputClass}
            >
              {categories.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </motion.div>
                    {/* Date */}

          <motion.div
            variants={itemVariants}
            className="relative mb-5"
          >
            <Calendar
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-500
                pointer-events-none
              "
            />

            <input
              type="date"
              name="expense_date"
              value={form.expense_date}
              onChange={handleChange}
              className={inputClass}
            />
          </motion.div>

          {/* Description */}

          <motion.div
            variants={itemVariants}
            className="relative mb-8"
          >
            <AlignLeft
              size={18}
              className="
                absolute
                left-4
                top-4
                text-gray-500
                pointer-events-none
              "
            />

            <textarea
              rows={5}
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Add a note (optional)"
              className="
                w-full
                rounded-2xl
                bg-[#23252F]
                border
                border-white/5
                pl-12
                pr-4
                py-4
                text-[15px]
                text-white
                placeholder:text-gray-500
                outline-none
                resize-none
                transition-all
                duration-300
                focus:border-indigo-500
                focus:ring-4
                focus:ring-indigo-500/20
                hover:border-white/10
              "
            />
          </motion.div>

          {/* Sticky Bottom Actions */}

          <motion.div
            variants={itemVariants}
            className="
              sticky
              bottom-0
              left-0
              right-0
              bg-[#181A20]
              pt-4
              pb-2
              border-t
              border-white/5
            "
          >
            <div className="flex gap-3">

              <button
                onClick={close}
                className="
                  flex-1
                  h-14
                  rounded-2xl
                  border
                  border-white/10
                  text-gray-300
                  font-medium
                  transition-all
                  duration-300
                  hover:bg-white/5
                  active:scale-95
                "
              >
                Cancel
              </button>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={handleSubmit}
                disabled={loading}
                className="
                  flex-1
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-indigo-600
                  via-violet-600
                  to-purple-600
                  text-white
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  shadow-xl
                  disabled:opacity-60
                "
              >
                {loading ? (
                  "Saving..."
                ) : (
                  <>
                    <Check size={18} />

                    {expense
                      ? "Update Expense"
                      : "Save Expense"}
                  </>
                )}
              </motion.button>

            </div>
          </motion.div>

        </motion.div>

      </div>

    </motion.div>
  );
}