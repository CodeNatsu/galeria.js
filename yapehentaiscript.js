const gallery = document.querySelectorAll('.gallery-grid-box .gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const nextBtn = lightbox.querySelector('.next');
const prevBtn = lightbox.querySelector('.prev');
const closeBtn = lightbox.querySelector('.close');
let currentIndex = 0;

gallery.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.classList.add('active');
  });
});

function showImage() {
  lightboxImg.src = gallery[currentIndex].src;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % gallery.length;
  showImage();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
  showImage();
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.classList.remove('active');
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'ArrowRight') nextBtn.click();
  if (e.key === 'ArrowLeft') prevBtn.click();
  if (e.key === 'Escape') lightbox.classList.remove('active');
});
