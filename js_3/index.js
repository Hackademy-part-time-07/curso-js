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
// console.log(10);

// for(let i = 1; i <= 10; i++) {
//   console.log(i,'hola');
// }

// for(let i = 1; i <= 5; i++) {
//   console.log(i*10);
// }

// console.log(1*2);
// console.log(2*2);
// console.log(3*2);
// console.log(4*2);
// console.log(5*2);
// console.log(6*2);
// console.log(7*2);
// console.log(8*2);
// console.log(9*2);
// console.log(10*2);

// for(let i = 1; i <= 10; i++){
//   console.log(i * 2);
// }

// console.log(3.14 * 1**2);
// console.log(3.14 * 2**2);
// console.log(3.14 * 3**2);
// console.log(3.14 * 4**2);
// console.log(3.14 * 5**2);
// console.log(3.14 * 6**2);
// console.log(3.14 * 7**2);

// for(let r = 1; r <= 20; r++) {
//   var respuesta =  3.14 * r**2
//   console.log(respuesta);
// }

// console.log(respuesta);

// //ej

// for(let i = 1; i <= 20; i++){
//   if (i % 2 == 0) {
//     console.log(`el numero ${i} es divisible por 2`);
//   }
// }

//CICLO WHILE

//tenemos que crear la variable de inicializacion y tambien aumentar esta internamente al ciclo while

// let cont = 0;

// while (cont <= 10) {
//   console.log(cont);

//   cont++
// }

// //simpre va a ejecutar los comandos internos al do al menos una vez

// let cont_2 = 1;

// do {
//   console.log(cont_2);

//   cont_2++
// } while (cont_2 <= 10);

// while (true) {
//   let clave = prompt('ingrese contraseña')

//   if (clave == '1234') {
//     break
//   }
//   alert('contraseña incorrecta')
// };

// // pi*r**2

// let r = 1;

// while (r <= 10) {
//   console.log((Math.PI*Math.pow(r,2)).toFixed(2));
//   r++
// }

// //

// let p = 1;

// while (p <= 50) {
//   console.log(Math.pow(p,3));

//   p++
// }

//

// let b = 0;

// let c = 0;
// let prev = 0;
// let prev1 = 1;

// while (b <= 10) {
//   c = prev + prev1

//   prev = prev1

//   prev1 = c

//   console.log(c);

//   b++
// }


//FUNCIONES 

// /*----------------------- fin de mi biblioteca de funciones ------------------------*/
// function saluda(nombre){
//   return `hola ${nombre} que tal esta tu dia`
// }

// function adios(nombre) {
//   return `adios ${nombre}`
// }

// function enojo(nombre) {
//   return `estoy enojado ${nombre}`
// }

// function suma(num1,num2) {
//   let result = num1 + num2
//   return `la suma entre ${num1} y ${num2} es igual a ${result}`
// }

// function resta(num1,num2) {
//   let result = num1 - num2
//   return `la resta entre ${num1} y ${num2} es igual a ${result}`
// }

// function raiz(num1,num2) {
//   let hipotenusa = Math.sqrt(Math.pow(num1,2)+ Math.pow(num2,2))
//   return `la hipotenusa del triangulo con altura ${num1} y base ${num2} es igual ${hipotenusa.toFixed(2)}`
// }

// function saludo(nombre, apellido) {
//   return `hola buenas ${nombre} de ${apellido}`
// }

// function area_circulo(r) {
//   let result = (Math.PI * Math.pow(r,2)).toFixed(3)
//   return `el area del circulo con radio ${r} es igual a ${result}`
// }

// function num_div(numa) {
//   let result;

//   if (numa % 3 == 0) {
//     result = `el numero ${numa} es divisible por 3`
//   } else {
//     result = `el numero ${numa} no es divisible por 3`
//   }
  
//   return result
// }

// function num_n(num1,num2) {
//   let result;
//   if (num1 % num2 == 0) {
//     result = `el numero ${num1} es divisible por ${num2}`
//   } else {
//     result = `el numero ${num1} no es divisible por ${num2}`
//   }

//   return result
// }



// /*----------------------- fin de mi biblioteca de funciones ------------------------*/

// console.log(resta(891448,654789));

// console.log(saluda('adrian'));
// console.log(saluda('roberto'));
// console.log(saluda('eloy'));
// console.log(saluda('xavier'));
// console.log(saluda('leandro'));

// console.log(enojo('pepe'));
// console.log(saluda('pepe'));
// console.log(adios('pepe'));

// console.log(suma(45.3968,9.25));

// console.log(raiz(20,13));

// console.log(area_circulo(10));

// console.log(num_div(85));

// console.log(num_div(21));

// console.log(num_div(245981689999999999990));

// // console.log(num_n(400,5));

// let div_ramdom = (num,num2) => {
//   if (num % num2 == 0) {
//     return `el numero ${num} es divisible por ${num2}`
//   } else {
//     return `el numero ${num} no es divisible por ${num2}`
//   }
// } 

// let data = prompt('ingrese un numero')

// for (let i = 1; i <= 20; i++) {
//   console.log(div_ramdom(i, data));
// }

// // funcion de expresion

// let saluda = function (nombre) {
//   return `hola ${nombre} que tal esta tu dia`
// }

// let suma = function (a, b) {
//   return `la suma de ${a} + ${b} es igual a ${a + b}`
// }

// let div_3 = function (a) {
//   let result;

//   if (a % 3 == 0) {
//     result = `el numero ${a} es divisible por 3`
//   } else {
//     result = `el numero ${a} no es divisible por 3`
//   }

//   return result
// }

// //arrow function

// let area_circulo = (r) => {
//   let result = (Math.PI * Math.pow(r,2)).toFixed(3)
//   return `el area del circulo con radio ${r} es igual a ${result}`
// }

// let div_2 = (resp) => {
//   let result;

//   if (resp % 2 == 0) {
//     result = `el numero ${resp} es divisible entre 2`
//   } else {
//     result = '';
//   }

//   return result
// }

// let div_ramdom = (num,num2) => {
//   if (num % num2 == 0) {
//     return `el numero ${num} es divisible por ${num2}`
//   } else {
//     return `el numero ${num} no es divisible por ${num2}`
//   }
// }

// function getRamdom() {
//   let ramdom_number = Math.random() * 10
//   ramdom_number = parseInt(ramdom_number) 

//   return ramdom_number
// }

// /* ------------------------------------------------------------------  */

// for (let i = 1; i <= 10; i++) {
//   console.log(area_circulo(i));
// }

// for (let i = 1; i <= 20; i++) {
//   console.log(div_2(i));
// }


// let num1 = getRamdom()
// let num2 = getRamdom()

// for (let i = 1; i <= 20; i++) {
//   console.log(div_ramdom(i, num1));
//   console.log(div_ramdom(i, num2));
// }