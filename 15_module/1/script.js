function handleFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const genre = document.getElementById("genre").value;
  const releaseYear = document.getElementById("releaseYear").value;
  const isWatched = document.getElementById("isWatched").checked;

  const film = {
    title: title,
    genre: genre,
    releaseYear: releaseYear,
    isWatched: isWatched
  };

  addFilm(film);
}

async function addFilm(film) {
  // const films = JSON.parse(localStorage.getItem("films")) || [];
  // films.push(film);
  // localStorage.setItem("films", JSON.stringify(films));

  // console.log(film);
  await fetch("https://sb-film.skillbox.cc/films", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      email: "motvey74@mail.ru"
    },
    body: JSON.stringify(film)
  });
  renderTable();
}

async function renderTable() {
  const filterTitle = document.getElementById("filterTitle").value;
  const filterGenre = document.getElementById("filterGenre").value;
  const filterReleaseYear = document.getElementById("filterReleaseYear").value;
  const filterWatched = document.getElementById("filterWatched").value;

  let queryParams = [];
  if (filterTitle) queryParams.push(`title=${filterTitle}`);
  if (filterGenre) queryParams.push(`genre=${filterGenre}`);
  if (filterReleaseYear) queryParams.push(`releaseYear=${filterReleaseYear}`);
  if (filterWatched) queryParams.push(`isWatched=${filterWatched}`);

  const queryString = queryParams.length ? `?${queryParams.join("&")}` : "";

  const filmsResponse = await fetch(
    `https://sb-film.skillbox.cc/films${queryString}`,
    {
      headers: {
        email: "motvey74@mail.ru"
      }
    }
  );
  const films = await filmsResponse.json();

  const filmTableBody = document.getElementById("film-tbody");
  filmTableBody.innerHTML = "";

  films.forEach(film => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? "Да" : "Нет"}</td>
      <td><button onclick="deleteFilm(${film.id})">Удалить</button></td>
    `;
    filmTableBody.appendChild(row);
  });
}

document
  .getElementById("film-form")
  .addEventListener("submit", handleFormSubmit);

document.getElementById("filter-form").addEventListener("input", renderTable);

async function deleteFilm(id) {
  await fetch(`https://sb-film.skillbox.cc/films/${id}`, {
    method: "DELETE",
    headers: {
      email: "motvey74@mail.ru",
    },
  });
  renderTable(); 
}

renderTable();

async function clearAllFilms() {
  const response = await fetch("https://sb-film.skillbox.cc/films", {
    method: "DELETE",
    headers: {
      email: "motvey74@mail.ru"
    }
  });

  const data = await response.json();
}

//clearAllFilms()
