import React,{useState,useEffect} from 'react'
import { projAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';


export const useLogin =() => {
    const [error,isError] = useState(null);
    const [pending,isPending] = useState(false);
    const {dispatch} = useAuthContext();
    const [isCancelled,setIsCancelled] = useState(false)


    const login = async (email,password) =>{
        isError(null)
        isPending(true)
        try{
            const res = await projAuth.signInWithEmailAndPassword(email,password)

            dispatch({type:"LOGIN",payload:res.user})
            if(!isCancelled){
            isPending(false)
            isError(null)}
        }
        catch(err){
            console.log(err.message)
            if(!isCancelled){
            isError(err.message)
            isPending(false)}
        }
    }
    useEffect(()=>{
        return ()=>setIsCancelled(true)
    },[])
    return {error,pending,login}
}
