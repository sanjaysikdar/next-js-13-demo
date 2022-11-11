import React from 'react'
import { SearchResult } from '../../../typings'

type PageProps = {
    params: {
        q: string
    }
}

const search = async (q: string) => {
    const res = await fetch(`https://serpapi.com/search.json?q=${q}&api_key=247517329d5a0ad95d6dc56315daff0dd1107eafbeafb66d9e21ee0c88506676`)

    const data: SearchResult = await res.json()
    return data
}

export default async function SearchResultPage({ params: { q } }: PageProps) {
    const results = await search(q)
    // console.log(results)
    return (
        <div>
            <p className='text-gray-500 text-sm'>You searched for {q}</p>

            <ol className='space-y-5 p-5'>
                {results.organic_results.map((result) => (

                    <li key={result.position} className='list-decimal'>
                        <p className='font-bold'>{result.title}</p>
                        <p>{result.snippet}</p>
                    </li>
                ))}
            </ol>
        </div>
    )
}
