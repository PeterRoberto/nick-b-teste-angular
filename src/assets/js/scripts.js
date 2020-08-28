jQuery(document).ready(function($) {

    var visible = false;
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      if (!visible && scrollTop > 100) {
        $(".scrollToTop").fadeIn();
        visible = true;
      } else if (visible && scrollTop <= 100) {
        $(".scrollToTop").fadeOut();
        visible = false;
      }
    });
  
    $(".scrollToTop").click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  
});
  
 



(function() {  
  'use strict';    

  var boxHeader = document.querySelector('.box-menu');
  window.addEventListener('scroll', setupNav);

  function setupNav() {
    var posYheight = getYscroll(); //  Recebe a função que faz a leitura do scroll.
    if(posYheight > boxHeader && !hasClassFx()) {
      document.body.classList.add('fx');
    } 
    if(posYheight <= boxHeader && hasClassFx()) {  
      document.body.classList.remove('fx');
    } 
  }

  function getYscroll () {
    return window.pageYOffset;
  }

  function hasClassFx () {
    return !!document.querySelector('.fx'); 
  } 
})();
