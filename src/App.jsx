
import RegisterPage from "./pages/RegisterPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import NavBar from "./components/NavBar.jsx"
import VerifyEmailPage from "./pages/VerifyEmailPage.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="overflow-x-hidden w-full bg-offwhite">
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify/user" element={<VerifyEmailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
