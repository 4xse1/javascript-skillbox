const first = Number(prompt())
const second = Number(prompt())
const third = Number(prompt())

function getAverage(a, b, c) {
    return (a + b + c) / 3
}

console.log(getAverage(first, second, third))