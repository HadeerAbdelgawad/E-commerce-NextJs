"use client"
import React, { useEffect, useState } from 'react'
import { IoCheckmarkDone } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { CiBoxes } from "react-icons/ci";
import { FaTools } from "react-icons/fa";

function OrderCard() {
    const [order, setOrder] = useState<any[]>([])

    useEffect(() => {

        const data = localStorage.getItem('cart')
        if (data) {
            const orders = JSON.parse(data)
            console.log("orders:", orders)
            setOrder(orders)
        }
    }, [])
    return (
        <>
            {order.map((item) => {
                return (
                    <div key={item.id} className=" bg-white/75 rounded-xl shadow-md shadow-gray-300 p-4 flex flex-col justify-between">
                        <img src={item.thumbnail} alt={item.title} className="h-48 object-contain mb-4" />
                        <p className='flex items-center gap-2'><IoCheckmarkDone /><span className='text-green-600 font-medium'>{item.stock} InStock</span></p>
                        <p className='flex items-center gap-2'><CiBoxes /><span className='text-green-600 font-medium'>{item.quantity} Comming</span></p>
                        <p className='flex items-center gap-2'><FaTools /><span className='text-green-600 font-medium'>{item.warrantyInformation} </span></p>

                        <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                        <span><span className='font-medium'>Brand:</span> {item.brand}</span>
                        <span className='flex items-center gap-2'><span className='text-teal-600'><BiCategoryAlt /></span>{item.category}</span>
                        <span className="text-gray-700 mb-4">${item.price}</span>
                        <p className='text-center text-red-500 font-medium'>{item.returnPolicy}</p>
                    </div>
                )
            })}
        </>
    )
}

export default OrderCard
