export interface User {
  id?: number;
  name: string;
  email: string;
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
