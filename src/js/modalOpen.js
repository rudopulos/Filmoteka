import { fetchData } from './apiUtils';
import { getFromLocalStorage } from './localStorage';
import { watchedButton, queueButton } from './movieButtons';

//Salvez ID-ul filmului
let globalMovieId = null;

const openModal = async movieId => {
  try {
    // Obțineți detaliile complete ale filmului utilizând ID-ul
    const movieDetails = await fetchData(`/movie/${movieId}`);
    const modal = document.querySelector('.modal-gallery');
    globalMovieId = movieId;

    // Verificăm dacă filmul este deja adăugat la "Watched" sau "Queue"
    const watchedMovies = getFromLocalStorage('watchedMovies');
    const queuedMovies = getFromLocalStorage('queuedMovies');

    if (watchedMovies.includes(movieId)) {
      watchedButton.classList.add('modal_watched_active');
      watchedButton.innerText = 'Watched';
    } else {
      watchedButton.classList.remove('modal_watched_active');
      watchedButton.innerText = 'Add to Watched';
    }

    if (queuedMovies.includes(movieId)) {
      queueButton.innerText = 'Queued';
      queueButton.classList.add('modal_queue_active');
    } else {
      queueButton.innerText = 'Add to Queue';
      queueButton.classList.remove('modal_queue_active');
    }

    const roundedVoteAverage = parseFloat(movieDetails.vote_average).toFixed(1);
    const roundedPopularity = parseFloat(movieDetails.popularity).toFixed();

    // Obține URL-ul complet pentru poster
    const posterUrl = movieDetails.poster_path
      ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
      : nullPoster;

    // Populez modalul cu detaliile obținute folosind structura HTML specificată
    modal.querySelector('.modal-content').innerHTML = `
    <div class="gallery__modal__img"><img src="${posterUrl}" alt="${
      movieDetails.title
    }" class="modal-movie-poster"></div>
    <div class="gallery__modal__details">
      <h3 class="modal-movie-title">${movieDetails.title}</h3>
      <p class="modal-movie-vote"><span class= "modal-movie-category">Vote / Votes:</span> <span><span class="modal-movie-category-detail">${roundedVoteAverage}</span> / ${
      movieDetails.vote_count
    }</span></p>
      <p class="modal-movie-popularity"><span class= "modal-movie-category">Popularity:</span> ${roundedPopularity}</p>
      <p class="modal-movie-original-title"><span class= "modal-movie-category">Original Title:</span> ${
        movieDetails.original_title
      }</p>
      <p class="modal-movie-genre"><span class= "modal-movie-category">Genre:</span> ${movieDetails.genres
        .map(genre => genre.name)
        .join(', ')}</p>
      <p class="modal-movie-overview"><span class= "modal-movie-overview-category">ABOUT:</span> ${
        movieDetails.overview
      }</p>
    </div>`;

    // Afisez modalul
    modal.classList.remove('gallery-is-hidden');
  } catch (error) {
    console.error('Error opening modal:', error);
  }
};

export { openModal, globalMovieId };
