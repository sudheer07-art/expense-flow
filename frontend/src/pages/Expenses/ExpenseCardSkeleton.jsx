import { motion } from "framer-motion";

export default function ExpenseCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.45, 1, 0.45] }}
      transition={{
        duration: 1.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        rounded-2xl
        border
        border-white/5
        bg-[#1A1F2B]
        p-4
        overflow-hidden
      "
    >
      <div className="flex items-start justify-between">

        {/* Left */}

        <div className="flex flex-1 gap-3">

          {/* Icon */}

          <div
            className="
              h-12
              w-12
              rounded-xl
              bg-white/10
              shrink-0
            "
          />

          {/* Text */}

          <div className="flex-1">

            <div
              className="
                h-4
                w-36
                rounded
                bg-white/10
              "
            />

            <div
              className="
                mt-3
                h-3
                w-52
                rounded
                bg-white/10
              "
            />

            <div className="mt-4 flex gap-2">

              <div
                className="
                  h-6
                  w-16
                  rounded-full
                  bg-white/10
                "
              />

              <div
                className="
                  h-6
                  w-20
                  rounded-full
                  bg-white/10
                "
              />

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="ml-4 flex flex-col items-end">

          <div
            className="
              h-5
              w-20
              rounded
              bg-white/10
            "
          />

          <div className="mt-4 flex gap-2">

            <div
              className="
                h-9
                w-9
                rounded-xl
                bg-white/10
              "
            />

            <div
              className="
                h-9
                w-9
                rounded-xl
                bg-white/10
              "
            />

          </div>

        </div>

      </div>
    </motion.div>
  );
}