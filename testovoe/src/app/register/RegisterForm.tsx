"use client"

import { useState, useEffect } from "react";
import { register } from "@/utils/api";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [usernameValue, setUsernameValue]= useState<string>('');
  const [emailValue, setEmailValue]= useState<string>('');
  const [passwordValue, setPasswordValue]= useState<string>('');

  const [isStatus, setIsStatus] = useState<string|null>(null);

  const router = useRouter();

  const handleRegister = () => {
    register({
      username: usernameValue,
      email: emailValue,
      password: passwordValue
    })
    .then(value => router.push('/login'))
    .catch(error => setIsStatus(error.response.data.message))
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

      <span>{isStatus? isStatus: ''}</span>

      <button onClick={handleRegister} className="border-2">Register</button>
    </div>
  );
}