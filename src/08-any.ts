(() => {
let myDynamicVar: any
myDynamicVar = 100
myDynamicVar = null
myDynamicVar = {}
myDynamicVar = ''
console.log(myDynamicVar)


myDynamicVar = 'Hola'
const rta = (myDynamicVar as string).toLowerCase()
console.log(rta)

myDynamicVar = 12
const rta2 = (<number>myDynamicVar).toFixed
console.log(rta2)

})()
