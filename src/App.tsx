
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BookingConfirmation from "./pages/BookingConfirmation";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DriverSignIn from "./pages/DriverSignIn";
import DriverSignUp from "./pages/DriverSignUp";
import DriverDashboard from "./pages/DriverDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import HowItWorks from "./pages/HowItWorks";
import Dashboard from "./pages/Dashboard";
import MyRides from "./pages/MyRides";
import Schedule from "./pages/Schedule";
import About from "./pages/About";
import Help from "./pages/Help";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Drive from "./pages/Drive";
import DriverRequirements from "./pages/DriverRequirements";
import DriverHelp from "./pages/DriverHelp";
import DriverEarnings from "./pages/DriverEarnings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/booking-confirmation" element={
              <ProtectedRoute>
                <BookingConfirmation />
              </ProtectedRoute>
            } />
            <Route path="/signin" element={
              <ProtectedRoute requireAuth={false}>
                <SignIn />
              </ProtectedRoute>
            } />
            <Route path="/signup" element={
              <ProtectedRoute requireAuth={false}>
                <SignUp />
              </ProtectedRoute>
            } />
            <Route path="/driver-signin" element={
              <ProtectedRoute requireAuth={false}>
                <DriverSignIn />
              </ProtectedRoute>
            } />
            <Route path="/driver-signup" element={
              <ProtectedRoute requireAuth={false}>
                <DriverSignUp />
              </ProtectedRoute>
            } />
            <Route path="/driver-dashboard" element={
              <ProtectedRoute>
                <DriverDashboard />
              </ProtectedRoute>
            } />
            <Route path="/driver-earnings" element={
              <ProtectedRoute>
                <DriverEarnings />
              </ProtectedRoute>
            } />
            <Route path="/driver-requirements" element={<DriverRequirements />} />
            <Route path="/driver-help" element={<DriverHelp />} />
            <Route path="/admin-dashboard" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/my-rides" element={
              <ProtectedRoute>
                <MyRides />
              </ProtectedRoute>
            } />
            <Route path="/schedule" element={
              <ProtectedRoute>
                <Schedule />
              </ProtectedRoute>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/drive" element={<Drive />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
