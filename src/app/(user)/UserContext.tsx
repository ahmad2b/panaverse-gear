"use client";
import { createContext, useContext, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  public_name: string;
  public_email: string;
  bio: string;
  profile_picture: string;
  is_email_public: boolean;
  is_name_public: boolean;
  created_at: Date;
  updated_at: Date;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
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
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
