import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { useAuth } from "./context/AuthContext";

import AppLayout from "./components/layout/AppLayout";
// import ProtectedRoute from "./components/auth/ProtectedRoute";

import Landing from "./landing/Landing";

import Dashboard from "./pages/Dashboard/Dashboard";
import Expenses from "./pages/Expenses/Expenses";
import Budget from "./pages/Budget/Budget";
import Reports from "./pages/Reports/Reports";
import Analytics from "./pages/Analytics/Analytics";
import Profile from "./pages/Profile/Profile";

function AnimatedRoutes() {
  const location = useLocation();

  const {
    isAuthenticated,
    loading,
  } = useAuth();

  // Wait until auth state is restored
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#070B14] text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />
          <p className="text-gray-400">
            Loading ExpenseFlow...
          </p>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <Routes
        location={location}
        key={location.pathname}
      >
        {/* Landing */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate
                to="/dashboard"
                replace
              />
            ) : (
              <Landing />
            )
          }
        />

        {/* Protected Routes */}
        <Route
          element={
            // <ProtectedRoute>
              <AppLayout />
            // </ProtectedRoute>
          }
        >
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/expenses"
            element={<Expenses />}
          />

          <Route
            path="/budget"
            element={<Budget />}
          />

          <Route
            path="/reports"
            element={<Reports />}
          />

          <Route
            path="/analytics"
            element={<Analytics />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />
        </Route>

        {/* Unknown Route */}
        <Route
          path="*"
          element={
            <Navigate
              to={
                isAuthenticated
                  ? "/dashboard"
                  : "/"
              }
              replace
            />
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;