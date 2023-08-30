import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const makeGalleryCard = pictureInfo => {
  const { preview, original, description } = pictureInfo;

  return `
   <li class="gallery__item">
     <a class="gallery__link" href="${original}">
       <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
       />
     </a>
   </li
  `;
};


const galleryCardsTemplates = galleryItems.map(pictureInfo => makeGalleryCard(pictureInfo));

galleryContainer.insertAdjacentHTML('beforeend', galleryCardsTemplates.join(''));

galleryContainer.addEventListener('click', onImgClick);

function onImgClick(event) {

    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    };


  const instance = basicLightbox.create(
    `
		<img src="${event.target.dataset.source}" width="1280" height="auto"/>
        `,
    {
      onShow: () => {
        document.addEventListener('keydown', onEsckeyPress);
      },
      onClose: () => {
        document.removeEventListener('keydown', onEsckeyPress);
      },
    },
  );
    instance.show();
    
    function onEsckeyPress(event) {
    if (event.code === 'Escape') {
      instance.close();
     
    }
  }

}
