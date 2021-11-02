// CAZAR ELEMENTOS

// Coge elementos por el id.
const h1= document.getElementById("titulo");
console.log(h1);

// Coge elementos como en css. Coge el primer elemento que encuentre.Si quieres que te coja todos los elementos se usa querySelectorAll.
const subtitulo= document.querySelector(".subtitulo");
console.log(subtitulo);
const boton= document.querySelector('#boton1');
const a=document.querySelector('a');

// Al usar querySelectorAll te mete todos los elementos en un array. Solo te deja usar el forEach.

// MODIFICAR SU CONTENIDO

// La propiedad innerText nos permite ver lo que hay dentro y a la vez cambiarle el valor.
h1.innerText= "cambio de titulo";

// La propiedad innerHtml nos permite crear una nueva etiqueta con lo que le digamos.
const ul= document.querySelector("ul");
ul.innerHTML=" <li> Item 1</li>";

// CAMBIAR SUS ESTILOS
h1.style.backgroundColor="tomato";
h1.style.color='white';

// AÑADIR O QUITAR CLASES

// Añade una clase si no la tiene, y si la tiene debes escribir las clases que ya tenga más la nueva. Ej: className="btn prueba"
boton.className= "prueba";

// Con la propierdad add podemos añadir directmente la nueva clase a las que ya tenga, sin sustituirlas como en className.
boton.classList.add('botonChulo');

// Con la propiedad remove quitamos la clase que le digamos al elemento.
boton.classList.remove('prueba');

// Replace te sustituye una clase por otra.
boton.classList.replace('botonChulo', 'botonSimple');

// Cuando llegue a esta linea JS va a ponerle la clase que le digamos si no la tiene, o la va a eliminar si la tiene.
boton.classList.toggle('toggle');

// AÑADIR O QUITAR ATRIBUTOS
a.setAttribute('href', 'https://google.com');
// Puedes crear atributos personalizables

// Borra el atributo
a.removeAttribute('')

// Obetener información de un atributo
console.log(a.getAttribute('href'));  


// CREAR ELEMENTOS
// Creamos un elemento cuando pinchemos el boton
// 1º creamos la etiqueta en memoria
// const li=document.createElement('li');
// // 2º le añadimos contenido a la etiqueta
// li.innerHTML='Item 1';
// // 3º añadirle clases o atributos, o estilos que queramos
// li.classList.add('list-item');
// // 4º lo añadimos al html
// ul.append(li); //Lo añade dentro y al final
// // ul.prepend(li); //Lo añade dentro y al principio
// // ul.after(li); //Lo añade fuera después
// // ul.before(li); //Lo añade fuera antes