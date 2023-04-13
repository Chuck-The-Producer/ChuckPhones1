const navMenu = document.getElementById('nav_menu'),
	navToggle = document.getElementById('nav_toggle'),
	navClose = document.getElementById('nav_close')

	if(navToggle){
		navToggle.addEventListener('click', () =>{
			navMenu.classList.add('show-menu')
		})
	}

	if(navClose){
		navClose.addEventListener('click', () =>{
			navMenu.classList.remove('show-menu')
		})
	}

	/* Remove Menu Mobile */
const navLink = document.querySelectorAll('.nav-links')

function linkAction(){
	const navMenu = document.getElementById('nav_menu')

	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Change Background Header */
function scrollHeader(){
	const header = document.getElementById('header')

	if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/* ============= Scroll Reveal Animation ============= */
const sr = ScrollReveal({
	distance: '60px',
	duration: 2500,
	delay: 400,
	reset: true
})

sr.reveal('.home-header .section-title', {delay:600})
sr.reveal('.home-footer', {delay: 700})
sr.reveal('.home-img', {delay: 900, origin: 'top'})