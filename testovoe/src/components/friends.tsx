"use client"

import { useState, useEffect } from "react";
import { getAllUsers } from "@/utils/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function FriendsList() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getAllUsers().then(users => setData(users))
  }, [])

  const handleAddFried = (id: number) => {

  }

  return (
    <div className="flex flex-col gap-2 border-2 mt-1">
      <ul className="text-lg">
        {data.length ?
          data.map((item, index) =>
            <li
              id={`${item.id}`}
              className="flex border-b-2 border-l-2 border-r-2 ali"
            >
              <Link href={`/${item.id}`} className="px-3">
                {`${index + 1}. ${item.username}`}
              </Link>
            </li>
          )
          :
          <div>Loading...</div>
        }
      </ul>
      <input type="text" className="text-black"/>
    </div>
  );
}
