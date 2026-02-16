"use client"
import { useEffect, useState } from "react"
import { PiTrashSimpleFill } from "react-icons/pi";

interface wishlistProps {
    id: number,
    title: string,
    price: number,
    quantity: number
    thumbnail?: string,
    image?: string,
    images?: string[]
}


function Page() {
    const [wishlist, setWishlist] = useState<wishlistProps[]>([])
    // const [quantity, setQuantity] = useState(1)

    const removeFromWishlist = (id: number) => {
        localStorage.setItem("fav", JSON.stringify(wishlist.filter((item) => item.id !== id)))
        setWishlist(wishlist.filter((item) => item.id !== id))
    }


    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('fav') || "[]")
        setWishlist(storedWishlist)
    }, [])


    return <>
        <div className="p-6 mt-25">
            <h1 className="text-2xl font-bold mb-4">WishList</h1>
            <div className="flex flex-col gap-4 ">
                {wishlist.length > 0 ?
                    wishlist.map(item => (
                        <div key={item.id} className="flex flex-col sm:flex-row items-center gap-4 bg-white/75 rounded-xl shadow-md p-4">
                            <div className="">
                                <img src={item.thumbnail ?? item.image ?? item.images?.[0]} alt={item.title} className="h-35 w-35 object-contain mb-2" />
                            </div>
                            <div className="flex items-center gap-5 justify-between w-full">
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-teal-700">{item.price}</p>
                            </div>

                            <div className="text-red-700 hover:cursor-pointer" onClick={() => { removeFromWishlist(item.id) }}>
                                <PiTrashSimpleFill />
                            </div>
                        </div>


                    ))
                    : <p className="text-red-500 font-semibold text-2xl flex justify-center items-center ">No Items Added To Wishlist</p>}
            </div>
        </div>
    </>
}

export default Page
