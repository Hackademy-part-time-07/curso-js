//---------------CREAR UN HERO DINAMICO--------------------

//1. Apuntar al nodo en el que queremos poner nuetro hero.
let hero = document.getElementById('hero__container');


//2. crear nuestra base de datos de donde extraemos la informacion para modificar el hero
let hero_img = [
  {
    id: 0,
    img: './assets/goku_hero.jpg',
    name: 'Dragon Ball Z'
  },
  {
    id: 1,
    img: './assets/one_piece_hero.jpg',
    name: 'One Piece'
  },
  {
    id: 2,
    img: './assets/naruto_hero.jpg',
    name: 'Naruto'
  },
  {
    id: 3,
    img: './assets/kimetzu_No_yaiba_hero.jpg',
    name: 'Kimetzu No yaiba'
  },
  {
    id: 4,
    img: './assets/Vindland_Saga_hero.jpg',
    name: 'Vindland Saga'
  },
  {
    id: 5,
    img: './assets/Attack_Of_Titans_hero.jpg',
    name: 'Attack Of Titans'
  }
]

//3. creamos la funcion que imprime al hero
function imp_hero(array) {
  //3.1 creamos un numero aleatorio para seleccionar solo 1 de las diferentes img
  let r_p = parseInt(getRandomArbitrary(0, array.length - 1));
  //3.2 utilizamos el metodo styles para modificar el fondo del nodo donde ir al hero
  hero.style.backgroundImage = `url(${array[r_p].img})`;
}

//4. llamamos a la funcion
imp_hero(hero_img)

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

//------------------CREANDO NUESTRAS CARDS MANIPULANDO EL DOM------------

//1. apuntar al nodo en el que queremos crear las cards. 
let container_pj = document.getElementById('col_cards__container');

let personajes = [
  {
    id: 0,
    name: 'Goku',
    anime: 'Dragon Ball Z',
    power: 600,
    img: './assets/goku.jpg'
  },
  {
    id: 1,
    name: 'Luffy',
    anime: 'One Piece',
    power: 500,
    img: './assets/luffy.jpg'
  },
  {
    id: 2,
    name: 'Naruto',
    anime: 'Naruto',
    power: 300,
    img: './assets/naruto.jpg'
  },
  {
    id: 3,
    name: 'Tanjiro',
    anime: 'Kimetzu No yaiba',
    power: 430,
    img: './assets/thanjiro.jpg'
  },
  {
    id: 4,
    name: 'Thorfin',
    anime: 'Vindland Saga',
    power: 190,
    img: './assets/thorfin.jpg'
  },
  {
    id: 5,
    name: 'Eren',
    anime: 'Attack Of Titans',
    power: 400,
    img: './assets/eren.jpg'
  },
]

//2. crear la funcion para imprimir las cards.
let imprimir_cards = function (array) {
  array.forEach(el => {
    //2.1 crear la columna donde vamos a imprimir nuestras cards. -----> metodo de los nuevos
    let col = document.createElement('div')
    col.classList.add('col-12','col-md-6','col-lg-4','d-flex','justify-content-center','p-5')
    //2.2 una vez creado este element vamos a agraegarlo al padre el cual queremos imprimirlo. -----> metodo de los nuevos
    container_pj.appendChild(col)
    //2.3 utilizamos nuestro metodo para pegar la estructura de las cards de boostrap. -----> metodo de los nuevos
    col.innerHTML = `
      <div id="id_${el.id}" class="card c_all shadow bg-body-tertiary rounded" style="width: 18rem;">
        <img src="${el.img}" class="card-img-top img_model" alt="...">
        <div class="card-body card_body_of">
          <h5 class="card-title" >${el.name}</h5>
          <h6 class="card-title">${el.anime}</h6>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia minima recusandae cumque!
          </p>
          <p>Power: ${el.power}</p>
          <a href="#" class="btn btn-danger">More info</a>
        </div>
      </div>
    `

    //crear el evento correcto para disparar el evento
    col.addEventListener('mouseover', () => {
      //seleccionar el elemento que queremos modificar al dispararse el vento
      //luego modificar el elemento
      col.querySelector('.card-body').classList.remove('card_body_of');
    })
    
    col.addEventListener('mouseout', () => {
      //seleccionar el elemento que queremos modificar al dispararse el vento
      //luego modificar el elemento
      col.querySelector('.card-body').classList.add('card_body_of');
    })
  });
}

//3. hacer el llamado de la funcion he imprimir las cards.

imprimir_cards(personajes)


//---------------USER REGISTER--------------
let btn_register = document.querySelector('#btn_register');
let register_contend = document.querySelector('#register__container');
let data_btn_register = document.querySelector('#btn_send__data');
let register_name = document.querySelector('#inp_name');
let register_email = document.querySelector('#inp_email');
let register_password = document.querySelector('#inp_password');
let register_password_repeat = document.querySelector('#inp_password_repeat');
let register_btn_close = document.querySelector('#btn_close')

let users = [];

