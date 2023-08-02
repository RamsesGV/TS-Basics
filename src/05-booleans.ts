(() => {
let isEnable = true
isEnable = false
console.log(isEnable)

let isNew : boolean = true
console.log(isNew)

const random = Math.floor(Math.random() * 101)
console.log(random)
isNew = random >= 50 ? true : false
console.log(isNew)
})()
