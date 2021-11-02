const obj = { ivan: 5, irene: 10, adrian: 15 };
// const ivan = obj.ivan;
// const irene = obj.irene;
// const adrian = obj.adrian;


const arr = ['Ivan', 'Irene', 'Adrian', 'Carlos'];
// const iv = arr[0];
// const ire = arr[1];
// const adr = arr[2];


//* Desestructuración de objetos
const {  irene, adrian, ivan } = obj; 
console.log( ivan, irene, adrian);
//! Super importante -> las variables tienen que llamarse IGUAL que en el objeto original
//? Por contra, podéis crear las variables en el orden que querais.



//* Desestructuración de arrays
const [ iv, ire, , car ] = arr;
console.log(iv, ire, car);
//! Super importante -> Tienes que crear las variables en el orden correcto
//? Por contra, puedes nombrar a las variables como te dé la gana