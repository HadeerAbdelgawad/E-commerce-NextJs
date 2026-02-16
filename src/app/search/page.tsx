import ProductCart from '@/src/components/ProductCard'
import { searchProducts } from '@/lib/API/product.Api'

interface Props {
    searchParams: {
        search: string
    }
}

async function Page({ searchParams }: { searchParams: Promise<{ search: string }> }) {
    const { search } = await searchParams
    const searchInput = search ?? ''
    console.log("Search Input:", searchInput);

    const products = searchInput ? await searchProducts(searchInput) : []
    console.log("Search Results:", products.products);


    return <>
        <div className="p-6 mt-25">
            <h1 className='text-2xl font-semibold text-center'>Search Results for "{searchInput}"</h1>
            {products.products.length > 0 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-25 mb-10 px-5'>
                    {products.products.map((p: any) => (
                        <ProductCart key={p.id} product={p} />
                    ))}
                </div>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    </>
}

export default Page
