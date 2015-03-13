head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });
	var clock;
	var futureDate  = new Date("March 20, 2015 12:02 PM EDT");
	var currentDate = new Date();

	// Calculate the difference in seconds between the future and current date
	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

	// Calculate day difference and apply class to .clock for extra digit styling.
	function dayDiff(first, second) {
		return (second-first)/(1000*60*60*24);
	}

	if (dayDiff(currentDate, futureDate) < 100) {
		$('.clock').addClass('twoDayDigits');
	} else {
		$('.clock').addClass('threeDayDigits');
	}

	if(diff < 0) {
		diff = 0;
	}

	// Instantiate a coutdown FlipClock
	clock = $('.clock').FlipClock(diff, {
		clockFace: 'DailyCounter',
		language:'ru-ru',
		countdown: true
	});

	$('.slider').flickity({
	  // options
	  cellAlign: 'left',
	  wrapAround: true,
	  contain: true
	});
});