# Övningsuppgifter: Pokemon Exercise

## 1. Fixa bugg med att pokemon inte hämtas
### Uppgift:
- Identifiera varför pokemon-data inte hämtas korrekt från API:et.
- Kontrollera att rätt URL används och att fetch-anropet fungerar.
- Debugga och åtgärda eventuella fel i koden.

### Tips:
- Använd `console.log` för att felsöka.
- Kontrollera nätverksanrop i webbläsarens utvecklarverktyg.

---

## 2. Skapa en klass för pokemon som innehåller samtliga stats
### Uppgift:
- Skapa en klass `Pokemon` som innehåller följande egenskaper:
    - `name`
    - `type`
    - `hp`
    - `attack`
    - `defense`
- Lägg till en metod i klassen som returnerar en beskrivning av pokemon.

---

## 3. Skapa en instans av klassen och rendera ut pokemon i DOM:en
### Uppgift:
- Skapa en instans av `Pokemon`-klassen med data från API:et när användaren klickar på `Get Pokemon Data`.
- Rendera pokemonens namn och stats i DOM:en.
- Använd en HTML-struktur som liknar:
    ```html
    <div class="pokemon">
        <h2>Pokemon Name</h2>
        <p>Type: Grass</p>
        <p>HP: 45</p>
        <p>Attack: 49</p>
        <p>Defense: 49</p>
    </div>
    ```

    ## 4. Lista ut de 5 första moves och deras Power
    ### Uppgift:
    - Hämta de 5 första moves för en pokemon från API:et.
    - För varje move, hämta dess namn och Power.
    - Använd Promise.All för att hämta samtliga moves.
    - Rendera moves och deras Power i DOM:en under pokemonens stats. Om Power är null, skriv ej ut det.
    - Använd en HTML-struktur som liknar (skriv ut namnen på varje move istället för "Move 1"):
        ```html
        <div class="moves">
            <h3>Moves</h3>
            <ul>
                <li>Move 1 (15 Power)</li>
                <li>Move 2 </li>
                <li>Move 3 (55 Power)</li>
                <li>Move 4 (20 Power)</li>
                <li>Move 5 (30 Power)</li>
            </ul>
        </div>
        ```

    ### Tips:
    - Kontrollera API-dokumentationen för att hitta var moves och deras Power finns.
    - Använd `map` eller `forEach` för att iterera över moves.
    - Hantera fall där Power-data saknas för ett move.