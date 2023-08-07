import {addProduct, calcStock, products} from './product.service'

addProduct({
  title: 'zapato',
  createdAt: new Date(),
  stock:12
})
addProduct({
  title: 'camisa',
  createdAt: new Date(),
  stock:1,
  size:'L'
})

console.log(products)
