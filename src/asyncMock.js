const products = [
    {id:'1',name:'Difusores',price:600, category:'difusor', stock:8,description:'info de difusor'},
    {id:'2',name:'Velas',price:800, category:'vela',stock:10, description:'info de vela'},
    {id:'3',name:'Perfuminas',price:500, category:'perfume',stock:15, description:'info de perfume'},
    {id:'4',name:'Bombones',price:350, category:'bombon',stock:12, description:'info de bombon'},

]




export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        },500)
    })
}
