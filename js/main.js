(() => {
	console.log('fired');


	const buttons = document.querySelector('#navList'),
		  banner = document.querySelector('#photos'),
		  name = document.querySelector('h1'),
		  description = document.querySelector('.text');





	const name = [
	['Emily', `Hi! My name is Emily Barnes and I am in my first year of the Interactive Media Design program.`],

	['About Me', `I love food, and travelling as well as playing the piano. I enjoy doing design work as well!`],

	];




	function animateBanner(event) {
		if (event.target.className.includes('buttonContainer')) {
		let multiplier = event.target.dataset.offset,
			offset = 100;


		banner.style.right = `${multiplier * offset}px`;

		}
		
	}


	button.addEventListener('click', animateBanner);
})();
