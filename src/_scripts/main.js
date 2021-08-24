// Main javascript entry point
'use strict';

import $ from 'jquery';

// Import Modules
import SiteNav from '../_modules/molecules/site-nav/site-nav';
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
});

