
// second slider start
$(".owl-carousel").owlCarousel({
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 100,
  items: 2,
  nav: true,
  loop: true,





});




// Hero first hero slider start
document.getElementById('next').onclick = function () {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function () {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
}

// hero slider end


// third Slider
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'ture',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicsBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// media query

function myFunction(x) {
  if (x.matches) { // If media query matches
    var swiper = new Swiper(".slide-content", {
      slidesPerView: 1,
      spaceBetween: 25,
      loop: true,
      centerSlide: 'true',
      fade: 'ture',
      grabCursor: 'true',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicsBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else if (y.matches) {
    var swiper = new Swiper(".slide-content", {
      slidesPerView: 2,
      spaceBetween: 25,
      loop: true,
      centerSlide: 'true',
      fade: 'ture',
      grabCursor: 'true',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicsBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

  } else if (z.matches) {
    var swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centerSlide: 'true',
      fade: 'ture',
      grabCursor: 'true',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicsBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

  } else {
    var swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centerSlide: 'true',
      fade: 'ture',
      grabCursor: 'true',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicsBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
var z = window.matchMedia("(max.width: 576px)");
var y = window.matchMedia("(max-width: 425px)");
var x = window.matchMedia("(max-width: 375px)");
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



// Second slider start from here


function travelAndTourism() {
  // const element = document.getElementById("tourism");
  // element.remove();

  //01 Select first child element:
  const element = document.getElementById("Inbound").children[0];


  // Create a new text node:
  const Inbound = document.createTextNode("Inbound Tourism");


  // Replace the text node:
  element.replaceChild(Inbound, element.childNodes[0]);


  //02 Select first child element:
  const elementONe = document.getElementById("Outbound").children[0];


  // Create a new text node:
  const Outbound = document.createTextNode("Outbound Tourism");


  // Replace the text node:
  elementONe.replaceChild(Outbound, elementONe.childNodes[0]);

  //03 Select first child element:
  const elementTwo = document.getElementById("Medical").children[0];


  // Create a new text node:
  const Medical = document.createTextNode("Medical Tourism");


  // Replace the text node:
  elementTwo.replaceChild(Medical, elementTwo.childNodes[0]);

  //04 Select first child element:
  const elementThree = document.getElementById("Room").children[0];


  // Create a new text node:
  const Room = document.createTextNode("Room Booking");


  // Replace the text node:
  elementThree.replaceChild(Room, elementThree.childNodes[0]);


}

function hrm() {
  // const element = document.getElementById("tourism");
  // element.remove();

  //01 Select first child element:
  const element = document.getElementById("Inbound").children[0];


  // Create a new text node:
  const Talent = document.createTextNode("Talent Acquisition strategy development");


  // Replace the text node:
  element.replaceChild(Talent, element.childNodes[0]);


  //02 Select first child element:
  const elementONe = document.getElementById("Outbound").children[0];


  // Create a new text node:
  const Outbound = document.createTextNode("Training Initiatives");


  // Replace the text node:
  elementONe.replaceChild(Outbound, elementONe.childNodes[0]);

  //03 Select first child element:
  const elementTwo = document.getElementById("Medical").children[0];


  // Create a new text node:
  const Medical = document.createTextNode("Recruitment Process Outsourcing (RPO)");


  // Replace the text node:
  elementTwo.replaceChild(Medical, elementTwo.childNodes[0]);

  //04 Select first child element:
  const elementThree = document.getElementById("Room").children[0];


  // Create a new text node:
  const Room = document.createTextNode("Career opportunities (Globally)");


  // Replace the text node:
  elementThree.replaceChild(Room, elementThree.childNodes[0]);


}

// Tourrism page start from here

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}