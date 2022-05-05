const baseURL= "https://pokeapi.co/api/v2/pokemon/"
const appNode= document.getElementById("app")
const pokemon= document.getElementById("pokemon")

const pokeimg= document.getElementById("pokeimg")
const pokename= document.getElementById("Pokename")
const pokeid= document.getElementById("PokeID")
const pokeTypes= document.getElementById("PokeTypes")
const PokeStats=document.getElementById("PokeStats")





const insertPokemon = event =>{
    event.preventDefault();

    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
          .then(data => data.json())   
          .then(response => MostrarPokemon(response))
          .catch(err => Cagamos())
}
 
$( document ).ajaxError(function(Cagamos) {
    $( ".log" ).text( "Triggered ajaxError handler." );
  });

function Cagamos(){
    alert("Algo falló en el código....")
}

function MostrarPokemon(ObjetoPokemon){
    
    pokeimg.src = ObjetoPokemon.sprites.front_default;
    pokename.textContent = `pokedex: ${ObjetoPokemon.name}`;
    pokeid.textContent = `Numero: ${ObjetoPokemon.id}`;
    
    pokeTypes.innerHTML = '';
    types = ObjetoPokemon.types;
    types.forEach(type =>{
        const typePokemon = document.createElement("div");
        typePokemon.style.color = "black";
        typePokemon.textContent = type.type.name;
        
        pokeTypes.appendChild(typePokemon);
    });

    PokeStats.innerHTML = '';
    Stats = ObjetoPokemon.stats;

    Stats.forEach(Stat =>{

        const StatPokemon = document.createElement("div");
        const pokeHP = document.createElement("div");
        const pokeElement = document.createElement("div");

        pokeHP.textContent= Stat.base_stat;
        StatPokemon.textContent= Stat.stat.name;
        
        pokeElement.appendChild(StatPokemon);
        pokeElement.appendChild(pokeHP);
        PokeStats.appendChild(pokeElement);

        
    });

}

let usuario = localStorage.getItem(`usuario`);
//los datos almacenados en el LocalStorage se almacenan en el navegador de forma indefinida//
//se accede a la informacion definida con el getItem//
//parse: recibe un texto JSON como parametro y devuelve el objeto JS correspondiente//

if( usuario == null){
    usuario = prompt("por favor ingrese su nombre");
    localStorage.setItem(`usuario`, usuario);
    //los datos almacenados en el LocalStorage se almacenan en el navegador de forma indefinida//
//para almacenar informacion se utiliza el SetItem//
    
}else{
    alert(`Bienvenido nuevamente ` + usuario);
}

const AddClassContact = event =>{
    event.preventDefault();

    var boton =$(".eventListener");
    boton.addClass("");

}

