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

    (() => {
      toggleButtons.forEach((toggleButton) => {
        toggleButton.addEventListener("click", () => {
          toggleButton.firstElementChild.lastElementChild.classList.toggle("up");
          // toggleButton.lastElementChild.classList.toggle("open");
        });
      });
    })();

    // Profile
    // $(".user_chat").on("click", function () {
    //   $('.chat_area').toggleClass("show");
    // $(this).parent().next('.chat_area').toggleClass("show");

    // });



    // Search Form setup js

    // $(".nav-search").on("click", function () {
    //   $(".search-input").toggleClass("show");
    // });
    //--clickable menu--




    // $(".mclick").on("click", function () {
    //   $(this).toggleClass("reply-active");
    //   $(this).parent().next(".menucontent").slideToggle();
    // });

    //--clickable menu--

    // Catagory Selete all checkboxes

    // const selectAllCheckbox = $("#selectAll");
    // const checkboxes = $(".checkbox");

    // selectAllCheckbox.on("change", function () {
    //   checkboxes.prop("checked", selectAllCheckbox.prop("checked"));
    // });

    // checkboxes.on("change", function () {
    //   if (!this.checked) {
    //     selectAllCheckbox.prop("checked", false);
    //   }
    // });

    // Main content Right area
    // $(document).ready(function () {
    // $(".slide-toggle").click(function () {
    //   $(".box").animate({
    //     width: "toggle",
    //   });
    // });

    //   $(".slide-toggle").on("click", function () {
    //     $(".box").toggleClass("show");
    //   });

    //--clickable menu--
    //   $(".left-nav-icon").on("click", function () {
    //     $(".left-nav-area").toggleClass("show");
    //   });
    // });

    // Trade Toggle Volue Page
    // $(".vol_toggles").on("click", function () {
    //   $(this).toggleClass("reply-active");
    //   $(this).parent().next(".vol_toggle_twos").slideToggle();
    // });

    // $(".vol_toggle").on("click", function () {
    //   $(this).toggleClass("reply-active");
    //   $(this).parent().next(".vol_toggle_two").slideToggle();
    // });

    // button Style

    // Preloader

    // Preloader Starts
    // $(".preloader").delay(300).animate({
    //   "opacity": "0"
    // }, 800, function () {
    //   $(".preloader").css("display", "none");
    // });
    // Preloader Ends

    new WOW().init();
  });
});
