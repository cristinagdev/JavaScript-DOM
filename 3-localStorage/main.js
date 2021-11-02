const obj= {
  planta: 'palmera',
  altura: 10,
  color: 'verde',
  clima: 'cálido'
}

const objPalm= JSON.stringify(obj);
localStorage.setItem('planta', objPalm);

const objObtenido= localStorage.getItem('planta');

const objParseado= JSON.parse(objObtenido);

console.log(objParseado);