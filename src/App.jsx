import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HabitsPage from "./pages/HabitsPage";
import TodayHabitsPage from "./components/TodayHabitsCard";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignupPage />} />
        <Route path="/habitos" element={<HabitsPage />} />
        <Route path="/hoje" element={<TodayHabitsPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
