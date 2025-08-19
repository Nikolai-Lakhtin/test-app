export function testForTest(num: number): boolean {
  return num > 0 && num < 100;
}

export function isEven(num: number): boolean {
  return num % 2 === 0 
}

export function getUserFullName(user: {firstName?: string, lastName?: string}):string | never{
  const {firstName, lastName} = user
  if (firstName && lastName) return `${firstName} ${lastName}`
  if (lastName) return String(lastName)
  if (firstName) return String(firstName)
  throw new Error('User has no name')
}

export function getAverage(arr: number[]): number| never{
  if(arr.length === 0) throw new Error("Array is empty")
  let del = arr.length
  const sum =  arr.reduce((acc,item) => {
    if(!Number.isNaN(item)) {
      acc += item
    } else {
      del -= 1
    }
    return acc
  },0)
  if(del === 0) throw new Error("No valid numbers")
  return sum / del
}

export function processUser(user:{name?: string}, callback: (name:string) => void) : never | void {
  if(user.name) {
    callback(user.name)
  } else {
    throw new Error("User has no name")
  }
}

export function greetUser(user:{firstName?: string}, callback:(text:string) => void) : never | void {
    if( user.firstName) {
      return callback(`Hello, ${user.firstName}!`)
    } else {
      throw new Error("User has no firstName")
    }
}

export function processNumbers(arr: number[], callback:(text: string)=>void): void | never {
  if(!arr.length) throw new Error("Array is empty")
  arr.forEach((item) => {
    callback(`Number: ${item}`)
  })
}