import {
  CalendarDays,
  Plus,
  Wallet,
} from "lucide-react";
import SectionCard from "./SectionCard";

function UpcomingBills() {
  return (
    <SectionCard
      title="Upcoming Bills"
      icon={<CalendarDays size={20} />}
    >
      <div className="mb-6">
        <p className="text-sm text-gray-400">
          Stay on top of your upcoming payments
        </p>
      </div>

      <div
        className="
          rounded-3xl
          border
          border-dashed
          border-white/10
          bg-white/5
          p-8
          text-center
        "
      >
        <div
          className="
            mx-auto
            mb-4
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-white/5
          "
        >
          <Wallet
            size={30}
            className="text-gray-500"
          />
        </div>

        <h3 className="text-lg font-semibold text-white">
          No Bill Reminders
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          Create reminders for electricity, internet,
          subscriptions, rent, EMI, and more.
        </p>

        <button
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            rounded-2xl
            bg-gradient-to-r
            from-orange-500
            to-orange-600
            px-5
            py-3
            font-semibold
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
          "
        >
          <Plus size={18} />
          Add Bill Reminder
        </button>
      </div>
    </SectionCard>
  );
}

export default UpcomingBills;