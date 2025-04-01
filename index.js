document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const startButton = document.createElement("button");
    startButton.textContent = "Start Pokemon App";
    startButton.id = "start-button";
    startButton.addEventListener("click", startPokemonApp);
    app.appendChild(startButton);

    const select = document.createElement("select");
    select.id = "pokemon-select";
    app.appendChild(select);
});

class Pokemon {
    
}

function startPokemonApp() {
    const app = document.getElementById("app");
    app.innerHTML = "";
    
    const container = document.createElement("div");
    container.id = "pokemon-container";
    app.appendChild(container);

    const select = document.createElement("select");
    select.id = "pokemon-select";
    container.appendChild(select);
    
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(response => response.json())
        .then(data => {
            renderPokemonDropdown(data.results);
        });
    
    const button = document.createElement("button");
    button.textContent = "Get Pokemon Data";
    button.addEventListener("click", () => {
        const selectedUrl = select.value;
        fetchPokemonData(selectedUrl);
    });
    

    container.appendChild(button);
    container.appendChild(document.createElement("div")).id = "pokemon-info";
}

function renderPokemonDropdown(pokemonList) {
    const dropdown = document.getElementById("pokemon-select");
    dropdown.innerHTML = "";
    
    //Nedan saknas något för att kunna hämta data när en option är vald
    pokemonList.forEach(pokemon => {
        const option = document.createElement("option");
        option.textContent = pokemon.name;
        dropdown.appendChild(option);
    });
}

function fetchPokemonData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            //Skapa här en instans av din Pokemon-klass, och skicka den som argument till funktionen nedan.

            displayPokemonData(data);
        });
}

function displayPokemonData(pokemon) {
    const infoDiv = document.getElementById("pokemon-info");
    //Skriv ut din Pokemon i DOM:en
    
}

