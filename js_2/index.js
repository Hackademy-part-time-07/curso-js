console.log('hola');

console.log(2 + 2);

//datos primitivos 

let num = 4

console.log(typeof(num));

let nombres = 'xavi'

console.log(nombres);
console.log(typeof(nombres));

let almacen = true

console.log(typeof(almacen));

let id;

console.log(typeof(id));

id = 4

console.log(typeof(id));

id = '4'

console.log(typeof(id));

let a = 5/'string'

console.log(a); //undefined/error 2 , null 2, numer 1 

let b = 5 * 'hola'

console.log(b);

//dato tipo referencia

let nums = [15,62,25,98]

console.log(typeof(nums));

console.log(typeof(new Date()));

console.log(typeof {});

//manera mas precisa de saber que tipo de dato estoy resolviendo, recordemos que solo funciona con los datos  de referencia

console.log([1,2,3] instanceof Array);
console.log({} instanceof Object);
console.log(new Date()); //true 4, false


//js como un calculadora

console.log(2e3);
console.log(2e-3);

console.log(0b10001);

console.log(Math.pow(2,3));

console.log(2**3);

//vamos comcatenar dos variables tipo string

let pal_1 = 'jhony'

let pal_2 = 'Garcia'


console.log(pal_1 + ' ' + pal_2);

console.log(`mi nombre es ${pal_1} y mi apellido es ${num}`);


//propiedades de los arrays

let palabra = ['h','o','l','a',' ','m','u','n','d','o']

console.log(palabra[2]);
console.log(palabra.length);

let cadena = 'hola mi nombre es jhonny'

console.log(cadena[18]);
console.log(cadena.length);

//true and false

console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean('hola'));
console.log(Boolean({}));
console.log(Boolean(2>3));

//ej

console.log(1 < 2 < 3); //true 4 ,false 1
console.log(3 > 2 > 1); //true 4 , false 
console.log(3 > 2);
console.log(true > 1);

console.log(4 + (5 > 3));

console.log(4 + true);

console.log(4 + 1);

console.log(2 + (9 < 2));

console.log(2 + (false));

console.log(2 + 0);

//ejercicio
console.log(2 + 2); // 4
console.log(2 + "2"); // NaN 2, 22 (3)
console.log(true + false); // 1
console.log(true + true);// 2
console.log('2'+'2'); // 22 (5), 
console.log('2' + '2'-'2'); // 222 (0), 4 (1), NaN (1), 20 (1), 2(1), ninguna_explota (1)

console.log('2'+'2');

console.log('22' + 2);


//conversion explicita

let c = '4'

c = parseInt(c)

console.log(typeof(c));

//operadores

//asignaión =

let num_prueba = 5

num_prueba = num_prueba + 5


console.log(num_prueba); //10 (4)

//aritmética + - * / %
//operador de incremento y asignacion

let n = 10 

console.log(n *= 2);

console.log(n);

//operadores de comparación == , ===

let x = 2;
let y = '2';
let z = 1;
//operador de comparacion  abstracta

console.log(x == y); //true 5 , false 0

//operador de comparacion Estricta 

console.log(x === y);

console.log(x === 1);

//operador de diferencia != , !==
 
// diferencia no abstracta

console.log(x != y); // false 4, true 1
console.log(x != z); // true 3,  

//diferencia estricta 

console.log(x !== y);
console.log(x !== z);

//

console.log(2 >= 2);
console.log(3 <= 3);