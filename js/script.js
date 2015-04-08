$(document).ready(function () {

$('.with-drop').hover(function(){
        $(".main-product-container").slideDown(450);
        $(".main-product-container").css("visibility","visible");
        $(".main-product-container").css("display","block")
       
      },
      function(){
        $(".main-product-container").css("display","none");
        $(".main-product-container").css("visibility","hidden");
      });
});