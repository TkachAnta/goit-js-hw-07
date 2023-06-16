import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
galleryContainer.addEventListener('click', onClick);


function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

  function onClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'BUTTON') {
        return;
    }
    console.log(e.target)
  }

  const instance = basicLightbox.create(`
  <img src='${e.dataset.sourse}' width='800' height='600'>`)
 
  instance.show()
  
  function onEscKeyPress(e) {
if (e.code !== 'Escape') return;
   instance.close();
  }

console.log(galleryItems);
