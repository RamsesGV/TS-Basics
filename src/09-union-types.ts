(() => {
let userId: string | number
userId = '123'
userId = 123
console.log(userId)


const greeting = (myText: string | number) => {
if(typeof myText === 'string') {
  console.log(`string ${myText.toLowerCase()}`)
}else {
  console.log(`number ${myText.toFixed(1)}`)
}
}


console.log(greeting('Assa'))
console.log(greeting(12.12253141))
})()
