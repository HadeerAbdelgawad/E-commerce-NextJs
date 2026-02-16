import OrderCard from '@/src/components/OrderCard'

function Page() {
    

    return (
        <>
            <div className='p-6 mt-25 w-full'>

                <h1 className="text-2xl font-bold mb-4">Order History</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-25 mb-10 px-5'>
                    
                    <OrderCard/>
                </div>
            </div>
        </>
    )
}

export default Page
