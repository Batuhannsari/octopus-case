import React, { Dispatch, SetStateAction } from "react"
import { User } from "./UsersTypes";

export type DummyDataContextTypes = {
    users: User[]
    setUsers: Dispatch<SetStateAction<User[]>>
    getUsers: () => void
};