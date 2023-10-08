import { getAllUsers } from "@/api/controllers/users-controller";
import { DummyDataContextTypes } from "@/ınterfaces/DummyDataContextTypes";
import { createContext, useContext, useState } from "react";


const Context = createContext<DummyDataContextTypes | null>(null);

type Props = {
  children: React.ReactNode;
};

export default function DummyDataContextProvider({ children }: Props) {

  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      let res = await getAllUsers()
      if (res) {
        setUsers(res.data.users)
      }
    } catch (error) { }
  }

  const data: DummyDataContextTypes = {
    users,
    setUsers,
    getUsers,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
}

export const useDummyDataContext = () => useContext(Context) as DummyDataContextTypes;
