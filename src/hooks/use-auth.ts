import { User } from "firebase/auth";
import React, { useContext } from "react";

export interface AuthContextType {
  currentUser: User | null;
  isEmailUser: boolean;
  userLoggedIn: boolean;
  loading: boolean;
}
export const AuthContext = React.createContext<AuthContextType | undefined>(
  undefined
);

export const useAuth = () => {
  if (AuthContext === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  const user = useContext(AuthContext);
  if (user === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return user;
};
