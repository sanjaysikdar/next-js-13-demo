"use client"

import { useRouter } from "next/navigation"
import React, { FormEvent, useState } from "react"

export default function Search() {
    const [q, setQ] = useState('');
    const router = useRouter();

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setQ('')
        router.push(`/search/${q}`)
    }
    return (
        <form onSubmit={handleSearch}>
            <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
            <button type="submit" className="bg-blue-400 text-white font-bold py-2 px-4 rounded-lg ">Search</button>
        </form>
    )
}
