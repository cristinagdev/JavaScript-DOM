//* Fetch
let arrPhotos = [];
const photos = document.querySelector('.photos');


// Pide datos a jsonplaceholder
fetch('https://jsonplaceholder.typicode.com/photos')

  //cuando se cumpla recibirás un objeto response y llamamos a su método json() para que lo transforme y poderlo utilizar
  .then((respuesta)=> respuesta.json())

  // Hago con los datos transformados lo que me de la gana
  .then((datos)=> {
    arrPhotos = datos.slice(0, 100);
    console.log(arrPhotos)
    

    // recorremos el array de fotos nuevas y imprimimos en pantalla cada foto
    arrPhotos.forEach((photo)=>{
      const divPhoto = document.createElement('div');
      divPhoto.classList.add('my-5', 'bg-light', 'p-3', 'text-center')
      divPhoto.innerHTML = `
        <img class="img-fluid" src="${photo.url}">
        <h2 class="mt-3">${photo.title}</h2>
      `;
      photos.append(divPhoto);
    })



    
    
  } ) 
  .catch((error) => console.error(error))