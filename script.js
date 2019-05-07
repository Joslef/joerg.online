localStorage.setItem(
	'mode',
	(localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark',
);
localStorage.getItem('mode') === 'dark'
	? document.querySelector('body').classList.add('dark')
	: document.querySelector('body').classList.remove('dark');

document.addEventListener('DOMContentLoaded', event => {
	(localStorage.getItem('mode') || 'dark') === 'dark'
		? document.querySelector('body').classList.add('dark')
		: document.querySelector('body').classList.remove('dark');
});

/* switches between the the css files styleLight.css and styleDark.css */
// function changeCSS(cssFile, cssLinkIndex) {
// 	var oldlink = document.getElementsByTagName('link').item(cssLinkIndex);

// 	var newlink = document.createElement('link');
// 	newlink.setAttribute('rel', 'stylesheet');
// 	newlink.setAttribute('type', 'text/css');
// 	newlink.setAttribute('href', cssFile);
// 	document.head.appendChild(newlink);

// 	document
// 		.getElementsByTagName('head')
// 		.item(0)
// 		.replaceChild(newlink, oldlink);
// }

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
