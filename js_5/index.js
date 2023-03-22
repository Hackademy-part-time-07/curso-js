//Callback
/*--------------------------------------- */
function saludar(nombre) {
  console.log('hola ' + nombre);
}

function guardar_nombre(Callback) {
  var nombre = prompt(`hola porfavor ingresa tu nombre`);
  Callback(nombre)
}
/*---------------------------------------*/

// guardar_nombre(saludar)

// // let frutas = ['banana','manzana','pera','mandarina','mango']

// frutas.map(el => {
//   // console.log(el);
// });

// //uso de el ciclo for en los arrys

// // for (let i = 0; i < frutas.length; i++) {
// //   console.log(i);
// //   const element = frutas[i];
  
// //   console.log(element);
// // }

// //Tenemos un array previmante dado el cual tenemos que entregar los numeros mayores a 10 de dicho array

// // let numbers = [1,25,14,9,3,58,14,75,6,5,8,4,25,69,48]
// let numgreaterten = []
// let numbersdouble = []
// let numberpair = []

// //filtar

// for (let i = 0; i < numbers.length; i++) {
//   console.log(i);
//   const element = numbers[i];
//   if (element > 10) {
//     numgreaterten.push(element)
//   }
// }

// //filtrar usando el emtodo filter

// let numgreaterten_filter = numbers.filter(el => el > 10);

// console.log(numgreaterten_filter);

// console.log(numgreaterten);

// //modificar
// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   numbersdouble.push(element*2)
// }

// console.log(numbersdouble);

// //filtrar
// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
  
//   if(element % 2 == 0){
//     numbarpair.push(element)
//   }
// }

// console.log(numbarpair);

// //filtrar utilizado metodo filter

// // let numerpair_filter = numbers.filter(el => el % 2 == 0) //return de forma implicita

// // console.log(numerpair_filter);

// //cosas a tener en cuenta

// let numerpair_filter = numbers.filter(el => {

//   /*-------------------
//   ----------------------
//   - bloque de codigo----
//   -----------------------*/

//   return el % 2 == 0
// })

// console.log(numerpair_filter);

// //ej, tenemos un array de objetos los cuales representas a los estudiantes de una academia, debemos devolver un nuevo array solo con aquellos que superen la nota de 7

// let students = [
//   {
//     nombre:'pepito',
//     nota:6,
//     mail:'ej@mail.com'
//   },
//   {
//     nombre:'jaimito',
//     nota:7.5,
//     mail:'ej@mail.com'
//   },
//   {
//     nombre:'raul',
//     nota:3,
//     mail:'ej@mail.com'
//   },
//   {
//     nombre:'sofi',
//     nota:7,
//     mail:'ej@mail.com'
//   },
//   {
//     nombre:'emma',
//     nota:9,
//     mail:'ej@mail.com'
//   },
// ];

// let studentsApproved = students.filter(el => el.nota >= 7);

// console.log(studentsApproved);

// //necesito separar cada equipo y almacenarlo en su array correspondiente usando el metodo filter

// let equipo = [
//   {
//     nombre: 'pepe',
//     posicion: 'Frontend',
//   },
//   {
//     nombre: 'maro',
//     posicion: 'ui designer',
//   },
//   {
//     nombre: 'luci',
//     posicion: 'Frontend',
//   },
//   {
//     nombre: 'jose',
//     posicion: 'Backend',
//   },
//   {
//     nombre: 'carla',
//     posicion: 'ui designer',
//   },
//   {
//     nombre: 'matias',
//     posicion: 'Backend',
//   },
// ]

// let frontend = equipo.filter(el => el.posicion == 'Frontend')

// let backend = equipo.filter(el => el.posicion == 'Backend')

// let uiDesigner = equipo.filter(el => el.posicion == 'ui designer')

// console.log(frontend);

// console.log(backend);

// console.log(uiDesigner);

//metodo sort ordena lo elementos de un array 


let numbers = [1,25,14,9,3,58,14,75,6,5,8,4,25,69,48]
let frutas = ['banana','manzana','Pera','mandarina','mango']
let pals = ['Word', 'word', '1 word', '1 Word']

// console.log(numbers.sort());
// console.log(frutas.sort());
// console.log(pals.sort());

//comparefunction(a,b) 

function compare(a,b) {
  if ('a es menor que b') {
    return -1
  }
  if ('a es mayor que b') {
    return 1
  }
  //a es igaul b
  return 0
}

function compare_sensilla(a, b) {
  return a - b
}

// console.log(numbers.sort(function (a,b) {
//   return a - b
// }));

let nunmers_order = numbers.sort((a,b) => a - b); //hace el retunr de forma impliita

console.log(nunmers_order);

//funcion ordenamiento por borbuja es como funciona el sort internamente

let frutas_order = frutas.sort(function (a,b) {
  if (a > b) {
    return 1
  } 

  if (a < b) {
    return -1
  }

  //si inican con la misma letra

  return 0
});

console.log(frutas_order);

console.log(frutas.sort());

//ej

let persons = [
  {
    name: 'Anton',
    age: 21
  },
  {
    name: 'Elena',
    age: 27
  },
  {
    name: 'Jorge',
    age: 32
  },
  {
    name: 'Matias',
    age: 45
  },
  {
    name: 'Gracia',
    age: 13
  },
]

let order_persons = persons.sort(function (a, b) {
  if (a.name > b.name) {
    return 1
  }

  if (a.name < b.name) {
    return -1
  }

  return 0
})

console.log(order_persons);

let order_edad = persons.sort(function (a, b) {
  return a.age - b.age
})

console.log(order_edad);

let oreder_edad_im = persons.sort((a,b) => a.age - b.age)

console.log(oreder_edad_im);

let nombres = ['Marco', 'pepeneitor', 'sofi', 'Raul', 'Emma'];

let nom_capital = nombres.map(el => el[0].toUpperCase() + el.slice(1, el.length));

console.log(nom_capital);

let nombres_order = nom_capital.sort()

console.log(nombres_order);

