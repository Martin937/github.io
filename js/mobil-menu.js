window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    // -------------------------------------------------
    // mobil-menu
    // -------------------------------------------------

    let button = document.querySelector('.button_menu'),
        menu = document.querySelector('.mobil-menu'),
        menuItem = document.querySelectorAll('.mobil-menu_item');

        button.addEventListener('click', () => {
            // button.classList.toggle('button_menu_active');
            button.innerHTML =
            (button.innerHTML === 'меню') ? button.innerHTML = 'закрыть' : button.innerHTML = 'меню';
            menu.classList.toggle('mobil-menu_active');
        });

        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                (button.innerHTML === 'меню') ? button.innerHTML = 'закрыть' : button.innerHTML = 'меню';
                menu.classList.toggle('mobil-menu_active');
            })
        })




});
