
export const getAllProducts = async () => {
    const data = await fetch('https://dummyjson.com/products')
    const res = await data.json()
    return res.products
}

export const getProductById = async (id: number) => {
    const data = await fetch(`https://dummyjson.com/products/${id}`)
    const res = await data.json()
    return res
}

export const getProductCategories = async () => {
    const data = await fetch('https://dummyjson.com/products/categories')
    const res = await data.json()
    return res
}

export const getProductByCategories = async (category: string) => {
    const data = await fetch(`https://dummyjson.com/products/category/${encodeURIComponent(category)}`)
    const res = await data.json()
    return res.products
}

export const searchProducts = async (query:string)=>{
    const data = await fetch(`https://dummyjson.com/products/search?q=${query}`)
    const res = await data.json()
    return res
}