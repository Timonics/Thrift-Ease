import React from "react";
import Dashboard from "../../pages/DashBoard";
import AuthMsg from "../../components/auth-msg";
import { useAuthContext } from "../../contexts/AuthContext";

const DashboardLayout: React.FC = () => {
  const { isAuthenticated } = useAuthContext();
  return (
    <>{isAuthenticated ? <Dashboard /> : <AuthMsg message="view your dashboard" />}</>
  );
};
export default DashboardLayout;