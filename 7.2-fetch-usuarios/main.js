// Fetch 

let arrUsuarios= [];
const usuarios= document.querySelector('.usuarios');

// Pedimos los datos
fetch('https://randomuser.me/api/?results=10&nat=es')
.then((response)=> response.json())
.then((data)=> {
  console.log(data);

// Versión 1 creando un div por cada usuario
  data.results.forEach((user) => {

    const div= document.createElement('div');
    div.className="text-center p-3 shadow my-5 bg-ligth";
    div.innerHTML= `
    <img src="${user.picture.large}">
    <h2>${user.name.first} ${user.name.last}</h2>
    <h3>${user.email}</h3>
    <h4>${user.location.city}</h4>
    `
    usuarios.append(div);

  });


// Versión 2 concatenando

  // data.results.forEach((user) => {
  //   console.log(user);
    
  // usuarios.innerHTML += 
  // ` <div class= "text-center p-3 shadow my-5 bg-ligth"> 
  //   <img src="${user.picture.large}">
  //   <h2>${user.name.first} ${user.name.last}</h2>
  //   <h3>${user.email}</h3>
  //   <h4>${user.location.city}</h4>
  // </div> `
  // })

})