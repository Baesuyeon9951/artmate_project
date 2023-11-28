
console.clear();

$(function() {  
  $('#footer').load('footer.html');
});

// 팝업창 구현
function Popup__init(){
	$('.popup .popup-btn-box > a').click(function(){
	$('.popup').removeClass('active');
	})
}

Popup__init();

// 탑바 구현
function TopBar__init() {
  $(window).scroll(function () {
    let $this = $(this);
    let scrollTop = $this.scrollTop();

    if (scrollTop > 80) {
      $('.pc-top-bar').addClass('active');
      $('.menu-box__menu-1 > ul > li').addClass('active');
    }
    else {
      $('.pc-top-bar').removeClass('active');
      $('.menu-box__menu-1 > ul > li').removeClass('active');
    }
  });
}

TopBar__init();


// 모바일 메뉴 구현
function mobileMenu__init() {
  $('.mobile-top-bar__menu-btn').click(function () {
    console.log("클릭");
    $('.mobile-menu').addClass('active');
  });
    
  $('.mobile-menu').click(function () {
    $('.mobile-menu').removeClass('active');
  });

  $('.mobile-menu-wrap').click(function (e) {
    e.stopPropagation();    
  });

}

mobileMenu__init();



// 메인배너 스와이퍼 구현
let ww = window.innerWidth;
let swiper;

function mainBannerSlideBox__init(slidesCount) {

  if (typeof (swiper) == 'object') swiper.destroy();

  swiper = new Swiper('.main-banner__slide-box .swiper', {
    loop: true,
    slidesPerView: slidesCount,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    centeredSlides: true,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
    }
  })
}

mainBannerSlideBox__init(1);

function mainBannerResponsive() {
  if (ww < 1200 && ww >= 700) {
    mainBannerSlideBox__init(3);
    swiper.pagination.destroy();
  }
  else {
    mainBannerSlideBox__init(1);
  }
}

window.addEventListener('resize', function () {
  ww = window.innerWidth;
  mainBannerResponsive();
});

// PC popular-exhibition 구현
function PopularExhibitionSlideBox() {
  const popularExhibitionSlideBox = new Swiper('.popular-exhibition__slide-box .swiper', {
    loop: 'ture',
    navigation: {
      nextEl: ".popular-exhibition__btn-group .popular-exhibition__btn-next",
      prevEl: ".popular-exhibition__btn-group .popular-exhibition__btn-prev",
    },

    breakpoints: {

      1250: {
        slidesPerView: 5,
        spaceBetween: 15
      },
      950: {
        slidesPerView: 4.3,
        spaceBetween: 15
      },
      650: {
        slidesPerView: 3.3,
        spaceBetween: 10
      },
      0: {
        slidesPerView: 2.3,
        spaceBetween: 10
      },

    }

  })
}

PopularExhibitionSlideBox();

// mobile-popular-exhibition 구현
function MobilePopularExhibitionSlideBox() {
  const mobilePopularExhibitionSlideBox = new Swiper('.mobile-popular-exhibition__slide-box .swiper', {
    loop: 'ture',
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {   //페이징 사용자 설정
      el: ".swiper-pagination",   //페이징 태그 클래스 설정 
      type: 'progressbar'
    }
  })
}

MobilePopularExhibitionSlideBox();

// pc-search-exhibition 구현
function SearchExhibitonContent() {
  $('.search-exhibition__content > ul > li:first-child').addClass('active');

  $('.search-exhibition__content > ul > li').mouseenter(function () {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
  });
  $('.search-exhibition__content > ul > li').mouseleave(function () {
    $(this).removeClass('active');
    $('.search-exhibition__content > ul > li:first-child').addClass('active');
  });

}
SearchExhibitonContent();

// mobile-november-exhibition 구현
function NovemberExhibitionTabBox1__init() {

  let $this = $(this);

  $('.mobile-november-exhibition__tab-box-1 >.tab-box-1__head > ul > li').click(function () {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');

    // let NovemberExhibitionTabBox1 = $this.closest('.mobile-november-exhibition__tab-box-1');
    // let NovemberExhibitionTabBox1Body = $this.find('.mobile-november-exhibition__tab-box-1 >.tab-box-1__body');

    $(this).parent().parent().parent().find('.tab-box-1__body > ul > li').removeClass('active');
    $(this).parent().parent().parent().find('.tab-box-1__body > ul > li').eq($(this).index()).addClass('active');

  })
}

NovemberExhibitionTabBox1__init();

// 11월 회화 전시회 스와이퍼 구현시작
function PaintingExhibithionSlideBox() {
  const paintingExhibithionSlideBox = new Swiper('.mobile-painting-exhibition__slide-box .swiper', {
    loop: 'ture',
    slidesPerView: 2,
    spaceBetween: 15,
    breakpoints: {

      650: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    }
  })
}
PaintingExhibithionSlideBox();

// 11월 회화 전시회 스와이퍼 구현 끝

// 11월 사진 전시회 스와이퍼 구현시작
function PhotoExhibithionSlideBox() {
  const photoExhibithionSlideBox = new Swiper('.mobile-photo-exhibition__slide-box .swiper', {
    loop: 'ture',
    slidesPerView: 2,
    spaceBetween: 15,
    breakpoints: {

      650: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    }

  })
}
PhotoExhibithionSlideBox();

