const mySwiper = new Swiper ('.swiper-container.kpop_list', {
  slidesPerView: 7,
  spaceBetween: 10,
  loop: true,
  initialSlide: 3,
  watchOverflow: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const mySwiper2 = new Swiper ('.swiper-container.hot_prodwrap', {
  slidesPerView: 4,
  spaceBetween: 20,
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

$('#slide-counter').prepend('<strong class="current-index"></strong><span class="slash">/<span>');
const slider = $('.bxslider').bxSlider({
      speed: 200,
      auto: true,
      minSliders: 1,
      maxSliders: 1,
      pause: 6000,
      pager: false,
      autoHover: true,
      autoControlsCombine: true,
      autoControls: false,
      onSliderLoad: function (currentIndex){
        $('#slide-counter .current-index').text(currentIndex + 1);
      },
      onSlideBefore: function ($slideElement, oldIndex, newIndex){
        $('#slide-counter .current-index').text(newIndex + 1);
      }
});

const slideCount = slider.getSlideCount();
$('#slide-counter').append('<strong class="total-index"></strong>');
$('.total-index').text(slideCount);

$('.global_cat_m').on('mouseover', function() {
  const a = $(this).parent('li').data('cat');
  $('.sub_cate').hide();
  $(this).next('.sub_cate').show();
});

$('.cat_list').on('mouseleave', function() {
  $('.sub_cate').hide();
});

$('button.search').on('click', function() {
  alert('Button Clicked');
});

$('.cat_area_menu li').on('mouseover', function() {
  $('.cat_area_menu li').removeClass('active');
  $(this).addClass('active');
});

