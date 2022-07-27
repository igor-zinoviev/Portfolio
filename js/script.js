$(document).ready(function(){
    window.setTimeout(function(){
    parallax();  
    $("html, body").animate({ scrollTop: $(document).height() }, 2000);
  }, 400)
 }) ;

  function parallax(){
    var scr = $(window).scrollTop();
    var width = $(window).outerWidth();
    var height = $('.content').outerHeight();
    var height_par = $('.parallax').outerHeight();
    var p = scr / height * 100;
    var p_b = scr / height_par * 100;
    var o = 1 - 1 / 100 * p_b;
    
    if (scr >= height) {
      $('.content').css('z-index', 3);
    } else {
      $('.content').css('z-index', 0);
    }

    if (scr >= height) {
      $('.content__links-button').css('z-index', 10000);
    } else {
      $('.content__links-button').css('z-index', 0);
    }

  var z_1 = 1 + (width / 10000 * p_b);
  $('.parallax__fog').css('transform ', 'scale('+z_1+')');
  $('.parallax__fog').css('opacity', o);

  if ($(window).width <= 600){
    if($('.parallax__fog').css('opacity')==0){
      $('.parallax__fog').css('display', 'none');
    } else{
      $('.parallax__fog').css('display', 'block');
    }
}


    var z_2 = 1 + (width / 4500000 * p);
  $('.parallax__mountain_1').css('transform', 'scale(' + z_2 + ')');

    var hr = width / 2000 * p_b;
    var z_3 = 1 + (width * 0.000005 * p_b);
  $('.parallax__mountain_2').css('transform', 'translate3d(' + hr + 'px,0,0) scale(' + z_3 + ')');

    var hr_2 = width / 1500 * p_b;
    var z_4 = 1 + (width * 0.00001 * p_b);
  $('.parallax__mountain_3').css('transform', 'translate3d(' + hr_2 + 'px,0,0) scale(' + z_4 + ')');

  if (scr >= height) {
    $('.content').css('z-index', 3);
  } else {
    $('.content').css('z-index', 0);
  }
  };

  $(window).scroll(function(event) {
    parallax();
  });