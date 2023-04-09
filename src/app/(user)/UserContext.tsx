"use client";
import { createContext, useContext, useState } from "react";
import { SuperDevs } from "@/Types";

interface UserContextType {
  user: SuperDevs | null;
  setUser: React.Dispatch<React.SetStateAction<SuperDevs | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<SuperDevs | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
