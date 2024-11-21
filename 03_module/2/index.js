const power = Number(prompt());
let tax
if (power < 100) {
    tax = power * 12
} else if (100 <= power && power < 125) {
    tax = power * 25
} else if (125 <= power && power < 150) {
    tax = power * 35
} else if (150 <= power && power < 175) {
    tax = power * 45
} else if (175 <= power && power < 200) {
    tax = power * 50
} else if (200 <= power && power < 225) {
    tax = power * 65
} else if (225 <= power && power < 250) {
    tax = power * 75 
} else {
    tax = power * 150
}

console.log("Сумма налога", tax)
