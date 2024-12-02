// switch theme

const switcherTheme = document.querySelectorAll('.theme-switcher__button');


if (switcherTheme) {
	switcherTheme.forEach(switcher => {
		switcher.addEventListener('click', (e) => {

			const activeButton = document.querySelector('.theme-switcher__button._active')
			activeButton.classList.remove('_active')
			
			
			switcher.classList.add('_active')
			let mode = switcher.dataset.theme

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
			const lightButton = document.querySelector('.theme-switcher__light'),
				darkButton = document.querySelector('.theme-switcher__dark')
			lightButton.classList.remove('_active')
			darkButton.classList.add('_active')

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


const input = document.querySelector("#phone");
window.intlTelInput(input, {
	initialCountry: "lv",
	separateDialCode: true,
});