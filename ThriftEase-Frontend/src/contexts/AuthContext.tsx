import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { dbURL } from "../lib/dbUrl";
import {
  LoginData,
  LogInResponseData,
  LogoutResponseData,
  RegisterResponseData,
  SIgnUpData,
  UserProfile,
} from "../interfaces/thriftease-interfaces/auth.interfaces";
import {
  AuthState,
  AuthProps,
} from "../interfaces/context-interfaces.ts/AuthContext-interface";

const AuthContext = createContext<AuthState | null>(null);

const AuthContextProvider: React.FC<AuthProps> = ({ children }) => {
  const authURL = `${dbURL}users/`;
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [authMessage, setAuthMessage] = useState<string>("");

  const registerUser = async (registerData: SIgnUpData) => {
    setIsAuthLoading(true);
    try {
      const registerResponse = await axios.post(
        `${authURL}register`,
        registerData
      );
      const registeredData = registerResponse.data as RegisterResponseData;

      setIsAuthenticated(true);
      setAuthMessage(registeredData.message);
      if (registeredData.user) setUserProfile(registeredData.user);
    } catch (err: any) {
      const err_message: string | null = err.response?.data.message;
      if (err_message) {
        setAuthMessage(err_message);
      } else {
        setAuthMessage("User Register Error");
      }
      console.error(err);
    } finally {
      setTimeout(() => {
        setIsAuthLoading(false);
      }, 2000);
    }
  };

  const loginUser = async (loginData: LoginData) => {
    setIsAuthLoading(true);
    try {
      const loginResponse = await axios.post(`${authURL}login`, loginData, {
        withCredentials: true
      });
      const loggedInData = loginResponse.data as LogInResponseData;

      setIsAuthenticated(true);
      setUserProfile(loggedInData.user);
      setAuthMessage(loggedInData.message);
    } catch (err: any) {
      const err_message: string | null = err.response?.data.message;
      if (err_message) {
        setAuthMessage(err_message);
      } else {
        setAuthMessage("User login Error");
      }
      console.error(err);
    } finally {
      setTimeout(() => {
        setIsAuthLoading(false);
      }, 2000);
    }
  };

  const logoutUser = async () => {
    const logoutResponse = await axios.post(`${authURL}logout`);
    const logoutData = logoutResponse.data as LogoutResponseData;
    try {
      setIsAuthenticated(false);
      setAuthMessage(logoutData.message);
    } catch (err) {
      setAuthMessage(logoutData.message);
      console.error("Error Fetching API");
    }
  };

  const contextValues = {
    isAuthenticated,
    isAuthLoading,
    userProfile,
    authMessage,
    registerUser,
    loginUser,
    logoutUser,
  };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a ApiContextProvider");
  }
  return context;
};

export default AuthContextProvider;
