import React, { Dispatch, SetStateAction } from "react"

export type AuthContextType = {
    activePage: string
    setActivePage: Dispatch<SetStateAction<string>>
};