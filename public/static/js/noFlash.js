/**
 * NoFlash.js
 * Allows to load the "darkmode" class before the execution of the page
 * Prevents page flickering with Firefox / Safari
 */
(function async () {
	let getTheme = localStorage.getItem('theme'), classname = 'nd-d7a0rkM'

	if(getTheme === 'dark') document.documentElement.classList.add(classname)
	else document.documentElement.classList.remove(classname)
})()