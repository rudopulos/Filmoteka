import './movieButtons';
import './members-modal';

import { getFromLocalStorage } from './localStorage';
import { fetchMoviesDetails } from './fetchMovieApi';
import { createMyLibraryGallery } from './galleryBuilder';
import { clearMyLibraryGallery } from './clearGallery';

const watchedHeaderButton = document.getElementById('watched-header-button');
const queueHeaderButton = document.getElementById('queue-header-button');
const watchedHeaderMobileButton = document.getElementById(
  'watched-header-mobile-button'
);
const queueHeaderMobileButton = document.getElementById(
  'queue-header-mobile-button'
);

const noWatchedMoviesText = document.getElementById('no-watched-movies');
const noMoviesInQueueText = document.getElementById('no-movies-in-queue');

if (
  !watchedHeaderButton ||
  !queueHeaderButton ||
  !watchedHeaderMobileButton ||
  !queueHeaderMobileButton
) {
  return;
}

watchedHeaderButton.addEventListener('click', onwatchedHeaderButtonClick);
watchedHeaderMobileButton.addEventListener('click', onwatchedHeaderButtonClick);
queueHeaderButton.addEventListener('click', onqueueHeaderButtonClick);
queueHeaderMobileButton.addEventListener('click', onqueueHeaderButtonClick);

watchedHeaderButton.click();

function onwatchedHeaderButtonClick(event) {
  event.preventDefault();
  let isMobile = watchedHeaderMobileButton.style.display === 'inline-block';
  if (isMobile) {
    queueHeaderMobileButton.classList.remove('my-library-active');
    watchedHeaderMobileButton.classList.add('my-library-active');
  } else {
    queueHeaderButton.classList.remove('my-library-active');
    watchedHeaderButton.classList.add('my-library-active');
  }

  const watchedMovies = getFromLocalStorage('watchedMovies');
  if (watchedMovies.length < 1) {
    noWatchedMoviesText.classList.remove('hidden');
    noMoviesInQueueText.classList.add('hidden');
    clearMyLibraryGallery();
  } else {
    noWatchedMoviesText.classList.add('hidden');
    noMoviesInQueueText.classList.add('hidden');
    fetchMoviesDetails(watchedMovies).then(r => createMyLibraryGallery(r));
  }
}

function onqueueHeaderButtonClick(event) {
  event.preventDefault();
  let isMobile = window.innerWidth <= 425;
  if (isMobile) {
    watchedHeaderMobileButton.classList.remove('my-library-active');
    queueHeaderMobileButton.classList.add('my-library-active');
  } else {
    watchedHeaderButton.classList.remove('my-library-active');
    queueHeaderButton.classList.add('my-library-active');
  }

  const queuedMovies = getFromLocalStorage('queuedMovies');
  if (queuedMovies.length < 1) {
    noMoviesInQueueText.classList.remove('hidden');
    noWatchedMoviesText.classList.add('hidden');
    clearMyLibraryGallery();
  } else {
    noWatchedMoviesText.classList.add('hidden');
    noMoviesInQueueText.classList.add('hidden');
    fetchMoviesDetails(queuedMovies).then(r => createMyLibraryGallery(r));
  }
}
