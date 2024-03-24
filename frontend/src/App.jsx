import React from "react";

import Home from "./pages/home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/authContext";

const App = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 flex justify-center items-center h-screen">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
