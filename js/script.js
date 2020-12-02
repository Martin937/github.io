window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    // -------------------------------------------------
    // Modal
    // -------------------------------------------------

    let consFooter = document.querySelector('.button_footer'),
        consHeader = document.querySelector('.header__cons'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    consFooter.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    consHeader.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        consFooter.classList.remove('more-splash');
        consHeader.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
    // -------------------------------------------------
    //
    // -------------------------------------------------


});
