import Delivery from './Delivery.js';
import { displayDeliveries } from './app.js';

export default class EditDelivery extends Delivery {
  constructor(customerName, address, distance, status = "delivery") {
    super(customerName, address, distance);
    this.status = status;
  }

  createCardElement() {
    const card = super.createCardElement();
    card.classList.add(this.status);

    const editButton = document.createElement('button');
    editButton.textContent = "Изменить";
    editButton.className = 'edit-button';
    editButton.onclick = () => this.showEditModal();

    card.appendChild(editButton);
    return card;
  }

  showEditModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';

    const nameInput = this.createInputField("Имя", this.customerName);
    const addressInput = this.createInputField("Адрес", this.address);
    const distanceInput = this.createInputField("Расстояние", this.distance);
    const statusSelect = this.createStatusSelect();

    const saveButton = document.createElement('button');
    saveButton.textContent = "Сохранить";
    saveButton.className = 'save-button';
    saveButton.onclick = () => {
      this.customerName = nameInput.value;
      this.address = addressInput.value;
      this.distance = parseFloat(distanceInput.value);
      this.status = statusSelect.value;
      document.body.removeChild(modal);
      this.updateCardView();
    };

    modal.appendChild(nameInput);
    modal.appendChild(addressInput);
    modal.appendChild(distanceInput);
    modal.appendChild(statusSelect);
    modal.appendChild(saveButton);
    document.body.appendChild(modal);
  }

  updateCardView() {
    displayDeliveries(deliveryArr);
  }

  createInputField(labelText, value) {
    const container = document.createElement('div');
    const label = document.createElement('label');
    label.textContent = labelText;

    const input = document.createElement('input');
    input.type = 'text';
    input.value = value;

    container.appendChild(label);
    container.appendChild(input);
    return container;
  }

  createStatusSelect() {
    const select = document.createElement('select');
    const statuses = ["delivery", "delivered", "canceled"];

    statuses.forEach(status => {
      const option = document.createElement('option');
      option.value = status;
      option.textContent = status.charAt(0).toUpperCase() + status.slice(1);
      option.selected = status === this.status;
      select.appendChild(option);
    });

    return select;
  }

  
  static getTotalDistance(deliveries) {
    return deliveries
      .filter(delivery => delivery.status !== "canceled")
      .reduce((total, delivery) => total + delivery.distance, 0);
  }
}
