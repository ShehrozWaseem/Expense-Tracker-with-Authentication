import style from './Login.module.css'
import React, { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

export default function Login() {
    const {error,pending,login} =useLogin()
    const onSubmitHandler = (e) =>{
        e.preventDefault()
        login(email,psw)
    }
    const [email,setEmail]=useState('');
    const [psw,setPsw]=useState('');

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }
    const updatePsw = (e) =>{
        setPsw(e.target.value)
    }


  return (
    <form onSubmit={onSubmitHandler} className={style["login-form"]}>
        <h2>Log in</h2>
        <label><span>Email:</span>
        <input type="email" onChange={updateEmail}/></label>
        <label><span>Password:</span>
        <input type="password" onChange={updatePsw}/></label>
        
      {!pending && <button className="btn">Log in</button>}
      {pending && <button className="btn" disabled>Loading...</button>}
      {error && <p>{error}</p>}
    </form>
  )
}
