import { motion } from "framer-motion";

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -40, opacity: 0 }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;