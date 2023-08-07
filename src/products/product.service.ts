import { Product } from './product.model'

const products: Product[] = []

  const addProduct = (obj: Product) =>  {
    products.push(obj)
    console.log(obj)
  }

  const calcStock = () : number => {
    let total = 0
    products.forEach((item) => {
      total += item.stock
      console.log(total)
    })
    return total

  }

  module.exports = { products, addProduct, calcStock };
