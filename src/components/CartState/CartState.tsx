"use client"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { PiTrashSimpleFill } from 'react-icons/pi'

interface cartProps {
    id: number,
    title: string,
    description: string,
    price: number,
    quantity: number
    thumbnail?: string,
    image?: string,
    images?: string[]
}
const fetchCart = async (): Promise<cartProps[]> => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
};
function CartState() {
    // const [cart, setCart] = useState<cartProps[]>([])
    const queryClient = useQueryClient();
    const { data: cart = [], isLoading, error } = useQuery<cartProps[]>({
        queryKey: ['cart'],
        queryFn: fetchCart
    });
    const updateCartMutation = useMutation({
        mutationFn: async (newCart: cartProps[]) => {
            localStorage.setItem("cart", JSON.stringify(newCart));
            return newCart;
        },
        onSuccess: (newCart) => {
            queryClient.setQueryData(["cart"], newCart);
        },
    });


    const removeFromCart = (id: number) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        updateCartMutation.mutate(updatedCart)
        
    }

    const increaseQuantity = (id: number) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: (item.quantity ?? 0) + 1 } : item
        );
        updateCartMutation.mutate(updatedCart);
    }

    const decreaseQuantity = (id: number) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: Math.max((item.quantity ?? 1) - 1, 1) }
                : item
        );
        updateCartMutation.mutate(updatedCart);
    }


    if (isLoading) return <div className="min-h-[200px] flex justify-center items-center">
      Loading Products...
    </div>

    if (error) return <div className='min-h-[200px] flex justify-center items-center text-red-700 font-semibold text-2xl '>
        Error in Displaying Data
    </div>



    return (
        <div className="flex flex-col gap-4">
            {cart.length > 0 ?

                cart.map(item => (
                    <div key={item.id} className="bg-white/75 flex flex-col sm:flex-row items-center gap-4 rounded-xl shadow-md p-4">
                        <div className="">
                            <img src={item.thumbnail ?? item.image ?? item.images?.[0]} alt={item.title} className=" object-contain mb-2" />
                        </div>
                        <div className="flex items-center gap-5 justify-between w-full">
                            <div >
                                <p className="font-semibold">{item.title}</p>
                                <p>{item.description.split(' ').slice(0,20).join(' ')+"....."}</p></div>
                            <p className="text-teal-700">{item.price*item.quantity}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                        </div>

                        <div className="text-red-700 hover:cursor-pointer" onClick={() => { removeFromCart(item.id) }}>
                            <PiTrashSimpleFill />
                        </div>
                    </div>


                ))
                : <p className="text-red-500 font-semibold text-2xl flex justify-center items-center ">No Items Added To Cart</p>}
        </div>
    );
}

export default CartState
