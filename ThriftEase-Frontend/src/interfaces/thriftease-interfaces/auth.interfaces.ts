export interface LoginData {
  email: string;
  password: string;
}

export interface SIgnUpData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
}

export interface RegisterResponseData {
  message: string
  user?: UserProfile
}

export interface LogInResponseData {
  message: string;
  user: UserProfile;
  token: string;
}

export interface LogoutResponseData {
  message: string
}