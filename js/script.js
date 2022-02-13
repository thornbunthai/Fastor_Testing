const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const bar = document.getElementById('bar');

nav.addEventListener('click', ()=>{
    menu.classList.toggle('show')
});
bar.addEventListener('click', ()=>{
    menu.classList.toggle('show')
})


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: false,
    nav: true,
    navText: ["<span class='fa fa-angle-left go-icon left'  style=''></span>", "<span class='go-icon fa fa-angle-right' style=''></span>"],
    dots: false,
    autoplay: false,
    loop: true,
    interval: 100,

    responsive: {
        0: {
            items: 2
        },
        550: {
            items: 2
        },
        600: {
            items: 2
        },
        700: {
            items: 3
        },
        770: {
            items: 4
        },
        1000: {
            items: 4,

        }
    }
})

//tooltip function
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});