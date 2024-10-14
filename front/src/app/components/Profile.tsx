"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useProfile from "@/hooks/useProfile";

export default function Profile() {
  const [usernameVal, setUsernameValue] = useState('');
  const [emailVal, setEmailValue] = useState('');

  const { profileData, isLoading, updateProfileData } = useProfile();

  const handleUpdateProfile = () => {
    updateProfileData({
      username: usernameVal? usernameVal: profileData.username,
      email: emailVal? emailVal: profileData.email
    })
  }

  const handleDeleteProfile = () => {
  }

  if (isLoading) {
    return <>Loading...</>
  }

  return (
    <div className="flex flex-col border-b-2 text-2xl text-cyan-400">
      Имя: <input
        defaultValue={profileData.username}
        className="text-black text-lg mb-2"
        onChange={(e) => setUsernameValue(e.target.value)}
      />
      Почта: <input
        defaultValue={profileData.email}
        className="text-black text-lg mb-2"
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <div className="flex">
        <button className="border-2 text-red-500 mr-auto mb-2" onClick={handleDeleteProfile}>
            Удалить
        </button>
        <button className="border-2 ml-auto mb-2" onClick={handleUpdateProfile}>
          Обновить
        </button>
      </div>
    </div>
  );
}
