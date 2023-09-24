"use strict";
document.addEventListener("DOMContentLoaded", function () {
  $(function ($) {

    // Navbar
    const toggleButtons = document.querySelectorAll(".navbar__list-drop");
    const menu = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar__menu");

    menu.onclick = () => {
      menu.classList.toggle("active");
      navbar.classList.toggle("right-open");
    };




// Define your media query
const mediaQuery = window.matchMedia('(max-width: 991px)');

// Function to handle the media query change
function handleMediaQueryChange(mediaQuery) {
  if (mediaQuery.matches) {
    (() => {
      toggleButtons.forEach((toggleButton) => {
        toggleButton.addEventListener("click", () => {
          toggleButton.firstElementChild.lastElementChild.classList.toggle("up");
          toggleButton.lastElementChild.classList.toggle("open");
        });
      });
    })();
  } else {
    (() => {
      toggleButtons.forEach((toggleButton) => {
        toggleButton.addEventListener("mouseenter", () => {
          toggleButton.firstElementChild.lastElementChild.classList.add("up");
          toggleButton.lastElementChild.classList.add("open");
        });

        toggleButton.addEventListener("mouseleave", () => {
          toggleButton.firstElementChild.lastElementChild.classList.remove("up");
          toggleButton.lastElementChild.classList.remove("open");
        });
      });
    })();
  }
}

// Initial check of the media query
handleMediaQueryChange(mediaQuery);

// Add a listener to handle changes in the media query
mediaQuery.addListener(handleMediaQueryChange);

    // Pages TopUp Starts
    var btn = $('#backtotopup');
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, '300');
    });
    // Pages TopUp Ends
    // Progress Bar Starts


    $(".slide-toggle").on("click", function () {
      $(".box").toggleClass("show");
    });

    // Preloader Starts
    $(".preloader").delay(300).animate({
      "opacity": "0"
    }, 1000, function () {
      $(".preloader").css("display", "none");
    });
    // Preloader Ends

    new WOW().init();
  });
});
