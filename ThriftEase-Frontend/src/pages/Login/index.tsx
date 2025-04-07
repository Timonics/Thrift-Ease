import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { LoginData } from "../../interfaces/thriftease-interfaces/auth.interfaces";
import { Link, useNavigate } from "react-router-dom";

import googleLogo from "../../assets/googleLogo.png";
import { FaFacebook } from "react-icons/fa";
import { useAuthContext } from "../../contexts/AuthContext";
import Loading from "../../components/loading";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { loginUser, isAuthLoading, isAuthenticated } = useAuthContext();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginUser(loginData);
  };

  return (
    <div className="flex flex-col items-center p-4 gap-3">
      <form className="flex flex-col gap-2 w-full p-2" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold appdarkblue pops">
          Login to your account
        </h1>
        <input
          type="text"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={loginData.email}
          className=""
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={loginData.password}
          className=""
        />
        <button
          type="submit"
          className="bg-appgreen p-2 font-extrabold mt-2 appdarkblue transition duration-300 ease-in-out hover:bg-appdarkblue hover:text-appgreen rubik"
        >
          Sign in
        </button>
        <p className="text-start w-full text-sm underline underline-offset-1 font-semibold appdarkblue monte">
          Forgot Password
        </p>
      </form>
      <p className="text-xs appdarkblue opacity-85">
        Don't have a{" "}
        <span className="appgreen font-bold text-sm pops">ThriftEase.</span>{" "}
        account?{" "}
        <Link
          to="/auth/sign-up"
          className="underline underline-offset-1 appdarkblue font-bold monte text-sm"
        >
          Sign up
        </Link>
      </p>
      <p className="text-xs appdarkblue opacity-50">or</p>
      <div className="w-full flex flex-col gap-2 px-2 mb-1">
        <div className="p-3 w-full text-center border-2 border-slate-200 bg-white font-semibold flex gap-3 justify-center items-center pops">
          <img src={googleLogo} alt="google logo" width={30} height={30} />
          Sign in with Google
        </div>
        <div className="p-3 border-2 border-[#c3d0f6] bg-[#3b5998] w-full text-center text-[#f7f7f7] font-semibold flex gap-3 justify-center items-center pops">
          <FaFacebook size={20} />
          Sign in with Facebook
        </div>
      </div>
      {isAuthLoading && <Loading />}
    </div>
  );
};

export default Login;
