// 1. push
// let array = ["Ali", "Mirza", "Umer", "Bilal"]
// array.push("Tanzeel")
// console.log(array)
// array.push("Rehman")
// console.log(array)

// 2. pop
// let array = ["Ali", "Mirza", "Umer", "Bilal"]
// array.pop()
// console.log(array)
// array.pop()
// console.log(array)

// 3. shift
// let fruits = ["Banana", "Mango", "Kivi", "Apple"]
// let removedFruit = fruits.shift()
// console.log(fruits)
// console.log(removedFruit)

// 4. unshift
// let array = ["Mirza", "Tanzeel", "Bilal", "Yasir"]
// array.unshift("Ali")
// console.log(array)

// 5. splice
// let fruits = ["Apple", "Banana", "Mango", "Kivi", "Melon", "Orange"]
// let myFruits = fruits.splice(1, 3)
// console.log(myFruits)

// 6. slice
// let myFriends = ["Mirza", "Hassan", "Tanzeel", "Zaryab", "Danish", "Rehman"]
// let myAnother = myFriends.slice(0, 4)
// console.log(myAnother)

// 7. concat
// let array = []
// let array1 = ["Ali", "Mirza", "Tanzeel"]
// let array2 = ["Sonata", "CH-R", "Civic"]
// let array3 = ["Mango", "Banana", "Kivi"]
// let mixArray = array.concat(array1, array2, array3)
// console.log(mixArray)

// 8. indexOf
// let fruits = ["Banana", "Mango", "Apple", "Kivi"]

// let appleIndex = fruits.indexOf("Apple")
// console.log(appleIndex)

// let orangeIndex = fruits.indexOf("Orange")
// console.log(orangeIndex)

// 9. forEach
// let array = ["Ali", "Mirza", "Bilal", "Tanzeel", "Rehman"]
// array.forEach((name) => {
//     console.log(name)
// })
// let mulitplyTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// mulitplyTwo.forEach((square) => {
//     console.log(square * 2)
// })

// 10. map
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// let doubleNumbers = numbers.map((double) => {
//     return double * 2
// })
// console.log(doubleNumbers)

// 11. filter
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// let greaterThanTen = numbers.filter((ten) => {
//     return ten > 10
// })
// console.log(greaterThanTen)

// 12. reduce
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, 0)
// console.log(sum)

// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let avg = numbers2.reduce((num1, num2) => {
//     return num1 + num2 / 2
// })
// console.log(avg)

// 13. every
// let numbers = [93, 69, 55, 288]
// let allAboveFifty = numbers.every((number) => {
//     return number > 50
// })
// console.log(allAboveFifty)

// 14. test
// let numbers = [2, 4, 6, 8, 10]
// let isTwo = numbers.some((two) => {
//     return two == 2
// })
// console.log(isTwo)