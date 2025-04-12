import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import { SignupForm } from "./components/SignupForm";
import AdminDashboard from "./pages/AdminDashboard";
import ProfessorDashboard from "./pages/ProfessorDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/professor" element={<ProfessorDashboard />} />
        <Route path="/client" element={<ClientDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
