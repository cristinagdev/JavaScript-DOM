import {Movie} from "./classes/Movie.js";

class App {

  movies= [];
  form= document.querySelector('#form1');
  caja= document.querySelector('#caja');
  button= document.querySelector('#btn1');
  isEditing= false;
  currentId=null;



  constructor (){
    this.form.addEventListener ('submit', (e)=> this.handleSubmit(e));
    this.createFirstMovies();
  }

  // GUARDAMOS EN LOCALSTORAGE E IMPRIMIMOS LAS PELICULAS EN PANTALLA
  createFirstMovies() {
    // cogemos las movies de local storage
    const jsonMovies= localStorage.getItem('MOVIES');
    // revisamos si hay alguna
    if(!jsonMovies) {
      return;
    }
    // parseamos el array e imprimimos lo que haya en pantalla
    const parsedMovies= JSON.parse(jsonMovies);
    this.movies= parsedMovies;
    this.printAllMovies();
  }

  // TRANSFROMAMOS LOS OBJETOS A STRING Y LOS METEMOS EN LOCALSTORAGE
  updateLocalStorage() {
    const moviesString= JSON.stringify(this.movies);
    localStorage.setItem('MOVIES', moviesString);
  }

  // CONSEGUIMOS DATOS DEL INPUT
  getFormData() {
    // cogemos el valor del input del formulario (con el name pelicula)
    const valueMovie = this.form.inputPelicula.value.trim();
    const isSeen= this.form.inputVista.checked;
    // Ponemos checked porque es el valor del checkbox que tiene que llegarnos, como en .value. Más abajo preguntamos si es vista o no.

    // Como necesitamos que nos devuelva más de una cosa tiene que ser un objeto o un array.
    return {valueMovie, isSeen};
  }

  // CAMBIAMOS EL VALOR DE MOVIE, NOMBRE, VISTA...
  updateMovie(valueMovie, isSeen) {
        // Recorremos el array y cambiamos la movie que estoy editando
    this.movies= this.movies.map((movie)=> {
      return movie.id === this.currentId 
      ? {...movie, tittle:valueMovie, isSeen:isSeen} 
      : movie;
    });

      this.updateLocalStorage();

        // Imprimimos todas las peliculas con lo nuevos cambios
      this.printAllMovies();
        // Volvemos a cambiar los estilos del boton para que vuelva a ser añadir
      this.button.innerHTML='Añadir';
      this.button.classList.replace('btn-info', 'btn-warning');
        // Cambiamos el valor de la variable
      this.isEditing= false;
      this.currentId=null;
  }


  // FUNCIÓN PRINCIPAL QUE MANEJA EL SUBMIT DEL BOTÓN
  handleSubmit(e) {

    // Le quitamos el valor por defecto
    e.preventDefault();

    // REFACTORIZACIÓN---> 
    // conseguimos los valores del formulario
  const {valueMovie, isSeen}= this.getFormData();

    // Comprobramos que escriban algo correcto
  if(!valueMovie) {
      return;
    }
    // Miramos si estamos en modo editar, o si no
    if (this.isEditing) {
      this.updateMovie(valueMovie, isSeen);
    } else {
      this.addMovie(valueMovie, isSeen)
    }
    // Reseteamos formulario
    this.form.reset();
    
  }



  // AÑADIR PELICULA AL ARRAY
  addMovie(valueMovie, isSeen) {
    // Crea una nueva pelicula
    const newMovie= new Movie(valueMovie, isSeen);
    // Lo mete en el array.
    this.movies.push(newMovie);

    // Añadimos el array global a local storage
    this.updateLocalStorage();


    // Llama al método que tiene esa instancia y crea su propio li
    const li= this.createLi(valueMovie, isSeen, newMovie.id);

    // Añade el li(movie) y lo muestra en pantalla
    this.caja.append(li);
  }



  // CREAR PELICULA
  createLi(valueMovie, isSeen, id) {

    const li = document.createElement('li');

    // otra manera de conseguir el id es crearle una clase personalizada que nos de el id, usando el get attribute en una variable en la función de delete. Ver función de delete->
    // li.setAttribute('data-id', id);
    // o
    // li.dataset.li

    // Creamos los elementos
    const eyeIcon = document.createElement('i');
    const trashIcon= document.createElement('i');
    const editIcon= document.createElement('i');

  // Añadimos una clase según isSeen es true o false
    
    eyeIcon.className= isSeen ? 'bi bi-eye-fill text-warning ms-auto' : 'bi bi-eye-slash text-dark ms-auto';
    trashIcon.className='bi bi-trash text-danger ms-3';
    editIcon.className="bi bi-pencil text-warning mx-3";


    // Le añadimos el listener para que cambie o se borre al hacer click
    trashIcon.addEventListener('click', (e) => this.deleteMovie(e, id) );
    eyeIcon.addEventListener('click', (e)=> this.changeSeen(id));
    editIcon.addEventListener('click', ()=> this.editMovie(id));
    


    li.append(valueMovie, eyeIcon,editIcon, trashIcon);
    
    return li;
  }



  // BORRAR PELICULA
  deleteMovie(e, id) {
    // borrar el elemento en pantalla
    const sure= confirm('¿Estás seguro?');
    if(!sure) {
      return;
    }

// 2º opción. Así conseguimos el id sin necesidad de mover los datos
    // const id= e.target.parentElement.getAttribute('data-id');

    //1º con el id de la movie borramos la movie del array
    this.movies = this.movies.filter((movie)=> {
      return movie.id !== id;
    });

    // Actualizar el local storage con las nuevas peliculas despues de borrar alguna
    this.updateLocalStorage();

    // imprimir todas las peliculas del array.
    this.printAllMovies();
  }



  // IMPRIMIR LAS PELÍCULAS QUE QUEDAN EN PANTALLA
  printAllMovies() {
    this.caja.innerHTML='';
    this.movies.forEach((movie)=> {
      const li=this.createLi(movie.tittle, movie.isSeen, movie.id);
      this.caja.append(li);
    });
    
  }

  // CAMBIAR EL ICONO A VISTO O NO VISTO
  changeSeen(id) {
    // Ir al array movies y modificar la movie a la que hemos hecho click
    this.movies = this.movies.map((movie)=> {
      if(movie.id ===id) {
        return {...movie, isSeen: !movie.isSeen}
      } else {
        return movie;
      }
    })

    // Actualizar local storage
    this.updateLocalStorage();

    // Borrar todas las movies e imprimir otra vez todas las movies con el ojo cambiado.
    this.printAllMovies();
  }

  // MODIFICAR UNA PELÍCULA
  editMovie(id) {
    // Busca el objeto movie con el id que tenemos y lo guarda
    const movieToUpdate = this.movies.find((movie) => 
      movie.id===id);
    // Cambiar los valores del formulario por los que tenga el objeto movie
    this.form.inputPelicula.value= movieToUpdate.tittle;
    this.form.inputVista.checked= movieToUpdate.isSeen;
    // Cambiamos los estilos del boton añadir
    this.button.innerHTML='Editar';
    this.button.classList.replace('btn-warning', 'btn-info');

    this.isEditing=true;
    this.currentId= id;
  }


}

const app= new App();
