import { memo } from "react";
import { motion } from "framer-motion";
import {
  Pencil,
  Trash2,
  UtensilsCrossed,
  Car,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Tv,
  Receipt,
  Wallet,
  CalendarDays,
  IndianRupee,
} from "lucide-react";

const categoryMap = {
  Food: {
    icon: UtensilsCrossed,
    bg: "bg-orange-500/10",
    text: "text-orange-400",
  },

  Travel: {
    icon: Car,
    bg: "bg-sky-500/10",
    text: "text-sky-400",
  },

  Shopping: {
    icon: ShoppingBag,
    bg: "bg-pink-500/10",
    text: "text-pink-400",
  },

  Bills: {
    icon: Receipt,
    bg: "bg-yellow-500/10",
    text: "text-yellow-400",
  },

  Health: {
    icon: HeartPulse,
    bg: "bg-red-500/10",
    text: "text-red-400",
  },

  Education: {
    icon: GraduationCap,
    bg: "bg-violet-500/10",
    text: "text-violet-400",
  },

  Entertainment: {
    icon: Tv,
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
  },

  Other: {
    icon: Wallet,
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
  },
};

function ExpenseCard({
  expense,
  onEdit,
  onDelete,
}) {
  if (!expense) return null;

  const {
    id,
    title,
    amount,
    category,
    description,
    expense_date,
  } = expense;

  const current =
    categoryMap[category] ||
    categoryMap.Other;

  const Icon = current.icon;

  const formattedAmount = Number(
    amount || 0
  ).toLocaleString("en-IN");

  const formattedDate = expense_date
    ? new Date(expense_date).toLocaleDateString(
        "en-IN",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      )
    : "--";
      return (
    <motion.div
      whileHover={{
        y: -2,
        scale: 1.01,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        overflow-hidden
        rounded-2xl
        border
        border-white/5
        bg-[#1A1F2B]
        shadow-lg
      "
    >
      <div className="flex items-center justify-between p-4">

        {/* Left Section */}

        <div className="flex flex-1 items-start gap-3">

          <div
            className={`
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              ${current.bg}
            `}
          >
            <Icon
              size={22}
              className={current.text}
            />
          </div>

          <div className="min-w-0 flex-1">

            <h3 className="truncate text-base font-semibold text-white">
              {title || "Untitled Expense"}
            </h3>

            {description && (
              <p className="mt-1 truncate text-xs text-gray-400">
                {description}
              </p>
            )}

            <div className="mt-3 flex flex-wrap items-center gap-2">

              <span
                className={`
                  rounded-full
                  px-3
                  py-1
                  text-[10px]
                  font-medium
                  ${current.bg}
                  ${current.text}
                `}
              >
                {category || "Other"}
              </span>

              <span className="flex items-center gap-1 text-[11px] text-gray-500">
                <CalendarDays size={12} />
                {formattedDate}
              </span>

            </div>

          </div>

        </div>

        {/* Right Section */}

        <div className="ml-4 flex flex-col items-end">

          <div className="flex items-center gap-1">

            <IndianRupee
              size={15}
              className="text-emerald-400"
            />

            <h2 className="text-lg font-bold text-emerald-400">
              {formattedAmount}
            </h2>

          </div>

          <div className="mt-4 flex gap-2">
                        <button
              onClick={() => onEdit(expense)}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-indigo-500/10
                text-indigo-400
                transition-all
                hover:bg-indigo-500/20
                active:scale-95
              "
              aria-label="Edit Expense"
            >
              <Pencil size={16} />
            </button>

            <button
              onClick={() => onDelete(id)}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-red-500/10
                text-red-400
                transition-all
                hover:bg-red-500/20
                active:scale-95
              "
              aria-label="Delete Expense"
            >
              <Trash2 size={16} />
            </button>

          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default memo(ExpenseCard);
// export default function ExpenseCard({ expense }) {
//   return (
//     <div
//       style={{
//         background: "red",
//         color: "white",
//         padding: "20px",
//         marginBottom: "10px",
//         borderRadius: "10px",
//       }}
//     >
//       <h2>{expense.title}</h2>

//       <p>{expense.amount}</p>

//       <p>{expense.category}</p>

//       <p>{expense.expense_date}</p>
//     </div>
//   );
// }