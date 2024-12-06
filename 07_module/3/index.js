let products = ["Молоко", "Хлеб", "Яблоко", "Арбуз", "Сыр", "Абрикос"];

const productList = document.getElementById('product-list');
const addProductBtn = document.getElementById('add-product-btn');

function displayProducts() {
    productList.innerHTML = ''; 
    products.sort();
    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product;
        productList.appendChild(li);
    });
}


function addProduct() {
    const newProduct = prompt("Введите название товара:");
    if (newProduct) {
        products.push(newProduct);
        displayProducts();  
    } else {
        alert("Название товара не введено!");
    }
}


addProductBtn.addEventListener('click', addProduct);
displayProducts();