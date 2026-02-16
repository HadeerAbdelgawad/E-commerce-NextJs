import CategoryList from "@/src/components/CategoryList"
import { Suspense } from "react"

export const metadata = {
    title: "Categories"
}
async function Categories() {


    return <>
        <div className='mt-25 px-5'>

            <header className=" mb-6">
                <h1 className="text-3xl font-semibold">Categories</h1>
                <p className="text-ms text-gray-600">Explore our category list to discover products across different collections.</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                <Suspense fallback={<div className="col-span-full text-center text-gray-500">Loading categories...</div>}>
                    <CategoryList />
                </Suspense>

            </div>
        </div>

    </>
}

export default Categories
