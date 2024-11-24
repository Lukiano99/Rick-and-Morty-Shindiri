import { AuthContext, AuthContextType } from "@/hooks/use-auth";
import { auth } from "@/services/firebase/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import React, { useEffect, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This unsubscribe can be used for clean up
    // When the Auth provider component is going to be unmounted
    // then we can simply return this unsubscribe function
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user: User | null) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
      try {
        const token = await user.getIdToken();
        localStorage.setItem("userToken", token);
      } catch (error) {
        console.error("Failed to fetch token:", error);
      }
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
      localStorage.removeItem("userToken");
    }
    setLoading(false);
  }

  const value: AuthContextType = {
    currentUser,
    userLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
