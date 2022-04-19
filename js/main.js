$('.header__burger').click(function(event) {
    $('.header__burger,#top-menu1').toggleClass('active');
    $('body').toggleClass('lock');
})


$(function(){
    $('.slider').slick({
        pauseOnHover: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed:4000,
        responsive: [{
           
              breakpoint: 796,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
        }]
           
    });
});


$(function(){
    $('.slider-gr').slick({
        pauseOnHover: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed:3000,
        responsive: [{
           
              breakpoint: 796,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
        }]
           
    });
    
});



  


// const wrapper = document.querySelector(".input-wrapper"),
//       textInput = document.querySelector("input[type='text']");
        
// textInput.addEventListener("keyup", event => {
//   wrapper.setAttribute("data-text", event.target.value);
// });