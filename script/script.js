$(function () { 
    $(document).on('scroll', function () {
        if ($(window).scrollTop() > 1) { 
            $('.wrapper-header').addClass('fixed'); 
        } else { 
            $('.wrapper-header').removeClass('fixed'); 
        } });
    });

    const body = document.querySelector('body');
    document.querySelector('.theme').onclick = function(){
        body.classList.toggle('dark');
        
    }

var scrollToTopBtn = $('.scrollToTopBtn');

$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        scrollToTopBtn.addClass('showBtn');
    } else {
        scrollToTopBtn.removeClass('showBtn');
    }
});

scrollToTopBtn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});
