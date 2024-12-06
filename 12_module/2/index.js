const text = "Промокод применен: ";
const promocodeArr = [
  {
    promocode: 'PROM10',
    gift: "Скидка 10%"
  },
  {
    promocode: 'PROM50',
    gift: "Скидка 50%"
  },
  {
    promocode: 'GIFT',
    gift: "Подарок в корзине"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const inputBox = document.querySelector(".promocode-input");
  const textEl = document.querySelector(".accepted-text");
  const button = document.querySelector("button");

  const cookie = getCookie();

  inputBox.addEventListener("focus", () => {
    if (cookie.promocode) {
      inputBox.value = cookie.promocode;
    }
  });

  button.addEventListener("click", function checkCode(event) {
    event.preventDefault(); 

    const enteredCode = inputBox.value;
    const foundPromocode = promocodeArr.find(
      promo => promo.promocode === enteredCode
    );

    if (foundPromocode) {
      textEl.innerHTML = text + foundPromocode.gift;
      document.cookie = `promocode=${foundPromocode.promocode}`; 
    } else {
      textEl.innerHTML = "";
    }
  });
});

function getCookie() {
  return document.cookie.split("; ").reduce((acc, item) => {
    const [name, value] = item.split("=");
    acc[name] = value;
    return acc;
  }, {});
}