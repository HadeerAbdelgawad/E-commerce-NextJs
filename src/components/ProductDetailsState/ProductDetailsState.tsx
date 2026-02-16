"use client"
import { getProductById } from '@/lib/API/product.Api';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
type ProductDetailsProps = {
    id: number;
};

function ProductDetailsState({ id }: ProductDetailsProps) {
    const { data, isLoading, error } = useQuery({ queryKey: ['Products Details', id], queryFn: () => getProductById(id) })
    const [descControl, setDescControl] = useState('See Less')
    const [descriptionText, setDescriptionText]= useState('')

    const handleDesc = () => {
        if (descControl === 'See Less') {
            setDescriptionText(data.description.split(' ').slice(0,10).join(' ')+".....")
            setDescControl('See More')
        }
        if(descControl === 'See More'){
            setDescriptionText(data.description)
            setDescControl('See Less')
        }
    }


    if (isLoading) return <div className='h-screen flex justify-center items-center text-teal-700 font-semibold text-2xl'>
        Loading Products Details...
    </div>

    if (error) return <div className='h-screen  flex justify-center items-center text-red-700 font-semibold text-2xl'>
        Error in Displaying Data
    </div>

    return (
        <div className="max-w-2/3 bg-white/75 rounded-xl shadow-md shadow-gray-300 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <img src={data.thumbnail} alt={data.title} className="w-full h-auto rounded-md mb-4" />
            <div className="flex flex-col gap-4 justify-between">
                <h2 className="text-2xl font-semibold mb-2">{data.title}</h2>
                <p className="text-gray-700 mb-4">{(descriptionText?descriptionText:data.description)}<button onClick={()=>{handleDesc()}} className='font-semibold text-green-600 hover:cursor-pointer'>{descControl}</button></p>
                <span className="text-xl font-bold text-green-600">${data.price}</span>
            </div>
        </div>
    );
}

export default ProductDetailsState
