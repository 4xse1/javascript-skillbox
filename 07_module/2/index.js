let heights = [150, 160, 165, 170, 175, 199, 155, 240, 122];

const heightList = document.getElementById('height-list');
const addHeightBtn = document.getElementById('add-height-btn');
const filterHeightBtn = document.getElementById('filter-height-btn');


function displayHeights(filteredHeights = heights) {
    heightList.innerHTML = '';  
    filteredHeights.forEach(height => {
        const li = document.createElement('li');
        li.textContent = height;
        heightList.appendChild(li);
    });
}


function addHeight() {
    const newHeight = prompt("Введите рост ученика (в см):");
    const parsedHeight = parseInt(newHeight);

    if (!newHeight || isNaN(parsedHeight)) {
        alert("Рост не введён или введено некорректное значение!");
    } else {
        heights.push(parsedHeight);
        displayHeights();
    }
}


function filterHeight() {
    const minHeight = prompt("Введите минимальный рост для фильтрации (в см):");
    const parsedMinHeight = parseInt(minHeight);

    if (!minHeight || isNaN(parsedMinHeight)) {
        displayHeights();  
    } else {
        const filteredHeights = heights.filter(height => height >= parsedMinHeight);
        displayHeights(filteredHeights);
    }
}


addHeightBtn.addEventListener('click', addHeight);
filterHeightBtn.addEventListener('click', filterHeight);


displayHeights();
