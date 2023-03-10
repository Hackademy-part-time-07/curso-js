// //control de flujo 

// //if 

// // if(condicion){ }

// let pal = "adios"

// if (pal == 'hola') {
//   console.log('estas saludando');
// }

// if (pal == 'adios') {
//   console.log('te estas despidiendo');
// }

// if(true){
//   console.log('se ejecuta esa bloque de codigo');
// }

// if(false){
//   console.log('no se ejecuta el bloque de codigo');
// }

// console.log('continuo con el programa');

// //mejoramos el control de flujo, usando else

// /*
//   if (condicion) {

//   } else {

//   }

// */

// // let num = 13

// // if (num > 10) {
// //   console.log('el numero es mayor a 10 o es igual');
// // } else {
// //   console.log('el numero es menor a 10');
// // }

// //ej: queremos revisar si el numero de pin es correcto, si es verdadero podemos retirar dinero, si es flaso enviaremos un error

// // let num = prompt('ingresa el pin')

// // if (num == 222) {
// //   console.log('has accedido a tu cuenta');
// //   let cantidad = prompt('cuanto dinero desea retirar');
// //   if (cantidad > 3000) {
// //     console.log('tendras que ir a tu banco ara retirar esta cantidad');
// //   } else {
// //     console.log('has retirado tu dinero');
// //   }
// // } else{
// //   console.log('pin incorrecto');
// // }

// //mejoramos aun mas el control del flujo utilizando else if

// if (false) {
//   console.log('se ejecuta el bloque de coding');
// } else if (false) {
//   console.log('se ejecuta solo si la anterior sentencia es false');
// } else if (false) {
//   console.log('se ejecuta solo si la anterior sentencia es false');
// } else if (false) {
//   console.log('se ejecuta solo si la anterior sentencia es false');
// } else if (false) {
//   console.log('se ejecuta solo si la anterior sentencia es false');
// } else {
//   console.log('ninguna de las sentencias es verdadera');
// }

// //ej 1

// let num = 10

// if (num > 10) {
//   console.log('el numero es mayor a 10');
// } else if(num == 10) {
//   console.log('el numero es igual a 10');
// } else if (num < 10) {
//   console.log('el numero es menor a 10')
// } else {
//   console.log('no es un numero');
// }

//ej: creamos una maquina expendedora con 5 articulos

// let articulo = prompt('seleccione articulo');

// if (articulo == 1) {
//   console.log('patatas');
// } else if(articulo == 2) {
//   console.log('agua');
// } else if (articulo ==3) {
//   console.log('cocacola');
// } else if (articulo == 4) {
//   console.log('galletas');4
// } else if (articulo == 5) {
//   console.log('chocorramo');
// } else {
//   console.log('no existe el producto');
// }

//tabla de la verdad

//tabla para el y
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

// //tabla para el o 

// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

// //ej:

// let product = 1;
// let saldo = 5;

// if ((product == 1) && (saldo > 3)) {
//   console.log('patatas');
// }


//switch

// let num = Number(prompt());

// console.log(typeof(num));

// switch (num) {
//   case 1:
//     console.log('el valor es 1');
//     break;
//   case 2:
//     console.log('el valor es 2');
//     break;
//   case 3:
//     console.log('el valor es 3');
//   default:
//     console.log(' no tenemos tu numero');
//     break;
// }

//ej: dado un nombre de la actual hpt7 mediante un pront quiero mostrar un saludo a dicho nombre

//dado un nombre de la actual hpta7 mediante un pront quiero mostrar un saludo a dicho nombre utilizando el metodo switch

// let nombre = prompt('indique un nombrede la htpa7');

// switch (nombre) {
//   case 'roberto':
//     console.log('hola que tal roberto');
//     break;
//   case 'adrian':
//     console.log('hola que tal adrian');
//     break
//   case 'eloy':
//     console.log('hola que tal eloy');
//     break
//   case 'leandor':
//     console.log('hola que tal leandro');
//     break
//   case 'xavier':
//     console.log('hola que tal xavier');
//     break
//   default:
//     console.log('usuario incorrecto');
//     break;
// }

// try

// try {
//   console.log(NoExisto);
// } catch (error) {
//   console.log('error esta variable no existe');
// }

//CICLOS

//ciclo for

//ej muestre los numeros del 1 al 10

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
// .
// .
// .
// .
console.log(10);

for(let i = 1; i <= 10; i++) {
  console.log(i,'hola');
}

for(let i = 1; i <= 5; i++) {
  console.log(i*10);
}

console.log(1*2);
console.log(2*2);
console.log(3*2);
console.log(4*2);
console.log(5*2);
console.log(6*2);
console.log(7*2);
console.log(8*2);
console.log(9*2);
console.log(10*2);

for(let i = 1; i <= 10; i++){
  console.log(i * 2);
}

console.log(3.14 * 1**2);
console.log(3.14 * 2**2);
console.log(3.14 * 3**2);
console.log(3.14 * 4**2);
console.log(3.14 * 5**2);
console.log(3.14 * 6**2);
console.log(3.14 * 7**2);

for(let r = 1; r <= 20; r++) {
  var respuesta =  3.14 * r**2
  console.log(respuesta);
}

console.log(respuesta);

//ej

for(let i = 1; i <= 20; i++){
  if (i % 2 == 0) {
    console.log(`el numero ${i} es divisible por 2`);
  }
}