
export const getProducts = async (API) => {
    const response = await fetch(API)
    const data = await response.json()
    return data
}

export const getProduct = async (API, id) => {
    const response = await fetch(`${API}/${id}`)
    const data = await response.json()
    return data
}

export const getAllCategories = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/categories`)
    const data = await response.json()
    return data
}

export const getProductsByCategory = async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = await response.json()
    return data
}