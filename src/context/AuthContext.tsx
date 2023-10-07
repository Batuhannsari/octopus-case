import { AuthContextType } from "@/ınterfaces/AuthContextTypes";
import { createContext, useContext, useState } from "react";


const Context = createContext<AuthContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export default function AuthContextProvider({ children }: Props) {

  const [deneme, setDeneme] = useState(false)

  const data: AuthContextType = {
    deneme,
    setDeneme,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
}

export const useAuthContext = () => useContext(Context) as AuthContextType;
