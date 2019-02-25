const sortDesk = document.getElementById('order-desktop');
// Declara Sections
const startGame = document.getElementById('start-pokemon');
const start = document.getElementById('start');
const rootContainer = document.getElementById('root-container');
const options = document.getElementById('options');
const optionsContainer = document.getElementById('options-container');
const Charmander = document.getElementById('charizard');
const finalResult = document.getElementById('root');
// Declara boton de tipos de pokemones en un array, por medio de su clase.
const buttonFilter = Array.from(document.getElementsByClassName("boton-type-chart"));
// variable para filtrar ordenar
let resultTotal;

//FETCH
let pokemons; 
fetch("./data/pokemon/pokemon.json")
    .then(res => res.json())
    .then(data =>  pokemon = data.pokemon)
    .then(() => window.allPokemon.dataFiltered(pokemon));
   
// Obtiene los datos solicitados del objeto Data. Lo compara con el array de botones y filta por tipo.
  const gettingType = (arrayofButtons) => {
  arrayofButtons.map((buttonSelected) => {
    buttonSelected.addEventListener("click", (event) => {
      const buttonType = event.target.id;
      const dataFiltered = window.allPokemon.dataFiltered(pokemon, buttonType);
      printResult(dataFiltered)
    })
  });
};

// Imprime resultados por tipo. 
const printResult = (getType) => {
  resultTotal = getType
  finalResult.innerHTML = "";
  getType.map(data => {
    finalResult.innerHTML += `<button class="btn btn-info" style = "width:33%; height:33%">
    <div class = "class="card text-white bg-info mb-3">
    <h2> ${data.name}</h2>
    <img src="${data.img}">
    <br>ID: ${data.id} 
    <br> Type: ${data.type}</div></button>`;
  });
  return getType;
};

//imprime de la a - z
const printOrder = (arrayOfTypes) => {
  finalResult.innerHTML = "";
 arrayOfTypes.map(data => {
   finalResult.innerHTML += `<button class="btn btn-info" style = "width:33%; height:33%">
   <div class = "class="card text-white bg-info mb-3">
   <h2> ${data.name}</h2>
   <img src="${data.img}">
   <br>ID: ${data.id} 
   <br> Type: ${data.type}</div></button>`;
 });
 return arrayOfTypes;
};

gettingType(buttonFilter);

/*
Cambiar de página Desktop
*/

// ordena de la A-Z en Desktop
sortDesk.addEventListener('click', () => {
  let orderAtoZ = window.allPokemon.orderData(resultTotal);
  printOrder(orderAtoZ);
})

startGame.addEventListener("click", () => {
  start.style.display = "none";
  options.style.display = "block";
  optionsContainer.style.display = "block";
  rootContainer.style.display = "block";
  finalResult.style.display = "block";
});

