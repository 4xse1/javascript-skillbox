const celsiusToFahrenheit = (c) => {
    return c * 1.8 + 32
}

const fahrenheitToCelsius = (f) => {
    return (f - 32) / 1.8
}

console.log(celsiusToFahrenheit(Number(prompt())))
console.log(fahrenheitToCelsius(Number(prompt())))


// Ниже реализовал эти же стрелочные функции, но в одну строку и так же протестировал их работу

const celsiusToFahrenheitInOneString = (c) => c * 1.8 + 32

const fahrenheitToCelsiusInOneString = (f) => (f - 32) / 1.8

console.log(celsiusToFahrenheitInOneString(Number(prompt())))
console.log(fahrenheitToCelsiusInOneString(Number(prompt())))