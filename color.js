const swatches = document.querySelectorAll('.color-swatch');

swatches.forEach(swatch => {
  swatch.addEventListener('click', function() {
    const color = this.id;
    const body = document.body;
    const textColor = color === 'black' || color === 'red' ? 'white' : 'black';
    body.style.backgroundColor = color;
    body.style.color = textColor;
  });
});
