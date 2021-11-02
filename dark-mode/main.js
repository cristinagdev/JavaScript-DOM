const boton = document.querySelector('.boton');
const img= document.querySelector('.imagen');

boton.addEventListener('click', ()=> {
  document.body.classList.toggle('dark');
  // Body podemos cogerlo por defecto sin necesidad de cazarlo, con la imagen no.
})

img.addEventListener('click', ()=> {
  img.classList.toggle('margin-img');
})