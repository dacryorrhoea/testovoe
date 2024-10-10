"use client"

import { useState, useEffect } from "react";

export default function List() {
  const [data] = useState([{
    id: 1,
    name: 'доброе дело',
    desc: 'очень'
  },{
    id: 2,
    name: 'доброе дело',
    desc: 'очень'
  },{
    id: 3,
    name: 'доброе дело',
    desc: 'очень'
  },{
    id: 4,
    name: 'доброе дело',
    desc: 'очень'
  },{
    id: 5,
    name: 'доброе дело',
    desc: 'очень'
  },{
    id: 6,
    name: 'доброе дело',
    desc: 'очень'
  }])

  return (
    <ul className="text-lg">
      {data.map((item, index) =>
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
      )}
    </ul>
  );
}
