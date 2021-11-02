// const inputTask= document.querySelector('#inputTask');
// const botonAdd= document.querySelector('#botonAdd');

const ul= document.querySelector('#lista');
const formuario= document.querySelector('#form1');

formuario.addEventListener('submit', (e) => {
  e.preventDefault(); //le quita el submit por defecto del formulario, hace que no se recargue automaticamente y podemos ver esa informacion
  const li= document.createElement('li');
  li.innerHTML= formuario.task.value;  //el name del input y el value nos permite cogerlo así sin necesidad de cazarlo con el id o class.

  ul.append(li);

})
