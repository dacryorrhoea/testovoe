"use client"

import { useState, useEffect } from "react";
import useAuth from "@/hooks/useAuth";

export default function RegisterForm() {
  const [usernameValue, setUsernameValue]= useState<string>('');
  const [emailValue, setEmailValue]= useState<string>('');
  const [passwordValue, setPasswordValue]= useState<string>('');

  const { error, registerHandler } = useAuth()

  const handleRegister = () => {
    registerHandler({
      username: usernameValue,
      email: emailValue,
      password: passwordValue
    })
  }

  return (
    <div className="flex flex-col gap-8 items-end">
      <div className="flex gap-8">
        <span>Name</span>
        <input type="text"  className="text-black" onChange={(e) => setUsernameValue(e.target.value)} />
      </div>

      <div className="flex gap-8">
        <span>Email</span>
        <input type="text"  className="text-black" onChange={(e) => setEmailValue(e.target.value)} />
      </div>

      <div className="flex gap-8">
        <span>Password</span>
        <input type="text" className="text-black" onChange={(e) => setPasswordValue(e.target.value)} />
      </div>

      <span className="text-white">{error}</span>

      <button onClick={handleRegister} className="border-2">Register</button>
    </div>
  );
}