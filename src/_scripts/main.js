// Main javascript entry point
'use strict';

import $ from 'jquery';

// Import Modules
import SiteNav from '../_modules/molecules/site-nav/site-nav';
import ScrollTop from '../_modules/molecules/scroll-top/scroll-top';
import Accordion from '../_modules/molecules/accordion/accordion';
import Modal from '../_modules/molecules/modal/modal';
import CarouselBanner from '../_modules/organisms/carousel-banner/carousel-banner';
import Testimonials from '../_modules/organisms/testimonials/testimonials';

$(() => {
  let config = {
		breakpoints: {
			tablet: 768,
			desktop: 1024,
			lgDesktop: 1280
		}
  };

  if($('.nav-wrap').length) {
    new SiteNav(config);
  }

  if($('.carousel-home').length) {
    new CarouselBanner();
  }

  if($('.testimonials').length) {
    new Testimonials();
  }

  if($('.scroll-top').length) {
    new ScrollTop();
  }

  if($('.accordion').length) {
    new Accordion();
  }

  if($('.modal').length) {
    new Modal();
  }
});

