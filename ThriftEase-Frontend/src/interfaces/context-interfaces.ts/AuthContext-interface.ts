import { ReactNode } from "react";
import {
  LoginData,
  SIgnUpData,
  UserProfile,
} from "../thriftease-interfaces/auth.interfaces";

export interface AuthProps {
  children: ReactNode;
}

export interface AuthState {
  isAuthenticated: boolean
  isAuthLoading: boolean
  userProfile: UserProfile | null;
  authMessage: string;
  loginUser: (loginData: LoginData) => Promise<void>;
  logoutUser: () => Promise<void>;
  registerUser: (registerData: SIgnUpData) => Promise<void>;
}
