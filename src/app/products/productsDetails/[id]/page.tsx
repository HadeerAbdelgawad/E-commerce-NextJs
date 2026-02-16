import { getProductById } from "@/lib/API/product.Api";
import ProductDetailsState from "@/src/components/ProductDetailsState/ProductDetailsState";

type PageProps = {
  params: Promise<{ id: string }>;
};

export const metadata={
  title: "Product Details"
}
async function Page({ params }: PageProps) {
    const productId = Number((await params).id);
    let res;
    try{
        res = await getProductById(productId)
        console.log('res',res);
    }catch (error) {
        console.error("Error fetching product details:", error);
    }

    return <>
    <div className=" px-5 flex flex-col items-center gap-6 justify-center my-4">

        <h1 className="text-3xl font-bold mb-4 text-center">Product Details</h1>   
        <ProductDetailsState id={res.id}/> 
       

    </div>
    </>
}

export default Page
