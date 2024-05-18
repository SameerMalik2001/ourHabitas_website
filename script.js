function handleLeftRightSlider() {
  $(".burger").on("click", () => {
    if (!$(".leftSlider").hasClass("activeLeftSlider")) {
      $(".leftSlider").addClass("activeLeftSlider");
      $(".leftSlider").removeClass("unActiveLeftSlider");
    }
  });

  $(".closeLeftSlider").on("click", () => {
    $(".leftSlider").addClass("unActiveLeftSlider");
    $(".leftSlider").removeClass("activeLeftSlider");
  });

  $(".reload").on("click", () => {
    window.location.reload();
  });

  $(".book").on("click", () => {
    if (!$(".rightSlider").hasClass("activeRightSlider")) {
      $(".rightSlider").addClass("activeRightSlider");
      $(".rightSlider").removeClass("unActiveRightSlider");
    }
  });

  $(".closeRightSlider").on("click", () => {
    $(".rightSlider").addClass("unActiveRightSlider");
    $(".rightSlider").removeClass("activeRightSlider");
  });
}
handleLeftRightSlider()

// nav scroll handle
$(window).on('scroll', () => {
  if(document.documentElement.scrollTop  > 400) {
    $('nav').addClass('changeColor')
  } 
  if(document.documentElement.scrollTop  < 400){
    $('nav').removeClass('changeColor')
  }
})

// pagedown btn handle 
$('.downBtn').on('click', function() {
    document.getElementById('secondPage').scrollIntoView({behavior: 'smooth'})
});


// swiper slider handle
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  pagination: false,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  
});