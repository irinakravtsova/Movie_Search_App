const movieWrapperNode = document.querySelector('.js-movie__wrapper')

const params = new URLSearchParams(location.search);
const id = params.get('id');

const movieUrl = `http://www.omdbapi.com/?i=${id}&apikey=bc04035f`


fetch(movieUrl)
.then(response => response.json()) //преобразуй ответ на запрос в объект
.then(data => {

let movieHTML = '';

 movieHTML +=  `
 <div class="movie__wrapper-details">
    <img class="movie__image" src=${data.Poster} alt=${data.Title}>
    <div class="movie__input">
      <h1 class="movie__name">${data.Title}</h1>
      <div class="movie__info">
       <p class="label">Год:
        <span class="movie__info-text">${data.Year}</span>
       </p>
      </div>
      <div class="movie__info">
        <p class="label">Рейтинг:
          <span class="movie__info-text">${data.Rated}</span>
        </p>
      </div>
      <div class="movie__info">
        <p class="label">Дата выхода:
          <span class="movie__info-text">${data.Released}</span>
         </p>
      </div>
      <div class="movie__info">
        <p class="label">Продолжительность:
          <span class="movie__info-text">${data.Runtime} </span>
        </p>
      </div>
      <div class="movie__info">
         <p class="label">Жанр:
          <span class="movie__info-text"> ${data.Genre} </span>
         </p>
       </div>
      <div class="movie__info">
        <p class="label">Режиссер:
          <span class="movie__info-text"> ${data.Director} </span>
        </p>
      </div>
      <div class="movie__info">
        <p class="label">Сценарий:
          <span class="movie__info-text"> ${data.Writer} </span>
         </p>
      </div>
      <div class="movie__info">
        <p class="label">Актеры:
          <span class="movie__info-text"> ${data.Actors} </span>
        </p>
      </div>
    </div>
  </div>

<div class="movie-content">${data.Plot}</div>
   
`
movieWrapperNode.innerHTML = movieHTML;
})



