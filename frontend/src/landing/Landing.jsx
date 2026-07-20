import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import SwipeContainer from "./components/SwipeContainer";
import BackgroundShapes from "./components/BackgroundShapes";
import LandingFooter from "./components/LandingFooter";

import ExpensesPage from "./pages/ExpensesPage";
import InsightsPage from "./pages/InsightsPage";
import BudgetPage from "./pages/BudgetPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import ReportsPage from "./pages/ReportsPage";
import BillsPage from "./pages/BillsPage";

import LoginModal from "../components/auth/LoginModal";
import SignupModal from "../components/auth/SignupModal";

function Landing() {
  const [showFooter, setShowFooter] = useState(true);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const [[page, direction], setPage] = useState([0, 0]);

  const pages = [
    <ExpensesPage
      key="expenses"
      setShowFooter={setShowFooter}
    />,
    <InsightsPage key="insights" />,
    <BudgetPage key="budget" />,
    <AnalyticsPage key="analytics" />,
    <ReportsPage key="reports" />,
    <BillsPage key="bills" />,
  ];

  const nextPage = () => {
    if (page >= pages.length - 1) return;
    setPage([page + 1, 1]);
  };

  const previousPage = () => {
    if (page <= 0) return;
    setPage([page - 1, -1]);
  };

  const goToPage = (index) => {
    if (index === page) return;
    setPage([index, index > page ? 1 : -1]);
  };

  return (
    <div className="relative flex h-screen w-full justify-center overflow-hidden bg-[#070B14] text-white">
      <BackgroundShapes />

      <div className="relative h-full w-full max-w-[390px] overflow-hidden border-x border-white/5">
        {/* Pages */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <SwipeContainer
              key={page}
              direction={direction}
              onNext={nextPage}
              onPrevious={previousPage}
            >
              {pages[page]}
            </SwipeContainer>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <AnimatePresence>
          {showFooter && (
            <LandingFooter
              currentPage={page}
              totalPages={pages.length}
              onLogin={() => setShowLogin(true)}
              onSignup={() => setShowSignup(true)}
              onSelectPage={goToPage}
            />
          )}
        </AnimatePresence>

        {/* Login Modal */}
        <AnimatePresence>
          {showLogin && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ y: 40, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 40, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <LoginModal
                  close={() => setShowLogin(false)}
                  switchToSignup={() => {
                    setShowLogin(false);
                    setShowSignup(true);
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Signup Modal */}
        <AnimatePresence>
          {showSignup && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ y: 40, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 40, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <SignupModal
                  close={() => setShowSignup(false)}
                  switchToLogin={() => {
                    setShowSignup(false);
                    setShowLogin(true);
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Landing;