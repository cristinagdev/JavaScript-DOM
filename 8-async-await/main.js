let arrUsuarios = [];
const usuarios = document.querySelector('.usuarios');

// Pedimos datos
const getUsers= async ()=> {

  try{

    // guardamos los datos de la api en response.
    const response= await fetch('https://randomuser.me/api/?results=10&nat=es');

    // guardamos en data esos datos de response con el método json para poder usarlos.
    const data= await response.json();

    // hacemos un map del array results y creamos otro array con el objeto con propiedades nuevas y las metemos en el array de usuarios
    arrUsuarios = data.results.map((user)=>{
      return {
        foto: user.picture.large,
        nombre: user.name.first,
        apellido: user.name.last,
        email: user.email,
        ciudad: user.location.city  
      }
    });

  }catch(error){
    console.error(error);
  }

  arrUsuarios.forEach((user) => {
    // Desestructuramos el objeto user para no repetir
    const { foto, nombre, apellido, email, ciudad } = user;
    
    usuarios.innerHTML += `
        <div class="text-center p-3 shadow my-5 bg-light">
          <img class="my-3" src="${foto}">
          <h2>${nombre} ${apellido}</h2>
          <h3>${email}</h3>
          <h4><i class="bi bi-pin-map-fill"></i> ${ciudad}</h4>
        </div>
      `;

  });
}

getUsers();