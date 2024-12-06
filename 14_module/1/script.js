let editIndex = null;

function handleFormSubmit(event) {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const genre = document.querySelector("#genre").value;
  const releaseYear = document.querySelector("#releaseYear").value;
  const isWatched = document.querySelector("#isWatched").checked;

  const film = { title, genre, releaseYear, isWatched };

  if (editIndex !== null) {
    updateFilm(editIndex, film);
  } else {
    addFilmToLocalStorage(film);
  }

  editIndex = null;
  document.querySelector("#film-form").reset();
}

function addFilmToLocalStorage(film) {
  const films = JSON.parse(localStorage.getItem("films")) || [];
  films.push(film);
  localStorage.setItem("films", JSON.stringify(films));
  renderTable();
}

function updateFilm(index, updatedFilm) {
  const films = JSON.parse(localStorage.getItem("films")) || [];
  films[index] = updatedFilm;
  localStorage.setItem("films", JSON.stringify(films));
  renderTable();
}

function renderTable() {
  const films = JSON.parse(localStorage.getItem("films")) || [];
  const filmTableBody = document.querySelector("#film-tbody");
  filmTableBody.innerHTML = "";

  films.forEach((film, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? "Да" : "Нет"}</td>
      <td>
        <button onclick="editRow(${index})">Редактировать</button> 
        <button onclick="deleteRow(${index})">Удалить</button>
      </td>
    `;
    filmTableBody.appendChild(row);
  });
}

function deleteRow(index) {
  const films = JSON.parse(localStorage.getItem("films")) || [];
  films.splice(index, 1);
  localStorage.setItem("films", JSON.stringify(films));
  renderTable();
}

function editRow(index) {
  const films = JSON.parse(localStorage.getItem("films")) || [];
  const film = films[index];

  document.querySelector("#title").value = film.title;
  document.querySelector("#genre").value = film.genre;
  document.querySelector("#releaseYear").value = film.releaseYear;
  document.querySelector("#isWatched").checked = film.isWatched;

  editIndex = index;
}

function sortFilms() {
  const sortBy = document.querySelector("#sort-list").value;
  const films = JSON.parse(localStorage.getItem("films")) || [];

  films.sort((a, b) => {
    if (sortBy === "releaseYear") {
      return parseInt(a[sortBy]) - parseInt(b[sortBy]);
    }
    return a[sortBy].localeCompare(b[sortBy]);
  });

  localStorage.setItem("films", JSON.stringify(films));
  renderTable();
}

document.querySelector("#film-form").addEventListener("submit", handleFormSubmit);
document.querySelector(".sort").addEventListener("click", sortFilms);

renderTable();

