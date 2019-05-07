/* check if the `mode` property in the local storage is ‘dark’ (and defaults to dark if it’s not set yet, using the `||` operator), and I set the opposite of that in the local storage. */
localStorage.setItem(
	'mode',
	(localStorage.getItem('mode') || 'dark') === 'dark' ? 'dark' : 'light',
);
localStorage.getItem('mode') === 'dark'
	? document.querySelector('body').classList.add('dark')
	: document.querySelector('body').classList.remove('dark');

/* as soon as the DOM loads and checks if the mode is dark. If so, it adds the dark class to the body HTML element */
document.addEventListener('DOMContentLoaded', event => {
	(localStorage.getItem('mode') || 'dark') === 'dark'
		? document.querySelector('body').classList.add('dark')
		: document.querySelector('body').classList.remove('dark');
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
	document.getElementById('mySidenav').style.width = '250px';
	// document.getElementById('main').style.marginLeft = '250px'; // deactivate if you want to use sidenav push w/opacity
	// document.getElementById('main').style.opacity = '0.4'; // deactivate if you want to use sidenav push w/opacity
	document.addEventListener('click', function closeNav() {});
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
	document.getElementById('mySidenav').style.width = '0';
	// document.getElementById('main').style.marginLeft = '0'; // deactivate if you want to use sidenav push w/opacity
	// document.getElementById('main').style.opacity = '1'; // deactivate if you want to use sidenav push w/opacity
}

/* click in the sidenav will close it */
document.getElementById('mySidenav').addEventListener('click', closeNav);

/* click outside the sidenav will close it */
window.addEventListener('mousedown', function(event) {
	let nav = document.getElementById('mySidenav');
	if (event.target != nav) {
		closeNav();
	}
});
