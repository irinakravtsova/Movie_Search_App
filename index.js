const inputNode = document.querySelector('.js-movie-app');
const btnNode = document.querySelector('.js-btn-find');
const listNode = document.querySelector('.js-list-movie');
const notFoundNode = document.querySelector('.notfound');
const movieWrapperNode = document.querySelector('.js-movie__wrapper')


inputNode.focus();

btnNode.addEventListener('click', function() {

  const movie = inputNode.value;
  const url = `http://www.omdbapi.com/?s=${movie}/&apikey=bc04035f`;
   
  fetch(url)
  .then(response => response.json()) //преобразуй ответ на запрос в объект

  .then(data => {
     
    notFoundNode.style.display = 'none'
   
    let movieHTML = '';
    data.Search.forEach(element => {
     movieHTML +=  `
      <li >
       <a class="movie__card-link" href="/movie.html?id=${element.imdbID}">
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
    btnNode.classList.toggle("btn-find_found")
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
// 