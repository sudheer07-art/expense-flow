// import {
//   Bell,
//   Search,
//   LogOut,
//   ChevronDown,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useState, useRef, useEffect } from "react";
// import { useAuth } from "../../context/AuthContext";

// function DashboardHeader({
//   onLoginClick,
//   onSignupClick,
// }) {
//   const { isAuthenticated, user, logout } = useAuth();
//   const navigate = useNavigate();

//   const [showMenu, setShowMenu] = useState(false);
//   const menuRef = useRef(null);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setShowMenu(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
// const handleLogout = () => {
//   logout();
//   setShowMenu(false);

//   navigate("/", {
//     replace: true,
//   });
// };
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const hour = new Date().getHours();

//   let greeting = "Good Evening";

//   if (hour < 12) greeting = "Good Morning";
//   else if (hour < 17) greeting = "Good Afternoon";

//   return (
//     <div className="flex items-center justify-between mb-8">
//       <div>
//         <p className="text-sm text-gray-400">
//           {greeting}
//           {isAuthenticated && user?.name
//             ? `, ${user.name.split(" ")[0]} 👋`
//             : " 👋"}
//         </p>

//         <h1 className="text-3xl font-bold text-white mt-1">
//           ExpenseFlow
//         </h1>

//         <p className="text-sm text-gray-500 mt-1">
//           Manage your money smarter.
//         </p>
//       </div>

//       {!isAuthenticated ? (
//         <div className="flex items-center gap-3">
//           <button
//             onClick={onLoginClick}
//             className="px-4 py-2 rounded-xl border border-gray-700 hover:border-indigo-500 transition"
//           >
//             Login
//           </button>

//           <button
//             onClick={onSignupClick}
//             className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition"
//           >
//             Sign Up
//           </button>
//         </div>
//       ) : (
//         <div
//           ref={menuRef}
//           className="relative flex items-center gap-3"
//         >
//           <button
//             className="h-11 w-11 rounded-2xl bg-[#181C24] border border-white/10 flex items-center justify-center hover:bg-[#212633] transition"
//           >
//             <Search size={18} />
//           </button>

//           <button
//             className="relative h-11 w-11 rounded-2xl bg-[#181C24] border border-white/10 flex items-center justify-center hover:bg-[#212633] transition"
//           >
//             <Bell size={18} />

//             <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
//           </button>

//           <button
//             onClick={() => setShowMenu((prev) => !prev)}
//             className="flex items-center gap-2"
//           >
//             <div className="w-11 h-11 rounded-2xl bg-indigo-600 flex items-center justify-center font-semibold hover:bg-indigo-500 transition">
//               {user?.name?.trim()?.charAt(0)?.toUpperCase() ?? "U"}
//             </div>

//             <ChevronDown
//               size={16}
//               className={`transition-transform ${
//                 showMenu ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           {showMenu && (
//             <div className="absolute right-0 top-14 w-52 rounded-2xl bg-[#181C24] border border-white/10 shadow-2xl overflow-hidden z-50">
//               <div className="px-4 py-3 border-b border-white/10">
//                 <p className="text-sm font-semibold text-white">
//                   {user?.name}
//                 </p>
//                 <p className="text-xs text-gray-400">
//                   {user?.email}
//                 </p>
//               </div>

//               <button
//                onClick={handleLogout}
//                 className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-[#252A36] transition"
//               >
//                 <LogOut size={18} />
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default DashboardHeader;
import {
  Bell,
  Search,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../context/useAuth";

function DashboardHeader({
  onLoginClick,
  onSignupClick,
}) {
  const navigate = useNavigate();

  const {
    isAuthenticated,
    user,
    logout,
  } = useAuth();

  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // Logout
  const handleLogout = () => {
    setShowMenu(false);

    logout();

    navigate("/", {
      replace: true,
    });
  };

  // Greeting
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  }

  return (
    <div className="mb-8 flex items-center justify-between">
      {/* Left */}

      <div>
      
        <h1 className="mt-1 text-2xl font-bold text-white">
          ExpenseFlow
        </h1>

        {/* <p className="mt-1 text-sm text-gray-500">
          Manage your money smarter.
        </p> */}
      </div>

      {/* Right */}

      {!isAuthenticated ? (
        <div className="flex items-center gap-3">
          <button
            onClick={onLoginClick}
            className="rounded-xl border border-gray-700 px-4 py-2 transition hover:border-indigo-500"
          >
            Login
          </button>

          <button
            onClick={onSignupClick}
            className="rounded-xl bg-indigo-600 px-4 py-2 transition hover:bg-indigo-500"
          >
            Sign Up
          </button>
        </div>
      ) : (
        <div
          ref={menuRef}
          className="relative flex items-center gap-3"
        >
          {/* Search */}

          {/* <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#181C24] transition hover:bg-[#212633]">
            <Search size={18} />
          </button>

          {/* Notifications */}

          {/* <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#181C24] transition hover:bg-[#212633]">
            <Bell size={18} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </button> */} 

          {/* Avatar */}

          <button
            onClick={() =>
              setShowMenu(!showMenu)
            }
            className="flex items-center gap-2"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 font-semibold transition hover:bg-indigo-500">
              {user?.name?.charAt(0).toUpperCase() ??
                "U"}
            </div>

            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                showMenu
                  ? "rotate-180"
                  : ""
              }`}
            />
          </button>

          {/* Dropdown */}

          {showMenu && (
            <div className="absolute right-0 top-14 z-50 w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#181C24] shadow-2xl">
              <div className="border-b border-white/10 px-4 py-3">
                <p className="font-semibold text-white">
                  {user?.name}
                </p>

                <p className="text-xs text-gray-400">
                  {user?.email}
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 px-4 py-3 text-red-400 transition hover:bg-[#252A36]"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DashboardHeader;