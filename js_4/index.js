//sintaxis de un objeto

let carro = {
  marca: 'audi',
  modelo: 1996,
  color: 'rojo',
  estado: function (estado) {
    return `el auto esta en ${estado}`
  }
}

//como acceder a un dato de un objeto

console.log(carro.modelo);
console.log(carro['color']);

//agregar una propiedad a mi objeto 

carro.matricula = 'aue235'

console.log(carro);

carro.color = 'morado'

console.log(carro);

//utilizar el metodo de un objeto

console.log(carro.estado('buen estado'));

//agrear un metodo a un objeto

carro.vendido = function(a) {
  if (a == true) {
    return `el auto esta vendido`
  } else {
    return 'el auto aun no se ha vendido '
  }
}

console.log(carro);

console.log(carro.vendido(true));

//ejercicios

let portatil = {
  marca: 'lenovo',
  color: 'azul marino',
  pulgadas: 15,
  precio: 600,
  calc_iva: function () {
    return (portatil.precio * 0.21) + portatil.precio
  }
}


console.log(`el precio total a pagar seria de un total ${portatil.calc_iva()} € `);

let telefono = {
  marca: 'iphone',
  color: 'rojo',
  precio: 600,
  total_final: function (gb) {
    let result;

    if (128 == gb) {
      result = telefono.precio + 50
    } else if (256 == gb) {
      result = telefono.precio + 100
    } else if (512 == gb) {
      result = telefono.precio + 200
    } else {
      result = 'no tenemos disponible esta cantidad de almacenamiento'
    }

    return `el iphone con ${gb} GB tiene un precio total de ${result}`
  },
  año: 2018,
  estado: 'nuevo'
}

console.log(telefono.total_final(100));

let name = 'darth vader'
let sword = 'red'
let homeWord = 'earth'

let sith = {
  name,
  sword,
  homeWord
}

console.log(sith);

//recorrer un objeto con un ciclo for

for(const key in sith) {
  console.log(key);
  console.log(sith[key]);
}

//1 iteracion
//key = name
//2 iteracion
//key = sword
//3 iteracion
//key = homeword


for(let llaves in telefono) {
  console.log(llaves);
  console.log(telefono[llaves]);
}

//metodo del object constructor para ver las llaves y valores de un objeto

console.log(Object.keys(telefono));
console.log(Object.values(telefono));

//convierto las entradas de mi objeto a un array 

let array_objeto = Object.entries(telefono);

console.log(array_objeto);

console.log(array_objeto[2]);

console.log(array_objeto[2][0]);

//conociendo los diferentes metodos del array

let array_1 = ['jhonny', 26, 'jhony@gmail.com', true, ['juan', 'maria', 'vivi']]

console.log(typeof(array_1));

console.log(array_1[4]);

//metodo push -> me agrega un elemento en la ultima posicion 

array_1.push('origen')
console.log(array_1);

//metodo pop -> me elimina el ultimo elemento de mi array

console.log(array_1.pop());
console.log(array_1);

//metodo shift -> me elimina un elemente al principio demi array
console.log(array_1.shift());
console.log(array_1);

//me permite eliminar varios elementos dentro de un rango seleccionado
console.log(array_1.slice(1,3));
let array_slice = array_1.slice(1,3)
console.log(array_slice);

//como temrina nuestro array
console.log(array_1);


console.log(array_1.length);

array_1[array_1.length] = 'hola soy nuevo'

console.log(array_1);

//al agregar un nuevo elemento de forma manual el navegador va a ignorar las posiciones vacias

array_1[6] = 'nuevo elemento'
console.log(array_1);

//creamos un nuevo array y utilizamod dos metodos nuevos para recorrer nuestro array

let lenguajes = [
  ['html', 1],
  ['CSS', 2],
  ['javaScript',3],
  ['python',3],
  ['c++',4],
  ['php',3],
  ['scracht',1]
]

//metodo map -> sirve para crear una copia del array original pero modificandole con la salida

let copy_array = lenguajes.map(i => {
  return `el lenguaje ${i[0]} es de dificultad ${i[1]} `;
})

console.log(copy_array);


//metodo foreach -> sirve para crear una salida desde un array 

lenguajes.forEach(el => {
  console.log(`la nueva dificultad del lenguaje ${el[0]} es ${el[1]+1}`);
})


