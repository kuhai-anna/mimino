// Наступний рядок це стандартний рядок для підключення JQuery
$(document).ready(function () {
  $('.slider-right').slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    infinite: true,

    // Величина прокрутки слайда, для того, щоб він спрацював
    touchThreshold: 20,
    // перелистування слайдів при постійному швидкому клацанні на кнопці.
    waitForAnimate: true,
    // Величина слайду відповідає ширині картинки у ньому
    variableWidth: true,
    //Параметр кількості рядків в ствобці (по 2-3 фото) в одому слайді.
    rows: 1,

    //* Перекинути стрілки та крапки в потрібний нам div.arrows-wrap
    appendArrows: $('.slider-right__arrows'),
  });
  $('.slider-left').slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    infinite: true,

    // Величина прокрутки слайда, для того, щоб він спрацював
    touchThreshold: 20,
    // перелистування слайдів при постійному швидкому клацанні на кнопці.
    waitForAnimate: true,
    // Величина слайду відповідає ширині картинки у ньому
    variableWidth: true,
    //Параметр кількості рядків в ствобці (по 2-3 фото) в одому слайді.
    rows: 1,
    appendArrows: $('.slider-left__arrows'),
  });
});
