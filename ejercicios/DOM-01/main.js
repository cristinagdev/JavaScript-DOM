// Ejercicio 1
const input1= document.querySelector('#firstInput');
const boton1= document.querySelector('.firstButton');
const input2= document.querySelector('#secondInput');
const boton2= document.querySelector('.secondtButton');
const lista1= document.querySelector('.lista1');
const lista2= document.querySelector('.lista2');

// const handleClick =()=> {
//   const li= document.createElement('li');
//   li.innerText= input1.value;
//   lista1.append(li);

// }

boton1.addEventListener('click', ()=> {
  const listItem = document.createElement('li');
  listItem.innerHTML= input1.value;
  listItem.classList.add('fs-4');  //Esto le añade la clase de bootstrap
  lista1.append(listItem);

  input1.value='';
});

boton2.addEventListener('click', ()=> {
  const listItem = document.createElement('li');
  listItem.innerHTML=input2.value;
  listItem.classList.add('fs-4');
  lista2.append(listItem);
  input2.value='';
})


// Ejercicio DOM 02
// Crea un conversor de dólares a euros. Utiliza un input y un botón para recibir el valor que nos da el usuario y imprimirselo en pantalla convertido a euros.

// Ejercicio 2
const inputDinero= document.querySelector('.inputConversor');
const botonConversor= document.querySelector('.botonConversor');
const resultado= document.querySelector('.convertido');

const conversor= () => {
  const dolares= Number(inputDinero.value);
  const euros= (dolares* 0.86).toFixed(2);

  const h3= document.createElement('h3');
  h3.innerHTML= `${dolares} son aproximadamente ${euros}`

  resultado.append(h3);
}

botonConversor.addEventListener('click', conversor);


// Ejercicio DOM 03
// Añade una imagen en nuestra página HTML.
// Al hacer click encima de ella cambiaremos la foto por otra. Para ello cambiaremos el src="" de la imagen.
// EXTRA - Cada vez que haga click, que cambie una por otra (Hay 2 imagenes en total).

let img1= document.querySelector('.foto1');
const gato1= "https://placekitten.com/g/200/300";
const gato2= 'https://placekitten.com/200/300';

img1.addEventListener('click', ()=> {
  if(img1.getAttribute("src")== "https://placekitten.com/200/300"){
    img1.setAttribute("src","https://placekitten.com/g/200/300");
  }else{
  img1.setAttribute("src",'https://placekitten.com/200/300' );
  }
})



// Ejercicio DOM 04
// Crea una tabla en HTML como la siguiente usando solo JavaScript.
// Las clases que tienen son simplemente estas -> table class="table table-light"

const seccionTabla= document.querySelector('#seccion-tabla');

const table= document.createElement('table');
table.classList.add('table', 'table-light');

seccionTabla.append(table);

table.innerHTML= `

<tr>
<td>Nombre</td>
<td>Apellidos</td>
<td>Nota</td>
<td>Aprobado</td>
</tr>

`



