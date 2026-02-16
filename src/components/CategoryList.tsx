import React from 'react'
import { getProductCategories } from '../../lib/API/product.Api';
import categoryImg from '../../public/category.png'
import Image from 'next/image';


async function CategoryList() {
    const res = await getProductCategories()
    console.log(res);

    return <>
        {res.map((category: any) => (
            <div key={category.slug} className="bg-white/75 rounded-xl shadow-md shadow-gray-300 p-4 flex flex-col justify-between gap-2">
                <Image src={categoryImg} alt={category.name} className="h-24 object-contain mb-4" />
                <h2 className="text-lg font-semibold mb-2">{category.name}</h2>
            </div>
        ))}
    </>
}

export default CategoryList
