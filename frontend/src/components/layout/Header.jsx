import { Bell, ChevronDown, LogOut, User, Settings } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useState, useRef, useEffect } from "react";

function Header({
  onLoginClick,
  onSignupClick,
}) {
  const { isAuthenticated, user, logout } = useAuth();

const [showMenu, setShowMenu] = useState(false);
const menuRef = useRef(null);
useEffect(() => {
  function handleClickOutside(event) {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setShowMenu(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);

  return (
    <header className="flex items-center justify-between mb-8">

      {/* Logo */}

      <div>
        <h1 className="text-2xl font-bold">
          ExpenseFlow
        </h1>

        <p className="text-sm text-gray-400">
          Smart Expense Manager
        </p>
      </div>

      {/* Right Side */}

      {!isAuthenticated ? (

        <div className="flex gap-3">

          <button
            onClick={onLoginClick}
            className="
              px-4
              py-2
              rounded-xl
              border
              border-gray-700
              hover:border-indigo-500
            "
          >
            Login
          </button>

          <button
            onClick={onSignupClick}
            className="
              px-4
              py-2
              rounded-xl
              bg-indigo-600
              hover:bg-indigo-500
            "
          >
            Sign Up
          </button>

        </div>

      ) : (

        // <div className="relative flex items-center gap-4">
        <div
  ref={menuRef}
  className="relative flex items-center gap-4"
>

  <Bell className="cursor-pointer" />

  <button
    onClick={() => setShowMenu(!showMenu)}
    className="flex items-center gap-2"
  >
    <div
      className="
        w-10
        h-10
        rounded-full
        bg-indigo-600
        flex
        items-center
        justify-center
        font-bold
      "
    >
      {user?.name?.charAt(0).toUpperCase() || "U"}
    </div>

    <ChevronDown size={18} />
  </button>

  {showMenu && (
    <div
      className="
        absolute
        right-0
        top-14
        w-56
        rounded-xl
        bg-[#1f1f1f]
        border
        border-gray-700
        shadow-xl
        z-50
      "
    >
      <button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-800">
        <User size={18} />
        My Profile
      </button>

      <button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-800">
        <Settings size={18} />
        Settings
      </button>

      <hr className="border-gray-700" />

      <button
        onClick={() => {
          logout();
          setShowMenu(false);
        }}
        className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-gray-800"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  )}

</div>

      )}

    </header>
  );
}

export default Header;