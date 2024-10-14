"use client"

import { useState, useEffect } from "react";
import { getAllUsers } from "@/utils/api";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useUsers from "@/hooks/useUsers";

export default function FriendsList() {
  const [data, setData] = useState<any>();
  const { usersList, isLoading } = useUsers()

  if (isLoading) {
    return <>Loading...</>
  }

  return (
    <div className="flex flex-col gap-2 border-2 mt-1">
      {/* <ul className="text-lg">
        {usersList.length ?
          usersList.map((item, index) =>
            <li
              id={`${item.username}`}
              className="flex border-b-2 border-l-2 border-r-2 ali"
            >
              <Link href={`/${item.username}`} className="px-3">
                {`${index + 1}. ${item.username}`}
              </Link>
            </li>
          )
          :
          <div>Loading...</div>
        }
      </ul>
      <input type="text" className="text-black"/> */}
    </div>
  );
}
