import {
  Receipt,
  BarChart3,
  FileText,
  Target,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const actions = [
  {
    title: "Expenses",
    icon: Receipt,
  },
  {
    title: "Analytics",
    icon: BarChart3,
  },
  {
    title: "Reports",
    icon: FileText,
  },
  {
    title: "Budget",
    icon: Target,
  },
];

function QuickActions({onAddExpense}) {
     const navigate = useNavigate();
  return (
    <div className="mt-8">

      <h2 className="text-lg font-semibold mb-4">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
  key={action.title}
  onClick={() => {
  if (action.title === "Expenses") {
    navigate("/expenses");
  }

  }}
  className="
    bg-[#1B1C22]
    border
    border-[#2A2B32]
    rounded-3xl
    p-5
    flex
    flex-col
    items-center
    gap-3
    transition
    hover:scale-[1.03]
    active:scale-95
  "
>
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center">
                <Icon size={22} />
              </div>

              <span className="font-medium">
                {action.title}
              </span>
            </button>
          );
        })}

      </div>

    </div>
  );
}

export default QuickActions;