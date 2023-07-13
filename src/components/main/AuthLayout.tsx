import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PATH } from "../../constants";

const AuthLayout: React.FC = () => {
  const isLoggedin = false;
  if (isLoggedin) {
    return <Navigate to={PATH.HOME} />;
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
