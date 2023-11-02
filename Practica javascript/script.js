//Programa 1// 
const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < listaNumeros.length; i++) {
  const numero = listaNumeros[i];

  if (numero % 2 === 0) {
    console.log(`El número ${numero} es par`);
  } else {
    console.log(`El número ${numero} es impar`);
  }
}

//Programa 2// 
function esPar(numero) {
    return numero % 2 === 0;
  }
  
  const numero = parseInt(prompt("Ingrese un número: "));
  
  if (esPar(numero)) {
    console.log(`El número ${numero} es par`);
  } else {
    console.log(`El número ${numero} es impar`);
}

//Programa 3// 
constfrutas = ["Manzana", "Pera", "Banana"];

for (const fruta of frutas) {
  console.log(fruta);
}

//Programa 4// 
constfrutas = ["Manzana", "Pera", "Banana"];

function agregarFruta(fruta) {
 
  frutas.push(fruta);
}

agregarFruta("Durazno");

console.log(frutas);

//Programa 5// 
constfrutas = ["Manzana", "Pera", "Banana"];

for (let i = 0; i < frutas.length; i++) {
  // Imprime la fruta actual
  console.log(frutas[i]);
}

//Programa 6// 
constfrutas = ["Manzana", "Pera", "Banana"];

function esPar() {
 
  const longitud = frutas.length;

 
  if (longitud % 2 === 0) {

    console.log("La longitud del array es par");
  } else {console.log("La longitud del array es impar"); }
}

//Programa 7//
const frases = ["El mundo es un lugar maravilloso", "La vida es bella"];

const frase = frases[Math.floor(Math.random() * frases.length)];

console.log(frase); 

//Programa 8// 
const nombre = prompt("Ingrese el nombre del alumno: ");
const nota = Number(prompt("Ingrese la nota del alumno: "));
if (nota > 4) {console.log(`El alumno ${nombre} aprobó`);
} else {console.log(`El alumno ${nombre} reprobó la cursada`);
}

//Programa 9// 
const equipoAzul = ["Juan", "Pedro", "María"];
const equipoAmarillo = ["Ana", "Luis", "Carolina"];

function comprobarEquipo(jugador) {
  
  if (equipoAzul.includes(jugador)) {
 
    console.log(`El jugador ${jugador} es del equipo azul`);
  } else {
    // El jugador está en el equipo amarillo
    console.log(`El jugador ${jugador} es del equipo amarillo`);
  }
}

//Programa 10// 
const equipoAzul = ["Juan", "Pedro", "María"];
const equipoAmarillo = ["Ana", "Luis", "Carolina"];

function comprobarEquipo(jugador) {
  // Comprueba si el jugador está en el equipo azul
  if (jugador === "todos") {
    
    console.log("El equipo azul: " + equipoAzul.join(", "));
    console.log("El equipo amarillo: " + equipoAmarillo.join(", "));
  } else {
    
    if (equipoAzul.includes(jugador)) {
     
      console.log(`El jugador ${jugador} es del equipo azul`);
    } else {
     
      console.log(`El jugador ${jugador} es del equipo amarillo`);
    }
  }
}


