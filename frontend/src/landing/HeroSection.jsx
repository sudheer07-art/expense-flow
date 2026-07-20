import { ArrowRight, PlayCircle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[450px] w-[450px] rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            🚀 Personal Finance Made Simple
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight">
            Track Every
            <span className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Rupee.
            </span>
            Grow Every Day.
          </h1>

          <p className="mt-8 text-lg text-gray-400 leading-8 max-w-xl">
            ExpenseFlow helps you organize expenses, monitor spending,
            plan budgets, and visualize your financial habits in one
            beautiful dashboard.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-2xl bg-indigo-600 px-7 py-4 font-semibold hover:bg-indigo-500 transition">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-2 rounded-2xl border border-white/10 px-7 py-4 hover:border-indigo-500 transition">
              <PlayCircle size={20} />
              Live Demo
            </button>
          </div>

          <div className="mt-12 flex gap-10">
            <div>
              <h3 className="text-3xl font-bold">10K+</h3>
              <p className="text-gray-500">Expenses Managed</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">99.9%</h3>
              <p className="text-gray-500">Secure</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="text-gray-500">Available</p>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Floating Card */}
          <div className="absolute -top-6 -left-6 rounded-2xl bg-emerald-500 px-4 py-3 shadow-xl">
            <div className="flex items-center gap-2">
              <TrendingUp size={18} />
              <span className="font-semibold">+18%</span>
            </div>
          </div>

          {/* Phone */}
          <div className="w-[320px] rounded-[40px] border border-white/10 bg-[#181C24] p-6 shadow-2xl">

            <div className="text-center mb-6">
              <h3 className="font-bold text-xl">ExpenseFlow</h3>
              <p className="text-gray-500 text-sm">
                Monthly Overview
              </p>
            </div>

            <div className="rounded-3xl bg-indigo-600 p-6">
              <p className="text-sm opacity-80">
                Total Balance
              </p>

              <h2 className="mt-2 text-4xl font-bold">
                ₹25,430
              </h2>
            </div>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between rounded-2xl bg-[#222834] p-4">
                <span>🍔 Food</span>
                <span>₹450</span>
              </div>

              <div className="flex justify-between rounded-2xl bg-[#222834] p-4">
                <span>🚗 Travel</span>
                <span>₹1200</span>
              </div>

              <div className="flex justify-between rounded-2xl bg-[#222834] p-4">
                <span>💡 Bills</span>
                <span>₹850</span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default HeroSection;