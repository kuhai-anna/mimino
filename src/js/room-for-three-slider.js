// Класи слайдерів на сторінці Hotel section Hotel-rooms
$('.rooms__slider').slick({
	// кількість слайдів для відображення -2
	slidesToShow: 2,
	// скролл по 1 слайду
	slidesToScroll: 1,
	// прибирає відстань між слайдами
	variableWidth: true,
	// прив'язує контейнер зі стрілочками до слайдеру
	appendArrows: $('.rooms__slider-arrow'),

});