// 11월 사진 전시회 스와이퍼 구현 끝

// 11월 미디어 전시회 스와이퍼 구현시작
function MidiaExhibithionSlideBox() {
  const midiaExhibithionSlideBox = new Swiper('.mobile-midia-exhibition__slide-box .swiper', {
    loop: 'ture',
    slidesPerView: 2,
    spaceBetween: 15,
    breakpoints: {

      650: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    }
  })
}
MidiaExhibithionSlideBox();

// 11월 미디어 전시회 스와이퍼 구현 끝

// pc-artist 구현 시작
function ArtistSlideBox() {
  const artistSlideBox = new Swiper(".artist__slide-box .swiper", {
    loop: true,

    navigation: {
      nextEl: ".artist__btn-group .artist__btn-next",
      prevEl: ".artist__btn-group .artist__btn-prev",
    },

    breakpoints: {

      1300: {
        slidesPerView: 6,
        spaceBetween: 20
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 15
      },
      850: {
        slidesPerView: 3,
        spaceBetween: 15
      },
    }
  });
}

ArtistSlideBox();

// mobile-artist 구현
function MobileArtistSlideBox() {
  const mobileArtistSlideBox = new Swiper(".mobile-artist__slide-box .swiper", {
    loop: true,

    breakpoints: {

      700: {
        slidesPerView: 5.5,
        spaceBetween: 10
      },
      550: {
        slidesPerView: 4.5,
        spaceBetween: 10
      },
      400: {
        slidesPerView: 3.5,
        spaceBetween: 10
      },
      300: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  });
}

MobileArtistSlideBox();


/* 발견되면 활성화시키는 라이브러리 시작 */
function ActiveOnVisible__init() {
  $('.active-on-visible').each(function (index, node) {
    let $node = $(node);

    let onFuncName = $node.attr('data-active-on-visible-on-func-name');
    let offFuncName = $node.attr('data-active-on-visible-off-func-name');

    $node.data('data-active-on-visible-on-func-name', onFuncName);
    $node.data('data-active-on-visible-off-func-name', offFuncName);
  });

  $(window).resize(_.debounce(ActiveOnVisible__initOffset, 500));
  ActiveOnVisible__initOffset();

  $(window).scroll(_.debounce(ActiveOnVisible__checkAndActive, 50));
  ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__initOffset() {
  var windowHeight = $(window).height();

  $('.active-on-visible:not(.actived)').each(function (index, node) {
    let $node = $(node);

    let offsetTop = $node.offset().top;

    let matrix = $node.css('transform').replace(/[^0-9\-.,]/g, '').split(',')
    let translateX = matrix[12] || matrix[4];
    let translateY = matrix[13] || matrix[5];

    if (translateY) {
      offsetTop -= translateY;
    }

    $node.attr('data-active-on-visible-offsetTop', offsetTop);
    $node.data('data-active-on-visible-offsetTop', offsetTop);

    if (!$node.attr('data-active-on-visible-diff-y')) {
      $node.attr('data-active-on-visible-diff-y', '0');
    }

    if (!$node.attr('data-active-on-visible-delay')) {
      $node.attr('data-active-on-visible-delay', '0');
    }

    let diffY = $node.attr('data-active-on-visible-diff-y');
    let delay = $node.attr('data-active-on-visible-delay');

    if (diffY.substr(-2, 2) == 'vh') {
      diffY = parseInt(diffY);

      diffY = windowHeight * (diffY / 100);
    }
    else if (diffY.substr(-1, 1) == '%') {
      diffY = parseInt(diffY);

      diffY = $node.height() * (diffY / 100);
    }
    else {
      diffY = parseInt(diffY);
    }

    $node.attr('data-active-on-visible-diff-y-real', diffY);
    $node.data('data-active-on-visible-diff-y', diffY);
    $node.data('data-active-on-visible-delay', delay);
  });

  ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__checkAndActive() {
  $('.active-on-visible:not(.actived)').each(function (index, node) {
    let $node = $(node);

    let offsetTop = $node.data('data-active-on-visible-offsetTop') * 1;
    let diffY = parseInt($node.data('data-active-on-visible-diff-y'));
    let delay = parseInt($node.data('data-active-on-visible-delay'));

    let onFuncName = $node.data('data-active-on-visible-on-func-name');
    let offFuncName = $node.data('data-active-on-visible-off-func-name');

    let scrollTop = $(window).scrollTop();
    let windowHeight = $(window).height();
    let nodeHeight = $node.height();

    if (scrollTop + windowHeight + diffY > offsetTop) {
      setTimeout(function () {
        if ($node.hasClass('active') == false) {
          $node.addClass('active');

          if ($node.hasClass('can-active-once')) {
            $node.addClass('actived');
          }

          if (window[onFuncName]) {
            window[onFuncName]($node);
          }
        }
      }, delay);
    }
    else {
      if ($node.hasClass('active')) {
        $node.removeClass('active');

        if (window[offFuncName]) {
          window[offFuncName]($node);
        }
      }
    }
  });
}

$(function () {
  ActiveOnVisible__init();
})
/* 발견되면 활성화시키는 라이브러리 끝 */