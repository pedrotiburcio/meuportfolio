$(document).ready(function (){
        // const menuLinks = $('.header__menu__item__link');

        const hamburguerMenu = $('.menu-hamburguer');
        const menuItems = $('.header__menu');

        hamburguerMenu.on("click", function(){
            menuItems.slideToggle(500);
        })

        $(window).on("resize", function() {
            if($(window).width() > 767) {
                menuItems.css("display", "flex");
            }
            else {
                menuItems.css("display", "none");
            }
        })


        setTimeout(function(){
            $('#social-links').css("animation", "bounce")
            $('#social-links').css("animationDuration", "2.2s")
        }, 1500)

        // $(window).on('resize', function(){
        //     if($(window).width() < 1234) {
        //         changeAnimations();
        //     }
        // })

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



// function hideAnimations()
function changeAnimations() {
    const projectsInfosAnimation = $('.projects__project__site')
    const projectsImagesAnimation = $('.projects__project__infos')
    const aboutPictureAnimation = $('.about__animation')
    const aboutTextAnimation = $('.about__infos__text')

    for(let i = 0; i < projectsInfosAnimation.length; i++) {
        $(projectsInfosAnimation[i]).attr('data-aos', 'fade-down')
        $(projectsImagesAnimation[i]).attr('data-aos', 'fade-up')
    }

    $(aboutPictureAnimation).attr('data-aos', 'fade-down')
    $(aboutTextAnimation).attr('data-aos', 'fade-up')
}