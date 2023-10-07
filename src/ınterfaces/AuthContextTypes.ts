import React, { Dispatch, SetStateAction } from "react"

export type AuthContextType = {
    deneme: boolean
    setDeneme: Dispatch<SetStateAction<boolean>>
};