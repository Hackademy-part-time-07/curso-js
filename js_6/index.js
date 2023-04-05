let pals = [
  'mandarinas',
  'naranjas',
  'mercanoda',
  'coche',
  'banana',
  'madona'
]

//filtar del array pals las palabras que inicien con la letra m

let pals_m = pals.filter(palabra => palabra.startsWith('m'));
let pals_n = pals.filter(el => el.charAt(0) == 'n')
let pals_b = pals.filter(el => el[0] == 'b')

console.log(pals_m);
console.log(pals_n);
console.log(pals_b);

//filtar las palabras que sean mas largas de 6 caracteres

let pals_6 = pals.filter(el => el.length > 6)

console.log(pals_6);

//devolver un array de pollos cocinados, es decir donde encuentr pollo que lo cambie por pechuga

let comida = ['pollo', 'pollo', 'pollo','pollo','pollo']

let comida_c = comida.map(el => el = 'pechuga')

console.log(comida_c);

comida = ['pollo', 'cerdo', 'cerdo', 'pollo', 'cerdo', 'pollo','pollo','pollo']

let comida_p_c = comida.map(el => {
  if (el == 'pollo') {
    return 'pechuga'
  } else {
    return 'chuleta'
  }
})

console.log(comida_p_c);

//sintaxis resumida del else if
let comida_pc = comida.map(el => el == 'pollo' ? 'pechuga':'chuleta')
console.log(comida_pc);

//devolver un array donde los numeros pares los elevemos a la potencia de 2 y los impares a la potencia de 3

let numbers = [4,83,9,2,6,72,1,34,19]

let number_copy = numbers.map(n => n % 2 == 0 ? Math.pow(n,2): Math.pow(n,3))

console.log(number_copy);

const array_1 = [1,2,3,4]

let ini = 0;

let response_reduce = array_1.reduce((acom,currentValue) => acom + currentValue, ini)

console.log(response_reduce);

//

let star_wars = [
  {
    name: 'obi-wan',
    power: 35,
    side: 'luz'
  },
  {
    name: 'look skywalker',
    power: 90,
    side: 'luz'
  },
  {
    name: 'dark vader',
    power: 60,
    side: 'oscuro'
  },
  {
    name: 'Grievous',
    power: 30,
    side: 'oscuro'
  },
  {
    name: 'tripio',
    power: 5,
    side: 'luz'
  },
  {
    name: 'arturito',
    power: 6,
    side: 'luz'
  },
  {
    name: 'kylo ren',
    power: 70,
    side: 'oscuro'
  },
]

//devolver un array que me verifique que el poder es mayor a 10

let power_10 = star_wars.map(personaje => personaje.power > 10 ? personaje:'no cumples con el poder para la mision')
console.log(power_10);

//separamos a los buenos de los malos

let luz = star_wars.filter(el => el.side == 'luz')
let oscuro = star_wars.filter(el => el.side == 'oscuro')

console.log(luz);
console.log(oscuro);

//

let luz_powerfull_pj = luz.filter(el => el.power == Math.max(...luz.map(el => el.power)))

console.log(luz_powerfull_pj);

let oscuro_powerfull_pj = oscuro.filter(el => el.power == Math.max(...oscuro.map(el => el.power))) 

console.log(oscuro_powerfull_pj);