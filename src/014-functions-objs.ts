(() => {
  const login = (obj: {email: string, password: string}) => {
    console.log(obj)

  }
  login({
    email: 'ramses@gmail.com' ,
    password: 'ramses123'
  })

type  Sizes = 'S' | 'M' | 'L' | 'XL '
const products: any[] = []

  const addProduct = (obj: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) =>  {
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
})()
