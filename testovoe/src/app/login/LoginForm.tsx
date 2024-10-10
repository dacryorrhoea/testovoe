"use client"

import { useState } from "react";

export default function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const data = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: login,
        password: password
      })
    })
    console.log(data)
  }
 
  return (
    <div className="flex flex-col gap-8 items-end">
      <div className="flex gap-8">
        <label htmlFor="login">Login</label>
        <input
          type="text"
          name="login"
          className="text-black"
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>

      <div className="flex gap-8">
        <label htmlFor="password">Password</label>
        <input 
          type="password"
          name="password"
          className="text-black"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="b-2" onClick={handleLogin}>login</button>
    </div>
  );
}
