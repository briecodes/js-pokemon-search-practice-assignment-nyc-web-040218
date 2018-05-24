document.addEventListener("DOMContentLoaded", function() {

    const pokeDex = document.getElementById("pokemon-container");

    let allPokemans = []

    class Pokemon{
        constructor(height, weight, order, name, abilities, moves, stats, types, sprites){
            this.height = height;
            this.weight = weight;
            this.order = order;
            this.name = name;
            this.abilities = abilities;
            this.moves = moves;
            this.stats = stats;
            this.types = types;
            this.sprites = sprites;
            allPokemans.push(this)
        }
        render(){
            return `<li>
            <img src="${this.sprites[0]}" />
            ${this.name}
            </li>`
        }
    }

    function outputPokemans(array){
        console.log(array);
    }

    function getPokemon(){
        for (const mans of pokedex["pokemons"]){
            let newPoke = new Pokemon(mans.height, mans.weight, mans.order, mans.name, mans.abilities, mans.moves, mans.stats, mans.types, mans.sprites)
        }
        debugger
    }

    getPokemon();

})