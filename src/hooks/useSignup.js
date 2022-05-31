import React , {useState,useEffect} from 'react'
import { projAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';


function useSignup() {
    const [error,isError] = useState(null);
    const [pending,isPending] = useState(false);
    const {dispatch} = useAuthContext();
    const [isCancelled,setIsCancelled] = useState(false)

    const signup = async (email,password,displayName) => {
        isError(null)
        isPending(true)
        try{
            const res = await projAuth.createUserWithEmailAndPassword(email,password)

            if(!res){  
                throw new Error('Could not create this user')
            }
            await res.user.updateProfile({displayName})
            dispatch({type:"LOGIN", payload:res.user})
            if(!isCancelled){
            isPending(false)
            isError(null)}
        }
        catch (err){
            if(!isCancelled){
            console.log(err.message)
            isError(err.message)
            isPending(false)
        }
        }
    }

    useEffect(()=>{
       return ()=>setIsCancelled(true)
    },[])

    return {error,pending,signup}
}

export default useSignup