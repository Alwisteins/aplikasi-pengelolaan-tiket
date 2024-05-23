import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes({
  auth,
}: {
  auth: { token: boolean };
}) {
  return auth.token ? <Outlet /> : <Navigate to="/" />;
}
