import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientLogin from "../clientComponents/loginComponents/login/login";
import Signup from "../clientComponents/loginComponents/signup/signup";
import MainPage from "../clientComponents/mainPage/mainPage/mainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main_page" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
