import { Dispatch, SetStateAction } from "react";
import { CurrentUser, User } from "./UsersTypes";

export type DummyDataContextTypes = {
    users: User[]
    setUsers: Dispatch<SetStateAction<User[]>>
    getUsers: () => void
    currentUser: CurrentUser
    setCurrentUser: Dispatch<SetStateAction<CurrentUser>>,
};