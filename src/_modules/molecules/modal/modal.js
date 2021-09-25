'use strict';

import $ from 'jquery';

export default class Modal {
  constructor() {
    let $modal = $('.modal');
    let $modalClose = $('.btn--modal_close', $modal);
		let $modalHead = $('.modal-head', $modal);
    let $modalBody = $('.modal-body', $modal);
    let $modalFooter = $('.modal-footer', $modal);

    $modalClose.on('click', e => {
			e.preventDefault();
			$('body').toggleClass('fixed');
			$modal.toggleClass('modal--visible');

			setTimeout(() => {
				$modal.removeAttr('class');
				$modal.addClass('modal');

				$modalHead.empty();
				$modalBody.empty();
				$modalFooter.empty();
			}, 300);
    });
  }
}