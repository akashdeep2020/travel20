$(document).on('ready', function() {
      
    // $(".regular").slick({
    //   dots: true,
    //   infinite: true,
    //   slidesToShow: 3,
    //   autoplay: true,
    //   autoplaySpeed: 1000,
    //   slidesToScroll: 1

    // });
    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
        //   {
        //     breakpoint: ,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //       infinite: true,
        //       dots: true
        //     }
        //   }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      })
  });