new Swiper(".hotel-rooms__slider", {

	// швидкість готання слайдів
	speed: 800,

	// Стрілки
	navigation: {
		nextEl: '.swiper-btn__next',
		prevEl: '.swiper-btn__prev'
	},

	// Цикл слайдеру без кінця, по колу
	loop: true,

    slidesPerView: 2,
	// відстань між слайдами
	spaceBetween: 16,

	// адаптив 
	breakpoints: {

		// when window width is >= 1024px
		1024: { 
			// відстань між слайдами
			spaceBetween: 40,

			// Кількість слайдів для одночасного гортання
			slidesPerGroup: 2,
		},
	},

	// Чутливість свайпу
	touchRatio: 1,

	// Курсор при свайпі
	grabCursor: true,

	// Переключення при кліку на слайд
	slideToClickedSlide: true,

	// Керування слайдером з клавіатури
	keyboard: {
		// увімкнути
		enabled: true,

		// увімкнути лише коли слайдер в межах вьюпорта
		onlyInViewport: true,

		// увімкнути керування клавішами pageUp, pageDown
		pageUpDown: true,

	},

});