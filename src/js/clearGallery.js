const getGalleryElement = () => document.querySelector('.gallery'); // Funcția getGalleryElement returnează elementul cu clasa CSS "gallery"
const getMyLibraryGalleryElement = () =>
  document.querySelector('.my-library-gallery');

// Funcția clearGallery se ocupă de ștergerea conținutului galeriei

const clearGallery = () => {
  const galleryElement = getGalleryElement(); // Obține elementul galeriei utilizând funcția getGalleryElement
  // Verifică dacă s-a găsit elementul galeriei
  if (galleryElement) {
    galleryElement.innerHTML = ''; // Dacă există, șterge toate elementele din galerie
  }
};

const clearMyLibraryGallery = () => {
  const myLibraryGalleryElement = getMyLibraryGalleryElement(); // Obține elementul galeriei utilizând funcția getGalleryElement
  // Verifică dacă s-a găsit elementul galeriei
  if (myLibraryGalleryElement) {
    myLibraryGalleryElement.innerHTML = ''; // Dacă există, șterge toate elementele din galerie
  }
};
export {
  clearGallery,
  clearMyLibraryGallery,
  getGalleryElement,
  getMyLibraryGalleryElement,
};
