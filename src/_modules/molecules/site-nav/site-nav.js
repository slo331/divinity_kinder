'use strict';

import $ from 'jquery';
import enquire from 'enquire.js';

export default class SiteNav {
  constructor(config) {
    this.config = config;
    let $navLinks = $('.nav-links');
    
    // Mobile menu
    let $navWrap = $('.nav-wrap');
    let $navMobile = $('.nav-mobile', $navWrap);
    let $overlay = $('.menu-overlay');
    let $navMenu = $('.nav-menu', $navMobile);
    let $mobileMenu = $('.hamburger-menu', $navMenu);
    
    enquire.register(`screen and (max-width: ${this.config.breakpoints.desktop - 1}px)`, {
			match: () => {
        $mobileMenu.on('click', () => {
          
          if(!$navLinks.hasClass('expanded')) {
            let $showMenu = () => {
              $mobileMenu.addClass('active');
              $navLinks.addClass('expanded');
              $overlay.fadeIn('slow');
              $navLinks.slideDown('slow');
            }
            
            $.when($showMenu())
            .done(() => {
              setTimeout(() => {
                $mobileMenu.addClass('rotate');
							  $navWrap.addClass('expanded');
              }, 500);
            })
            .done(() => {
              $('body').addClass('fixed');
            });
          } else {
            let $closeMenu = () => {
              $('body').removeClass('fixed');
              $mobileMenu.removeClass('rotate');
            }

            $.when($closeMenu())
            .done(() => {
              $navWrap.removeClass('expanded');
            })
            .done(() => {
              setTimeout(() => {
                $mobileMenu.removeClass('active');
                $navLinks.removeClass('expanded');
                $navLinks.slideUp('slow');
              }, 500);
            })
            .done(() => {
              $overlay.removeClass('active').fadeOut('slow');
            });
          }
        });
			}
		});
  }
}
