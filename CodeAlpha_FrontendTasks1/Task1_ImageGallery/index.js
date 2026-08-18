// Lightbox effect
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `<img src="${img.src}" alt="">`;
    document.body.appendChild(lightbox);
    lightbox.addEventListener('click', () => lightbox.remove());
  });
});
