// Класи слайдерів на сторінці Hotel section Hotel-rooms
$('.hotel-rooms__slider').slick({
	// кількість слайдів для відображення -2
	slidesToShow: 2,
	// скролл по 1 слайду
	slidesToScroll: 1,
	// прибирає відстань між слайдами
	variableWidth: true,
	// прив'язує контейнер зі стрілочками до слайдеру
	appendArrows: $('.hotel-rooms__slider-arrow'),

});

