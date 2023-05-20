const products = [
    {id:'1',name:'Difusores',price:600, stock:8, category:'difusor', description:'info de difusor'},
    {id:'2',name:'Velas',price:800,stock:10, category:'vela', description:'info de vela'},
    {id:'3',name:'Perfuminas',price:500,stock:15, category:'perfume', description:'info de perfume'},
    {id:'4',name:'Bombones',price:350,stock:12, category:'bombon', description:'info de bombon'},

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