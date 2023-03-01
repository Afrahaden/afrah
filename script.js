// Get the navbar element
const navbar = document.querySelector('.navbar');

// Get the scroll-up button element
const scrollUpBtn = document.querySelector('.scroll-up-btn');

// Get the menu button element
const menuBtn = document.querySelector('.menu-btn');

// Get all menu items
const menuItems = document.querySelectorAll('.navbar .menu li a');

// Add event listener for window scroll
window.addEventListener('scroll', function () {
// sticky navbar on scroll script
if (window.scrollY > 20) {
navbar.classList.add('sticky');
} else {
navbar.classList.remove('sticky');
}

// scroll-up button show/hide script
if (window.scrollY > 500) {
scrollUpBtn.classList.add('show');
} else {
scrollUpBtn.classList.remove('show');
}
});

// Add event listener for scroll-up button click
scrollUpBtn.addEventListener('click', function () {
// Smoothly scroll to top of the page
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});

// Add event listener for menu items click
menuItems.forEach(function (item) {
item.addEventListener('click', function () {
// Smoothly scroll to the corresponding section
document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});
});
});

// Add event listener for menu button click
menuBtn.addEventListener('click', function () {
// Toggle active class on menu and menu button
navbar.querySelector('.menu').classList.toggle('active');
menuBtn.querySelector('i').classList.toggle('active');
});

// Owl carousel script
const carousel = document.querySelector('.carousel');
if (carousel) {
const carouselOptions = {
margin: 20,
loop: true,
autoplay: true,
autoplayTimeOut: 2000,
autoplayHoverPause: true,
responsive: {
0: {
items: 1,
nav: false
},
600: {
items: 2,
nav: false
},
1000: {
items: 3,
nav: false
}
}
};

// Initialize owl carousel
const owl = new OwlCarousel(carousel, carouselOptions);
}