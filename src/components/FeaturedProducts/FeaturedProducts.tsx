"use client"
import { getAllProducts, getProductByCategories } from '@/lib/API/product.Api'
import { useQuery } from '@tanstack/react-query'
import ProductCart from '../ProductCard'

interface FeaturedProductsProp{
    category :string
}

function FeaturedProducts({ category }: FeaturedProductsProp) {
    const { data, isLoading, error } = useQuery({ queryKey: ['Products'],
        queryFn: () => category === 'all' ? getAllProducts() : getProductByCategories(category),

    })
    if (isLoading) return <div className='h-screen flex justify-center items-center text-teal-700 font-semibold text-2xl'>
        Loading Products...
    </div>

    if (error) return <div className='h-screen  flex justify-center items-center text-red-700 font-semibold text-2xl'>
        Error in Displaying Data
    </div>

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-25 mb-10 px-5">
            {data?.map((product: any) => (
                <ProductCart key={product.id} product={product} />
            ))}
        </div>
    );
}

export default FeaturedProducts
