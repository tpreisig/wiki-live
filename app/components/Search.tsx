'use client'

import { useState, FormEvent} from "react";
import { useRouter } from "next/navigation";

export default function Search() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('');
        router.push(`/${search}/`);
    }

  return (
    <form className="flex justify-start content-center text-white hover:text-sky-300" 
          onSubmit={handleSubmit} 
    > 
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white/30 w-80 text-xl rounded-xl pl-4"
        placeholder="Search"
      />
      <button className="p-2 text-4xl rounded-xl bg-transparent ml-2">👀</button>
    </form>
  )
}
