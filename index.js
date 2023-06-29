// EJERCICIO 1

function parImpar(numero) {
  if (numero % 2 === 0) {
    console.log(numero + " " + "Es numero par.");
  } else {
    console.log(numero + " " + "Es numero impar.");
  }
}

parImpar(15);

//EJERCICIO 2

function mayorMenor(n1, n2) {
  if (n1 > n2) {
    console.log("El numero" + " " + n1 + "es mayor que" + n2);
  } else if (n1 < n2) {
    console.log("El numero" + " " + n2 + " " + "es mayor que" + " " + n1);
  } else {
    console.log("Los numeros" + n1 + "y" + n2 + "son iguales");
  }
}

mayorMenor(17, 26);

//EJERCICIO 3

function multiploDe5(num) {
  if (num % 5 === 0) {
    console.log(num + " " + "es multiplo de 5");
  } else {
    console.log(num + " " + "no es multiplo de 5");
  }
}

multiploDe5(13);

//EJERCICIO 4

function contador(n3) {
  for (let i = 0; i < n3; i++) {
    console.log(i);
  }
}

contador(11);

//EJERCICIO 5

function contadorPalabra(palabra, cantidad) {
  for (let i = 0; i < cantidad; i++) {
    console.log(palabra);
  }
}

contadorPalabra("Hola que tal", 5);

//EJERCICIO 6

function contadorFrutas (arrayFrutas) {
  for (let i = 0; i < arrayFrutas.length; i++){
    console.log(arrayFrutas [i]);
  }
}
const frutas = ["pera","frutilla","durazno","manzana","naranja"]

contadorFrutas(frutas)

//EJERCICIO 7

function contadorNumeros (arrayNumeros) {
  for (let i = 0; i < arrayNumeros.length; i++) {
    if(i == 5) {
    continue;
    }
    console.log(arrayNumeros[i]);
  }
}

const numeros = [1,2,3,4,5,6,7,8,9,10];
contadorNumeros (numeros);

//EJERCICIO 8

function multiplicarNumeros (arrayNum, nros) {
  for( let i = 0; i < arrayNum.length; i++) {
    const resultado = arrayNum [i] * nros;
    console.log(resultado);

  }
}

const arrayDeNum = [20,40,60,80,100,110,120,130];
multiplicarNumeros (arrayDeNum, 4);