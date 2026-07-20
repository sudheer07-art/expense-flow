import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import WelcomeSlide from "./WelcomeSlide";
import InsightsSlide from "./InsightsSlide";
import BudgetSlide from "./BudgetSlide";

function Onboarding({ onLogin, onSignup }) {
  const [page, setPage] = useState(0);

  const next = () => {
    if (page < 2) {
      setPage((prev) => prev + 1);
    }
  };

  const previous = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -80) {
      next();
    }

    if (info.offset.x > 80) {
      previous();
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#0F1117]">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}
        >
          {page === 0 && (
            <WelcomeSlide
              onNext={next}
            />
          )}

          {page === 1 && (
            <InsightsSlide
              onNext={next}
            />
          )}

          {page === 2 && (
            <BudgetSlide
              onSignup={onSignup}
              onLogin={onLogin}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Onboarding;