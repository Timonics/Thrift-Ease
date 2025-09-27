import React from "react";
import { Outlet } from "react-router";

const AdminLayout: React.FC = () => {
  return (
    <div className="bg-background text-foreground flex flex-col ">
      <Outlet />
    </div>
  );
};

export default AdminLayout;
