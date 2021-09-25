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
    let $readmore = $('.btn-readmore', $carousel);

    this.$modal = $('.modal');

    $carousel.on('init', (event, slick) => {
      $readmore.map((i,el) => {
        let $el = $(el);
        let $qText = $el.siblings('.quote-wrap').find('.quote-text');
        let $text = $qText.data('testimonial');

        $el.on('click', e => {
          e.preventDefault();
          this._showModal($text);
          // console.log($text);
        })
      })
    });

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

  _showModal($text) {
		let $init = () => {
      $('body').toggleClass('fixed');
      this.$modal.toggleClass('modal--visible modal-testimonials');
      this.$modal.find('.modal-head').empty();
      this.$modal.find('.modal-body').empty();
    };

    $.when($init())
    .done(() => {
      let $msg = `<div class="quote-wrap"><div class="quote-icon open"><i class="icon icon-quote-open"></i></div><div class="quote-text">${$text}</div><div class="quote-icon close"><i class="icon icon-quote-close"></i></div></div>`;
      this.$modal.find('.modal-body').html($msg);
    });
	}
}
