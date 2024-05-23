import { useState } from "react";
import Modal from "../../components/modal/Modal";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [auth, setAuth] = useState({ token: false });

  const handleLogin = (token: boolean) => setAuth({ token });

  return !auth.token ? (
    <div>
      <Modal onLogin={handleLogin} />
    </div>
  ) : (
    <Navigate to="/overview" />
  );
}
