"use strict";
document.addEventListener("DOMContentLoaded", function () {
  $(function ($) {
    // Feedback Section Slick slider
    // $("card_slider").slick({
    //   centerMode: true,
    //   centerPadding: "",
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   arrows: true,
    //   // nextArrow: '<span class="right-arrow slider-arrow"><i class="fa-solid fa-arrow-right"></i></span>',
    //   // prevArrow: '<span class="left-arrow slider-arrow"><i class="fa-solid fa-arrow-left"></i></span>',
    //   responsive: [
    //     {
    //       breakpoint: 1199,
    //       settings: {
    //         centerMode: true,
    //         centerPadding: "",
    //         slidesToShow: 1,
    //         arrows: false,
    //         autoplay: true,
    //         autoplaySpeed: 2000,
    //       },
    //     },
    //   ],
    // });

    // $(".card_slider").slick({
    //   centerMode: true,
    //   centerPadding: "0px",
    //   slidesToShow: 3,
    //   prevArrow: $(".prev-feedback"),
    //   nextArrow: $(".next-feedback"),
    //   responsive: [
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         arrows: false,
    //         centerMode: true,
    //         centerPadding: "0px",
    //         slidesToShow: 2,
    //       },
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         arrows: false,
    //         centerMode: true,
    //         centerPadding: "0px",
    //         slidesToShow: 1,
    //       },
    //     },
    //   ],
    // });

    // Odometer Starts Here
    // Odometer
    // $(".odometer").each(function () {
    //   $(this).isInViewport(function (status) {
    //     if (status === "entered") {
    //       var section = $(this).closest(".counters");
    //       section.find(".odometer").each(function () {
    //         $(this).html($(this).attr("data-odometer-final"));
    //       });
    //     }
    //   });
    // });
    // Odometer Ends Here

    // Typed js Starts Here
    // var typed = new Typed("#typed", {
    //   strings: ["Designer"],
    //   typeSpeed: 100,
    //   backSpeed: 100,
    //   backDelay: 1000,
    //   loop: true,
    // });
    // Typed js Ends Here

    // Nice Selector Starts
    $("select").niceSelect();
    // Nice Selector Ends

  });
});
