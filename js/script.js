document.addEventListener('DOMContentLoaded', function() {
  // Menu Hamburguer
  const hamburger = document.getElementById('hamburger-menu');
  const navCenter = document.getElementById('nav-center');
  const navRight = document.getElementById('nav-right');
  
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navCenter.classList.toggle('open');
    navRight.classList.toggle('open');
    document.body.classList.toggle('menu-open');
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll('.nav-links a, .login-btn, .cart-btn').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navCenter.classList.remove('open');
      navRight.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });

  // Carrossel
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  const carousel = document.getElementById('carousel');
  const carouselItems = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  function updateCarousel() {
    const carouselWidth = carousel.offsetWidth;
    carousel.style.transform = `translateX(-${carouselWidth * currentIndex}px)`;
  }

  function moveToPrevSlide() {
    currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
    updateCarousel();
  }

  function moveToNextSlide() {
    currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
  }

  prevButton.addEventListener('click', moveToPrevSlide);
  nextButton.addEventListener('click', moveToNextSlide);

  // Redimensionamento
  window.addEventListener('resize', updateCarousel);
  
  // Inicializar
  updateCarousel();
});