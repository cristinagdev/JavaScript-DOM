class Article {
  
  articleDiv = document.createElement('article');
  
  constructor(id, title, content, photo, date, author, url) {
    this.id=id;
    this.title= title;
    this.content= content;
    this.photo=photo;
    this.date= date;
    this.author=author;
    this.url=url;
  }

  createArticle() {

    const dateOptions={year:'numeric', month:'long', day:'numeric'};

    this.articleDiv.className="bg-secondary py-4 my-5 text-center d-flex flex-column";
    this.articleDiv.innerHTML= `
    <div class="row">
      <a class="col-12 col-md-5" target="_blank" rel="noopener noreferrer" href="${this.url}" alt="Foto by ${this.author}"><img class="img-fluid my-4 my-md-0 imgArticle" src="${this.photo}"></a>
      <div class="col-12 col-md-7">
      <small>${this.date.toLocaleDateString('es-ES', dateOptions)}</small>
        <h2>${this.title}</h2>
        <p>${this.content}</p>
        <h3 class="h5">by ${this.author}</h3>
      </div>
    </div>
    <a class="btn btn-dark mt-3" target="_blank" rel="noopener noreferrer" href="${this.url}">Leer más...</a>
    `;

    return this.articleDiv;
  }


}

export {Article};