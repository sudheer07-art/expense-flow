import { ArrowRight, Wallet } from "lucide-react";
import { motion } from "framer-motion";

function WelcomeScreen({ onLogin, onSignup }) {
  return (
    <div className="min-h-screen bg-[#0F1117] text-white flex justify-center">
      <div className="w-full max-w-md min-h-screen px-6 flex flex-col">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-16 flex flex-col items-center"
        >
          <div className="h-20 w-20 rounded-3xl bg-indigo-600 flex items-center justify-center shadow-xl">
            <Wallet size={38} />
          </div>

          <h1 className="text-3xl font-bold mt-6">
            ExpenseFlow
          </h1>

          <p className="text-gray-400 mt-2 text-center">
            Smart Expense Tracker
          </p>
        </motion.div>

        {/* Illustration */}
        <motion.div
    initial={{opacity:0,y:30}}
    animate={{opacity:1,y:0}}
    transition={{delay:.2}}
    className="my-10"
>

<div className="rounded-[32px] bg-[#181C24] border border-white/10 p-6">

<p className="text-gray-400 text-sm">
Total Balance
</p>

<h2 className="text-5xl font-bold mt-3">
₹25,430
</h2>

<div className="grid grid-cols-2 gap-4 mt-8">

<div className="rounded-2xl bg-[#232936] p-4">

<p className="text-gray-400 text-xs">
Income
</p>

<p className="text-emerald-400 text-2xl font-bold mt-2">
+₹18,000
</p>

</div>

<div className="rounded-2xl bg-[#232936] p-4">

<p className="text-gray-400 text-xs">
Expense
</p>

<p className="text-red-400 text-2xl font-bold mt-2">
-₹7,500
</p>

</div>

</div>

</div>

</motion.div>
<div className="space-y-4">

<h3 className="font-semibold text-lg">
Today's Spending
</h3>

<div className="rounded-2xl bg-[#181C24] p-4 flex justify-between">
<span>🍔 Food</span>
<span>₹450</span>
</div>

<div className="rounded-2xl bg-[#181C24] p-4 flex justify-between">
<span>🚗 Travel</span>
<span>₹820</span>
</div>

<div className="rounded-2xl bg-[#181C24] p-4 flex justify-between">
<span>💡 Bills</span>
<span>₹1200</span>
</div>

</div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="pb-10"
        >
          <h2 className="text-3xl font-bold">
            Track Every Rupee.
          </h2>

          <p className="text-gray-400 mt-4 leading-7">
            Manage your expenses, control your budget and
            understand your spending with one beautiful app.
          </p>

          <button
            onClick={onSignup}
            className="mt-8 w-full h-14 rounded-2xl bg-indigo-600 font-semibold flex items-center justify-center gap-2 hover:bg-indigo-500 transition"
          >
            Get Started
            <ArrowRight size={18} />
          </button>

          <button
            onClick={onLogin}
            className="mt-4 w-full h-14 rounded-2xl border border-white/10 hover:border-indigo-500 transition"
          >
            Login
          </button>
        </motion.div>

      </div>
    </div>
  );
}

export default WelcomeScreen;