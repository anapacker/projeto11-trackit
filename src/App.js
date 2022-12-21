import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HabtisPage from "./pages/HabtisPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserInfosContext from "./contexts/UserInfosContext";
import TodayPage from "./pages/TodayPage";

function App() {
  const [userInfos, setUserInfos] = useState(JSON.parse(localStorage.getItem("abc123")))
  const storageUserInfos = localStorage.getItem("abc123")

  useEffect(() => {
    if (storageUserInfos) {
      const storageInfosJSON = JSON.parse(storageUserInfos)
      setUserInfos(storageInfosJSON)
    }
  }, [storageUserInfos])

  return (
    <>
      <UserInfosContext.Provider value={{ userInfos, setUserInfos }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignupPage />} />
            <Route path="/habitos" element={<HabtisPage />} />
            <Route path="/hoje" element={<TodayPage />} />
          </Routes>
        </BrowserRouter>
      </UserInfosContext.Provider>
    </>

  )
}

export default App;
