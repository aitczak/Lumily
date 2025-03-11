import { createContext } from "react";



interface LoginContextType {
  Email: string;
  PassWord: string;
  FirstName: string;
  LastName: string;
  setEmail: (email: string) => void;
  setPassWord: (password: string) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  //functions that take in a string and return nothing (just update its state)
}

export const LoginContext = createContext<LoginContextType | null>(null);