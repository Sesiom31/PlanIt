import "./css/App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import { useAuthQuery } from "./services/api";

const App = () => {
  const data = useAuthQuery();

  console.log(data);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
