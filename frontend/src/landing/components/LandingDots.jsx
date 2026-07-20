import { motion } from "framer-motion";

const colors = [
  "bg-orange-500",
  "bg-violet-500",
  "bg-emerald-500",
  "bg-indigo-500",
  "bg-pink-500",
  "bg-sky-500",
];

function LandingDots({
  current,
  total,
  onSelect,
}) {
  return (
    <div className="flex items-center justify-center gap-3">

      {Array.from({ length: total }).map((_, index) => {

        const active = current === index;

        return (
          <motion.button
            key={index}
            onClick={() => onSelect(index)}
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.15 }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className={`
              relative
              flex
              items-center
              justify-center
              rounded-full
              transition-all
              duration-300
              ${
                active
                  ? "w-10 h-3"
                  : "w-3 h-3 bg-white/20"
              }
            `}
          >

            {active && (

              <motion.div
                layoutId="landing-dot"
                className={`
                  absolute
                  inset-0
                  rounded-full
                  ${colors[index]}
                `}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 28,
                }}
              />

            )}

          </motion.button>
        );

      })}

    </div>
  );
}

export default LandingDots;