// Наступний рядок це стандартний рядок для підключення JQuery
$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    infinite: true,
    // Налаштування автопрокрутки
    autoplay: false,
    autoplaySpeed: 1000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    // Налаштування Свопа на ДЕСКТОПІ
    draggable: true,
    // Налаштування Свопа на ПЛАНШЕТІ та ТЕЛЕФОНІ
    swipe: true,
    // Величина прокрутки слайда, для того, щоб він спрацював
    touchThreshold: 5,
    // перелистування слайдів при постійному швидкому клацанні на кнопці.
    waitForAnimate: false,
    // Величина слайду відповідає ширині картинки у ньому
    variableWidth: true,
    //Параметр кількості рядків в ствобці (по 2-3 фото) в одому слайді.
    rows: 1,
    // Кількість слайдів в області бачення

    //* Перекинути стрілки та крапки в потрібний нам div.arrows-wrap
    appendArrows: $('.slider__arrows'),
  });
  $('.slider-left').slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    infinite: true,
    // Налаштування автопрокрутки
    autoplay: false,
    autoplaySpeed: 1000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    // Налаштування Свопа на ДЕСКТОПІ
    draggable: true,
    // Налаштування Свопа на ПЛАНШЕТІ та ТЕЛЕФОНІ
    swipe: true,
    // Величина прокрутки слайда, для того, щоб він спрацював
    touchThreshold: 5,
    // перелистування слайдів при постійному швидкому клацанні на кнопці.
    waitForAnimate: false,
    // Величина слайду відповідає ширині картинки у ньому
    variableWidth: true,
    //Параметр кількості рядків в ствобці (по 2-3 фото) в одому слайді.
    rows: 1,
    appendArrows: $('.slider-left__arrows'),
  });
});