//ej vamos a crear un nuevo array a partir del principal, el cual duplique los valores de este

let nums = [2,5,7,8];

let new_muns = nums.map(nums => {
  return nums * 2
});

console.log(new_muns);

//podemos crear una funcion para luego asignarla como tarea del map o del foreach

function double(number) {
  return number * 2
}

let new_double = nums.map(double)

console.log(new_double);


//ej 2 tenemos un array y queremos hacer una copia en otro array que contenga las palabras en mayusculas

let pals = ['hola', 'carro', 'perro', 'banana']

function mayus(el) {
  return el.toUpperCase()
}

let copy_pals_u = pals.map(mayus)

//existe un metodo llamado concat para poder concatener nuestros arrays

let a = [1,2,3]
let b = [4,5,6]
let c = [7,8,9]

let d = a.concat(b,c)

console.log(d);

//

let personaje = {
  nombre: 'homero',
  apellido: 'simpson',
  familia: [`marge`, 'lisa', 'bart', 'magie'],
  trabajo: {
    lugar: 'planta nuclear',
    estado: true
  },
  alcoholico: function (n) {
    if (n <= 2) {
      return 'no has bebido suficiente'
    } else if ((n>2) && (n<5)) {
      return 'aun te falta un poco...'
    } else {
      return 'moe esta orgulloso de ti'
    }
  }
}

// guardar en una variable a la familia de homero

let family = personaje.familia

console.log(family);

//extraer de el array familia solo a los hijos 

let hijos = family.slice(1,4)

console.log(hijos);

//utilizar la segunda forma de extraer datos de un objeto

console.log(personaje['nombre']);

// creamos una nueva propiedad 

personaje.dinero_bolsillo = 50
console.log(personaje);

//utilizamos el metodo de nuestro objeto
let cervezas_tomadas = 12
console.log(personaje.alcoholico(cervezas_tomadas));

//creamos un nuevo metodo para nuestro objeto

personaje.act_dBolsillo = function (n) {
  personaje.dinero_bolsillo = personaje.dinero_bolsillo - 4*n
}
personaje.act_dBolsillo(cervezas_tomadas)
console.log(personaje.dinero_bolsillo);

//inprimir las llaves utilizando el ciclo for in 

for (const key in personaje) {
  console.log(key);
  console.log(personaje[key]);
  console.log(`llave: ${key}, valor: ${personaje[key]}`);
}

//metodo del constructor object para ver llaves de mi objeto y guardarlas en un array
console.log(Object.keys(personaje));

//metodo del constructor object para ver los valores de mi objeto y guardarlos en un array
console.log(Object.values(personaje));

//metodo para devolver las entradas de forma ordenada en un array

console.log(Object.entries(personaje));

let personaje_array = Object.entries(personaje)

//añadimos una propiedad en forma de entrada a mi array personaje_array con el metodo push

personaje_array.push(['ciudad','sprinfield'])

//desde nuestro personaje array, lo convertimos en un objeto de nuevo.

let copy_personaje = Object.fromEntries(copy_array_pj)

console.log(copy_personaje);

//
let frutas = [['frutas',['banana', 'fresa', 'mango', 'naranja']]]

frutas.push(['estado',true])
frutas.push(['caducidad', '20/05/2023'])

let frutas_ogj = Object.fromEntries(frutas)

console.log(frutas_ogj);











// let array_objetos = [
//   {
//     nombre: 'pepito',
//     edad: 25,
//     correo: '',
//     altura: '',
//   },
//   {
//     nombre: 'raul',
//     edad: 23,
//     correo: '',
//     altura: '',
//   },
//   {
//     nombre: 'maria',
//     edad: 56,
//     correo: '',
//     altura: '',
//   },
//   {
//     nombre: 'carlos',
//     edad: 14,
//     correo: '',
//     altura: '',
//   },
//   {
//     nombre: 'andrea',
//     edad: 34,
//     correo: '',
//     altura: '',
//   },
//   {
//     nombre: 'sofia',
//     edad: 28,
//     correo: '',
//     altura: '',
//   },
// ]

// let edades = []

// array_objetos.forEach(data => {
//   console.log(data);
//   console.log(data.edad);
//   edades.push(data.edad)
// })

// console.log(edades);