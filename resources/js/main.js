$(document).ready(function(){
  $('.carousel').slick({
    // setting-name: setting-value;
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    focusOnSelect: false,
    initialSlide: 0,
    pauseOnFocus: false,
    pauseOnHover:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    //adaptiveHeight:true

  });
  var lastScrollTop = 0;
  $(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    if(scrollTop - lastScrollTop > 50) {
        var navHeight = $('.navbar').css('height');
        $('.navbar').animate({top: '-' + navHeight},150);
        lastScrollTop = scrollTop;
    } else if (lastScrollTop - scrollTop > 50) {
        $('.navbar').animate({top: "0px"},150);
        lastScrollTop = scrollTop;
    }
  });

});
