'use strict';

import $ from 'jquery';
import 'slick-carousel';

export default class CarouselBanner {
  constructor() {
    let $carouselHome = $('.carousel-home');
    let $carousel = $('.carousel-wrap', $carouselHome);
    let $autoPlay = $carouselHome.data('auto');
    let $speed = $carouselHome.data('speed');
    let $dots = $('.carousel-dots', $carouselHome);
    let $arrows = $('.carousel-arrows', $carouselHome);
    let $prev = $('.prev', $arrows);
    let $next = $('.next', $arrows)

    $carousel.slick({
      speed: 800,
      infinite: true,
      autoplay: $autoPlay,
      autoplaySpeed: $speed,
      fade: true,
      draggable: true,
      pauseOnDotsHover: true,
      dots: true,
      arrows: true,
      mobileFirst: true,
      appendDots: $dots,
      appendArrows: $arrows,
      prevArrow: $prev,
      nextArrow: $next
    });
  }
}
