import { fetchData } from './apiUtils';

const loader = document.querySelector('.loader');

const fetchPopularMovies = async page => {
  try {
    // Afișează loader-ul și setează un delay minim de 1 secundă
    loader.style.display = 'block';
    const timeout = new Promise(resolve => setTimeout(resolve, 1000));

    const params = { page: page };
    const data = await Promise.all([
      fetchData('/trending/movie/week', params),
      timeout, // Așteaptă minim 1 secundă, indiferent de cât durează cererea
    ]);

    // Ascunde loader-ul după ce datele au fost primite
    loader.style.display = 'none';

    return data[0]; // Returnează doar rezultatul cererii API și nu timeout-ul
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    loader.style.display = 'none'; // În caz de eroare, ascunde loader-ul
    // Poți adăuga un mesaj de eroare sau tratarea erorii aici
    throw error;
  }
};

const fetchMovieDetails = async movieId => {
  const params = { language: 'en-US' };
  return fetchData(`/movie/${movieId}`, params); // Efectuează cererea pentru detalii de film
};

const fetchMoviesDetails = async ids => {
  const arrayOfPromises = ids.map(async id => {
    return await fetchMovieDetails(id);
  });
  const movies = await Promise.all(arrayOfPromises);
  return movies;
};

export { fetchPopularMovies, fetchMovieDetails, fetchMoviesDetails };
