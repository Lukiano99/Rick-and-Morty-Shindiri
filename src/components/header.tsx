// src/components/header.tsx
import React from "react";
import { useAuth } from "../hooks/use-auth"; // Importuj useAuth hook
import { logOut } from "@/services/firebase/auth";

const Header: React.FC = () => {
  const { currentUser } = useAuth(); // Pristup ulogovanom korisniku

  const handleSignOut = async () => {
    try {
      logOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <div>
        <h1>Welcome, {currentUser ? currentUser.email : "Guest"}</h1>
      </div>
      <div>
        {currentUser && (
          <button onClick={handleSignOut} className="btn btn-danger">
            Sign Out
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
