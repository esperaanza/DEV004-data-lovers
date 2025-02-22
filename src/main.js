import { tarjetas, filtrarTipos, buscarPorNombre, abcOrder } from "./data.js";

import data from "./data/pokemon/pokemon.js";

const todos = {
  pokemon: [...data.pokemon],
};

const bloqueTarjetas = document.getElementById("bloqueTarjetas");
bloqueTarjetas.innerHTML = tarjetas(data);
const tipoPokemon = document.getElementsByClassName("tipoPokemon");
const inputBuscar = document.getElementById("inputBuscar");
const Ordenar = document.getElementsByClassName("Ordenar");

const dropdownBtns = document.querySelectorAll(".dropbtn");
dropdownBtns.forEach((button) => {
  const dropdownContent = document.getElementById(button.dataset.target);
  const options = dropdownContent.querySelectorAll("a");
  options.forEach((option) => {
    option.addEventListener("click", () => {
      button.textContent = option.textContent.toUpperCase();
    });
    option.textContent = option.textContent.toUpperCase();
  });
});

for (const tipo of tipoPokemon) {
  tipo.addEventListener("click", () => {
    if (tipo.name === "todos") {
      bloqueTarjetas.innerHTML = tarjetas(todos);
    } else {
      const pokemonesTipo = filtrarTipos(data, tipo.name);
      bloqueTarjetas.innerHTML = tarjetas(pokemonesTipo);
    }
  });
}

inputBuscar.addEventListener("input", function () {
  const FiltroNombre = buscarPorNombre(
    data,
    inputBuscar.value.trim().substring(0, 3)
  );

  if (FiltroNombre.pokemon.length === 0) {
    alert("No se encontraron resultados");
  }

  bloqueTarjetas.innerHTML = tarjetas(FiltroNombre);
});

for (const item of Ordenar) {
  item.addEventListener("click", () => {
    if (item.name === "todos") {
      bloqueTarjetas.innerHTML = tarjetas(todos);
    }
    if (item.name === "AZ") {
      const SortData = abcOrder(data, item.name);
      bloqueTarjetas.innerHTML = tarjetas(SortData);
    } else if (item.name === "ZA") {
      const SortData = abcOrder(data, item.name);
      bloqueTarjetas.innerHTML = tarjetas(SortData);
    }
  });
}

const arrayTypes = [
  "psychic",
  "ground",
  "water",
  "fighting",
  "normal",
  "ghost",
  "grass",
  "poison",
  "flying",
  "dark",
  "fairy",
  "dragon",
  "rock",
  "steel",
  "ice",
  "electric",
];
const arrayTotalTypes = [];
for (let index = 0; index < arrayTypes.length; index++) {
  arrayTotalTypes.push({
    type: arrayTypes[index],
    total: filtrarTipos(data, arrayTypes[index]).pokemon.length / 100,
  });
}

const toggleTableBtn = document.getElementById("toggle-table-btn");
const myTable = document.getElementById("my-table");
//const myChart = document.getElementById("my-chart");

toggleTableBtn.addEventListener("click", () => {
  myTable.classList.toggle("hidden");
  //myChart.classList.toggle("hidden");

  const table = document.getElementById("tablaDatos");
  table.innerHTML = "";
  for (let i = 0; i < arrayTotalTypes.length; i++) {
    const row = document.createElement("tr");
    const coldName = document.createElement("td");
    coldName.textContent = arrayTotalTypes[i].type;
    row.appendChild(coldName);
    const colTotal = document.createElement("td");
    colTotal.textContent = arrayTotalTypes[i].total;
    row.appendChild(colTotal);

    table.appendChild(row);
  }

  //   const canvas = document.getElementById("my-chart");
  //   const ctx = canvas.getContext("2d");

  //   const chart = new Chart(ctx, {
  //     type: "bar",
  //     data: {
  //       labels: arrayTotalTypes.map((item) => item.type.toUpperCase()),
  //       datasets: [
  //         {
  //           label: "TOTAL DE POKEMONES",
  //           data: arrayTotalTypes.map((item) => item.total),
  //           backgroundColor: "blue",
  //           borderColor: '#36A2EB',
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         yAxes: [
  //           {
  //             ticks: {
  //               beginAtZero: true,
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   });
  // });
});
