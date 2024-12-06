export default class Delivery {
    constructor(customerName, address, distance) {
      this.customerName = customerName;
      this.address = address;
      this.distance = distance;
    }
  

    createCardElement() {
      const card = document.createElement('div');
      card.className = 'delivery-card';
  

      const nameElement = document.createElement('h3');
      nameElement.textContent = `Покупатель: ${this.customerName}`;
  
      const addressElement = document.createElement('p');
      addressElement.textContent = `Адрес: ${this.address}`;
  
      const distanceElement = document.createElement('p');
      distanceElement.textContent = `Расстояние: ${this.distance} км`;
  
      
      card.appendChild(nameElement);
      card.appendChild(addressElement);
      card.appendChild(distanceElement);
  
      return card;
    }
  
    
    get name() {
      return this.customerName;
    }
  
    set name(newName) {
      this.customerName = newName;
    }
  
    get deliveryAddress() {
      return this.address;
    }
  
    set deliveryAddress(newAddress) {
      this.address = newAddress;
    }
  
    get deliveryDistance() {
      return this.distance;
    }
  
    set deliveryDistance(newDistance) {
      this.distance = newDistance;
    }
  }
  