import {
  TrendingUp,
  IndianRupee,
  Wallet,
  PieChart,
} from "lucide-react";

function Analytics() {
  const cards = [
    {
      title: "Total Expenses",
      value: "₹18,540",
      icon: IndianRupee,
      color: "bg-indigo-600",
    },
    {
      title: "Monthly Budget",
      value: "₹25,000",
      icon: Wallet,
      color: "bg-green-600",
    },
    {
      title: "Savings",
      value: "₹6,460",
      icon: TrendingUp,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-full p-5 pb-40">

      <h1 className="text-3xl font-bold text-white mb-8">
        Analytics
      </h1>

      <div className="space-y-5">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="bg-[#1B1C22] rounded-3xl p-5 border border-[#2A2B32]"
            >
              <div className="flex justify-between items-center">

                <div>
                  <p className="text-gray-400">
                    {card.title}
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    {card.value}
                  </h2>
                </div>

                <div
                  className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center`}
                >
                  <Icon size={28} />
                </div>

              </div>
            </div>
          );
        })}

        <div className="bg-[#1B1C22] rounded-3xl p-6 border border-[#2A2B32]">

          <div className="flex items-center gap-3 mb-6">
            <PieChart className="text-indigo-500" />
            <h2 className="text-xl font-semibold">
              Spending Overview
            </h2>
          </div>

          <div className="h-60 rounded-2xl border-2 border-dashed border-[#333] flex items-center justify-center text-gray-500">
            Charts Coming Soon
          </div>

        </div>

      </div>
    </div>
  );
}

export default Analytics;