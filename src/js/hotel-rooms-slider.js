new Swiper(".hotel-rooms__slider", {
	navigation: {
		nextEl: '.swiper-btn__next',
		prevEl: '.swiper-btn__prev'
	},
	// Цикл слайдеру без кінця, по колу
	loop: true,
	// Кількість слайдів для одночасного показу
	slidesPerView: 2,
	// Відстань між слайдами
	// spaceBetween: 40,

	breakpoints: {
		// when window width is >= 320px
		320: {
		  spaceBetween: 16
		},

		// when window width is >= 1024px
		1024: {
		  spaceBetween: 40
		},
	  }
});