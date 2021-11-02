// Cazamos elementos

const input = document.querySelector('.input');
const boton= document.querySelector('.boton1');
const h1= document.querySelector('h1');
const h3= document.querySelector('h3');
const ul= document.querySelector('.lista')


// EVENTOS De ratón

// Cuando hace click se pone rojo. USamos una función.
const handleClick= ()=> {
console.log('Has hecho click');
h1.style.backgroundColor='tomato';

// Creamos un elemento cuando pinchemos el boton
// 1º creamos la etiqueta en memoria
const li=document.createElement('li');
// 2º le añadimos contenido a la etiqueta
li.innerHTML='Item 1';
// 3º añadirle clases o atributos, o estilos que queramos
li.classList.add('list-item');
// 4º lo añadimos al html
ul.append(li); //Lo añade dentro y al final
// ul.prepend(li); //Lo añade dentro y al principio
// ul.after(li); //Lo añade fuera después
// ul.before(li); //Lo añade fuera antes

}

boton.addEventListener('click', handleClick);

// Aquí lo mismo pero con el callbck dentro del evento. El click puede ser en cualquier elemento.

h3.addEventListener('click', ()=> {
  document.body.style.backgroundColor='blue';

});

