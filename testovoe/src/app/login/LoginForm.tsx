"use client"

import { useState } from "react";
import { login } from "@/utils/api";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [loginValue, setLoginValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');

  const [isStatus, setIsStatus] = useState<string|null>(null);

  const router = useRouter();

  const handleLogin = () => {
    login({
      username: loginValue,
      password: passwordValue
    })
    .then(value => {
      router.push('/');
      localStorage.setItem('token', JSON.stringify(value));
    })
    .catch(error => setIsStatus(error.response.data.message))
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

      <button className="border-2" onClick={handleLogin}>login</button>
    </div>
  );
}
