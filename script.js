//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


//scroll sections
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a')

window.onscroll = () => {

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < (offset + height)) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
      sec.classList.add('show-animate');
    }
    else {
      sec.classList.remove('show-animate');
    }
  });
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);


  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}

function makeCall() {
  // Replace 'your-number' with your actual phone number
  var phoneNumber = '+94769459050';

  // Construct the tel URI
  var telURI = 'tel:' + phoneNumber;

  // Open the phone app to make the call
  window.location.href = telURI;
}





window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove("hidden");
  } else {
    navbar.classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
}

// scroll-hide-navbar.js


let prevScrollpos = window.scrollY || window.pageYOffset;
const navbar = document.getElementById("navbar");
const logo = document.querySelector(".logo");

window.addEventListener("scroll", function () {
  const currentScrollPos = window.scrollY || window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos === 0) {
    navbar.classList.remove("hidden");
    logo.classList.remove("hidden");
  } else {
    navbar.classList.add("hidden");
    logo.classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
});
