import { AuthContextType } from "@/ınterfaces/AuthContextTypes";
import { createContext, useContext, useState } from "react";


const Context = createContext<AuthContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export default function AuthContextProvider({ children }: Props) {

  const [activePage, setActivePage] = useState("")

  const data: AuthContextType = {
    activePage,
    setActivePage,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
}

export const useAuthContext = () => useContext(Context) as AuthContextType;
