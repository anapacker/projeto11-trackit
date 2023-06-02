import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HabitsPage from "./pages/HabitsPage";
import TodayHabitsPage from "./components/TodayHabitsCard";
import { useState } from "react";
import DataContextProvider from "./context/DataContextProvider";

function App() {
  const [token, setToken] = useState("")
  const [userPicture, setUserPicture] = useState("")
  const contextValue = { token, setToken, userPicture, setUserPicture }

  return (
    <DataContextProvider.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignupPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayHabitsPage />} />
        </Routes>
      </BrowserRouter>
    </DataContextProvider.Provider>
  )
}

export default App
