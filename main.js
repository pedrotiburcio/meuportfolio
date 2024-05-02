$(document).ready(function (){
        const menuLinks = $('.header__menu__item__link');
    
        setTimeout(function(){
            // $('#social-links').css("opacity", "1")
            $('#social-links').css("animation", "bounce")
            $('#social-links').css("animationDuration", "2.2s")
        }, 2500)

        // $(window).on('scroll', function() {
        //     hideAllLinks()
        //     if($(window).scrollTop() <= 1199) {
        //         $('.home-link').addClass('header__menu__item__link--is-active')
        //     }
        //     else if($(window).scrollTop() <= 2398) {
        //         $('.about-link').addClass('header__menu__item__link--is-active')
        //     }
        //     else if($(window).scrollTop() <= 3597) {
        //         console.log('a')
        //         $('.projects-link').addClass('header__menu__item__link--is-active')
        //     }
        //     else {
        //         $('.contact-link').addClass('header__menu__item__link--is-active')
        //     }
        // })
    
        // for(let i = 0; i < menuLinks.length; i++) {
        //     $(menuLinks[i]).on("click", function() {
        //         hideAllLinks()
        //         $(menuLinks[i]).addClass('header__menu__item__link--is-active')
        //     })
        // }

});

// function hideAllLinks(){
//     const menuLinks = $('.header__menu__item__link');
//     for(let i = 0; i < menuLinks.length; i++) {
//         $(menuLinks[i]).removeClass('header__menu__item__link--is-active')
//     }
// }