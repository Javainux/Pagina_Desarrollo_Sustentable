const imagenes = document.querySelectorAll('.img-container img');
const fullscreenDiv = document.createElement('div');
fullscreenDiv.id = 'fullscreen';
document.body.appendChild(fullscreenDiv);

imagenes.forEach(img => {
    img.addEventListener('click', () => {
        fullscreenDiv.innerHTML = <img src="${img.src}" alt="${img.alt}">;
        fullscreenDiv.style.display = 'flex';
    });
});

fullscreenDiv.addEventListener('click', () => {
    fullscreenDiv.style.display = 'none';
});