btn_register.addEventListener('click', ()=> {
  register_contend.classList.remove('hidden');
  register_name.value = '';
  register_email.value = '';
  register_password.value = '';
  register_password_repeat.value = '';
});

data_btn_register.onclick = () => {
  let name = register_name.value;
  let email = register_email.value;
  let password = register_password.value;
  let password_repeat = register_password_repeat.value;

  if ((password == password_repeat) && (name.length > 0) && (email.length > 0)) {
    let user = {
      name:name,
      email:email,
      password:password,
      password_repeat:password_repeat
    };

    users.push(user);

    register_contend.classList.add('hidden');

  } else if (name.length == 0) {
    alert('tu nombre es incorrecto');
  } else if (email.length == 0) {
    alert('tu email es incorrecto');
  } else if(password != password_repeat) {
    alert('tus contraseñas no coinciden');
  }

  console.log(users);
}

register_btn_close.onclick = () => {
  register_contend.classList.add('hidden')
}


//-------------------ANIMACION---------------------//

//------------hacer crecer las cards------------//
let cards_array = document.querySelectorAll('.card')

cards_array.forEach(el => {
  el.onmouseover = () => {
    el.classList.add('animation_grow');
  }

  el.onmouseout = () => {
    el.classList.remove('animation_grow');
  }
})

//-----------aparecer con scrool-----------//

window.addEventListener('scroll',()=>{
  let position = window.scrollY

  if (position > 600 && position < 900) {
    document.getElementById('id_0').classList.add('animation_right')
  } else {
    document.getElementById('id_0').classList.remove('animation_right')
  }
  
  if (position > 1100 && position < 1400) {
    document.getElementById('id_1').classList.add('animation_right')
  } else {
    document.getElementById('id_1').classList.remove('animation_right')
  }

  if (position > 1600 && position < 1900) {
    document.getElementById('id_2').classList.add('animation_right')
  } else {
    document.getElementById('id_2').classList.remove('animation_right')
  }

  if (position > 2100 && position < 2600) {
    document.getElementById('id_3').classList.add('animation_right')
  } else {
    document.getElementById('id_3').classList.remove('animation_right')
  }

  if (position > 2800 && position < 3100) {
    document.getElementById('id_4').classList.add('animation_right')
  } else {
    document.getElementById('id_4').classList.remove('animation_right')
  }
})


//-----------------CREAR UNAS ESTRELLAS CICLABLES -------//
let starts = document.querySelectorAll('.start')
console.log(starts);

starts.forEach((el,index) => {
  el.onclick = () => {
    console.log(el,index);
    for (let i = 0; i < starts.length; i++) {
      element = starts[i]
      if (i <= index) {
        element.style.color = 'yellow';
      } else {
        element.style.color = 'black';
      }
    }
  }
})

//------------------EVENTOS---------------------//

// //1. apuntar al nodo/los nodos que queremos modificar
// let btn_change__color = document.getElementById('btn_color_ev-0');
// let card_body__changeColor = document.getElementById('body_color__ev-0');

// btn_change__color.addEventListener('click', () => {
//   card_body__changeColor.style.background = 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 100%)'
// });


// //mostrar los eventos del window.
// console.log(window);

// // window.addEventListener('scroll',() => {
// //   let position = window.scrollY;
// //   console.log(position);
// // });


// //usar el vento scroll y
// //cuando se llegue a una medida disparar un evento.
// //cambiar el fondo a color negro cuando se pase la card de luffy y volver al color original si esta por arriba de esta.


// window.addEventListener('scroll',() => {
//   let position = window.scrollY;
//   if (position > 1800) {
//     container_pj.style.backgroundColor = 'black';
//   } else {
//     container_pj.style.backgroundColor = 'white';
//   }
// });

// //vamos a recolectar informacion del usuario y generar cambios a partir de dicha informacion 

// //1. el cambio se dispara cuando le damos click a un boton
// let btn_color = document.getElementById('btn_color');
// let inp_color = document.getElementById('inp_value');
// let squere = document.getElementById('squere_color');
// let btn_al = document.getElementById('btn_color__al');

// btn_color.addEventListener('click', () => {
//   let inp_value = inp_color.value
//   squere.style.backgroundColor = `#${inp_value}`;
//   console.log(inp_value);
// })

// btn_al.addEventListener('click', () => {
//   let aleatorio_1 = parseInt(getRandomArbitrary(0, 255));
//   let aleatorio_2 = parseInt(getRandomArbitrary(0, 255));
//   let aleatorio_3 = parseInt(getRandomArbitrary(0, 255));
//   squere.style.backgroundColor = `rgb(${aleatorio_1} ,${aleatorio_2}, ${aleatorio_3})`;
// })

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

//crear un formulario para cambiar el color del fondo de un cuadrado.
//evento, onclick: cuando usamos la funcion click el e.prevent default nos sirve para evitar el comportamiento del summit
  //utilizar el metodo .value para guardar el valor del imput
  //cambiar el color del cuadrado
  //crear un color aleatorio con otro boton 

//crear un formulario de registro y guardar sus valores.

