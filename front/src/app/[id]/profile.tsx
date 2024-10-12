"use client"

import { useState, useEffect } from "react";
import { getProfileUser } from "@/utils/api";

export default function Profile({ id }: {id: string}) {
  const [profileData, setProfileData] = useState<any>();


  useEffect(() => {
    getProfileUser(id).then(data => setProfileData(data))
  }, [])

  if (!profileData) {
    return <>Loading...</>
  }

  return (
    <div className="flex flex-col border-b-2 text-2xl text-cyan-400">
      <p>Имя: <span>{profileData?.username}</span></p>
      <p>Почта: <span>{profileData?.email}</span></p>
      <ul className="text-lg">
        {profileData?.deeds.length ?
          profileData?.deeds.map((item, index) =>
            <li
              id={`${item.id}`}
              className="flex border-b-2 border-l-2 border-r-2 ali"
            >
              <span className="px-3">
                {`${index + 1}. ${item.title}: ${item.desc}`}
              </span>
            </li>
          )
          :
          <div>Loading...</div>
        }
      </ul>
    </div>
  );
}
