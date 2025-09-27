import React, { useState } from "react";
import { Mail, Shield, Lock, EyeOff, Eye } from "lucide-react";
import Card from "../../components/card";
import { Link } from "react-router";

const AdminLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* Welcome Message */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-full">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
          </div>
          <h1 className="font-heading font-bold text-3xl text-foreground mb-2">
            Admin Access
          </h1>
          <p className="font-body text-foreground/70">
            Secure login for ThriftEase administrators
          </p>
        </div>

        {/* Login Card */}
        <Card className="p-4">
          <div className="space-y-1 pb-6">
            <h1 className="font-heading font-semibold text-xl text-center text-foreground">
              Administrator Login
            </h1>
            <div className="flex justify-center">
              <div className="text-red-600 border-red-600 font-body text-xs">
                RESTRICTED ACCESS
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="admin-email"
                className="font-body font-medium text-foreground"
              >
                Admin Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  id="admin-email"
                  type="email"
                  placeholder="admin@thriftease.com"
                  className="pl-10 p-1 rounded-md border border-foreground/50 focus:border-red-500 focus:ring-red-500 bg-background outline-none w-full"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="admin-password"
                className="font-body font-medium text-foreground"
              >
                Admin Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter admin password"
                  className="pl-10 p-1 rounded-md border border-foreground/50 focus:border-red-500 focus:ring-red-500 bg-background outline-none w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Admin Sign In Button */}
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-body flex items-center justify-center rounded-lg font-semibold py-2.5">
              <Shield className="w-4 h-4 mr-2" />
              Access Admin Panel
            </button>

            {/* Security Notice */}
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-red-600 mt-0.5" />
                <div className="">
                  <h4 className="font-heading font-semibold text-sm text-red-800">
                    Security Notice
                  </h4>
                  <p className="font-body text-xs text-red-700 mt-1">
                    This is a restricted area. All access attempts are logged
                    and monitored.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Support Contact */}
        <div className="text-center">
          <p className="font-body text-sm text-muted-foreground">
            Need help accessing the admin panel?{" "}
            <Link
              to="/contact"
              className="font-semibold text-red-600 hover:text-red-700 hover:underline"
            >
              Contact IT Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
