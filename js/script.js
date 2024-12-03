// switch theme

const switcherTheme = document.querySelectorAll('[data-theme]');


if (switcherTheme) {
	switcherTheme.forEach(switcher => {
		switcher.addEventListener('click', (e) => {
			const wrapper = switcher.closest('.theme-switcher')
			const activeButton = wrapper.querySelector('.theme-switcher__button._active')
			activeButton.classList.remove('_active')
			
			let mode = switcher.dataset.theme
			const currentlyActiveButton = wrapper.querySelector(`.theme-switcher__${mode}`)
			currentlyActiveButton.classList.add('_active')

			if (mode === "light") { 
				document.body.classList.remove('dark')
			} else if (mode === "dark") {
				document.body.classList.remove('light')
			}

			document.body.classList.add(`${mode}`)
			localStorage.setItem('theme-azat', mode)

		})

		let activeTheme = localStorage.getItem('theme-azat')

		if (activeTheme === "light") {
			document.body.classList.remove('dark')
		} else if (activeTheme === "dark") {
			const lightButtons = document.querySelectorAll('.theme-switcher__light'),
				darkButtons = document.querySelectorAll('.theme-switcher__dark')
			lightButtons.forEach(lightButton => {
				lightButton.classList.remove('_active')
			});

			darkButtons.forEach(darkButton => {
				darkButton.classList.add('_active')
			});

			document.body.classList.add('dark')
			
		}
	});
}

// scroll to section

const scrollTriggers = document.querySelectorAll('.scroll-link');

if (scrollTriggers) {
	scrollTriggers.forEach(scrollTrigger => {
		scrollTrigger.addEventListener('click', (e) => {
			e.preventDefault()
			let id = scrollTrigger.getAttribute('href').replace('#', '')
			const section = document.getElementById(id)
			if (section) {
				window.scroll({
					top: section.offsetTop,
					behavior: 'smooth'
				});
			} else {
				window.scroll({
					top: 0,
					behavior: 'smooth'
				});
			}
		})
		
	});
}

// pop ups

const popupTriggers = document.querySelectorAll('.pop-ip-link');

if (popupTriggers) {

	popupTriggers.forEach(popupTrigger => {
		popupTrigger.addEventListener('click', (e) => {
			e.preventDefault()
			let id = popupTrigger.getAttribute('href').replace('#', '')
			const section = document.getElementById(id)
			section.classList.add('_active')
			document.body.classList.add('_lock')
		})
	});
	
}

// close pop-up

const closeButtons = document.querySelectorAll('.close-pop-up');
if (closeButtons) {

	closeButtons.forEach(closeButton => {
		closeButton.addEventListener('click', (e) => {
			const popup = closeButton.closest('.pop-up');
			popup.classList.remove('_active')
			document.body.classList.remove('_lock')
		})
	});
	
}

// contact form code country

const input = document.querySelector("#phone");
window.intlTelInput(input, {
	initialCountry: "lv",
	separateDialCode: true,
});