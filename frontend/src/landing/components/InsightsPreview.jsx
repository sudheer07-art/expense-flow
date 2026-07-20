import {
  ArrowDownRight,
  ChartColumn,
  UtensilsCrossed,
  Car,
  ShoppingBag,
  Receipt,
} from "lucide-react";

const categories = [
  {
    icon: UtensilsCrossed,
    name: "Food",
    amount: "₹8,400",
    width: "38%",
  },
  {
    icon: Car,
    name: "Travel",
    amount: "₹5,300",
    width: "28%",
  },
  {
    icon: ShoppingBag,
    name: "Shopping",
    amount: "₹3,900",
    width: "20%",
  },
  {
    icon: Receipt,
    name: "Bills",
    amount: "₹2,100",
    width: "14%",
  },
];

function InsightsPreview() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#171B23] p-6 shadow-2xl">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-gray-400">
            Monthly Insights
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Spending Report
          </h2>

        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/15">
          <ChartColumn
            size={26}
            className="text-indigo-400"
          />
        </div>

      </div>

      {/* Categories */}

      <div className="mt-8 space-y-5">

        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.name}>

              <div className="mb-2 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">

                    <Icon
                      size={18}
                      className="text-gray-300"
                    />

                  </div>

                  <span className="font-medium">
                    {item.name}
                  </span>

                </div>

                <span className="text-sm text-gray-400">
                  {item.amount}
                </span>

              </div>

              <div className="h-2 rounded-full bg-white/5">

                <div
                  className="h-2 rounded-full bg-indigo-500 transition-all duration-700"
                  style={{ width: item.width }}
                />

              </div>

            </div>
          );
        })}

      </div>

      {/* Footer */}

      <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">

        <div className="flex items-center gap-3">

          <ArrowDownRight
            size={20}
            className="text-emerald-400"
          />

          <div>

            <p className="font-medium">
              Great Job!
            </p>

            <p className="text-sm text-gray-400">
              You spent 12% less than last month.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default InsightsPreview;