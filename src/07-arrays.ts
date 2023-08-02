(() => {
let prices = [1,2,2,4,5,4,6,4,5,6,5,'hola' , true ]
prices.push(258)
console.log(prices)

let prices2: (number|string|boolean)[] = [1,'a',false]
console.log(prices2)
})()
