import {
  Wallet,
  PieChart,
  ShieldCheck,
  Receipt,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Wallet,
    title: "Expense Tracking",
    description:
      "Quickly add, edit and organize your daily expenses with an intuitive interface.",
  },
  {
    icon: PieChart,
    title: "Smart Analytics",
    description:
      "Understand where your money goes with interactive charts and spending insights.",
  },
  {
    icon: Receipt,
    title: "Budget Planning",
    description:
      "Set monthly budgets and keep your spending under control with progress tracking.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Your financial data is protected using JWT authentication and secure APIs.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-indigo-400 font-semibold uppercase tracking-wider">
            Features
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Everything You Need
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-lg">
            ExpenseFlow provides powerful tools to help you
            manage expenses, track budgets, and improve your
            financial habits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                }}
                className="group rounded-3xl border border-white/10 bg-[#181C24] p-8 hover:border-indigo-500 transition-all hover:-translate-y-2"
              >
                <div className="h-16 w-16 rounded-2xl bg-indigo-600/20 flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition">
                  <Icon
                    size={30}
                    className="text-indigo-400 group-hover:text-white"
                  />
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;