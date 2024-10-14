"use client"

import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";


export default function LoginForm() {
  const [loginValue, setLoginValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');

  const router = useRouter()

  const { error, loginHandler, logoutHandler } = useAuth();

  const handleLoginButton = () => {
    loginHandler({
      email: loginValue,
      password: passwordValue
    });
  }

  return (
    <div className="flex flex-col gap-8 items-end">
      <div className="flex gap-8">
        <span>Login</span>
        <input
          type="text"
          className="text-black"
          onChange={(e) => setLoginValue(e.target.value)}
        />
      </div>

      <div className="flex gap-8">
        <span>Password</span>
        <input 
          type="password"
          className="text-black"
          onChange={(e) => setPasswordValue(e.target.value)}
        />
      </div>

      <span>{error}</span>
      
      <button
        className="border-2"
        onClick={handleLoginButton}
      >
        Login
      </button>
      <button
        className="text-blue-300 border-2"
        onClick={() => logoutHandler()}
      >
        Logout
      </button>
    </div>
  );
}
