const celsius = Number(prompt())
const fahrenheit = Number(prompt())

function celsiusToFahrenheit (c) {
    return c * 1.8 + 32
}

function fahrenheitToCelsius (f) {
    return (f - 32) / 1.8
}

console.log(celsiusToFahrenheit(celsius))
console.log(fahrenheitToCelsius(fahrenheit))

