"use client"

import { useState, useEffect } from "react";
import { getDeedsList, deleteDeed } from "@/utils/api";
import { useRouter } from "next/navigation";
import useDeeds from "@/hooks/useDeeds";

type Deal = {
  id: number,
  title: string,
  desc: string
}

export default function List() {
  const [descValue, setDescValue] = useState('')

  const router = useRouter()

  const { deedsList, isLoading, deleteDeedHandler } = useDeeds()

  if (isLoading) {
    return <>Loading...</>
  }

  return (
    <>
    <ul className="text-lg w-full">
      {deedsList.length?
        deedsList.map((item, index) =>
          <li
            id={`${item.id}`}
            className="flex border-b-2 border-x-2 w-full"
          >
            <span className="px-3 w-4/5">
              {`${index + 1}. ${item.title}: ${item.desc}`}
            </span>
            <button
              className="text-red-500 w-1/5 border-l-2"
              onClick={() => deleteDeedHandler(item.id)}
            >
              удалить
            </button>
          </li>
        )
      :
        <div>Loading...</div>
      }
    </ul>
    <div className="flex mt-4">
      <input
        type="text"
        className="text-black"
        onChange={(e) => setDescValue(e.target.value)}/>
      <button
        className="text-xl text-yellow-400 font-semibold ml-3"
        onClick={() => {}}>
        Добавить
      </button>
    </div>
    </>
  );
}
