import { User } from "firebase/auth";
import React, { useContext } from "react";

export interface AuthContextType {
  currentUser: User | null;
  userLoggedIn: boolean;
  loading: boolean;
}
export const AuthContext = React.createContext<AuthContextType | undefined>(
  undefined
);

export const useAuth = (): AuthContextType => {
  const userContext = useContext(AuthContext);

  if (userContext === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return userContext;
};
