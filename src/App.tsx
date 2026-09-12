import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AuthProvider, useAuth } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

import AuthPage from "./components/auth/authpage";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";

import Dashboard from "./pages/Dashboard";
import CareAI from "./pages/CareAI";
import Prescriptions from "./pages/prescriptions";
import MedicalRecords from "./pages/MedicalRecords";
import Medications from "./pages/Medications";
import Wellness from "./pages/Wellness";
import Appointments from "./pages/Appointments";
import NearbyHealthcare from "./pages/NearbyHealthcare";
import PeriodTracker from "./pages/PeriodTracker";
import Settings from "./pages/Settings";

function ProtectedLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Topbar />

        <div className="page-content">
          <Routes>
            <Route
              index
              element={<Navigate to="/dashboard" replace />}
            />

            <Route
              path="dashboard"
              element={<Dashboard />}
            />

            <Route
              path="care-ai"
              element={<CareAI />}
            />

            <Route
              path="prescriptions"
              element={<Prescriptions />}
            />

            <Route
              path="medical-records"
              element={<MedicalRecords />}
            />

            <Route
              path="medications"
              element={<Medications />}
            />

            <Route
              path="wellness"
              element={<Wellness />}
            />

            <Route
              path="appointments"
              element={<Appointments />}
            />

            <Route
              path="nearby"
              element={<NearbyHealthcare />}
            />

            <Route
              path="period-tracker"
              element={<PeriodTracker />}
            />

            <Route
              path="settings"
              element={<Settings />}
            />

            <Route
              path="*"
              element={<Navigate to="/dashboard" replace />}
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/auth"
        element={<AuthPage />}
      />

      <Route
        path="/*"
        element={<ProtectedLayout />}
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;