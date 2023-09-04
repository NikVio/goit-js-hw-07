import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryElements = document.querySelector('.gallery');


const createMarkup = createPhotoGallery(galleryItems);

galleryElements.insertAdjacentHTML('beforeend', createMarkup);

galleryElements.addEventListener('click', onGalleryClick);



function createPhotoGallery(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
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
       </li>
    `;
        }).join('');
}  

function onGalleryClick(evt) {
    evt.preventDefault();
   if (evt.target.nodeName !== 'IMG') {
    return
   }
    const photo = evt.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src="${photo}" alt="${evt.target.alt}">
`)
    instance.show();
}
    











  
