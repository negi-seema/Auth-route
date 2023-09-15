
const LoginApi = async (data) => {
    try {
        const apidata = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        const result = await apidata.json()
        return result
    } catch (error) {
        console.log("LoginApi",error)
    }
}

const AllProducts = async () => {
    try {
        const apidata = await fetch('https://dummyjson.com/products')
        const result = await apidata.json()
        return result
    } catch (error) {
        console.log('all products',error)
    }
}

const ProductDetail = async (productId) => {
    try {
        const apidata = await fetch(`https://dummyjson.com/products/${productId}`)
        const result = await apidata.json()
        return result
    } catch (error) {
        console.log('search products',error)
    }
}

const SearchProducts = async (searchItem) => {
    try {
        const apidata = await fetch(`https://dummyjson.com/products/search?q=${searchItem}`)
        const result = await apidata.json()
        return result
    } catch (error) {
        console.log('search products',error)
    }
}

export { LoginApi, AllProducts ,SearchProducts ,ProductDetail}