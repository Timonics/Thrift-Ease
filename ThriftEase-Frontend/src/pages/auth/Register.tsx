import React, { useState, type ChangeEvent } from "react";
import Card from "../../components/card";
import { Link, useNavigate } from "react-router";
import { Mail, User, Lock, EyeOff, Eye, Check, X, Loader } from "lucide-react";
import type { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/slices/user.slice";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successRegisterMsg, setSuccessRegisterMsg] = useState(false);

  const { loading } = useSelector((state: RootState) => state.usersReducer);

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = async () => {
    const registerResult = await dispatch(registerUser(registerData));

    if (registerUser.fulfilled.match(registerResult)) {
      setSuccessRegisterMsg(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    }
  };

  return (
    <>
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="font-heading font-bold text-4xl text-foreground mb-2">
            Join <span className="text-primary">ThriftEase.</span>
          </h1>
          <p className="font-body text-foreground/50">
            Start your sustainable shopping journey today
          </p>
        </div>

        {/* Signup Card */}
        <Card className="shadow-lg p-4 relative">
          {loading && (
            <>
              <div className="absolute rounded-xl top-0 left-0 bottom-0 w-full backdrop-blur-sm z-40" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                <Loader className="animate-spin" />
              </div>
            </>
          )}
          <div className="space-y-1 pb-6">
            <h1 className="font-heading font-semibold text-xl text-center text-foreground">
              Create Your Account
            </h1>
          </div>
          <div className="space-y-6">
            <div className="space-y-2 flex flex-col">
              <label
                htmlFor="fullName"
                className="font-body font-medium text-foreground"
              >
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 w-4 h-4" />
                <input
                  id="name"
                  name="name"
                  value={registerData.name}
                  type="text"
                  placeholder="Enter your full name"
                  className="pl-10 p-1 rounded-md border border-foreground/50 focus:border-primary focus:ring-primary bg-background outline-none w-full"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2 flex flex-col">
              <label
                htmlFor="email"
                className="font-body font-medium text-foreground"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 w-4 h-4" />
                <input
                  id="email"
                  name="email"
                  value={registerData.email}
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10  p-1 rounded-md border border-foreground/50 focus:border-primary focus:ring-primary bg-background outline-none w-full"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2 flex flex-col">
              <label
                htmlFor="password"
                className="font-body font-medium text-foreground"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 w-4 h-4" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={registerData.password}
                  placeholder="Create a password"
                  className="pl-10  p-1 rounded-md border border-foreground/50 focus:border-primary focus:ring-primary bg-background outline-none w-full"
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/50 hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2 flex flex-col">
              <label
                htmlFor="confirmPassword"
                className="font-body font-medium text-foreground"
              >
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 w-4 h-4" />
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={registerData.confirmPassword}
                  placeholder="Confirm your password"
                  className="pl-10  p-1 rounded-md border border-foreground/50 focus:border-primary focus:ring-primary bg-background outline-none w-full"
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/50 hover:text-foreground"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2 flex flex-col">
              <p className="font-roboto text-xs text-foreground/65">
                Password must contain:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center space-x-2">
                  {registerData.password.length < 8 ? (
                    <X className="w-3 h-3 text-red-500" />
                  ) : (
                    <Check className="w-3 h-3 text-primary" />
                  )}
                  <span className="font-roboto text-foreground/65">
                    8+ characters
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3 h-3 text-primary" />
                  <span className="font-roboto text-foreground/65">
                    One uppercase
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3 h-3 text-primary" />
                  <span className="font-roboto text-foreground/65">
                    One number
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <X className="w-3 h-3 text-red-500" />
                  <span className="font-roboto text-foreground/65">
                    One symbol
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 text-primary bg-background border rounded focus:ring-primary focus:ring-1 mt-0.5"
              />
              <label
                htmlFor="terms"
                className="font-body text-sm text-foreground/65 leading-relaxed"
              >
                I agree to the{" "}
                <Link
                  to="/terms"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-primary font-heading hover:text-primary/80 hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-primary font-heading hover:text-primary/80 hover:underline"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="newsletter"
                type="checkbox"
                className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2"
              />
              <label
                htmlFor="newsletter"
                className="font-body text-sm text-foreground/65"
              >
                Subscribe to our newsletter for deals and sustainability tips
              </label>
            </div>

            <button
              disabled={
                !registerData.confirmPassword ||
                !registerData.password ||
                !registerData.email ||
                !registerData.name
              }
              className="w-full bg-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-primary hover:bg-primary/80 cursor-pointer text-white font-heading font-semibold py-2.5 rounded-lg"
              onClick={handleRegister}
            >
              Create Account
            </button>

            <div className="flex items-center">
              <hr className="border-0.5 border-foreground/30 w-1/4" />
              <div className="flex w-2/4 justify-center">
                <span className="px-2 font-body text-center text-sm text-foreground/65">
                  or sign up with
                </span>
              </div>
              <hr className="border-0.5 border-foreground/30 w-1/4" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="border flex items-center justify-center rounded-md p-1 font-body shadow-lg transition-transform duration-300 hover:scale-105 text-foreground/65 hover:bg bg/65-transparent font-outfit">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>
              <button className="border flex items-center justify-center rounded-md p-1 font-body shadow-lg transition-transform duration-300 hover:scale-105 text-foreground/65 hover:bg bg/65-transparent font-outfit">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </button>
            </div>

            <div className="text-center">
              <p className="font-body text-sm text-foreground/65">
                Already have an account?{" "}
                <Link
                  to="/auth"
                  className="font-semibold text-primary hover:text-primary/80 hover:underline font-heading"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </Card>

        <div className="text-center space-y-4">
          <p className="font-body text-sm text-foreground/65">
            Join the sustainable shopping revolution
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-2 flex flex-col">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <p className="font-body text-xs text-foreground/65">Save Money</p>
            </div>
            <div className="space-y-2 flex flex-col">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <p className="font-body text-xs text-foreground/65">
                Help Planet
              </p>
            </div>
            <div className="space-y-2 flex flex-col">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <p className="font-body text-xs text-foreground/65">
                Find Unique
              </p>
            </div>
          </div>
        </div>
      </div>
      {successRegisterMsg && (
        <>
          <div className="fixed h-screen w-screen bg-black/50 backdrop-blur-sm top-0 z-50">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white/50 rounded-lg shadow-xl gap-4 flex flex-col items-center justify-center">
              <h2 className="font-bold text-xl outfit text-black">
                You have successfully created your account
              </h2>
              <p className="font-light italic">redirecting to your dashboard</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Register;
