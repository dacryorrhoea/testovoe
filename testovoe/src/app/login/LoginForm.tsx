"use client"

import { useState } from "react";
import { login, logout } from "@/utils/api";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [loginValue, setLoginValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');

  const [isStatus, setIsStatus] = useState<string|null>(null);

  const router = useRouter();

  const handleLogin = async () => {
    const status = await login({username: loginValue, password: passwordValue})
    if (!status) {
      router.replace('/');
    } else {
      setIsStatus(isStatus)
    }
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

      <span>{isStatus? isStatus: ''}</span>

      
      <button className="border-2" onClick={handleLogin}>login</button>
      <button onClick={() => logout()} className="text-blue-300 border-2">Logout</button>
    </div>
  );
}
