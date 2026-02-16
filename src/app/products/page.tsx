import Filter from "@/src/components/Filter";
import ProductCart from "@/src/components/ProductCard";
import { getAllProducts, getProductByCategories, getProductCategories } from "@/lib/API/product.Api";
import FeaturedProducts from "@/src/components/FeaturedProducts/FeaturedProducts";

export const revalidate = 15;
export const metadata = {
    title: "Products"
}

interface Props {
    searchParams: {
        category?: string,
        sort?: "price_asc" | "price_desc" | "title_asc" | "title_desc",
    }
}

async function Page({ searchParams }: Props) {

    const { category, sort } = await searchParams ?? {}
    const filteredValue = category ?? "all"

    let products = filteredValue === "all"
        ? await getAllProducts()
        : await getProductByCategories(filteredValue)

    if (sort) {
        switch (sort) {
            case "price_asc":
                products = products.sort((a, b) => a.price - b.price)
                break
            case "price_desc":
                products = products.sort((a, b) => b.price - a.price)
                break
            case "title_asc":
                products = products.sort((a, b) => a.title.localeCompare(b.title))
                break
            case "title_desc":
                products = products.sort((a, b) => b.title.localeCompare(a.title))
                break
        }
    }
    // fetch categories for the Filter component (server -> client prop)
    const categories = await getProductCategories()

    return <>
        <Filter categories={categories} />
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-25 mb-10 px-5">
            {products.map((product: any) => (
                <ProductCart key={product.id} product={product}/>
            ))}
        </div> */}
        

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-25 mb-10 px-5">
            {products.map((product: any) => (
                <ProductCart key={product.id} product={product} />
            ))}
        </div>


    </>
}

export default Page
