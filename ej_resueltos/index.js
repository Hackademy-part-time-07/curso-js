// //Inicializar una variable tipo num con 6 decimales e imprimir
// la variable cambiando el tipo y que aparezcan sólo 3
// decimales.

//inicializar var num con 6 decimales

let num = 3.333333

//cambiar tipo y imprimir con solo 3 dec

let a = num.toFixed(3)
a = String(a)
console.log(a);

//Imprimir la suma de los caracteres entre dos 2 cadenas.

//declarar dos cadenas

let cad_1 = 'hoy esta haciendo un gran dia'
let cad_2 = 'saldre a dar un paseo'

//imprimir su valor 

console.log(`${cad_1} ${cad_2}`.length);

//12

let cad_3 = `${cad_1} ${cad_2}`.length

console.log(`la suma de los caracteres del texto cad_1 y cad_2 es igual a ${cad_3}`);

//13

console.log(10 + '1');
console.log(typeof (10 + '1'));

console.log(10 - '1');
console.log(typeof (10 - '1'));

//14

let string = "Hey Tú, cómo te llamas. ¡Hey, estoy hablando contigo!"
string = string.replace('contigo','yo');
console.log(string);

//15

let n =parseInt(Math.random()*1000)

if (n > 100) {
  console.log(`el numero ${n} es mayor que 100`);
} else {
  console.log(`el numero ${n} es menor que 100`);
}

//16

let b = 100;

if (n > 0) {
  console.log(`el numero ${n} es positivo`);
} else {
  console.log(`el numero ${n} es negativo`);
}


//17

let c = 7;
let d = 64;

let sum = c + d

if (sum > 50) {
  sum = sum * 2
} else {
  sum = sum * 3
}


//18

let  numero = 8;

if (numero % 3 == 0) {
  console.log(`el ${numero} es multiplo de 3`);
} else if (numero % 8 == 0) {
  console.log(`el ${numero} es multiplo de 8`);
} else {
  console.log('error');
}

//19 

let trabajo = false;
let buen_tiempo = true;

if (trabajo) {
  console.log('no puedo ir a la playa');
} else if ((trabajo == false) && (buen_tiempo)) {
  console.log('puedes ir a la playa');
} else {
  console.log('no es buen dia para ir a la playa aprovecha mejor tu dia libre');
}

//20

for (let i = 0; i <= 20; i++) {
  console.log(`${i}-5=`,i - 5);
}

//21

let acom = 0

for (let i = 0; i <= 20; i++) {
  acom += i
}

console.log(acom);

//22

let n_number = parseInt(prompt());

let acomulador = 0

for (let i = 0; i <= n; i++) {
  acom += i
}

console.log(acom);

//27

function par(n) {
  if (n % 2 == 0) {
    console.log('el numero es par');
  } else {
    console.log('el numero es impar');
  }
}

par(25)

//28

function getnum() {
  for (let i = 0; i < 10; i++) {
    if (i % 2 != 0) {
      console.log(i);
    } 
  }
}


console.log(getnum());

//29 

function es_no_Es(l,w) {
  if (l == w) {
    return `es un cuadrado ${l * w}`;
  } else {
    return (2*l) + (2*w);
  }
}

console.log(es_no_Es(4,4));

console.log(es_no_Es(2,4));

//31

function capital(pal) {
  return pal[0].toUpperCase() + pal.slice(1)
}

console.log(capital('marcos'));





