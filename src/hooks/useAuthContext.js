import React,{ useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error("Context not avaialble for this component")
    }
    
    return context
}
