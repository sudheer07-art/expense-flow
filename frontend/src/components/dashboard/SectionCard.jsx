import { motion } from "framer-motion";

function SectionCard({
  children,
  title,
  icon,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: .35,
      }}
      className="
      rounded-[28px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-2xl
      shadow-2xl
      p-5
      "
    >
      {title && (
        <div className="flex items-center gap-3 mb-5">

          <div className="
          h-11
          w-11
          rounded-2xl
          bg-white/5
          border
          border-white/10
          flex
          items-center
          justify-center
          ">
            {icon}
          </div>

          <h2 className="text-lg font-semibold">
            {title}
          </h2>

        </div>
      )}

      {children}
    </motion.div>
  );
}

export default SectionCard;