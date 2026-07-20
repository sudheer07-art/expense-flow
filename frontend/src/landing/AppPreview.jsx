import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownRight,
  CreditCard,
  PieChart,
} from "lucide-react";

function AppPreview() {
  return (
    <section
      id="preview"
      className="py-28 px-6 bg-[#131720]"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-indigo-400 uppercase font-semibold tracking-widest">
            Dashboard Preview
          </span>

          <h2 className="mt-4 text-5xl font-bold leading-tight">
            Beautiful Dashboard.
            <br />
            Powerful Insights.
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-8">
            View balances, analyze spending, monitor monthly budgets,
            and understand your financial habits from one modern,
            easy-to-use dashboard.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">
              <ArrowUpRight className="text-green-400" />
              <span>Track Income & Expenses</span>
            </div>

            <div className="flex items-center gap-4">
              <PieChart className="text-indigo-400" />
              <span>Interactive Charts & Reports</span>
            </div>

            <div className="flex items-center gap-4">
              <CreditCard className="text-yellow-400" />
              <span>Budget & Spending Goals</span>
            </div>

            <div className="flex items-center gap-4">
              <ArrowDownRight className="text-red-400" />
              <span>Monitor Monthly Spending</span>
            </div>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >

          {/* Glow */}
          <div className="absolute inset-0 bg-indigo-500/20 blur-[90px] rounded-full" />

          {/* Dashboard Card */}
          <div className="relative rounded-[36px] border border-white/10 bg-[#181C24] p-8 shadow-2xl">

            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-400 text-sm">
                  Current Balance
                </p>

                <h2 className="text-4xl font-bold mt-2">
                  ₹42,580
                </h2>
              </div>

              <div className="bg-indigo-600 rounded-2xl p-4">
                <CreditCard size={28} />
              </div>

            </div>

            {/* Fake Chart */}
            <div className="mt-10">

              <div className="flex items-end justify-between h-48">

                {[50, 80, 40, 110, 90, 140, 100].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      whileInView={{ height }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                      }}
                      className="w-8 rounded-full bg-gradient-to-t from-indigo-600 to-cyan-400"
                    />
                  )
                )}

              </div>

              <div className="flex justify-between mt-4 text-sm text-gray-500">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>

            </div>

            {/* Recent Expenses */}

            <div className="mt-10 space-y-4">

              {[
                ["🍔 Food", "₹650"],
                ["⛽ Fuel", "₹1,250"],
                ["🎬 Entertainment", "₹420"],
              ].map(([title, amount]) => (
                <div
                  key={title}
                  className="flex justify-between rounded-2xl bg-[#232936] px-5 py-4"
                >
                  <span>{title}</span>
                  <span>{amount}</span>
                </div>
              ))}

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default AppPreview;