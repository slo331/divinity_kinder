'use strict';

import $ from 'jquery';
import 'slick-carousel';

export default class Testimonials {
  constructor() {
    let $carouselWrap = $('.testimonials');
    let $carousel = $('.carousel-wrap', $carouselWrap);
    let $autoPlay = $carouselWrap.data('auto');
    let $speed = $carouselWrap.data('speed');
    let $dots = $('.carousel-dots', $carouselWrap);
    let $arrows = $('.carousel-arrows', $carouselWrap);
    let $prev = $('.prev', $arrows);
    let $next = $('.next', $arrows)

    $carousel.slick({
      speed: 800,
      infinite: true,
      autoplay: $autoPlay,
      autoplaySpeed: $speed,
      adaptiveHeight: true,
      fade: false,
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
