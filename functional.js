var myCarousel = document.querySelector('#carouselExampleSlidesOnly')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000,
    trasnistion: 2000,
    wrap: true,
    touch: true,
    keyboard: true
});