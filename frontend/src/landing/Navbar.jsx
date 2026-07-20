import { Wallet } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0F1117]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-indigo-600 flex items-center justify-center">
            <Wallet size={22} className="text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold">ExpenseFlow</h1>
            <p className="text-xs text-gray-400">
              Smart Expense Tracker
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-gray-300">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>

          <a href="#preview" className="hover:text-white transition">
            Preview
          </a>

          <a href="#how-it-works" className="hover:text-white transition">
            How it Works
          </a>

          <a href="#faq" className="hover:text-white transition">
            FAQ
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 rounded-xl border border-white/10 hover:border-indigo-500 transition">
            Login
          </button>

          <button className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-medium">
            Get Started
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;