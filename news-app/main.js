// 135e489371524aa1a35fd2cbcee9930d

import {Article} from './classes/Article.js'

class App {
  news= [];
  form= document.querySelector('#newsForm');
  output= document.querySelector('#articles');
  apiKey= '135e489371524aa1a35fd2cbcee9930d';
  orderDate= document.querySelector('#order-date');

  constructor() {

    this.form.addEventListener('submit', (e)=> this.handleSubmit(e) );
    this.orderDate.addEventListener('click', ()=> this.orderByDate());

  }

  handleSubmit(e) {

    e.preventDefault();
          // Conseguimos el valor del input
    const query= this.getFormValues();

          // Comprobamos que es correcto y cazamos el error
    try {
      this.formValidity(query);
    }catch(error) {
      console.error(error);
    }
          // pedimos los datos a la query
    this.getNews(query);

    this.form.inputNews.value='';
  }


// pedimos los datos a la query
  async getNews(query) { 

    try {
            // pedimos los datos a la api
      const response= await fetch(`https://newsapi.org/v2/everything?apiKey=${this.apiKey}&language=es&q=${query}`);
      const data= await response.json();
      console.log(data);

            // hacemos un map para meter los nuevos articles en nuestro array
      this.news= data.articles.map((article)=> {
            // desectructuramos el objeto
        const {publishedAt, title, description, urlToImage,author, url}= article;

        const publishedDate= new Date(publishedAt);

            // creamos un nuevo objeto Article con la info que recibimos
        const newArticle= new Article(publishedDate.getTime(), title,description, urlToImage, publishedDate, author, url );
            // metemos el article dentro de this.news
        return newArticle;
      });

    } catch(error) {
      console.error(error);
    }
    this.printAllNews();
  }



  orderByDate() {
    this.news.sort((a,b)=> {
      if(a.date>b.date) {
        return -1;
      }else {
        return 1
      }
    })

    this.printAllNews();
  }



  // imprimimos todos los articulos en pantalla
  printAllNews() {
    this.output.innerHTML='';
    this.news.forEach((article)=> {
      const newArticle = article.createArticle();
      this.output.append(newArticle);
    })
  }



  // conseguimos el valor del input
  getFormValues() {

  const query= this.form.inputNews.value;
  return query;
}



// validamos que sea correcto lo que escriben
  formValidity(textoToValidate) {
    if(!textoToValidate || !isNaN(textoToValidate)) {
      throw new Error('Debes escribir un string válido');
    }
}




}

const app= new App();
