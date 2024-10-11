"use client"

import { useState, useEffect } from "react";
import { addDeed } from "@/utils/api";
import { useRouter } from "next/navigation";

export default function DealAdd() {
  const [descValue, setDescValue] = useState<string>('')

  const router = useRouter()

  const handleAddDeel = () => {
    addDeed({title: 'новое дело!', desc: descValue}).then(() => router.refresh())
  }

  return (
    <div className="flex mt-4">
      <input type="text" className="text-black" onChange={(e) => setDescValue(e.target.value)}/>
      <button className="text-xl text-yellow-400 font-semibold ml-3" onClick={handleAddDeel}>
        Добавить
      </button>
    </div>
  );
}
