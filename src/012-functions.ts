(() => {
  type ShirtsSIZE = 'S' | 'M' | 'L' | 'XL'

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: ShirtsSIZE
    ) {
      return{
        title,
        createdAt,
        stock,
        size,

      }
    }

    const producto1 = createProductToJson('P1', new Date(),12,'S')
    console.log(producto1)
    console.log(producto1.title)
})()
