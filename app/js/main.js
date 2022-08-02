$(function () {
    $('.product-benefits__slider-wrapper').slick({

        nextArrow: '<button type="button" class="custom_arrow custom_arrow-next"></button>',
        prevArrow: '<button type="button" class="custom_arrow custom_arrow-prev"></button>',
        dots: true,
    });

    $('a[href^="#"]').click(function () { // #1
        let anchor = $(this).attr('href');  // #2
        $('html, body').animate({           // #3
            scrollTop: $(anchor).offset().top  // #4
        }, 600);                            // #5
    });
})

let burger_btn = document.querySelector('.responsive-menu-toggle');
burger_btn.classList.remove('responsive-menu-toggle');
burger_btn.classList.add('myself-responsive-menu-toggle');
// burger_btn.addEventListener('click', function(el){
//     el.preventDefault();
// });


// const button_search = document.createElement("button");
// button_search.classList.add('navbar-toggle__category');

// let i_search = '<div class="seacrh_menu-wrapper"><svg xmlns="http://www.w3.org/2000/svg" fill="#fff" class="bi bi-three-dots-vertical" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg><span>Категории Поиск</span></div>';
// let i_search_el = document.createElement('i');
// i_search_el.innerHTML = i_search;
// let i_search_res = i_search_el.firstChild;

// button_search.appendChild(i_search_res);

// let burger_button = document.querySelector('.navbar-toggle.collapsed')
// burger_button.before(button_search)


// let mobile_menu_btn = document.querySelector('.navbar-toggle__category')
// let mobile_menu_wrapper = document.querySelector('section.blog-section .container .row .col-md-4.col-xs-12')



let sticky_header_logo = document.querySelector('#Top_bar.is-sticky > .container > .column.one > .top_bar_left.clearfix > .logo');



sticky_header_logo.insertAdjacentHTML("beforeend", `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-square-fill" viewBox="0 0 16 16">
<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"/>
</svg>`);



let self_burger_btn = document.querySelector('.burger_stichy.active');
let self_burger_wrapper = document.querySelector('#Header>.is-sticky>.container>.column.one>.top_bar_left.clearfix>.menu_wrapper');
self_burger_btn.addEventListener('click', function(el){
    self_burger_wrapper.classList.toggle('active')
    console.log(self_burger_wrapper);
    console.log('Клик')
});

self_burger_btn.classList.add()
self_burger_btn.classList.remove()