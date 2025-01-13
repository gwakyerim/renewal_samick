console.log('[custom.js] loaded!');

const swiper = new Swiper(".interior .swiper", {
    slidesPerView : 'auto',
    slideToClickedSlide : true,
    centeredSlides : true,
    allowTouchMove : true,
    loop: true,
    slidesPerView: 1.7, //화면에 slide 노출 개수
    slidesPerGroup: 1, //swiper 시 개수
    spaceBetween: 80, //간격
    centeredSlides: true, //현재 slide 중앙정렬
    loop: false, // loop 여부
    loopedSlides: 1, //loop 시 duplicate 개수
    initialSlide: 1,
    // nav 화살표 출력 시 추가
    navigation: {
      prevEl: '.swiper-prev',
      nextEl: '.swiper-next',
    },     
});

const mainSlider = new Swiper(".visual .swiper", {
    slidesPerView : 'auto',
    slideToClickedSlide : true,
    centeredSlides : true,
    allowTouchMove : true,
    loop: true,
    slidesPerView: 1, //화면에 slide 노출 개수
    slidesPerGroup: 1, //swiper 시 개수
    centeredSlides: true, //현재 slide 중앙정렬
    loop: true, // loop 여부
    initialSlide: 0,
    autoplay: {
        delay: 6000
    },
    // nav 화살표 출력 시 추가
    navigation: {
      prevEl: '.swiper-prev',
      nextEl: '.swiper-next',
    },     
});
