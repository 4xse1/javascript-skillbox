import EditDelivery from './EditDelivery.js';

export const deliveryArr = [
  new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8, "delivery"),
  new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
  new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "canceled")
];

const deliveryContainer = document.getElementById('delivery-container');
const totalDistanceContainer = document.getElementById('total-distance'); 

export function displayDeliveries(deliveries) {
  deliveryContainer.innerHTML = '';
  deliveries.forEach(delivery => {
    const card = delivery.createCardElement();
    deliveryContainer.appendChild(card);
  });
}


displayDeliveries(deliveryArr);


const calculateDistanceButton = document.createElement('button');
calculateDistanceButton.textContent = "Рассчитать общую дистанцию";
calculateDistanceButton.onclick = () => {
  const totalDistance = EditDelivery.getTotalDistance(deliveryArr);
  totalDistanceContainer.textContent = `Общая дистанция: ${totalDistance} км`;
};


document.body.appendChild(calculateDistanceButton);
document.body.appendChild(totalDistanceContainer);
