"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

// interface SearchProps {
//     search: string
// }

function Search() {

    const searchParams = useSearchParams()
    const router = useRouter()
    // const pathname = usePathname()
    const [input, setInput] = useState(searchParams.get('search') ?? '')

    useEffect(() => {
        setInput(searchParams.get('search') ?? '')
    }, [searchParams])

    const handleSearch = () => {
        const query = input ? `?search=${encodeURIComponent(input)}` : ''
        router.push(`/search${query}`)
    }
    return <>
        <div className='flex gap-2 justify-center items-center'>

        <input type="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Search..." className="px-4 py-2 bg-black/50 text-white rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-500" />
        <button
            onClick={handleSearch}
            className='px-2 py-2 bg-teal-500 text-white rounded-xl hover:cursor-pointer hover:bg-teal-600 transition duration-200'>
            Search
        </button>
        </div>
    </>
}

export default Search
