const images = document.querySelectorAll('.home-img img');
let current_chess_image = 0;
const interval = 3000;

function showNextImage() {
  images[current_chess_image].classList.remove('active');
  current_chess_image = (current_chess_image + 1) % images.length;
  images[current_chess_image].classList.add('active');
}

setInterval(showNextImage, interval);
