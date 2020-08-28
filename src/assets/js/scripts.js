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
  