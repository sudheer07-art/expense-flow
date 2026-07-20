import { useEffect, useState } from "react";
import { useAuth } from "../../context/useAuth";
import { getDashboardSummary } from "../../services/dashboardService";
import { getExpenses } from "../../services/expenseService";

import AddExpenseModal from "../../components/expense/AddExpenseModal";
import AuthOverlay from "../../components/auth/AuthOverlay";
import LoginModal from "../../components/auth/LoginModal";
import SignupModal from "../../components/auth/SignupModal";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import BalanceCard from "../../components/dashboard/BalanceCard";
import FinancialInsights from "../../components/dashboard/FinancialInsights";
import UpcomingBills from "../../components/dashboard/UpcomingBills";
import RecentTransactions from "../../components/dashboard/RecentTransactions";
// import WeeklyChart from "../../components/dashboard/WeeklyChart";

function Dashboard() {
  const [summary, setSummary] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [loadingSummary, setLoadingSummary] = useState(true);
const { isAuthenticated } = useAuth();
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
const [showSignup, setShowSignup] = useState(false);

  const loadDashboard = async () => {
    setLoadingSummary(true);
    try {
      const [summaryData, expenseData] = await Promise.all([
        getDashboardSummary(),
        getExpenses(1, 5),
      ]);

      setSummary(summaryData);
      console.log(summaryData);
      setExpenses(expenseData);
    } catch (err) {
      console.error("Dashboard Error:", err);
    } finally {
      setLoadingSummary(false);
    }
  };

  useEffect(() => {
  if (isAuthenticated) {
    loadDashboard();
  } else {
    setSummary(null);
    setExpenses([]);
    setLoadingSummary(false);
  }
}, [isAuthenticated]);
  return (
   <>
  <div className="h-screen mt-2 mb-2 flex flex-col">

    {/* Fixed Header */}
    <div className="shrink-0 bg-[#0F1117]  px-6 pt-6 pb-1 z-20">
      <DashboardHeader
        onLoginClick={() => setShowLogin(true)}
        onSignupClick={() => setShowSignup(true)}
      />
    </div>

    {/* Scrollable Content */}
    <div className="flex-1 overflow-y-auto px-6 pb-32">

      <BalanceCard
        summary={summary}
        loading={loadingSummary}
      />

      <div className="mt-7">
        <FinancialInsights
          expenses={expenses}
        />
      </div>

      <div className="mt-7">
        <UpcomingBills />
      </div>

      <div className="mt-7">
        <RecentTransactions
          expenses={expenses}
        />
      </div>

    </div>

  </div>

  {showExpenseModal && (
    <AuthOverlay onClose={() => setShowExpenseModal(false)}>
      <AddExpenseModal
        close={() => setShowExpenseModal(false)}
        onSuccess={() => {
          loadDashboard();
          setShowExpenseModal(false);
        }}
      />
    </AuthOverlay>
  )}

  {showLogin && (
    <AuthOverlay onClose={() => setShowLogin(false)}>
      <LoginModal
        close={() => {
          setShowLogin(false);
          loadDashboard();
        }}
        onSignupClick={() => {
          setShowLogin(false);
          setShowSignup(true);
        }}
      />
    </AuthOverlay>
  )}

  {showSignup && (
    <AuthOverlay onClose={() => setShowSignup(false)}>
      <SignupModal
        close={() => {
          setShowSignup(false);
          loadDashboard();
        }}
        onLoginClick={() => {
          setShowSignup(false);
          setShowLogin(true);
        }}
      />
    </AuthOverlay>
  )}
</>
  );
}

export default Dashboard;