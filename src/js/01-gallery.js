// Import
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//
const galleryEl = document.querySelector('.gallery');

function createGallery(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join('');
}
galleryEl.insertAdjacentHTML('afterbegin', createGallery(galleryItems));

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  preloading: false,
});
console.log(galleryItems);
