import { getItems, saveItems } from "./storage.js";

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#itemsTable tbody");
  const addButton = document.querySelector("#addButton");
  const preloader = document.getElementById("preloader");

  addButton.addEventListener("click", () => {
    preloader.style.display = "block";
    setTimeout(() => {
      window.location.href = "add.html";
    }, 500);
  });

  loadTable();

  function loadTable() {
    const items = getItems();
    tableBody.innerHTML = "";

    items.forEach((item, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.shelf}</td>
        <td>${item.weight}</td>
        <td>${item.storageTime}</td>
        <td><button class="deleteButton" data-index="${index}">Удалить</button></td>
      `;
      tableBody.appendChild(row);
    });

    document.querySelectorAll(".deleteButton").forEach(button => {
      button.addEventListener("click", e => {
        const index = e.target.dataset.index;
        const items = getItems();
        items.splice(index, 1);
        saveItems(items);
        loadTable();
      });
    });
  }

  document.querySelectorAll("#itemsTable th[data-sort]").forEach(th => {
    th.addEventListener("click", () => {
      const items = getItems();
      const sortKey = th.dataset.sort;
      items.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
      saveItems(items);
      loadTable();
    });
  });
});
