(() => {
  type UserID = string | number
  let userId: UserID
  userId = '123'
  userId = 123
  console.log(userId)


  const greeting = (userId: UserID) => {
  if(typeof userId === 'string') {
    console.log(`string ${userId.toLowerCase()}`)
  }
  }


  //LITERAL TYPES
  type ShirtsSIZE = 'S' | 'M' | 'L' | 'XL'
  let shirtSize : ShirtsSIZE
  shirtSize = 'M'
  shirtSize = 'L'
  shirtSize = 'XL'
  shirtSize = 'S'

})()
