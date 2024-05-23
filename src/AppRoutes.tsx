import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Overview from "./pages/overview/Overview";

type Auth = { token: boolean };

export default function AppRoutes() {
  const [auth, setAuth] = useState<Auth>({ token: false });

  return (
    <Routes>
      <Route path="/" element={<Login auth={auth} setAuth={setAuth} />} />
      <Route path="/overview" element={<Overview />} />
    </Routes>
  );
}
