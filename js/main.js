$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        autoplay: true,
        nav: true,
        dots: false,
        responsive: {
            320: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            }
        }
    });
});

document.querySelector(".mobile-menu").addEventListener("click",() =>{
    document.querySelector(".start").classList.toggle("show")
})

