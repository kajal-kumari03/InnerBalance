import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  LoginForm  from "./components/LoginForm";
// import { SignupForm } from "./components/SignupForm";
// import AdminDashboard from "./pages/AdminDashboard";
// import SpecialistDashboard from "./Specialist/SpecialistDashboard";
import ClientDashboard from "./Client/ClientDashboard";
import Home from "./pages/Home";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./components/ForgotPassword";
import {EmailProvider} from "./contexApi/EmailProvider";
import SpecialistDashboard from "./Specialist/SpecialistDashboard";
import AdminDashboard from "./Admin/AdminDashboard";


function App() {
  return (
    <EmailProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        { <Route path="LoginForm" element={<LoginForm />} /> }
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        {/* <Route path="/professor" element={<ProfessorDashboard />} /> */}
        <Route path="/client" element={<ClientDashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
       < Route path="/client-dashboard" element={<ClientDashboard />} />
       < Route path="/Specialist-dashboard" element={<SpecialistDashboard />} />
       <Route path="/Admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
    </EmailProvider>
  );
}

export default App;
