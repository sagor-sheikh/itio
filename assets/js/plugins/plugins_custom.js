"use strict";
document.addEventListener("DOMContentLoaded", function () {
  $(function ($) {

    // Hero Section button click to popup play video jquery plugin code.
    $('.video').magnificPopup({
      type: 'iframe',
    });

    $('.gallery').each(function () { // the containers for all your galleries
      $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled: true
        }
      });
    });

    // Feedback Section Slick slider
    $(".blogdetails__slider").slick({
      centerMode: true,
      centerPadding: "",
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 1500,
    });

    $(".testimonial__slider").slick({
      centerMode: true,
      centerPadding: "0px",
      slidesToShow: 3,
      arrows: false,
      // prevArrow: $(".prev-feedback"),
      // nextArrow: $(".next-feedback"),
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            centerMode: true,
            centerPadding: "0px",
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            centerMode: true,
            centerPadding: "0px",
            slidesToShow: 1,
          },
        },
      ],
    });

    // Odometer Starts Here
    // Odometer
    $(".odometer").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          var section = $(this).closest(".counters");
          section.find(".odometer").each(function () {
            $(this).html($(this).attr("data-odometer-final"));
          });
        }
      });
    });

  });
});
