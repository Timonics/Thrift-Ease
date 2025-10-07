export interface User {
  id?: number;
  name: string;
  email: string;
  isSeller: boolean
}

export interface UserState {
  userData: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface UserResponse {
  message: string;
  user: User;
}

export interface ProfileResponse extends Omit<UserResponse, "user"> {
  profile: User;
}
