
  $(document).ready(function(){
    
    $('.rd-slider').slick({
      dots: true,
      arrows: false
    });
    $('.team-slider').slick({
      dots: true,
      arrows: false
    });
    $('.design-slider').slick({
      dots: true,
      arrows: false
    });

    $('.slide').on('click', function() {
      $('.rd-slider').slick('slickRemove', $('.slick-slide').index(this) - 1),
      $('.team-slider').slick('slickRemove', $('.slick-slide').index(this) - 1)
      $('.design-slider').slick('slickRemove', $('.slick-slide').index(this) - 1)


    });
  });
