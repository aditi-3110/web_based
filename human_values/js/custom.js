$( document ).ready(function() {

  var swiper = new Swiper('.individualSlider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    nested: true,
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 10,
    longSwipes: true,
    longSwipesMs: 2500,
    preventClicks: true,
    preventInteractionOnTransition: false,
    shortSwipes: false,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 118,
      modifier: 2,
      slideShadows: true,
    },
  });
    var swiper2 = new Swiper('.communitySlider', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      nested: true,
      loop: true,
      slidesPerView: 1.2,
      spaceBetween: 10,
      longSwipes: true,
      longSwipesMs: 2500,
      preventClicks: true,
      preventInteractionOnTransition: false,
      shortSwipes: false,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 118,
        modifier: 2,
        slideShadows: true,
      },
    });
    var swiper3 = new Swiper('.planetSlider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    nested: true,
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 10,
    longSwipes: true,
    longSwipesMs: 2500,
    preventClicks: true,
    preventInteractionOnTransition: false,
    shortSwipes: false,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 118,
      modifier: 2,
      slideShadows: true,
    },
  });

$('.scrollable-div').fadeOut();
if (window.matchMedia('(min-width: 770px)').matches)
{
  $('.scrollable-div').fadeIn();
  $('.landing-page').fadeOut();
  $('.landing-page').css('overflow-y', 'hidden');
  $('.landing-page').css('height', '100vh');
 $(window).on("scroll", function(){
     var winheight = $(window).height()
     var docheight = $(document).height()
     var scrollTop = $(window).scrollTop()
     var trackLength = docheight - winheight
     var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 NaN if tracklength == 0)
     console.log(pctScrolled + '% scrolled')
     var scroll = $(window).scrollTop();
     scaleAmt = 1.0 + (scroll / 160);
   $('.imageLoderEffect').css('transform', 'scale(' + scaleAmt + ')');

     if(pctScrolled > 50){
       $('.imageLoderEffect').fadeOut();
       $('.landing-page').fadeIn();
       $('.scrollable-div').fadeOut();
       $('.landing-page').css('overflow-y', 'hidden');
       $('.landing-page').css('height', '100vh');
   }

     if(pctScrolled > 35){
       $(".imageLoaderImg h3").addClass('active2');
   }
   if(pctScrolled > 15){
       $(".imageLoaderImg h3").addClass('active1');
   }

   if($('.imageLoderEffect').css("display") == "none"){
     $('.landing-page').css('overflow-y', 'visible');
     $('.landing-page').css('height', '100vh');
 }
 })
}

    var menu = "close";
    $(".menu-toggle").on('click', function(){
        if (menu === "close") {
              $(".mobile-nav").css("transform", "translate(0, 0)");
              menu = "open";
        } else {
              $(".mobile-nav").css("transform", "translate(-100%, 0)");
              menu = "close";
        }
    })
});


let individualSliderCard = document.querySelectorAll(".individual-slider-card") ;
individualSliderCard.forEach((e)=>{
    e.addEventListener("mouseover",()=>{
        e.classList.add("individual-slider-card-active");
    })
    e.addEventListener("mouseout",()=>{
        e.classList.remove("individual-slider-card-active");
    })
})


let communitySliderCard = document.querySelectorAll(".community-slider-card") ;
communitySliderCard.forEach((e)=>{
    e.addEventListener("mouseover",()=>{
        e.classList.add("community-slider-card-active");
    })
    e.addEventListener("mouseout",()=>{
        e.classList.remove("community-slider-card-active");
    })
})


let planetSliderCard = document.querySelectorAll(".planet-slider-card") ;
planetSliderCard.forEach((e)=>{
    e.addEventListener("mouseover",()=>{
        e.classList.add("planet-slider-card-active");
    })
    e.addEventListener("mouseout",()=>{
        e.classList.remove("planet-slider-card-active");
    })
})

let lastCardIndividual = document.querySelector(".individual-slider-card-5");
let secondLastCardIndividual = document.querySelector(".individual-slider-card-4");

lastCardIndividual.addEventListener("mouseover",()=>{
    secondLastCardIndividual.classList.add("second-last-card-active")
})

lastCardIndividual.addEventListener("mouseout",()=>{
    secondLastCardIndividual.classList.remove("second-last-card-active")
})

let lastCardCommunity = document.querySelector(".community-slider-card-5");
let secondLastCardCommunity = document.querySelector(".community-slider-card-4");

lastCardCommunity.addEventListener("mouseover",()=>{
    secondLastCardCommunity.classList.add("second-last-card-active")
})

lastCardCommunity.addEventListener("mouseout",()=>{
    secondLastCardCommunity.classList.remove("second-last-card-active")
})

let lastCardPlanet = document.querySelector(".planet-slider-card-5");
let secondLastCardPlanet = document.querySelector(".planet-slider-card-4");

lastCardPlanet.addEventListener("mouseover",()=>{
    secondLastCardPlanet.classList.add("second-last-card-active")
})

lastCardPlanet.addEventListener("mouseout",()=>{
    secondLastCardPlanet.classList.remove("second-last-card-active")
})


$(function(){

   var $clientcarousel = $('#clients-list');
   var clients = $clientcarousel.children().length;
   var clientwidth = (clients * 220);
   $clientcarousel.css('width',clientwidth);
   var rotating = true;
   var clientspeed = 0;
   var seeclients = setInterval(rotateClients, clientspeed);

   $(document).on({
     mouseenter: function(){
       rotating = false;
     },
     mouseleave: function(){
       rotating = true;
     }
   }, '#clients');

   function rotateClients() {
     if(rotating != false) {
       var $first = $('#clients-list li:first');
        $first.animate({ 'margin-left': '-220px' }, 2000, "linear", function() {
         $first.remove().css({ 'margin-left': '0px' });
         $('#clients-list li:last').after($first);
       });
     }
   }
 });

$(function(){
  var $clientcarousel = $('#clients-list-one');
  var clients = $clientcarousel.children().length;
  var clientwidth = (clients * 220);
  $clientcarousel.css('width',clientwidth);

  var rotating = true;
  var clientspeed = 0;
  var seeclients = setInterval(rotateClients, clientspeed);

  $(document).on({
    mouseenter: function(){
      rotating = false;
    },
    mouseleave: function(){
      rotating = true;
    }
  }, '#clients-one');

  function rotateClients() {
    if(rotating != false) {
      var $first = $('#clients-list-one li:first');
       $first.animate({ 'margin-left': '-220px' }, 2000, "linear", function() {
        $first.remove().css({ 'margin-left': '0px' });
        $('#clients-list-one li:last').after($first);
      });
    }
  }
});

setTimeout(function(){
  document.getElementById("ink-drop").play();
}, 3000);

setTimeout(function(){
  document.getElementById("fade-in").show()
}, 8000);
