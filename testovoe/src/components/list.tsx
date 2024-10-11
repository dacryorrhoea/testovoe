"use client"

import { useState, useEffect } from "react";
import { getDeedsList, deleteDeed } from "@/utils/api";
import { useRouter } from "next/navigation";

type Deal = {
  id: number,
  title: string,
  desc: string
}

export default function List() {
  const [data, setData] = useState<Array<Deal>>([]);

  const router = useRouter()

  useEffect(() => {
    getDeedsList().then(deeds => setData(deeds))
  }, [])

  const handleDEleteDEal = (id: number) => {
    deleteDeed(id).then(() => router.refresh())
  }

  return (
    <ul className="text-lg">
      {data.length?
        data.map((item, index) =>
          <li
            id={`${item.id}`}
            className="flex border-b-2 border-l-2 border-r-2 ali"
          >
            <span className="px-3">
              {`${index + 1}. ${item.title}: ${item.desc}`}
            </span>
            <button className="text-red-500 border-l-2 px-3" onClick={() => handleDEleteDEal(item.id)}>
              удалить
            </button>
          </li>
        )
      :
        <div>Loading...</div>
      }
    </ul>
  );
}
