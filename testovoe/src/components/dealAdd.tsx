"use client"

import { useState, useEffect } from "react";
import { addDeal } from "@/utils/api";
import { useRouter } from "next/navigation";

export default function DealAdd() {
  const [descValue, setDescValue] = useState<string>('')

  const router = useRouter()

  const handleAddDEal = () => {
    addDeal({name: 'новое дело!', desc: descValue})
    .then(value => router.refresh())
    .catch(error => console.log(error))
  }

  return (
    <div className="flex mt-4">
      <input type="text" className="text-black" onChange={(e) => setDescValue(e.target.value)}/>
      <button className="text-xl text-yellow-400 font-semibold ml-3" onClick={handleAddDEal}>
        Добавить
      </button>
    </div>
  );
}
