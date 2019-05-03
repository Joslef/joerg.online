/* switches between the the css files styleLight.css and styleDark.css */
function changeCSS(cssFile, cssLinkIndex) {
	var oldlink = document.getElementsByTagName('link').item(cssLinkIndex);

	var newlink = document.createElement('link');
	newlink.setAttribute('rel', 'stylesheet');
	newlink.setAttribute('type', 'text/css');
	newlink.setAttribute('href', cssFile);
	document.head.appendChild(newlink);

	document
		.getElementsByTagName('head')
		.item(0)
		.replaceChild(newlink, oldlink);
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
	document.getElementById('mySidenav').style.width = '250px';
	document.getElementById('main').style.marginLeft = '250px';
	document.getElementById('main').style.opacity = '0.4';
	document.addEventListener('click', function closeNav() {});
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
	document.getElementById('mySidenav').style.width = '0';
	document.getElementById('main').style.marginLeft = '0';
	document.getElementById('main').style.opacity = '1';
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
