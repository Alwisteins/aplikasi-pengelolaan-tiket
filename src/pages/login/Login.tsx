import { useState } from "react";
import Modal from "../../components/modal/Modal";
import { Navigate } from "react-router-dom";

interface AuthProps {
  auth: { token: boolean };
  setAuth: (token: { token: boolean }) => void;
}

export type Role = 'guest' | 'admin';

export default function Login(props: AuthProps) {
  const { auth, setAuth } = props
  const [role, setRole] = useState<Role>('guest');
  const handleLogin = (token: boolean) => setAuth({ token });

  return !auth.token ? (
    <div>
      <Modal onLogin={handleLogin} setRole={setRole} />
    </div>
  ) : (
    <Navigate to="/overview" />
  );
}
