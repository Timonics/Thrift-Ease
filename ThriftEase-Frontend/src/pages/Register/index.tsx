import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import googleLogo from "../../assets/googleLogo.png";
import { FaArrowLeft, FaFacebook } from "react-icons/fa";
import { SIgnUpData } from "../../interfaces/thriftease-interfaces/auth.interfaces";
import { useAuthContext } from "../../contexts/AuthContext";
import Loading from "../../components/loading";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { registerUser, isAuthenticated, authMessage, isAuthLoading } =
    useAuthContext();
  const [signUpFormOpened, setSignUpFormOpened] = useState<boolean>(false);
  const [registerFormData, setRegisterFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated, navigate]);

  console.log(authMessage);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterFormData({
      ...registerFormData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const registerData: SIgnUpData = {
      name: `${registerFormData.firstName} ${registerFormData.lastName}`,
      email: registerFormData.email,
      password: registerFormData.password,
      confirmPassword: registerFormData.confirmPassword,
    };
    registerUser(registerData);
  };

  return !signUpFormOpened ? (
    <div className="flex flex-col gap-3 mt-5 p-4">
      <h1 className="text-xl font-bold appdarkblue pb-2 pops">
        Create your{" "}
        <span className="appgreen pops font-extrabold text-2xl">
          ThriftEase.
        </span>{" "}
        account
      </h1>
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
      <p className="text-sm text-center text-appdarkblue/50">or</p>
      <button
        className="p-2 mx-2 text-base rubik font-bold text-[#34495E] bg-[#2ECC71] text-center transition duration-500 ease-in-out hover:bg-[#34495E] hover:text-[#2ECC71]"
        onClick={() => setSignUpFormOpened(true)}
      >
        Sign Up with your Email
      </button>
      <p className="text-xs appdarkblue opacity-85 text-center mt-2">
        Do you have a{" "}
        <span className="appgreen pops font-bold text-sm ">ThriftEase.</span>{" "}
        account?{" "}
        <Link
          to="/auth/log-in"
          className="underline underline-offset-1 appdarkblue monte font-bold text-sm"
        >
          Log in
        </Link>
      </p>
    </div>
  ) : (
    <form className="flex flex-col gap-3 py-4 px-2" onSubmit={handleSubmit}>
      <button
        className="flex gap-1 text-xs font-light items-center w-fit text-[#34495E] hover:text-[#2ECC71] mt-3"
        onClick={() => setSignUpFormOpened(false)}
      >
        <FaArrowLeft />
        Go Back
      </button>
      <h1 className="text-xl pops font-bold appdarkblue">
        Fill in your details to register.
      </h1>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={registerFormData.firstName}
          className="w-1/2"
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={registerFormData.lastName}
          className="w-1/2"
        />
      </div>
      <input
        type="text"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={registerFormData.email}
      />
      <div className="flex gap-4">
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={registerFormData.password}
          className="w-1/2"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          name="confirmPassword"
          value={registerFormData.confirmPassword}
          className="w-1/2"
        />
      </div>
      <button
        type="submit"
        className="text-[#34495E] bg-[#2ECC71] rubik font-bold transition duration-500 ease-in-out hover:bg-[#34495E] hover:text-[#2ECC71] p-2 mt-2"
      >
        Sign Up
      </button>
      {isAuthLoading && <Loading />}
    </form>
  );
};

export default Register;
