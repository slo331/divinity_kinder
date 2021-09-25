'use strict';

import $ from 'jquery';

export default class Accordion {
  constructor() {
    let $accordion = $('.accordion');
    let $accItem = $('.accordion-item', $accordion)
    let $label = $('.label-title', $accItem);
    let $accContent = $('.content-wrap', $accItem);
    let $iconMain = $('.icon', $label);

    $accItem.map((i,el) => {
      let $el = $(el);
      let $accLabel = $('.label-title', $el);
      let $content = $('.content-wrap', $el);
      let $icon = $el.find('.icon');

      let $slideUp = () => {
        $content.slideUp('slow');
        $icon.removeClass('expand');
      }

      let $slideDown = () => {
        $icon.addClass('expand');
        $el.addClass('is-open');
      }
      
      if(i == 0) {
        $.when($slideDown())
        .done(() => {
          setTimeout(() => {
            $content.slideDown('slow');
          }, 250);
        });
      }

      $accLabel.on('click', () => {
        if ($el.hasClass('is-open')) {
          $.when($slideUp())
          .done(() => {
            setTimeout(() => {
              $el.removeClass('is-open');
            }, 250);
          });
        } else {
          $iconMain.removeClass('expand');
          $accItem.removeClass('is-open');
          $accContent.slideUp('slow');

          $.when($slideDown())
          .done(() => {
            setTimeout(() => {
              $content.slideDown('slow');
            }, 250);
          });
        }
      });
    });
  }
}
