
// // Single threaded

// console.log('hola'); 

// const nombre = 'Ivan';

// console.log(nombre); 

// console.log(suma(4,5))

// // Hoisting
// function suma(num1, num2) {
//   return num1 + num2;
// }

// console.log('Principio Loop');
// let num=0;
// for(let i=0; i<1000000000; i++){
// num = i;
// }
// console.log(('Final del loop')); 

// Temporizador y Repetidor
//* setTimeout -> temporizador
const btnTimeout = document.querySelector('#boton-timeout');
const btnInterval = document.querySelector('#boton-interval');



console.log('Antes del timeout'); 

const temporizador1 = setTimeout( ()=>{console.log('hola desde setTimeout')}, 3000 );

btnTimeout.onclick = () => clearTimeout(temporizador1);
 


console.log('Después del timeout');

let contador = 1;
const intervalo1 = setInterval( ()=>{console.log(contador++)} ,  1000);

btnInterval.addEventListener('click', ()=>{
  clearInterval(intervalo1);
})
