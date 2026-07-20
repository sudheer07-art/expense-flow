import { motion } from "framer-motion";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 420 : -420,
    opacity: 0,
    scale: 0.96,
  }),

  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },

  exit: (direction) => ({
    x: direction > 0 ? -420 : 420,
    opacity: 0,
    scale: 0.96,
  }),
};

const swipeConfidenceThreshold = 120;
const swipePower = (offset, velocity) =>
  Math.abs(offset) * velocity;

function SwipeContainer({
  children,
  direction = 1,
  onNext,
  onPrevious,
}) {
  return (
    <motion.div
      className="h-full w-full"
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: {
          type: "spring",
          stiffness: 300,
          damping: 28,
        },
        opacity: {
          duration: 0.18,
        },
      }}
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      dragElastic={0.18}
      whileDrag={{
        scale: 0.98,
      }}
      onDragEnd={(e, info) => {
        const swipe = swipePower(
          info.offset.x,
          info.velocity.x
        );

        if (swipe < -swipeConfidenceThreshold) {
          onNext();
          return;
        }

        if (swipe > swipeConfidenceThreshold) {
          onPrevious();
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export default SwipeContainer;