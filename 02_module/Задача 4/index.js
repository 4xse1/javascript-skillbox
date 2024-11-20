
let index = 0

const currentYear = 2024
let first = prompt().split(", ")
let second = prompt().split(", ")
let third = prompt().split(", ")

let first_age = currentYear - first[1]
let second_age = currentYear - second[1]
let third_age = currentYear - third[1]
console.log(++index, first[0], first_age)
console.log(++index, second[0], second_age)
console.log(++index, third[0], third_age)
console.log("Средний возраст пользователей:", (first_age + second_age + third_age) / 3)