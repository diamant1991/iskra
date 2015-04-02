$(document).ready(function () {

$('.with-drop').hover(function(){
        $(".main-product-container").slideDown(300);
       
      },
      function(){
        $(".main-product-container").slideUp(300);
        
      });
});