import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Receipt,
  Wallet,
  BarChart3,
  UserRound,
} from "lucide-react";

const items = [
  {
    label: "Home",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Expenses",
    path: "/expenses",
    icon: Receipt,
  },
  {
    label: "Budget",
    path: "/budget",
    icon: Wallet,
  },
  {
    label: "Reports",
    path: "/reports",
    icon: BarChart3,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: UserRound,
  },
];

function BottomNavigation() {
  return (
    <nav
      className="
      rounded-3xl
      border
      border-white/10
      bg-[#181C24]
      shadow-xl
      "
    >
      <div className="grid grid-cols-5">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                flex
                flex-col
                items-center
                justify-center
                py-3
                transition-all
                ${
                  isActive
                    ? "text-indigo-400"
                    : "text-gray-500 hover:text-gray-300"
                }
                `
              }
            >
              <Icon size={22} />

              <span className="mt-1 text-[11px] font-medium">
                {item.label}
              </span>
            </NavLink>
          );
        })}

      </div>
    </nav>
  );
}

export default BottomNavigation;