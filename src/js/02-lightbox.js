import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const makeGalleryCard = pictureInfo => {
  const { preview, original, description } = pictureInfo;

  return `
   <li class="gallery__item">
      <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `;
};


const galleryCardsTemplates = galleryItems.map(pictureInfo => makeGalleryCard(pictureInfo));

galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplates.join(''));

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250, 
});
