//* Promesas:

const arrayTextos = [];

//? PARTE 1: Creación de la promesa
const funcionPromesa = () => {

  // pido los datos a una API
  // hagas algo con esos datos
  // conviertas los datos en un arry nuevo
  return new Promise((resolve, reject)=>{
    const notaAlumno = Math.ceil(Math.random()*10);
    console.log(notaAlumno);
    console.log('Estoy pidiendo datos a una API');
    console.log('...')
    // El setTimeout lo utilizo solo para imitiar el tiempo que tardaría un servidor en devolverme los datos que pido 
    setTimeout(()=>{
      if(notaAlumno > 7){
        // console.log('Promesa cumplida');
        resolve({ status: 200, ok: true });
      } else if( notaAlumno >= 5){
        resolve('Aprobado, pero podrías mejorar')
      }else{
        // console.log('Promesa NO cumplida');
        reject('Has suspendido');
      }
    }, 2000)

  });
}


//? PARTE 2: Decidir qué pasa cuando se cumple o no se cumple la promesa (Ejecutar la promesa)

funcionPromesa()
  .then((texto)=> console.log(texto))
  .catch((error)=> console.error(error))
  .finally(()=>console.log('Hemos terminado'))