  function openLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'flex';

  const clickedImageSrc = event.target.getAttribute('src');
  const lightboxImage = document.getElementById('lightbox-image');
  lightboxImage.setAttribute('src', clickedImageSrc);
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}
