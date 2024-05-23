import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Overview from "./pages/overview/Overview";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/overview" element={<Overview />} />
    </Routes>
  );
}
