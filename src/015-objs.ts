(() => {
  type  Sizes = 'S' | 'M' | 'L' | 'XL '
  type Product =
  {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

const products: Product[] = []

  const addProduct = (obj: Product) =>  {
    products.push(obj)
    console.log(obj)
  }
  addProduct({
    title: 'camisa',
    createdAt : new Date(),
    stock:  50,
    size: 'L'
  })
  console.log(products)

  products.push({
    title:'meia',
    createdAt :new Date() ,
    stock:2
  })
  console.log(products)
})()
