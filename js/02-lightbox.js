import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryElements = document.querySelector('.gallery');


const createMarkup = createPhotoGallery(galleryItems);

galleryElements.insertAdjacentHTML('beforeend', createMarkup);

galleryElements.addEventListener('click', onLightboxClick);



function createPhotoGallery(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `
        
        <li class="gallery__item">
             <a class="gallery__link" href="${original}">
                 <img
                     class="gallery__image"
                    src="${preview}"
                     alt="${description}"
                 />
             </a>
       </li>
    `;
        }).join('');
}  



function onLightboxClick(evt) {
    evt.preventDefault();  
}

lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250
    })