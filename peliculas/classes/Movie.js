class Movie {

  id= Math.ceil(Math.random()*1000);

  constructor (tittle, isSeen) {
    this.tittle= tittle;
    this.isSeen= isSeen;
  }

}

export {Movie}
