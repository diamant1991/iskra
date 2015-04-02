$(document).ready(function () {

$('.with-drop').hover(function(){
        $(".main-product-container").slideDown(300);
        $(this).css("text-decoration","underline");
       
      },
      function(){
        $(".main-product-container").slideUp(300);
        $(this).css("text-decoration","none");
        
      });
});