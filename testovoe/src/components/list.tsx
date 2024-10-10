"use client"

import { useState, useEffect } from "react";
import { getDealsList } from "@/utils/api";

type Deal = {
  id: number,
  name: string,
  desc: string
}

export default function List() {
  const [data, setData] = useState<Array<Deal>>([]);

  useEffect(() => {
    getDealsList()
    .then(value => setData(value))
    .catch(error => console.log(error))
  }, [])

  return (
    <ul className="text-lg">
      {data.length?
        data.map((item, index) =>
          <li
            id={`${item.id}`}
            className="flex border-b-2 border-l-2 border-r-2 ali"
          >
            <span className="px-3">
              {`${index + 1}. ${item.name}: ${item.desc}`}
            </span>
            <button className="text-red-500 border-l-2 px-3">
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
