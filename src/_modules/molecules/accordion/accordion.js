'use strict';

import $ from 'jquery';

export default class Accordion {
  constructor() {
    let $accordion = $('.accordion');
    let $accItem = $('.accordion-item', $accordion)
    let $accLabel = $('.label-title', $accItem);

    $accLabel.map((i,el) => {
      let $el = $(el);
      
      $el.on('click', () => {
        let $parent = $el.parent('.accordion-parent');
        let $accContent = $el.siblings('.content-wrap');
        let $icon = $el.find('.icon');

        // $('.content-wrap', '.accordion').slideUp('slow');
        // $('.icon', '.accordion').removeClass('expand');
        // $accItem.removeClass('is-open');

        let $slideUp = () => {
          $accContent.slideUp('slow');
          $icon.removeClass('expand');
        }

        let $slideDown = () => {
          $icon.addClass('expand');
          $accContent.slideDown('slow');
        }
      
        if ($parent.hasClass('is-open')) {
          $.when($slideUp())
          .done(() => {
            $parent.removeClass('is-open');
          });
        } else {
          $.when($slideDown())
          .done(() => {
            $parent.addClass('is-open');
          });
        }
      });
    });
  }
}
