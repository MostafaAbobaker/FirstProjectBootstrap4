/*global $, document, window */
$(document).ready(function () {
	"use strict";
	var winH = $(window).height(),
		miniH = $(".mini-bar").innerHeight(),
		navH = $(".navbar").innerHeight();
	$(".slider, .carousel-item").height(winH - (miniH + navH));
	
	$(".navbar-light .navbar-nav li").click(function () {
		$(this).addClass("active").siblings().removeClass("active");
	});
	
	$(".navbar-light .navbar-nav .nav-link").click(function () {
		$("html, body").animate({
			scrollTop : $($(this).attr("href")).offset().top
		}, 1000);
	});
	
	
	$(".featuered ul li").click(function () {
		$(this).addClass("active").siblings().removeClass("active");
		/*console.log($(this).data("class"));*/
		if ($(this).data("class") === "all") {
			$(".featuered .shuffle-img .col-md").css("opacity", 1);
		} else {
			$(".featuered .shuffle-img .row .col-md").css("opacity", 0.2);
			$($(this).data("class")).css("opacity", 1);
		}
	});
	
	/* Change Background Color From Next and Prev in Teatimonials */
	/*var testiRight = $(".testimonials .carousel-control-next-icon"),
		testiLeft = $(".testimonials .carousel-control-prev-icon");
	
	if ($(".carousel-inner .carousel-item:first-child").hasClass("active")) {
		testiRight.css("backgroundColor", "#ec1c23");
		console.log("active");
	} else {
		testiRight.css("backgroundColor", "#000");
		
		console.log("Not active");
	}
	if ($(".carousel-inner .carousel-item:last-child").hasClass("active")) {
		testiLeft.css("backgroundColor", "#ec1c23");
		console.log("active");
	} else {
		testiLeft.css("backgroundColor", "#000");
		console.log("Not active");
	}*/
});