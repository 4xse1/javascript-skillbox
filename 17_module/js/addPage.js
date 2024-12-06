import { getItems, saveItems } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('addForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const shelf = document.getElementById('shelf').value.trim();
    const weight = document.getElementById('weight').value.trim();
    const storageTime = document.getElementById('storageTime').value.trim();

    if (!name || !shelf || isNaN(weight) || !storageTime) {
      alert('Пожалуйста, заполните все поля правильно.');
      return;
    }

    const items = getItems();
    items.push({ name, shelf, weight, storageTime });
    saveItems(items);

    setTimeout(() => {
      window.location.href = 'index.html';
    }, 500);
  });
});
