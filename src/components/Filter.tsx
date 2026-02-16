"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

interface Category {
    slug: string
    name: string
    url: string
}

interface FilterProps {
    categories: Category[]
}

function Filter({ categories }: FilterProps) {

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const currentCategory = searchParams?.get("category") || "all"


    const handleFilter = (filter: string) => {
        // clone current params so we keep other query params
        const params = new URLSearchParams(searchParams?.toString())
        params.set("category", filter)
        router.replace(`${pathname}?${params.toString()}`)
    }

    return <>
        <div className="flex gap-3 flex-wrap justify-center items-center">
            <button
                onClick={() => { handleFilter("all") }}
                className="px-4 py-2 bg-teal-900 text-white rounded-2xl shadow-md hover:bg-emerald-700 hover:cursor-pointer transition">
                All
            </button>

            {categories?.map((cat) => (
                <button
                    key={cat.slug}
                    onClick={() => { handleFilter(cat.slug) }}
                    className="px-4 py-2 bg-teal-900 text-white rounded-2xl shadow-md hover:bg-emerald-700 hover:cursor-pointer transition">
                    {cat.slug}
                </button>
            ))}
        </div>
        <div className="flex justify-center items-center gap-4 py-3">
            <div className="relative w-full max-w-md">
                <label htmlFor="sort" className="text-lg text-green-500 font-semibold">Sort products</label>
                <select
                    id="sort"
                    name="sort"
                    value={searchParams?.get("sort") || ""}
                    onChange={(e) => {
                        const params = new URLSearchParams(searchParams?.toString())
                        params.set("sort", e.target.value)
                        router.replace(`${pathname}?${params.toString()}`)
                    }}
                    className="appearance-none w-full bg-green-200 shadow-lg shadow-gray-900 text-gray-800 text-lg py-2 pl-3 pr-10 rounded-lg  focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                >
                    <option value="">Default</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                    <option value="title_asc">Title: A-Z</option>
                    <option value="title_desc">Title: Z-A</option>
                </select>

               
            </div>
        </div>

    </>
}

export default Filter
