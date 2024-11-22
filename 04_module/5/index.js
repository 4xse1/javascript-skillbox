const priceItem = 25000
const amountItem = 3
const discountItem = 20

function totalSum (price, amount, discount) {
    finalPrice = price - price * (discount / 100)
    console.log( finalPrice * amount )
}

totalSum(priceItem, amountItem, discountItem)