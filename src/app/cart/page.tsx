"use client"
import CartState from "@/src/components/CartState/CartState";
import ShippingInfo from "@/src/components/ShippingInfo";
import { useEffect, useState } from "react"
import { PiTrashSimpleFill } from "react-icons/pi";

interface cartProps {
    id: number,
    title: string,
    price: number,
    quantity: number
    thumbnail?: string,
    image?: string,
    images?: string[]
}


function Page() {

    const [cartItems, setCartItems] = useState<cartProps[]>([])
    const [shippingMethod, setShippingMethod] = useState<'standard' | 'express' | 'free'>('standard')

    useEffect(() => {
        try {
            const raw = localStorage.getItem('cart')
            const stored = raw ? JSON.parse(raw) : []
            setCartItems(stored)
        } catch (e) {
            setCartItems([])
        }
    }, [])

    const subtotal = cartItems.reduce((s, i) => s + i.price * (i.quantity ?? 1), 0)



    return <>
        <div className="p-6 mt-25 w-full ">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <CartState />
                <div className=""><ShippingInfo subtotal={subtotal} shippingMethod={shippingMethod} /></div>
            </div>
        </div>
    </>
}

export default Page
