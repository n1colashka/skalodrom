$(function(){

  $('.faq__item-title').on('click', function () {
    $('.faq__item').removeClass('faq__item--active');
    $(this).parent().addClass('faq__item--active');
  });


  $('.slider__inner').slick({
    infinite: false,
    arrows: false,
    dots: true
  });

  $('.slider__inner2').slick({
    centerMode: true,
    slidesToShow: 3,
    arrows: true,
    variableWidth: true,
      prevArrow: '<img class="arrow_left" src="img/arrow_left.svg" alt="">',
      nextArrow: '<img class="arrow_right" src="img/arrow_left.svg" alt="">',
    dots: true
  });

  $('.slider__inner3').slick({
    
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
      prevArrow: '<img class="arrow_left" src="img/arrow_left.svg" alt="">',
      nextArrow: '<img class="arrow_right" src="img/arrow_left.svg" alt="">',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
  

  $('.slider__inner4').slick({
    variableWidth: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
      prevArrow: '<img class="arrow_left" src="img/arrow_left.svg" alt="">',
      nextArrow: '<img class="arrow_right" src="img/arrow_left.svg" alt="">',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });

  $('.about__slider__inner').slick({
    infinite: false,
    arrows: false,
    dots: true
  });

  $('.slider__inner__photo-1').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });

  $('.slider__inner__photo-2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
      prevArrow: '<img class="arrow_left" src="img/arrow_left.svg" alt="">',
      nextArrow: '<img class="arrow_right" src="img/arrow_left.svg" alt="">',
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });

  $('.slider__inner__video-1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
     responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.slider__inner__video-2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
      prevArrow: '<img class="arrow_left" src="img/arrow_left.svg" alt="">',
      nextArrow: '<img class="arrow_right" src="img/arrow_left.svg" alt="">',
       responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.slider__inner-trainer').slick({
    
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
      prevArrow: '<img class="arrow_left" src="img/arrow_left.svg" alt="">',
      nextArrow: '<img class="arrow_right" src="img/arrow_left.svg" alt="">',
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  });

  $('.message__inner').slick({
    nextArrow: '<div class="arrow_prev"></div>',
    prevArrow: '<div class="arrow_next"></div>',
  });

  $('.nav-toggle').on('click', function () {
    $('.header-inner').toggleClass('active')
    $(this).toggleClass('open')
  });

  $('.nav__link').on('click', function () {
    $('.header-inner').removeClass('active')
    $('.nav-toggle').removeClass('open')
  });




  
  var header = $("#header-inner"),
    introH = $("#header-r").innerHeight();
    scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }


  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var blockId = $(this).data('scroll'),
      blockOffset = $(blockId).offset().top;

    console.log(blockOffset);

      $("html, body").animate({
        scrollTop: blockOffset 
      }, 500);

  });
  if (document.querySelector("#phoneMask")) {
    $("#phoneMask").mask("+38(999) 999-999");
  }

  function initScheduleTabs() {
    var days = document.querySelectorAll(".schedule__day"); 
    var tables = document.querySelectorAll(".schedule__table"); 

    if (days.length > 0) {
      days.forEach(function(day) {
        day.addEventListener('click', function() {
          days.forEach(function(item){
            item.classList.remove('active');
          })
          tables.forEach(function(item){
            item.classList.remove('active');
            if (item.dataset.tab === day.dataset.tab) item.classList.add('active');
          })
          day.classList.add('active');
        })
      })
    }
  }

  function initMenu() {
    var temp = false;

    $('.navbar__item').on('click', function() {
      $(this.querySelector('ul')).show(300);
      $(this.querySelector('ul')).addClass('open');
      temp = true;
    })
    $('.navbar__burger').on('click', function() {
      $('html').addClass('overflow-hidden');
      $('.overlay').addClass('open');
      $('.navbar__row').show(300);
    })
    $('.navbar__close').on('click', function() {
      
      if (temp) {
        $('.navbar__item ul').hide(300);
      } else {
        $('html').removeClass('overflow-hidden');
        $('.overlay').removeClass('open');
        $('.navbar__row').hide(300);
      }
      temp = false;
    })
    $('.overlay').on('click', function() {
      $('html').removeClass('overflow-hidden');
      $('.overlay').removeClass('open');
      $('.navbar__row').hide(300);
      $('.navbar__item ul').hide(300);
    })
  }

  initScheduleTabs();
  initMenu();
});

