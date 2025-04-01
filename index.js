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
    constructor(name, types, hp, attack, defense, moves){
        this.name = name;
        this.types = types;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.moves = moves;
    }
    description = async() =>{
        const typesList = this.types.map(t => t.type.name)
        const firstFiveMoves = this.moves.slice(0, 5);
        const firstFiveMovesURLS = firstFiveMoves.map(m => m.move.url);
        // const firstFiveMovesNames = firstFiveMoves.map(m => m.move.name);
        const getData = async (url) => {
            const response = (await fetch(url))
            const data = response.json();

            return data
        }
        const promises = firstFiveMovesURLS.map(url => getData(url));
        let [move1, move2, move3, move4, move5] = await Promise.all(promises); 



        // const liTags = firstFiveMovesNames.
      
        return `
        <div class="pokemon">
        <h2>${this.name}</h2>
            <p>Types: ${typesList.join(', ')}</p>
            <p>HP: ${this.hp}</p>
            <p>Attack: ${this.attack}</p>
            <p>Defense: ${this.defense}</p>
        </div>
        <div class="moves">
            <h3>Moves</h3>
            <ul>
                <li>${move1.name} ${move1.power ? `(${move1.power})` : ''}</li>
                <li>${move2.name} ${move2.power ? `(${move2.power})` : ''}</li>
                <li>${move3.name} ${move3.power ? `(${move3.power})` : ''}</li>
                <li>${move4.name} ${move4.power ? `(${move4.power})` : ''}</li>
                <li>${move5.name} ${move5.power ? `(${move5.power})` : ''}</li>
            </ul>
        </div>
        `
    }
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
    
  
    pokemonList.forEach(pokemon => {
        const option = document.createElement("option");
        option.textContent = pokemon.name;
        option.value = pokemon.url;
        dropdown.appendChild(option);
    });
}

function fetchPokemonData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            const pokemon = new Pokemon (data.name, data.types, data.stats[0].base_stat, data.stats[1].base_stat, data.stats[2].base_stat, data.moves)
            //Skapa här en instans av din Pokemon-klass, och skicka den som argument till funktionen nedan.
            // console.log(pokemon);
            displayPokemonData(pokemon);
        });
}

const displayPokemonData = async(pokemon) => {
    const infoDiv = document.getElementById("pokemon-info");
    // console.log(pokemon.description());
    infoDiv.innerHTML = await pokemon.description();
    
}

