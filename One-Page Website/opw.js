const lightboxBg = document.createElement('div');
lightboxBg.id = 'lightboxBg';
document.body.appendChild(lightboxBg);

const images = document.querySelectorAll("img");

images.forEach(image => {
  image.addEventListener("click", e => {
    lightboxBg.classList.add('active');

    const lightboxImg = document.createElement('img');
    lightboxImg.src = image.src;
    while(lightboxBg.firstChild){
      lightboxBg.removeChild(lightboxBg.firstChild) 
    }
    lightboxBg.appendChild(lightboxImg);
  })
})

lightboxBg.addEventListener("click", e => {
  if (e.target !== e.currentTarget) return;
  lightboxBg.classList.remove('active');
})