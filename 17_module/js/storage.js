export function getItems() {
    return JSON.parse(localStorage.getItem('items') || '[]');
  }
  
  export function saveItems(items) {
    localStorage.setItem('items', JSON.stringify(items));
  }
  