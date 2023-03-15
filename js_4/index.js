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

//utilizar el metodo de un objeto

console.log(carro.estado('omal estado'));

//agrear un metodo a un objeto

carro.vendido = function (a) {
  if (a == true) {
    return `el auto esta vendido`
  } else {
    return 'el auto aun no se ha vendido '
  }
}

console.log(carro);

console.log(carro.vendido(false));

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
  }
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

for(const key in sith) {
  console.log(key);
  console.log(sith[key]);
}


for(let llaves in telefono) {
  console.log(llaves);
  console.log(telefono[llaves]);
}

console.log(Object.keys(telefono));
console.log(Object.values(telefono));

let array_objeto = Object.entries(telefono);

console.log(array_objeto);

console.log(array_objeto[2]);

console.log(array_objeto[2][1]);

let array_1 = ['jhonny', 26, 'jhony@gmail.com', true, ['juan', 'maria', 'vivi']]

console.log(typeof(array_1));

console.log(array_1[4][0]);

console.log(array_1.push('origen'));

console.log(array_1);

console.log(array_1.pop());

console.log(array_1);

console.log(array_1.shift());

console.log(array_1);
