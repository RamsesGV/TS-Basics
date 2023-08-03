(() => {
//let myNumber: number
//let myString: string

let myNull : null = null
let myUndefined : undefined = undefined

let MyNumber : number | null | undefined  = null
MyNumber = 12
MyNumber = undefined
console.log(MyNumber)

function hi(name:string | null) {
  let hello = 'hola'
  if(name) {
    hello += name

  }else {
    hello += ' nobody'
  }

  console.log(hello)
}

hi(' Rames')
hi(null)


function hiV2(name:string | null) {
  let hello = 'hola'
  hello += name?.toLowerCase || ' nobody'
  console.log(hello)
}

hiV2(' Rames')
hiV2(null)
})()
