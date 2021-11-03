// ...rest / ...spread

// spread operator
const arrNum1=[1,2,3];
const arrNum2=[4,5,6];
const obj1= {name:'Ivan', age:34}
const obj2={name:'Javi', married: true}

const newArr=[...arrNum1,...arrNum2];
console.log(newArr);
const newObject= {...obj1,...obj2};

// rest operator

// replaceall()
const texto='hola+como+estás';
texto.replaceAll('+', ' ');

// &&

const valor='algo';
const nuevoValor= valor && 'esto';

// ||
const nombreUsuario= undefined;
const otroValor;
otroValor= nombreUsuario || 'Ivan';
console.log(otroValor);

