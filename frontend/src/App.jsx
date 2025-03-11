import "./App.css";
import React from "react";
import "@ant-design/v5-patch-for-react-19";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientLogin from "../clientComponents/loginComponents/login/login";
import Signup from "../clientComponents/loginComponents/signup/signup";
import MainPage from "../clientComponents/mainPage/mainPage/mainPage";
import { AuthProvider } from "../auth";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ClientLogin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/main_page" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
