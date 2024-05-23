import Modal from "../../components/modal/Modal";
import { Navigate } from "react-router-dom";

interface AuthProps {
  auth: { token: boolean };
  setAuth: (token: { token: boolean }) => void;
}

export default function Login({ auth, setAuth }: AuthProps) {
  const handleLogin = (token: boolean) => setAuth({ token });

  return !auth.token ? (
    <div>
      <Modal onLogin={handleLogin} />
    </div>
  ) : (
    <Navigate to="/overview" />
  );
}
