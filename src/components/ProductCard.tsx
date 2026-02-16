"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { FaHeart } from "react-icons/fa";


interface ProductCartProps {
    product: any;
}

function ProductCart({ product }: ProductCartProps) {
    const router = useRouter()
    const [isFav, setIsFav]= useState(false)


    const addToCart = (product: any) => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]")
        console.log("Adding to cart:", product);

        const alreadyExist = cart.find((item: any) => {
            return item.id === product.id
        })
        if (alreadyExist) {
            alreadyExist.quantity += 1
        } else {
            cart.push({ ...product, quantity: 1 })
        }

        // const updateCart = [...isInCart, product]
        localStorage.setItem("cart", JSON.stringify(cart))
        console.log("Cart Updated", cart);
        // setQuantity(alreadyExist ? alreadyExist.quantity : 1)
    }

    const addToWishList = (product: any) => {
        const favorite = JSON.parse(localStorage.getItem("fav") || "[]")
        console.log("Adding to Wishlist:", product);
        // localStorage.setItem('isFav',true)

        const alreadyExist = favorite.find((item: any) => {
            return item.id === product.id
        })
        if (alreadyExist) {
           return
        } else {
            favorite.push({...product})
        }

       localStorage.setItem("fav", JSON.stringify(favorite))
        console.log("Fav Updated", favorite);
        // setIsFav(true)
        window.location.reload()
    }
    const imgSrc = product.thumbnail ?? product.image ?? product.images?.[0]

    useEffect(()=>{
        const favorite = JSON.parse(localStorage.getItem("fav") || "[]")
        const alreadyExist = favorite.find((item: any) => {
            return item.id === product.id
        })
        if(alreadyExist){
            setIsFav(true)
        }else{
            setIsFav(false)
        }
    },[isFav])

    return (
        <div className="relative bg-white/75 rounded-xl shadow-md shadow-gray-300 p-4 flex flex-col justify-between gap-2">
            <img src={imgSrc} alt={product.title} className="h-48 object-contain mb-4" />
            <Link href={`/products/productsDetails/${product.id}`}
                className="absolute top-5 right-5 text-xl text-teal-950 bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-300 hover:cursor-pointer">
                <FaEye />
            </Link>
            <button onClick={() => { addToWishList(product) }}
                className={(isFav?`absolute top-5 left-5 text-xl rounded-full p-2 text-red-500 shadow-md hover:bg-gray-300 hover:cursor-pointer transition duration-20-`:
                `absolute top-5 left-5 text-xl rounded-full text-gray-600 p-2 shadow-md hover:cursor-pointer transition duration-200`)}>
                <FaHeart />
            </button>
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-4">${product.price}</p>
            <button
                onClick={() => { addToCart(product) }}
                className="px-4 py-2 bg-teal-900 text-white rounded-2xl shadow-md hover:bg-emerald-700 hover:cursor-pointer transition">Add to Cart</button>
        </div>
    )
}

export default ProductCart
