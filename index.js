const inputNode = document.querySelector('.js-movie-app');
const btnNode = document.querySelector('.js-btn-find');
const listNode = document.querySelector('.js-list-movie');
const notFoundNode = document.querySelector('.notfound');

inputNode.focus();

async function getMovies() {
  try {
    if (!movies.length)
  }
}

btnNode.addEventListener('click', function() {
  const movie = inputNode.value;
  const url = `http://www.omdbapi.com/?s=${movie}/&apikey=bc04035f`;
  console.log(url);
   
  fetch(url)
  .then(response => response.json()) //преобразуй ответ на запрос в объект
  .then(data => {
    notFoundNode.style.display = 'none'

    let movieHTML = '';
    data.Search.forEach(element => {
     movieHTML +=  `
      <li class="movie__card" id=${element.imdbID}>
       <a class="movie__card_link" data-action="clickMovie" href="http://127.0.0.1:5500/?i=tt0372784">
          <img class="movie-image" src=${element.Poster} alt=${element.Title}>
          <div class="movie__text">
            <p class="movie-title">${element.Title}</p>
            <p class="movie-year">${element.Year}</p>
            <p class="movie-type">${element.Type}</p>
          </div>
        </a>
      </li> 
    `
    });
    listNode.innerHTML = movieHTML;
   })
  .catch(() => {
    notFoundNode.style.display = 'block'
   });
  
  clearInput(); 
  
 });
 
function clearInput() {
  inputNode.value = "";
  inputNode.focus();
}
listNode.addEventListener('click', function(e) {
  console.log('click');
  inputNode.style.display = 'none';
  if (e.target.dataset.action === "clickMovie") {
   
    const params = new URLSearchParams(location.search);
    const id = params.get('imdbID');
    const movieUrl = `http://www.omdbapi.com/?i=${id}&apikey=bc04035f`
  console.log(movieUrl);
  fetch(movieUrl)
  .then(response => response.json()) //преобразуй ответ на запрос в объект
  .then(data => {
   
    let movieHTML = '';
    data.Search.forEach(element => {
     movieHTML +=  `
      <li class="movie__card" id=${element.imdbID}>
       <a class="movie__card_link" data-action="clickMovie" href="">
          <img class="movie-image" src=${element.Poster} alt=${element.Title}>
          <div class="movie__text">
            <p class="movie-title">${element.Title}</p>
            <p class="movie-year">${element.Year}</p>
            <p class="movie-type">${element.Type}</p>
          </div>
        </a>
      </li> 
    `
  })


    });
    listNode.innerHTML = movieHTML;
  }
})




   
 // <a href='http://www.omdbapi.com/?i=${i}/&apikey=bc04035f' class="movie__card-link"></a>
   

//     const params = new URLSearchParams(location.search);
//     const id = params.get('imdbID');
// console.log(id);
 
// "Search": [
//   {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//       "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
//   },
//   {
//       "Title": "The Batman",
//       "Year": "2022",
//       "imdbID": "tt1877830",
//       "Type": "movie",
//       "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNTAwZGEtNTAxNC00ODVjLTgzZjUtYmU0YjAzNmQyZDEwXkEyXkFqcGdeQXVyNDc2NTg3NzA@._V1_SX300.jpg"
//   }