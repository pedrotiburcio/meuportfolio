$(document).ready(function (){
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

        const date = new Date().getFullYear();
        $('#footer-text').append(date);
});

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