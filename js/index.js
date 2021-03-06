$(document).ready(function(){
  setTimeout(()=>{
    $(".owl-one").owlCarousel({
      items:1,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause:true
    });
    $(".owl-two").owlCarousel({
      items:3,
      center: true,
      loop:true,
      autoplay:true,
      autoplayTimeout:1000,
      margin:10,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:true
          },
          800:{
            items:3,
            nav:true
          }
      }
    });
  },1000);
  $(".sidebar-main button").click(()=>{
    $(".sidebar-menu").addClass("nav-collapse");
    $(".aside-bg").show();
  });
  $(".aside-bg").click(()=>{
    $(".sidebar-menu").removeClass("nav-collapse");
    $(".aside-bg").hide();
  });
});