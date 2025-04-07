import React from "react";
import ListItem from "../../pages/List-Item";
import AuthMsg from "../../components/auth-msg";
import { useAuthContext } from "../../contexts/AuthContext";

const ListLayout: React.FC = () => {
  const { isAuthenticated } = useAuthContext();
  return (
    <>{isAuthenticated ? <ListItem /> : <AuthMsg message="list your item" />}</>
  );
};
export default ListLayout;
